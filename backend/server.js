import http from 'http'
import express from 'express'
import cors from 'cors'
import io from 'socket.io'

const app = express()
const server = http.createServer(app)
const sio = io(server)
const port = 5002

app.use(cors())

var clients = {}

sio.on('connection', function(client) {
  client.on('login', e => {
    let uid = e.id
    if (!uid) return

    client.uid = uid;
    if (clients[uid]) {
      clients[uid].push(client)
    } else {
      clients[uid] = [client]
    }
  })

  client.on('message', e => {
    let tid = e.to;
    let sid = client.uid

    if(tid && clients[tid]) clients[tid].forEach(c => { c.emit('message', e) })
    if(sid && clients[sid]) clients[sid].forEach(c => { c.emit("message", e) })
  })

  client.on('disconnect', function() {
    if (!client.uid || !clients[client.uid]) return

    let targets = clients[client.uid]
    for (let i = 0; i < targets.length; ++i) {
      if (targets[i] == client) {
        targetClients.splice(i, 1)
      }
    }
  })
})

app.get("/users", (req, res) => {
  res.send({ data: users })
})

server.listen(port, () => console.log('listening on ' + port))

export default app