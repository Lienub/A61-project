import { Raidho } from "../Runes/Rune";
import { Rune } from "../Runes/_rune";
import { RunicOperation } from "./_operation"

export class Add extends RunicOperation {
    
    /**
     * 
     * This function will take two runes and add them together.
     * 
     * @param runeLeft 
     * @param runeRight 
     * @returns The combined string of runes.
     */
    public override runeOperation(runeLeft: Rune[], runeRight: Rune[]): string {
        const maxLength = Math.max(runeLeft.length, runeRight.length);
        let mergedRunes = '';

        for (let i = 0; i < maxLength; i++) {
            const leftRune = runeLeft[runeLeft.length - 1 - i]?.text || '';
            const rightRune = runeRight[runeRight.length - 1 - i]?.text || '';
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
    public override listOperation(runeList: Rune[][]): string {
        let temp = runeList[runeList.length - 1];
        let result = "";
        let shouldReverse = false;

        // For Jokul Clan
        const runeWithRaidhoInstance = temp.find(rune => {
            return rune instanceof Raidho;
        });

        // For Jokul Clan
        if (runeWithRaidhoInstance) {
            if(runeList[0][runeList[0].length - 1] instanceof Raidho) {
                shouldReverse = true;
            }
            [runeList[0], temp] = runeWithRaidhoInstance.clan.adjustRunesAdd(runeList[0], temp)
        }

        for (let i = 0; i < runeList.length - 1; i++) {
            result = this.runeOperation(temp, runeList[i]);
        }

        return shouldReverse ? result.split('').reverse().join('') : result;
    }
}