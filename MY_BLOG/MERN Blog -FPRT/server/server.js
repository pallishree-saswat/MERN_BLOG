import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'


import user from './routes/user.js'
import post from './routes/post.js'
import uploadRoutes from './routes/uploadRoute.js'


dotenv.config()

connectDB();

const app = express()

app.use(express.json())



app.use('/api/user', user)
app.use('/api/post', post)
app.use('/api/upload', uploadRoutes)



  app.get('/', (req, res) => {
    res.send('API is running....')
  })

  const __dirname = path.resolve()
  app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use(notFound)
app.use(errorHandler)



const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
  )