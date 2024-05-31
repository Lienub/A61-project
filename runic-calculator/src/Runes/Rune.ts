import { Convert } from "../commands/Convert";
import { RunicOperation } from "../commands/_operation";
import { Rune } from "./_rune";
import { RunicSymbols } from "../enums/RunicSymbols";

export function getRune(symbol: string) : Rune {
    switch (symbol) {
        case RunicSymbols.FEOH:
            return new Feoh();
        case RunicSymbols.URUZ:
            return new Uruz();
        case RunicSymbols.THURISAZ:
            return new Thurisaz();
        case RunicSymbols.ANSUZ:
            return new Ansuz();
        default:
            throw new Error("Incompatible symbol");
    }
}

export class Feoh extends Rune {
    public override get decimal(): number {
        return 5;
    }

    public override get text(): string {
        return 'ᚠ';
    }
}

export class Uruz extends Rune {
    public override get decimal(): number {
        return 3;
    }

    public override get text(): string {
        return 'ᚢ';
    }
}

export class Thurisaz extends Rune {
    public override get decimal(): number {
        return 2;
    }

    public override get text(): string {
        return 'ᚦ';
    }
}

export class Ansuz extends Rune {
    public override get decimal(): number {
        return 1;
    }

    public override get text(): string {
        return 'ᚨ';
    }
}


