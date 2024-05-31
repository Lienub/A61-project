import { RunicOperation } from "./_operation"
import { Add } from "./Add";
import { Convert } from "./Convert";

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