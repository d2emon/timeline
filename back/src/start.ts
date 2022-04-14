#!/usr/bin/env node

/**
 * Module dependencies.
 */
import http from 'http';
import app from './app';
import normalizePort from './helpers/normalizePort';
import {
  onError,
  onListening,
} from './error';

const port = normalizePort(process.env.PORT || '4000');

app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError(port));
server.on('listening', onListening(server));
