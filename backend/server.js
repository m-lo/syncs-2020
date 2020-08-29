import http from 'http'
import express from 'express'
import cors from 'cors'
import io from 'socket.io'

const app = express()
const server = http.createServer(app)
const socketIO = io(server)
const port = 5002

app.use(cors())

server.listen(port)
console.log('Started on port ' + port)

socketIO.on('connection', socket => {
  socket.on('client:message', data => { socket.broadcast.emit('server:message', data) })
  socket.on('disconnect', () => { })
})

export default app