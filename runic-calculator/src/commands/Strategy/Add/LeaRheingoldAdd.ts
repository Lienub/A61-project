import { RuneOperationStrategy } from "../_runeOperationStrategy";
import { Rune } from "../../../Runes/_rune";
import { Raidho } from "../../../Runes/Rune";

/**
 * @title Lea Rheingold Add
 */

export class LeaRheingoldAdd implements RuneOperationStrategy {

    private shouldReverse: boolean = false;
    /**
     * 
     * This function will take two runes and add them together.
     * 
     * @param runeLeft 
     * @param runeRight 
     * @returns The combined string of runes.
     */
    public runeOperation(runeLeft: Rune[], runeRight: Rune[]): string {
        const maxLength = Math.max(runeLeft.length, runeRight.length);
        let mergedRunes = '';

        // For Jokul Clan
        const runeWithRaidhoInstance = runeLeft.find(rune => {
            return rune instanceof Raidho;
        });

        if (runeWithRaidhoInstance) {
            mergedRunes += runeLeft.shift()?.text || '';
        }

        for (let i = 0; i < maxLength; i++) {
            let leftRune = runeLeft[runeLeft.length - 1 - i]?.text || '';
            let rightRune = runeRight[runeRight.length - 1 - i]?.text || '';

            if (this.shouldReverse) {
                leftRune = runeLeft[i]?.text || '';
                rightRune = runeRight[i]?.text || '';
            }


            if (runeWithRaidhoInstance) {
                mergedRunes = mergedRunes + leftRune + rightRune;
                continue;
            }
            mergedRunes = rightRune + leftRune + mergedRunes;
        }

        return mergedRunes;
    }

    /**
     * 
     * This function will take a list of runes and add them together.
     * 
     * @param runeList 
     * @returns The combined string of runes.
     */

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public listOperation(runeList: Rune[][]): string {
        let temp = runeList[runeList.length - 1];
        let result = "";

        // For Jokul Clan
        const runeWithRaidhoInstance = temp.find(rune => {
            return rune instanceof Raidho;
        });

        // For Jokul Clan
        if (runeWithRaidhoInstance) {
            if (runeList[0][runeList[0].length - 1] instanceof Raidho) {
                this.shouldReverse = true;
            }
            if (runeWithRaidhoInstance.clan) {
                [temp, runeList[0]] = runeWithRaidhoInstance.clan.adjustRunesAdd(temp, runeList[0]);
            } else {
                throw new Error("Clan is null, cannot adjust runes");
            }
        }

        for (let i = 0; i < runeList.length - 1; i++) {
            result = this.runeOperation(temp, runeList[i]);
        }

        return this.shouldReverse ? result.split('').reverse().join('') : result;
    }
}
