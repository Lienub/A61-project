import { RuneList } from '../../src/Runes/RuneList';
import { Convert } from '../../src/commands/Convert';
import { Add } from '../../src/commands/Add';
import { BjornStraussler } from '../../src/Archaeologist/BjornStraussler';

describe('Thorlaug Clan Runic Calculations', () => {
    const convertArch = new BjornStraussler('bjorn_straussler');
    const convertMock = new Convert(convertArch);
    const addMock = new Add(convertArch);

    test('Convert | Jokul | Simple runic number : ᚷᚠᚠ = 14', () => {
        const runeList = new RuneList('ᚷᚠᚠ', convertMock, convertArch);
        expect(runeList.result).toBe(14);
    });

    test('Convert | Thorlaug | Simple runic number: ᚷᚢᚢ = 10', () => {
        const runeList = new RuneList('ᚷᚢᚢ', convertMock, convertArch);
        expect(runeList.result).toBe(10);
    });

    test('Convert | Thorlaug | Simple runic number : ᚷᚦᚦ = 6', () => {
        const runeList = new RuneList('ᚷᚦᚦ', convertMock, convertArch);
        expect(runeList.result).toBe(6);
    });

    test('Convert | Thorlaug | Simple runic number : ᚷᚨᚨ = 6', () => {
        const runeList = new RuneList('ᚷᚨᚨ', convertMock, convertArch);
        expect(runeList.result).toBe(6);
    });

    test('Convert | Thorlaug | Runic number : ᚠᚠᚷᚨᚦ = 27', () => {
        const runeList = new RuneList('ᚠᚠᚷᚨᚦ', convertMock, convertArch);
        expect(runeList.result).toBe(27);
    });

    test('Convert | Thorlaug | Runic number : ᚷᚠᚠᚨᚦ = 41', () => {
        const runeList = new RuneList('ᚷᚠᚠᚨᚦ', convertMock, convertArch);
        expect(runeList.result).toBe(41);
    });

    test('Addition | Thorlaug | Keep Kormak rune attached : ᚠᚷᚠᚨᚦ.ᚢᚦᚢᚢ = ᚠᚢᚷᚠᚦᚨᚢᚦᚢ', () => {
        const runeList = new RuneList('ᚠᚷᚠᚨᚦ.ᚢᚦᚢᚢ', addMock, convertArch);
        expect(runeList.result).toBe('ᚠᚢᚷᚠᚦᚨᚢᚦᚢ');
    });

    test('Addition | Thorlaug | Keep Kormak rune attached : ᚠᚠᚷᚨᚦ.ᚢᚦᚢᚢ = ᚠᚢᚠᚦᚷᚨᚢᚦᚢ', () => {
        const runeList = new RuneList('ᚠᚠᚷᚨᚦ.ᚢᚦᚢᚢ', addMock, convertArch);
        expect(runeList.result).toBe('ᚠᚢᚠᚦᚷᚨᚢᚦᚢ');
    });

    test('Addition | Thorlaug | Keep Kormak rune attached : ᚠᚠᚨᚦ.ᚢᚦᚷᚢᚢ = ᚠᚢᚠᚦᚨᚷᚢᚦᚢ', () => {
        const runeList = new RuneList('ᚠᚠᚨᚦ.ᚢᚦᚷᚢᚢ', addMock, convertArch);
        expect(runeList.result).toBe('ᚠᚢᚠᚦᚨᚷᚢᚦᚢ');
    });
});
