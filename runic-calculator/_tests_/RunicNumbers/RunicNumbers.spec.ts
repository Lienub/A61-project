import { RuneList } from '../../src/Runes/RuneList';
import { Convert } from '../../src/commands/Convert';
import { Add } from '../../src/commands/Add';

describe('RuneList Class Functionality', () => {
    test('Convert | Same runes : ᚠᚠᚠᚠ = 34', () => {
        const runeList = new RuneList('none', 'ᚠᚠᚠᚠ', new Convert());
        expect(runeList.result).toBe(34);
    });

    test('Convert | Slide example : ᚠᚠᚨᚦ = 22', () => {
        const runeList = new RuneList('none', 'ᚠᚠᚨᚦ', new Convert());
        expect(runeList.result).toBe(22);
    });

    test('Convert | Runic number | With each rune : ᚠᚢᚦᚨᚨ = 26', () => {
        const runeList = new RuneList('none', 'ᚠᚢᚦᚨᚨ', new Convert());
        expect(runeList.result).toBe(26);
    });

    test('Addition | Runic number | Left longer than right : ᚠᚠᚨᚦ.ᚢᚢ = ᚠᚠᚨᚢᚦᚢ', () => {
        const runeList = new RuneList('none', 'ᚠᚠᚨᚦ.ᚢᚢ', new Add());
        expect(runeList.result).toBe('ᚠᚠᚨᚢᚦᚢ');
    });

    test('Addition | Runic number | Left shorter than right : ᚢᚢ.ᚠᚠᚨᚦ = ᚠᚠᚢᚨᚢᚦ', () => {
        const runeList = new RuneList('none', 'ᚢᚢ.ᚠᚠᚨᚦ', new Add());
        expect(runeList.result).toBe('ᚠᚠᚢᚨᚢᚦ');
    });
});
