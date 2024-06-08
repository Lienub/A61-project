import { BjornStraussler } from '../../src/Archaeologist/BjornStraussler';
import { getArchaeologist } from "../../src/Archaeologist/_archaeologistFactory_";
import { Convert } from '../../src/commands/Convert';

describe('RuneList Class Error Handling', () => {
    test('should throw error for unsupported archaeologist', () => {
        const option = "test_straussler";
        
        expect(() => {
            getArchaeologist('option');
        }).toThrow('Unsupported archaeologist.');
    });

    // test('should throw error for unsupported operation', () => {
    //     // Arrange: Create a fake operation object
    //     const dummyOperation = {
    //         runeOperation: () => {
    //             // Nothing
    //         },
    //         listOperation: () => {
    //             // Nothing
    //         }
    //     };
    //     expect(() => {
    //         new RuneList('none', 'ᚠᚠᚠ', dummyOperation as any);
    //     }).toThrow('Error');
    // });

    // test('should throw error for incompatible symbol', () => {
    //     expect(() => {
    //         new RuneList('none', 'ᚠᚠᚠᛒ', new Convert());
    //     }).toThrow('Incompatible symbol');
    // });
});