export class InputValidator {
    static validate(numbers) {
        // 숫자가 아닌 값이 포함된 경우
        const hasNonNumber = numbers.some((n) => 
            typeof n !== "number" || isNaN(n));
        if (hasNonNumber) {
            throw new Error("[ERROR] 숫자가 아닌 값이 포함되어 있습니다.");
        }

        // 양수가 아닌 값(0 또는 음수)
        const hasNegative = numbers.some((n) => n <= 0);
        if (hasNegative) {
            throw new Error("[ERROR] 양수가 아닌 값이 포함되어 있습니다.");
        }

        return true;
    }
}