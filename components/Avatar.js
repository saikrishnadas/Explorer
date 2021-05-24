import React from "react";

function Avatar({ url }) {
  return (
    <img
      className="rounded-full h-10 cursor-pointer transition duration-150 transform hover:scale-110"
      src={url}
      alt="profile image"
    />
  );
}

export default Avatar;
