import React from "react";

const countries = [
  {
    id: "us",
    country: "United States",
  },
  {
    id: "in",
    country: "India",
  },
];

const Country = ({ setCountry }) => {
  return (
    <>
      <div className="p-10">
        {countries.map(({ id, country }) => (
          <button
            key={id}
            className="  m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => {
              setCountry(id);
            }}
          >
            {country}
          </button>
        ))}
      </div>
    </>
  );
};

export default Country;
