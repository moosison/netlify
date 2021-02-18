const express = require('exprress');
const serverless = require('seerverless-http');
const app = express();

const router = express.router();


router.get('/', (req, res) => {
    res.json({
        'hello': 'hi'
    });
});

app.use('/.nelify/functions/api', router);

module.exports.handler = serverless(app);