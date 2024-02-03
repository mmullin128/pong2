const path = require('path');
const express = require('express');

function init(port, options={}) {
    const app = express();
    app.use(express.static(path.join(__dirname, "../public")));

    const getOptions = {
        root: path.join(__dirname, "../public")
    }

    app.get('/', (req, res) => {
        res.sendFile("index.html", getOptions);
    });

    if (options["close"]) {
        const server = app.listen(port, () => {
            server.close();
        });
        return;
    }
    return app.listen(port, () => {
        console.log('listening on port: ', port);
    });
}

function close(server) { 
    server.close();
}

module.exports = {
    init, close
}