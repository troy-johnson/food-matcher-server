import { Router } from 'express';
import * as WebSocket from 'ws';

const router = Router();

router.get('/', (req, res) => {
   const wss = new WebSocket.Server({ server });

   wss.on('connection', (ws: WebSocket) => {
      ws.on('message', (message: string) => {

         console.log('received: %s', message);
         ws.send(`Hello, you sent -> ${message}`);
      });

      ws.send('Hi there, I am a WebSocket server');
   });
});

export default router;