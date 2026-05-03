import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "node:dns";

dotenv.config({ quiet: true });

const app = express();
const mongoUri = process.env.MONGO;
const dnsServers = process.env.DNS_SERVERS?.split(",")
  .map((server) => server.trim())
  .filter(Boolean);

if (dnsServers?.length) {
  dns.setServers(dnsServers);
}

app.use(express.json());

app.post("/api/user/test", (req, res) => {
  res.status(200).json({
    message: "User test route is working.",
    receivedData: req.body,
  });
});

const connectToDatabase = async () => {
  // process.env.MONGO wohi variable hona chahiye jo aapne .env file mein rakha hai.
  if (!mongoUri) {
    console.error("MONGO environment variable is missing. Check your .env file.");
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 10000,
    });
    console.log("Connected to MongoDB successfully.");
    console.log(`Connected database: ${mongoose.connection.name}`);
  } catch (error) {
    console.error("Error connecting to MongoDB.");
    console.error("Error name:", error.name);
    console.error("Error message:", error.message);

    if (error.message?.includes("bad auth") || error.message?.includes("Authentication failed")) {
      console.error("Hint: Authentication failed. Check username/password and percent-encode special characters: @ = %40, # = %23.");
    }

    if (error.message?.includes("ENOTFOUND") || error.message?.includes("querySrv") || error.message?.includes("ECONNREFUSED")) {
      console.error("Hint: Network/DNS issue. Check your MongoDB cluster URL and internet connection.");
    }

    if (error.message?.includes("IP") || error.message?.includes("whitelist") || error.message?.includes("not authorized")) {
      console.error("Hint: Your IP may not be whitelisted in MongoDB Atlas Network Access.");
    }

    process.exit(1);
  }
};

connectToDatabase().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
