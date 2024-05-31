import { Rune } from "../Runes/_rune";
import { Raidho } from "../Runes/Rune";
import { Clan } from "./_clan";

export class JokulClan extends Clan {
    public override adjustRunesConvert(runeList: Rune[]): Rune[] {
        runeList = runeList.reverse();

        if (runeList[runeList.length - 1] instanceof Raidho) {
            runeList.pop();
        } else if (runeList[0] instanceof Raidho) {
            runeList.shift();
            runeList = runeList.reverse();
        }

        return runeList;
    }

    public override adjustRunesAdd(runeList: Rune[], temp: Rune[]): Rune[][] {
        runeList = runeList.reverse();
        temp = temp.reverse();

        if (runeList[runeList.length - 1] instanceof Raidho) {
            temp.pop();
            runeList.reverse()
            return [runeList, temp];
        } else {
            temp.shift();
            return [runeList, temp];
        }
    }
}
