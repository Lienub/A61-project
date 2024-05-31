import { Rune } from "../Runes/_rune";

export abstract class RunicOperation {
    public abstract runeOperation(runeA: number | Rune[], runeB: Rune | Rune[]): number | string;
    public abstract listOperation(runeList: Rune[] | Rune[][]): number | string;
}