import { Rune } from "../Runes/_rune";
import { RunicOperation } from "./_operation"

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