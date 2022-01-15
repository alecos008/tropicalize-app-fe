import React from "react";
import { Image } from "semantic-ui-react";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1>Hello from TropiHome!</h1>
      <Image
        src="https://res.cloudinary.com/alecos008/image/upload/v1641843490/tropi-letters_fwyntk.png"
        size="huge"
      />
    </div>
  );
}
