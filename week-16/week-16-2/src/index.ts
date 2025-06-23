import {WebSocket, WebSocketServer} from 'ws'

const wss = new WebSocketServer({ port: 8080 })

interface User {
    socket: WebSocket;
    room: string;
}

let allSockets: User[] = [];


wss.on("connection", (socket) => {

    console.log("user connected @" );

    socket.on("message", (message) => {
        const parseMessage = JSON.parse(message as unknown as string);
        if(parseMessage == "join"){
            allSockets.push({
                socket,
                room: parseMessage.payload.roomId
            })
        }
        if(parseMessage == "chat"){
            //@ts-ignore
            const currenUserRoom = allSockets.find((x) => x.socket ==socket).room
        }
    })
})

