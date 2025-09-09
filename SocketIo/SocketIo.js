import {Server} from 'socket.io';
import http from 'http';
import { app } from '../app.js';

export const createSocketServer = ()=>{
    const server = http.createServer(app);
    const io = new Server(server,{
        cors:{
            origin: process.env.CORS_ORIGIN,
            methods:  ['GET','POST','PUT','DELETE','PATCH'],
            credentials: true
        }
    });

    io.on('connection',(socket) =>{
        console.log('User-connected',socket.id);
        
    })

    return server;
}