import combinedPrefixes from "../lib/combinedPrefixes.js";
import { personPrefixes, tensePrefixes } from "../lib/separatedPrefixes.js";
import verbEndings from "../lib/verbEndings.js";

class Conjugator {
    constructor(verb) {
        this.verb = verb;
    }

    conjugateAll(format = "list") {
        const conjugations = format === "list" ? [] : {};
        for (let tense of ["past", "present", "future"]) {
            if (format === "object") {
                conjugations[tense] = {};
            }
            for (let person of ["first person", "second person", "third person"]) {
                if (format === "object") {
                    conjugations[tense][person] = {};
                }
                for (let number of ["singular", "plural"]) {
                    if (format === "list") {
                        conjugations.push({
                            title: `${person} ${number} ${tense}`,
                            word: this.conjugateWord(tense, person, number)
                        });
                    } else if (format === "object") {
                        conjugations[tense][person][number] = this.conjugateWord(tense, person, number);
                    }
                }
            }
        }
        if (format === "list") {
            conjugations.push({
                title: "infinitive",
                word: this.conjugateWord("infinitive")
            })
        } else {
            conjugations.infinitive = this.conjugateWord("infinitive");
        }
        return conjugations;
    }

    conjugateWord(tense, person, number) {
        if (tense === "infinitive") {
            return `${this.verb.root}${this.#createEnding(tense)}`;
        }
        return `${this.#createPrefix(tense, person, number)}${this.verb.root}${this.#createEnding()}`;
    }

    #createPrefix(tense, person, number) {
        let prefix = "";
        prefix += tensePrefixes[tense];
        prefix += personPrefixes[`${person} ${number}`];
        if (tense === "future" && person === "third person" && number === "singular") {
            prefix = "xti";
        }
        if (!this.isPrefixValid(prefix)) {
            throw new Error(`Invalid prefix: ${prefix}`);
        }
        return prefix;
    }

    #createEnding(tense) {
        let ending = "";
        if ([1, 3, 5, 6].includes(this.verb.class)) {
            const tenseIndex = tense === "infinitive" ? 0 : 1;
            ending += verbEndings[this.verb.class][tenseIndex];
        } else if (this.verb.class === 2) {
            if (["axik", "aaj"].includes(this.verb.ending)) {
                const tenseIndex = tense === "infinitive" ? 0 : 1;
                ending += verbEndings[this.verb.class][tenseIndex];
            } else if (["ixik", "iij"].includes(this.verb.ending)) {
                const tenseIndex = tense === "infinitive" ? 2 : 3;
                ending += verbEndings[this.verb.class][tenseIndex];
            }
        } else if (this.verb.class === 4) {
            const tenseIndex = tense === "infinitive" ? 0 : 2;
            ending += verbEndings[this.verb.class][tenseIndex];
        }
        if (tense === "future") {
            ending += " na";
        }
        return ending;
    }

    isPrefixValid(prefix) {
        if (combinedPrefixes.includes(prefix)) {
            return true;
        } else {
            return false;
        }
    }
}

export default Conjugator;