/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yFTJdWbz4Jq
 */
export default function Componentv0() {
  return (
    <div className="p-10 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-5 text-gray-800 dark:text-gray-200">
        Demo Project
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            State Page
          </h2>
          <p className="text-gray-600 dark:text-gray-400">clientComponent</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            SWR Data
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            laboriosam mollitia et enim quasi adipisci quia provident illum
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            SWR Fetch Time
          </h2>
          <p className="text-gray-600 dark:text-gray-400">67 ms</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Redis Data
          </h2>
          <p className="text-gray-600 dark:text-gray-400">testKey, test</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Redis Fetch Time
          </h2>
          <p className="text-gray-600 dark:text-gray-400">107 ms</p>
        </div>
      </div>
    </div>
  );
}
