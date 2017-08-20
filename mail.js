var mailer        = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var async = require('async');

var sendMail = function (data, mailOptions, cb) {
  var transporter     = mailer.createTransport(smtpTransport(mailOptions));

  async.retry({times: 5}, function (done) {
    transporter.sendMail(data, function (err) {
      if (err) {
        cb({'status':'fail', 'err': err});
        return done(err);
      }
      cb({'status':'ok'});
      return done()
    });
  }, function (err) {
    if (err) {
      return err;
    }
  })
};

exports.sendMail = sendMail;
