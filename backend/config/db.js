const mongoose = require('mongoose'); 
    // useNewUrlParser: true,
    // useUnifiedTopology: true
   

mongoose.connect('mongodb+srv://rajkumarpogula22:Raju12345@in-aws.59ion.mongodb.net/max-store?retryWrites=true&w=majority&appName=in-AWS')
    .then(() => console.log('MongoDB connected successfully'))
    .catch((error) => console.error('MongoDB connection error:', error));
    

  