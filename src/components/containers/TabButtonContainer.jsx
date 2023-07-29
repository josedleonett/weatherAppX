import React from "react";
import TabButtonDisplay from "../presentational/TabButtonDisplay";

const TabButtonContainer = ({
  title,
  to,
  temperatureValue,
  weatherIcoSrc,
  isday,
  isFullMoon,
}) => {
  return (
    <TabButtonDisplay
      title={title}
      to={to}
      temperatureValue={temperatureValue}
      weatherIcoSrc={weatherIcoSrc}
    />
  );
};

export default TabButtonContainer;
