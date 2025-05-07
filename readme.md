# Notes

> [!TIP]
> Frontend: user-facing part of a website or application. It runs on the client, typically a web browser. It's the **front office** of the web application.
> Middleware: connects an application's frontend and backend and performs all of its chores such as integrating with third-party services and transferring and updating data. It's the **employees on the company floor**.
> Backend: invisible part of a web application, usually runs on a server. It's the **back office** of the web application.

## Part 1: the technology stack

### 1. Node.js

### 2. Modern JavaScript

> [!WARNING]
> In JavaScript, when you call a function with more arguments than it's defined to accept, the extra arguments are simply ignored. This is different from some other programming languages that would throw an error. See [ECMA-262](https://ecma-international.org/publications-and-standards/standards/ecma-262/)

### 3. TypeScript

> [!NOTE]
> TypeScript is a statically typed superset of JavaScript that adds optional type annotations and compile-time type checking.

#### Transpile vs Compile

Transpiling and running the code:

```bash
npx tsc
node index.js
```

#### About `tsconfig.json`

`npx tsc --init` to create a `tsconfig.json` file.

```json
{
  "compilerOptions": {
    "esModuleInterop": true, // `express` is written in CommonJS
    "moduleResolution": "node", // used to resolve modules so that ts can find and import the module
    "module": "es6", // used to specify the module code generation
    "target": "es6", // we use es.next for ts, and want to keep them after transpiling ts to js
    "noImplicitAny": true, // disable implicit any
    "forceConsistentCasingInFileNames": true, // enforce consistent casing in file names across different os
    "strict": true // enable all strict type-checking options
  }
}
```
