function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '62815158600891', 'Nurutomo', m)
  this.sendContact(m.chat, '6288705834498', 'My owner', m)
}
//handler.help = ['owner', 'creator']
//handler.tags = ['info']
handler.command = /^(owner|creator)$/i
handler.register = true

module.exports = handler
