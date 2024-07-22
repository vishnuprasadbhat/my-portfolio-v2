import React, { useContext } from "react";
import Button from "../Button";

import localData from "../../data/portfolio.json";
import GlobalContext from "../../context/globalContext";

const Socials = ({ className }) => {
  const { data } = useContext(GlobalContext);
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {data?.socials.map((social, index) => (
        <Button
          key={index}
          type="link"
          onClick={() => window.open(social.link)}
          classes="btn-underline pb-0.5"
        >
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
