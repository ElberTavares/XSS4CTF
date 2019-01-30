I adapted a bot for ctf (or other purposes, it depends on your creativity), made in phantomjs, it serves to simulate some functions of a browser, the bot will visit the sites that are passed by the 'url' parameter and will execute the javascript code of the page.

This is the first thing I did in phantomjs, if you find any errors or have any ideas to improve the bot, you will be welcome.

# Configs

> var pass = 'youPass';

Set a password so that only you and your application have access to the bot.

> var timeout = 3000;

Select the time the bot will wait before returning "timeout".

> phantom.addCookie({});

Set the application cookie.

> var port = '8080';

The port where your bot will run.

# starting

>$ phantomjs xss4ctf.js

## Listening

http://127.0.0.1:8080/?url=https://www.somesite.com&pass=password

# References

All the credits for these guys:

Riley Kidd - https://rileykidd.com/2015/05/06/how-to-add-an-xss-able-bot-to-your-ctf/

Artjom B.  - https://stackoverflow.com/questions/26920471/phantomjs-get-url-parameter

