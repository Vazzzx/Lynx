const wait = require('util').promisify(setTimeout);
module.exports = (client) => { 

    client.on('ready', async () =>{


            const ping = new Date();
            ping.setHours(ping.getHours() - 3);
            
            let status = [
                { name: `๐ | Sabia que eu amo uvas? ๐  `, type: 'WATCHING', url: 'https://discord.gg/Gs65zux2Cr' },
                { name: `๐ฆ | Estou em ${client.guilds.cache.size} servidores! `, type: 'WATCHING', url: 'https://discord.gg/Gs65zux2Cr' },
                { name: `๐ฎ | Meu prefixo รฉ 'l.'! `, type: 'WATCHING', url: 'https://discord.gg/Gs65zux2Cr' },
                { name: `๐ช | Cuidando de ${client.users.cache.size} Usuรกrios :3 `, type: 'WATCHING', url: 'https://discord.gg/Gs65zux2Cr' },
                { name: `๐ | Entre em meu servidor de suporte! https://discord.gg/Gs65zux2Cr `, type: 'WATCHING', url: 'https://discord.gg/Gs65zux2Cr' }
                
                
            ];
        
            function setStatus() {
                let randomStatus = status[Math.floor(Math.random() * status.length)]
                client.user.setPresence({ activity: randomStatus, status: "online" })
            };
        
            setStatus();
            setInterval(() => setStatus(), 8000);
        
        client.guilds.cache.forEach(guild => {
            })
        }) 
}