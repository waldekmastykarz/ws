// Send a command over the WebSocket and return a promise
// that resolves with the command response.
module.exports = function send(ws, command) {
    console.log(JSON.stringify(command, null, 2));
    ws.send(JSON.stringify(command));
    return new Promise(resolve => {
        ws.on('message', function (text) {
            const response = JSON.parse(text);
            console.log(JSON.stringify(response, null, 2));
            if (response.id === command.id) {
                ws.removeListener('message', arguments.callee);
                resolve(response);
            }
        });
    });
}