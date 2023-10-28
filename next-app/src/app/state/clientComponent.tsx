"use client";
import { useEffect, useState } from "react";
import { GetDataWithSWR } from "../lib/swr";
import ComponentV0 from "./v0";

type Props = {};

const ClientComponent = (props: Props) => {
  const [fetchTime, setFetchTime] = useState(0);
  const [fetchRedisTime, setFetchRedisTime] = useState(0);

  console.log("SWR loading time in ms:", fetchTime);

  const {
    data: testData,
    error: swrError,
    isLoading: swrIsLoading,
  } = GetDataWithSWR("https://jsonplaceholder.typicode.com/todos/5");
  console.log("TestData", testData);

  const {
    data: countData,
    error: countError,
    isLoading: countIsLoading,
  } = GetDataWithSWR("https://next-app-f3q6ji.bunnyenv.com/api/counter");
  console.log("!!!!countData is here: ", countData);

  useEffect(() => {
    if (swrIsLoading) {
      const startTime = Date.now();
      setFetchTime(startTime);

      return () => {
        const endTime = Date.now();
        const duration = endTime - startTime;
        console.log("SWR loading time in ms:", duration);
        setFetchTime(duration);
      };
    }

    return () => {
      //   setFetchTime(0);
    };
  }, [swrIsLoading]);

  const {
    data: dataApiRedis,
    error: errorApiRedis,
    isLoading: isLoadingApiRedis,
  } = GetDataWithSWR(
    `https://${process.env.NEXT_PUBLIC_BUNNY_LINK}/api/user?id=testKey`
  );

  //   console.log("dataApiRedis", dataApiRedis);

  useEffect(() => {
    if (isLoadingApiRedis) {
      const redisStartTime = Date.now();
      setFetchRedisTime(redisStartTime);
      return () => {
        const redistEndTime = Date.now();
        const duration = redistEndTime - redisStartTime;
        setFetchRedisTime(duration);
      };
    }
  }, [isLoadingApiRedis]);

  const increaseCounter = async () => {
    // console.log("increaseCounter");
    try {
      const response = await fetch("/api/counter", { method: "POST" });

      if (response.ok) {
        alert("Counter increased");
      } else {
        alert("Counter not increased");
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div>
      <p>clientComponent</p>
      <p>SWR data: {testData?.title}</p>
      <p>SWR fetch time in ms: {fetchTime}</p>

      <p>
        Redis data {dataApiRedis?.id}, {dataApiRedis?.redisValue}
      </p>
      <p>Redis fetch time in ms: {fetchRedisTime}</p>

      <button onClick={increaseCounter} className="bg-yellow-800 p-8">
        Increase Count {countData?.counter}
      </button>
      <>
        <div className="p-10 bg-gray-100 dark:bg-gray-900 min-h-screen">
          <h1 className="text-3xl font-bold mb-5 text-gray-800 dark:text-gray-200">
            Demo Project
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                State Page
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                clientComponent
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                SWR Data
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {testData?.title}
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                SWR Fetch Time
              </h2>
              <p className="text-gray-600 dark:text-gray-400">{fetchTime} ms</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Redis Data
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {dataApiRedis?.id}, {dataApiRedis?.redisValue}
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Redis Fetch Time
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {fetchRedisTime} ms
              </p>
            </div>
            <div
              onClick={increaseCounter}
              className="cursor-pointer p-6 bg-white dark:bg-gray-800 rounded-lg shadow"
            >
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Counter
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {countData?.counter}
              </p>
            </div>
          </div>
        </div>
      </>
      <ComponentV0 />
    </div>
  );
};

export default ClientComponent;
