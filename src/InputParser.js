export class InputParser {
    static parse(input) {
        // 입력이 비어있거나 공백인 경우
        const raw = (input || "").trim();
        if (raw.length === 0) {
            return [];
        }

        // 기본 구분자: 쉼표(,)와 콜론(:)
        let delimiters = [",", ":"];
        let numbersPart = raw;

        // 커스텀 구분자
        if (raw.startsWith("//")) {
            const match = 
                raw.match(/^\/\/(.)\n(.*)/s) || // 실제 줄바꿈
                raw.match(/^\/\/(.)\\n(.*)/s); // 문자열 리터럴 "\n"
            if (!match) {
                throw new Error("[ERROR] 잘못된 커스텀 구분자 형식입니다.");
            }
            const [, custom, rest] = match;
            delimiters = [",", ":", custom];
            numbersPart = rest;
        }

        const escaped = delimiters.map((d) => d.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
        const regex = new RegExp(`(?:${escaped.join("|")})`, "g");
        
        // 숫자 배열로 변환
        return numbersPart
        .split(regex)
        .map((token) => token.trim())
        .filter((token) => token.length > 0)
        .map((token) => Number(token)); // 숫자로 변환    
    }
}