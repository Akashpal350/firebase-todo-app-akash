import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-full fixed top-0 left-0 flex justify-center items-center ">
      <Image width={100} height={100} alt="Loading..." src="/loader.svg" />
    </div>
  );
};

export default Loader;
