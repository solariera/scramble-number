# Scramble Number

[![npm](https://img.shields.io/npm/v/@solariera/scramble-number)](https://www.npmjs.com/package/@solariera/scramble-number)
[![npm](https://img.shields.io/npm/dw/@solariera/scramble-number)](https://www.npmjs.com/package/@solariera/scramble-number)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@solariera/scramble-number)](https://bundlephobia.com/result?p=@solariera/scramble-number)

This package generates a scrambled number.

## 1. Usage

### 1-1. Installation

```console
# npm
npm install @solariera/scramble-number
```

```console
# yarn
yarn add @solariera/scramble-number
```

### 1-2. Basic Usage

```typescript
import { scramble, generateSalt } from '@solariera/scramble-number';

const [salt, _salt] = generateSalt();

const scrambled = [0, 1, 2, 3, 4].map((num) => scramble(num, salt, _salt));

console.log(scrambled);
// e.g. [1219901536, 239563430, 953425272, 1286381126, 1451104176]
```

## 2. Specifications

### 2-1. Syntax & Parameters

#### scramble(`value`, `salt`, `inversedSalt`)

| No. | Name           | Type   | Required | Description    |
| --- | -------------- | ------ | :------: | -------------- |
| 1   | `value`        | number |   Yes    | Original Value |
| 1   | `salt`         | number |   Yes    | Salt           |
| 2   | `inversedSalt` | number |   Yes    | Inversed Salt  |
