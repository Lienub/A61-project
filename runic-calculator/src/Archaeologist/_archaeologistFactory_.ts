import { BjornStraussler } from "./BjornStraussler";
import { LeaRheingold } from "./LeaRheingold";
import { Archaeologist } from "./_archaeologist";

/**
 * 
 * This function returns the appropriate archaeologist based on the option.
 * 
 * @param option 
 * @returns The operation to be performed.
 */
export function getArchaeologist(option: string): Archaeologist {
    switch (option) {
        case "lea_rheingold":
            return new LeaRheingold(option);
        case "bjorn_straussler":
            return new BjornStraussler(option);
        default:
            throw new Error("Unsupported archaeologist.");
    }
}