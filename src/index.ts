import * as express from 'express';
import routes from './routes';

const app = express();

const port = 3000;
const router = express.Router();

app.use('/', router);
app.use('/session', routes.session);

export const startServer = () => app.listen(port, () => {
   console.log(`Server running on port ${port}`);
});

if (require.main === module) {
   const server = startServer();
   const shutdown = () => {
      server.close();
      db.end();
   };

   process.on('SIGTERM', shutdown);
   process.on('SIGINT', shutdown);
}

export default app;