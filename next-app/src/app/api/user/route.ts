import { getRedis } from "@/app/lib/redis";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  console.log("id", id);

  if (!id) {
    return new Response("Missing id", { status: 400 });
  }

  const res = await getRedis(id);
  const responseBody = {
    id,
    redisValue: res ? res : "Not found",
  };
  return new Response(JSON.stringify(responseBody), { status: 200 });
};
