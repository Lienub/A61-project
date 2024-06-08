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
});