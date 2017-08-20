var mailbox = require('./mail')
var config  = require('./config');
var cache   = require('memory-cache');

function sendMailBy126(to, subject, html, cb) {
  var mailOptions = config.serverOptions.mail_opts_126;
  mailOptions.auth.user = cache.get('126Username');
  mailOptions.auth.pass = cache.get('126Password');

  return mailbox.sendMail({
    from: mailOptions.auth.user,
    to: to,
    subject: subject,
    html: html
  }, mailOptions, cb);
}

module.exports = {
  sendMailBy126: sendMailBy126,
  config: config
};