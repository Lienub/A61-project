import { Rune } from "../Runes/_rune";
import { Thurisaz } from "../Runes/Rune";
import { RunicOperation } from "./_operation"

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
