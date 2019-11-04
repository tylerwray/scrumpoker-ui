import useLocalStorage from "./useLocalStorage"

const useCardColor = () => {
  return useLocalStorage("scrumpoker-card-color", "bg-red-400")
}

export default useCardColor
