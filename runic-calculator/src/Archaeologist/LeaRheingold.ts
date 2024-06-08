import { Archaeologist } from "./_archaeologist";
import { RunicSymbols } from "../enums/RunicSymbols";

export class LeaRheingold extends Archaeologist {

    constructor(option: string) {
        super(option);
    }

    public getDecimalRune(runicSymbol: string): number {
        switch (runicSymbol) {
            case RunicSymbols.FEOH:
                return 3;
            case RunicSymbols.URUZ:
                return 5;
            case RunicSymbols.THURISAZ:
                return 3;
            case RunicSymbols.ANSUZ:
                return 2;
            case RunicSymbols.RAIDHO:
                return 0;
            case RunicSymbols.GEBO:
                return 5;
            default:
                return 0;
        }
    }
}