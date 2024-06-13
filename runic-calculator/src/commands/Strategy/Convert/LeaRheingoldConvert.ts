import { RuneOperationStrategy } from "../_runeOperationStrategy";
import { Rune } from "../../../Runes/_rune";
import { Ansuz, Feoh, Gebo, Kauna, Raidho } from "../../../Runes/Rune";
import { LeaRheingold } from "../../../Archaeologist/LeaRheingold";

/**
 * @title Lea Rheingold Convert
 */
export class LeaRheingoldConvert implements RuneOperationStrategy {
    /**
 * 
 * This function takes two runes and returns the value of the two runes combined.
 * 
 * @param previousRune 
 * @param rune 
 * @returns The value of the two runes combined.
 */
    public runeOperation(previousRune: number, rune: Rune): number | string {
        if (rune instanceof Feoh || rune instanceof Ansuz) {
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public listOperation(runeList: Rune[]): number | string {
        let index = 1;
        let previous = 1;

        // Jokul Clan
        const runeWithRaidhoInstance = runeList.find(rune => {
            return rune instanceof Raidho;
        });

        // Kormak Clan
        const runeWithKaunaInstance = runeList.find(rune => {
            return rune instanceof Kauna;
        });

        // Thorlaug Clan
        const indexOfRuneGebo = runeList.findIndex(rune => rune instanceof Gebo);
        const runeWithGeboInstance = indexOfRuneGebo !== -1 ? runeList[indexOfRuneGebo] : undefined;

        // Jokul Clan
        if (runeWithRaidhoInstance && runeWithRaidhoInstance.clan) {
            runeList = runeWithRaidhoInstance.clan.adjustRunesConvert(runeList);
            runeList.reverse();
            index = 0;
        }

        // Kormak Clan
        if (runeWithKaunaInstance && runeWithKaunaInstance.clan) {
            return runeWithKaunaInstance.clan.calculateRunes(runeList, new LeaRheingold('lea_rheingold'));
        }

        // Thorlaug Clan
        if (runeWithGeboInstance && runeWithGeboInstance.clan) {
            return runeWithGeboInstance.clan.calculateRunes(runeList, new LeaRheingold('lea_rheingold'));
        }

        if (runeWithGeboInstance && indexOfRuneGebo == 0) {
            previous = 0;
            index = 0;
        }

        let total = previous;

        for (let i = index; i < runeList.length; i++) {
            let current = 0;
            if (runeList[i] instanceof Gebo) {
                current = runeList[i].decimal;
                if (i - 1 >= 0 && runeList[i - 1] instanceof Gebo) {
                    current = runeList[i].decimal + runeList[i - 1].decimal;
                }
                previous = current;
                total += current;
                continue;
            }

            current = this.runeOperation(previous, runeList[i]) as number;

            previous = current;
            total += current;
        }

        return total;
    }
}
