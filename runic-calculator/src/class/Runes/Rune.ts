import { Convert, RunicOperation } from "../RunicOperation/RunicOperation";

export enum RunicSymbols {
    FEOH = 'ᚠ',
    URUZ = 'ᚢ',
    THURISAZ = 'ᚦ',
    ANSUZ = 'ᚨ'
}

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

export abstract class Rune {
    public abstract get decimal() : number;
    public abstract get text(): string;
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


