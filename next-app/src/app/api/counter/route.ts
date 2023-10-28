import { saddRedis, scardRedis } from "@/app/lib/redis";

export const POST = async (req: Request) => {
  await saddRedis("counter", Date.now().toString());

  return new Response("Successfully added timestampt to the Redis counter", {
    status: 200,
  });
};

export const GET = async (req: Request) => {
  const counter = await scardRedis("counter");

  //   Increase the count by one
  await saddRedis("counter", Date.now().toString());

  const responseBody = {
    counter: counter ? counter : 0,
  };

  return new Response(JSON.stringify(responseBody), { status: 200 });
};
