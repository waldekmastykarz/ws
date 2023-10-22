const WebSocket = require('ws');
const send = require('./send');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log('received: %s', message);

        let msg = JSON.parse(message);
        if (msg.method === "Network.getResponseBody") {
            ws.send(JSON.stringify({
                id: msg.id,
                result: {
                    body: 'Hello World!',
                    base64Encoded: false
                }
            }));
        }
    });

    let i = 1;

    setTimeout(() => {
        send(ws, {
            method: 'Network.requestWillBeSent',
            params: {
                "requestId": "540FA7BBE291398ED7BB7953B4A44C21",
                "loaderId": "540FA7BBE291398ED7BB7953B4A44C21",
                "documentURL": "https://gist.githubusercontent.com/waldekmastykarz/5b5dc09759f97ee3611d2d2bb4a1db16/raw/650d90e5959740f1734576d19f1bbd062902b95b/ContentService.cs",
                "request": {
                    "url": "https://gist.githubusercontent.com/waldekmastykarz/5b5dc09759f97ee3611d2d2bb4a1db16/raw/650d90e5959740f1734576d19f1bbd062902b95b/ContentService.cs",
                    "method": "GET",
                    "headers": {
                        "Upgrade-Insecure-Requests": "1",
                        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
                        "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Microsoft Edge\";v=\"120\"",
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-platform": "\"macOS\""
                    },
                    "mixedContentType": "none",
                    "initialPriority": "VeryHigh",
                    "referrerPolicy": "strict-origin-when-cross-origin",
                    "isSameSite": true
                },
                "timestamp": 160009.713279,
                "wallTime": 1697965450.093832,
                "initiator": {
                    "type": "other"
                },
                "redirectHasExtraInfo": false,
                "type": "Document",
                "frameId": "FF281EBAD3BF65C7E263AF1B8E2CD4B8",
                "hasUserGesture": true
            }
        });
        send(ws, {
            method: 'Network.requestWillBeSentExtraInfo',
            params: {
                "requestId": "540FA7BBE291398ED7BB7953B4A44C21",
                "associatedCookies": [],
                "headers": {
                    ":authority": "gist.githubusercontent.com",
                    ":method": "GET",
                    ":path": "/waldekmastykarz/5b5dc09759f97ee3611d2d2bb4a1db16/raw/650d90e5959740f1734576d19f1bbd062902b95b/ContentService.cs",
                    ":scheme": "https",
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "cache-control": "max-age=0",
                    "if-none-match": "W/\"068d8dd4be5c2b2c3eb7e5f67e9df1ad144bdc426e687f13120039e5be1f4619\"",
                    "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Microsoft Edge\";v=\"120\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"macOS\"",
                    "sec-fetch-dest": "document",
                    "sec-fetch-mode": "navigate",
                    "sec-fetch-site": "none",
                    "sec-fetch-user": "?1",
                    "upgrade-insecure-requests": "1",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0"
                },
                // "connectTiming": {
                //     "requestTime": 160009.715219
                // },
                // "siteHasCookieInOtherPartition": false
            }
        });
        // send(ws, {
        //     method: 'Network.requestWillBeSent',
        //     params: {
        //         requestId: i,
        //         loaderId: '1',
        //         documentURL: 'https://graph.microsoft.com/v1.0/me',
        //         request: {
        //             url: 'https://graph.microsoft.com/v1.0/me',
        //             method: 'GET',
        //             headers: {
        //                 accept: 'application/json',
        //                 authorization: 'Bearer abc'
        //             },
        //             postData: null
        //         },
        //         timestamp: Date.now() / 1000,
        //         wallTime: Math.floor(Date.now() / 1000),
        //         initiator: { type: 'other' }
        //     }
        // });
        // send(ws, {
        //     method: 'Network.requestWillBeSentExtraInfo',
        //     params: {
        //         requestId: i,
        //         headers: {
        //             accept: 'application/json',
        //             authorization: 'Bearer abc'
        //         }
        //     }
        // });
        setTimeout(() => {
            send(ws, {
                method: 'Network.responseReceived',
                params: {
                    requestId: i,
                    loaderId: '1',
                    timestamp: Date.now() / 1000,
                    type: 'XHR',
                    response: {
                        url: 'https://graph.microsoft.com/v1.0/me',
                        status: 200,
                        statusText: 'OK'
                    }
                }
            });
            send(ws, {
                method: 'Network.loadingFinished',
                params: {
                    requestId: i,
                    timestamp: Date.now() / 1000,
                    encodedDataLength: 823
                }
            });
        }, 734);
        // send(ws, {
        //     params: {
        //         entry: {
        //           source: 'network',
        //           level: 'info',
        //           text: 'GET https://graph.microsoft.com/v1.0/me',
        //           timestamp: 1697897245.398643,
        //           url: 'https://graph.microsoft.com/v1.0/me'
        //         }
        //       },
        //       method: 'Log.entryAdded'
        // })
        // send(ws, {
        //     method: 'Network.requestWillBeSent',
        //     params: {
        //         "requestId": i++,
        //         "loaderId": "F26DBE18E4C9FB0D4A1ECCAFE1AF1221",
        //         "documentURL": "chrome://new-tab-page/",
        //         "request": {
        //             "url": "chrome://resources/images/add.svg",
        //             "method": "GET",
        //             "headers": {
        //                 "Referer": "",
        //                 "Origin": "chrome://new-tab-page",
        //                 "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36"
        //             },
        //             "mixedContentType": "none",
        //             "initialPriority": "Low",
        //             "referrerPolicy": "strict-origin-when-cross-origin",
        //             "isSameSite": false
        //         },
        //         "timestamp": 142356.921072,
        //         "wallTime": 1697897245.398643,
        //         "initiator": {
        //             "type": "other"
        //         },
        //         "redirectHasExtraInfo": false,
        //         "type": "Image",
        //         "frameId": "A1F66CCBBB4A325635DFB6173455F1A1",
        //         "hasUserGesture": false
        //     }
        // });
    }, 5000);
});