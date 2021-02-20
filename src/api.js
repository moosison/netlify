const express = require("express");
const serverless = require("serverless-http");
const axios = require('axios');

const app = express();
const router = express.Router();

const key = 'key';
const vendor = 'onet';

// function getparams(params) {
//     const { CallID, CallerNum, CallerIDNum, CalledID, CalledExtention, CallStatus, CallFlow, CallerExtention, CalledNumber, CallAPIID } = req.params;


// }
// /call/log?action=ring&from_phone=<FROM_PHONE>&target_phone=<TARGET_PHONE>&call_id=<CALL_ID>
//     &extension=<EXTENSION>
//     &key=<KEY>&vendor=<VENDOR>&is_outgoing=0

router.get("/", async(req, res) => {
    const url = req.params;
    let result;
    async function buildurl(url) {
        const { CallID, CallerNum, CallerIDNum, CalledID, CalledExtention, CallStatus, CallFlow, CallerExtention, CalledNumber, CallAPIID } = req.query;
        let resaction = (CallStatus === 'CALLING') ? 'ring' : 'error';
        let restarget_phone = (CalledNumber.startsWith("-972") || CalledNumber.startsWith("+972")) ? '0' + CalledNumber.slice(4, ) : CalledNumber;
        let resextension = CalledExtention;

        result = await axios.get('https://httpbin.org/get', { params: { key: 'key', vendor: 'onet', action: resaction, target_phone: CallerIDNum, call_id: CallAPIID, from_phone: CallerIDNum, extension: resextension } });
    };
    buildurl(url);
    result.args;
    console.log(result);
    res.send(res.data.args);


    // res.json({
    //     hello: "hi!"
    // });
});



app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);