import { openBlock as p, createElementBlock as P, createElementVNode as ae, reactive as Mt, computed as V, unref as d, ref as U, watch as dt, onMounted as He, nextTick as ct, toRef as It, defineComponent as We, renderSlot as j, createCommentVNode as $, normalizeClass as ge, withKeys as ue, createBlock as me, withModifiers as qe, normalizeStyle as Qe, normalizeProps as Ne, mergeProps as Pe, Fragment as fe, createTextVNode as je, toDisplayString as _e, renderList as Me, createVNode as et, Transition as ht, withCtx as se, onBeforeUpdate as qn, onUnmounted as on, withDirectives as Ct, vShow as _t, createSlots as Ee, isRef as ot, guardReactiveProps as Ue, resolveDynamicComponent as Bn, useSlots as sn, getCurrentScope as Jn, onScopeDispose as Qn, Teleport as ea } from "vue";
import { isBefore as un, isEqual as Yn, isAfter as dn, setHours as Vn, setMinutes as En, setSeconds as Ln, setMilliseconds as cn, parse as an, isValid as Nt, isDate as ta, set as Re, format as bt, getMonth as pe, getDay as na, getYear as ke, getHours as Ze, getMinutes as Xe, getSeconds as gt, parseISO as aa, startOfWeek as hn, endOfWeek as ra, setMonth as Rt, setYear as ut, addDays as yt, add as Fn, addMonths as st, subMonths as Dt, getWeek as la, getISOWeek as oa, differenceInCalendarDays as sa, eachDayOfInterval as pn, addYears as ia, subYears as ua, sub as da } from "date-fns";
function Ft() {
  return p(), P(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ae("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      ae("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      ae("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      ae("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
function ca() {
  return p(), P(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ae("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      ae("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
function kn() {
  return p(), P(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ae("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function wn() {
  return p(), P(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ae("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
function Un() {
  return p(), P(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ae("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      ae("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
function Hn() {
  return p(), P(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ae("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function Wn() {
  return p(), P(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ae("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
const bn = (e, n, a, t) => {
  const s = an(e, n.slice(0, e.length), /* @__PURE__ */ new Date());
  return Nt(s) && ta(s) ? t ? s : Re(s, {
    hours: +a.hours,
    minutes: +(a == null ? void 0 : a.minutes),
    seconds: +(a == null ? void 0 : a.seconds),
    milliseconds: 0
  }) : null;
}, fa = (e, n, a, t) => {
  const s = Array.isArray(a) ? a[0] : a;
  if (typeof n == "string")
    return bn(e, n, s, t);
  if (Array.isArray(n)) {
    let f = null;
    for (const h of n)
      if (f = bn(e, h, s, t), f)
        break;
    return f;
  }
  return typeof n == "function" ? n(e) : null;
}, b = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), va = (e, n) => {
  if (n) {
    const t = (e.getMonth() + 1).toString().padStart(2, "0"), s = e.getDate().toString().padStart(2, "0"), f = e.getHours().toString().padStart(2, "0"), h = e.getMinutes().toString().padStart(2, "0");
    return `${e.getFullYear()}-${t}-${s}T${f}:${h}:00.000Z`;
  }
  const a = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(a).toISOString();
}, xe = (e) => {
  let n = b(JSON.parse(JSON.stringify(e)));
  return n = Vn(n, 0), n = En(n, 0), n = Ln(n, 0), n = cn(n, 0), n;
}, Fe = (e, n, a, t) => {
  let s = e ? b(e) : b();
  return (n || n === 0) && (s = Vn(s, +n)), (a || a === 0) && (s = En(s, +a)), (t || t === 0) && (s = Ln(s, +t)), cn(s, 0);
}, Oe = (e, n) => !e || !n ? !1 : un(xe(e), xe(n)), be = (e, n) => !e || !n ? !1 : Yn(xe(e), xe(n)), Ve = (e, n) => !e || !n ? !1 : dn(xe(e), xe(n)), zn = (e, n, a) => e && e[0] && e[1] ? Ve(a, e[0]) && Oe(a, e[1]) : e && e[0] && n ? Ve(a, e[0]) && Oe(a, n) || Oe(a, e[0]) && Ve(a, n) : !1, wt = Mt({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), Kn = () => {
  const e = (t) => {
    wt.menuFocused = t;
  }, n = (t) => {
    wt.shiftKeyInMenu !== t && (wt.shiftKeyInMenu = t);
  };
  return {
    control: V(() => ({ shiftKeyInMenu: wt.shiftKeyInMenu, menuFocused: wt.menuFocused })),
    setMenuFocused: e,
    setShiftKey: n
  };
};
function fn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Bt = {}, ma = {
  get exports() {
    return Bt;
  },
  set exports(e) {
    Bt = e;
  }
};
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = a;
  function a(t) {
    if (t === null || t === !0 || t === !1)
      return NaN;
    var s = Number(t);
    return isNaN(s) ? s : s < 0 ? Math.ceil(s) : Math.floor(s);
  }
  e.exports = n.default;
})(ma, Bt);
const ya = /* @__PURE__ */ fn(Bt);
var Yt = {}, ga = {
  get exports() {
    return Yt;
  },
  set exports(e) {
    Yt = e;
  }
};
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = a;
  function a(t) {
    var s = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
    return s.setUTCFullYear(t.getFullYear()), t.getTime() - s.getTime();
  }
  e.exports = n.default;
})(ga, Yt);
const Dn = /* @__PURE__ */ fn(Yt);
function ha(e, n) {
  var a = ba(n);
  return a.formatToParts ? ka(a, e) : wa(a, e);
}
var pa = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function ka(e, n) {
  try {
    for (var a = e.formatToParts(n), t = [], s = 0; s < a.length; s++) {
      var f = pa[a[s].type];
      f >= 0 && (t[f] = parseInt(a[s].value, 10));
    }
    return t;
  } catch (h) {
    if (h instanceof RangeError)
      return [NaN];
    throw h;
  }
}
function wa(e, n) {
  var a = e.format(n).replace(/\u200E/g, ""), t = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(a);
  return [t[3], t[1], t[2], t[4], t[5], t[6]];
}
var xt = {};
function ba(e) {
  if (!xt[e]) {
    var n = new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), a = n === "06/25/2014, 00:00:00" || n === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
    xt[e] = a ? new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return xt[e];
}
function vn(e, n, a, t, s, f, h) {
  var C = /* @__PURE__ */ new Date(0);
  return C.setUTCFullYear(e, n, a), C.setUTCHours(t, s, f, h), C;
}
var $n = 36e5, Da = 6e4, Gt = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function mn(e, n, a) {
  var t, s;
  if (!e || (t = Gt.timezoneZ.exec(e), t))
    return 0;
  var f;
  if (t = Gt.timezoneHH.exec(e), t)
    return f = parseInt(t[1], 10), Mn(f) ? -(f * $n) : NaN;
  if (t = Gt.timezoneHHMM.exec(e), t) {
    f = parseInt(t[1], 10);
    var h = parseInt(t[2], 10);
    return Mn(f, h) ? (s = Math.abs(f) * $n + h * Da, f > 0 ? -s : s) : NaN;
  }
  if (Ta(e)) {
    n = new Date(n || Date.now());
    var C = a ? n : $a(n), I = rn(C, e), D = a ? I : Ma(n, I, e);
    return -D;
  }
  return NaN;
}
function $a(e) {
  return vn(
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  );
}
function rn(e, n) {
  var a = ha(e, n), t = vn(
    a[0],
    a[1] - 1,
    a[2],
    a[3] % 24,
    a[4],
    a[5],
    0
  ).getTime(), s = e.getTime(), f = s % 1e3;
  return s -= f >= 0 ? f : 1e3 + f, t - s;
}
function Ma(e, n, a) {
  var t = e.getTime(), s = t - n, f = rn(new Date(s), a);
  if (n === f)
    return n;
  s -= f - n;
  var h = rn(new Date(s), a);
  return f === h ? f : Math.max(f, h);
}
function Mn(e, n) {
  return -23 <= e && e <= 23 && (n == null || 0 <= n && n <= 59);
}
var Tn = {};
function Ta(e) {
  if (Tn[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), Tn[e] = !0, !0;
  } catch {
    return !1;
  }
}
var Aa = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
const jn = Aa;
var Zt = 36e5, An = 6e4, Sa = 2, Ye = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // time zone tokens (to identify the presence of a tz)
  timeZone: jn
};
function ln(e, n) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  var a = n || {}, t = a.additionalDigits == null ? Sa : ya(a.additionalDigits);
  if (t !== 2 && t !== 1 && t !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var s = Pa(e), f = Ca(s.date, t), h = f.year, C = f.restDateString, I = _a(C, h);
  if (isNaN(I))
    return /* @__PURE__ */ new Date(NaN);
  if (I) {
    var D = I.getTime(), L = 0, M;
    if (s.time && (L = Na(s.time), isNaN(L)))
      return /* @__PURE__ */ new Date(NaN);
    if (s.timeZone || a.timeZone) {
      if (M = mn(s.timeZone || a.timeZone, new Date(D + L)), isNaN(M))
        return /* @__PURE__ */ new Date(NaN);
    } else
      M = Dn(new Date(D + L)), M = Dn(new Date(D + L + M));
    return new Date(D + L + M);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function Pa(e) {
  var n = {}, a = Ye.dateTimePattern.exec(e), t;
  if (a ? (n.date = a[1], t = a[3]) : (a = Ye.datePattern.exec(e), a ? (n.date = a[1], t = a[2]) : (n.date = null, t = e)), t) {
    var s = Ye.timeZone.exec(t);
    s ? (n.time = t.replace(s[1], ""), n.timeZone = s[1].trim()) : n.time = t;
  }
  return n;
}
function Ca(e, n) {
  var a = Ye.YYY[n], t = Ye.YYYYY[n], s;
  if (s = Ye.YYYY.exec(e) || t.exec(e), s) {
    var f = s[1];
    return {
      year: parseInt(f, 10),
      restDateString: e.slice(f.length)
    };
  }
  if (s = Ye.YY.exec(e) || a.exec(e), s) {
    var h = s[1];
    return {
      year: parseInt(h, 10) * 100,
      restDateString: e.slice(h.length)
    };
  }
  return {
    year: null
  };
}
function _a(e, n) {
  if (n === null)
    return null;
  var a, t, s, f;
  if (e.length === 0)
    return t = /* @__PURE__ */ new Date(0), t.setUTCFullYear(n), t;
  if (a = Ye.MM.exec(e), a)
    return t = /* @__PURE__ */ new Date(0), s = parseInt(a[1], 10) - 1, Pn(n, s) ? (t.setUTCFullYear(n, s), t) : /* @__PURE__ */ new Date(NaN);
  if (a = Ye.DDD.exec(e), a) {
    t = /* @__PURE__ */ new Date(0);
    var h = parseInt(a[1], 10);
    return Ia(n, h) ? (t.setUTCFullYear(n, 0, h), t) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Ye.MMDD.exec(e), a) {
    t = /* @__PURE__ */ new Date(0), s = parseInt(a[1], 10) - 1;
    var C = parseInt(a[2], 10);
    return Pn(n, s, C) ? (t.setUTCFullYear(n, s, C), t) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = Ye.Www.exec(e), a)
    return f = parseInt(a[1], 10) - 1, Cn(n, f) ? Sn(n, f) : /* @__PURE__ */ new Date(NaN);
  if (a = Ye.WwwD.exec(e), a) {
    f = parseInt(a[1], 10) - 1;
    var I = parseInt(a[2], 10) - 1;
    return Cn(n, f, I) ? Sn(n, f, I) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function Na(e) {
  var n, a, t;
  if (n = Ye.HH.exec(e), n)
    return a = parseFloat(n[1].replace(",", ".")), Xt(a) ? a % 24 * Zt : NaN;
  if (n = Ye.HHMM.exec(e), n)
    return a = parseInt(n[1], 10), t = parseFloat(n[2].replace(",", ".")), Xt(a, t) ? a % 24 * Zt + t * An : NaN;
  if (n = Ye.HHMMSS.exec(e), n) {
    a = parseInt(n[1], 10), t = parseInt(n[2], 10);
    var s = parseFloat(n[3].replace(",", "."));
    return Xt(a, t, s) ? a % 24 * Zt + t * An + s * 1e3 : NaN;
  }
  return null;
}
function Sn(e, n, a) {
  n = n || 0, a = a || 0;
  var t = /* @__PURE__ */ new Date(0);
  t.setUTCFullYear(e, 0, 4);
  var s = t.getUTCDay() || 7, f = n * 7 + a + 1 - s;
  return t.setUTCDate(t.getUTCDate() + f), t;
}
var Ra = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Oa = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function xn(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Pn(e, n, a) {
  if (n < 0 || n > 11)
    return !1;
  if (a != null) {
    if (a < 1)
      return !1;
    var t = xn(e);
    if (t && a > Oa[n] || !t && a > Ra[n])
      return !1;
  }
  return !0;
}
function Ia(e, n) {
  if (n < 1)
    return !1;
  var a = xn(e);
  return !(a && n > 366 || !a && n > 365);
}
function Cn(e, n, a) {
  return !(n < 0 || n > 52 || a != null && (a < 0 || a > 6));
}
function Xt(e, n, a) {
  return !(e != null && (e < 0 || e >= 25) || n != null && (n < 0 || n >= 60) || a != null && (a < 0 || a >= 60));
}
var Vt = {}, Ba = {
  get exports() {
    return Vt;
  },
  set exports(e) {
    Vt = e;
  }
}, Et = {}, Ya = {
  get exports() {
    return Et;
  },
  set exports(e) {
    Et = e;
  }
};
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = a;
  function a(t, s) {
    if (t == null)
      throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var f in s)
      Object.prototype.hasOwnProperty.call(s, f) && (t[f] = s[f]);
    return t;
  }
  e.exports = n.default;
})(Ya, Et);
(function(e, n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  }), n.default = s;
  var a = t(Et);
  function t(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function s(f) {
    return (0, a.default)({}, f);
  }
  e.exports = n.default;
})(Ba, Vt);
const Va = /* @__PURE__ */ fn(Vt);
function Ea(e, n, a) {
  var t = ln(e, a), s = mn(n, t, !0), f = new Date(t.getTime() - s), h = /* @__PURE__ */ new Date(0);
  return h.setFullYear(f.getUTCFullYear(), f.getUTCMonth(), f.getUTCDate()), h.setHours(f.getUTCHours(), f.getUTCMinutes(), f.getUTCSeconds(), f.getUTCMilliseconds()), h;
}
function La(e, n, a) {
  if (typeof e == "string" && !e.match(jn)) {
    var t = Va(a);
    return t.timeZone = n, ln(e, t);
  }
  var s = ln(e, a), f = vn(
    s.getFullYear(),
    s.getMonth(),
    s.getDate(),
    s.getHours(),
    s.getMinutes(),
    s.getSeconds(),
    s.getMilliseconds()
  ).getTime(), h = mn(n, new Date(f));
  return new Date(f + h);
}
const Fa = (e, n = 3) => {
  const a = [];
  for (let t = 0; t < e.length; t += n)
    a.push([e[t], e[t + 1], e[t + 2]]);
  return a;
}, Ua = (e, n) => {
  const a = [1, 2, 3, 4, 5, 6, 7].map((f) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${f}T00:00:00+00:00`)).slice(0, 2)), t = a.slice(0, n), s = a.slice(n + 1, a.length);
  return [a[n]].concat(...s).concat(...t);
}, Ha = (e) => {
  const n = [];
  for (let a = +e[0]; a <= +e[1]; a++)
    n.push({ value: +a, text: `${a}` });
  return n;
}, Wa = (e, n) => {
  const a = new Intl.DateTimeFormat(e, { month: n, timeZone: "UTC" });
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((s) => {
    const f = s < 10 ? `0${s}` : s;
    return /* @__PURE__ */ new Date(`2017-${f}-01T00:00:00+00:00`);
  }).map((s, f) => ({
    text: a.format(s),
    value: f
  }));
}, za = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], Te = (e) => {
  const n = d(e);
  return n != null && n.$el ? n == null ? void 0 : n.$el : n;
}, Ka = (e) => Object.assign({ type: "dot" }, e), Gn = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Lt = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, Se = (e) => e, _n = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, Nn = (e) => Object.assign(
  {
    menuAppear: "dp-menu-appear",
    open: "dp-slide-down",
    close: "dp-slide-up",
    next: "calendar-next",
    previous: "calendar-prev",
    vNext: "dp-slide-up",
    vPrevious: "dp-slide-down"
  },
  e
), ja = (e) => Object.assign(
  {
    toggleOverlay: "Toggle overlay",
    menu: "Datepicker menu",
    input: "Datepicker input",
    calendarWrap: "Calendar wrapper",
    calendarDays: "Calendar days",
    openTimePicker: "Open time picker",
    closeTimePicker: "Close time Picker",
    incrementValue: (n) => `Increment ${n}`,
    decrementValue: (n) => `Decrement ${n}`,
    openTpOverlay: (n) => `Open ${n} overlay`,
    amPmButton: "Switch AM/PM mode",
    openYearsOverlay: "Open years overlay",
    openMonthsOverlay: "Open months overlay",
    nextMonth: "Next month",
    prevMonth: "Previous month",
    day: () => ""
  },
  e
), xa = (e) => e === null ? 0 : typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2, Ga = (e, n, a) => e || (typeof a == "string" ? a : n), Za = (e) => typeof e == "boolean" ? e ? Nn({}) : !1 : Nn(e), Xa = () => ({
  enterSubmit: !0,
  tabSubmit: !0,
  openMenu: !0,
  rangeSeparator: " - "
}), qa = (e) => Object.assign({ months: [], years: [], times: { hours: [], minutes: [], seconds: [] } }, e), Le = (e) => {
  const n = () => {
    if (e.partialRange)
      return null;
    throw new Error(Lt.prop("partial-range"));
  }, a = V(() => ({
    ariaLabels: ja(e.ariaLabels),
    textInputOptions: Object.assign(Xa(), e.textInputOptions),
    multiCalendars: xa(e.multiCalendars),
    previewFormat: Ga(e.previewFormat, e.format, f()),
    filters: qa(e.filters),
    transitions: Za(e.transitions),
    startTime: m()
  })), t = (o) => {
    if (e.range)
      return o();
    throw new Error(Lt.prop("range"));
  }, s = () => {
    const o = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${o}` : `hh:mm${o} aa`;
  }, f = () => e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? s() : e.weekPicker ? "MM/dd/yyyy" : e.yearPicker ? "yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${s()}` : "MM/dd/yyyy", h = (o, r) => {
    if (typeof e.format == "function")
      return e.format(o);
    const c = r || f(), w = e.formatLocale ? { locale: e.formatLocale } : void 0;
    return Array.isArray(o) ? `${bt(o[0], c, w)} ${e.modelAuto && !o[1] ? "" : a.value.textInputOptions.rangeSeparator || "-"} ${o[1] ? bt(o[1], c, w) : ""}` : bt(o, c, w);
  }, C = (o) => e.timezone ? Ea(o, e.timezone) : o, I = (o) => e.timezone ? La(o, e.timezone) : o, D = V(() => (o) => {
    var r;
    return (r = e.hideNavigation) == null ? void 0 : r.includes(o);
  }), L = (o) => {
    const r = e.maxDate ? Ve(C(o), C(b(e.maxDate))) : !1, c = e.minDate ? Oe(C(o), C(b(e.minDate))) : !1, w = O(o, e.disabledDates), R = a.value.filters.months.map((te) => +te).includes(pe(o)), ce = e.disabledWeekDays.length ? e.disabledWeekDays.some((te) => +te === na(o)) : !1, y = e.allowedDates.length ? !e.allowedDates.some((te) => be(C(b(te)), C(o))) : !1, i = ke(o), Z = i < +e.yearRange[0] || i > +e.yearRange[1];
    return !(r || c || w || R || Z || ce || y);
  }, M = (o) => {
    const r = {
      hours: Ze(b()),
      minutes: Xe(b()),
      seconds: e.enableSeconds ? gt(b()) : 0
    };
    return Object.assign(r, o);
  }, m = () => e.range ? e.startTime && Array.isArray(e.startTime) ? [M(e.startTime[0]), M(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? M(e.startTime) : null, T = (o) => !L(o), H = (o) => Array.isArray(o) ? Nt(o[0]) && (o[1] ? Nt(o[1]) : !0) : o ? Nt(o) : !1, B = (o) => o instanceof Date ? o : aa(o), J = (o) => {
    const r = hn(C(o), { weekStartsOn: +e.weekStart }), c = ra(C(o), { weekStartsOn: +e.weekStart });
    return [r, c];
  }, O = (o, r) => Array.isArray(r) ? r.some((c) => be(C(b(c)), C(o))) : r(o), E = (o, r, c) => {
    let w = o ? b(o) : b();
    return (r || r === 0) && (w = Rt(w, r)), c && (w = ut(w, c)), w;
  }, S = (o) => Re(b(), { hours: Ze(o), minutes: Xe(o), seconds: gt(o) }), G = (o) => Re(b(), {
    hours: +o.hours || 0,
    minutes: +o.minutes || 0,
    seconds: +o.seconds || 0
  }), le = (o, r, c, w) => {
    if (!o)
      return !0;
    if (w) {
      const W = c === "max" ? un(o, r) : dn(o, r), R = { seconds: 0, milliseconds: 0 };
      return W || Yn(Re(o, R), Re(r, R));
    }
    return c === "max" ? o.getTime() <= r.getTime() : o.getTime() >= r.getTime();
  }, oe = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, de = (o) => Array.isArray(o) ? [o[0] ? S(o[0]) : null, o[1] ? S(o[1]) : null] : S(o), A = (o) => {
    const r = e.maxTime ? G(e.maxTime) : b(e.maxDate);
    return Array.isArray(o) ? le(o[0], r, "max", !!e.maxDate) && le(o[1], r, "max", !!e.maxDate) : le(o, r, "max", !!e.maxDate);
  }, Y = (o, r) => {
    const c = e.minTime ? G(e.minTime) : b(e.minDate);
    return Array.isArray(o) ? le(o[0], c, "min", !!e.minDate) && le(o[1], c, "min", !!e.minDate) && r : le(o, c, "min", !!e.minDate) && r;
  }, F = (o) => {
    let r = !0;
    if (!o || oe())
      return !0;
    const c = !e.minDate && !e.maxDate ? de(o) : o;
    return (e.maxTime || e.maxDate) && (r = A(Se(c))), (e.minTime || e.minDate) && (r = Y(Se(c), r)), r;
  }, v = (o, r) => {
    const c = b(JSON.parse(JSON.stringify(o))), w = [];
    for (let W = 0; W < 7; W++) {
      const R = yt(c, W), ce = pe(R) !== r;
      w.push({
        text: e.hideOffsetDates && ce ? "" : R.getDate(),
        value: R,
        current: !ce,
        classData: {}
      });
    }
    return w;
  }, _ = (o, r) => {
    const c = [], w = b(C(new Date(r, o))), W = b(C(new Date(r, o + 1, 0))), R = hn(w, { weekStartsOn: e.weekStart }), ce = (y) => {
      const i = v(y, o);
      if (c.push({ days: i }), !c[c.length - 1].days.some(
        (Z) => be(xe(Z.value), xe(W))
      )) {
        const Z = yt(y, 7);
        ce(Z);
      }
    };
    if (ce(R), e.sixWeeks && c.length < 6) {
      const y = 6 - c.length;
      for (let i = 1; i <= y; i++) {
        const Z = c[c.length - 1], te = Z.days[Z.days.length - 1], we = v(yt(te.value, 1), pe(w));
        c.push({ days: we });
      }
    }
    return c;
  }, z = (o, r, c) => [Re(b(o), { date: 1 }), Re(b(), { month: r, year: c, date: 1 })], q = (o, r) => Oe(...z(e.minDate, o, r)) || be(...z(e.minDate, o, r)), Q = (o, r) => Ve(...z(e.maxDate, o, r)) || be(...z(e.maxDate, o, r)), N = (o, r, c) => {
    let w = !1;
    return e.maxDate && c && Q(o, r) && (w = !0), e.minDate && !c && q(o, r) && (w = !0), w;
  };
  return {
    checkPartialRangeValue: n,
    checkRangeEnabled: t,
    getZonedDate: C,
    getZonedToUtc: I,
    formatDate: h,
    getDefaultPattern: f,
    validateDate: L,
    getDefaultStartTime: m,
    isDisabled: T,
    isValidDate: H,
    sanitizeDate: B,
    getWeekFromDate: J,
    matchDate: O,
    setDateMonthOrYear: E,
    isValidTime: F,
    getCalendarDays: _,
    validateMonthYearInRange: (o, r, c, w) => {
      let W = !1;
      return w ? e.minDate && e.maxDate ? W = N(o, r, c) : (e.minDate && q(o, r) || e.maxDate && Q(o, r)) && (W = !0) : W = !0, W;
    },
    validateMaxDate: Q,
    validateMinDate: q,
    assignDefaultTime: M,
    defaults: a,
    hideNavigationButtons: D
  };
}, he = Mt({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), qt = U(null), Pt = U(!1), Jt = U(!1), Qt = U(!1), en = U(!1), Be = U(0), Ce = U(0), tt = () => {
  const e = V(() => Pt.value ? [...he.selectionGrid, he.actionRow].filter((O) => O.length) : Jt.value ? [
    ...he.timePicker[0],
    ...he.timePicker[1],
    en.value ? [] : [qt.value],
    he.actionRow
  ].filter((O) => O.length) : Qt.value ? [...he.monthPicker, he.actionRow] : [he.monthYear, ...he.calendar, he.time, he.actionRow].filter((O) => O.length)), n = (O) => {
    Be.value = O ? Be.value + 1 : Be.value - 1;
    let E = null;
    e.value[Ce.value] && (E = e.value[Ce.value][Be.value]), E || (Be.value = O ? Be.value - 1 : Be.value + 1);
  }, a = (O) => {
    if (Ce.value === 0 && !O || Ce.value === e.value.length && O)
      return;
    Ce.value = O ? Ce.value + 1 : Ce.value - 1, e.value[Ce.value] ? e.value[Ce.value] && !e.value[Ce.value][Be.value] && Be.value !== 0 && (Be.value = e.value[Ce.value].length - 1) : Ce.value = O ? Ce.value - 1 : Ce.value + 1;
  }, t = (O) => {
    let E = null;
    e.value[Ce.value] && (E = e.value[Ce.value][Be.value]), E ? E.focus({ preventScroll: !Pt.value }) : Be.value = O ? Be.value - 1 : Be.value + 1;
  }, s = () => {
    n(!0), t(!0);
  }, f = () => {
    n(!1), t(!1);
  }, h = () => {
    a(!1), t(!0);
  }, C = () => {
    a(!0), t(!0);
  }, I = (O, E) => {
    he[E] = O;
  }, D = (O, E) => {
    he[E] = O;
  }, L = () => {
    Be.value = 0, Ce.value = 0;
  };
  return {
    buildMatrix: I,
    buildMultiLevelMatrix: D,
    setTimePickerBackRef: (O) => {
      qt.value = O;
    },
    setSelectionGrid: (O) => {
      Pt.value = O, L(), O || (he.selectionGrid = []);
    },
    setTimePicker: (O, E = !1) => {
      Jt.value = O, en.value = E, L(), O || (he.timePicker[0] = [], he.timePicker[1] = []);
    },
    setTimePickerElements: (O, E = 0) => {
      he.timePicker[E] = O;
    },
    arrowRight: s,
    arrowLeft: f,
    arrowUp: h,
    arrowDown: C,
    clearArrowNav: () => {
      he.monthYear = [], he.calendar = [], he.time = [], he.actionRow = [], he.selectionGrid = [], he.timePicker[0] = [], he.timePicker[1] = [], Pt.value = !1, Jt.value = !1, en.value = !1, Qt.value = !1, L(), qt.value = null;
    },
    setMonthPicker: (O) => {
      Qt.value = O, L();
    },
    refSets: he
    // exposed for testing
  };
}, Rn = (e) => Array.isArray(e), lt = (e) => Array.isArray(e), On = (e) => Array.isArray(e) && e.length === 2, Ja = (e, n, a, t, s) => {
  const {
    getDefaultStartTime: f,
    isDisabled: h,
    sanitizeDate: C,
    getWeekFromDate: I,
    setDateMonthOrYear: D,
    validateMonthYearInRange: L,
    defaults: M
  } = Le(e), m = V({
    get: () => e.internalModelValue,
    set: (u) => {
      !e.readonly && !e.disabled && n("update:internal-model-value", u);
    }
  }), T = U([]);
  dt(m, () => {
    le();
  });
  const H = U([{ month: pe(b()), year: ke(b()) }]), B = Mt({
    hours: e.range ? [Ze(b()), Ze(b())] : Ze(b()),
    minutes: e.range ? [Xe(b()), Xe(b())] : Xe(b()),
    seconds: e.range ? [0, 0] : 0
  }), J = V(
    () => (u) => H.value[u] ? H.value[u].month : 0
  ), O = V(
    () => (u) => H.value[u] ? H.value[u].year : 0
  ), E = V(() => e.flow && e.flow.length && !e.partialFlow ? s.value === e.flow.length : !0), S = (u, k, x) => {
    var ee, De;
    H.value[u] || (H.value[u] = { month: 0, year: 0 }), H.value[u].month = k === null ? (ee = H.value[u]) == null ? void 0 : ee.month : k, H.value[u].year = x === null ? (De = H.value[u]) == null ? void 0 : De.year : x;
  }, G = (u, k) => {
    B[u] = k;
  };
  He(() => {
    m.value || (e.startDate && (S(0, pe(b(e.startDate)), ke(b(e.startDate))), M.value.multiCalendars && ye(0)), M.value.startTime && Q()), le(!0);
  });
  const le = (u = !1) => {
    if (m.value)
      return Array.isArray(m.value) ? (T.value = m.value, F(u)) : de(m.value);
    if (e.timePicker)
      return v();
    if (e.monthPicker && !e.range)
      return _();
    if (e.yearPicker && !e.range)
      return z();
    if (M.value.multiCalendars && u && !e.startDate)
      return oe(b(), u);
  }, oe = (u, k = !1) => {
    if ((!M.value.multiCalendars || !e.multiStatic || k) && S(0, pe(u), ke(u)), M.value.multiCalendars)
      for (let x = 1; x < M.value.multiCalendars; x++) {
        const ee = Re(b(), { month: J.value(x - 1), year: O.value(x - 1) }), De = Fn(ee, { months: 1 });
        H.value[x] = { month: pe(De), year: ke(De) };
      }
  }, de = (u) => {
    oe(u), G("hours", Ze(u)), G("minutes", Xe(u)), G("seconds", gt(u));
  }, A = (u, k) => {
    oe(u[0], k);
    const x = (ee, De) => [
      ee(u[0]),
      u[1] ? ee(u[1]) : B[De][1]
    ];
    G("hours", x(Ze, "hours")), G("minutes", x(Xe, "minutes")), G("seconds", x(gt, "seconds"));
  }, Y = (u, k) => {
    if ((e.range || e.weekPicker) && !e.multiDates)
      return A(u, k);
    if (e.multiDates) {
      const x = u[u.length - 1];
      return de(x);
    }
  }, F = (u) => {
    const k = m.value;
    Y(k, u), M.value.multiCalendars && e.multiCalendarsSolo && l();
  }, v = () => {
    if (Q(), !e.range)
      m.value = Fe(b(), B.hours, B.minutes, q());
    else {
      const u = B.hours, k = B.minutes;
      m.value = [
        Fe(b(), u[0], k[0], q()),
        Fe(b(), u[1], k[1], q(!1))
      ];
    }
  }, _ = () => {
    m.value = D(b(), J.value(0), O.value(0));
  }, z = () => {
    m.value = b();
  }, q = (u = !0) => e.enableSeconds ? Array.isArray(B.seconds) ? u ? B.seconds[0] : B.seconds[1] : B.seconds : 0, Q = () => {
    const u = f();
    if (u) {
      const k = Array.isArray(u), x = k ? [+u[0].hours, +u[1].hours] : +u.hours, ee = k ? [+u[0].minutes, +u[1].minutes] : +u.minutes, De = k ? [+u[0].seconds, +u[1].seconds] : +u.seconds;
      G("hours", x), G("minutes", ee), e.enableSeconds && G("seconds", De);
    }
  }, N = () => Array.isArray(m.value) && m.value.length ? m.value[m.value.length - 1] : null, l = () => {
    if (Array.isArray(m.value) && m.value.length === 2) {
      const u = b(
        b(m.value[1] ? m.value[1] : st(m.value[0], 1))
      ), [k, x] = [pe(m.value[0]), ke(m.value[0])], [ee, De] = [pe(m.value[1]), ke(m.value[1])];
      (k !== ee || k === ee && x !== De) && e.multiCalendarsSolo && S(1, pe(u), ke(u));
    }
  }, o = (u) => {
    const k = st(u, 1);
    return { month: pe(k), year: ke(k) };
  }, r = (u) => {
    const k = pe(b(u)), x = ke(b(u));
    if (S(0, k, x), M.value.multiCalendars > 0)
      for (let ee = 1; ee < M.value.multiCalendars; ee++) {
        const De = o(
          Re(b(u), { year: J.value(ee - 1), month: O.value(ee - 1) })
        );
        S(ee, De.month, De.year);
      }
  }, c = (u) => {
    if (m.value && Array.isArray(m.value))
      if (m.value.some((k) => be(u, k))) {
        const k = m.value.filter((x) => !be(x, u));
        m.value = k.length ? k : null;
      } else
        (e.multiDatesLimit && +e.multiDatesLimit > m.value.length || !e.multiDatesLimit) && m.value.push(u);
    else
      m.value = [u];
  }, w = (u, k) => {
    const x = Ve(u, k) ? k : u, ee = Ve(k, u) ? k : u;
    return pn({ start: x, end: ee });
  }, W = (u, k = 0) => {
    if (Array.isArray(m.value) && m.value[k]) {
      const x = sa(u, m.value[k]), ee = w(m.value[k], u), De = ee.length === 1 ? 0 : ee.filter((K) => h(K)).length, g = Math.abs(x) - De;
      if (e.minRange && e.maxRange)
        return g >= +e.minRange && g <= +e.maxRange;
      if (e.minRange)
        return g >= +e.minRange;
      if (e.maxRange)
        return g <= +e.maxRange;
    }
    return !0;
  }, R = (u) => Array.isArray(m.value) && m.value.length === 2 ? e.fixedStart && (Ve(u, m.value[0]) || be(u, m.value[0])) ? [m.value[0], u] : e.fixedEnd && (Oe(u, m.value[1]) || be(u, m.value[1])) ? [u, m.value[1]] : (n("invalid-fixed-range", u), m.value) : [], ce = () => {
    e.autoApply && E.value && n("auto-apply", e.partialFlow);
  }, y = () => {
    e.autoApply && n("select-date");
  }, i = (u) => !pn({ start: u[0], end: u[1] }).some((x) => h(x)), Z = (u) => (m.value = I(b(u.value)), ce()), te = (u) => {
    const k = Fe(b(u.value), B.hours, B.minutes, q());
    e.multiDates ? c(k) : m.value = k, a(), ce();
  }, we = () => {
    T.value = m.value ? m.value.slice() : [], T.value.length === 2 && !(e.fixedStart || e.fixedEnd) && (T.value = []);
  }, ze = (u, k) => {
    const x = [b(u.value), yt(b(u.value), +e.autoRange)];
    i(x) && (k && r(u.value), T.value = x);
  }, Je = (u) => {
    re(u.value) || !W(u.value, e.fixedStart ? 0 : 1) || (T.value = R(b(u.value)));
  }, re = (u) => e.noDisabledRange ? w(T.value[0], u).some((x) => h(x)) : !1, Ge = (u, k) => {
    if (we(), e.autoRange)
      return ze(u, k);
    if (e.fixedStart || e.fixedEnd)
      return Je(u);
    T.value[0] ? W(b(u.value)) && !re(u.value) && (Oe(b(u.value), b(T.value[0])) ? T.value.unshift(b(u.value)) : T.value[1] = b(u.value)) : T.value[0] = b(u.value);
  }, Ke = (u) => {
    T.value[u] = Fe(
      T.value[u],
      B.hours[u],
      B.minutes[u],
      q(u !== 1)
    );
  }, Ie = () => {
    T.value.length && (T.value[0] && !T.value[1] ? Ke(0) : (Ke(0), Ke(1), a()), m.value = T.value.slice(), T.value[0] && T.value[1] && e.autoApply && n("auto-apply"), T.value[0] && !T.value[1] && e.modelAuto && e.autoApply && n("auto-apply"));
  }, pt = (u, k = !1) => {
    if (!(h(u.value) || !u.current && e.hideOffsetDates)) {
      if (e.weekPicker)
        return Z(u);
      if (!e.range)
        return te(u);
      lt(B.hours) && lt(B.minutes) && !e.multiDates && (Ge(u, k), Ie());
    }
  }, ne = (u) => {
    const k = u[0];
    return e.weekNumbers === "local" ? la(k.value, { weekStartsOn: +e.weekStart }) : e.weekNumbers === "iso" ? oa(k.value) : typeof e.weekNumbers == "function" ? e.weekNumbers(k.value) : "";
  }, ye = (u) => {
    for (let k = u - 1; k >= 0; k--) {
      const x = Dt(Re(b(), { month: J.value(k + 1), year: O.value(k + 1) }), 1);
      S(k, pe(x), ke(x));
    }
    for (let k = u + 1; k <= M.value.multiCalendars - 1; k++) {
      const x = st(Re(b(), { month: J.value(k - 1), year: O.value(k - 1) }), 1);
      S(k, pe(x), ke(x));
    }
  }, ve = (u) => D(b(), J.value(u), O.value(u)), at = (u) => Fe(u, B.hours, B.minutes, q()), rt = (u, k) => {
    const x = e.monthPicker ? J.value(u) !== k.month || !k.fromNav : O.value(u) !== k.year;
    if (S(u, k.month, k.year), M.value.multiCalendars && !e.multiCalendarsSolo && ye(u), e.monthPicker || e.yearPicker)
      if (e.range) {
        if (x) {
          let ee = m.value ? m.value.slice() : [];
          ee.length === 2 && ee[1] !== null && (ee = []), ee.length ? Oe(ve(u), ee[0]) ? ee.unshift(ve(u)) : ee[1] = ve(u) : ee = [ve(u)], m.value = ee;
        }
      } else
        m.value = ve(u);
    n("update-month-year", { instance: u, month: k.month, year: k.year }), t(e.multiCalendarsSolo ? u : void 0);
  }, Ht = async (u = !1) => {
    if (e.autoApply && (e.monthPicker || e.yearPicker)) {
      await ct();
      const k = e.monthPicker ? u : !1;
      e.range ? n("auto-apply", k || !m.value || m.value.length === 1) : n("auto-apply", k);
    }
    a();
  }, Tt = (u, k) => {
    const x = Re(b(), { month: J.value(k), year: O.value(k) }), ee = u < 0 ? st(x, 1) : Dt(x, 1);
    L(pe(ee), ke(ee), u < 0, e.preventMinMaxNavigation) && (S(k, pe(ee), ke(ee)), M.value.multiCalendars && !e.multiCalendarsSolo && ye(k), n("update-month-year", { instance: k, month: pe(ee), year: ke(ee) }), t());
  }, kt = (u) => {
    Rn(u) && Rn(m.value) && lt(B.hours) && lt(B.minutes) ? (u[0] && m.value[0] && (m.value[0] = Fe(u[0], B.hours[0], B.minutes[0], q())), u[1] && m.value[1] && (m.value[1] = Fe(u[1], B.hours[1], B.minutes[1], q(!1)))) : e.multiDates && Array.isArray(m.value) ? m.value[m.value.length - 1] = at(u) : !e.range && !On(u) && (m.value = at(u)), n("time-update");
  }, Wt = (u, k = !0, x = !1) => {
    const ee = k ? u : B.hours, De = !k && !x ? u : B.minutes, g = x ? u : B.seconds;
    if (e.range && On(m.value) && lt(ee) && lt(De) && lt(g) && !e.disableTimeRangeValidation) {
      const K = ($e) => Fe(m.value[$e], ee[$e], De[$e], g[$e]), Ae = ($e) => cn(m.value[$e], 0);
      if (be(m.value[0], m.value[1]) && (dn(K(0), Ae(1)) || un(K(1), Ae(0))))
        return;
    }
    if (G("hours", ee), G("minutes", De), G("seconds", g), m.value)
      if (e.multiDates) {
        const K = N();
        K && kt(K);
      } else
        kt(m.value);
    else
      e.timePicker && kt(e.range ? [b(), b()] : b());
    a();
  }, zt = (u, k) => {
    e.monthChangeOnScroll && Tt(e.monthChangeOnScroll !== "inverse" ? -u.deltaY : u.deltaY, k);
  }, Kt = (u, k, x = !1) => {
    e.monthChangeOnArrows && e.vertical === x && At(u, k);
  }, At = (u, k) => {
    Tt(u === "right" ? -1 : 1, k);
  };
  return {
    time: B,
    month: J,
    year: O,
    modelValue: m,
    calendars: H,
    monthYearSelect: Ht,
    isDisabled: h,
    updateTime: Wt,
    getWeekNum: ne,
    selectDate: pt,
    updateMonthYear: rt,
    handleScroll: zt,
    getMarker: (u) => e.markers.find((k) => be(C(u.value), C(k.date))),
    handleArrow: Kt,
    handleSwipe: At,
    selectCurrentDate: () => {
      e.range ? m.value && Array.isArray(m.value) && m.value[0] ? m.value = Oe(b(), m.value[0]) ? [b(), m.value[0]] : [m.value[0], b()] : m.value = [b()] : m.value = b(), y();
    },
    presetDateRange: (u, k) => {
      k || u.length && u.length <= 2 && e.range && (m.value = u.map((x) => b(x)), y(), e.multiCalendars && ct().then(() => le(!0)));
    }
  };
}, Qa = (e, n, a) => {
  const t = U(), {
    getZonedToUtc: s,
    getZonedDate: f,
    formatDate: h,
    getDefaultPattern: C,
    checkRangeEnabled: I,
    checkPartialRangeValue: D,
    isValidDate: L,
    setDateMonthOrYear: M,
    defaults: m
  } = Le(n), T = U(""), H = It(n, "format");
  dt(t, () => {
    e("internal-model-change", t.value);
  }), dt(H, () => {
    o();
  });
  const B = (i) => {
    const Z = i || b();
    return n.modelType ? c(Z) : {
      hours: Ze(Z),
      minutes: Xe(Z),
      seconds: n.enableSeconds ? gt(Z) : 0
    };
  }, J = (i) => n.modelType ? c(i) : { month: pe(i), year: ke(i) }, O = (i) => Array.isArray(i) ? I(() => [
    ut(b(), i[0]),
    i[1] ? ut(b(), i[1]) : D()
  ]) : ut(b(), +i), E = (i, Z) => (typeof i == "string" || typeof i == "number") && n.modelType ? r(i) : Z, S = (i) => Array.isArray(i) ? [
    E(
      i[0],
      Fe(null, +i[0].hours, +i[0].minutes, i[0].seconds)
    ),
    E(
      i[1],
      Fe(null, +i[1].hours, +i[1].minutes, i[1].seconds)
    )
  ] : E(i, Fe(null, i.hours, i.minutes, i.seconds)), G = (i) => Array.isArray(i) ? I(() => [
    E(i[0], M(null, +i[0].month, +i[0].year)),
    E(
      i[1],
      i[1] ? M(null, +i[1].month, +i[1].year) : D()
    )
  ]) : E(i, M(null, +i.month, +i.year)), le = (i) => {
    if (Array.isArray(i))
      return i.map((Z) => r(Z));
    throw new Error(Lt.dateArr("multi-dates"));
  }, oe = (i) => {
    if (Array.isArray(i))
      return [b(i[0]), b(i[1])];
    throw new Error(Lt.dateArr("week-picker"));
  }, de = (i) => n.modelAuto ? Array.isArray(i) ? [r(i[0]), r(i[1])] : n.autoApply ? [r(i)] : [r(i), null] : Array.isArray(i) ? I(() => [
    r(i[0]),
    i[1] ? r(i[1]) : D()
  ]) : r(i), A = () => {
    Array.isArray(t.value) && n.range && t.value.length === 1 && t.value.push(D());
  }, Y = () => {
    const i = t.value;
    return [
      c(i[0]),
      i[1] ? c(i[1]) : D()
    ];
  }, F = () => t.value[1] ? Y() : c(Se(t.value[0])), v = () => (t.value || []).map((i) => c(i)), _ = () => (A(), n.modelAuto ? F() : n.multiDates ? v() : Array.isArray(t.value) ? I(() => Y()) : c(Se(t.value))), z = (i) => i ? n.timePicker ? S(Se(i)) : n.monthPicker ? G(Se(i)) : n.yearPicker ? O(Se(i)) : n.multiDates ? le(Se(i)) : n.weekPicker ? oe(Se(i)) : de(Se(i)) : null, q = (i) => {
    const Z = z(i);
    L(Se(Z)) ? (t.value = Se(Z), o()) : (t.value = null, T.value = "");
  }, Q = () => {
    var Z;
    const i = (te) => {
      var we;
      return bt(te, (we = m.value.textInputOptions) == null ? void 0 : we.format);
    };
    return `${i(t.value[0])} ${(Z = m.value.textInputOptions) == null ? void 0 : Z.rangeSeparator} ${t.value[1] ? i(t.value[1]) : ""}`;
  }, N = () => {
    var i;
    return a.value && t.value ? Array.isArray(t.value) ? Q() : bt(t.value, (i = m.value.textInputOptions) == null ? void 0 : i.format) : h(t.value);
  }, l = () => {
    var i;
    return t.value ? n.multiDates ? t.value.map((Z) => h(Z)).join("; ") : n.textInput && typeof ((i = m.value.textInputOptions) == null ? void 0 : i.format) == "string" ? N() : h(t.value) : "";
  }, o = () => {
    !n.format || typeof n.format == "string" ? T.value = l() : T.value = n.format(t.value);
  }, r = (i) => {
    if (n.utc) {
      const Z = new Date(i);
      return n.utc === "preserve" ? new Date(Z.getTime() + Z.getTimezoneOffset() * 6e4) : Z;
    }
    return n.modelType ? n.modelType === "date" || n.modelType === "timestamp" ? f(new Date(i)) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? an(i, C(), /* @__PURE__ */ new Date()) : f(an(i, n.modelType, /* @__PURE__ */ new Date())) : f(new Date(i));
  }, c = (i) => i ? n.utc ? va(i, n.utc === "preserve") : n.modelType ? n.modelType === "timestamp" ? +s(i) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? h(s(i)) : h(s(i), n.modelType) : s(i) : "", w = (i) => {
    e("update:model-value", i);
  }, W = (i) => Array.isArray(t.value) ? [
    i(t.value[0]),
    t.value[1] ? i(t.value[1]) : D()
  ] : i(Se(t.value)), R = (i) => w(Se(W(i)));
  return {
    inputValue: T,
    internalModelValue: t,
    checkBeforeEmit: () => t.value ? n.range ? n.partialRange ? t.value.length >= 1 : t.value.length === 2 : !!t.value : !1,
    parseExternalModelValue: q,
    formatInputValue: o,
    emitModelValue: () => (o(), n.monthPicker ? R(J) : n.timePicker ? R(B) : n.yearPicker ? R(ke) : n.weekPicker ? w(t.value) : w(_()))
  };
}, er = (e, n) => {
  const { validateMonthYearInRange: a, validateMaxDate: t, validateMinDate: s, defaults: f } = Le(e), h = (M, m) => {
    let T = M;
    return f.value.filters.months.includes(pe(T)) ? (T = m ? st(M, 1) : Dt(M, 1), h(T, m)) : T;
  }, C = (M, m) => {
    let T = M;
    return f.value.filters.years.includes(ke(T)) ? (T = m ? ia(M, 1) : ua(M, 1), C(T, m)) : T;
  }, I = (M) => {
    const m = Re(/* @__PURE__ */ new Date(), { month: e.month, year: e.year });
    let T = M ? st(m, 1) : Dt(m, 1), H = pe(T), B = ke(T);
    f.value.filters.months.includes(H) && (T = h(T, M), H = pe(T), B = ke(T)), f.value.filters.years.includes(B) && (T = C(T, M), B = ke(T)), a(H, B, M, e.preventMinMaxNavigation) && D(H, B);
  }, D = (M, m) => {
    n("update-month-year", { month: M, year: m });
  }, L = V(() => (M) => {
    if (!e.preventMinMaxNavigation || M && !e.maxDate || !M && !e.minDate)
      return !1;
    const m = Re(/* @__PURE__ */ new Date(), { month: e.month, year: e.year }), T = M ? st(m, 1) : Dt(m, 1), H = [pe(T), ke(T)];
    return M ? !t(...H) : !s(...H);
  });
  return { handleMonthYearChange: I, isDisabled: L, updateMonthYear: D };
};
var Ot = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Ot || {});
const tr = (e, n, a, t) => {
  const s = U({
    top: "0",
    left: "0",
    transform: "none"
  }), f = U(!1), h = It(t, "teleportCenter");
  dt(h, () => {
    B();
  });
  const C = (A) => {
    if (t.teleport) {
      const Y = A.getBoundingClientRect();
      return {
        left: Y.left + window.scrollX,
        top: Y.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, I = (A, Y) => {
    s.value.left = `${A + Y}px`, s.value.transform = "translateX(-100%)";
  }, D = (A) => {
    s.value.left = `${A}px`, s.value.transform = "translateX(0)";
  }, L = (A, Y, F = !1) => {
    t.position === Ot.left && D(A), t.position === Ot.right && I(A, Y), t.position === Ot.center && (s.value.left = `${A + Y / 2}px`, s.value.transform = F ? "translate(-50%, -50%)" : "translateX(-50%)");
  }, M = (A) => {
    const { width: Y, height: F } = A.getBoundingClientRect(), { top: v, left: _ } = t.altPosition ? t.altPosition(A) : C(A);
    return { top: +v, left: +_, width: Y, height: F };
  }, m = () => {
    const A = Te(n);
    if (A) {
      const { top: Y, left: F, width: v, height: _ } = M(A);
      s.value.top = `${Y + _ / 2}px`, s.value.transform = "translateY(-50%)", L(F, v, !0);
    }
  }, T = () => {
    s.value.left = "50%", s.value.top = "50%", s.value.transform = "translate(-50%, -50%)", s.value.position = "fixed";
  }, H = () => {
    const A = Te(n), { top: Y, left: F, transform: v } = t.altPosition(A);
    s.value = { top: `${Y}px`, left: `${F}px`, transform: v || "" };
  }, B = (A = !0) => {
    if (!t.inline)
      return h.value ? T() : t.altPosition !== null ? H() : (A && a("recalculate-position"), le());
  }, J = ({
    inputEl: A,
    menuEl: Y,
    left: F,
    width: v
  }) => {
    window.screen.width > 768 && L(F, v), S(A, Y);
  }, O = (A, Y) => {
    const { top: F, left: v, height: _, width: z } = M(A);
    s.value.top = `${_ + F + +t.offset}px`, J({ inputEl: A, menuEl: Y, left: v, width: z }), f.value = !1;
  }, E = (A, Y) => {
    const { top: F, left: v, width: _ } = M(A), { height: z } = Y.getBoundingClientRect();
    s.value.top = `${F - z - +t.offset}px`, J({ inputEl: A, menuEl: Y, left: v, width: _ }), f.value = !0;
  }, S = (A, Y) => {
    if (t.autoPosition) {
      const { left: F, width: v } = M(A), { left: _, right: z } = Y.getBoundingClientRect();
      return _ <= 0 || _ <= F ? D(F) : z >= document.documentElement.clientWidth ? I(F, v) : L(F, v);
    }
  }, G = (A, Y) => {
    const { height: F } = Y.getBoundingClientRect(), { top: v, height: _ } = A.getBoundingClientRect(), q = window.innerHeight - v - _, Q = v;
    return F <= q ? O(A, Y) : F > q && F <= Q ? E(A, Y) : q >= Q ? O(A, Y) : E(A, Y);
  }, le = () => {
    const A = Te(n), Y = Te(e);
    if (A && Y)
      return t.autoPosition ? G(A, Y) : O(A, Y);
  }, oe = function(A) {
    if (A) {
      const Y = A.scrollHeight > A.clientHeight, v = window.getComputedStyle(A).overflowY.indexOf("hidden") !== -1;
      return Y && !v;
    }
    return !0;
  }, de = function(A) {
    return !A || A === document.body ? window : oe(A) ? A : de(A.parentNode);
  };
  return { openOnTop: f, menuPosition: s, setMenuPosition: B, setInitialPosition: m, getScrollableParent: de };
}, mt = [
  { name: "clock-icon", use: ["time", "calendar"] },
  { name: "arrow-left", use: ["month-year", "calendar"] },
  { name: "arrow-right", use: ["month-year", "calendar"] },
  { name: "arrow-up", use: ["time", "calendar"] },
  { name: "arrow-down", use: ["time", "calendar"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar"] },
  { name: "day", use: ["calendar"] },
  { name: "month-overlay-value", use: ["calendar", "month-year"] },
  { name: "year-overlay-value", use: ["calendar", "month-year"] },
  { name: "year-overlay", use: ["month-year"] },
  { name: "month-overlay", use: ["month-year"] },
  { name: "month-overlay-header", use: ["month-year"] },
  { name: "year-overlay-header", use: ["month-year"] },
  { name: "hours-overlay-value", use: ["calendar", "time"] },
  { name: "minutes-overlay-value", use: ["calendar", "time"] },
  { name: "seconds-overlay-value", use: ["calendar", "time"] },
  { name: "hours", use: ["calendar", "time"] },
  { name: "minutes", use: ["calendar", "time"] },
  { name: "month", use: ["calendar", "month-year"] },
  { name: "year", use: ["calendar", "month-year"] },
  { name: "action-select", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar"] },
  { name: "marker-tooltip", use: ["calendar"] },
  { name: "now-button", use: [] },
  { name: "time-picker-overlay", use: ["calendar", "time"] },
  { name: "am-pm-button", use: ["calendar", "time"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year"] },
  { name: "time-picker", use: ["menu"] },
  { name: "action-row", use: ["action"] }
], nr = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], ar = {
  all: () => mt,
  monthYear: () => mt.filter((e) => e.use.includes("month-year")),
  input: () => nr,
  timePicker: () => mt.filter((e) => e.use.includes("time")),
  action: () => mt.filter((e) => e.use.includes("action")),
  calendar: () => mt.filter((e) => e.use.includes("calendar")),
  menu: () => mt.filter((e) => e.use.includes("menu"))
}, it = (e, n, a) => {
  const t = [];
  return ar[n]().forEach((s) => {
    e[s.name] && t.push(s.name);
  }), a && a.length && a.forEach((s) => {
    s.slot && t.push(s.slot);
  }), t;
}, Ut = (e) => ({ transitionName: V(() => (a) => e && typeof e != "boolean" ? a ? e.open : e.close : ""), showTransition: !!e }), nt = {
  multiCalendars: { type: [Boolean, Number, String], default: null },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  closeOnScroll: { type: Boolean, default: !1 },
  autoPosition: { type: Boolean, default: !0 },
  closeOnAutoApply: { type: Boolean, default: !0 },
  altPosition: { type: Function, default: null },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: String, default: null },
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  menuClassName: { type: String, default: null },
  dayClass: { type: Function, default: null },
  yearRange: { type: Array, default: () => [1900, 2100] },
  multiCalendarsSolo: { type: Boolean, default: !1 },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: !0 },
  autoApply: { type: Boolean, default: !1 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  hideOffsetDates: { type: Boolean, default: !1 },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: () => [] },
  showNowButton: { type: Boolean, default: !1 },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  modeHeight: { type: [Number, String], default: 255 },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !0 },
  presetRanges: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  partialFlow: { type: Boolean, default: !1 },
  preventMinMaxNavigation: { type: Boolean, default: !1 },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: !1 },
  keepActionRow: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  multiStatic: { type: Boolean, default: !0 },
  disableTimeRangeValidation: { type: Boolean, default: !1 },
  highlight: {
    type: [Array, Function],
    default: null
  },
  highlightWeekDays: {
    type: Array,
    default: null
  },
  highlightDisabledDays: { type: Boolean, default: !1 },
  teleport: { type: [String, Boolean], default: null },
  teleportCenter: { type: Boolean, default: !1 },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: {
    type: [String, Function],
    default: null
  },
  calendarClassName: { type: String, default: null },
  noSwipe: { type: Boolean, default: !1 },
  monthChangeOnScroll: { type: [Boolean, String], default: !0 },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: Boolean, default: !1 },
  partialRange: { type: Boolean, default: !0 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !0 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  inlineWithInput: { type: Boolean, default: !1 },
  textInputOptions: { type: Object, default: () => null },
  fixedStart: { type: Boolean, default: !1 },
  fixedEnd: { type: Boolean, default: !1 },
  timePicker: { type: Boolean, default: !1 },
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: Boolean, default: !1 },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  inline: { type: Boolean, default: !1 },
  textInput: { type: Boolean, default: !1 },
  onClickOutside: { type: Function, default: null },
  noDisabledRange: { type: Boolean, default: !1 },
  sixWeeks: { type: Boolean, default: !1 }
}, rr = ["aria-label", "aria-disabled", "aria-readonly"], lr = {
  key: 1,
  class: "dp__input_wrap"
}, or = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "onKeydown"], sr = {
  key: 2,
  class: "dp__input_icon"
}, ir = {
  key: 4,
  class: "dp__clear_icon"
}, ur = /* @__PURE__ */ We({
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...nt
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { getDefaultPattern: s, isValidDate: f, defaults: h, getDefaultStartTime: C, assignDefaultTime: I } = Le(t), D = U(), L = U(null), M = U(!1), m = V(
      () => ({
        dp__pointer: !t.disabled && !t.readonly && !t.textInput,
        dp__disabled: t.disabled,
        dp__input_readonly: !t.textInput,
        dp__input: !0,
        dp__input_icon_pad: !t.hideInputIcon,
        dp__input_valid: t.state,
        dp__input_invalid: t.state === !1,
        dp__input_focus: M.value || t.isMenuOpen,
        dp__input_reg: !t.textInput,
        [t.inputClassName]: !!t.inputClassName
      })
    ), T = () => {
      a("set-input-date", null), t.autoApply && (a("set-empty-date"), D.value = null);
    }, H = (v) => {
      var z;
      const _ = C();
      return fa(
        v,
        ((z = h.value.textInputOptions) == null ? void 0 : z.format) || s(),
        _ || I({}),
        t.inputValue
      );
    }, B = (v) => {
      const { rangeSeparator: _ } = h.value.textInputOptions, [z, q] = v.split(`${_}`);
      if (z) {
        const Q = H(z.trim()), N = q ? H(q.trim()) : null, l = Q && N ? [Q, N] : [Q];
        D.value = Q ? l : null;
      }
    }, J = (v) => {
      if (t.range)
        B(v);
      else if (t.multiDates) {
        const _ = v.split(";");
        D.value = _.map((z) => H(z.trim())).filter((z) => z);
      } else
        D.value = H(v);
    }, O = (v) => {
      var z;
      const { value: _ } = v.target;
      _ !== "" ? ((z = h.value.textInputOptions) != null && z.openMenu && !t.isMenuOpen && a("open"), J(_), a("set-input-date", D.value)) : T(), a("update:input-value", _);
    }, E = () => {
      var v, _;
      (v = h.value.textInputOptions) != null && v.enterSubmit && f(D.value) && t.inputValue !== "" ? (a("set-input-date", D.value, !0), D.value = null) : (_ = h.value.textInputOptions) != null && _.enterSubmit && t.inputValue === "" && (D.value = null, a("clear"));
    }, S = () => {
      var v, _;
      (v = h.value.textInputOptions) != null && v.tabSubmit && f(D.value) && t.inputValue !== "" ? (a("set-input-date", D.value, !0), D.value = null) : (_ = h.value.textInputOptions) != null && _.tabSubmit && t.inputValue === "" && (D.value = null, a("clear"));
    }, G = () => {
      M.value = !0, a("focus");
    }, le = (v) => {
      var _;
      v.preventDefault(), v.stopImmediatePropagation(), v.stopPropagation(), t.textInput && ((_ = h.value.textInputOptions) != null && _.openMenu) && !t.inlineWithInput ? t.isMenuOpen ? h.value.textInputOptions.enterSubmit && a("select-date") : a("open") : t.textInput || a("toggle");
    }, oe = () => {
      M.value = !1, t.isMenuOpen || a("blur"), t.autoApply && t.textInput && D.value && (a("set-input-date", D.value), a("select-date"), D.value = null);
    }, de = () => {
      a("clear");
    }, A = (v) => {
      t.textInput || v.preventDefault();
    };
    return n({
      focusInput: () => {
        L.value && L.value.focus({ preventScroll: !0 });
      },
      setParsedDate: (v) => {
        D.value = v;
      }
    }), (v, _) => {
      var z;
      return p(), P("div", {
        onClick: le,
        "aria-label": (z = d(h).ariaLabels) == null ? void 0 : z.input,
        role: "textbox",
        "aria-multiline": "false",
        "aria-disabled": v.disabled,
        "aria-readonly": v.readonly
      }, [
        v.$slots.trigger && !v.$slots["dp-input"] && !v.inline ? j(v.$slots, "trigger", { key: 0 }) : $("", !0),
        !v.$slots.trigger && (!v.inline || v.inlineWithInput) ? (p(), P("div", lr, [
          v.$slots["dp-input"] && !v.$slots.trigger && !v.inline ? j(v.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            onInput: O,
            onEnter: E,
            onTab: S,
            onClear: de
          }) : $("", !0),
          v.$slots["dp-input"] ? $("", !0) : (p(), P("input", {
            key: 1,
            ref_key: "inputRef",
            ref: L,
            id: v.uid ? `dp-input-${v.uid}` : void 0,
            name: v.name,
            class: ge(d(m)),
            inputmode: v.textInput ? "text" : "none",
            placeholder: v.placeholder,
            disabled: v.disabled,
            readonly: v.readonly,
            required: v.required,
            value: e.inputValue,
            autocomplete: v.autocomplete,
            onInput: O,
            onKeydown: [
              ue(le, ["enter"]),
              ue(S, ["tab"]),
              A
            ],
            onBlur: oe,
            onFocus: G,
            onKeypress: A
          }, null, 42, or)),
          v.$slots["input-icon"] && !v.hideInputIcon ? (p(), P("span", sr, [
            j(v.$slots, "input-icon")
          ])) : $("", !0),
          !v.$slots["input-icon"] && !v.hideInputIcon && !v.$slots["dp-input"] ? (p(), me(d(Ft), {
            key: 3,
            class: "dp__input_icon dp__input_icons"
          })) : $("", !0),
          v.$slots["clear-icon"] && e.inputValue && v.clearable && !v.disabled && !v.readonly ? (p(), P("span", ir, [
            j(v.$slots, "clear-icon", { clear: de })
          ])) : $("", !0),
          v.clearable && !v.$slots["clear-icon"] && e.inputValue && !v.disabled && !v.readonly ? (p(), me(d(ca), {
            key: 5,
            class: "dp__clear_icon dp__input_icons",
            "data-test": "clear-icon",
            onClick: qe(de, ["stop", "prevent"])
          }, null, 8, ["onClick"])) : $("", !0)
        ])) : $("", !0)
      ], 8, rr);
    };
  }
}), dr = { class: "dp__selection_preview" }, cr = { class: "dp__action_buttons" }, fr = ["onKeydown"], vr = /* @__PURE__ */ We({
  __name: "ActionRow",
  props: {
    calendarWidth: { type: Number, default: 0 },
    menuMount: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...nt
  },
  emits: ["close-picker", "select-date", "invalid-select"],
  setup(e, { emit: n }) {
    const a = e, { formatDate: t, isValidTime: s, defaults: f } = Le(a), { buildMatrix: h } = tt(), C = U(null), I = U(null);
    He(() => {
      a.arrowNavigation && h([Te(C), Te(I)], "actionRow");
    });
    const D = V(() => a.range && !a.partialRange && a.internalModelValue ? a.internalModelValue.length === 2 : !0), L = V(() => !m.value || !T.value || !D.value), M = V(() => ({
      dp__action: !0,
      dp__select: !0,
      dp__action_disabled: L.value
    })), m = V(() => !a.enableTimePicker || a.ignoreTimeValidation ? !0 : s(a.internalModelValue)), T = V(() => a.monthPicker ? O(a.internalModelValue) : !0), H = () => {
      const S = f.value.previewFormat;
      return a.timePicker || a.monthPicker, S(Se(a.internalModelValue));
    }, B = () => {
      const S = a.internalModelValue;
      return f.value.multiCalendars > 0 ? `${t(S[0])} - ${t(S[1])}` : [t(S[0]), t(S[1])];
    }, J = V(() => !a.internalModelValue || !a.menuMount ? "" : typeof f.value.previewFormat == "string" ? Array.isArray(a.internalModelValue) ? a.internalModelValue.length === 2 && a.internalModelValue[1] ? B() : a.multiDates ? a.internalModelValue.map((S) => `${t(S)}`) : a.modelAuto ? `${t(a.internalModelValue[0])}` : `${t(a.internalModelValue[0])} -` : t(a.internalModelValue) : H()), O = (S) => {
      if (!a.monthPicker)
        return !0;
      let G = !0;
      return a.minDate && a.maxDate ? Ve(b(S), b(a.minDate)) && Oe(b(S), b(a.maxDate)) : (a.minDate && (G = Ve(b(S), b(a.minDate))), a.maxDate && (G = Oe(b(S), b(a.maxDate))), G);
    }, E = () => {
      m.value && T.value && D.value ? n("select-date") : n("invalid-select");
    };
    return (S, G) => (p(), P("div", {
      class: "dp__action_row",
      style: Qe(e.calendarWidth ? { width: `${e.calendarWidth}px` } : {})
    }, [
      S.$slots["action-row"] ? j(S.$slots, "action-row", Ne(Pe({ key: 0 }, {
        internalModelValue: e.internalModelValue,
        disabled: d(L),
        selectDate: () => S.$emit("select-date"),
        closePicker: () => S.$emit("close-picker")
      }))) : (p(), P(fe, { key: 1 }, [
        ae("div", dr, [
          S.$slots["action-preview"] ? j(S.$slots, "action-preview", {
            key: 0,
            value: e.internalModelValue
          }) : $("", !0),
          S.$slots["action-preview"] ? $("", !0) : (p(), P(fe, { key: 1 }, [
            Array.isArray(d(J)) ? $("", !0) : (p(), P(fe, { key: 0 }, [
              je(_e(d(J)), 1)
            ], 64)),
            Array.isArray(d(J)) ? (p(!0), P(fe, { key: 1 }, Me(d(J), (le, oe) => (p(), P("div", { key: oe }, _e(le), 1))), 128)) : $("", !0)
          ], 64))
        ]),
        ae("div", cr, [
          S.$slots["action-select"] ? j(S.$slots, "action-select", {
            key: 0,
            value: e.internalModelValue
          }) : $("", !0),
          S.$slots["action-select"] ? $("", !0) : (p(), P(fe, { key: 1 }, [
            S.inline ? $("", !0) : (p(), P("span", {
              key: 0,
              class: "dp__action dp__cancel",
              ref_key: "cancelButtonRef",
              ref: C,
              tabindex: "0",
              onClick: G[0] || (G[0] = (le) => S.$emit("close-picker")),
              onKeydown: [
                G[1] || (G[1] = ue((le) => S.$emit("close-picker"), ["enter"])),
                G[2] || (G[2] = ue((le) => S.$emit("close-picker"), ["space"]))
              ]
            }, _e(S.cancelText), 545)),
            ae("span", {
              class: ge(d(M)),
              tabindex: "0",
              onKeydown: [
                ue(E, ["enter"]),
                ue(E, ["space"])
              ],
              onClick: E,
              "data-test": "select-button",
              ref_key: "selectButtonRef",
              ref: I
            }, _e(S.selectText), 43, fr)
          ], 64))
        ])
      ], 64))
    ], 4));
  }
}), mr = ["aria-label"], yr = {
  class: "dp__calendar_header",
  role: "row"
}, gr = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, hr = /* @__PURE__ */ ae("div", { class: "dp__calendar_header_separator" }, null, -1), pr = ["aria-label"], kr = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, wr = { class: "dp__cell_inner" }, br = ["aria-selected", "aria-disabled", "aria-label", "data-test", "onClick", "onKeydown", "onMouseenter", "onMouseleave"], Dr = /* @__PURE__ */ We({
  __name: "Calendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    getWeekNum: {
      type: Function,
      default: () => ""
    },
    specificMode: { type: Boolean, default: !1 },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...nt
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { buildMultiLevelMatrix: s } = tt(), { setDateMonthOrYear: f, defaults: h } = Le(t), C = U(null), I = U({
      bottom: "",
      left: "",
      transform: ""
    }), D = U([]), L = U(null), M = U(!0), m = U(""), T = U({ startX: 0, endX: 0, startY: 0, endY: 0 }), H = U([]), B = U({ left: "50%" }), J = V(() => t.dayNames ? Array.isArray(t.dayNames) ? t.dayNames : t.dayNames(t.locale, +t.weekStart) : Ua(t.locale, +t.weekStart));
    He(() => {
      a("mount", { cmp: "calendar", refs: D }), t.noSwipe || L.value && (L.value.addEventListener("touchstart", v, { passive: !1 }), L.value.addEventListener("touchend", _, { passive: !1 }), L.value.addEventListener("touchmove", z, { passive: !1 })), t.monthChangeOnScroll && L.value && L.value.addEventListener("wheel", N, { passive: !1 });
    });
    const O = (l) => l ? t.vertical ? "vNext" : "next" : t.vertical ? "vPrevious" : "previous", E = (l, o) => {
      if (t.transitions) {
        const r = xe(f(b(), t.month, t.year));
        m.value = Ve(xe(f(b(), l, o)), r) ? h.value.transitions[O(!0)] : h.value.transitions[O(!1)], M.value = !1, ct(() => {
          M.value = !0;
        });
      }
    }, S = V(
      () => ({
        dp__calendar_wrap: !0,
        [t.calendarClassName]: !!t.calendarClassName
      })
    ), G = V(() => (l) => {
      const o = Ka(l);
      return {
        dp__marker_dot: o.type === "dot",
        dp__marker_line: o.type === "line"
      };
    }), le = V(() => (l) => be(l, C.value)), oe = V(() => ({
      dp__calendar: !0,
      dp__calendar_next: h.value.multiCalendars > 0 && t.instance !== 0
    })), de = V(() => (l) => t.hideOffsetDates ? l.current : !0), A = V(() => t.specificMode ? { height: `${t.modeHeight}px` } : void 0), Y = async (l, o, r) => {
      var c, w;
      if (a("set-hover-date", l), (w = (c = l.marker) == null ? void 0 : c.tooltip) != null && w.length) {
        const W = Te(D.value[o][r]);
        if (W) {
          const { width: R, height: ce } = W.getBoundingClientRect();
          C.value = l.value;
          let y = { left: `${R / 2}px` }, i = -50;
          if (await ct(), H.value[0]) {
            const { left: Z, width: te } = H.value[0].getBoundingClientRect();
            Z < 0 && (y = { left: "0" }, i = 0, B.value.left = `${R / 2}px`), window.innerWidth < Z + te && (y = { right: "0" }, i = 0, B.value.left = `${te - R / 2}px`);
          }
          I.value = {
            bottom: `${ce}px`,
            ...y,
            transform: `translateX(${i}%)`
          }, a("tooltip-open", l.marker);
        }
      }
    }, F = (l) => {
      C.value && (C.value = null, I.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), a("tooltip-close", l.marker));
    }, v = (l) => {
      T.value.startX = l.changedTouches[0].screenX, T.value.startY = l.changedTouches[0].screenY;
    }, _ = (l) => {
      T.value.endX = l.changedTouches[0].screenX, T.value.endY = l.changedTouches[0].screenY, q();
    }, z = (l) => {
      t.vertical && !t.inline && l.preventDefault();
    }, q = () => {
      const l = t.vertical ? "Y" : "X";
      Math.abs(T.value[`start${l}`] - T.value[`end${l}`]) > 10 && a("handle-swipe", T.value[`start${l}`] > T.value[`end${l}`] ? "right" : "left");
    }, Q = (l, o, r) => {
      l && (Array.isArray(D.value[o]) ? D.value[o][r] = l : D.value[o] = [l]), t.arrowNavigation && s(D.value, "calendar");
    }, N = (l) => {
      t.monthChangeOnScroll && (l.preventDefault(), a("handle-scroll", l));
    };
    return n({ triggerTransition: E }), (l, o) => {
      var r;
      return p(), P("div", {
        class: ge(d(oe))
      }, [
        ae("div", {
          style: Qe(d(A))
        }, [
          e.specificMode ? $("", !0) : (p(), P("div", {
            key: 0,
            ref_key: "calendarWrapRef",
            ref: L,
            class: ge(d(S)),
            role: "grid",
            "aria-label": (r = d(h).ariaLabels) == null ? void 0 : r.calendarWrap
          }, [
            ae("div", yr, [
              l.weekNumbers ? (p(), P("div", gr, _e(l.weekNumName), 1)) : $("", !0),
              (p(!0), P(fe, null, Me(d(J), (c, w) => (p(), P("div", {
                class: "dp__calendar_header_item",
                role: "gridcell",
                key: w,
                "data-test": "calendar-header"
              }, [
                l.$slots["calendar-header"] ? j(l.$slots, "calendar-header", {
                  key: 0,
                  day: c,
                  index: w
                }) : $("", !0),
                l.$slots["calendar-header"] ? $("", !0) : (p(), P(fe, { key: 1 }, [
                  je(_e(c), 1)
                ], 64))
              ]))), 128))
            ]),
            hr,
            et(ht, {
              name: m.value,
              css: !!l.transitions
            }, {
              default: se(() => {
                var c;
                return [
                  M.value ? (p(), P("div", {
                    key: 0,
                    class: "dp__calendar",
                    role: "grid",
                    "aria-label": (c = d(h).ariaLabels) == null ? void 0 : c.calendarDays
                  }, [
                    (p(!0), P(fe, null, Me(e.mappedDates, (w, W) => (p(), P("div", {
                      class: "dp__calendar_row",
                      role: "row",
                      key: W
                    }, [
                      l.weekNumbers ? (p(), P("div", kr, [
                        ae("div", wr, _e(e.getWeekNum(w.days)), 1)
                      ])) : $("", !0),
                      (p(!0), P(fe, null, Me(w.days, (R, ce) => {
                        var y, i, Z;
                        return p(), P("div", {
                          role: "gridcell",
                          class: "dp__calendar_item",
                          ref_for: !0,
                          ref: (te) => Q(te, W, ce),
                          key: ce + W,
                          "aria-selected": R.classData.dp__active_date || R.classData.dp__range_start || R.classData.dp__range_start,
                          "aria-disabled": R.classData.dp__cell_disabled,
                          "aria-label": (i = (y = d(h).ariaLabels) == null ? void 0 : y.day) == null ? void 0 : i.call(y, R),
                          tabindex: "0",
                          "data-test": R.value,
                          onClick: qe((te) => l.$emit("select-date", R), ["stop", "prevent"]),
                          onKeydown: [
                            ue((te) => l.$emit("select-date", R), ["enter"]),
                            ue((te) => l.$emit("handle-space", R), ["space"])
                          ],
                          onMouseenter: (te) => Y(R, W, ce),
                          onMouseleave: (te) => F(R)
                        }, [
                          ae("div", {
                            class: ge(["dp__cell_inner", R.classData])
                          }, [
                            l.$slots.day && d(de)(R) ? j(l.$slots, "day", {
                              key: 0,
                              day: +R.text,
                              date: R.value
                            }) : $("", !0),
                            l.$slots.day ? $("", !0) : (p(), P(fe, { key: 1 }, [
                              je(_e(R.text), 1)
                            ], 64)),
                            R.marker && d(de)(R) ? (p(), P("div", {
                              key: 2,
                              class: ge(d(G)(R.marker)),
                              style: Qe(R.marker.color ? { backgroundColor: R.marker.color } : {})
                            }, null, 6)) : $("", !0),
                            d(le)(R.value) ? (p(), P("div", {
                              key: 3,
                              class: "dp__marker_tooltip",
                              ref_for: !0,
                              ref_key: "activeTooltip",
                              ref: H,
                              style: Qe(I.value)
                            }, [
                              (Z = R.marker) != null && Z.tooltip ? (p(), P("div", {
                                key: 0,
                                class: "dp__tooltip_content",
                                onClick: o[0] || (o[0] = qe(() => {
                                }, ["stop"]))
                              }, [
                                (p(!0), P(fe, null, Me(R.marker.tooltip, (te, we) => (p(), P("div", {
                                  key: we,
                                  class: "dp__tooltip_text"
                                }, [
                                  l.$slots["marker-tooltip"] ? j(l.$slots, "marker-tooltip", {
                                    key: 0,
                                    tooltip: te,
                                    day: R.value
                                  }) : $("", !0),
                                  l.$slots["marker-tooltip"] ? $("", !0) : (p(), P(fe, { key: 1 }, [
                                    ae("div", {
                                      class: "dp__tooltip_mark",
                                      style: Qe(te.color ? { backgroundColor: te.color } : {})
                                    }, null, 4),
                                    ae("div", null, _e(te.text), 1)
                                  ], 64))
                                ]))), 128)),
                                ae("div", {
                                  class: "dp__arrow_bottom_tp",
                                  style: Qe(B.value)
                                }, null, 4)
                              ])) : $("", !0)
                            ], 4)) : $("", !0)
                          ], 2)
                        ], 40, br);
                      }), 128))
                    ]))), 128))
                  ], 8, pr)) : $("", !0)
                ];
              }),
              _: 3
            }, 8, ["name", "css"])
          ], 10, mr))
        ], 4)
      ], 2);
    };
  }
}), $r = ["aria-label", "aria-disabled"], tn = /* @__PURE__ */ We({
  __name: "ActionIcon",
  props: {
    ariaLabel: { type: String, default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: n }) {
    const a = U(null);
    return He(() => n("set-ref", a)), (t, s) => (p(), P("div", {
      class: "dp__month_year_col_nav",
      onClick: s[0] || (s[0] = (f) => t.$emit("activate")),
      onKeydown: [
        s[1] || (s[1] = ue((f) => t.$emit("activate"), ["enter"])),
        s[2] || (s[2] = ue((f) => t.$emit("activate"), ["space"]))
      ],
      tabindex: "0",
      role: "button",
      "aria-label": e.ariaLabel,
      "aria-disabled": e.disabled,
      ref_key: "elRef",
      ref: a
    }, [
      ae("div", {
        class: ge(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }])
      }, [
        j(t.$slots, "default")
      ], 2)
    ], 40, $r));
  }
}), Mr = ["onKeydown"], Tr = { class: "dp__selection_grid_header" }, Ar = ["aria-selected", "aria-disabled", "data-test", "onClick", "onKeydown", "onMouseover"], Sr = ["aria-label", "onKeydown"], $t = /* @__PURE__ */ We({
  __name: "SelectionGrid",
  props: {
    items: { type: Array, default: () => [] },
    modelValue: { type: [String, Number], default: null },
    multiModelValue: { type: Array, default: () => [] },
    disabledValues: { type: Array, default: () => [] },
    minValue: { type: [Number, String], default: null },
    maxValue: { type: [Number, String], default: null },
    year: { type: Number, default: 0 },
    skipActive: { type: Boolean, default: !1 },
    headerRefs: { type: Array, default: () => [] },
    skipButtonRef: { type: Boolean, default: !1 },
    monthPicker: { type: Boolean, default: !1 },
    yearPicker: { type: Boolean, default: !1 },
    escClose: { type: Boolean, default: !0 },
    type: { type: String, default: null },
    arrowNavigation: { type: Boolean, default: !1 },
    autoApply: { type: Boolean, default: !1 },
    textInput: { type: Boolean, default: !1 },
    ariaLabels: { type: Object, default: () => ({}) },
    hideNavigation: { type: Array, default: () => [] }
  },
  emits: ["update:model-value", "selected", "toggle", "reset-flow"],
  setup(e, { expose: n, emit: a }) {
    const t = e, { setSelectionGrid: s, buildMultiLevelMatrix: f, setMonthPicker: h } = tt(), { hideNavigationButtons: C } = Le(t), I = U(!1), D = U(null), L = U(null), M = U([]), m = U(), T = U(null), H = U(0), B = U(null);
    qn(() => {
      D.value = null;
    }), He(() => {
      ct().then(() => Y()), O(), J(!0);
    }), on(() => J(!1));
    const J = (N) => {
      var l;
      t.arrowNavigation && ((l = t.headerRefs) != null && l.length ? h(N) : s(N));
    }, O = () => {
      const N = Te(L);
      N && (t.textInput || N.focus({ preventScroll: !0 }), I.value = N.clientHeight < N.scrollHeight);
    }, E = V(
      () => ({
        dp__overlay: !0
      })
    ), S = V(() => ({
      dp__overlay_col: !0
    })), G = (N) => t.skipActive ? !1 : N.value === t.modelValue, le = V(() => t.items.map((N) => N.filter((l) => l).map((l) => {
      var c, w, W;
      const o = t.disabledValues.some((R) => R === l.value) || A(l.value), r = (c = t.multiModelValue) != null && c.length ? (w = t.multiModelValue) == null ? void 0 : w.some(
        (R) => be(
          R,
          ut(
            t.monthPicker ? Rt(/* @__PURE__ */ new Date(), l.value) : /* @__PURE__ */ new Date(),
            t.monthPicker ? t.year : l.value
          )
        )
      ) : G(l);
      return {
        ...l,
        className: {
          dp__overlay_cell_active: r,
          dp__overlay_cell: !r,
          dp__overlay_cell_disabled: o,
          dp__overlay_cell_active_disabled: o && r,
          dp__overlay_cell_pad: !0,
          dp__cell_in_between: (W = t.multiModelValue) != null && W.length ? v(l.value) : !1
        }
      };
    }))), oe = V(
      () => ({
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: I.value,
        dp__button_bottom: t.autoApply
      })
    ), de = V(() => {
      var N, l;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((N = t.items) == null ? void 0 : N.length) <= 6,
        dp__container_block: ((l = t.items) == null ? void 0 : l.length) > 6
      };
    }), A = (N) => {
      const l = t.maxValue || t.maxValue === 0, o = t.minValue || t.minValue === 0;
      return !l && !o ? !1 : l && o ? +N > +t.maxValue || +N < +t.minValue : l ? +N > +t.maxValue : o ? +N < +t.minValue : !1;
    }, Y = () => {
      const N = Te(D), l = Te(L), o = Te(T), r = Te(B), c = o ? o.getBoundingClientRect().height : 0;
      l && (H.value = l.getBoundingClientRect().height - c), N && r && (r.scrollTop = N.offsetTop - r.offsetTop - (H.value / 2 - N.getBoundingClientRect().height) - c);
    }, F = (N) => {
      !t.disabledValues.some((l) => l === N) && !A(N) && (a("update:model-value", N), a("selected"));
    }, v = (N) => {
      const l = t.monthPicker ? t.year : N;
      return zn(
        t.multiModelValue,
        ut(
          t.monthPicker ? Rt(/* @__PURE__ */ new Date(), m.value || 0) : /* @__PURE__ */ new Date(),
          t.monthPicker ? l : m.value || l
        ),
        ut(t.monthPicker ? Rt(/* @__PURE__ */ new Date(), N) : /* @__PURE__ */ new Date(), l)
      );
    }, _ = () => {
      a("toggle"), a("reset-flow");
    }, z = () => {
      t.escClose && _();
    }, q = (N, l, o, r) => {
      N && (l.value === +t.modelValue && !t.disabledValues.includes(l.value) && (D.value = N), t.arrowNavigation && (Array.isArray(M.value[o]) ? M.value[o][r] = N : M.value[o] = [N], Q()));
    }, Q = () => {
      var l, o;
      const N = (l = t.headerRefs) != null && l.length ? [t.headerRefs].concat(M.value) : M.value.concat([t.skipButtonRef ? [] : [T.value]]);
      f(Se(N), (o = t.headerRefs) != null && o.length ? "monthPicker" : "selectionGrid");
    };
    return n({ focusGrid: O }), (N, l) => {
      var o;
      return p(), P("div", {
        ref_key: "gridWrapRef",
        ref: L,
        class: ge(d(E)),
        role: "dialog",
        tabindex: "0",
        onKeydown: ue(z, ["esc"])
      }, [
        ae("div", {
          class: ge(d(de)),
          ref_key: "containerRef",
          ref: B,
          role: "grid",
          style: Qe({ height: `${H.value}px` })
        }, [
          ae("div", Tr, [
            j(N.$slots, "header")
          ]),
          N.$slots.overlay ? j(N.$slots, "overlay", { key: 0 }) : (p(!0), P(fe, { key: 1 }, Me(d(le), (r, c) => (p(), P("div", {
            class: "dp__overlay_row",
            key: c,
            role: "row"
          }, [
            (p(!0), P(fe, null, Me(r, (w, W) => (p(), P("div", {
              role: "gridcell",
              class: ge(d(S)),
              key: w.value,
              "aria-selected": w.value === e.modelValue && !e.disabledValues.includes(w.value),
              "aria-disabled": w.className.dp__overlay_cell_disabled,
              ref_for: !0,
              ref: (R) => q(R, w, c, W),
              tabindex: "0",
              "data-test": w.text,
              onClick: (R) => F(w.value),
              onKeydown: [
                ue((R) => F(w.value), ["enter"]),
                ue((R) => F(w.value), ["space"])
              ],
              onMouseover: (R) => m.value = w.value
            }, [
              ae("div", {
                class: ge(w.className)
              }, [
                N.$slots.item ? j(N.$slots, "item", {
                  key: 0,
                  item: w
                }) : $("", !0),
                N.$slots.item ? $("", !0) : (p(), P(fe, { key: 1 }, [
                  je(_e(w.text), 1)
                ], 64))
              ], 2)
            ], 42, Ar))), 128))
          ]))), 128))
        ], 6),
        N.$slots["button-icon"] ? Ct((p(), P("div", {
          key: 0,
          role: "button",
          "aria-label": (o = e.ariaLabels) == null ? void 0 : o.toggleOverlay,
          class: ge(d(oe)),
          tabindex: "0",
          ref_key: "toggleButton",
          ref: T,
          onClick: _,
          onKeydown: ue(_, ["enter"])
        }, [
          j(N.$slots, "button-icon")
        ], 42, Sr)), [
          [_t, !d(C)(e.type)]
        ]) : $("", !0)
      ], 42, Mr);
    };
  }
}), Pr = ["aria-label"], In = /* @__PURE__ */ We({
  __name: "RegularPicker",
  props: {
    ariaLabel: { type: String, default: "" },
    showSelectionGrid: { type: Boolean, default: !1 },
    modelValue: { type: Number, default: null },
    items: { type: Array, default: () => [] },
    disabledValues: { type: Array, default: () => [] },
    minValue: { type: Number, default: null },
    maxValue: { type: Number, default: null },
    slotName: { type: String, default: "" },
    overlaySlot: { type: String, default: "" },
    headerRefs: { type: Array, default: () => [] },
    escClose: { type: Boolean, default: !0 },
    type: { type: String, default: null },
    transitions: { type: [Object, Boolean], default: !1 },
    arrowNavigation: { type: Boolean, default: !1 },
    autoApply: { type: Boolean, default: !1 },
    textInput: { type: Boolean, default: !1 },
    ariaLabels: { type: Object, default: () => ({}) },
    hideNavigation: { type: Array, default: () => [] }
  },
  emits: ["update:model-value", "toggle", "set-ref"],
  setup(e, { emit: n }) {
    const a = e, { transitionName: t, showTransition: s } = Ut(a.transitions), f = U(null);
    return He(() => n("set-ref", f)), (h, C) => (p(), P(fe, null, [
      ae("div", {
        class: "dp__month_year_select",
        onClick: C[0] || (C[0] = (I) => h.$emit("toggle")),
        onKeydown: [
          C[1] || (C[1] = ue((I) => h.$emit("toggle"), ["enter"])),
          C[2] || (C[2] = ue((I) => h.$emit("toggle"), ["space"]))
        ],
        role: "button",
        "aria-label": e.ariaLabel,
        tabindex: "0",
        ref_key: "elRef",
        ref: f
      }, [
        j(h.$slots, "default")
      ], 40, Pr),
      et(ht, {
        name: d(t)(e.showSelectionGrid),
        css: d(s)
      }, {
        default: se(() => [
          e.showSelectionGrid ? (p(), me($t, Pe({ key: 0 }, {
            modelValue: e.modelValue,
            items: e.items,
            disabledValues: e.disabledValues,
            minValue: e.minValue,
            maxValue: e.maxValue,
            escClose: e.escClose,
            type: e.type,
            arrowNavigation: e.arrowNavigation,
            textInput: e.textInput,
            autoApply: e.autoApply,
            ariaLabels: e.ariaLabels,
            hideNavigation: e.hideNavigation
          }, {
            "header-refs": [],
            "onUpdate:modelValue": C[3] || (C[3] = (I) => h.$emit("update:model-value", I)),
            onToggle: C[4] || (C[4] = (I) => h.$emit("toggle"))
          }), Ee({
            "button-icon": se(() => [
              h.$slots["calendar-icon"] ? j(h.$slots, "calendar-icon", { key: 0 }) : $("", !0),
              h.$slots["calendar-icon"] ? $("", !0) : (p(), me(d(Ft), { key: 1 }))
            ]),
            _: 2
          }, [
            h.$slots[e.slotName] ? {
              name: "item",
              fn: se(({ item: I }) => [
                j(h.$slots, e.slotName, { item: I })
              ]),
              key: "0"
            } : void 0,
            h.$slots[e.overlaySlot] ? {
              name: "overlay",
              fn: se(() => [
                j(h.$slots, e.overlaySlot)
              ]),
              key: "1"
            } : void 0,
            h.$slots[`${e.overlaySlot}-header`] ? {
              name: "header",
              fn: se(() => [
                j(h.$slots, `${e.overlaySlot}-header`)
              ]),
              key: "2"
            } : void 0
          ]), 1040)) : $("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 64));
  }
}), Cr = { class: "dp__month_year_row" }, _r = { class: "dp__month_year_wrap" }, Nr = { class: "dp__month_picker_header" }, Rr = ["aria-label"], Or = ["aria-label"], Ir = ["aria-label"], Br = /* @__PURE__ */ We({
  __name: "MonthYearPicker",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    internalModelValue: { type: [Date, Array], default: null },
    ...nt
  },
  emits: ["update-month-year", "month-year-select", "mount", "reset-flow", "overlay-closed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, { defaults: s } = Le(t), { transitionName: f, showTransition: h } = Ut(s.value.transitions), { buildMatrix: C } = tt(), { handleMonthYearChange: I, isDisabled: D, updateMonthYear: L } = er(t, a), M = U(!1), m = U(!1), T = U([null, null, null, null]), H = U(null), B = U(null), J = U(null);
    He(() => {
      a("mount");
    });
    const O = (y) => ({
      get: () => t[y],
      set: (i) => {
        const Z = y === "month" ? "year" : "month";
        a("update-month-year", { [y]: i, [Z]: t[Z] }), a("month-year-select", y === "year"), y === "month" ? c(!0) : w(!0);
      }
    }), E = V(O("month")), S = V(O("year")), G = (y) => {
      const i = ke(b(y));
      return t.year === i;
    }, le = V(() => t.monthPicker ? Array.isArray(t.disabledDates) ? t.disabledDates.map((y) => b(y)).filter((y) => G(y)).map((y) => pe(y)) : [] : []), oe = V(() => (y) => {
      const i = y === "month";
      return {
        showSelectionGrid: (i ? M : m).value,
        items: (i ? N : l).value,
        disabledValues: s.value.filters[i ? "months" : "years"].concat(le.value),
        minValue: (i ? F : A).value,
        maxValue: (i ? v : Y).value,
        headerRefs: i && t.monthPicker ? [H.value, B.value, J.value] : [],
        escClose: t.escClose,
        transitions: s.value.transitions,
        ariaLabels: s.value.ariaLabels,
        textInput: t.textInput,
        autoApply: t.autoApply,
        arrowNavigation: t.arrowNavigation,
        hideNavigation: t.hideNavigation
      };
    }), de = V(() => (y) => ({
      month: t.month,
      year: t.year,
      items: y === "month" ? t.months : t.years,
      instance: t.instance,
      updateMonthYear: L,
      toggle: y === "month" ? c : w
    })), A = V(() => t.minDate ? ke(b(t.minDate)) : null), Y = V(() => t.maxDate ? ke(b(t.maxDate)) : null), F = V(() => {
      if (t.minDate && A.value) {
        if (A.value > t.year)
          return 12;
        if (A.value === t.year)
          return pe(b(t.minDate));
      }
      return null;
    }), v = V(() => t.maxDate && Y.value ? Y.value < t.year ? -1 : Y.value === t.year ? pe(b(t.maxDate)) : null : null), _ = V(() => t.range && t.internalModelValue && (t.monthPicker || t.yearPicker) ? t.internalModelValue : []), z = (y) => y.reverse(), q = (y, i = !1) => {
      const Z = [], te = (we) => i ? z(we) : we;
      for (let we = 0; we < y.length; we += 3) {
        const ze = [y[we], y[we + 1], y[we + 2]];
        Z.push(te(ze));
      }
      return i ? Z.reverse() : Z;
    }, Q = V(() => {
      const y = t.months.find((i) => i.value === t.month);
      return y || { text: "", value: 0 };
    }), N = V(() => q(t.months)), l = V(() => q(t.years, t.reverseYears)), o = V(() => s.value.multiCalendars ? t.multiCalendarsSolo ? !0 : t.instance === 0 : !0), r = V(() => s.value.multiCalendars ? t.multiCalendarsSolo ? !0 : t.instance === s.value.multiCalendars - 1 : !0), c = (y = !1) => {
      W(y), M.value = !M.value, M.value || a("overlay-closed");
    }, w = (y = !1) => {
      W(y), m.value = !m.value, m.value || a("overlay-closed");
    }, W = (y) => {
      y || a("reset-flow");
    }, R = (y = !1) => {
      D.value(y) || a("update-month-year", {
        year: y ? t.year + 1 : t.year - 1,
        month: t.month,
        fromNav: !0
      });
    }, ce = (y, i) => {
      t.arrowNavigation && (T.value[i] = Te(y), C(T.value, "monthYear"));
    };
    return n({
      toggleMonthPicker: c,
      toggleYearPicker: w,
      handleMonthYearChange: I
    }), (y, i) => {
      var Z, te, we, ze, Je;
      return p(), P("div", Cr, [
        y.$slots["month-year"] ? j(y.$slots, "month-year", Ne(Pe({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: d(L), handleMonthYearChange: d(I), instance: e.instance }))) : (p(), P(fe, { key: 1 }, [
          !y.monthPicker && !y.yearPicker ? (p(), P(fe, { key: 0 }, [
            d(o) && !y.vertical ? (p(), me(tn, {
              key: 0,
              "aria-label": (Z = d(s).ariaLabels) == null ? void 0 : Z.prevMonth,
              disabled: d(D)(!1),
              onActivate: i[0] || (i[0] = (re) => d(I)(!1)),
              onSetRef: i[1] || (i[1] = (re) => ce(re, 0))
            }, {
              default: se(() => [
                y.$slots["arrow-left"] ? j(y.$slots, "arrow-left", { key: 0 }) : $("", !0),
                y.$slots["arrow-left"] ? $("", !0) : (p(), me(d(kn), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : $("", !0),
            ae("div", _r, [
              et(In, Pe({
                type: "month",
                "slot-name": "month-overlay-val",
                "overlay-slot": "overlay-month",
                "aria-label": (te = d(s).ariaLabels) == null ? void 0 : te.openMonthsOverlay,
                modelValue: d(E),
                "onUpdate:modelValue": i[2] || (i[2] = (re) => ot(E) ? E.value = re : null)
              }, d(oe)("month"), {
                onToggle: c,
                onSetRef: i[3] || (i[3] = (re) => ce(re, 1))
              }), Ee({
                default: se(() => [
                  y.$slots.month ? j(y.$slots, "month", Ne(Pe({ key: 0 }, d(Q)))) : $("", !0),
                  y.$slots.month ? $("", !0) : (p(), P(fe, { key: 1 }, [
                    je(_e(d(Q).text), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                y.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: se(() => [
                    j(y.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                y.$slots["month-overlay-value"] ? {
                  name: "month-overlay-val",
                  fn: se(({ item: re }) => [
                    j(y.$slots, "month-overlay-value", {
                      text: re.text,
                      value: re.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                y.$slots["month-overlay"] ? {
                  name: "overlay-month",
                  fn: se(() => [
                    j(y.$slots, "month-overlay", Ne(Ue(d(de)("month"))))
                  ]),
                  key: "2"
                } : void 0,
                y.$slots["month-overlay-header"] ? {
                  name: "overlay-month-header",
                  fn: se(() => [
                    j(y.$slots, "month-overlay-header", { toggle: c })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"]),
              et(In, Pe({
                type: "year",
                "slot-name": "year-overlay-val",
                "overlay-slot": "overlay-year",
                "aria-label": (we = d(s).ariaLabels) == null ? void 0 : we.openYearsOverlay,
                modelValue: d(S),
                "onUpdate:modelValue": i[4] || (i[4] = (re) => ot(S) ? S.value = re : null)
              }, d(oe)("year"), {
                onToggle: w,
                onSetRef: i[5] || (i[5] = (re) => ce(re, 2))
              }), Ee({
                default: se(() => [
                  y.$slots.year ? j(y.$slots, "year", {
                    key: 0,
                    year: e.year
                  }) : $("", !0),
                  y.$slots.year ? $("", !0) : (p(), P(fe, { key: 1 }, [
                    je(_e(e.year), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                y.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: se(() => [
                    j(y.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                y.$slots["year-overlay-value"] ? {
                  name: "year-overlay-val",
                  fn: se(({ item: re }) => [
                    j(y.$slots, "year-overlay-value", {
                      text: re.text,
                      value: re.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                y.$slots["year-overlay"] ? {
                  name: "overlay-year",
                  fn: se(() => [
                    j(y.$slots, "year-overlay", Ne(Ue(d(de)("year"))))
                  ]),
                  key: "2"
                } : void 0,
                y.$slots["year-overlay-header"] ? {
                  name: "overlay-year-header",
                  fn: se(() => [
                    j(y.$slots, "year-overlay-header", { toggle: w })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"])
            ]),
            d(o) && y.vertical ? (p(), me(tn, {
              key: 1,
              "aria-label": (ze = d(s).ariaLabels) == null ? void 0 : ze.prevMonth,
              disabled: d(D)(!1),
              onActivate: i[6] || (i[6] = (re) => d(I)(!1))
            }, {
              default: se(() => [
                y.$slots["arrow-up"] ? j(y.$slots, "arrow-up", { key: 0 }) : $("", !0),
                y.$slots["arrow-up"] ? $("", !0) : (p(), me(d(Hn), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : $("", !0),
            d(r) ? (p(), me(tn, {
              key: 2,
              ref: "rightIcon",
              disabled: d(D)(!0),
              "aria-label": (Je = d(s).ariaLabels) == null ? void 0 : Je.nextMonth,
              onActivate: i[7] || (i[7] = (re) => d(I)(!0)),
              onSetRef: i[8] || (i[8] = (re) => ce(re, 3))
            }, {
              default: se(() => [
                y.$slots[y.vertical ? "arrow-down" : "arrow-right"] ? j(y.$slots, y.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : $("", !0),
                y.$slots[y.vertical ? "arrow-down" : "arrow-right"] ? $("", !0) : (p(), me(Bn(y.vertical ? d(Wn) : d(wn)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label"])) : $("", !0)
          ], 64)) : $("", !0),
          y.monthPicker ? (p(), me($t, Pe({ key: 1 }, d(oe)("month"), {
            "skip-active": y.range,
            year: e.year,
            "multi-model-value": d(_),
            "month-picker": "",
            modelValue: d(E),
            "onUpdate:modelValue": i[17] || (i[17] = (re) => ot(E) ? E.value = re : null),
            onToggle: c,
            onSelected: i[18] || (i[18] = (re) => y.$emit("overlay-closed"))
          }), Ee({
            header: se(() => {
              var re, Ge, Ke;
              return [
                ae("div", Nr, [
                  ae("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpPrevIconRef",
                    ref: H,
                    onClick: i[9] || (i[9] = (Ie) => R(!1)),
                    onKeydown: i[10] || (i[10] = ue((Ie) => R(!1), ["enter"]))
                  }, [
                    ae("div", {
                      class: ge(["dp__inner_nav", { dp__inner_nav_disabled: d(D)(!1) }]),
                      role: "button",
                      "aria-label": (re = d(s).ariaLabels) == null ? void 0 : re.prevMonth
                    }, [
                      y.$slots["arrow-left"] ? j(y.$slots, "arrow-left", { key: 0 }) : $("", !0),
                      y.$slots["arrow-left"] ? $("", !0) : (p(), me(d(kn), { key: 1 }))
                    ], 10, Rr)
                  ], 544),
                  ae("div", {
                    class: "dp__pointer",
                    role: "button",
                    ref_key: "mpYearButtonRef",
                    ref: B,
                    "aria-label": (Ge = d(s).ariaLabels) == null ? void 0 : Ge.openYearsOverlay,
                    tabindex: "0",
                    onClick: i[11] || (i[11] = () => w(!1)),
                    onKeydown: i[12] || (i[12] = ue(() => w(!1), ["enter"]))
                  }, [
                    y.$slots.year ? j(y.$slots, "year", {
                      key: 0,
                      year: e.year
                    }) : $("", !0),
                    y.$slots.year ? $("", !0) : (p(), P(fe, { key: 1 }, [
                      je(_e(e.year), 1)
                    ], 64))
                  ], 40, Or),
                  ae("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpNextIconRef",
                    ref: J,
                    onClick: i[13] || (i[13] = (Ie) => R(!0)),
                    onKeydown: i[14] || (i[14] = ue((Ie) => R(!0), ["enter"]))
                  }, [
                    ae("div", {
                      class: ge(["dp__inner_nav", { dp__inner_nav_disabled: d(D)(!0) }]),
                      role: "button",
                      "aria-label": (Ke = d(s).ariaLabels) == null ? void 0 : Ke.nextMonth
                    }, [
                      y.$slots["arrow-right"] ? j(y.$slots, "arrow-right", { key: 0 }) : $("", !0),
                      y.$slots["arrow-right"] ? $("", !0) : (p(), me(d(wn), { key: 1 }))
                    ], 10, Ir)
                  ], 544)
                ]),
                et(ht, {
                  name: d(f)(m.value),
                  css: d(h)
                }, {
                  default: se(() => [
                    m.value ? (p(), me($t, Pe({ key: 0 }, d(oe)("year"), {
                      modelValue: d(S),
                      "onUpdate:modelValue": i[15] || (i[15] = (Ie) => ot(S) ? S.value = Ie : null),
                      onToggle: w,
                      onSelected: i[16] || (i[16] = (Ie) => y.$emit("overlay-closed"))
                    }), Ee({
                      "button-icon": se(() => [
                        y.$slots["calendar-icon"] ? j(y.$slots, "calendar-icon", { key: 0 }) : $("", !0),
                        y.$slots["calendar-icon"] ? $("", !0) : (p(), me(d(Ft), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      y.$slots["year-overlay-value"] ? {
                        name: "item",
                        fn: se(({ item: Ie }) => [
                          j(y.$slots, "year-overlay-value", {
                            text: Ie.text,
                            value: Ie.value
                          })
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["modelValue"])) : $("", !0)
                  ]),
                  _: 3
                }, 8, ["name", "css"])
              ];
            }),
            _: 2
          }, [
            y.$slots["month-overlay-value"] ? {
              name: "item",
              fn: se(({ item: re }) => [
                j(y.$slots, "month-overlay-value", {
                  text: re.text,
                  value: re.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["skip-active", "year", "multi-model-value", "modelValue"])) : $("", !0),
          y.yearPicker ? (p(), me($t, Pe({ key: 2 }, d(oe)("year"), {
            modelValue: d(S),
            "onUpdate:modelValue": i[19] || (i[19] = (re) => ot(S) ? S.value = re : null),
            "multi-model-value": d(_),
            "skip-active": y.range,
            "skip-button-ref": "",
            "year-picker": "",
            onToggle: w,
            onSelected: i[20] || (i[20] = (re) => y.$emit("overlay-closed"))
          }), Ee({ _: 2 }, [
            y.$slots["year-overlay-value"] ? {
              name: "item",
              fn: se(({ item: re }) => [
                j(y.$slots, "year-overlay-value", {
                  text: re.text,
                  value: re.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["modelValue", "multi-model-value", "skip-active"])) : $("", !0)
        ], 64))
      ]);
    };
  }
}), Yr = {
  key: 0,
  class: "dp__time_input"
}, Vr = ["aria-label", "onKeydown", "onClick"], Er = ["aria-label", "data-test", "onKeydown", "onClick"], Lr = ["aria-label", "onKeydown", "onClick"], Fr = { key: 0 }, Ur = ["aria-label", "onKeydown"], Hr = /* @__PURE__ */ We({
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    ...nt
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { setTimePickerElements: s, setTimePickerBackRef: f } = tt(), { defaults: h } = Le(t), { transitionName: C, showTransition: I } = Ut(h.value.transitions), D = Mt({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), L = U("AM"), M = U(null), m = U([]);
    He(() => {
      a("mounted");
    });
    const T = V(() => (l) => !!(t.maxTime && t.maxTime[l] && t.maxTime[l] < t[l] + +t[`${l}Increment`])), H = V(() => (l) => !!(t.minTime && t.minTime[l] && t.minTime[l] > t[l] - +t[`${l}Increment`])), B = (l, o) => Fn(Re(b(), l), o), J = (l, o) => da(Re(b(), l), o), O = V(
      () => ({
        dp__time_col: !0,
        dp__time_col_reg: !t.enableSeconds && t.is24,
        dp__time_col_reg_with_button: !t.enableSeconds && !t.is24,
        dp__time_col_sec: t.enableSeconds && t.is24,
        dp__time_col_sec_with_button: t.enableSeconds && !t.is24
      })
    ), E = V(() => {
      const l = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return t.enableSeconds ? l.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : l;
    }), S = V(() => E.value.filter((l) => !l.separator)), G = V(() => (l) => {
      if (l === "hours") {
        const o = _(t.hours);
        return { text: o < 10 ? `0${o}` : `${o}`, value: o };
      }
      return { text: t[l] < 10 ? `0${t[l]}` : `${t[l]}`, value: t[l] };
    }), le = (l) => {
      const o = t.is24 ? 24 : 12, r = l === "hours" ? o : 60, c = +t[`${l}GridIncrement`], w = l === "hours" && !t.is24 ? c : 0, W = [];
      for (let R = w; R < r; R += c)
        W.push({ value: R, text: R < 10 ? `0${R}` : `${R}` });
      return l === "hours" && !t.is24 && W.push({ value: 0, text: "12" }), Fa(W);
    }, oe = (l, o) => {
      const r = t.minTime && t.minTime[o], c = t.maxTime && t.maxTime[o];
      return r && c ? l < r || l > c : r ? l < r : c ? l > c : !1;
    }, de = V(() => (l) => le(l).flat().filter((r) => r).map((r) => r.value).filter((r) => oe(r, l))), A = (l) => t[`no${l[0].toUpperCase() + l.slice(1)}Overlay`], Y = (l) => {
      A(l) || (D[l] = !D[l], D[l] || a("overlay-closed"));
    }, F = (l) => l === "hours" ? Ze : l === "minutes" ? Xe : gt, v = (l, o = !0) => {
      const r = o ? B : J;
      (o ? T.value(l) : H.value(l)) || a(
        `update:${l}`,
        F(l)(r({ [l]: +t[l] }, { [l]: +t[`${l}Increment`] }))
      );
    }, _ = (l) => t.is24 ? l : (l >= 12 ? L.value = "PM" : L.value = "AM", za(l)), z = () => {
      L.value === "PM" ? (L.value = "AM", a("update:hours", t.hours - 12)) : (L.value = "PM", a("update:hours", t.hours + 12));
    }, q = (l) => {
      D[l] = !0;
    }, Q = (l, o, r) => {
      if (l && t.arrowNavigation) {
        Array.isArray(m.value[o]) ? m.value[o][r] = l : m.value[o] = [l];
        const c = m.value.reduce(
          (w, W) => W.map((R, ce) => [...w[ce] || [], W[ce]]),
          []
        );
        f(t.closeTimePickerBtn), M.value && (c[1] = c[1].concat(M.value)), s(c, t.order);
      }
    }, N = (l, o) => l === "hours" && !t.is24 ? a(`update:${l}`, L.value === "PM" ? o + 12 : o) : a(`update:${l}`, o);
    return n({ openChildCmp: q }), (l, o) => {
      var r;
      return l.disabled ? $("", !0) : (p(), P("div", Yr, [
        (p(!0), P(fe, null, Me(d(E), (c, w) => {
          var W, R, ce;
          return p(), P("div", {
            key: w,
            class: ge(d(O))
          }, [
            c.separator ? (p(), P(fe, { key: 0 }, [
              je(" : ")
            ], 64)) : (p(), P(fe, { key: 1 }, [
              ae("div", {
                class: ge({
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: d(T)(c.type)
                }),
                role: "button",
                "data-test": "time-inc-btn",
                "aria-label": (W = d(h).ariaLabels) == null ? void 0 : W.incrementValue(c.type),
                tabindex: "0",
                onKeydown: [
                  ue((y) => v(c.type), ["enter"]),
                  ue((y) => v(c.type), ["space"])
                ],
                onClick: (y) => v(c.type),
                ref_for: !0,
                ref: (y) => Q(y, w, 0)
              }, [
                l.$slots["arrow-up"] ? j(l.$slots, "arrow-up", { key: 0 }) : $("", !0),
                l.$slots["arrow-up"] ? $("", !0) : (p(), me(d(Hn), { key: 1 }))
              ], 42, Vr),
              ae("div", {
                role: "button",
                "aria-label": (R = d(h).ariaLabels) == null ? void 0 : R.openTpOverlay(c.type),
                class: ge(A(c.type) ? "" : "dp__time_display"),
                tabindex: "0",
                "data-test": `${c.type}-toggle-overlay-btn`,
                onKeydown: [
                  ue((y) => Y(c.type), ["enter"]),
                  ue((y) => Y(c.type), ["space"])
                ],
                onClick: (y) => Y(c.type),
                ref_for: !0,
                ref: (y) => Q(y, w, 1)
              }, [
                l.$slots[c.type] ? j(l.$slots, c.type, {
                  key: 0,
                  text: d(G)(c.type).text,
                  value: d(G)(c.type).value
                }) : $("", !0),
                l.$slots[c.type] ? $("", !0) : (p(), P(fe, { key: 1 }, [
                  je(_e(d(G)(c.type).text), 1)
                ], 64))
              ], 42, Er),
              ae("div", {
                class: ge({
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: d(H)(c.type)
                }),
                role: "button",
                "data-test": "time-dec-btn",
                "aria-label": (ce = d(h).ariaLabels) == null ? void 0 : ce.decrementValue(c.type),
                tabindex: "0",
                onKeydown: [
                  ue((y) => v(c.type, !1), ["enter"]),
                  ue((y) => v(c.type, !1), ["space"])
                ],
                onClick: (y) => v(c.type, !1),
                ref_for: !0,
                ref: (y) => Q(y, w, 2)
              }, [
                l.$slots["arrow-down"] ? j(l.$slots, "arrow-down", { key: 0 }) : $("", !0),
                l.$slots["arrow-down"] ? $("", !0) : (p(), me(d(Wn), { key: 1 }))
              ], 42, Lr)
            ], 64))
          ], 2);
        }), 128)),
        l.is24 ? $("", !0) : (p(), P("div", Fr, [
          l.$slots["am-pm-button"] ? j(l.$slots, "am-pm-button", {
            key: 0,
            toggle: z,
            value: L.value
          }) : $("", !0),
          l.$slots["am-pm-button"] ? $("", !0) : (p(), P("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: M,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (r = d(h).ariaLabels) == null ? void 0 : r.amPmButton,
            tabindex: "0",
            onClick: z,
            onKeydown: [
              ue(qe(z, ["prevent"]), ["enter"]),
              ue(qe(z, ["prevent"]), ["space"])
            ]
          }, _e(L.value), 41, Ur))
        ])),
        (p(!0), P(fe, null, Me(d(S), (c, w) => (p(), me(ht, {
          key: w,
          name: d(C)(D[c.type]),
          css: d(I)
        }, {
          default: se(() => [
            D[c.type] ? (p(), me($t, {
              key: 0,
              items: le(c.type),
              "disabled-values": d(h).filters.times[c.type].concat(d(de)(c.type)),
              "esc-close": l.escClose,
              "aria-labels": d(h).ariaLabels,
              "hide-navigation": l.hideNavigation,
              "onUpdate:modelValue": (W) => N(c.type, W),
              onSelected: (W) => Y(c.type),
              onToggle: (W) => Y(c.type),
              onResetFlow: o[0] || (o[0] = (W) => l.$emit("reset-flow")),
              type: c.type
            }, Ee({
              "button-icon": se(() => [
                l.$slots["clock-icon"] ? j(l.$slots, "clock-icon", { key: 0 }) : $("", !0),
                l.$slots["clock-icon"] ? $("", !0) : (p(), me(d(Un), { key: 1 }))
              ]),
              _: 2
            }, [
              l.$slots[`${c.type}-overlay-value`] ? {
                name: "item",
                fn: se(({ item: W }) => [
                  j(l.$slots, `${c.type}-overlay-value`, {
                    text: W.text,
                    value: W.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "disabled-values", "esc-close", "aria-labels", "hide-navigation", "onUpdate:modelValue", "onSelected", "onToggle", "type"])) : $("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), Wr = ["aria-label"], zr = { class: "dp__overlay_container dp__container_flex dp__time_picker_overlay_container" }, Kr = {
  key: 1,
  class: "dp__overlay_row"
}, jr = ["aria-label"], xr = /* @__PURE__ */ We({
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    internalModelValue: { type: [Date, Array], default: null },
    ...nt
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-opened",
    "overlay-closed"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { buildMatrix: s, setTimePicker: f } = tt(), h = sn(), { hideNavigationButtons: C, defaults: I } = Le(t), { transitionName: D, showTransition: L } = Ut(I.value.transitions), M = U(null), m = U(null), T = U([]), H = U(null);
    He(() => {
      a("mount"), !t.timePicker && t.arrowNavigation ? s([Te(M.value)], "time") : f(!0, t.timePicker);
    });
    const B = V(() => t.range && t.modelAuto ? Gn(t.internalModelValue) : !0), J = U(!1), O = (v) => ({
      hours: Array.isArray(t.hours) ? t.hours[v] : t.hours,
      minutes: Array.isArray(t.minutes) ? t.minutes[v] : t.minutes,
      seconds: Array.isArray(t.seconds) ? t.seconds[v] : t.seconds
    }), E = V(() => {
      const v = [];
      if (t.range)
        for (let _ = 0; _ < 2; _++)
          v.push(O(_));
      else
        v.push(O(0));
      return v;
    }), S = (v, _ = !1, z = "") => {
      _ || a("reset-flow"), J.value = v, v && a("overlay-opened"), t.arrowNavigation && (f(v), v || a("overlay-closed")), ct(() => {
        z !== "" && T.value[0] && T.value[0].openChildCmp(z);
      });
    }, G = V(() => ({
      dp__button: !0,
      dp__button_bottom: t.autoApply
    })), le = it(h, "timePicker"), oe = (v, _, z) => t.range ? _ === 0 ? [v, E.value[1][z]] : [E.value[0][z], v] : v, de = (v) => {
      a("update:hours", v);
    }, A = (v) => {
      a("update:minutes", v);
    }, Y = (v) => {
      a("update:seconds", v);
    }, F = () => {
      H.value && t.arrowNavigation && H.value.focus({ preventScroll: !0 });
    };
    return n({ toggleTimePicker: S }), (v, _) => {
      var z;
      return p(), P("div", null, [
        v.timePicker ? $("", !0) : Ct((p(), P("div", {
          key: 0,
          class: ge(d(G)),
          role: "button",
          "aria-label": (z = d(I).ariaLabels) == null ? void 0 : z.openTimePicker,
          tabindex: "0",
          "data-test": "open-time-picker-btn",
          ref_key: "openTimePickerBtn",
          ref: M,
          onKeydown: [
            _[0] || (_[0] = ue((q) => S(!0), ["enter"])),
            _[1] || (_[1] = ue((q) => S(!0), ["space"]))
          ],
          onClick: _[2] || (_[2] = (q) => S(!0))
        }, [
          v.$slots["clock-icon"] ? j(v.$slots, "clock-icon", { key: 0 }) : $("", !0),
          v.$slots["clock-icon"] ? $("", !0) : (p(), me(d(Un), { key: 1 }))
        ], 42, Wr)), [
          [_t, !d(C)("time")]
        ]),
        et(ht, {
          name: d(D)(J.value),
          css: d(L)
        }, {
          default: se(() => {
            var q;
            return [
              J.value || v.timePicker ? (p(), P("div", {
                key: 0,
                class: "dp__overlay",
                ref_key: "overlayRef",
                ref: H,
                tabindex: "0"
              }, [
                ae("div", zr, [
                  v.$slots["time-picker-overlay"] ? j(v.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: de,
                    setMinutes: A,
                    setSeconds: Y
                  }) : $("", !0),
                  v.$slots["time-picker-overlay"] ? $("", !0) : (p(), P("div", Kr, [
                    (p(!0), P(fe, null, Me(d(E), (Q, N) => Ct((p(), me(Hr, Pe({ key: N }, {
                      ...v.$props,
                      order: N,
                      hours: Q.hours,
                      minutes: Q.minutes,
                      seconds: Q.seconds,
                      closeTimePickerBtn: m.value,
                      disabled: N === 0 ? v.fixedStart : v.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: T,
                      "onUpdate:hours": (l) => de(oe(l, N, "hours")),
                      "onUpdate:minutes": (l) => A(oe(l, N, "minutes")),
                      "onUpdate:seconds": (l) => Y(oe(l, N, "seconds")),
                      onMounted: F,
                      onOverlayClosed: F
                    }), Ee({ _: 2 }, [
                      Me(d(le), (l, o) => ({
                        name: l,
                        fn: se((r) => [
                          j(v.$slots, l, Ne(Ue(r)))
                        ])
                      }))
                    ]), 1040, ["onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [_t, N === 0 ? !0 : d(B)]
                    ])), 128))
                  ])),
                  v.timePicker ? $("", !0) : Ct((p(), P("div", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: m,
                    class: ge(d(G)),
                    role: "button",
                    "aria-label": (q = d(I).ariaLabels) == null ? void 0 : q.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      _[3] || (_[3] = ue((Q) => S(!1), ["enter"])),
                      _[4] || (_[4] = ue((Q) => S(!1), ["space"]))
                    ],
                    onClick: _[5] || (_[5] = (Q) => S(!1))
                  }, [
                    v.$slots["calendar-icon"] ? j(v.$slots, "calendar-icon", { key: 0 }) : $("", !0),
                    v.$slots["calendar-icon"] ? $("", !0) : (p(), me(d(Ft), { key: 1 }))
                  ], 42, jr)), [
                    [_t, !d(C)("time")]
                  ])
                ])
              ], 512)) : $("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), Gr = (e, n) => {
  const { isDisabled: a, matchDate: t, getWeekFromDate: s } = Le(n), f = U(null), h = U(b()), C = (r) => {
    !r.current && n.hideOffsetDates || (f.value = r.value);
  }, I = () => {
    f.value = null;
  }, D = (r) => Array.isArray(e.value) && n.range && e.value[0] && f.value ? r ? Ve(f.value, e.value[0]) : Oe(f.value, e.value[0]) : !0, L = (r, c) => {
    const w = () => e.value ? c ? e.value[0] || null : e.value[1] : null, W = e.value && Array.isArray(e.value) ? w() : null;
    return be(b(r.value), W);
  }, M = (r) => {
    const c = Array.isArray(e.value) ? e.value[0] : null;
    return r ? !Oe(f.value || null, c) : !0;
  }, m = (r, c = !0) => (n.range || n.weekPicker) && Array.isArray(e.value) ? n.hideOffsetDates && !r.current ? !1 : be(b(r.value), e.value[c ? 0 : 1]) : n.range ? L(r, c) && M(c) || be(r.value, Array.isArray(e.value) ? e.value[0] : null) && D(c) : !1, T = (r, c, w) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? r ? !1 : w ? Ve(e.value[0], c.value) : Oe(e.value[0], c.value) : !1, H = (r) => !e.value || n.hideOffsetDates && !r.current ? !1 : n.range ? n.modelAuto && Array.isArray(e.value) ? be(r.value, e.value[0] ? e.value[0] : h.value) : !1 : n.multiDates && Array.isArray(e.value) ? e.value.some((c) => be(c, r.value)) : be(r.value, e.value ? e.value : h.value), B = (r) => {
    if (n.autoRange || n.weekPicker) {
      if (f.value) {
        if (n.hideOffsetDates && !r.current)
          return !1;
        const c = yt(f.value, +n.autoRange), w = s(b(f.value));
        return n.weekPicker ? be(w[1], b(r.value)) : be(c, b(r.value));
      }
      return !1;
    }
    return !1;
  }, J = (r) => {
    if (n.autoRange || n.weekPicker) {
      if (f.value) {
        const c = yt(f.value, +n.autoRange);
        if (n.hideOffsetDates && !r.current)
          return !1;
        const w = s(b(f.value));
        return n.weekPicker ? Ve(r.value, w[0]) && Oe(r.value, w[1]) : Ve(r.value, f.value) && Oe(r.value, c);
      }
      return !1;
    }
    return !1;
  }, O = (r) => {
    if (n.autoRange || n.weekPicker) {
      if (f.value) {
        if (n.hideOffsetDates && !r.current)
          return !1;
        const c = s(b(f.value));
        return n.weekPicker ? be(c[0], r.value) : be(f.value, r.value);
      }
      return !1;
    }
    return !1;
  }, E = (r) => zn(e.value, f.value, r.value), S = () => n.modelAuto && Array.isArray(n.internalModelValue) ? !!n.internalModelValue[0] : !1, G = () => n.modelAuto ? Gn(n.internalModelValue) : !0, le = (r) => {
    if (Array.isArray(e.value) && e.value.length || n.weekPicker)
      return !1;
    const c = n.range ? !m(r) && !m(r, !1) : !0;
    return !a(r.value) && !H(r) && !(!r.current && n.hideOffsetDates) && c;
  }, oe = (r) => n.range ? n.modelAuto ? S() && H(r) : !1 : H(r), de = (r) => n.highlight ? t(r.value, n.highlight) : !1, A = (r) => a(r.value) && n.highlightDisabledDays === !1, Y = (r) => n.highlightWeekDays && n.highlightWeekDays.includes(r.value.getDay()), F = (r) => (n.range || n.weekPicker) && (!(n.multiCalendars > 0) || r.current) && G() && !(!r.current && n.hideOffsetDates) && !H(r) ? E(r) : !1, v = (r) => {
    const { isRangeStart: c, isRangeEnd: w } = q(r), W = n.range ? c || w : !1;
    return {
      dp__cell_offset: !r.current,
      dp__pointer: !n.disabled && !(!r.current && n.hideOffsetDates) && !a(r.value),
      dp__cell_disabled: a(r.value),
      dp__cell_highlight: !A(r) && (de(r) || Y(r)) && !oe(r) && !W,
      dp__cell_highlight_active: !A(r) && (de(r) || Y(r)) && oe(r),
      dp__today: !n.noToday && be(r.value, h.value) && r.current
    };
  }, _ = (r) => ({
    dp__active_date: oe(r),
    dp__date_hover: le(r)
  }), z = (r) => ({
    ...Q(r),
    ...N(r),
    dp__range_between_week: F(r) && n.weekPicker
  }), q = (r) => {
    const c = n.multiCalendars > 0 ? r.current && m(r) && G() : m(r) && G(), w = n.multiCalendars > 0 ? r.current && m(r, !1) && G() : m(r, !1) && G();
    return { isRangeStart: c, isRangeEnd: w };
  }, Q = (r) => {
    const { isRangeStart: c, isRangeEnd: w } = q(r);
    return {
      dp__range_start: c,
      dp__range_end: w,
      dp__range_between: F(r) && !n.weekPicker,
      dp__date_hover_start: T(le(r), r, !0),
      dp__date_hover_end: T(le(r), r, !1)
    };
  }, N = (r) => ({
    ...Q(r),
    dp__cell_auto_range: J(r),
    dp__cell_auto_range_start: O(r),
    dp__cell_auto_range_end: B(r)
  }), l = (r) => n.range ? n.autoRange ? N(r) : n.modelAuto ? { ..._(r), ...Q(r) } : Q(r) : n.weekPicker ? z(r) : _(r);
  return {
    setHoverDate: C,
    clearHoverDate: I,
    getDayClassData: (r) => ({
      ...v(r),
      ...l(r),
      [n.dayClass ? n.dayClass(r.value) : ""]: !0,
      [n.calendarCellClassName]: !!n.calendarCellClassName
    })
  };
}, Zr = ["id", "onKeydown"], Xr = {
  key: 0,
  class: "dp__sidebar_left"
}, qr = {
  key: 1,
  class: "dp__preset_ranges"
}, Jr = ["onClick"], Qr = {
  key: 2,
  class: "dp__sidebar_right"
}, el = {
  key: 3,
  class: "dp__now_wrap"
}, tl = /* @__PURE__ */ We({
  __name: "DatepickerMenu",
  props: {
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...nt
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, { setMenuFocused: s, setShiftKey: f, control: h } = Kn(), { getCalendarDays: C, defaults: I } = Le(t), D = sn(), L = U(null), M = Mt({
      timePicker: !!(!t.enableTimePicker || t.timePicker || t.monthPicker),
      monthYearInput: !!t.timePicker,
      calendar: !1
    }), m = U([]), T = U([]), H = U(null), B = U(null), J = U(0), O = U(!1), E = U(0);
    He(() => {
      var K;
      O.value = !0, !((K = t.presetRanges) != null && K.length) && !D["left-sidebar"] && !D["right-sidebar"] && ne();
      const g = Te(B);
      if (g && !t.textInput && !t.inline && (s(!0), A()), g) {
        const Ae = ($e) => {
          ["action-row", "time-picker", "month-year"].some(
            (ft) => Object.keys(D).includes(ft)
          ) || $e.preventDefault(), $e.stopImmediatePropagation(), $e.stopPropagation();
        };
        g.addEventListener("pointerdown", Ae), g.addEventListener("mousedown", Ae);
      }
      window.addEventListener("resize", ne);
    }), on(() => {
      window.removeEventListener("resize", ne);
    });
    const { arrowRight: S, arrowLeft: G, arrowDown: le, arrowUp: oe } = tt(), de = (g) => {
      g || g === 0 ? T.value[g].triggerTransition(
        z.value(g),
        q.value(g)
      ) : T.value.forEach(
        (K, Ae) => K.triggerTransition(z.value(Ae), q.value(Ae))
      );
    }, A = () => {
      const g = Te(B);
      g && g.focus({ preventScroll: !0 });
    }, Y = () => {
      var g;
      (g = t.flow) != null && g.length && E.value !== -1 && (E.value += 1, a("flow-step", E.value), k());
    }, F = () => {
      E.value = -1;
    }, {
      calendars: v,
      modelValue: _,
      month: z,
      year: q,
      time: Q,
      updateTime: N,
      updateMonthYear: l,
      selectDate: o,
      getWeekNum: r,
      monthYearSelect: c,
      handleScroll: w,
      handleArrow: W,
      handleSwipe: R,
      getMarker: ce,
      selectCurrentDate: y,
      presetDateRange: i
    } = Ja(t, a, Y, de, E), { setHoverDate: Z, clearHoverDate: te, getDayClassData: we } = Gr(_, t);
    dt(
      v,
      () => {
        t.openOnTop && setTimeout(() => {
          a("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    );
    const ze = it(D, "calendar"), Je = it(D, "action"), re = it(D, "timePicker"), Ge = it(D, "monthYear"), Ke = V(() => t.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), Ie = V(() => Ha(t.yearRange)), pt = V(() => Wa(t.locale, t.monthNameFormat)), ne = () => {
      const g = Te(L);
      g && (J.value = g.getBoundingClientRect().width);
    }, ye = V(() => (g) => C(z.value(g), q.value(g))), ve = V(
      () => I.value.multiCalendars > 0 && t.range ? [...Array(I.value.multiCalendars).keys()] : [0]
    ), at = V(
      () => (g) => g === 1
    ), rt = V(() => t.monthPicker || t.timePicker || t.yearPicker), Ht = V(
      () => ({
        dp__flex_display: I.value.multiCalendars > 0
      })
    ), Tt = V(() => ({
      dp__instance_calendar: I.value.multiCalendars > 0
    })), kt = V(() => ({
      dp__menu_disabled: t.disabled,
      dp__menu_readonly: t.readonly
    })), Wt = V(
      () => (g) => Kt(ye, g)
    ), zt = V(
      () => ({
        dp__menu: !0,
        dp__menu_index: !t.inline,
        dp__relative: t.inline,
        [t.menuClassName]: !!t.menuClassName
      })
    ), Kt = (g, K) => g.value(K).map((Ae) => ({
      ...Ae,
      days: Ae.days.map(($e) => ($e.marker = ce($e), $e.classData = we($e), $e))
    })), At = (g) => {
      g.stopPropagation(), g.stopImmediatePropagation();
    }, yn = () => {
      t.escClose && a("close-picker");
    }, gn = (g, K = !1) => {
      o(g, K), t.spaceConfirm && a("select-date");
    }, St = (g) => {
      var K;
      (K = t.flow) != null && K.length && (M[g] = !0, Object.keys(M).filter((Ae) => !M[Ae]).length || k());
    }, u = (g, K, Ae, $e, ...ft) => {
      if (t.flow[E.value] === g) {
        const X = $e ? K.value[0] : K.value;
        X && X[Ae](...ft);
      }
    }, k = () => {
      u("month", m, "toggleMonthPicker", !0, !0), u("year", m, "toggleYearPicker", !0, !0), u("calendar", H, "toggleTimePicker", !1, !1, !0), u("time", H, "toggleTimePicker", !1, !0, !0);
      const g = t.flow[E.value];
      (g === "hours" || g === "minutes" || g === "seconds") && u(g, H, "toggleTimePicker", !1, !0, !0, g);
    }, x = (g) => {
      if (t.arrowNavigation) {
        if (g === "up")
          return oe();
        if (g === "down")
          return le();
        if (g === "left")
          return G();
        if (g === "right")
          return S();
      } else
        g === "left" || g === "up" ? W("left", 0, g === "up") : W("right", 0, g === "down");
    }, ee = (g) => {
      f(g.shiftKey), !t.disableMonthYearSelect && g.code === "Tab" && g.target.classList.contains("dp__menu") && h.value.shiftKeyInMenu && (g.preventDefault(), g.stopImmediatePropagation(), a("close-picker"));
    }, De = (g) => {
      m.value[0] && m.value[0].handleMonthYearChange(g);
    };
    return n({
      updateMonthYear: l
    }), (g, K) => {
      var Ae;
      return p(), me(ht, {
        appear: "",
        name: (Ae = d(I).transitions) == null ? void 0 : Ae.menuAppear,
        mode: "out-in",
        css: !!g.transitions
      }, {
        default: se(() => {
          var $e, ft;
          return [
            ae("div", {
              id: g.uid ? `dp-menu-${g.uid}` : void 0,
              tabindex: "0",
              ref_key: "dpMenuRef",
              ref: B,
              role: "dialog",
              class: ge(d(zt)),
              onMouseleave: K[15] || (K[15] = //@ts-ignore
              (...X) => d(te) && d(te)(...X)),
              onClick: At,
              onKeydown: [
                ue(yn, ["esc"]),
                K[16] || (K[16] = ue(qe((X) => x("left"), ["prevent"]), ["left"])),
                K[17] || (K[17] = ue(qe((X) => x("up"), ["prevent"]), ["up"])),
                K[18] || (K[18] = ue(qe((X) => x("down"), ["prevent"]), ["down"])),
                K[19] || (K[19] = ue(qe((X) => x("right"), ["prevent"]), ["right"])),
                ee
              ]
            }, [
              (g.disabled || g.readonly) && g.inline ? (p(), P("div", {
                key: 0,
                class: ge(d(kt))
              }, null, 2)) : $("", !0),
              !g.inline && !g.teleportCenter ? (p(), P("div", {
                key: 1,
                class: ge(d(Ke))
              }, null, 2)) : $("", !0),
              ae("div", {
                class: ge({
                  dp__menu_content_wrapper: (($e = g.presetRanges) == null ? void 0 : $e.length) || !!g.$slots["left-sidebar"] || !!g.$slots["right-sidebar"]
                })
              }, [
                g.$slots["left-sidebar"] ? (p(), P("div", Xr, [
                  j(g.$slots, "left-sidebar", Ne(Ue({ handleMonthYearChange: De })))
                ])) : $("", !0),
                (ft = g.presetRanges) != null && ft.length ? (p(), P("div", qr, [
                  (p(!0), P(fe, null, Me(g.presetRanges, (X, vt) => (p(), P("div", {
                    key: vt,
                    style: Qe(X.style || {}),
                    class: "dp__preset_range",
                    onClick: (ie) => d(i)(X.range, !!X.slot)
                  }, [
                    X.slot ? j(g.$slots, X.slot, {
                      key: 0,
                      presetDateRange: d(i),
                      label: X.label,
                      range: X.range
                    }) : (p(), P(fe, { key: 1 }, [
                      je(_e(X.label), 1)
                    ], 64))
                  ], 12, Jr))), 128))
                ])) : $("", !0),
                ae("div", {
                  class: "dp__instance_calendar",
                  ref_key: "calendarWrapperRef",
                  ref: L,
                  role: "document"
                }, [
                  ae("div", {
                    class: ge(d(Ht))
                  }, [
                    (p(!0), P(fe, null, Me(d(ve), (X, vt) => (p(), P("div", {
                      key: X,
                      class: ge(d(Tt))
                    }, [
                      !g.disableMonthYearSelect && !g.timePicker ? (p(), me(Br, Pe({
                        key: 0,
                        ref_for: !0,
                        ref: (ie) => {
                          ie && (m.value[vt] = ie);
                        },
                        months: d(pt),
                        years: d(Ie),
                        month: d(z)(X),
                        year: d(q)(X),
                        instance: X,
                        "internal-model-value": e.internalModelValue
                      }, g.$props, {
                        onMount: K[0] || (K[0] = (ie) => St("monthYearInput")),
                        onResetFlow: F,
                        onUpdateMonthYear: (ie) => d(l)(X, ie),
                        onMonthYearSelect: d(c),
                        onOverlayClosed: A
                      }), Ee({ _: 2 }, [
                        Me(d(Ge), (ie, Xn) => ({
                          name: ie,
                          fn: se((jt) => [
                            j(g.$slots, ie, Ne(Ue(jt)))
                          ])
                        }))
                      ]), 1040, ["months", "years", "month", "year", "instance", "internal-model-value", "onUpdateMonthYear", "onMonthYearSelect"])) : $("", !0),
                      et(Dr, Pe({
                        ref_for: !0,
                        ref: (ie) => {
                          ie && (T.value[vt] = ie);
                        },
                        "specific-mode": d(rt),
                        "get-week-num": d(r),
                        instance: X,
                        "mapped-dates": d(Wt)(X),
                        month: d(z)(X),
                        year: d(q)(X)
                      }, g.$props, {
                        "flow-step": E.value,
                        "onUpdate:flowStep": K[1] || (K[1] = (ie) => E.value = ie),
                        onSelectDate: (ie) => d(o)(ie, !d(at)(X)),
                        onHandleSpace: (ie) => gn(ie, !d(at)(X)),
                        onSetHoverDate: K[2] || (K[2] = (ie) => d(Z)(ie)),
                        onHandleScroll: (ie) => d(w)(ie, X),
                        onHandleSwipe: (ie) => d(R)(ie, X),
                        onMount: K[3] || (K[3] = (ie) => St("calendar")),
                        onResetFlow: F,
                        onTooltipOpen: K[4] || (K[4] = (ie) => g.$emit("tooltip-open", ie)),
                        onTooltipClose: K[5] || (K[5] = (ie) => g.$emit("tooltip-close", ie))
                      }), Ee({ _: 2 }, [
                        Me(d(ze), (ie, Xn) => ({
                          name: ie,
                          fn: se((jt) => [
                            j(g.$slots, ie, Ne(Ue({ ...jt })))
                          ])
                        }))
                      ]), 1040, ["specific-mode", "get-week-num", "instance", "mapped-dates", "month", "year", "flow-step", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
                    ], 2))), 128))
                  ], 2),
                  ae("div", null, [
                    g.$slots["time-picker"] ? j(g.$slots, "time-picker", Ne(Pe({ key: 0 }, { time: d(Q), updateTime: d(N) }))) : (p(), P(fe, { key: 1 }, [
                      g.enableTimePicker && !g.monthPicker && !g.weekPicker ? (p(), me(xr, Pe({
                        key: 0,
                        ref_key: "timePickerRef",
                        ref: H,
                        hours: d(Q).hours,
                        minutes: d(Q).minutes,
                        seconds: d(Q).seconds,
                        "internal-model-value": e.internalModelValue
                      }, g.$props, {
                        onMount: K[6] || (K[6] = (X) => St("timePicker")),
                        "onUpdate:hours": K[7] || (K[7] = (X) => d(N)(X)),
                        "onUpdate:minutes": K[8] || (K[8] = (X) => d(N)(X, !1)),
                        "onUpdate:seconds": K[9] || (K[9] = (X) => d(N)(X, !1, !0)),
                        onResetFlow: F,
                        onOverlayClosed: A,
                        onOverlayOpened: K[10] || (K[10] = (X) => g.$emit("time-picker-open", X))
                      }), Ee({ _: 2 }, [
                        Me(d(re), (X, vt) => ({
                          name: X,
                          fn: se((ie) => [
                            j(g.$slots, X, Ne(Ue(ie)))
                          ])
                        }))
                      ]), 1040, ["hours", "minutes", "seconds", "internal-model-value"])) : $("", !0)
                    ], 64))
                  ])
                ], 512),
                g.$slots["right-sidebar"] ? (p(), P("div", Qr, [
                  j(g.$slots, "right-sidebar", Ne(Ue({ handleMonthYearChange: De })))
                ])) : $("", !0),
                g.showNowButton ? (p(), P("div", el, [
                  g.$slots["now-button"] ? j(g.$slots, "now-button", {
                    key: 0,
                    selectCurrentDate: d(y)
                  }) : $("", !0),
                  g.$slots["now-button"] ? $("", !0) : (p(), P("button", {
                    key: 1,
                    type: "button",
                    role: "button",
                    class: "dp__now_button",
                    onClick: K[11] || (K[11] = //@ts-ignore
                    (...X) => d(y) && d(y)(...X))
                  }, _e(g.nowButtonLabel), 1))
                ])) : $("", !0)
              ], 2),
              !g.autoApply || g.keepActionRow ? (p(), me(vr, Pe({
                key: 2,
                "menu-mount": O.value,
                "calendar-width": J.value,
                "internal-model-value": e.internalModelValue
              }, g.$props, {
                onClosePicker: K[12] || (K[12] = (X) => g.$emit("close-picker")),
                onSelectDate: K[13] || (K[13] = (X) => g.$emit("select-date")),
                onInvalidSelect: K[14] || (K[14] = (X) => g.$emit("invalid-select"))
              }), Ee({ _: 2 }, [
                Me(d(Je), (X, vt) => ({
                  name: X,
                  fn: se((ie) => [
                    j(g.$slots, X, Ne(Ue({ ...ie })))
                  ])
                }))
              ]), 1040, ["menu-mount", "calendar-width", "internal-model-value"])) : $("", !0)
            ], 42, Zr)
          ];
        }),
        _: 3
      }, 8, ["name", "css"]);
    };
  }
}), nl = typeof window < "u" ? window : void 0, nn = () => {
}, al = (e) => Jn() ? (Qn(e), !0) : !1, rl = (e, n, a, t) => {
  if (!e)
    return nn;
  let s = nn;
  const f = dt(
    () => d(e),
    (C) => {
      s(), C && (C.addEventListener(n, a, t), s = () => {
        C.removeEventListener(n, a, t), s = nn;
      });
    },
    { immediate: !0, flush: "post" }
  ), h = () => {
    f(), s();
  };
  return al(h), h;
}, ll = (e, n, a, t = {}) => {
  const { window: s = nl, event: f = "pointerdown" } = t;
  return s ? rl(s, f, (C) => {
    const I = Te(e), D = Te(n);
    !I || !D || I === C.target || C.composedPath().includes(I) || C.composedPath().includes(D) || a(C);
  }, { passive: !0 }) : void 0;
}, ol = /* @__PURE__ */ We({
  __name: "VueDatePicker",
  props: {
    ...nt
  },
  emits: [
    "update:model-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open"
  ],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = sn(), f = U(!1), h = It(t, "modelValue"), C = It(t, "timezone"), I = U(null), D = U(null), L = U(!1), M = U(null), { setMenuFocused: m, setShiftKey: T } = Kn(), { clearArrowNav: H } = tt(), { validateDate: B, isValidTime: J, defaults: O } = Le(t);
    He(() => {
      v(t.modelValue), t.inline || (A(M.value).addEventListener("scroll", o), window.addEventListener("resize", r)), t.inline && (f.value = !0);
    }), on(() => {
      if (!t.inline) {
        const ne = A(M.value);
        ne && ne.removeEventListener("scroll", o), window.removeEventListener("resize", r);
      }
    });
    const E = it(s, "all", t.presetRanges), S = it(s, "input");
    dt(
      [h, C],
      () => {
        v(h.value);
      },
      { deep: !0 }
    );
    const { openOnTop: G, menuPosition: le, setMenuPosition: oe, setInitialPosition: de, getScrollableParent: A } = tr(
      I,
      D,
      a,
      t
    ), {
      inputValue: Y,
      internalModelValue: F,
      parseExternalModelValue: v,
      emitModelValue: _,
      formatInputValue: z,
      checkBeforeEmit: q
    } = Qa(a, t, L), Q = V(
      () => ({
        dp__main: !0,
        dp__theme_dark: t.dark,
        dp__theme_light: !t.dark,
        dp__flex_display: t.inline,
        dp__flex_display_with_input: t.inlineWithInput
      })
    ), N = V(() => t.dark ? "dp__theme_dark" : "dp__theme_light"), l = V(() => t.teleport ? {
      to: typeof t.teleport == "boolean" ? "body" : t.teleport,
      disabled: t.inline
    } : { class: "dp__outer_menu_wrap" }), o = () => {
      f.value && (t.closeOnScroll ? te() : oe());
    }, r = () => {
      f.value && oe();
    }, c = () => {
      !t.disabled && !t.readonly && (de(), f.value = !0, ct().then(() => {
        oe(), f.value && a("open");
      }), f.value || Z(), v(t.modelValue));
    }, w = () => {
      Y.value = "", Z(), a("update:model-value", null), a("cleared"), te();
    }, W = () => {
      const ne = F.value;
      return !ne || !Array.isArray(ne) && B(ne) ? !0 : Array.isArray(ne) ? ne.length === 2 && B(ne[0]) && B(ne[1]) ? !0 : B(ne[0]) : !1;
    }, R = () => {
      q() && W() ? (_(), te()) : a("invalid-select", F.value);
    }, ce = (ne) => {
      y(), _(), t.closeOnAutoApply && !ne && te();
    }, y = () => {
      D.value && t.textInput && D.value.setParsedDate(F.value);
    }, i = (ne = !1) => {
      t.autoApply && J(F.value) && W() && (t.range && Array.isArray(F.value) ? (t.partialRange || F.value.length === 2) && ce(ne) : ce(ne));
    }, Z = () => {
      t.textInput || (F.value = null);
    }, te = () => {
      t.inline || (f.value && (f.value = !1, m(!1), T(!1), H(), a("closed"), de(), Y.value && v(h.value)), Z(), D.value && D.value.focusInput());
    }, we = (ne, ye) => {
      if (!ne) {
        F.value = null;
        return;
      }
      F.value = ne, ye && (R(), a("text-submit"));
    }, ze = () => {
      t.autoApply && J(F.value) && _(), y();
    }, Je = () => f.value ? te() : c(), re = (ne) => {
      F.value = ne;
    }, Ge = V(() => t.textInput && O.value.textInputOptions.format), Ke = () => {
      Ge.value && (L.value = !0, z()), a("focus");
    }, Ie = () => {
      Ge.value && (L.value = !1, z()), a("blur");
    }, pt = (ne) => {
      I.value && I.value.updateMonthYear(0, {
        month: _n(ne.month),
        year: _n(ne.year)
      });
    };
    return ll(
      I,
      D,
      t.onClickOutside ? () => t.onClickOutside(W) : te
    ), n({
      closeMenu: te,
      selectDate: R,
      clearValue: w,
      openMenu: c,
      onScroll: o,
      formatInputValue: z,
      // exposed for testing purposes
      updateInternalModelValue: re,
      // modify internal modelValue
      setMonthYear: pt
    }), (ne, ye) => (p(), P("div", {
      class: ge(d(Q)),
      ref_key: "pickerWrapperRef",
      ref: M
    }, [
      et(ur, Pe({
        ref_key: "inputRef",
        ref: D,
        "is-menu-open": f.value,
        "input-value": d(Y),
        "onUpdate:inputValue": ye[0] || (ye[0] = (ve) => ot(Y) ? Y.value = ve : null)
      }, ne.$props, {
        onClear: w,
        onOpen: c,
        onSetInputDate: we,
        onSetEmptyDate: d(_),
        onSelectDate: R,
        onToggle: Je,
        onClose: te,
        onFocus: Ke,
        onBlur: Ie
      }), Ee({ _: 2 }, [
        Me(d(S), (ve, at) => ({
          name: ve,
          fn: se((rt) => [
            j(ne.$slots, ve, Ne(Ue(rt)))
          ])
        }))
      ]), 1040, ["is-menu-open", "input-value", "onSetEmptyDate"]),
      f.value ? (p(), me(Bn(ne.teleport ? ea : "div"), Ne(Pe({ key: 0 }, d(l))), {
        default: se(() => [
          f.value ? (p(), me(tl, Pe({
            key: 0,
            ref_key: "dpMenuRef",
            ref: I,
            class: d(N),
            style: d(le),
            "open-on-top": d(G)
          }, ne.$props, {
            "internal-model-value": d(F),
            "onUpdate:internalModelValue": ye[1] || (ye[1] = (ve) => ot(F) ? F.value = ve : null),
            onClosePicker: te,
            onSelectDate: R,
            onAutoApply: i,
            onTimeUpdate: ze,
            onFlowStep: ye[2] || (ye[2] = (ve) => ne.$emit("flow-step", ve)),
            onUpdateMonthYear: ye[3] || (ye[3] = (ve) => ne.$emit("update-month-year", ve)),
            onInvalidSelect: ye[4] || (ye[4] = (ve) => ne.$emit("invalid-select", d(F))),
            onInvalidFixedRange: ye[5] || (ye[5] = (ve) => ne.$emit("invalid-fixed-range", ve)),
            onRecalculatePosition: d(oe),
            onTooltipOpen: ye[6] || (ye[6] = (ve) => ne.$emit("tooltip-open", ve)),
            onTooltipClose: ye[7] || (ye[7] = (ve) => ne.$emit("tooltip-close", ve)),
            onTimePickerOpen: ye[8] || (ye[8] = (ve) => ne.$emit("time-picker-open", ve))
          }), Ee({ _: 2 }, [
            Me(d(E), (ve, at) => ({
              name: ve,
              fn: se((rt) => [
                j(ne.$slots, ve, Ne(Ue({ ...rt })))
              ])
            }))
          ]), 1040, ["class", "style", "open-on-top", "internal-model-value", "onRecalculatePosition"])) : $("", !0)
        ]),
        _: 3
      }, 16)) : $("", !0)
    ], 2));
  }
}), Zn = /* @__PURE__ */ (() => {
  const e = ol;
  return e.install = (n) => {
    n.component("Vue3DatePicker", e);
  }, e;
})(), sl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zn
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(sl).forEach(([e, n]) => {
  e !== "default" && (Zn[e] = n);
});
export {
  Zn as default
};

