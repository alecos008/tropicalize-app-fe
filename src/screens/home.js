import React from "react";
import { Image } from "semantic-ui-react";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "spaceBetween",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <h2>Welcome to Tropicalize's Landing Page</h2>
      <Image
        src="https://res.cloudinary.com/alecos008/image/upload/v1644504881/Web_Cover_kfhrww.png"
        size="huge"
      />
    </div>
  );
}
