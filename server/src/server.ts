import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: true, // Todas URLs de front-end poderão acessar nosso back-end
  // origin: ['https://localhost:3333', 'url do projeto em produção'] // para aumentar a segurança de acesso, somente as urls declaras no array podem acessar as rotas da API.
})
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HHTP server running on http://localhost:3333')
  })
