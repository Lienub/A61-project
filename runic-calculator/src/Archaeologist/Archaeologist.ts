import { Archaeologist } from "./_archaeologist";
import { RunicSymbols } from "../enums/RunicSymbols";

export class BjornStraussler extends Archaeologist {
    constructor(option: string) {
        super(option);
    }
    public get option(): string {
        return this._option;
    }
    public getDecimalRune(runicSymbol: string): number {
        switch(runicSymbol) {
            case RunicSymbols.FEOH:
                return 5;
            case RunicSymbols.URUZ:
                return 3;
            case RunicSymbols.THURISAZ:
                return 2;
            case RunicSymbols.ANSUZ:
                return 1;
            case RunicSymbols.RAIDHO:
                return 0;
            case RunicSymbols.GEBO:
                return 0;
            default:
                return 0;
        }
    }
}

export class LeaRheingold extends Archaeologist {

    constructor(option: string) {
        super(option);
    }
    public get option(): string {
        return this._option;
    }
    public getDecimalRune(runicSymbol: string): number {
        switch(runicSymbol) {
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
                return 0;
            default:
                return 0;
        }
    }
}