import { Server as HttpServer } from 'http';
import { EventEmitter } from 'events';
import { Server as SocketServer } from 'socket.io';
import { isCorsOriginAllowed } from '../../config/cors';

export interface CmsContentUpdatedPayload {
    slug: string;
}

class ContentEvents extends EventEmitter {
    publishContentUpdated(payload: CmsContentUpdatedPayload) {
        this.emit('cms:content-updated', payload);
    }
}

export const contentEvents = new ContentEvents();

export function attachRealtimeServer(httpServer: HttpServer) {
    const io = new SocketServer(httpServer, {
        cors: {
            credentials: true,
            origin(origin, callback) {
                callback(null, isCorsOriginAllowed(origin));
            },
        },
    });

    io.on('connection', (socket) => {
        socket.join('cms-preview');
    });

    contentEvents.on('cms:content-updated', (payload: CmsContentUpdatedPayload) => {
        io.to('cms-preview').emit('cms:content-updated', payload);
    });

    return io;
}
