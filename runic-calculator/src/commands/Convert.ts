import { Archaeologist } from "../Archaeologist/_archaeologist";
import { Rune } from "../Runes/_rune";
import { Ansuz, Feoh, Gebo, Raidho, Thurisaz } from "../Runes/Rune";
import { RunicOperation } from "./_operation"
import { BjornStraussler, LeaRheingold } from "../Archaeologist/Archaeologist";

export class Convert extends RunicOperation {
    /**
     * 
     * This function takes two runes and returns the value of the two runes combined.
     * 
     * @param previousRune 
     * @param rune 
     * @returns The value of the two runes combined.
     */
    public override runeOperation(previousRune: number, rune: Rune,  archeologist: Archaeologist): number | string {
        if(archeologist instanceof BjornStraussler) {
            if (rune instanceof Thurisaz) {
                return previousRune * rune.decimal;
            } else {
                return previousRune + rune.decimal;
            }
        } else if(archeologist instanceof LeaRheingold) {
            if (rune instanceof Feoh || rune instanceof Ansuz) {
                return previousRune * rune.decimal;
            } else {
                return previousRune + rune.decimal;
            }
        } else {
            throw new Error("Unsupported archaeologist.");
        }
    }

    /**
     * 
     * This function takes a list of runes and returns the total value of the runes in the list.
     * 
     * @param runeList 
     * @returns The total value of the runes in the list.
     */
    public override listOperation(runeList: Rune[],  archeologist: Archaeologist): number | string {
        let index = 1;
        let previous = 1;

        // Jokul Clan
        const runeWithRaidhoInstance = runeList.find(rune => {
            return rune instanceof Raidho;
        });

        // Thorlaug Clan
        const indexOfRuneGebo = runeList.findIndex(rune => rune instanceof Gebo);
        const runeWithGeboInstance = indexOfRuneGebo !== -1 ? runeList[indexOfRuneGebo] : undefined;

        // Jokul Clan
        if(runeWithRaidhoInstance && runeWithRaidhoInstance.clan) {
            runeList = runeWithRaidhoInstance.clan.adjustRunesConvert(runeList);

            if(archeologist instanceof LeaRheingold) { // Jokul Clan + Lea Rheingold
                runeList.reverse();
                index = 0;
            }
        }

        // Thorlaug Clan
        if(!(archeologist instanceof LeaRheingold) && runeWithGeboInstance && runeWithGeboInstance.clan) {
            return runeWithGeboInstance.clan.calculateRunes(runeList, archeologist);
        }

        if(archeologist instanceof LeaRheingold && runeWithGeboInstance && indexOfRuneGebo == 0) {
            previous = 0;
            index = 0;
        }

        let total = previous;

        for (let i = index; i < runeList.length; i++) {
            let current = 0;
            if(archeologist instanceof LeaRheingold && runeList[i] instanceof Gebo) {
                current = runeList[i].decimal;
                if(i-1 >= 0 && runeList[i-1] instanceof Gebo) {
                current = runeList[i].decimal + runeList[i-1].decimal;
                }
                previous = current;
                total += current;
                continue;
            }
            
            current = this.runeOperation(previous, runeList[i], archeologist) as number;
            
            previous = current;
            total += current;
        }

        return total;
    }
}
