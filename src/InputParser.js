export class InputParser {
    static parse(input) {
        // 입력이 비어있거나 공백인 경우
        const raw = (input || "").trim();
        if (raw.lenth === 0) {
            return [];
        }

        // 기본 구분자: 쉼표(,)와 콜론(:)
        const delimiters = [",", ":"];
        const regex = new RegExp(`[${delimiters.join("")}]`);
        const tokens = raw.split(regex);
        
        // 숫자 배열로 변환
        const numbers = tokens
        .map((token) => token.trim())
        .filter((token) => token.length > 0)
        .map((token) => Number(token)); // 숫자로 변환

        return numbers;
    }
}