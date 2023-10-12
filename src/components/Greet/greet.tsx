import React from "react";

import { Props } from "./greet.types";

const Greet = ({ name }: Props) => {
  return (
    <div>
      <h1>Hello {name ? name : "Guest"}</h1>
    </div>
  );
};

export default Greet;
