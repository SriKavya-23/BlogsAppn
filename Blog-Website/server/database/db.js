import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-ohye0p3-shard-00-00.0oeushm.mongodb.net:27017,ac-ohye0p3-shard-00-01.0oeushm.mongodb.net:27017,ac-ohye0p3-shard-00-02.0oeushm.mongodb.net:27017/?ssl=true&replicaSet=atlas-7i6y4c-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;