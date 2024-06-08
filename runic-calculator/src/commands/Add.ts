import { LeaRheingold } from "../Archaeologist/LeaRheingold";
import { Archaeologist } from "../Archaeologist/_archaeologist";
import { Rune } from "../Runes/_rune";
import { RuneOperationStrategy } from "./Strategy/_runeOperationStrategy";
import { RunicOperation } from "./_operation"
import { DefaultAdd } from "./Strategy/Add/DefaultAdd";
import { LeaRheingoldAdd } from "./Strategy/Add/LeaRheingoldAdd";

export class Add extends RunicOperation {
    private strategy: RuneOperationStrategy;
    private shouldReverse: boolean = false;

    constructor(archeologist: Archaeologist) {
        super();
        if (archeologist instanceof LeaRheingold) {
            this.strategy = new LeaRheingoldAdd();
        } else {
            this.strategy = new DefaultAdd();
        }
    }

    /**
     * 
     * This function will take a list of runes and add them together.
     * 
     * @param runeList 
     * @returns The combined string of runes.
     */
    public override listOperation(runeList: Rune[][], archeologist: Archaeologist): string | number {
        return this.strategy.listOperation(runeList, archeologist);
    }
}