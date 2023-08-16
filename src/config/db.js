import mongoose from "mongoose";

const atlas_uri = "mongodb+srv://umers-mongo:mongo-testDB@cluster0.tcuagss.mongodb.net/?retryWrites=true&w=majority";
const local_uri= "mongodb://127.0.0.1:27017";

const connectDB = async () => {
    const uri = local_uri;
    mongoose.connect(uri, {
      autoCreate: true,
      autoIndex: true,
    })
    .then((res) => {
      console.log("Connected db connection");
    })
    .catch((err) => {
      console.log("Error connecting db connection", err);
    });
};

export default connectDB;
