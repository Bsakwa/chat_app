# Real-Time Chat App

A simple real-time chat application built with **Node.js**, **Express**, and **Socket.IO**. This app allows multiple users to communicate instantly by sending and receiving messages in real time.

## Features

- Real-time messaging between users
- Broadcast messages to all connected clients
- Simple and clean UI
- Socket.IO-powered WebSocket communication
- Scalable server setup with Node.js

## Installation

To set up and run this project locally, follow the steps below:

### Prerequisites

Ensure you have **Node.js** installed. You can download it from [Node.js official website](https://nodejs.org/).

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/chat-app.git
   cd chat-app
   ```
2. Install the dependencies:

   ```bash
   npm install
   ```
3. Start the server:

   ```bash
   npm start
   ```

4. Open your browser and go to `http://localhost:3000` to view the app.

### Project Structure

```
├── public          # Contains client-side files (HTML, CSS, JS)
│   └── index.html  # Main front-end of the chat app
├── server.js       # Node.js and Express server setup with Socket.IO integration
├── package.json    # Node.js dependencies and scripts
└── README.md       # Project documentation
```

### Usage

- Enter your name and join the chat room.
- Start sending and receiving messages in real time.
- Enjoy chatting with other users!


### Technologies Used

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A minimal and flexible Node.js web application framework.
- **Socket.IO**: A library that enables real-time, bidirectional, and event-based communication between web clients and servers.
- **HTML, CSS, JavaScript**: Front-end technologies for building web interfaces.

### Future Improvements

- Add user authentication (sign-in and sign-out).
- Display user avatars and usernames.
- Add chat rooms for topic-based discussions.
- Implement message timestamps.
- Enable private messaging between users.
- Store chat history in a database (e.g., MongoDB).


### License

This project is open source and available under the [MIT License](LICENSE).
```
