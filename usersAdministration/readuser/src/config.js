import { config } from "dotenv";

config();

const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;

export const MONGODB_URI = process.env.MONGODB_URI || `mongodb://${dbHost}:${dbPort}/user`;