import { Archaeologist } from "../Archaeologist/_archaeologist";
import { Rune } from "../Runes/_rune";

export abstract class RunicOperation {
    public abstract listOperation(runeList: Rune[] | Rune[][],  archeologist: Archaeologist): number | string;
}