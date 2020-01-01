import useLocalStorage from "./useLocalStorage";

function useCardColor() {
  return useLocalStorage("scrumpoker-card-color", "bg-red-400");
}

export default useCardColor;
