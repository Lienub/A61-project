import { Clan } from "../Clans/_clan";

export abstract class Rune {
    public abstract get decimal() : number;
    public abstract get text(): string;
    public abstract get clan(): Clan | null;
}
