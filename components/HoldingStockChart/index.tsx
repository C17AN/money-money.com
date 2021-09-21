import { ResponsiveTreeMap } from "@nivo/treemap";
import { data } from "./data.js";
import React from "react";

interface Props {}

const index = (props: Props) => {
  return (
    <ResponsiveTreeMap
      data={data}
      identity="name"
      value="loc"
      isInteractive={false}
      valueFormat=".02s"
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      label={function (e) {
        return e.id + "\n (" + e.formattedValue + ")";
      }}
      labelSkipSize={12}
      colors={{ scheme: "blues" }}
      labelTextColor={{ from: "color", modifiers: [["darker", 2.5]] }}
      parentLabelTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      borderColor={{ from: "color", modifiers: [["darker", 0.1]] }}
    />
  );
};

export default index;
