var args = require('system').args;
var page = require('webpage').create();
var pass = 'password';
var port = '8080';
var webserver = require('webserver');
var server = webserver.create();
var service = server.listen(port, function(request, response) {
  response.statusCode = 200;
  var site = JSON.stringify(parseGET(request.url), undefined, 4);
  response.write(site);
  response.close();
});

function parseGET(url){
  var query = url.substr(url.indexOf("?")+1);
  var result = {};
  query.split("&").forEach(function(part) {
  var e = part.indexOf("=")
  var key = part.substr(0, e);
  var value = part.substr(e+1);
  result[key] = decodeURIComponent(value);});
  if(result['pass'] != pass){console.log('Error pass');}
  else{  
      var url = result['url'];
      request(url)
      return result['url'];
  }
}

// by Riley Kidd
function request(url){
    var host = "127.0.0.1";
    var timeout = 3000;
    phantom.addCookie({
        'name': 'Flag',
        'value': 'CTF{FLAGHERE}',
        'domain': host,
        'path': '/',
        'httponly': false
    });
    page.onNavigationRequested = function(url, type, willNavigate, main) {
        console.log("[URL] URL="+url);  
    };
    page.settings.resourceTimeout = timeout;
    page.onResourceTimeout = function(e) {
        setTimeout(function(){
            console.log("[INFO] Timeout")
        }, 1);
    };
    page.open(url, function(status) {
        console.log("[INFO] rendered page");
        setTimeout(function(){
        }, 1);
    });
}

