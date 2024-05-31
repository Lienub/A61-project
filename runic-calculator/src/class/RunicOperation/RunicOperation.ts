import { Rune, Thurisaz } from "../Runes/Rune";

export function getOperation(input: string): RunicOperation {
    switch (input) {
        case "convert":
            return new Convert();
        case "add":
            return new Add();
        default:
            throw new Error("Unsupported operation.");
    }
}

export abstract class RunicOperation {
    public abstract runeOperation(runeA: number | Rune[], runeB: Rune | Rune[]): number | string;
    public abstract listOperation(runeList: Rune[] | Rune[][]): number | string;
}

export class Convert extends RunicOperation {
    public override runeOperation(previousRune: number, rune: Rune): number | string {
        if (rune instanceof Thurisaz) {
            return previousRune * rune.decimal;
        } else {
            return previousRune + rune.decimal;
        }
    }

    public override listOperation(runeList: Rune[]): number | string {
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

export class Add extends RunicOperation {
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

    public override listOperation(runeList: Rune[][]): string {
        let temp = runeList[runeList.length - 1];
        let result = "";

        for (let i = 0; i < runeList.length - 1; i++) {
            result = this.runeOperation(temp, runeList[i]);
        }

        return result;
    }
}