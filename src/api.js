const express = require("express");
const serverless = require("serverless-http");
const axios = require('axios');

const app = express();
const router = express.Router();

const key = 'key';
const vendor = 'onet;'

// function getparams(params) {
//     const { CallID, CallerNum, CallerIDNum, CalledID, CalledExtention, CallStatus, CallFlow, CallerExtention, CalledNumber, CallAPIID } = req.params;


// }
// /call/log?action=ring&from_phone=<FROM_PHONE>&target_phone=<TARGET_PHONE>&call_id=<CALL_ID>
//     &extension=<EXTENSION>
//     &key=<KEY>&vendor=<VENDOR>&is_outgoing=0

router.get("/", (req, res) => {
    const url = req.params;
    const { CallID, CallerNum, CallerIDNum, CalledID, CalledExtention, CallStatus, CallFlow, CallerExtention, CalledNumber, CallAPIID } = req.query;
    let action = (CallStatus === 'CALLING') ? 'ring' : 'error';
    let from_phone = CallerIDNum;

    if (CalledNumber.startsWith("-972") || CalledNumber.startsWith("+972")) {
        let target_phone = '0' + CalledNumber.slice(4, );
    } else {
        let target_phone = CalledNumber
    };
    let call_id = CallAPIID;
    let from_phone = CallerNum;
    let extension = CalledExtention;
    res.send(action, target_phone, call_id, from_phone, extension);

    // res.json({
    //     hello: "hi!"
    // });
});



app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);