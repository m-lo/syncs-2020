import http from 'http'
import express from 'express'
import cors from 'cors'
import io from 'socket.io'

const app = express()
const server = http.createServer(app)
const socketIO = io(server)

app.use(cors())
server.listen(5002);

socketIO.on('connection', socket => {
  const username = socket.handshake.query.username;
  socket.on('client:message', data => { socket.broadcast.emit('server:message', data) })
  socket.on('disconnect', () => {})
})

export default app