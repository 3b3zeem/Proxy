import React from "react";

const Clients = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20 h-[100vh]`}
    >
      <h1 className="md:text-4xl text-3xl mb-10 font-[Lelevien]">Clients</h1>
      <div className="flex justify-end w-full">
        <div className="flex flex-col md:items-center items-end gap-6">
          <div className="flex gap-6">
            {Array(5).fill(null).map((_, index) => (
              <div key={index} className="md:w-16 md:h-16 w-10 h-10 border-2 border-white rounded-full"></div>
            ))}
          </div>
          <div className="flex gap-6">
            {Array(4).fill(null).map((_, index) => (
              <div key={index} className="md:w-16 md:h-16 w-10 h-10 border-2 border-white rounded-full"></div>
            ))}
          </div>
          <div className="flex gap-6">
            {Array(5).fill(null).map((_, index) => (
              <div key={index} className="md:w-16 md:h-16 w-10 h-10 border-2 border-white rounded-full"></div>
            ))}
          </div>
          <div className="flex gap-6">
            {Array(4).fill(null).map((_, index) => (
              <div key={index} className="md:w-16 md:h-16 w-10 h-10 border-2 border-white rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
