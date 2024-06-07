import { Archaeologist } from '../Archaeologist/_archaeologist';
import { Rune } from '../Runes/_rune';

export abstract class Clan {
    public abstract adjustRunesConvert(runeList: Rune[]): Rune[];
    public abstract adjustRunesAdd(runeList: Rune[], temp: Rune[]): Rune[][];
    public abstract calculateRunes(runeList: Rune[], archeologist: Archaeologist): number;
}