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
    <ul className="flex mb-4 overflow-x-auto">
      {searchSuggestions.map((item, index) => {
        return (
          <li key={index}>
            <Button name={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default ButtonList;
