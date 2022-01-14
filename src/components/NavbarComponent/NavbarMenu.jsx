import React from "react";

function NavbarMenu() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <a href="/animations">Animation</a>
      <a href="/products">Products</a>
      <a href="/map">Map</a>
    </div>
  );
}

export default NavbarMenu;
