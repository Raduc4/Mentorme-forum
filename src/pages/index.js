import React from "react";
import { StaticImage } from "gatsby-plugin-image";

// grid
import Container from "../components/grid/container";

// images
import yellow from "../assets/yellotop.svg";
import blue from "../assets/blue.svg";

// components
import SocialLinks from "../components/social-links/social-links.component";

const IndexPage = () => {
  return (
    <Container>
      {/* <div className="absolute top-0 left-0 w-28 h-48  sm:w-32 md:w-40 lg:w-48 xl:w-56 2xl:w-64 ">
        <img
          src={yellow}
          alt="decorative"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="absolute top-0 right-0">
        <img
          src={blue}
          alt="decorative"
          className="h-full object-cover w-full"
        />
      </div> */}
      <img
        src={yellow}
        alt="decorative"
        className="absolute top-0 left-0 w-3/12 h-5/12"
      />
      <img src={blue} alt="decorative" className="absolute top-0 right-0" />
      <SocialLinks />
    </Container>
  );
};

export default IndexPage;
