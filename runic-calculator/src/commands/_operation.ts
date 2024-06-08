import { Rune } from "../Runes/_rune";

export abstract class RunicOperation {
    public abstract listOperation(runeList: Rune[] | Rune[][]): number | string;
}