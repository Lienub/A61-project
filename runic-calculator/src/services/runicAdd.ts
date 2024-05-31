/**
 * Function allows to merge two runes
 * @param leftRunic 
 * @param rightRunic 
 * @returns merged rune
 */
function mergeRunes(leftRunic: string, rightRunic: string): string {
    const maxLength = Math.max(leftRunic.length, rightRunic.length);
    let mergedRunes = '';

    for (let i = 0; i < maxLength; i++) {
        const leftRune = leftRunic[leftRunic.length - 1 - i] || '';
        const rightRune = rightRunic[rightRunic.length - 1 - i] || '';
        mergedRunes = rightRune + leftRune + mergedRunes;
    }

    return mergedRunes;
}

/**
 * This function allow to add runic numbers
 * @param runicNumbers 
 * @returns add runic number
 */
export function additionRunicNumbers(runicNumbers: string[]): string {
    if (runicNumbers.length === 0) return '';

    let result = runicNumbers[runicNumbers.length - 1];

    for (let i = 0; i < runicNumbers.length-1; i++) {
        result = mergeRunes(result, runicNumbers[i]);
    }

    return result;
}