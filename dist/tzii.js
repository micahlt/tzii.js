var I = Object.defineProperty;
var $ = (n) => {
  throw TypeError(n);
};
var q = (n, e, i) => e in n ? I(n, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : n[e] = i;
var a = (n, e, i) => q(n, typeof e != "symbol" ? e + "" : e, i), g = (n, e, i) => e.has(n) || $("Cannot " + i);
var c = (n, e, i) => (g(n, e, "read from private field"), i ? i.call(n) : e.get(n)), x = (n, e, i) => e.has(n) ? $("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, i), b = (n, e, i, t) => (g(n, e, "write to private field"), t ? t.call(n, i) : e.set(n, i), i), h = (n, e, i) => (g(n, e, "access private method"), i);
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
  constructor(e) {
    x(this, d);
    a(this, "original", "");
    x(this, o, "");
    a(this, "root", "");
    a(this, "ending", "");
    a(this, "class", 0);
    a(this, "tense", "");
    a(this, "person", "");
    this.original = e, b(this, o, e.toLowerCase()), this.class = h(this, d, w).call(this, e);
    const { tense: i, person: t } = h(this, d, P).call(this);
    this.tense = i, this.person = t;
  }
}
o = new WeakMap(), d = new WeakSet(), w = function() {
  let e = c(this, o), i = 0;
  e.endsWith("na") && (this.tense = "future", e = e.slice(0, -2).trim());
  for (let t of Object.keys(u)) {
    let s = u[t];
    for (let r of s)
      if (e.endsWith(r)) {
        i = Number(t), this.ending = r, b(this, o, e.slice(0, -r.length));
        break;
      }
  }
  return i;
}, P = function() {
  let e = "";
  for (let s of W)
    if (c(this, o).startsWith(s)) {
      e = c(this, o).slice(0, s.length), this.root = c(this, o).slice(s.length);
      break;
    }
  if (!e) {
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
  let i = "", t = "";
  for (let s of Object.keys(p))
    if (e.startsWith(p[s])) {
      if (s === "thirdSingularFuture")
        return {
          tense: "future",
          person: "third person singular"
        };
      {
        i = s;
        let r = e.slice(p[s].length);
        t = Object.keys(v).find((l) => v[l] === r);
        break;
      }
    }
  return {
    tense: i,
    person: t
  };
};
var f, C, j;
class m {
  constructor(e) {
    x(this, f);
    this.verb = e;
  }
  conjugateAll(e = "list") {
    const i = e === "list" ? [] : {};
    for (let t of ["past", "present", "future"]) {
      e === "object" && (i[t] = {});
      for (let s of ["singular", "plural"]) {
        e === "object" && (i[t][s] = {});
        for (let r of ["first person", "second person", "third person"])
          e === "list" ? i.push({
            title: `${r} ${s} ${t}`,
            person: r,
            tense: t,
            number: s,
            word: this.conjugateWord(t, r, s)
          }) : e === "object" && (i[t][s][r] = this.conjugateWord(t, r, s));
      }
    }
    return e === "list" ? i.push({
      title: "infinitive",
      word: this.conjugateWord("infinitive")
    }) : i.infinitive = this.conjugateWord("infinitive"), i;
  }
  conjugateWord(e, i, t) {
    return e === "infinitive" ? `${this.verb.root}${h(this, f, j).call(this, e)}` : `${h(this, f, C).call(this, e, i, t)}${this.verb.root}${h(this, f, j).call(this)}`;
  }
  isPrefixValid(e) {
    return !!W.includes(e);
  }
}
f = new WeakSet(), C = function(e, i, t) {
  let s = "";
  if (s += p[e], s += v[`${i} ${t}`], e === "future" && i === "third person" && t === "singular" && (s = "xti"), !this.isPrefixValid(s))
    throw new Error(`Invalid prefix: ${s}`);
  return s;
}, j = function(e) {
  let i = "";
  if ([1, 3, 5, 6].includes(this.verb.class)) {
    const t = e === "infinitive" ? 0 : 1;
    i += u[this.verb.class][t];
  } else if (this.verb.class === 2) {
    if (["axik", "aaj"].includes(this.verb.ending)) {
      const t = e === "infinitive" ? 0 : 1;
      i += u[this.verb.class][t];
    } else if (["ixik", "iij"].includes(this.verb.ending)) {
      const t = e === "infinitive" ? 2 : 3;
      i += u[this.verb.class][t];
    }
  } else if (this.verb.class === 4) {
    const t = e === "infinitive" ? 0 : 2;
    i += u[this.verb.class][t];
  }
  return e === "future" && (i += " na"), i;
};
const E = { Verb: y, Conjugator: m };
export {
  E as default
};
