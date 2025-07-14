# @jahed/jsonl

[![npm](https://img.shields.io/npm/v/@jahed/jsonl.svg)](https://www.npmjs.com/package/@jahed/jsonl)
[![author](https://img.shields.io/badge/author-jahed-%23007fff)](https://jahed.dev/)

JSON Lines serialising and deserialising.

## Installation

```sh
npm install @jahed/jsonl
```

## Usage

```js
import { encode, decode } from "@jahed/jsonl";

const valuesToEncode = [{"a":1},{"b":2}]
const blob = await encode(values)

const valuesDecoded = await decode(await blob.stream())

console.log(valuesDecoded)
// [{"a":1},{"b":2}]
```

## License

Copyright (C) 2025 Jahed Ahmed

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
