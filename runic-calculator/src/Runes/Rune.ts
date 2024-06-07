import { Clan } from "../Clans/_clan";
import { Rune } from "./_rune";
import { RunicSymbols } from "../enums/RunicSymbols";
import { JokulClan, Thorlaug } from "../Clans/Clan";
import { Archaeologist } from "../Archaeologist/_archaeologist";

/**
 * 
 * This function will return the rune object based on the symbol.
 * 
 * @param symbol 
 * @returns The rune object.
 */
export function getRune(symbol: string, archaeologist: Archaeologist) : Rune {
    switch (symbol) {
        case RunicSymbols.FEOH:
            return new Feoh(archaeologist.getDecimalRune(RunicSymbols.FEOH));
        case RunicSymbols.URUZ:
            return new Uruz(archaeologist.getDecimalRune(RunicSymbols.URUZ));
        case RunicSymbols.THURISAZ:
            return new Thurisaz(archaeologist.getDecimalRune(RunicSymbols.THURISAZ));
        case RunicSymbols.ANSUZ:
            return new Ansuz(archaeologist.getDecimalRune(RunicSymbols.ANSUZ));
        case RunicSymbols.RAIDHO:
            return new Raidho(archaeologist.getDecimalRune(RunicSymbols.RAIDHO));
        case RunicSymbols.GEBO:
            return new Gebo(archaeologist.getDecimalRune(RunicSymbols.GEBO));
        default:
            throw new Error("Incompatible symbol");
    }
}

export class Feoh extends Rune {
    public override get text(): string {
        return RunicSymbols.FEOH;
    }

    public override get clan(): Clan | null {
        return null;
    }
}

export class Uruz extends Rune {
    public override get text(): string {
        return RunicSymbols.URUZ;
    }

    public override get clan(): Clan | null {
        return null;
    }
}

export class Thurisaz extends Rune {
    public override get text(): string {
        return RunicSymbols.THURISAZ;
    }

    public override get clan(): Clan | null {
        return null;
    }
}

export class Ansuz extends Rune {
    public override get text(): string {
        return RunicSymbols.ANSUZ;
    }

    public override get clan(): Clan | null {
        return null;
    }
}

export class Raidho extends Rune {
    public override get text(): string {
        return RunicSymbols.RAIDHO;
    }
    public override get clan(): Clan | null {
        return new JokulClan();
    }
}

export class Gebo extends Rune {
    public override get text(): string {
        return RunicSymbols.GEBO;
    }

    public override get clan(): Clan | null {
        return new Thorlaug();
    }
}