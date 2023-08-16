import React from "react";
import Button from "./Button";

const searchSuggestions = [
  "All",
  "Mixes",
  "Bollywood Music",
  "Indian pop Music",
  "Standup Comedian",
  "Electronic Music",
  "Guitar",
  "Rapping",
];

const ButtonList = () => {
  return (
    <div>
      <ul className="flex">
        {searchSuggestions.map((item, index) => {
          return (
            <li key={index}>
              <Button name={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ButtonList;
