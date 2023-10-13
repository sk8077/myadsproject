import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full md:max-w-md bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-red-600">
          Oops!
        </h1>
        <p className="text-gray-700 mt-4 text-lg md:text-xl lg:text-2xl">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-gray-600 italic mt-2">
          {error.statusText || error.message}
        </p>
      </div>
    </div>
  );
}
