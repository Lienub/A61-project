import { RuneList } from '../../src/Runes/RuneList';
import { Convert } from '../../src/commands/Convert';
import { Add } from '../../src/commands/Add';
import { BjornStraussler } from '../../src/Archaeologist/BjornStraussler';

describe('Jokul Clan Runic Calculations', () => {
    const convertArch = new BjornStraussler('bjorn_straussler');
    const convertMock = new Convert(convertArch);
    const addMock = new Add(convertArch);

    test('Convert | Jokul | Right to left : ᚱᚦᚨᚠᚠ = 28', () => {
        const runeList = new RuneList('ᚱᚦᚨᚠᚠ', convertMock, convertArch);
        expect(runeList.result).toBe(28);
    });

    test('Convert | Jokul | Left to right : ᚠᚠᚨᚦᚱ = 28', () => {
        const runeList = new RuneList('ᚠᚠᚨᚦᚱ', convertMock, convertArch);
        expect(runeList.result).toBe(28);
    });

    test('Addition | Jokul | Right to left : ᚱᚠᚠᚨᚦ.ᚱᚢᚢ = ᚱᚠᚠᚨᚢᚦᚢ', () => {
        const runeList = new RuneList('ᚱᚠᚠᚨᚦ.ᚱᚢᚢ', addMock, convertArch);
        expect(runeList.result).toBe('ᚱᚠᚠᚨᚢᚦᚢ');
    });

    test('Addition | Jokul | Left to right : ᚠᚠᚨᚦᚱ.ᚢᚢᚱ = ᚢᚠᚢᚠᚨᚦᚱ', () => {
        const runeList = new RuneList('ᚠᚠᚨᚦᚱ.ᚢᚢᚱ', addMock, convertArch);
        expect(runeList.result).toBe('ᚢᚠᚢᚠᚨᚦᚱ');
    });
});
