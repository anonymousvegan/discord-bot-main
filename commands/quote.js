module.exports = {
    name: "quote",
    aliases: ["q"],
    description: "quote something!",
    cooldown: 5,
    guildOnly: true,
    args: true,
    usage: false,
    // eslint-disable-next-line no-unused-vars
    execute(msg, args){
        const fetch = require("node-fetch")
        let author = args.join(" ");
        console.log((`https://api.quotable.io/random${author ?`?author=${author}` : ""}`))
        fetch((`https://api.quotable.io/random${author ?`?author=${author}` : ""}`))
        .then(response => {
            return response.json();
        })
        .then( (result) => {
            msg.reply(result.content + " " + result.author)
        })
    }
}