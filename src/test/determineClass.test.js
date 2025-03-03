import Verb from "../classes/Verb.js";
import { expect, test } from 'vitest'

test('correctly identifies class 1 words', () => {
    const infinitive = new Verb("samajeem");
    const firstPersonPresentSingular = new Verb("ninsamaji");
    const secondPersonPastSingular = new Verb("xatsamaji");
    const firstPersonFuturePlural = new Verb("xkoqsamaji na");
    const thirdPersonPresentPlural = new Verb("neesamaji");

    expect(infinitive.class).toBe(1);
    expect(firstPersonPresentSingular.class).toBe(1);
    expect(secondPersonPastSingular.class).toBe(1);
    expect(firstPersonFuturePlural.class).toBe(1);
    expect(thirdPersonPresentPlural.class).toBe(1);
});

test('correctly identifies class 2 words', () => {
    const infinitive = new Verb("tz'uub'axik");
    const firstPersonPresentSingular = new Verb("nintz'uub'aaj");
    const secondPersonPastSingular = new Verb("xatz'uub'aaj");
    const firstPersonFuturePlural = new Verb("xkoqtz'uub'aaj");
    const thirdPersonPresentPlural = new Verb("neetz'uub'aaj");
    const altInfinitive = new Verb("tewuchixik");
    const altFirstPersonPastPlural = new Verb("xintewuchiij");

    expect(infinitive.class).toBe(2);
    expect(firstPersonPresentSingular.class).toBe(2);
    expect(secondPersonPastSingular.class).toBe(2);
    expect(firstPersonFuturePlural.class).toBe(2);
    expect(thirdPersonPresentPlural.class).toBe(2);
    expect(altInfinitive.class).toBe(2);
    expect(altFirstPersonPastPlural.class).toBe(2);
});

test('correctly identifies class 3 words', () => {
    const infinitive = new Verb("b'aanooj");
    const firstPersonPresentSingular = new Verb("ninb'an");
    const secondPersonPastSingular = new Verb("xatb'an");
    const firstPersonFuturePlural = new Verb("xkoqb'an na");
    const thirdPersonPresentPlural = new Verb("neeb'an");

    expect(infinitive.class).toBe(3);
    expect(firstPersonPresentSingular.class).toBe(3);
    expect(secondPersonPastSingular.class).toBe(3);
    expect(firstPersonFuturePlural.class).toBe(3);
    expect(thirdPersonPresentPlural.class).toBe(3);
});

test('correctly identifies class 4 words', () => {
    const infinitive = new Verb("kajb'a'xiik");
    const firstPersonPresentSingular = new Verb("ninkajb'a'");
    const secondPersonPastSingular = new Verb("xatkajb'a'");
    const firstPersonFuturePlural = new Verb("xkoqkajb'a' na");
    const thirdPersonPresentPlural = new Verb("neekajb'a'");

    expect(infinitive.class).toBe(4);
    expect(firstPersonPresentSingular.class).toBe(4);
    expect(secondPersonPastSingular.class).toBe(4);
    expect(firstPersonFuturePlural.class).toBe(4);
    expect(thirdPersonPresentPlural.class).toBe(4);
});

test('correctly identifies class 5 words', () => {
    const infinitive = new Verb("saqareem");
    const firstPersonPresentSingular = new Verb("ninsaqari");
    const secondPersonPastSingular = new Verb("xatsaqari");
    const firstPersonFuturePlural = new Verb("xkojsaqari na");
    const thirdPersonPresentPlural = new Verb("neesaqari");

    expect(infinitive.class).toBe(5);
    expect(firstPersonPresentSingular.class).toBe(5);
    expect(secondPersonPastSingular.class).toBe(5);
    expect(firstPersonFuturePlural.class).toBe(5);
    expect(thirdPersonPresentPlural.class).toBe(5);
});

test('correctly identifies class 6 words', () => {
    const infinitive = new Verb("tino'yirsaxik");
    const firstPersonPresentSingular = new Verb("nintino'yirsaaj");
    const secondPersonPastSingular = new Verb("xattino'yirsaaj");
    const firstPersonFuturePlural = new Verb("xkoqtino'yirsaaj na");
    const thirdPersonPresentPlural = new Verb("neetino'yirsaaj");

    expect(infinitive.class).toBe(6);
    expect(firstPersonPresentSingular.class).toBe(6);
    expect(secondPersonPastSingular.class).toBe(6);
    expect(firstPersonFuturePlural.class).toBe(6);
    expect(thirdPersonPresentPlural.class).toBe(6);
});