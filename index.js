const express = require('express')
const app = express();
const userRoutes = require('./routes/userrouter');
const mongoose = require('mongoose')
var cors = require('cors')
const bodyParser = require('body-parser');
dbHOST ='mongodb+srv://siva:siva@cluster1.qaavblr.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbHOST).then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));
app.use(express.json());
var corsOptions = {
    origin: 'https://deploy-five-kappa.vercel.app',
    methods:["GET","POST"],
    Credential:true,
    // optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
  
  app.use(cors(corsOptions));
app.use(bodyParser.json());
PORT = 7000
app.use('/user', userRoutes);
app.get('/', (req, res) => {
    res.send('products api running new deploy');
});
app.listen(PORT,()=>{
    console.log(`server is running${PORT}`);
  })