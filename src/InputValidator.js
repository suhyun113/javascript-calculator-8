export class InputValidator {
    static validate(numbers) {
        // 숫자가 아닌 값이 포함된 경우
        const hasNonNumber = numbers.some((n) => 
            typeof n !== "number" || isNaN(n));
        if (hasNonNumber) {
            throw new Error("[ERROR] 숫자가 아닌 값이 포함되어 있습니다.");
        }
    }
}