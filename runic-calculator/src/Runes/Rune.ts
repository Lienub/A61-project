import { Clan } from "../Clans/_clan";
import { Rune } from "./_rune";
import { RunicSymbols } from "../enums/RunicSymbols";
import { JokulClan, Thorlaug } from "../Clans/Clan";

/**
 * 
 * This function will return the rune object based on the symbol.
 * 
 * @param symbol 
 * @returns The rune object.
 */
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
        case RunicSymbols.RAIDHO:
            return new Raidho();
        case RunicSymbols.GEBO:
            return new Gebo();
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

    public override get clan(): Clan | null {
        return null;
    }
}

export class Uruz extends Rune {
    public override get decimal(): number {
        return 3;
    }

    public override get text(): string {
        return 'ᚢ';
    }

    public override get clan(): Clan | null {
        return null;
    }
}

export class Thurisaz extends Rune {
    public override get decimal(): number {
        return 2;
    }

    public override get text(): string {
        return 'ᚦ';
    }

    public override get clan(): Clan | null {
        return null;
    }
}

export class Ansuz extends Rune {
    public override get decimal(): number {
        return 1;
    }

    public override get text(): string {
        return 'ᚨ';
    }

    public override get clan(): Clan | null {
        return null;
    }
}

export class Raidho extends Rune {
    public override get decimal(): number {
        return 0;
    }

    public override get text(): string {
        return 'ᚱ';
    }
    public override get clan(): Clan | null {
        return new JokulClan();
    }
}

export class Gebo extends Rune {
    public override get decimal(): number {
        return 0;
    }

    public override get text(): string {
        return 'ᚷ';
    }

    public override get clan(): Clan | null {
        return new Thorlaug();
    }
}