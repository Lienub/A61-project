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
export function getOperation(input: string): RunicOperation {
    switch (input) {
        case "convert":
            return new Convert();
        case "add":
            return new Add();
        default:
            throw new Error("Unsupported operation.");
    }
}