"use client";
const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
 return (
  <div className="vw-100 bg-red-300 vh-100" style={{ height: "100vh" }}>
   error
   <div className="items-center	">{error.message}</div>
   <button className="btn border-none bg-green-600 text-white px-12 py-1 rounded">
    Reset
   </button>
  </div>
 );
};

export default Error;
