File: package.json
```json
{
  "name": "rosettajs-i18n",
  "version": "1.0.0",
  "description": "Lightweight i18n solution for small to medium e-commerce sites",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "types": "types/index.d.ts",
  "scripts": {
    "build": "rollup -c",
    "test": "jest",
    "lint": "eslint src/**/*.ts",
    "prepublishOnly": "npm run build"
  },
  "keywords": ["i18n", "internationalization", "translation", "localization", "e-commerce"],
  "author": "Your Name",
  "license": "MIT",
  "devDependencies": {
    "@types/jest": "^27.0.3",
    "@types/react": "^17.0.37",
    "@typescript-eslint/eslint-plugin": "^5.6.0",
    "@typescript-eslint/parser": "^5.6.0",
    "eslint": "^8.4.1",
    "jest": "^27.4.3",
    "rollup": "^2.60.2",
    "rollup-plugin-typescript2": "^0.31.1",
    "ts-jest": "^27.1.1",
    "typescript": "^4.5.2"
  },
  "peerDependencies": {
    "react": "^17.0.2"
  }
}
```

File: tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "esnext",
    "lib": ["dom", "esnext"],
    "importHelpers": true,
    "declaration": true,
    "sourceMap": true,
    "rootDir": "./src",
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "moduleResolution": "node",
    "baseUrl": "./",
    "paths": {
      "*": ["src/*", "node_modules/*"]
    },
    "jsx": "react",
    "esModuleInterop": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

File: rollup.config.js
```javascript
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
  ],
  external: [...Object.keys(pkg.peerDependencies || {})],
};
```

File: jest.config.js
```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/tests/**/*.test.ts'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
```

File: .eslintrc.js
```javascript
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    // Add custom rules here
  },
};
```

File: .gitignore
```
node_modules/
dist/
coverage/
.DS_Store
*.log
```
