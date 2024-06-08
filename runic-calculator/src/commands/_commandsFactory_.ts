import { Archaeologist } from "../Archaeologist/_archaeologist";
import { RunicOperation } from "./_operation"
import { Add } from "./Add";
import { Convert } from "./Convert";

/**
 * 
 * This function will take a string and return the appropriate operation.
 * 
 * @param input 
 * @returns The operation to be performed.
 */
export function getOperation(input: string, archaeologist: Archaeologist): RunicOperation {
    switch (input) {
        case "convert":
            return new Convert(archaeologist);
        case "add":
            return new Add(archaeologist);
        default:
            throw new Error("Unsupported operation.");
    }
}