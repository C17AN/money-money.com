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
      valueFormat=".02s"
      margin={{ top: 10, right: 10, bottom: 20, left: 10 }}
      labelSkipSize={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.2]] }}
      parentLabelTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      borderColor={{ from: "color", modifiers: [["darker", 0.1]] }}
    />
  );
};

export default index;
