const command =  {
	name: 'time',
	async execute(client, msg, ...args){
		let cmdName = args.shift();
		let cmd = client.commands[cmdName];
		if(!cmd){
			cmd = client.aliases[cmdName];
			if(!cmd){
				return msg.channel.send(`${cmdName} is not a valid command!`);
			}
		}
		msg.channel.send(`\`Timing the command ${cmd.name}.\``)
		let startTime = new Date();
		cmd.execute(client, msg, args);
		let endTime = new Date();
		let ms = endTime - startTime;
		ms = ms / 1000;
		msg.channel.send(`\`The command took ${ms.toFixed(2)}.\``);
		
	}
}

module.exports = command;