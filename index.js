const { Client, GatewayIntentBits, DiscordAPIError, MembershipScreeningFieldType, channelLink, MessageManager, Message, MessageMentions, GuildMember } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent



    ]






});
const data2 = new SlashCommandBuilder()
    .setName("insult2")
    .setDescription("toujours hagar des daronnes")
    .addUserOption(option => option.setName("utilisateur").setDescription("qui veut tu hagar'").setRequired(true));
const data = new SlashCommandBuilder()
    .setName("insult")
    .setDescription("hagar des daronnes")
    .addUserOption(option => option.setName("utilisateur").setDescription("qui veux tu hagar").setRequired(false));

client.on("interactionCreate", interaction => {
    if (interaction.isCommand()) {
        if (interaction.commandName === "insult") {
            let user = interaction.options.getUser('utilisateur');
            if (user != undefined) {
                let insult = ['Baise tes morts', 'Si tout les idiots du village formaient un village, ça serait quand même toi lidiot du village', 'Fils de chien', 'Enculeur de pot de fleur', 'Enculeur de saucisse', 'Foudroyeur de cul', 'Demonte fion', 'Fils de viol', 'rdv gare du nord tête de fion', 'gourgandine', 'Petite salope', 'Grosse tepu', 'Suce bite', 'Gobe queue', 'Si la rue était pavée de bite, tu marcherais sur le cul', 'Sombre merde', 'Tu es finis a la pisse', 'Tu as été bercé trop près du mur', 'Tu es pas le pingouin qui glisse le plus loin sur la banquise', 'Si tout les idiots du village formaient un village, ça serait quand même toi l idiot du village', 'Fils de chien', 'Enculeur de pot de fleur', 'Fumeur de terreau', 'Bon toutou', 'Gobe-teub', 'Destructeur de fiak', 'Casse couille en chef', 'Tocard', 'Leche fion', 'Tête de cul', 'Guignolo', 'Enfant de putain', 'Enculé de ta race', 'Enculé de ta mère', 'Enculé de ta race', 'Jpense que tu as un forfait Giga Débile illimité by FDP', 'Meme la drogue est plus légale que ta sale gueule', 'A l ecole des enculés, tu es premier', 'Selon les lois de la physique, ton QI est proche du Neant', 'Ta mère aurait du avaler bordel'];
                var min = 0;
                var max = insult.length;
                var random = Math.floor(Math.random() * (max - min)) + min;

                var random_apparition_message = Math.floor(Math.random() * (100));

                interaction.reply("<@" + user.id + ">" + " " + insult[random]);
                const channel = client.channels.cache.find(channel => channel.id === interaction.channelId);

                const ayy = client.emojis.cache.find(emoji => emoji.name === "issou_double_fok");

                channel.send(`${ayy} `);


            }
        }
        if (interaction.commandName === "insult2") {
            let user = interaction.options.getUser('utilisateur');
            if (user != undefined) {
                var min = 0;
                var max = tableau_1.length;
                var random = Math.floor(Math.random() * (max - min)) + min;
                let message = "<@" + user.id + ">" + "Espèce de " + tableau_1[random];
                var min = 0;
                var max = tableau_2.length;
                var random = Math.floor(Math.random() * (max - min)) + min;
                message += " " + tableau_2[random];
                var min = 0;
                var max = tableau_3.length;
                var random = Math.floor(Math.random() * (max - min)) + min;
                message += ", " + tableau_3[random];
                var min = 0;
                var max = tableau_4.length;
                var random = Math.floor(Math.random() * (max - min)) + min;
                message += " " + tableau_4[random];
                interaction.reply(message);
            }



        }
    }


});

let tableau_1 = ["gros con", "petit salaud", "poussin", "chien", "ptite bite", "vieux batard", "sale pédé", "pauvre mec", "viel enculé", "petite taffiole", "gros fils de pute", "grosse fiote", "pauvre mec", "sous merde"];
let tableau_2 = ["de ta race", "de ta mère", "des forêts", " qui pue", "débile", "assexué", "alcoolique", "lobotomisé", "de tes morts", "sans famille", "monoboule"];
let tableau_3 = ["tu es", " tu pourrais être", "tu ressembles à", " tu pues comme", "tu me fais penser à", " tu vaux pas mieux que", "aussi futé que", "cocu comme"];
let tableau_4 = ["un parasite", " un gros naze", " un petit bouffon", "un minable", "un gland", "une sale merde", "un poussin", " l'elonna", "un gwoudodo",];
client.on("ready", () => {
    test = 0;
    console.log("bot opérationnel");
    let insult = ['Baise tes morts', 'Si tout les idiots du village formaient un village, ça serait quand même toi lidiot du village', 'Fils de chien', 'Enculeur de pot de fleur', 'Enculeur de saucisse', 'Foudroyeur de cul', 'Demonte fion', 'Fils de viol', 'rdv gare du nord tête de fion', 'gourgandine', 'Petite salope', 'Grosse tepu', 'Suce bite', 'Gobe queue', 'Si la rue était pavée de bite, tu marcherais sur le cul', 'Sombre merde', 'Tu es finis a la pisse', 'Tu as été bercé trop près du mur', 'Tu es pas le pingouin qui glisse le plus loin sur la banquise', 'Si tout les idiots du village formaient un village, ça serait quand même toi l idiot du village', 'Fils de chien', 'Enculeur de pot de fleur', 'Fumeur de terreau', 'Bon toutou', 'Gobe-teub', 'Destructeur de fiak', 'Casse couille en chef', 'Tocard', 'Leche fion', 'Tête de cul', 'Guignolo', 'Enfant de putain', 'Enculé de ta race', 'Enculé de ta mère', 'Enculé de ta race', 'Jpense que tu as un forfait Giga Débile illimité by FDP', 'Meme la drogue est plus légale que ta sale gueule', 'A l ecole des enculés, tu es premier', 'Selon les lois de la physique, ton QI est proche du Neant', 'Ta mère aurait du avaler bordel'];

    const channel = client.channels.cache.find(channel => channel.id === '1009910722517540904')
    channel.send("hello les pd");
    //Client.application.commands.create(data);
    client.guilds.cache.get("967791856861716522").commands.create(data);
    client.guilds.cache.get("967791856861716522").commands.create(data2);
    // channel.send("1 PAR 1 JVOUS PREND ET CA VA ETRE SALE"+"<@" + "292720786773639168" + ">"+"  "+ "<@" + "96558806053429248" + ">" +`${ayy}`);
    


});


