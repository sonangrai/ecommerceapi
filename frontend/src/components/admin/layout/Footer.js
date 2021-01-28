import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      {" "}
      <span dangerouslySetInnerHTML={{ __html: "&copy;" }}></span> 2020
    </div>
  );
};

export default Footer;
