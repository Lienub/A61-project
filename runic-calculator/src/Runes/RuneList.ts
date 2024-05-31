import { Convert } from "../commands/Convert";
import { Add } from "../commands/Add";
import { Rune } from "./_rune";
import { getRune } from "./Rune";
import { RunicOperation } from "../commands/_operation";

export class RuneList {
    operation: RunicOperation;
    list: Rune[] | Rune[][];

    constructor(input: string, operation: RunicOperation) {
        this.operation = operation;
        let runes;

        if (operation instanceof Convert) {
            this.list = [] as Rune[];
            runes = this.split(input) as string[];
            for (const rune of runes) {
                this.list.push(getRune(rune));
            }
        }
        else if (operation instanceof Add) {
            this.list = [] as Rune[][];
            runes = this.split(input) as string[][];
            for (const rune of runes) {
                let sublist = [];
                for (const subrune of rune) {
                    sublist.push(getRune(subrune));
                }
                this.list.push(sublist);
            }
        }
        else {
            throw new Error("Error");
        }
    }


    public get result(): number | string {
        return this.operation.listOperation(this.list);
    }

    public get values(): Rune[] | Rune[][] {
        return this.list;
    }

    private split(input: string): string[] | string[][] {
        switch (true) {
            case this.operation instanceof Convert:
                return input.split('').reverse();
            case this.operation instanceof Add:
                let res = [];

                let sub = input.split('.');

                for (const txt of sub) {
                    res.push(txt.split(''))
                }

                return res;

            default:
                throw new Error("Operation not supported.");
        }

    }


}