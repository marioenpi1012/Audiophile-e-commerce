# 🗄️ Project Structure

Most of the code lives in the `src` folder and looks like this:

```sh
src
|
+-- assets       # assets folder contain all the static files.
|
+-- config       # all the global configuration, env variables.
|
+-- features     # feature based modules.
|
+-- hooks        # hooks used across the application.
|
+-- lib          # re-exporting different libraries preconfigured for the application.
|
+-- providers    # the application provider.
|
+-- routes       # routes configuration.
|
+-- stores       # global state stores.
|
+-- types        # types used accross the application.
|
+-- utils        # shared utility functions.
```

### Feature Structure :

```sh
src/features/awesome-feature
|
+-- api         # exported API request declarations and api hooks related to a specific feature
|
+-- assets      # assets folder can contain all the static files for a specific feature
|
+-- components  # components scoped to a specific feature
|
+-- hooks       # hooks scoped to a specific feature
|
+-- routes      # route components for a specific feature pages
|
+-- stores      # state stores for a specific feature
|
+-- types       # typescript types for TS specific feature domain
|
+-- utils       # utility functions for a specific feature
|
+-- index.ts    # entry point for the feature, it should serve as the public API of the given feature and exports everything that should be used outside the feature
```

Everything from a feature should be exported from the `index.ts` file which behaves as the public API of the feature.

You should import stuff from other features only by using:

`import {AwesomeComponent} from "features/awesome-feature"`
