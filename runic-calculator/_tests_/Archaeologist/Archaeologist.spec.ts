import { getArchaeologist } from "../../src/Archaeologist/_archaeologistFactory_";

describe('RuneList Class Error Handling', () => {
    test('should throw error for unsupported archaeologist', () => {
        const option = "test_straussler";
        
        expect(() => {
            getArchaeologist(option);
        }).toThrow('Unsupported archaeologist.');
    });
});