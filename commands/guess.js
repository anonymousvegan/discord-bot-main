let randomNumbers = [];
module.exports = {
  name: "guess",
  aliases: ["g"],
  description: "Guess the number!",
  cooldown: 2,
  guildOnly: true,
  args: true,
  usage: false,
  // eslint-disable-next-line no-unused-vars
  execute(msg, args) {
    const argument = args[0];  
    let username = msg.author.username 
    if (argument === "start") {
      let tempObject = {}  
      let randomNumber = Math.floor(Math.random() * 10);
      tempObject.username = username;
      tempObject.number = randomNumber;
      randomNumbers.forEach( (object, index) => {
        if(object.username == username){
          randomNumbers.splice(index, 1);
        }
      });
      randomNumbers.push(tempObject);
      console.log(randomNumbers);
      return msg.reply(`The game for you has started. Please guess the number!`); 
    }
    let found = false;
    randomNumbers.forEach( (object, index) => {
      if(object.username == username ){
        found = true;
        if(object.number == argument){
          randomNumbers.splice(index, 1);
          console.log(randomNumbers);
          return msg.reply("Congrats you won!");
        }
        return msg.reply("You stupid programmer, you know nothing!");
      }
    });
    if(!found) {
      return msg.reply("You must start game first!")
    }
    // if (randomNumber === undefined) {
    //   randomNumber = Math.floor(Math.random() * 10);
    //   return msg.reply("The game has started. Please guess the number!");
    // } else {
    //   if (randomNumber === parseInt(argument)) {
    //     randomNumber = undefined;
    //     return msg.reply("Congrats you won!");
    //   } else {
    //     return msg.reply("You stupid programmer, you know nothing!");
    //   }
    // }
  },
};