client.on("messageCreate", async message => {

    let insult = ['Baise tes morts', 'Si tout les idiots du village formaient un village, ça serait quand même toi lidiot du village', 'Fils de chien', 'Enculeur de pot de fleur', 'Enculeur de saucisse', 'Foudroyeur de cul', 'Demonte fion', 'Fils de viol', 'rdv gare du nord tête de fion', 'gourgandine', 'Petite salope', 'Grosse tepu', 'Suce bite', 'Gobe queue', 'Si la rue était pavée de bite, tu marcherais sur le cul', 'Sombre merde', 'Tu es finis a la pisse', 'Tu as été bercé trop prêt du mur', 'Tu es pas le pingouin qui glisse le plus loin sur la banquise', 'Si tout les idiots du village formaient un village, ça serait quand même toi l idiot du village', 'Fils de chien', 'Enculeur de pot de fleur', 'Fumeur de terreau', 'Bon toutou', 'Gobe-teub', 'Destructeur de fiak', 'Casse couille en chef', 'Tocard', 'Leche fion', 'Tête de cul', 'Guignolo', 'Enfant de putain', 'Enculé de ta race', 'Enculé de ta mère', 'Enculé de ta race', 'Jpense que tu as un forfait Giga Débile illimité by FDP', 'Meme la drogue est plus légale que ta sale gueule', 'A l ecole des enculés, tu es premier', 'Selon les lois de la physique, ton QI est proche du Neant', 'Ta mère aurait du avaler bordel'];
    console.log(message);

    if (message.content === "<:chafer_crit:746385259930714203>") {

        message.reply("jeu la merde");
    }

    var min = 0;
    var max = insult.length;
    var random = Math.floor(Math.random() * (max - min)) + min;
    var random_apparition_message = Math.floor(Math.random() * (100));


    if (message.author.id != "1009906497318309978" && message.author.id != ("726245823389892699") && message.author.id != "432610292342587392") {

        if (random_apparition_message >= 90) {
            message.reply(insult[random]);

        }

        if (random_apparition_message >= 80 && random_apparition_message <= 81) {
            const emo = client.emojis.cache.find(emoji => emoji.name === "bien_sur");
            message.reply(`${emo}`);


        }



        if (message.content.startsWith("<:")) {
            console.log(random_apparition_message);
            if (random_apparition_message < 20) {
                let debut = message.content.indexOf(":");
                let fin = message.content.indexOf(":", debut + 1);
                let emoj = message.content.substr(debut + 1, (fin - 2));
                const emo = client.emojis.cache.find(emoji => emoji.name === emoj);
                if (emo != undefined) {
                    const channel = client.channels.cache.find(channel => channel.id === message.channelId);

                    channel.send(`${emo}`);
                }
            }

            

        }
        // if(message.author.id === "292720786773639168") {
        //     message.reply(insult[random]);
        // }

        // if(message.author.id === "96558806053429248") {
        //     message.reply(insult[random]);
        // }
        // if(message.author.id === "458961770690904064") {
        //     message.reply(insult[random]);
        // }
       
        let random_ban = Math.floor(Math.random() * (1000));
            if(random_ban>900) {
            
                
                
                
                    
                
            if(test=0){
            let tab_ban =["Raconte pas ta vie tocard","TG","Qui en a marre de l'entendre ? Moi","palu","pavu","m'enfou","ça dégage"];
            let role = message.member.guild.roles.cache.find(role => role.name === "muted");
            user = message.guild.members.cache.get(message.author.id)
            
            user.roles.add(role);
            const channel = client.channels.cache.find(channel => channel.id === message.channelId);
            let random = Math.floor(Math.random()*(tab_ban.length));
            channel.send(tab_ban[random]);
            channel.send("<@"+message.author.id+">" +" mange son mute");
                test =1;
            setTimeout(() => {
                user.roles.remove(role);
                channel.send("<@"+message.author.id+">"+"c'est bon tu peux revenir");
                test =0;
            },10000);
        }
            }
        }
        
        message.member.setNickname("");


 random = Math.floor(Math.random()*(100000));
if(random===100000){
    
    message.member.setNickname("Tête de cul en chef");
    setTimeout(() => {
        message.member.setNickname("");
    }, 86400000);

}

    



});



client.login("process.env.token");


