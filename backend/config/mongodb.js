import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => {
      console.log("DB Connected");
    });

    mongoose.connection.on('error', (err) => {
      console.error(`DB Connection Error: ${err.message}`);
    });

    mongoose.connection.on('disconnected', () => {
      console.warn("DB Disconnected");
    });

    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

  } catch (error) {
    console.error(`Failed to connect to the database: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
