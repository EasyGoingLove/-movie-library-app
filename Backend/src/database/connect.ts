import mongoose from "mongoose";
const mongoConnect = () => {
  
    const db:string = `
    mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
    mongoose
        .connect(db)
        .then(() => console.log("MongoDB Connected to Atlas"))
        .catch(err => {
            console.log(err);
            mongoose.connect('mongodb://localhost:27017/local', {
                connectTimeoutMS: 1000
                })
            console.log("MongoDB Connected Localy")
        });
 
};
export default mongoConnect;




