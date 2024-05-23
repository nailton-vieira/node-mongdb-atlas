const mongoose = require('mongoose');

const connectDatabase = () => {
    console.log('aguardando o banco');

    mongoose.connect('mongodb+srv://nailton:a123@mybdcloud.fvdh6ti.mongodb.net/?retryWrites=true&w=majority&appName=mybdcloud', { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() => console.log("MongoDb Conectado")).catch((error) => console.log(error))

};

module.exports = connectDatabase;