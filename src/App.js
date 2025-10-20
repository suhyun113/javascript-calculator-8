import { MissionUtils } from "@woowacourse/mission-utils";
import { InputParser } from "./InputParser.js";
import { InputValidator } from "./InputValidator.js";
import { Calculator } from "./Calculator.js";

class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

      const numbers = InputParser.parse(input);
      InputValidator.validate(numbers);
      const result = Calculator.sum(numbers);

      MissionUtils.Console.print(`결과 : ${result}`)
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
}

export default App;
