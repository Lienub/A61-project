import { Archaeologist } from "../Archaeologist/_archaeologist";
import { Rune } from "../Runes/_rune";
import { RunicOperation } from "./_operation"
import { LeaRheingold } from "../Archaeologist/LeaRheingold";
import { LeaRheingoldConvert } from "./Strategy/Convert/LeaRheingoldConvert";
import { DefaultConvert } from "./Strategy/Convert/DefaultConvert";
import { RuneOperationStrategy } from "./Strategy/_runeOperationStrategy";

export class Convert extends RunicOperation {
    private strategy: RuneOperationStrategy;
    private shouldReverse: boolean = false;

    constructor(archeologist: Archaeologist) {
        super();
        if (archeologist instanceof LeaRheingold) {
            this.strategy = new LeaRheingoldConvert();
        } else {
            this.strategy = new DefaultConvert();
        }
    }

    /**
     * 
     * This function will take a list of runes and add them together.
     * 
     * @param runeList 
     * @returns The combined string of runes.
     */
    public override listOperation(runeList: Rune[], archeologist: Archaeologist): string | number {
        return this.strategy.listOperation(runeList, archeologist);
    }
}