import React from "react";
import { Image } from "semantic-ui-react";
import "./home.css";

export default function Home() {
  return (
    <div class="home-container">
      <div
        // style={}
        className={'img-row'}
      >
        <div
          // style={}
          className={'tropi-container'}
        >
          <Image
            src="https://res.cloudinary.com/alecos008/image/upload/c_thumb,h_210,w_400,x_0,y_0/v1641843490/tropi-letters_fwyntk.png"
            size="big"
          />
        </div>
        <div
          class="piney-img"
          style={{
            // display: "flex",
            // flexDirection: "row",
            // justifyContent: "flex-start",
            // alignItems: "flex-start",
            // padding: "4rem",
            margin: "3rem",
          }}
        >
          <Image
            style={{ paddingBottom: "1rem" }}
            src="https://res.cloudinary.com/alecos008/image/upload/v1642285227/pina_sin_titulo_vector_qs6klb.png"
            size="big"
          />
        </div>
      </div>
      {/* <h1>Hello from TropiHome!</h1> */}
    </div>
  );
}
