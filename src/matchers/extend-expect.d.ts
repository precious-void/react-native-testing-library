export interface JestNativeMatchers<R> {
  toBeOnTheScreen(): R;
  toBeEmptyElement(): R;
}

// Implicit Jest global `expect`.
declare global {
  namespace jest {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<R, T = {}> extends JestNativeMatchers<R> {}
  }
}

// Explicit `@jest/globals` `expect` matchers.
declare module '@jest/expect' {
  interface Matchers<R extends void | Promise<void>>
    extends JestNativeMatchers<R> {}
}