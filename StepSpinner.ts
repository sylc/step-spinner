import {
  blue,
  green,
  red,
  Spinner,
  type SpinnerOptions,
  yellow,
} from "./deps.ts";

/**
 * Create a new Step with a Spinner
 * @param message the message to display with the spinner
 * @returns an instance of a StepSpinner
 */
export function step(message: string | SpinnerOptions): StepSpinner {
  if (typeof message === "string") {
    return new StepSpinner({ message });
  } else {
    return new StepSpinner(message);
  }
}

export class StepSpinner extends Spinner {
  
  #print(prefix: string, text?: string) {
    const txt = `${prefix} ${text ?? this.message}`;
    console.log(txt);
  }

  start(): StepSpinner {
    super.start();
    return this;
  }
  stop() {
    super.stop();
  }

  /**
   * Stop the spinner and print the spinner text or a new text if provided
   * prefixed with a green ✔
   * @param text Optional new text
   */
  succeed(text?: string) {
    this.stop();
    this.#print(green(`✔`), text);
  }

  /**
   * Stop the spinner and print the spinner text or a new text if provided
   * prefixed with a yellow ⚠
   * @param text Optional new text
   */
  warn(text?: string) {
    this.stop();
    this.#print(yellow(`⚠`), text);
  }

  /**
   * Stop the spinner and print the spinner text or a new text if provided
   * prefixed with a red ✖
   * @param text Optional new text
   */
  fail(text?: string) {
    this.stop();
    this.#print(red(`✖`), text);
  }

  /**
   * Stop the spinner and print the spinner text or a new text if provided
   * prefixed with a blue ℹ
   * @param text Optional new text
   */
  info(text?: string) {
    this.stop();
    this.#print(blue(`ℹ`), text);
  }
}
