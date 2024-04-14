import dotenv from "dotenv";
import index from "./app";
import http from "http";
import database from "./utils/Database";
import logger from "./middleware/logger";


dotenv.config();
const Server = http.createServer(index);

Server.listen(process.env.PORT, async () => {
  await database();
  logger.info(`Server is up and running on port: ${process.env.PORT}`);
});