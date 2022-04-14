/**
 * Normalize a port into a number, string, or false.
 */
const normalizePort = (value: string): number | string | false => {
  const port = parseInt(value, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return value;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

export default normalizePort;
