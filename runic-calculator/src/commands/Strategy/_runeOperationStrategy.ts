import { Rune } from "../../Runes/_rune";

export interface RuneOperationStrategy {
    listOperation(runeList: Rune[][] | Rune[]): number | string;
}