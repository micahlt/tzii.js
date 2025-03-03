var I = Object.defineProperty;
var $ = (n) => {
  throw TypeError(n);
};
var q = (n, i, e) => i in n ? I(n, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[i] = e;
var a = (n, i, e) => q(n, typeof i != "symbol" ? i + "" : i, e), g = (n, i, e) => i.has(n) || $("Cannot " + e);
var c = (n, i, e) => (g(n, i, "read from private field"), e ? e.call(n) : i.get(n)), x = (n, i, e) => i.has(n) ? $("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(n) : i.set(n, e), b = (n, i, e, t) => (g(n, i, "write to private field"), t ? t.call(n, e) : i.set(n, e), e), h = (n, i, e) => (g(n, i, "access private method"), e);
const u = {
  1: ["eem", "i"],
  2: ["axik", "aaj", "ixik", "iij"],
  3: ["ooj", "an"],
  4: ["b'a'xik", "b'a'xiik", "b'a'"],
  5: ["areem", "ari"],
  6: ["irsaxik", "irsaaj"]
}, W = [
  "nin",
  "nat",
  "noq",
  "nix",
  "nee",
  "xin",
  "xat",
  "xoq",
  "xix",
  "xee",
  "xkin",
  "xkat",
  "xti",
  "xkoq",
  "xkix",
  "xkee",
  "n",
  "x"
], p = {
  thirdSingularFuture: "xti",
  future: "xk",
  present: "n",
  past: "x"
}, v = {
  "first person singular": "in",
  "second person singular": "at",
  "first person plural": "oq",
  "second person plural": "ix",
  "third person plural": "ee",
  "third person singular": ""
};
var o, d, w, P;
class y {
  constructor(i) {
    x(this, d);
    a(this, "original", "");
    x(this, o, "");
    a(this, "root", "");
    a(this, "ending", "");
    a(this, "class", 0);
    a(this, "tense", "");
    a(this, "person", "");
    this.original = i, b(this, o, i.toLowerCase()), this.class = h(this, d, w).call(this, i);
    const { tense: e, person: t } = h(this, d, P).call(this);
    this.tense = e, this.person = t;
  }
}
o = new WeakMap(), d = new WeakSet(), w = function() {
  let i = c(this, o), e = 0;
  i.endsWith("na") && (this.tense = "future", i = i.slice(0, -2).trim());
  for (let t of Object.keys(u)) {
    let s = u[t];
    for (let r of s)
      if (i.endsWith(r)) {
        e = Number(t), this.ending = r, b(this, o, i.slice(0, -r.length));
        break;
      }
  }
  return e;
}, P = function() {
  let i = "";
  for (let s of W)
    if (c(this, o).startsWith(s)) {
      i = c(this, o).slice(0, s.length), this.root = c(this, o).slice(s.length);
      break;
    }
  if (!i) {
    if (this.root = c(this, o), this.class === 3) {
      const s = this.root.split(""), r = ["a", "e", "i", "o", "u"];
      for (let l = s.length - 1; l >= 0; l--) {
        const k = s[l];
        if (r.includes(k) && this.root[l - 1] === k) {
          this.root = this.root.slice(0, l) + this.root.slice(l + 1);
          break;
        }
      }
    }
    return {
      tense: "infinitive",
      person: ""
    };
  }
  let e = "", t = "";
  for (let s of Object.keys(p))
    if (i.startsWith(p[s])) {
      if (s === "thirdSingularFuture")
        return {
          tense: "future",
          person: "third person singular"
        };
      {
        e = s;
        let r = i.slice(p[s].length);
        t = Object.keys(v).find((l) => v[l] === r);
        break;
      }
    }
  return {
    tense: e,
    person: t
  };
};
var f, C, j;
class A {
  constructor(i) {
    x(this, f);
    this.verb = i;
  }
  conjugateAll(i = "list") {
    const e = i === "list" ? [] : {};
    for (let t of ["past", "present", "future"]) {
      i === "object" && (e[t] = {});
      for (let s of ["first person", "second person", "third person"]) {
        i === "object" && (e[t][s] = {});
        for (let r of ["singular", "plural"])
          i === "list" ? e.push({
            title: `${s} ${r} ${t}`,
            word: this.conjugateWord(t, s, r)
          }) : i === "object" && (e[t][s][r] = this.conjugateWord(t, s, r));
      }
    }
    return i === "list" ? e.push({
      title: "infinitive",
      word: this.conjugateWord("infinitive")
    }) : e.infinitive = this.conjugateWord("infinitive"), e;
  }
  conjugateWord(i, e, t) {
    return i === "infinitive" ? `${this.verb.root}${h(this, f, j).call(this, i)}` : `${h(this, f, C).call(this, i, e, t)}${this.verb.root}${h(this, f, j).call(this)}`;
  }
  isPrefixValid(i) {
    return !!W.includes(i);
  }
}
f = new WeakSet(), C = function(i, e, t) {
  let s = "";
  if (s += p[i], s += v[`${e} ${t}`], i === "future" && e === "third person" && t === "singular" && (s = "xti"), !this.isPrefixValid(s))
    throw new Error(`Invalid prefix: ${s}`);
  return s;
}, j = function(i) {
  let e = "";
  if ([1, 3, 5, 6].includes(this.verb.class)) {
    const t = i === "infinitive" ? 0 : 1;
    e += u[this.verb.class][t];
  } else if (this.verb.class === 2) {
    if (["axik", "aaj"].includes(this.verb.ending)) {
      const t = i === "infinitive" ? 0 : 1;
      e += u[this.verb.class][t];
    } else if (["ixik", "iij"].includes(this.verb.ending)) {
      const t = i === "infinitive" ? 2 : 3;
      e += u[this.verb.class][t];
    }
  } else if (this.verb.class === 4) {
    const t = i === "infinitive" ? 0 : 2;
    e += u[this.verb.class][t];
  }
  return i === "future" && (e += " na"), e;
};
const O = { Verb: y, Conjugator: A };
export {
  O as default
};
