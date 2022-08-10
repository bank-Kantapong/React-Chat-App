const server = require('http').createServer()
const io = require('socket.io')(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials:true
  }
})

io.on("connection", (socket) => {
  socket.on('emit', (data) => {
    socket.broadcast.emit("message", { ...data })
  })
})

server.listen(8080, (err) => {
  if (err) throw err
  console.log('server is listening to port 8080');
})