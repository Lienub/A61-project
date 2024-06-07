import { Archaeologist } from "../Archaeologist/_archaeologist";
import { Rune } from "../Runes/_rune";

export abstract class RunicOperation {
    public abstract runeOperation(runeA: number | Rune[], runeB: Rune | Rune[],  archeologist: Archaeologist): number | string;
    public abstract listOperation(runeList: Rune[] | Rune[][],  archeologist: Archaeologist): number | string;
}