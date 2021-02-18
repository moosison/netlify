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
    let action =
        switch (CallStatus) {
            case 'CALLING':
                'ring';
                break;
        }
    res.send(action);

    // res.json({
    //     hello: "hi!"
    // });
});



app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);