import Verb from "../classes/Verb.js";
import { expect, test } from 'vitest'

const firstPersonPluralFuture = new Verb("xkoqb'it na");
const firstPersonSingularPast = new Verb("xinpamaani");
const firstPersonSingularPresent = new Verb("ninjuub'iij");
const secondPersonSingularPresent = new Verb("natachik'i");
const secondPersonPluralFuture = new Verb("xkixutzursaaj");
const thirdPersonSingularPast = new Verb("xmaltyoxiij");
const thirdPersonSingularFuture = new Verb("xtito'ooni");

test('correctly identifies first person plural future tense', () => {
    expect(firstPersonPluralFuture.person).toBe("first person plural");
    expect(firstPersonPluralFuture.tense).toBe("future");
});

test('correctly identifies first person singular past tense', () => {
    expect(firstPersonSingularPast.person).toBe("first person singular");
    expect(firstPersonSingularPast.tense).toBe("past");
});

test('correctly identifies first person singular present tense', () => {
    expect(firstPersonSingularPresent.person).toBe("first person singular");
    expect(firstPersonSingularPresent.tense).toBe("present");
});

test('correctly identifies second person singular present tense', () => {
    expect(secondPersonSingularPresent.person).toBe("second person singular");
    expect(secondPersonSingularPresent.tense).toBe("present");
});

test('correctly identifies second person plural future tense', () => {
    expect(secondPersonPluralFuture.person).toBe("second person plural");
    expect(secondPersonPluralFuture.tense).toBe("future");
});

test('correctly identifies third person singular past tense', () => {
    expect(thirdPersonSingularPast.person).toBe("third person singular");
    expect(thirdPersonSingularPast.tense).toBe("past");
});

test('correctly identifies third person singular future tense', () => {
    expect(thirdPersonSingularFuture.person).toBe("third person singular");
    expect(thirdPersonSingularFuture.tense).toBe("future");
});