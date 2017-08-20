var chineseMail = require('../index')

chineseMail.config.config126Mail({
  'username':'szm_666@126.com',
  'password':'******'
});

console.log('Chinese mail send mail by 126 start...');
chineseMail.sendMailBy126(
  'wayde.sun@gmail.com',
  'Thanks Wayde',
  '<p>Come on</p>',
  function (res) {
    console.log(res)
    console.log('Chinese mail send mail by 126 end...');
});

