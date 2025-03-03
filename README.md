# Maya Tz'utujil word utilities

> **Why call it tzii.js?**
> 
> Tziij is Tz'utujil for "word", and the JavaScript language is often abbreviated JS. Tzii.js combines both of these.

### Features

- Verb class recognition
- Verb conjugation parsing
- Verb conjugation generation

## `Verb`

A class representing a Tz'utujil verb.

**Example**:
```js
const word = new Verb("ninsamaji");
```

| **prop** | **type** | **example**      |
|----------|----------|------------------|
| original | String   | `"ninsamaji"`    |
| root     | String   | `"samaj"`        |
| ending   | String   | `"i"`            |
| class    | Number   | `1`              |
| tense    | String   | `"present"`      |
| person   | String   | `"first person"` |

## `Conjugator`

A class containing methods to generate new conjugations from a `Verb`.

**Example**:
```js
const conj = new Conjugator(new Verb("ninsamaji"));
```

| **method**    | **params**                                              | **description**                                              |
|---------------|---------------------------------------------------------|--------------------------------------------------------------|
| conjugateWord | tense: `String`<br>person: `String`<br>number: `String` | Generate a specific conjugation.                             |
| conjugateAll  | format: "list" \| "object"                              | Generate all possible conjugations into list or object form. |
| isPrefixValid | prefix: `String`                                        | Check whether or not a prefix is valid.                      |