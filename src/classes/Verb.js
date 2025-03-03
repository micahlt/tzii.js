import verbEndings from "../lib/verbEndings.js";
import combinedPrefixes from "../lib/combinedPrefixes.js";
import { tensePrefixes, personPrefixes } from "../lib/separatedPrefixes.js";

class Verb {
    original = "";
    #word = "";
    root = "";
    ending = "";
    class = 0;
    tense = "";
    person = "";

    constructor(verb) {
        this.original = verb;
        this.#word = verb.toLowerCase();
        this.class = this.#determineClass(verb);
        const { tense, person } = this.#determineConjugation();
        this.tense = tense;
        this.person = person;
    }

    #determineClass() {
        let word = this.#word;
        let suspectedClass = 0;
        // Check for future tense suffix
        if (word.endsWith("na")) {
            this.tense = "future";
            // Remove the future tense suffix
            word = word.slice(0, -2).trim();
        }
        // Check for each class's endings
        for (let index of Object.keys(verbEndings)) {
            let endings = verbEndings[index];
            for (let e of endings) {
                if (word.endsWith(e)) {
                    suspectedClass = Number(index);
                    this.ending = e;
                    this.#word = word.slice(0, -e.length);
                    break;
                }
            }
        }
        return suspectedClass;
    }

    #determineConjugation() {
        let totalPrefix = "";
        for (let prefix of combinedPrefixes) {
            if (this.#word.startsWith(prefix)) {
                totalPrefix = this.#word.slice(0, prefix.length);
                this.root = this.#word.slice(prefix.length);
                break;
            }
        }
        if (!totalPrefix) {
            this.root = this.#word;
            if (this.class === 3) {
                // Handle dropping the last pair of double vowels in the
                const rootAsArray = this.root.split("");
                const vowels = ['a', 'e', 'i', 'o', 'u'];
                for (let i = rootAsArray.length - 1; i >= 0; i--) {
                    const char = rootAsArray[i];
                    if (vowels.includes(char) && this.root[i - 1] === char) {
                        this.root = this.root.slice(0, i) + this.root.slice(i + 1);
                        break;
                    }
                }
            }
            return {
                tense: "infinitive",
                person: ""
            }
        }
        let tense = "";
        let person = "";

        for (let t of Object.keys(tensePrefixes)) {
            if (totalPrefix.startsWith(tensePrefixes[t])) {
                if (t === "thirdSingularFuture") {
                    return {
                        tense: "future",
                        person: "third person singular"
                    }
                } else {
                    tense = t;
                    let personPrefix = totalPrefix.slice(tensePrefixes[t].length)
                    person = Object.keys(personPrefixes).find(p => personPrefixes[p] === personPrefix);
                    break;
                }
            }
        }


        return {
            tense,
            person
        }
    }

}

export default Verb;