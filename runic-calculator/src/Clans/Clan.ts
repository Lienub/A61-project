import { Rune } from "../Runes/_rune";
import { Gebo, Raidho } from "../Runes/Rune";
import { Clan } from "./_clan";
import { Convert } from "../commands/Convert";

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

    public override calculateRunes(runeList: Rune[]): number {
        return 0;
    }
}

export class Thorlaug extends Clan {
    public override adjustRunesConvert(runeList: Rune[]): Rune[] {
        return [];
    }

    public override adjustRunesAdd(runeList: Rune[], temp: Rune[]): Rune[][] {
        return [[]];
    }
    public override calculateRunes(runeList: Rune[]): number {

        let previous = 1;
        let total = previous;
        let values = [previous];

        for (let i = 1; i < runeList.length; i++) {
            let current = 0;
            if(runeList[i] instanceof Gebo) {
                total += values[values.length - 1] + values[values.length - 2];
                continue;
            }
            if(runeList[i-1] instanceof Gebo) {
                previous = values[values.length - 1] + values[values.length - 2];
            }
            current = new Convert().runeOperation(previous, runeList[i]) as number;
            previous = current;
            total += current;
            values.push(previous);
        }

        return total;
    }
}
