export class Calculator {
    static sum(numbers) {
        // 빈 배열인 경우 0 반환
        if (!numbers || numbers.length === 0){
            return 0;
        }

        // 그 외 숫자 배열인 경우 모든 숫자 합산
        const total = numbers.reduce((acc, cur) => acc + cur, 0);
        return total;
    }
}