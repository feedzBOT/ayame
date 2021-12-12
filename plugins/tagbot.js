let handler  = async (m, { conn, isOwner }) => {
if (!isOwner) throw false
let name = conn.getName(m.sender)
let me = conn.user.name
let teks = `
${pickRandom([` _Saya disini Master_`, `_Saya hadir_`, ` _Apakah Master mencari saya??_`, ` _Yapp Master_`, `*_© H i - F E 3 D Z_*\n\nAda hanya untuk melayani anda`])}
`.trim()
conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', `${me} ¯\_(ツ)_/¯`, 'status@broadcast')
}
handler.customPrefix = /6288705834498|hifeedz/
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
