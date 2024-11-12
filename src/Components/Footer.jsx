import React from "react";

function Footer() {
  const date = new Date().getFullYear();
  return <h5 className="footer">Copyright @ {date} </h5>;
}

export default Footer;
