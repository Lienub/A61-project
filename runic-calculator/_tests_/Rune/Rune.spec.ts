import { getRune, Feoh, Uruz, Thurisaz, Ansuz, Raidho, Gebo } from "../../src/Runes/Rune";
import { RunicSymbols } from "../../src/enums/RunicSymbols";
import { JokulClan, Thorlaug } from "../../src/Clans/Clan";
import { BjornStraussler } from "../../src/Archaeologist/Archaeologist";

describe("Rune Classes", () => {
    test("Feoh class should return correct values", () => {
        // Arrange
        const feoh = new Feoh(5);
        
        // Act & Assert
        expect(feoh.decimal).toBe(5);
        expect(feoh.text).toBe('ᚠ');
        expect(feoh.clan).toBeNull();
    });

    test("Uruz class should return correct values", () => {
        // Arrange
        const uruz = new Uruz(3);
        
        // Act & Assert
        expect(uruz.decimal).toBe(3);
        expect(uruz.text).toBe('ᚢ');
        expect(uruz.clan).toBeNull();
    });

    test("Thurisaz class should return correct values", () => {
        // Arrange
        const thurisaz = new Thurisaz(2);
        
        // Act & Assert
        expect(thurisaz.decimal).toBe(2);
        expect(thurisaz.text).toBe('ᚦ');
        expect(thurisaz.clan).toBeNull();
    });

    test("Ansuz class should return correct values", () => {
        // Arrange
        const ansuz = new Ansuz(1);
        
        // Act & Assert
        expect(ansuz.decimal).toBe(1);
        expect(ansuz.text).toBe('ᚨ');
        expect(ansuz.clan).toBeNull();
    });

    test("Raidho class should return correct values", () => {
        // Arrange
        const raidho = new Raidho(0);
        
        // Act & Assert
        expect(raidho.decimal).toBe(0);
        expect(raidho.text).toBe('ᚱ');
        expect(raidho.clan).toBeInstanceOf(JokulClan);
    });

    test("Gebo class should return correct values", () => {
        // Arrange
        const gebo = new Gebo(0);
        
        // Act & Assert
        expect(gebo.decimal).toBe(0);
        expect(gebo.text).toBe('ᚷ');
        expect(gebo.clan).toBeInstanceOf(Thorlaug);
    });
});

describe("getRune function", () => {
    const archaeologist = new BjornStraussler("bjorn_straussler");

    test("should return Feoh instance for FEOH symbol", () => {
        // Act
        const rune = getRune(RunicSymbols.FEOH, archaeologist);
        
        // Assert
        expect(rune).toBeInstanceOf(Feoh);
    });

    test("should return Uruz instance for URUZ symbol", () => {
        // Act
        const rune = getRune(RunicSymbols.URUZ, archaeologist);
        
        // Assert
        expect(rune).toBeInstanceOf(Uruz);
    });

    test("should return Thurisaz instance for THURISAZ symbol", () => {
        // Act
        const rune = getRune(RunicSymbols.THURISAZ, archaeologist);
        
        // Assert
        expect(rune).toBeInstanceOf(Thurisaz);
    });

    test("should return Ansuz instance for ANSUZ symbol", () => {
        // Act
        const rune = getRune(RunicSymbols.ANSUZ, archaeologist);
        
        // Assert
        expect(rune).toBeInstanceOf(Ansuz);
    });

    test("should return Raidho instance for RAIDHO symbol", () => {
        // Act
        const rune = getRune(RunicSymbols.RAIDHO, archaeologist);
        
        // Assert
        expect(rune).toBeInstanceOf(Raidho);
    });

    test("should return Gebo instance for GEBO symbol", () => {
        // Act
        const rune = getRune(RunicSymbols.GEBO, archaeologist);
        
        // Assert
        expect(rune).toBeInstanceOf(Gebo);
    });

    test("should throw error for incompatible symbol", () => {
        // Act & Assert
        expect(() => getRune("INVALID", archaeologist)).toThrow("Incompatible symbol");
    });
});