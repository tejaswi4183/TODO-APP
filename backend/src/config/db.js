import mongoose from 'mongoose'

const MONGO_URI = process.env.MONGO_URL
if (!MONGO_URI)
  throw new Error(
    'Please define the MONGO_URI environment variable inside .env'
  )

async function db() {
  try {
    const conn = await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error}`)

    process.exit(1)
  }
}

export default db
