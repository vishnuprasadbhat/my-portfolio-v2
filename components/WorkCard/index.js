import React from "react";
import Button from "../Button";

const WorkCard = ({ img, name, description, url, onClick }) => {
  return (
    <div className={`overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0`}>
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "300px" }}
      >
        <img
          alt={name}
          className="h-full w-full object-fill hover:scale-110 transition-all ease-out duration-300 "
          src={img}
        ></img>
      </div>
      <Button
        type="link"
        onClick={onClick}
        classes={`btn-underline pb-0.5 mt-5 px-0 ml-0 laptop:ml-0 mob:text-2xl laptop:text-2xl font-medium ${
          url ? "cursor-pointer" : "cursor-not-allowed"
        }`}
      >
        {name ? name : "Project Name"}
      </Button>
      <h2 className="mob:text-justify text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
