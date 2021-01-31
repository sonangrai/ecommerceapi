import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Title = ({ title }) => {
  var defaultTitle = "Pasal";
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title ? title : defaultTitle}</title>
      </Helmet>
    </HelmetProvider>
  );
};

export default Title;
