export abstract class Archaeologist {
    protected _option: string;
    constructor(optino: string) {
        this._option = optino;
    }
    public get option(): string {
        return this._option;
    }
    public abstract getDecimalRune(runicSymbol: string): number;
}