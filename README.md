# chinese-mail
Easy to send mail with Chinese mail server, such as 163, qq, etc.

目前该版本 ***0.1.6*** 只测试过网易相关邮箱，工作正常。如果觉得好用，希望提供更多支持，请通过邮箱或以下方式联系我们。

Current version ***0.1.6*** has been tested on mail server like 126, 163. If you have some other requirement, please contact us by mail or other ways below.

[微博](http://weibo.com/zmtech)
[Tweet](https://twitter.com/szm_tech)

![Show Result](http://opzmk10r6.bkt.clouddn.com/result.png)

### Code example:

```
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

```

