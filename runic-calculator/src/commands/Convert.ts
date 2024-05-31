import { Rune } from "../Runes/_rune";
import { Gebo, Raidho, Thurisaz } from "../Runes/Rune";
import { RunicOperation } from "./_operation"

export class Convert extends RunicOperation {
    /**
     * 
     * This function takes two runes and returns the value of the two runes combined.
     * 
     * @param previousRune 
     * @param rune 
     * @returns The value of the two runes combined.
     */
    public override runeOperation(previousRune: number, rune: Rune): number | string {
        if (rune instanceof Thurisaz) {
            return previousRune * rune.decimal;
        } else {
            return previousRune + rune.decimal;
        }
    }

    /**
     * 
     * This function takes a list of runes and returns the total value of the runes in the list.
     * 
     * @param runeList 
     * @returns The total value of the runes in the list.
     */
    public override listOperation(runeList: Rune[]): number | string {

        const runeWithRaidhoInstance = runeList.find(rune => {
            return rune instanceof Raidho;
        });
        const runeWithGeboInstance = runeList.find(rune => {
            return rune instanceof Gebo;
        });

        if(runeWithRaidhoInstance && runeWithRaidhoInstance.clan) {
            runeList = runeWithRaidhoInstance.clan.adjustRunesConvert(runeList);
        }

        if(runeWithGeboInstance && runeWithGeboInstance.clan) {
            return runeWithGeboInstance.clan.calculateRunes(runeList);
        }

        let previous = 1;
        let total = previous;

        for (let i = 1; i < runeList.length; i++) {
            let current = 0;
            current = this.runeOperation(previous, runeList[i]) as number;
            previous = current;
            total += current;
        }

        return total;
    }
}
