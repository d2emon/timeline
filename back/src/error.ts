import debug from 'debug';
import { Server } from 'http';

const Debug = debug('timeline:server');

interface HttpError extends Error {
  code: string;
  syscall: string;
}

/**
 * Event listener for HTTP server "error" event.
 */
export const onError = (port: string | number | boolean) => (error: HttpError) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

/**
 * Event listener for HTTP server "listening" event.
 */
export const onListening = (server: Server) => () => {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  Debug(`Listening on ${bind}`);
};
