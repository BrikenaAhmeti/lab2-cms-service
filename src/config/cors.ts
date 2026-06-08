import { CorsOptions } from 'cors';
import { env } from './env';

const localOriginPattern = /^https?:\/\/(localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/;

function configuredOrigins() {
    return env.corsOrigin
        .split(',')
        .map((origin) => origin.trim())
        .filter(Boolean);
}

export function isCorsOriginAllowed(origin?: string) {
    if (!origin) {
        return true;
    }

    const allowedOrigins = configuredOrigins();

    if (allowedOrigins.includes(origin)) {
        return true;
    }

    if (allowedOrigins.includes('*') && env.nodeEnv !== 'production') {
        return true;
    }

    return env.nodeEnv !== 'production' && localOriginPattern.test(origin);
}

export const corsOptions: CorsOptions = {
    credentials: true,
    origin(origin, callback) {
        if (isCorsOriginAllowed(origin)) {
            return callback(null, true);
        }

        return callback(null, false);
    },
};
