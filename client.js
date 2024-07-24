// // client.js
// const io = require('socket.io-client');
// const readline = require('readline');

// // Connect to the Socket.io server
// const socket = io('http://192.168.140.1:4000'); // Connect to the server running on localhost

// // Create an interface for reading data from stdin and writing data to stdout
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Handle connection
// socket.on('connect', () => {
//   console.log('Connected to the server');
// });

// // Listen for 'message' events from the server
// socket.on('message', (data) => {
//   console.log('Received message from server:', data);

//   // Prompt the user for a response
//   rl.question('Please enter your response: ', (response) => {
//     // Send the response back to the server
//     socket.emit('response', response);
//   });
// });

// // Handle disconnection
// socket.on('disconnect', () => {
//   console.log('Disconnected from the server');
// });
