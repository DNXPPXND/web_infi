import React from 'react'

const Vedio = ({ videoUrl }) => {
  return (
    <div className="flex justify-center items-center">
      <video
        controls
        src={videoUrl}
        className=" rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Vedio
