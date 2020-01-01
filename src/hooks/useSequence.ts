import useLocalStorage from "./useLocalStorage";
import { SEQUENCE, SEQUENCE_VALUES } from "../pages/settings";

interface Sequence {
  sequence: string[];
  setSequence(newValue: string): void;
}

function useSequence(): Sequence {
  const [value, setSequence] = useLocalStorage(
    "scrumpoker-sequence",
    SEQUENCE.FIBONACCI
  );

  return { sequence: SEQUENCE_VALUES[value as SEQUENCE], setSequence };
}

export default useSequence;
