const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Track active connections for cleanup
const activeConnections = new Set();

// Store sent event IDs per client for testing Last-Event-ID
const clientEventIds = new Map();

// Basic EventSource endpoint
app.get('/sse/basic', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  });

  activeConnections.add(res);
  
  let counter = 0;
  const interval = setInterval(() => {
    counter++;
    res.write(`data: Log line ${counter}\n\n`);
  }, 100);

  req.on('close', () => {
    clearInterval(interval);
    activeConnections.delete(res);
  });
});

// EventSource endpoint that tracks Last-Event-ID
app.get('/sse/with-id', (req, res) => {
  const clientId = req.query.clientId || 'default';
  const lastEventId = req.headers['last-event-id'];
  
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  });

  activeConnections.add(res);
  
  // Start from last ID or 0
  let counter = lastEventId ? parseInt(lastEventId) : 0;
  
  // Send a reconnect message if we're resuming
  if (lastEventId) {
    res.write(`data: Resumed from event ${lastEventId}\n\n`);
  }
  
  const interval = setInterval(() => {
    counter++;
    res.write(`id: ${counter}\n`);
    res.write(`data: Event ${counter}\n\n`);
    clientEventIds.set(clientId, counter);
  }, 100);

  req.on('close', () => {
    clearInterval(interval);
    activeConnections.delete(res);
  });
});

// Endpoint that simulates connection errors
app.get('/sse/flaky', (req, res) => {
  const errorAfter = parseInt(req.query.errorAfter || '5');
  
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  });

  activeConnections.add(res);
  
  let counter = 0;
  const interval = setInterval(() => {
    counter++;
    if (counter === errorAfter) {
      // Abruptly close connection to simulate network error
      res.destroy();
      clearInterval(interval);
      activeConnections.delete(res);
    } else {
      res.write(`data: Message ${counter}\n\n`);
    }
  }, 100);

  req.on('close', () => {
    clearInterval(interval);
    activeConnections.delete(res);
  });
});

// Endpoint that returns 204 No Content immediately
app.get('/sse/204', (req, res) => {
  // Send 204 No Content - this should close EventSource without reconnection
  res.status(204).end();
});

// Endpoint that closes connection cleanly after a few messages
app.get('/sse/with-close', (req, res) => {
  const messageCount = parseInt(req.query.messages || '3');
  
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  });

  activeConnections.add(res);
  
  let counter = 0;
  const interval = setInterval(() => {
    counter++;
    if (counter <= messageCount) {
      res.write(`data: Message ${counter} before close\n\n`);
    } else {
      // Close the connection cleanly
      // This simulates server-side close which should trigger 'close' event
      clearInterval(interval);
      activeConnections.delete(res);
      res.end();
    }
  }, 100);

  req.on('close', () => {
    clearInterval(interval);
    activeConnections.delete(res);
  });
});

// Endpoint to check active connections (for testing cleanup)
app.get('/test/connections', (req, res) => {
  res.json({ activeConnections: activeConnections.size });
});

// Endpoint to get last event ID for a client
app.get('/test/last-event-id/:clientId', (req, res) => {
  const lastId = clientEventIds.get(req.params.clientId) || 0;
  res.json({ lastEventId: lastId });
});

// Static file serving for test app
app.use(express.static('public'));

// Cleanup on server shutdown
const PORT = process.env.PORT || 54321;
const server = app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`);
});

process.on('SIGTERM', () => {
  // Close all active connections
  activeConnections.forEach(res => res.end());
  server.close();
});

module.exports = { app, server };