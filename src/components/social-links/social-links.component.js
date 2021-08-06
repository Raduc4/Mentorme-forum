import React from "react";
import Row from "../grid/row";
import Column from "../grid/column";

// images
import facebook from "./assets/facebook.svg";
import ig from "./assets/ig.svg";
import yt from "./assets/yt.svg";
const data = [
  {
    image: facebook,
    alt_text: "Go to facebook",
  },
  {
    image: yt,
    alt_text: "Go to YouTube",
  },
  {
    image: ig,
    alt_text: "Go to Instagram",
  },
];

const SocialLinks = () => {
  return (
    <Row className={"justify-center mt-12"}>
      {data.map((data) => {
        return (
          <Column>
            <img src={data.image} alt={data.alt_text} />
          </Column>
        );
      })}
    </Row>
  );
};

export default SocialLinks;
