import { RuneList } from '../../src/Runes/RuneList';
import { Convert } from '../../src/commands/Convert';
import { Add } from '../../src/commands/Add';

describe('Thorlaug Clan Runic Calculations', () => {
    test('Convert | Jokul | Simple runic number : ᚷᚠᚠ = 14', () => {
        const runeList = new RuneList('none', 'ᚷᚠᚠ', new Convert());
        expect(runeList.result).toBe(14);
    });

    test('Convert | Thorlaug | Simple runic number: ᚷᚢᚢ = 10', () => {
        const runeList = new RuneList('none', 'ᚷᚢᚢ', new Convert());
        expect(runeList.result).toBe(10);
    });

    test('Convert | Thorlaug | Simple runic number : ᚷᚦᚦ = 6', () => {
        const runeList = new RuneList('none', 'ᚷᚦᚦ', new Convert());
        expect(runeList.result).toBe(6);
    });

    test('Convert | Thorlaug | Simple runic number : ᚷᚨᚨ = 6', () => {
        const runeList = new RuneList('none', 'ᚷᚨᚨ', new Convert());
        expect(runeList.result).toBe(6);
    });

    test('Convert | Thorlaug | Runic number : ᚠᚠᚷᚨᚦ = 27', () => {
        const runeList = new RuneList('none', 'ᚠᚠᚷᚨᚦ', new Convert());
        expect(runeList.result).toBe(27);
    });

    test('Convert | Thorlaug | Runic number : ᚷᚠᚠᚨᚦ = 41', () => {
        const runeList = new RuneList('none', 'ᚷᚠᚠᚨᚦ', new Convert());
        expect(runeList.result).toBe(41);
    });

    test('Addition | Thorlaug | Keep Kormak rune attached : ᚠᚷᚠᚨᚦ.ᚢᚦᚢᚢ = ᚠᚢᚷᚠᚦᚨᚢᚦᚢ', () => {
        const runeList = new RuneList('none', 'ᚠᚷᚠᚨᚦ.ᚢᚦᚢᚢ', new Add());
        expect(runeList.result).toBe('ᚠᚢᚷᚠᚦᚨᚢᚦᚢ');
    });

    test('Addition | Thorlaug | Keep Kormak rune attached : ᚠᚠᚷᚨᚦ.ᚢᚦᚢᚢ = ᚠᚢᚠᚦᚷᚨᚢᚦᚢ', () => {
        const runeList = new RuneList('none', 'ᚠᚠᚷᚨᚦ.ᚢᚦᚢᚢ', new Add());
        expect(runeList.result).toBe('ᚠᚢᚠᚦᚷᚨᚢᚦᚢ');
    });

    test('Addition | Thorlaug | Keep Kormak rune attached : ᚠᚠᚨᚦ.ᚢᚦᚷᚢᚢ = ᚠᚢᚠᚦᚨᚷᚢᚦᚢ', () => {
        const runeList = new RuneList('none', 'ᚠᚠᚨᚦ.ᚢᚦᚷᚢᚢ', new Add());
        expect(runeList.result).toBe('ᚠᚢᚠᚦᚨᚷᚢᚦᚢ');
    });
});
