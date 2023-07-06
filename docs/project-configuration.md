# ⚙️ Project Configuration

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Typescript

Javascript is great programming langauage, however the lack of type declaration make its vulnerable to bugs, especially on larger projects. Note, that Typescript does not protect you from runtime error, it only does type checking during build time. [Get started with Typescript](https://www.w3schools.com/typescript/typescript_intro.php).

### Absolute Imports

During the process of building this project I learned the importance of using absolute imports sinces it makes it easier to move files around and avoid messy import paths such as `../../../YourComponent`. Here is how to configure it:

Go to `tsconfig.json` :

```json
"compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "/*": ["./src/*"]
    }
  }
```
