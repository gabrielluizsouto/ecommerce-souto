import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

async function dbConnect() {
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }

  // @ts-ignore
  await mongoose.connect(MONGODB_URI, opts, () => {
    console.log('connected to database');
  });
}

export default dbConnect
