import { createServer } from 'http';
import { createApp } from './app';
import { env } from './config/env';
import { attachRealtimeServer } from './infrastructure/realtime/content-events';

const app = createApp();
const httpServer = createServer(app);

attachRealtimeServer(httpServer);

httpServer.listen(env.port, () => {
    console.log(`CMS service running on port ${env.port}`);
});
