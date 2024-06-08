import { RuneList } from '../../src/Runes/RuneList';
import { Convert } from '../../src/commands/Convert';
import { Add } from '../../src/commands/Add';
import { Archaeologist } from '../../src/Archaeologist/_archaeologist';
import { BjornStraussler } from '../../src/Archaeologist/BjornStraussler';

describe('RuneList Class Functionality', () => {
    test('Convert | Same runes : ᚠᚠᚠᚠ = 34', () => {
        const convertArch = new BjornStraussler('bjorn_straussler');
        const convertMock = new Convert(convertArch);
        
        const runeList = new RuneList('none', 'ᚠᚠᚠᚠ', convertMock, convertArch);
        expect(runeList.result).toBe(34);
    });

    test('Convert | Slide example : ᚠᚠᚨᚦ = 22', () => {
        const convertArch = new BjornStraussler('bjorn_straussler');
        const convertMock = new Convert(convertArch);

        const runeList = new RuneList('none', 'ᚠᚠᚨᚦ', convertMock, convertArch);
        expect(runeList.result).toBe(22);
    });

    test('Convert | Runic number | With each rune : ᚠᚢᚦᚨᚨ = 26', () => {
        const convertArch = new BjornStraussler('bjorn_straussler');
        const convertMock = new Convert(convertArch);

        const runeList = new RuneList('none', 'ᚠᚢᚦᚨᚨ', convertMock, convertArch);
        expect(runeList.result).toBe(26);
    });

    test('Addition | Runic number | Left longer than right : ᚠᚠᚨᚦ.ᚢᚢ = ᚠᚠᚨᚢᚦᚢ', () => {
        const convertArch = new BjornStraussler('bjorn_straussler');
        const addMock = new Add(convertArch);

        const runeList = new RuneList('none', 'ᚠᚠᚨᚦ.ᚢᚢ', addMock, convertArch);
        expect(runeList.result).toBe('ᚠᚠᚨᚢᚦᚢ');
    });

    test('Addition | Runic number | Left shorter than right : ᚢᚢ.ᚠᚠᚨᚦ = ᚠᚠᚢᚨᚢᚦ', () => {
        const convertArch = new BjornStraussler('bjorn_straussler');
        const addMock = new Add(convertArch);

        const runeList = new RuneList('none', 'ᚢᚢ.ᚠᚠᚨᚦ', addMock, convertArch);
        expect(runeList.result).toBe('ᚠᚠᚢᚨᚢᚦ');
    });
});
