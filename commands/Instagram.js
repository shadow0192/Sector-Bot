const {cmd } = require('../lib')
cmd({
        pattern: "انستا",
        desc: "تحميل ريلز وصور انستا.",
        category: "التحميلات",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
        const { Insta } = require('../lib')
if(!text) return citel.reply('ارسل الرابط.')
let response = await Insta(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[i], `*تم  التحميل.*`, citel)
}
    });
