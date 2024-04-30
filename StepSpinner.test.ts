import { StepSpinner } from "./StepSpinner.ts";
import { delay } from "./deps.ts";

Deno.test("succeed", async () => {
  const test1 = new StepSpinner("testing...").start();
  await delay(2000);
  test1.succeed();
});

Deno.test("fail", async () => {
  const test1 = new StepSpinner("testing...").start();
  await delay(2000);
  test1.fail();
});

Deno.test("warn", async () => {
  const test1 = new StepSpinner("testing...").start();
  await delay(2000);
  test1.warn();
});

Deno.test("info", async () => {
  const test1 = new StepSpinner("testing...").start();
  await delay(2000);
  test1.info();
});
