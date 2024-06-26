# step-spinner

Thin wrapper around the deno
[@std spinner](https://jsr.io/@std/cli/doc/spinner/~/Spinner) to add some
predefined completion states.

Example

```ts
import { step } from "jsr:@sylc/step-spinner"

const profile = step("Retrieving profile...").start();
try {
  // do some stuff that takes time...
  await delay(10000);
  profile.succeed("Retrieved profile");
} catch (err) {
  profile.fail("failed loading profile");
}
```

## Credits

Inspired by the following projects

- https://github.com/sindresorhus/ora?tab=readme-ov-file
- https://deno.land/x/wait
