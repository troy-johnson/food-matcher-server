import * as redis from "redis";

const db = redis.createClient();

export default db;