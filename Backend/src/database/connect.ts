import mongoose from "mongoose";
const mongoConnect = () => {
  
    const db:string = `
    mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@
    ${process.env.MONGO_CLUSTER}.mongodb.net/${process.env.MONGO_DB}`;
    mongoose
        .connect(db)
        .then(() => console.log("MongoDB Connected"))
        .catch(err => console.log(err));
 
};
export default mongoConnect;




