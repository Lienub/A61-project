import { Convert } from "../commands/Convert";
import { Add } from "../commands/Add";
import { Rune } from "./_rune";
import { getRune } from "./Rune";
import { RunicOperation } from "../commands/_operation";
import { Archaeologist } from "../Archaeologist/_archaeologist";
import { BjornStraussler, LeaRheingold } from "../Archaeologist/Archaeologist";

export class RuneList {
    operation: RunicOperation;
    archeologist: Archaeologist;
    list: Rune[] | Rune[][];

    constructor(option: string, input: string, operation: RunicOperation) {
        this.operation = operation;
        this.archeologist = new BjornStraussler(option); // default
        let runes;

        if (option !== "none") {
            option = option.split('=')[1];
            switch (option) {
                case "lea_rheingold":
                    this.archeologist = new LeaRheingold(option);
                    break;
                case "bjorn_straussler":
                    break;
                default:
                    throw new Error("Unsupported archaeologist.");
            }
        }



        if (operation instanceof Convert) {
            this.list = [] as Rune[];
            runes = this.split(input) as string[];
            for (const rune of runes) {
                this.list.push(getRune(rune, this.archeologist));
            }
        }
        else if (operation instanceof Add) {
            this.list = [] as Rune[][];
            runes = this.split(input) as string[][];
            for (const rune of runes) {
                let sublist = [];
                for (const subrune of rune) {
                    sublist.push(getRune(subrune, this.archeologist));
                }
                this.list.push(sublist);
            }

        }
        else {
            throw new Error("Error");
        }
    }

    public get result(): number | string {
        return this.operation.listOperation(this.list, this.archeologist);
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