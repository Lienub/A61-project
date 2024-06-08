import { Archaeologist } from "../../Archaeologist/_archaeologist";
import { Rune } from "../../Runes/_rune";

export interface RuneOperationStrategy {
    listOperation(runeList: Rune[][] | Rune[], archeologist: Archaeologist): number | string;
}