/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const Secktor = require('../lib/commands')

    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "مينو",
            alias: ["ايمي","اوامر"],
            desc: "Help list",
            category: "عام",
            react: "✨",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("*❌No Such commands.*");
                else arr.push(`*🍁Command:* ${cmd.pattern}`);
                if (cmd.category) arr.push(`*🧩Category:* ${cmd.category}`);
                if (cmd.alias) arr.push(`*🧩Alias:* ${cmd.alias}`);
                if (cmd.desc) arr.push(`*🧩Description:* ${cmd.desc}`);
                if (cmd.use) arr.push(`*〽️Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/Riyadh')
                    .locale('id')
                const date = moment.tz('Asia/Riyadh').format('DD/MM/YYYY')
                let total = await sck1.countDocuments()
                let str = `╭───《 ` + fancytext(Config.ownername.split(' ')[0], 58) + ` 》────⊷\n`
                str +=   `*◞🦢 ᗩмι-ɓστ┆亜美⚡🦢◜*
*◈.مرحبا أنا إيمي-بوت.*
*◈قبل كل أمر حط نقطة(.).*
┐─────═━ه┈━═────┌                    
│ │ المستخدم:- ${citel.pushName}
│ │ الثيم:- ${tlang().title}
│ │ رمز الاوامر:- [ ${prefix} ]
│ │ المطور:- ${Config.ownername}
│ │ الأوامر:- ${commands.length}
│ │ المستخدمين:- ${total}
│ │ الوقت:- ${time}
│ │ التاريخ:- ${date}
┘─────═━ه┈━═─────└ 
*⎔ ⋅ ┈──━ ⊰ ❊ ⊱ ━──┈ ⋅ ⎔*
*❖ •﹝القروبات﹞• ❖*

*◞❊ 「ملصق」*
• الشرح┊يحول صورة لملصق.
*◞❊ 「تحذير」*
• الشرح┊اعطاء انذار لعضو.
*◞❊ 「منشن」*
• الشرح┊يعمل منشن جماعي.
*◞❊ 「مخفي」*
• الشرح┊عمل منشن مخفي فقط اكتب مخفي مع الرسال مثلا *.مخفي هلا*.
*◞❊ 「تصويت」*
• الشرح┊عمل تصويت.
*◞❊ 「بروفايل 」*
• الشرح┊يرسل بياناتك في البوت وبروفايلك.
*◞❊ 「رانك」*
• الشرح┊يرسل مستواك و عدد رسائلك.
*◞❊ 「ليدر」*
• الشرح┊يرسل افضل مستخدمين البوب.
*◞❊ 「ترقية」*
• الشرح┊يعطي إشراف لعضو.
*◞❊ 「اعفاء 」*
• الشرح┊يشيل إشراف من مشرف.
*◞❊ 「كتابة」*
• الشرح┊يكتب على صورة بالانجليزي.
*◞❊ 「عرض」*
• الشرح┊تغيير صورة القروب.
*◞❊ 「اضف」*
• الشرح┊يضيف عضو للقروب.
*◞❊ 「طرد」*
• الشرح┊طرد عضو من القروب.
*◞❊ 「حذف」*
• الشرح┊حذف انذار من عضو.
*◞❊ 「اكس」*
• الشرح┊لعبة اكس او اكتب .اكس وانتظر منافس.
*◞❊ 「اعاده」*
• الشرح┊اعادة لعبة اكس او.
*⎔ ⋅ ┈──━ ⊰ ❊ ⊱ ━──┈ ⋅ ⎔*
         *❖ •﹝التحميلات﹞• ❖*

*◞❊ 「انستا」*
• الشرح┊يحمل من انستغرام فقط حط الرابط بعد الأمر.
*◞❊ 「بحث」*
• الشرح┊يقوم بالبحث في يوتيوب.
*◞❊ 「يوت」*
• الشرح┊يحمل من يوت فقط حط الرابط بعد الأمر.
*◞❊ 「تحميل」*
• الشرح┊يحمل من يوت فقط حط الرابط بعد الأمر.
*◞❊ 「بين」*
• الشرح┊يحمل من بينتريست فقط حط الرابط بعد الأمر.
*◞❊ 「فاير」*
• الشرح┊يحمل من ميديا فاير فقط حط الرابط بعد الأمر.
*◞❊ 「صوت」*
• الشرح┊يحمل صوت من يوتيوب فقط حط الرابط بعد الأمر.
*◞❊ 「فيد」*
• الشرح┊يحمل فيد من يوتيوب فقط حط الرابط بعد الأمر.
*◞❊ 「مستند」*
• الشرح┊يحمل من يوتيوب بدقة عالية فقط حط الرابط بعد الأمر.
*◞❊ 「قوائم 」*
• الشرح┊يحمل من يوتيوب فقط حط الرابط بعد الأمر.
*◞❊ 「فيس」*
• الشرح┊يحمل من فيس بوك فقط حط الرابط بعد الأمر.
*◞❊ 「تيك」*
• الشرح┊يحمل من تيك توك.
*⎔ ⋅ ┈──━ ⊰ ❊ ⊱ ━──┈ ⋅ ⎔*
*❖ •﹝التحويلات﹞• ❖*

*◞❊ 「صورة」*
• الشرح┊يحول الملصق لصورة.
*◞❊ 「خدع」*
• الشرح┊يحول الرسالة لمصلق سكرين شوت.
*◞❊ 「اختصر」*
• الشرح┊يختصر روابط اكتب الامر وحط الرابط.
*◞❊ 「اوديو」*
• الشرح┊يحول الفيد لصوت.
*⎔ ⋅ ┈──━ ⊰ ❊ ⊱ ━──┈ ⋅ ⎔*
*❖ •﹝الملصقات ﹞• ❖*

*◞❊ 「دائرة」*
• الشرح┊يحول الصورة لملصق بشكل دائري.
*◞❊ 「قص」*
• الشرح┊يقص الصورة .
*◞❊ 「تدوير」*
• الشرح┊يدور الصورة.
*◞❊ 「نصي」*
• الشرح┊يكتب نص مزخرف ملصق.
*◞❊ 「نص」*
• الشرح┊يكتب نص بمشل ملصق.
*◞❊ 「حقوق」*
• الشرح┊اخذ حقوق ملصق.
*⎔ ⋅ ┈──━ ⊰ ❊ ⊱ ━──┈ ⋅ ⎔*
*❖ •﹝منوعات﹞• ❖*

*◞❊ 「كشف」*
• الشرح┊اعادة ارسال الصورة ذات اللقطة وكشفها فقط منشن صورة واكتب كشف.
*◞❊ 「ترحيب」*
• الشرح┊يعمل ترحيب خاص للقروب.
*◞❊ 「باي」*
• الشرح┊رسالة وداع عن خروج عضو.
*◞❊ 「ريد」*
• الشرح┊يعيد إرسال اي رسالة لأي شخص.
*◞❊ 「تشغيل」*
• الشرح┊يرسل ساعات تشغل البوت.
*◞❊ 「رابطي」*
• الشرح┊يرسل رقمك كرابط.
*◞❊ 「نقز」*
• الشرح┊يختار شريك للعضو.
*◞❊ 「عكس」*
• الشرح┊يعكس النص.
*◞❊ 「شاتبوت 」*
• الشرح┊تسولف مع البوت انجليزي.
*◞❊ 「بينري」*
• الشرح┊يشفر اي رسالة بلغة 0,1.
*◞❊ 「ديكود」*
• الشرح┊يفك تشفير رسالة 0,1.
*◞❊ 「رابط」*
• الشرح┊يحول صورة او فيد لرابط.
*⎔ ⋅ ┈──━ ⊰ ❊ ⊱ ━──┈ ⋅ ⎔*
  *❖ •﹝للمطور﹞• ❖*
*◞❊ 「بلجن」*
• الشرح┊إضافة اوامر للبوت.
*◞❊ 「رد」*
• الشرح┊يرسل صوت اذا منشنت البوت.
*◞❊ 「بيانات」*
• الشرح┊يرسل بيانات البوت.
*◞❊ 「مسح」*
• الشرح┊حذف رسالة من البوت.
*◞❊ 「تثبيت」*
• الشرح┊يثبت أوامر جديده.
*◞❊ 「بان」*
• الشرح┊يحظر مستخدم من البوت.
*◞❊ 「فك」*
• الشرح┊يفك الحظر عن مستخدم.
*◞❊ 「جايد」*
• الشرح┊يحدد قادة للبوت.
*◞❊ 「كيو」*
• الشرح┊يقوم بنسخ البوت.
*◞❊ 「شيل」*
• الشرح┊ياخذ بيانات للبوت.
*◞❊ 「ايفل」*
• الشرح┊يرسل حواصر.
*◞❊ 「ملاحظة 」*
• الشرح┊يكتب ملاحظة للبوت.
*◞❊ 「الكل」*
• الشرح┊رسالة جماعية للكل.
*◞❊ 「حذفها」*
• الشرح┊يحذف ملاحظة للبوت.
*◞❊ 「نطق」*
• الشرح┊ينطق كلام عربي.
*◞❊ 「انطق」*
• الشرح┊ينطق كلام انجليزي.
*◞❊ 「انطقه」*
• الشرح┊ينطق كلام ياباني.
*⎔ ⋅ ┈──━ ⊰ ❊ ⊱ ━──┈ ⋅ ⎔*
  *❖ •﹝عامة﹞• ❖*
*◞❊ 「مساعدة」*
• الشرح┊يشرح لك الأوامر فقط حط  مثلا *.مساعدة منشن* .
*◞❊ 「ليست」*
• الشرح┊يرسل لك القائمة بشكل list.*
*◞❊ 「المطور」*
• الشرح┊يرسل لك رقم المطور.
*◞❊ 「ملف」*
• الشرح┊يرسل ملفات البوت.
*◞❊ 「جلب」*
• الشرح┊يعمل على جلب ملفات من مواقع.
*◞❊ 「حالة」*
• الشرح┊يرسل حالة البوت.
*◞❊ 「ثيم」*
• الشرح┊ثيمات البوت.
*◞❊ 「سرعة」*
• الشرح┊يرسل سرعة البوت.
*◞❊ 「لايف」*
• الشرح┊يرسل بيانات البوت.

*⎔ ⋅ ┈──━ ⊰ ❊ ⊱ ━──┈ ⋅ ⎔*
  *❖ •﹝البحث﹞• ❖*
*◞❊ 「داون」*
• الشرح┊يرسل لك روابط حزم ملفات التطبيقات.
*◞❊ 「جد」*
• الشرح┊البحث عن اسم الموسيقى من الصوت.
*◞❊ 「سكرين」*
• الشرح┊صور لك سكرين شوت من مواقع.
*◞❊ 「امبيدي」*
• الشرح┊يرسل لك مسلسلات من imbd.
*◞❊ 「طقس」*
• الشرح┊يرسل حالة الطقس.
*◞❊ 「ساعة」*
• الشرح┊يرسل الساعة كم اختر المدينه.
*◞❊ 「صور」*
• الشرح┊يبحث عن صور لاي شي.
*◞❊ 「كوبل」*
• الشرح┊يرسل تطقيمات.
*◞❊ 「واتسب」*
• الشرح┊يرسل أرقام عشوائي مشابهه لرقمك.

                 *‏◞ᗩмι-ɓστ 亜美:◜*` 
                let buttonMessaged = {
                    image: { url: await botpic() },
                    caption: str
                };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }
        }
    )
    //---------------------------------------------------------------------------
 //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "مساعدة",
            alias: ["قائمة"],
            desc: "Help list",
            category: "عام",
            react: "✨",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("*❌No Such commands.*");
                else arr.push(`*🍁Command:* ${cmd.pattern}`);
                if (cmd.category) arr.push(`*🧩Category:* ${cmd.category}`);
                if (cmd.alias) arr.push(`*🧩Alias:* ${cmd.alias}`);
                if (cmd.desc) arr.push(`*🧩Description:* ${cmd.desc}`);
                if (cmd.use) arr.push(`*〽️Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                let total = await sck1.countDocuments()
                let str = `╭────《 ` + fancytext(Config.ownername.split(' ')[0], 58) + ` 》─────⊷\n`
                str +=
                    '```' + `│ ╮───────ه────────◆
│ │مرحبا أنا reki Bot                    
│ │ المستخدم:- ${citel.pushName}
│ │ الثيم:- ${tlang().title}
│ │ رمز الاوامر:- [ ${prefix} ]
│ │ المطور:- ${Config.ownername}
│ │ البلجن:- ${commands.length}
│ │ المستخدمين:- ${total}
│ │ وقت التشغيل:- ${runtime(process.uptime())}
│ │ الذاكرة:- ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
│ │ الوقت:- ${time}
│ │ التاريخ:- ${date}
│ ─╯─────ه────────◆
─╯──────ه─────────⊷\n
` + '```'
                for (const category in cmds) 
                {
                   str += `╮────❏ *${tiny(category)}* ❏\n` ;
                   if(text.toLowerCase() == category.toLowerCase()){ str = `╮─────❏ *${tiny(category)}* ❏\n` ;      
                        for (const plugins of cmds[category]) { str += `│ ${fancytext(plugins,1)}\n` ; }
                        str += `─╯━━━━━━━━━━━━━ه⊷─\n`  ;
                        break ;
                   }
                   else { for (const plugins of cmds[category]) { str += `│ ${fancytext(plugins,1)}\n` ; }
                         str += `─╯━━━━━━━━━━━━━ه⊷─\n`  ; 
                   }
  
                }
                str+= `*⭐️Type:* _${prefix}للمساعدة حط اسم الأمر كما في المثال تحت.\n*Eg:* _${prefix}مساعدة attp_\n*حظا طيبا ❤️ لك عزيزي* `
                let buttonMessaged = {
                    image: { url: await botpic() },
                    caption: str
                };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }
        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "ليست",
            desc: "list menu",
            category: "عام"
        },
        async(Void, citel) => {
            const { commands } = require('../lib');
            let str = `
╭━━〘 ` + fancytext(Config.ownername.split(' ')[0], 58) + ` 〙━━──⊷`
            str += `
┃ ⛥╭──────────────      
┃ ⛥│ User: ${citel.pushName}
┃ ⛥│ Theme: ${tlang().title}
┃ ⛥│ Prefix: ${prefix}
┃ ⛥│ Owner: ${Config.ownername}
┃ ⛥│ Commands: ${commands.length}
┃ ⛥│ Uptime: ${runtime(process.uptime())}
┃ ⛥│ Mem: ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
┃ ⛥│  
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷\n`
for (let i = 0; i < commands.length; i++) 
{
     if(commands[i].pattern==undefined) continue
     str +=       `╭ ${i+1} *${fancytext(commands[i].pattern,1)}*\n` 
     if(commands[i].desc=undefined) commands[i].desc=""
     str += `╰➛ ${fancytext(commands[i].desc,1)}\n`
}
            return await Void.sendMessage(citel.chat, { image: { url: THUMB_IMAGE }, caption: str })
        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
        pattern: "المطور",
        desc: "To find owner number",
        category: "عام",
        react: "💜",
        filename: __filename
    },
    async(Void, citel) => {
        const Config = require('../config')
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: Config.ownername,
                    body: 'Touch here.',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner[0] + '?text=Hii bro,I am ' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

Secktor.cmd({
    pattern: "ملف",
    desc: "to get extact name where that command is in repo.\nSo user can edit that.",
    category: "عام",
    react: "✨",
    filename: __filename
},
async(Void, citel, text) => {
 const { commands } = require('../lib');
 let arr = [];
        const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
        if (!cmd) return await citel.reply("*❌No Such commands.*");
        else arr.push(`*🍁Command:* ${cmd.pattern}`);
        if (cmd.category) arr.push(`*🧩Type:* ${cmd.category}`);
        if(cmd.filename) arr.push(`✨FileName: ${cmd.filename}`)
        return citel.reply(arr.join('\n'));


})
