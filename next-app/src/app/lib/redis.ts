import { Redis } from "ioredis";

const redisHost = process.env.redis || "localhost";
const redisPort = parseInt(process.env.REDIS_SERVICE_PORT || "6379");

const redis = new Redis({
  host: redisHost,
  port: redisPort,
});

export const scardRedis = async (setName: string) => {
  try {
    const counter = await redis.scard(setName);

    return counter;
  } catch (error) {
    console.log("Error running scardRedis", error);
    return undefined;
  }
};

export const saddRedis = async (setName: string, value: any) => {
  try {
    await redis.sadd(setName, value);

    return true;
  } catch (error) {
    console.log("Error running saddRedis", error);
    return false;
  }
};

export const setRedis = async (key: string, value: string) => {
  try {
    console.log("redisHost", redisHost);
    console.log("redisPort", redisPort);
    await redis.set(key, value);
    console.log("Redis value was set successfully");
    return true;
  } catch (error) {
    console.log("Error running setRedis", error);
    return false;
  }
};

export const getRedis = async (key: string) => {
  console.log("redisHost", redisHost);
  console.log("redisPort", redisPort);
  setRedis("testKey", "test");
  try {
    const data = await redis.get(key);
    return data;
  } catch (error) {
    console.log("Error running getRedis", error);
    return false;
  }
};

console.log("Redis is running on", redisHost, redisPort);
