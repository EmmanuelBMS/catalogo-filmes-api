import Redis from "ioredis";
import { promisify } from "util";

const redisClient = new Redis();

function getRedis(id: string) {
  const syncRedisGet = promisify(redisClient.get).bind(redisClient);
  return syncRedisGet(id);
}

function setRedis(key: string, id: string) {
  const syncRedisSet = promisify(redisClient.set).bind(redisClient);
  return syncRedisSet(key, id);
}

export { redisClient , getRedis, setRedis };