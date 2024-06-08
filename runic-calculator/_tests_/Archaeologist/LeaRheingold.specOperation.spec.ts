import { LeaRheingold } from '../../src/Archaeologist/LeaRheingold';
import { RuneList } from '../../src/Runes/RuneList';
import { Add } from '../../src/commands/Add';
import { Convert } from '../../src/commands/Convert';

describe('Bjorn straussler operation', () => {
    test('Convert | Single rune : ᚠ = 1', () => {
        const convertArch = new LeaRheingold('lea_rheingold');
        const convertMock = new Convert(convertArch);
        
        const runeList = new RuneList('ᚠ', convertMock, convertArch);
        expect(runeList.result).toBe(1);
    });

    test('Convert | Runic number : ᚠᚠᚠᚠ = 40', () => {
        const convertArch = new LeaRheingold('lea_rheingold');
        const convertMock = new Convert(convertArch);

        const runeList = new RuneList('ᚠᚠᚠᚠ', convertMock, convertArch);
        expect(runeList.result).toBe(40);
    });

    test('Convert | Runic number | Slide example: ᚠᚠᚨᚦ = 27', () => {
        const convertArch = new LeaRheingold('lea_rheingold');
        const convertMock = new Convert(convertArch);

        const runeList = new RuneList('ᚠᚠᚨᚦ', convertMock, convertArch);
        expect(runeList.result).toBe(27);
    });

    test('Addition | Lea Rheingold | Single rune : ᚦ.ᚢ = ᚦᚢ', () => {
        const convertArch = new LeaRheingold('lea_rheingold');
        const addMock = new Add(convertArch);

        const runeList = new RuneList('ᚦ.ᚢ', addMock, convertArch);
        expect(runeList.result).toBe('ᚦᚢ');
    });

    test('Addition | Lea Rheingold | Runic number | Left shorter than right : ᚢᚢ.ᚠᚠᚨᚦ = ᚠᚠᚢᚨᚢᚦ', () => {
        const convertArch = new LeaRheingold('lea_rheingold');
        const addMock = new Add(convertArch);

        const runeList = new RuneList('ᚢᚢ.ᚠᚠᚨᚦ', addMock, convertArch);
        expect(runeList.result).toBe('ᚠᚠᚢᚨᚢᚦ');
    });
});