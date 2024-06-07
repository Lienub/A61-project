import { Archaeologist } from "../Archaeologist/_archaeologist";
import { Clan } from "../Clans/_clan";

export abstract class Rune {
    protected value: number;
    constructor(decimal: number) {
        this.value = decimal;
    }
    public get decimal(): number {
        return this.value;
    }
    public abstract get text(): string;
    public abstract get clan(): Clan | null;
}
