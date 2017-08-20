/**
 * config
 */

var cache = require('memory-cache');

var serverOptions = {
  mail_opts_126: {
    host: 'smtp.126.com',
    port: 25,
    auth: {
      user: 'mail@126.com',
      pass: 'password'
    },
    ignoreTLS: true,
  }
};

function config126Mail(mailAccount) {
  cache.put('126Username', mailAccount.username);
  cache.put('126Password', mailAccount.password);
}

module.exports = {
  config126Mail: config126Mail,
  serverOptions: serverOptions
};