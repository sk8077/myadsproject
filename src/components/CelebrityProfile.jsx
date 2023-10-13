/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function CelebrityProfile({ celebrity }) {
  return (
    <div className="flex justify-center flex-col rounded-lg overflow-hidden shadow-lg p-4 mx-2 my-4 bg-white">
      <img
        src={celebrity.image}
        alt={celebrity.name}
        className="w-full h-48 object-cover"
      />
      <h2 className="text-2xl font-semibold text-blue-600 my-2 text-center">
        {celebrity.name}
      </h2>
      <p className="text-gray-700 text-base text-center mb-4">
        Price: <span className="font-semibold">{celebrity.price}</span>
      </p>
      <p className="text-gray-800 text-center">{celebrity.description}</p>

      <Link
        to="/bookingForm"
        className="mt-4 py-2 px-4 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out font-semibold"
      >
        Book Now
      </Link>
    </div>
  );
}

export default CelebrityProfile;
