# X86SurferComponent

## Dev

### Building

To build the library, run:

```bash
ng build x86-surfer-component
```

This command will compile your project, and the build artifacts will be placed in the `dist/` directory.

### Publishing the Library

Once the project is built, you can publish your library by following these steps:

1. Navigate to the `dist` directory:

   ```bash
   cd dist/x86-surfer-component
   ```

2. Run the `npm publish` command to publish your library to the npm registry:
   ```bash
   npm publish
   ```

## Using the package

### In the consuming app

Ensure that an environment has be created with the following structure:

```ts
export const environment = {
  X86_AGENT_ROOT: "https://x86--agent--9pwq69n94c9h.code.run",
};
```

then in the app module, ensure that an HTTP client is provided as well as the X86_AGENT_ROOT:

```ts
import { X86_AGENT_ROOT } from "x86-surfer-component";

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), { provide: X86_AGENT_ROOT, useValue: environment.X86_AGENT_ROOT }],
};
```
