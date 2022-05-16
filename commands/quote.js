const { MessageFlags } = require("discord.js");

module.exports = {
    name: "quote",
    aliases: ["q"],
    description: "quote something!",
    cooldown: 5,
    guildOnly: true,
    args: false,
    usage: false,
    // eslint-disable-next-line no-unused-vars
    execute(msg, args){
        const fetch = require("node-fetch")
        let author = args.join(" ");
        let fetchAddress = "";
        if(author == ""){
            fetchAddress = `https://api.quotable.io/random"`
        }
        else{
            fetch(`https://api.quotable.io/authors?slug=${author}`)
            .then(response => {
            return response.json();
            })
            .then( (result) => {
            if(result.count > 0){
                fetchAddress = `https://api.quotable.io/random${author ?`?author=${author}` : ""}`
            }
            else{
                msg.reply("This author is not found, but, there is some random quote: \n");
            }  
        })
        }
        fetch(fetchAddress)
        .then(response => {
            return response.json();
        })
        .then( (result) => {
            msg.reply(result.content + " " + result.author)
        })
    }
}