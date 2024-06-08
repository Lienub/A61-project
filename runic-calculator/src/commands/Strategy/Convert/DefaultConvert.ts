import { RuneOperationStrategy } from "../_runeOperationStrategy";
import { Rune } from "../../../Runes/_rune";
import { Gebo, Raidho, Thurisaz } from "../../../Runes/Rune";
import { BjornStraussler } from "../../../Archaeologist/BjornStraussler";

/**
 * @title Default Convert
 */
export class DefaultConvert implements RuneOperationStrategy {
    /**
  * 
  * This function takes two runes and returns the value of the two runes combined.
  * 
  * @param previousRune 
  * @param rune 
  * @returns The value of the two runes combined.
  */
    public runeOperation(previousRune: number, rune: Rune): number | string {
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
    public listOperation(runeList: Rune[]): number | string {
        let previous = 1;

        // Jokul Clan
        const runeWithRaidhoInstance = runeList.find(rune => {
            return rune instanceof Raidho;
        });

        // Thorlaug Clan
        const indexOfRuneGebo = runeList.findIndex(rune => rune instanceof Gebo);
        const runeWithGeboInstance = indexOfRuneGebo !== -1 ? runeList[indexOfRuneGebo] : undefined;

        // Jokul Clan
        if (runeWithRaidhoInstance && runeWithRaidhoInstance.clan) {
            runeList = runeWithRaidhoInstance.clan.adjustRunesConvert(runeList);
        }

        // Thorlaug Clan
        if (runeWithGeboInstance && runeWithGeboInstance.clan) {
            return runeWithGeboInstance.clan.calculateRunes(runeList, new BjornStraussler('bjorn_straussler'));
        }


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
