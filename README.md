## Just another discord bot
"Just another discord bot" is just another discord bot written in discord.js  
It's a nice bot, I guess.

### Installation
###### Why? There's a million other's out there just like this one.

First clone the repo
```sh
git clone https://github.com/lejakewolf/just-another-discord-bot.git
```
Then `cd` into it
```sh
cd just-another-discord-bot
```
Install dependencies

###### I like using [pnpm](https://github.com/pnpm/pnpm) but you can use whatever.

```sh
npm install
```

Then make changes to `.env.example` and rename it to `.env`
```sh
nano .env.example #make changes and save
mv .env.example .env
```

Now just run the bot 
```
node bot.js
```

###### Also run the server for the image manipulation command (`commands/boo.js`)
```sh
node server.js
```

### I covered everything.. right?
Oh, right. No support or pull requests will be accepted for this repo. ~~No one will want to use this anyway. And I don't want you to.~~

#### Dependencies
- **Bot Dependencies**
	- [discord.js](https://github.com/discordjs/discord.js)
	- [dotenv](https://github.com/motdotla/dotenv)
	- [node-fetch](https://github.com/node-fetch/node-fetch)
	- [node-html-parser](https://github.com/taoqf/node-html-parser)
	- [turndown](https://github.com/domchristie/turndown)
- **Image Manipulation Server Dependencies**
	- [express](https://github.com/expressjs/express) 
	- [body-parser](https://github.com/expressjs/body-parser)
	- [morgan](https://github.com/expressjs/morgan)
	- [canvas](https://github.com/Automattic/node-canvas)

##### See `package.json` for version numbers of the above dependencies
	







