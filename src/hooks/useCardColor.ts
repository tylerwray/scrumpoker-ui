import useLocalStorage from "./useLocalStorage";

export enum CardColor {
  Black = "bg-black",
  Gray = "bg-gray-800",
  Red = "bg-red-500",
  Orange = "bg-orange-600",
  Yellow = "bg-yellow-500",
  Green = "bg-green-500",
  Teal = "bg-teal-500",
  Blue = "bg-blue-500",
  Indigo = "bg-indigo-500",
  Purple = "bg-purple-500",
  Pink = "bg-pink-500"
}

export const cardColorDescriptions = {
  [CardColor.Black]: "Black",
  [CardColor.Gray]: "Gray",
  [CardColor.Red]: "Red",
  [CardColor.Orange]: "Orange",
  [CardColor.Yellow]: "Yellow",
  [CardColor.Green]: "Green",
  [CardColor.Teal]: "Teal",
  [CardColor.Blue]: "Blue",
  [CardColor.Indigo]: "Indigo",
  [CardColor.Purple]: "Purple",
  [CardColor.Pink]: "Pink"
};

type CardColorHook = [CardColor, (newColor: CardColor) => void];

function useCardColor(): CardColorHook {
  const [value, setValue] = useLocalStorage(
    "scrumpoker-card-color",
    CardColor.Red
  );
  return [value as CardColor, setValue];
}

export default useCardColor;
