# chinese-mail
Easy to send mail with Chinese mail server, such as 163, qq, etc.

最新版本只测试过网易相关邮箱，工作正常。如果觉得好用，希望提供更多支持，请通过邮箱或以下方式联系我们。

Latest version has been tested on mail server like 126, 163. If you have some other requirement, please contact us by mail or other ways below.

[微博](http://weibo.com/zmtech)
[Tweet](https://twitter.com/szm_tech)
[Facebook](https://www.facebook.com/wayde.sun.3)
[NPM](https://www.npmjs.com/~sunzhongmou)
[GitHub](https://github.com/sunzhongmou)
[简书](http://www.jianshu.com/u/e41dcab0d8ce)

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

### Others provided by us:

*   [create-wechat-project](/package/create-wechat-project) - **v1.0.0**
*   [json-editor-online](/package/json-editor-online) - **v1.0.0** - Command line tool for jsoneditoronline.cn
*   [ri-zhi-yi](/package/ri-zhi-yi) - **v3.0.0** - NPM package for upload your log to https://www.rizhiyi.com/
*   [chinese-mail](/package/chinese-mail) - **v0.1.6** - Easy to send mail with Chinese mail server, such as 126、163、qq, etc.
*   [rizhiyi-example](/package/rizhiyi-example) - **v2.0.0** - Example project for using NPM ri-zhi-yi package
*   [graphql-db](/package/graphql-db) - **v0.0.1** - Graphql webserver api with mongo storage and others
*   [cloud-object-storage](/package/cloud-object-storage) - **v3.0.1** - cloud object storage for QCloud, QiNiu and local