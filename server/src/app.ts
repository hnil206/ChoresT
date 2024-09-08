import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Application } from 'express';
import mongoose from 'mongoose';
import routes from './routes/routes';

// Initialize express app
const app: Application = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Set Mongoose strictQuery option
mongoose.set('strictQuery', true);

// MongoDB connection
const mongoURI = 'mongodb+srv://Luund:Uc8Qzwd2j8AMtJxW@cluster0.ioech.mongodb.net/';

mongoose.connect(mongoURI, {})
  .then(() => {
    console.log('------------------------------')
    console.log('MongoDB connected successfully')
    console.log('------------------------------')
  })
  .catch(err => {
    console.log('------------------------------')
    console.error('MongoDB connection error:', err)
    console.log('------------------------------')
  });

// Define routes
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

app.use('/api', routes);

// Export the app
export default app;
