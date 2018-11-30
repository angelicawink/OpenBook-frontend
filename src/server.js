// import express from 'express';
// import path from 'path';
// import bodyParser from 'body-parser';
//
// // Twilio Account SID: ACb9f97507032b8f6c4e9fd223956557ba
// // Twilio Auth Token: 4146b32d18d0c286673ec34ac00babe7
// // Twilio Phone #: (703) 721-4331
//
// const SID = ACb9f97507032b8f6c4e9fd223956557ba
// const token = 4146b32d18d0c286673ec34ac00babe7
//
// const app = express();
//
// app.use('/', express.static('public'));
//
// app.post('/sendsms', bodyParser.json(), (req, res) => {
//   var client = require('twilio')(SID, token);
//   client.sendMessage({
//     to: req.body.data,
//     from: '+12223334444',
//     body: 'word to your mother.'
//   }, function (err, responseData) {
//     if (!err) {
//       res.json({"From": responseData.from, "Body": responseData.body});
//     }
//   })
// })
//
// app.listen(process.env.PORT || 4000);
