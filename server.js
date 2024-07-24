// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const readline = require('readline');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware to parse JSON
app.use(express.json());

// Event listener for new connections
io.on('connection', (socket) => {
  console.log('A user connected');
  
  // Event listener for 'response' events from clients
  socket.on('response', (data) => {
    console.log('Received response from client:', data);
  });

  // Event listener for disconnections
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server on port 4000
const PORT = 4000;
const HOST = '192.168.139.143';
server.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});

// Set up readline interface for command-line input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to prompt the user for input and emit messages to clients
const promptUser = () => {
  rl.question('Please enter your message: ', (message) => {
    io.emit('message', message);
    console.log('Message sent to clients:', message);
    promptUser(); // Recursively call to prompt for the next message
  });
};

// Start the prompt loop
promptUser();
