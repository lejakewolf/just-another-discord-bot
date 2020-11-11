const { MessageEmbed }= require('discord.js')

const { searchMDN } = require('../api.js');

const command = {
	name: 'mdn',
	async execute(client, msg, ...args) {
		let search = args.join('+');

		let res = await searchMDN(search);
		if(typeof res == 'string') {
			msg.channel.send(res);
			return
		} 

		let desc = res[0];
		let moreDesc = res[1];
		let syntax = res[2];
		let mdnURL = res[3];
		let title = res[4];

		function getMoreDesc() {
			if (typeof moreDesc === 'undefined' | moreDesc === 'undefined') {
				return '';
			}
			return '\n\n' + moreDesc;
		}
 
		syntax = syntax.replace(/\\/g, '');

		let embed = new MessageEmbed()
		.setTitle(`Docs for ${title}`)
		.setDescription(desc + getMoreDesc() + `\n\n[Check out the docs here](${mdnURL})`)
		.addField('syntax', '```\n' + syntax + '```')
		.setFooter('', msg.author.avatarURL);

		msg.channel.send(embed);
		
	}
}

module.exports = command;