(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) a(r);
  new MutationObserver((r) => {
    for (const i of r) if (i.type === "childList") for (const l of i.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && a(l);
  }).observe(document, {childList: !0, subtree: !0});
  function n(r) {
    const i = {};
    return (
      r.integrity && (i.integrity = r.integrity),
      r.referrerpolicy && (i.referrerPolicy = r.referrerpolicy),
      r.crossorigin === "use-credentials"
        ? (i.credentials = "include")
        : r.crossorigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function a(r) {
    if (r.ep) return;
    r.ep = !0;
    const i = n(r);
    fetch(r.href, i);
  }
})();
function id(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ir = {exports: {}},
  W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ea = Symbol.for("react.element"),
  od = Symbol.for("react.portal"),
  ld = Symbol.for("react.fragment"),
  sd = Symbol.for("react.strict_mode"),
  ud = Symbol.for("react.profiler"),
  dd = Symbol.for("react.provider"),
  cd = Symbol.for("react.context"),
  pd = Symbol.for("react.forward_ref"),
  fd = Symbol.for("react.suspense"),
  md = Symbol.for("react.memo"),
  hd = Symbol.for("react.lazy"),
  Ho = Symbol.iterator;
function gd(e) {
  return e === null || typeof e != "object" ? null : ((e = (Ho && e[Ho]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var ql = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Xl = Object.assign,
  Yl = {};
function dn(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Yl), (this.updater = n || ql);
}
dn.prototype.isReactComponent = {};
dn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
dn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Zl() {}
Zl.prototype = dn.prototype;
function Ki(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Yl), (this.updater = n || ql);
}
var ji = (Ki.prototype = new Zl());
ji.constructor = Ki;
Xl(ji, dn.prototype);
ji.isPureReactComponent = !0;
var Lo = Array.isArray,
  Jl = Object.prototype.hasOwnProperty,
  Qi = {current: null},
  es = {key: !0, ref: !0, __self: !0, __source: !0};
function ts(e, t, n) {
  var a,
    r = {},
    i = null,
    l = null;
  if (t != null)
    for (a in (t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t))
      Jl.call(t, a) && !es.hasOwnProperty(a) && (r[a] = t[a]);
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    for (var u = Array(s), m = 0; m < s; m++) u[m] = arguments[m + 2];
    r.children = u;
  }
  if (e && e.defaultProps) for (a in ((s = e.defaultProps), s)) r[a] === void 0 && (r[a] = s[a]);
  return {$$typeof: ea, type: e, key: i, ref: l, props: r, _owner: Qi.current};
}
function _d(e, t) {
  return {$$typeof: ea, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner};
}
function $i(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ea;
}
function vd(e) {
  var t = {"=": "=0", ":": "=2"};
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Vo = /\/+/g;
function Mr(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? vd("" + e.key) : t.toString(36);
}
function ba(e, t, n, a, r) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ea:
          case od:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (r = r(l)),
      (e = a === "" ? "." + Mr(l, 0) : a),
      Lo(r)
        ? ((n = ""),
          e != null && (n = e.replace(Vo, "$&/") + "/"),
          ba(r, t, n, "", function (m) {
            return m;
          }))
        : r != null &&
          ($i(r) && (r = _d(r, n + (!r.key || (l && l.key === r.key) ? "" : ("" + r.key).replace(Vo, "$&/") + "/") + e)), t.push(r)),
      1
    );
  if (((l = 0), (a = a === "" ? "." : a + ":"), Lo(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var u = a + Mr(i, s);
      l += ba(i, t, n, u, r);
    }
  else if (((u = gd(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(i = e.next()).done; ) (i = i.value), (u = a + Mr(i, s++)), (l += ba(i, t, n, u, r));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function oa(e, t, n) {
  if (e == null) return e;
  var a = [],
    r = 0;
  return (
    ba(e, a, "", "", function (i) {
      return t.call(n, i, r++);
    }),
    a
  );
}
function wd(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ce = {current: null},
  Na = {transition: null},
  Sd = {ReactCurrentDispatcher: ce, ReactCurrentBatchConfig: Na, ReactCurrentOwner: Qi};
W.Children = {
  map: oa,
  forEach: function (e, t, n) {
    oa(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      oa(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      oa(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!$i(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
W.Component = dn;
W.Fragment = ld;
W.Profiler = ud;
W.PureComponent = Ki;
W.StrictMode = sd;
W.Suspense = fd;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sd;
W.cloneElement = function (e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var a = Xl({}, e.props),
    r = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if ((t.ref !== void 0 && ((i = t.ref), (l = Qi.current)), t.key !== void 0 && (r = "" + t.key), e.type && e.type.defaultProps))
      var s = e.type.defaultProps;
    for (u in t) Jl.call(t, u) && !es.hasOwnProperty(u) && (a[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) a.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var m = 0; m < u; m++) s[m] = arguments[m + 2];
    a.children = s;
  }
  return {$$typeof: ea, type: e.type, key: r, ref: i, props: a, _owner: l};
};
W.createContext = function (e) {
  return (
    (e = {
      $$typeof: cd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = {$$typeof: dd, _context: e}),
    (e.Consumer = e)
  );
};
W.createElement = ts;
W.createFactory = function (e) {
  var t = ts.bind(null, e);
  return (t.type = e), t;
};
W.createRef = function () {
  return {current: null};
};
W.forwardRef = function (e) {
  return {$$typeof: pd, render: e};
};
W.isValidElement = $i;
W.lazy = function (e) {
  return {$$typeof: hd, _payload: {_status: -1, _result: e}, _init: wd};
};
W.memo = function (e, t) {
  return {$$typeof: md, type: e, compare: t === void 0 ? null : t};
};
W.startTransition = function (e) {
  var t = Na.transition;
  Na.transition = {};
  try {
    e();
  } finally {
    Na.transition = t;
  }
};
W.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
W.useCallback = function (e, t) {
  return ce.current.useCallback(e, t);
};
W.useContext = function (e) {
  return ce.current.useContext(e);
};
W.useDebugValue = function () {};
W.useDeferredValue = function (e) {
  return ce.current.useDeferredValue(e);
};
W.useEffect = function (e, t) {
  return ce.current.useEffect(e, t);
};
W.useId = function () {
  return ce.current.useId();
};
W.useImperativeHandle = function (e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
};
W.useInsertionEffect = function (e, t) {
  return ce.current.useInsertionEffect(e, t);
};
W.useLayoutEffect = function (e, t) {
  return ce.current.useLayoutEffect(e, t);
};
W.useMemo = function (e, t) {
  return ce.current.useMemo(e, t);
};
W.useReducer = function (e, t, n) {
  return ce.current.useReducer(e, t, n);
};
W.useRef = function (e) {
  return ce.current.useRef(e);
};
W.useState = function (e) {
  return ce.current.useState(e);
};
W.useSyncExternalStore = function (e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
};
W.useTransition = function () {
  return ce.current.useTransition();
};
W.version = "18.2.0";
(function (e) {
  e.exports = W;
})(ir);
const ve = id(ir.exports);
var Zr = {},
  ns = {exports: {}},
  be = {},
  as = {exports: {}},
  rs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, G) {
    var z = M.length;
    M.push(G);
    e: for (; 0 < z; ) {
      var I = (z - 1) >>> 1,
        q = M[I];
      if (0 < r(q, G)) (M[I] = G), (M[z] = q), (z = I);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function a(M) {
    if (M.length === 0) return null;
    var G = M[0],
      z = M.pop();
    if (z !== G) {
      M[0] = z;
      e: for (var I = 0, q = M.length, d = q >>> 1; I < d; ) {
        var yt = 2 * (I + 1) - 1,
          Pr = M[yt],
          kt = yt + 1,
          ia = M[kt];
        if (0 > r(Pr, z)) kt < q && 0 > r(ia, Pr) ? ((M[I] = ia), (M[kt] = z), (I = kt)) : ((M[I] = Pr), (M[yt] = z), (I = yt));
        else if (kt < q && 0 > r(ia, z)) (M[I] = ia), (M[kt] = z), (I = kt);
        else break e;
      }
    }
    return G;
  }
  function r(M, G) {
    var z = M.sortIndex - G.sortIndex;
    return z !== 0 ? z : M.id - G.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var u = [],
    m = [],
    v = 1,
    _ = null,
    g = 3,
    y = !1,
    b = !1,
    N = !1,
    D = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(M) {
    for (var G = n(m); G !== null; ) {
      if (G.callback === null) a(m);
      else if (G.startTime <= M) a(m), (G.sortIndex = G.expirationTime), t(u, G);
      else break;
      G = n(m);
    }
  }
  function w(M) {
    if (((N = !1), h(M), !b))
      if (n(u) !== null) (b = !0), mn(P);
      else {
        var G = n(m);
        G !== null && hn(w, G.startTime - M);
      }
  }
  function P(M, G) {
    (b = !1), N && ((N = !1), p(C), (C = -1)), (y = !0);
    var z = g;
    try {
      for (h(G), _ = n(u); _ !== null && (!(_.expirationTime > G) || (M && !se())); ) {
        var I = _.callback;
        if (typeof I == "function") {
          (_.callback = null), (g = _.priorityLevel);
          var q = I(_.expirationTime <= G);
          (G = e.unstable_now()), typeof q == "function" ? (_.callback = q) : _ === n(u) && a(u), h(G);
        } else a(u);
        _ = n(u);
      }
      if (_ !== null) var d = !0;
      else {
        var yt = n(m);
        yt !== null && hn(w, yt.startTime - G), (d = !1);
      }
      return d;
    } finally {
      (_ = null), (g = z), (y = !1);
    }
  }
  var A = !1,
    E = null,
    C = -1,
    V = 5,
    T = -1;
  function se() {
    return !(e.unstable_now() - T < V);
  }
  function St() {
    if (E !== null) {
      var M = e.unstable_now();
      T = M;
      var G = !0;
      try {
        G = E(!0, M);
      } finally {
        G ? Re() : ((A = !1), (E = null));
      }
    } else A = !1;
  }
  var Re;
  if (typeof c == "function")
    Re = function () {
      c(St);
    };
  else if (typeof MessageChannel < "u") {
    var fn = new MessageChannel(),
      Nr = fn.port2;
    (fn.port1.onmessage = St),
      (Re = function () {
        Nr.postMessage(null);
      });
  } else
    Re = function () {
      D(St, 0);
    };
  function mn(M) {
    (E = M), A || ((A = !0), Re());
  }
  function hn(M, G) {
    C = D(function () {
      M(e.unstable_now());
    }, G);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      b || y || ((b = !0), mn(P));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported")
        : (V = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (M) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var G = 3;
          break;
        default:
          G = g;
      }
      var z = g;
      g = G;
      try {
        return M();
      } finally {
        g = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, G) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var z = g;
      g = M;
      try {
        return G();
      } finally {
        g = z;
      }
    }),
    (e.unstable_scheduleCallback = function (M, G, z) {
      var I = e.unstable_now();
      switch ((typeof z == "object" && z !== null ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? I + z : I)) : (z = I), M)) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = z + q),
        (M = {id: v++, callback: G, priorityLevel: M, startTime: z, expirationTime: q, sortIndex: -1}),
        z > I
          ? ((M.sortIndex = z), t(m, M), n(u) === null && M === n(m) && (N ? (p(C), (C = -1)) : (N = !0), hn(w, z - I)))
          : ((M.sortIndex = q), t(u, M), b || y || ((b = !0), mn(P))),
        M
      );
    }),
    (e.unstable_shouldYield = se),
    (e.unstable_wrapCallback = function (M) {
      var G = g;
      return function () {
        var z = g;
        g = G;
        try {
          return M.apply(this, arguments);
        } finally {
          g = z;
        }
      };
    });
})(rs);
(function (e) {
  e.exports = rs;
})(as);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var is = ir.exports,
  ke = as.exports;
function S(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var os = new Set(),
  Dn = {};
function Ft(e, t) {
  nn(e, t), nn(e + "Capture", t);
}
function nn(e, t) {
  for (Dn[e] = t, e = 0; e < t.length; e++) os.add(t[e]);
}
var qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  Jr = Object.prototype.hasOwnProperty,
  yd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Io = {},
  Uo = {};
function kd(e) {
  return Jr.call(Uo, e) ? !0 : Jr.call(Io, e) ? !1 : yd.test(e) ? (Uo[e] = !0) : ((Io[e] = !0), !1);
}
function bd(e, t, n, a) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return a ? !1 : n !== null ? !n.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Nd(e, t, n, a) {
  if (t === null || typeof t > "u" || bd(e, t, n, a)) return !0;
  if (a) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function pe(e, t, n, a, r, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = a),
    (this.attributeNamespace = r),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ae[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ae[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  ae[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ae[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ae[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ae[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ae[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var qi = /[\-:]([a-z])/g;
function Xi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(qi, Xi);
    ae[t] = new pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(qi, Xi);
  ae[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(qi, Xi);
  ae[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ae[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ae.xlinkHref = new pe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  ae[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Yi(e, t, n, a) {
  var r = ae.hasOwnProperty(t) ? ae[t] : null;
  (r !== null ? r.type !== 0 : a || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
    (Nd(t, n, r, a) && (n = null),
    a || r === null
      ? kd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : r.mustUseProperty
      ? (e[r.propertyName] = n === null ? (r.type === 3 ? !1 : "") : n)
      : ((t = r.attributeName),
        (a = r.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((r = r.type), (n = r === 3 || (r === 4 && n === !0) ? "" : "" + n), a ? e.setAttributeNS(a, t, n) : e.setAttribute(t, n))));
}
var Je = is.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  la = Symbol.for("react.element"),
  Rt = Symbol.for("react.portal"),
  Ot = Symbol.for("react.fragment"),
  Zi = Symbol.for("react.strict_mode"),
  ei = Symbol.for("react.profiler"),
  ls = Symbol.for("react.provider"),
  ss = Symbol.for("react.context"),
  Ji = Symbol.for("react.forward_ref"),
  ti = Symbol.for("react.suspense"),
  ni = Symbol.for("react.suspense_list"),
  eo = Symbol.for("react.memo"),
  tt = Symbol.for("react.lazy"),
  us = Symbol.for("react.offscreen"),
  Ko = Symbol.iterator;
function gn(e) {
  return e === null || typeof e != "object" ? null : ((e = (Ko && e[Ko]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var j = Object.assign,
  xr;
function Nn(e) {
  if (xr === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      xr = (t && t[1]) || "";
    }
  return (
    `
` +
    xr +
    e
  );
}
var Er = !1;
function Ar(e, t) {
  if (!e || Er) return "";
  Er = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (m) {
          var a = m;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (m) {
          a = m;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (m) {
        a = m;
      }
      e();
    }
  } catch (m) {
    if (m && a && typeof m.stack == "string") {
      for (
        var r = m.stack.split(`
`),
          i = a.stack.split(`
`),
          l = r.length - 1,
          s = i.length - 1;
        1 <= l && 0 <= s && r[l] !== i[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (r[l] !== i[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || r[l] !== i[s])) {
                var u =
                  `
` + r[l].replace(" at new ", " at ");
                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (Er = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Nn(e) : "";
}
function Pd(e) {
  switch (e.tag) {
    case 5:
      return Nn(e.type);
    case 16:
      return Nn("Lazy");
    case 13:
      return Nn("Suspense");
    case 19:
      return Nn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ar(e.type, !1)), e;
    case 11:
      return (e = Ar(e.type.render, !1)), e;
    case 1:
      return (e = Ar(e.type, !0)), e;
    default:
      return "";
  }
}
function ai(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ot:
      return "Fragment";
    case Rt:
      return "Portal";
    case ei:
      return "Profiler";
    case Zi:
      return "StrictMode";
    case ti:
      return "Suspense";
    case ni:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ss:
        return (e.displayName || "Context") + ".Consumer";
      case ls:
        return (e._context.displayName || "Context") + ".Provider";
      case Ji:
        var t = e.render;
        return (e = e.displayName), e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")), e;
      case eo:
        return (t = e.displayName || null), t !== null ? t : ai(e.type) || "Memo";
      case tt:
        (t = e._payload), (e = e._init);
        try {
          return ai(e(t));
        } catch {}
    }
  return null;
}
function Md(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (e = t.render), (e = e.displayName || e.name || ""), t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ai(t);
    case 8:
      return t === Zi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ht(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ds(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function xd(e) {
  var t = ds(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    a = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var r = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return r.call(this);
        },
        set: function (l) {
          (a = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, {enumerable: n.enumerable}),
      {
        getValue: function () {
          return a;
        },
        setValue: function (l) {
          a = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function sa(e) {
  e._valueTracker || (e._valueTracker = xd(e));
}
function cs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    a = "";
  return e && (a = ds(e) ? (e.checked ? "true" : "false") : e.value), (e = a), e !== n ? (t.setValue(e), !0) : !1;
}
function Fa(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ri(e, t) {
  var n = t.checked;
  return j({}, t, {defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n != null ? n : e._wrapperState.initialChecked});
}
function jo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    a = t.checked != null ? t.checked : t.defaultChecked;
  (n = ht(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: a,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
    });
}
function ps(e, t) {
  (t = t.checked), t != null && Yi(e, "checked", t, !1);
}
function ii(e, t) {
  ps(e, t);
  var n = ht(t.value),
    a = t.type;
  if (n != null)
    a === "number" ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (a === "submit" || a === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? oi(e, t.type, n) : t.hasOwnProperty("defaultValue") && oi(e, t.type, ht(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Qo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var a = t.type;
    if (!((a !== "submit" && a !== "reset") || (t.value !== void 0 && t.value !== null))) return;
    (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (n = e.name), n !== "" && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), n !== "" && (e.name = n);
}
function oi(e, t, n) {
  (t !== "number" || Fa(e.ownerDocument) !== e) &&
    (n == null ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Pn = Array.isArray;
function Xt(e, t, n, a) {
  if (((e = e.options), t)) {
    t = {};
    for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0;
    for (n = 0; n < e.length; n++)
      (r = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== r && (e[n].selected = r), r && a && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ht(n), t = null, r = 0; r < e.length; r++) {
      if (e[r].value === n) {
        (e[r].selected = !0), a && (e[r].defaultSelected = !0);
        return;
      }
      t !== null || e[r].disabled || (t = e[r]);
    }
    t !== null && (t.selected = !0);
  }
}
function li(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return j({}, t, {value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue});
}
function $o(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (Pn(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = {initialValue: ht(n)};
}
function fs(e, t) {
  var n = ht(t.value),
    a = ht(t.defaultValue);
  n != null && ((n = "" + n), n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    a != null && (e.defaultValue = "" + a);
}
function qo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ms(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function si(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ms(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ua,
  hs = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, a, r) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, a, r);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (
        ua = ua || document.createElement("div"), ua.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ua.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Rn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var En = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ed = ["Webkit", "ms", "Moz", "O"];
Object.keys(En).forEach(function (e) {
  Ed.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (En[t] = En[e]);
  });
});
function gs(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (En.hasOwnProperty(e) && En[e])
    ? ("" + t).trim()
    : t + "px";
}
function _s(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var a = n.indexOf("--") === 0,
        r = gs(n, t[n], a);
      n === "float" && (n = "cssFloat"), a ? e.setProperty(n, r) : (e[n] = r);
    }
}
var Ad = j(
  {menuitem: !0},
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ui(e, t) {
  if (t) {
    if (Ad[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function di(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ci = null;
function to(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var pi = null,
  Yt = null,
  Zt = null;
function Xo(e) {
  if ((e = aa(e))) {
    if (typeof pi != "function") throw Error(S(280));
    var t = e.stateNode;
    t && ((t = dr(t)), pi(e.stateNode, e.type, t));
  }
}
function vs(e) {
  Yt ? (Zt ? Zt.push(e) : (Zt = [e])) : (Yt = e);
}
function ws() {
  if (Yt) {
    var e = Yt,
      t = Zt;
    if (((Zt = Yt = null), Xo(e), t)) for (e = 0; e < t.length; e++) Xo(t[e]);
  }
}
function Ss(e, t) {
  return e(t);
}
function ys() {}
var Cr = !1;
function ks(e, t, n) {
  if (Cr) return e(t, n);
  Cr = !0;
  try {
    return Ss(e, t, n);
  } finally {
    (Cr = !1), (Yt !== null || Zt !== null) && (ys(), ws());
  }
}
function On(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var a = dr(n);
  if (a === null) return null;
  n = a[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (a = !a.disabled) || ((e = e.type), (a = !(e === "button" || e === "input" || e === "select" || e === "textarea"))), (e = !a);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var fi = !1;
if (qe)
  try {
    var _n = {};
    Object.defineProperty(_n, "passive", {
      get: function () {
        fi = !0;
      },
    }),
      window.addEventListener("test", _n, _n),
      window.removeEventListener("test", _n, _n);
  } catch {
    fi = !1;
  }
function Cd(e, t, n, a, r, i, l, s, u) {
  var m = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, m);
  } catch (v) {
    this.onError(v);
  }
}
var An = !1,
  Ba = null,
  Da = !1,
  mi = null,
  Gd = {
    onError: function (e) {
      (An = !0), (Ba = e);
    },
  };
function zd(e, t, n, a, r, i, l, s, u) {
  (An = !1), (Ba = null), Cd.apply(Gd, arguments);
}
function Td(e, t, n, a, r, i, l, s, u) {
  if ((zd.apply(this, arguments), An)) {
    if (An) {
      var m = Ba;
      (An = !1), (Ba = null);
    } else throw Error(S(198));
    Da || ((Da = !0), (mi = m));
  }
}
function Bt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function bs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function Yo(e) {
  if (Bt(e) !== e) throw Error(S(188));
}
function Wd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Bt(e)), t === null)) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, a = t; ; ) {
    var r = n.return;
    if (r === null) break;
    var i = r.alternate;
    if (i === null) {
      if (((a = r.return), a !== null)) {
        n = a;
        continue;
      }
      break;
    }
    if (r.child === i.child) {
      for (i = r.child; i; ) {
        if (i === n) return Yo(r), e;
        if (i === a) return Yo(r), t;
        i = i.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== a.return) (n = r), (a = i);
    else {
      for (var l = !1, s = r.child; s; ) {
        if (s === n) {
          (l = !0), (n = r), (a = i);
          break;
        }
        if (s === a) {
          (l = !0), (a = r), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = i.child; s; ) {
          if (s === n) {
            (l = !0), (n = i), (a = r);
            break;
          }
          if (s === a) {
            (l = !0), (a = i), (n = r);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(S(189));
      }
    }
    if (n.alternate !== a) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function Ns(e) {
  return (e = Wd(e)), e !== null ? Ps(e) : null;
}
function Ps(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ps(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ms = ke.unstable_scheduleCallback,
  Zo = ke.unstable_cancelCallback,
  Fd = ke.unstable_shouldYield,
  Bd = ke.unstable_requestPaint,
  $ = ke.unstable_now,
  Dd = ke.unstable_getCurrentPriorityLevel,
  no = ke.unstable_ImmediatePriority,
  xs = ke.unstable_UserBlockingPriority,
  Ra = ke.unstable_NormalPriority,
  Rd = ke.unstable_LowPriority,
  Es = ke.unstable_IdlePriority,
  or = null,
  Ve = null;
function Od(e) {
  if (Ve && typeof Ve.onCommitFiberRoot == "function")
    try {
      Ve.onCommitFiberRoot(or, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Fe = Math.clz32 ? Math.clz32 : Vd,
  Hd = Math.log,
  Ld = Math.LN2;
function Vd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Hd(e) / Ld) | 0)) | 0;
}
var da = 64,
  ca = 4194304;
function Mn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Oa(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var a = 0,
    r = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~r;
    s !== 0 ? (a = Mn(s)) : ((i &= l), i !== 0 && (a = Mn(i)));
  } else (l = n & ~r), l !== 0 ? (a = Mn(l)) : i !== 0 && (a = Mn(i));
  if (a === 0) return 0;
  if (t !== 0 && t !== a && (t & r) === 0 && ((r = a & -a), (i = t & -t), r >= i || (r === 16 && (i & 4194240) !== 0))) return t;
  if (((a & 4) !== 0 && (a |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= a; 0 < t; ) (n = 31 - Fe(t)), (r = 1 << n), (a |= e[n]), (t &= ~r);
  return a;
}
function Id(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Ud(e, t) {
  for (var n = e.suspendedLanes, a = e.pingedLanes, r = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - Fe(i),
      s = 1 << l,
      u = r[l];
    u === -1 ? ((s & n) === 0 || (s & a) !== 0) && (r[l] = Id(s, t)) : u <= t && (e.expiredLanes |= s), (i &= ~s);
  }
}
function hi(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function As() {
  var e = da;
  return (da <<= 1), (da & 4194240) === 0 && (da = 64), e;
}
function Gr(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ta(e, t, n) {
  (e.pendingLanes |= t), t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), (e = e.eventTimes), (t = 31 - Fe(t)), (e[t] = n);
}
function Kd(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var a = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var r = 31 - Fe(n),
      i = 1 << r;
    (t[r] = 0), (a[r] = -1), (e[r] = -1), (n &= ~i);
  }
}
function ao(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var a = 31 - Fe(n),
      r = 1 << a;
    (r & t) | (e[a] & t) && (e[a] |= t), (n &= ~r);
  }
}
var B = 0;
function Cs(e) {
  return (e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1;
}
var Gs,
  ro,
  zs,
  Ts,
  Ws,
  gi = !1,
  pa = [],
  lt = null,
  st = null,
  ut = null,
  Hn = new Map(),
  Ln = new Map(),
  at = [],
  jd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Jo(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      lt = null;
      break;
    case "dragenter":
    case "dragleave":
      st = null;
      break;
    case "mouseover":
    case "mouseout":
      ut = null;
      break;
    case "pointerover":
    case "pointerout":
      Hn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ln.delete(t.pointerId);
  }
}
function vn(e, t, n, a, r, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {blockedOn: t, domEventName: n, eventSystemFlags: a, nativeEvent: i, targetContainers: [r]}),
      t !== null && ((t = aa(t)), t !== null && ro(t)),
      e)
    : ((e.eventSystemFlags |= a), (t = e.targetContainers), r !== null && t.indexOf(r) === -1 && t.push(r), e);
}
function Qd(e, t, n, a, r) {
  switch (t) {
    case "focusin":
      return (lt = vn(lt, e, t, n, a, r)), !0;
    case "dragenter":
      return (st = vn(st, e, t, n, a, r)), !0;
    case "mouseover":
      return (ut = vn(ut, e, t, n, a, r)), !0;
    case "pointerover":
      var i = r.pointerId;
      return Hn.set(i, vn(Hn.get(i) || null, e, t, n, a, r)), !0;
    case "gotpointercapture":
      return (i = r.pointerId), Ln.set(i, vn(Ln.get(i) || null, e, t, n, a, r)), !0;
  }
  return !1;
}
function Fs(e) {
  var t = Pt(e.target);
  if (t !== null) {
    var n = Bt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = bs(n)), t !== null)) {
          (e.blockedOn = t),
            Ws(e.priority, function () {
              zs(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Pa(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = _i(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var a = new n.constructor(n.type, n);
      (ci = a), n.target.dispatchEvent(a), (ci = null);
    } else return (t = aa(n)), t !== null && ro(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function el(e, t, n) {
  Pa(e) && n.delete(t);
}
function $d() {
  (gi = !1),
    lt !== null && Pa(lt) && (lt = null),
    st !== null && Pa(st) && (st = null),
    ut !== null && Pa(ut) && (ut = null),
    Hn.forEach(el),
    Ln.forEach(el);
}
function wn(e, t) {
  e.blockedOn === t && ((e.blockedOn = null), gi || ((gi = !0), ke.unstable_scheduleCallback(ke.unstable_NormalPriority, $d)));
}
function Vn(e) {
  function t(r) {
    return wn(r, e);
  }
  if (0 < pa.length) {
    wn(pa[0], e);
    for (var n = 1; n < pa.length; n++) {
      var a = pa[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
  }
  for (
    lt !== null && wn(lt, e), st !== null && wn(st, e), ut !== null && wn(ut, e), Hn.forEach(t), Ln.forEach(t), n = 0;
    n < at.length;
    n++
  )
    (a = at[n]), a.blockedOn === e && (a.blockedOn = null);
  for (; 0 < at.length && ((n = at[0]), n.blockedOn === null); ) Fs(n), n.blockedOn === null && at.shift();
}
var Jt = Je.ReactCurrentBatchConfig,
  Ha = !0;
function qd(e, t, n, a) {
  var r = B,
    i = Jt.transition;
  Jt.transition = null;
  try {
    (B = 1), io(e, t, n, a);
  } finally {
    (B = r), (Jt.transition = i);
  }
}
function Xd(e, t, n, a) {
  var r = B,
    i = Jt.transition;
  Jt.transition = null;
  try {
    (B = 4), io(e, t, n, a);
  } finally {
    (B = r), (Jt.transition = i);
  }
}
function io(e, t, n, a) {
  if (Ha) {
    var r = _i(e, t, n, a);
    if (r === null) Lr(e, t, a, La, n), Jo(e, a);
    else if (Qd(r, e, t, n, a)) a.stopPropagation();
    else if ((Jo(e, a), t & 4 && -1 < jd.indexOf(e))) {
      for (; r !== null; ) {
        var i = aa(r);
        if ((i !== null && Gs(i), (i = _i(e, t, n, a)), i === null && Lr(e, t, a, La, n), i === r)) break;
        r = i;
      }
      r !== null && a.stopPropagation();
    } else Lr(e, t, a, null, n);
  }
}
var La = null;
function _i(e, t, n, a) {
  if (((La = null), (e = to(a)), (e = Pt(e)), e !== null))
    if (((t = Bt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = bs(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (La = e), null;
}
function Bs(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Dd()) {
        case no:
          return 1;
        case xs:
          return 4;
        case Ra:
        case Rd:
          return 16;
        case Es:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var it = null,
  oo = null,
  Ma = null;
function Ds() {
  if (Ma) return Ma;
  var e,
    t = oo,
    n = t.length,
    a,
    r = "value" in it ? it.value : it.textContent,
    i = r.length;
  for (e = 0; e < n && t[e] === r[e]; e++);
  var l = n - e;
  for (a = 1; a <= l && t[n - a] === r[i - a]; a++);
  return (Ma = r.slice(e, 1 < a ? 1 - a : void 0));
}
function xa(e) {
  var t = e.keyCode;
  return "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function fa() {
  return !0;
}
function tl() {
  return !1;
}
function Ne(e) {
  function t(n, a, r, i, l) {
    (this._reactName = n), (this._targetInst = r), (this.type = a), (this.nativeEvent = i), (this.target = l), (this.currentTarget = null);
    for (var s in e) e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? fa : tl),
      (this.isPropagationStopped = tl),
      this
    );
  }
  return (
    j(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = fa));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = fa));
      },
      persist: function () {},
      isPersistent: fa,
    }),
    t
  );
}
var cn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  lo = Ne(cn),
  na = j({}, cn, {view: 0, detail: 0}),
  Yd = Ne(na),
  zr,
  Tr,
  Sn,
  lr = j({}, na, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: so,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Sn &&
            (Sn && e.type === "mousemove" ? ((zr = e.screenX - Sn.screenX), (Tr = e.screenY - Sn.screenY)) : (Tr = zr = 0), (Sn = e)),
          zr);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Tr;
    },
  }),
  nl = Ne(lr),
  Zd = j({}, lr, {dataTransfer: 0}),
  Jd = Ne(Zd),
  ec = j({}, na, {relatedTarget: 0}),
  Wr = Ne(ec),
  tc = j({}, cn, {animationName: 0, elapsedTime: 0, pseudoElement: 0}),
  nc = Ne(tc),
  ac = j({}, cn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  rc = Ne(ac),
  ic = j({}, cn, {data: 0}),
  al = Ne(ic),
  oc = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  lc = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  sc = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};
function uc(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = sc[e]) ? !!t[e] : !1;
}
function so() {
  return uc;
}
var dc = j({}, na, {
    key: function (e) {
      if (e.key) {
        var t = oc[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = xa(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? lc[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: so,
    charCode: function (e) {
      return e.type === "keypress" ? xa(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress" ? xa(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
  }),
  cc = Ne(dc),
  pc = j({}, lr, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  rl = Ne(pc),
  fc = j({}, na, {touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: so}),
  mc = Ne(fc),
  hc = j({}, cn, {propertyName: 0, elapsedTime: 0, pseudoElement: 0}),
  gc = Ne(hc),
  _c = j({}, lr, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  vc = Ne(_c),
  wc = [9, 13, 27, 32],
  uo = qe && "CompositionEvent" in window,
  Cn = null;
qe && "documentMode" in document && (Cn = document.documentMode);
var Sc = qe && "TextEvent" in window && !Cn,
  Rs = qe && (!uo || (Cn && 8 < Cn && 11 >= Cn)),
  il = String.fromCharCode(32),
  ol = !1;
function Os(e, t) {
  switch (e) {
    case "keyup":
      return wc.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Hs(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ht = !1;
function yc(e, t) {
  switch (e) {
    case "compositionend":
      return Hs(t);
    case "keypress":
      return t.which !== 32 ? null : ((ol = !0), il);
    case "textInput":
      return (e = t.data), e === il && ol ? null : e;
    default:
      return null;
  }
}
function kc(e, t) {
  if (Ht) return e === "compositionend" || (!uo && Os(e, t)) ? ((e = Ds()), (Ma = oo = it = null), (Ht = !1), e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Rs && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var bc = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ll(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!bc[e.type] : t === "textarea";
}
function Ls(e, t, n, a) {
  vs(a), (t = Va(t, "onChange")), 0 < t.length && ((n = new lo("onChange", "change", null, n, a)), e.push({event: n, listeners: t}));
}
var Gn = null,
  In = null;
function Nc(e) {
  Zs(e, 0);
}
function sr(e) {
  var t = It(e);
  if (cs(t)) return e;
}
function Pc(e, t) {
  if (e === "change") return t;
}
var Vs = !1;
if (qe) {
  var Fr;
  if (qe) {
    var Br = "oninput" in document;
    if (!Br) {
      var sl = document.createElement("div");
      sl.setAttribute("oninput", "return;"), (Br = typeof sl.oninput == "function");
    }
    Fr = Br;
  } else Fr = !1;
  Vs = Fr && (!document.documentMode || 9 < document.documentMode);
}
function ul() {
  Gn && (Gn.detachEvent("onpropertychange", Is), (In = Gn = null));
}
function Is(e) {
  if (e.propertyName === "value" && sr(In)) {
    var t = [];
    Ls(t, In, e, to(e)), ks(Nc, t);
  }
}
function Mc(e, t, n) {
  e === "focusin" ? (ul(), (Gn = t), (In = n), Gn.attachEvent("onpropertychange", Is)) : e === "focusout" && ul();
}
function xc(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return sr(In);
}
function Ec(e, t) {
  if (e === "click") return sr(t);
}
function Ac(e, t) {
  if (e === "input" || e === "change") return sr(t);
}
function Cc(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var De = typeof Object.is == "function" ? Object.is : Cc;
function Un(e, t) {
  if (De(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    a = Object.keys(t);
  if (n.length !== a.length) return !1;
  for (a = 0; a < n.length; a++) {
    var r = n[a];
    if (!Jr.call(t, r) || !De(e[r], t[r])) return !1;
  }
  return !0;
}
function dl(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function cl(e, t) {
  var n = dl(e);
  e = 0;
  for (var a; n; ) {
    if (n.nodeType === 3) {
      if (((a = e + n.textContent.length), e <= t && a >= t)) return {node: n, offset: t - e};
      e = a;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = dl(n);
  }
}
function Us(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Us(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ks() {
  for (var e = window, t = Fa(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Fa(e.document);
  }
  return t;
}
function co(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Gc(e) {
  var t = Ks(),
    n = e.focusedElem,
    a = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Us(n.ownerDocument.documentElement, n)) {
    if (a !== null && co(n)) {
      if (((t = a.start), (e = a.end), e === void 0 && (e = t), "selectionStart" in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var r = n.textContent.length,
          i = Math.min(a.start, r);
        (a = a.end === void 0 ? i : Math.min(a.end, r)), !e.extend && i > a && ((r = a), (a = i), (i = r)), (r = cl(n, i));
        var l = cl(n, a);
        r &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== r.node ||
            e.anchorOffset !== r.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(r.node, r.offset),
          e.removeAllRanges(),
          i > a ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); ) e.nodeType === 1 && t.push({element: e, left: e.scrollLeft, top: e.scrollTop});
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var zc = qe && "documentMode" in document && 11 >= document.documentMode,
  Lt = null,
  vi = null,
  zn = null,
  wi = !1;
function pl(e, t, n) {
  var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  wi ||
    Lt == null ||
    Lt !== Fa(a) ||
    ((a = Lt),
    "selectionStart" in a && co(a)
      ? (a = {start: a.selectionStart, end: a.selectionEnd})
      : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
        (a = {anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset})),
    (zn && Un(zn, a)) ||
      ((zn = a),
      (a = Va(vi, "onSelect")),
      0 < a.length && ((t = new lo("onSelect", "select", null, t, n)), e.push({event: t, listeners: a}), (t.target = Lt))));
}
function ma(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var Vt = {
    animationend: ma("Animation", "AnimationEnd"),
    animationiteration: ma("Animation", "AnimationIteration"),
    animationstart: ma("Animation", "AnimationStart"),
    transitionend: ma("Transition", "TransitionEnd"),
  },
  Dr = {},
  js = {};
qe &&
  ((js = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Vt.animationend.animation, delete Vt.animationiteration.animation, delete Vt.animationstart.animation),
  "TransitionEvent" in window || delete Vt.transitionend.transition);
function ur(e) {
  if (Dr[e]) return Dr[e];
  if (!Vt[e]) return e;
  var t = Vt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in js) return (Dr[e] = t[n]);
  return e;
}
var Qs = ur("animationend"),
  $s = ur("animationiteration"),
  qs = ur("animationstart"),
  Xs = ur("transitionend"),
  Ys = new Map(),
  fl =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function _t(e, t) {
  Ys.set(e, t), Ft(t, [e]);
}
for (var Rr = 0; Rr < fl.length; Rr++) {
  var Or = fl[Rr],
    Tc = Or.toLowerCase(),
    Wc = Or[0].toUpperCase() + Or.slice(1);
  _t(Tc, "on" + Wc);
}
_t(Qs, "onAnimationEnd");
_t($s, "onAnimationIteration");
_t(qs, "onAnimationStart");
_t("dblclick", "onDoubleClick");
_t("focusin", "onFocus");
_t("focusout", "onBlur");
_t(Xs, "onTransitionEnd");
nn("onMouseEnter", ["mouseout", "mouseover"]);
nn("onMouseLeave", ["mouseout", "mouseover"]);
nn("onPointerEnter", ["pointerout", "pointerover"]);
nn("onPointerLeave", ["pointerout", "pointerover"]);
Ft("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ft("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ft("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ft("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ft("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ft("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var xn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Fc = new Set("cancel close invalid load scroll toggle".split(" ").concat(xn));
function ml(e, t, n) {
  var a = e.type || "unknown-event";
  (e.currentTarget = n), Td(a, t, void 0, e), (e.currentTarget = null);
}
function Zs(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var a = e[n],
      r = a.event;
    a = a.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = a.length - 1; 0 <= l; l--) {
          var s = a[l],
            u = s.instance,
            m = s.currentTarget;
          if (((s = s.listener), u !== i && r.isPropagationStopped())) break e;
          ml(r, s, m), (i = u);
        }
      else
        for (l = 0; l < a.length; l++) {
          if (((s = a[l]), (u = s.instance), (m = s.currentTarget), (s = s.listener), u !== i && r.isPropagationStopped())) break e;
          ml(r, s, m), (i = u);
        }
    }
  }
  if (Da) throw ((e = mi), (Da = !1), (mi = null), e);
}
function O(e, t) {
  var n = t[Ni];
  n === void 0 && (n = t[Ni] = new Set());
  var a = e + "__bubble";
  n.has(a) || (Js(t, e, 2, !1), n.add(a));
}
function Hr(e, t, n) {
  var a = 0;
  t && (a |= 4), Js(n, e, a, t);
}
var ha = "_reactListening" + Math.random().toString(36).slice(2);
function Kn(e) {
  if (!e[ha]) {
    (e[ha] = !0),
      os.forEach(function (n) {
        n !== "selectionchange" && (Fc.has(n) || Hr(n, !1, e), Hr(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ha] || ((t[ha] = !0), Hr("selectionchange", !1, t));
  }
}
function Js(e, t, n, a) {
  switch (Bs(t)) {
    case 1:
      var r = qd;
      break;
    case 4:
      r = Xd;
      break;
    default:
      r = io;
  }
  (n = r.bind(null, t, n, e)),
    (r = void 0),
    !fi || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (r = !0),
    a
      ? r !== void 0
        ? e.addEventListener(t, n, {capture: !0, passive: r})
        : e.addEventListener(t, n, !0)
      : r !== void 0
      ? e.addEventListener(t, n, {passive: r})
      : e.addEventListener(t, n, !1);
}
function Lr(e, t, n, a, r) {
  var i = a;
  if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
    e: for (;;) {
      if (a === null) return;
      var l = a.tag;
      if (l === 3 || l === 4) {
        var s = a.stateNode.containerInfo;
        if (s === r || (s.nodeType === 8 && s.parentNode === r)) break;
        if (l === 4)
          for (l = a.return; l !== null; ) {
            var u = l.tag;
            if ((u === 3 || u === 4) && ((u = l.stateNode.containerInfo), u === r || (u.nodeType === 8 && u.parentNode === r))) return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = Pt(s)), l === null)) return;
          if (((u = l.tag), u === 5 || u === 6)) {
            a = i = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      a = a.return;
    }
  ks(function () {
    var m = i,
      v = to(n),
      _ = [];
    e: {
      var g = Ys.get(e);
      if (g !== void 0) {
        var y = lo,
          b = e;
        switch (e) {
          case "keypress":
            if (xa(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = cc;
            break;
          case "focusin":
            (b = "focus"), (y = Wr);
            break;
          case "focusout":
            (b = "blur"), (y = Wr);
            break;
          case "beforeblur":
          case "afterblur":
            y = Wr;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = nl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Jd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = mc;
            break;
          case Qs:
          case $s:
          case qs:
            y = nc;
            break;
          case Xs:
            y = gc;
            break;
          case "scroll":
            y = Yd;
            break;
          case "wheel":
            y = vc;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = rc;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = rl;
        }
        var N = (t & 4) !== 0,
          D = !N && e === "scroll",
          p = N ? (g !== null ? g + "Capture" : null) : g;
        N = [];
        for (var c = m, h; c !== null; ) {
          h = c;
          var w = h.stateNode;
          if ((h.tag === 5 && w !== null && ((h = w), p !== null && ((w = On(c, p)), w != null && N.push(jn(c, w, h)))), D)) break;
          c = c.return;
        }
        0 < N.length && ((g = new y(g, b, null, n, v)), _.push({event: g, listeners: N}));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          g && n !== ci && (b = n.relatedTarget || n.fromElement) && (Pt(b) || b[Xe]))
        )
          break e;
        if (
          (y || g) &&
          ((g = v.window === v ? v : (g = v.ownerDocument) ? g.defaultView || g.parentWindow : window),
          y
            ? ((b = n.relatedTarget || n.toElement),
              (y = m),
              (b = b ? Pt(b) : null),
              b !== null && ((D = Bt(b)), b !== D || (b.tag !== 5 && b.tag !== 6)) && (b = null))
            : ((y = null), (b = m)),
          y !== b)
        ) {
          if (
            ((N = nl),
            (w = "onMouseLeave"),
            (p = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") && ((N = rl), (w = "onPointerLeave"), (p = "onPointerEnter"), (c = "pointer")),
            (D = y == null ? g : It(y)),
            (h = b == null ? g : It(b)),
            (g = new N(w, c + "leave", y, n, v)),
            (g.target = D),
            (g.relatedTarget = h),
            (w = null),
            Pt(v) === m && ((N = new N(p, c + "enter", b, n, v)), (N.target = h), (N.relatedTarget = D), (w = N)),
            (D = w),
            y && b)
          )
            t: {
              for (N = y, p = b, c = 0, h = N; h; h = Dt(h)) c++;
              for (h = 0, w = p; w; w = Dt(w)) h++;
              for (; 0 < c - h; ) (N = Dt(N)), c--;
              for (; 0 < h - c; ) (p = Dt(p)), h--;
              for (; c--; ) {
                if (N === p || (p !== null && N === p.alternate)) break t;
                (N = Dt(N)), (p = Dt(p));
              }
              N = null;
            }
          else N = null;
          y !== null && hl(_, g, y, N, !1), b !== null && D !== null && hl(_, D, b, N, !0);
        }
      }
      e: {
        if (
          ((g = m ? It(m) : window), (y = g.nodeName && g.nodeName.toLowerCase()), y === "select" || (y === "input" && g.type === "file"))
        )
          var P = Pc;
        else if (ll(g))
          if (Vs) P = Ac;
          else {
            P = xc;
            var A = Mc;
          }
        else (y = g.nodeName) && y.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (P = Ec);
        if (P && (P = P(e, m))) {
          Ls(_, P, n, v);
          break e;
        }
        A && A(e, g, m), e === "focusout" && (A = g._wrapperState) && A.controlled && g.type === "number" && oi(g, "number", g.value);
      }
      switch (((A = m ? It(m) : window), e)) {
        case "focusin":
          (ll(A) || A.contentEditable === "true") && ((Lt = A), (vi = m), (zn = null));
          break;
        case "focusout":
          zn = vi = Lt = null;
          break;
        case "mousedown":
          wi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (wi = !1), pl(_, n, v);
          break;
        case "selectionchange":
          if (zc) break;
        case "keydown":
        case "keyup":
          pl(_, n, v);
      }
      var E;
      if (uo)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else Ht ? Os(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (Rs &&
          n.locale !== "ko" &&
          (Ht || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && Ht && (E = Ds())
            : ((it = v), (oo = "value" in it ? it.value : it.textContent), (Ht = !0))),
        (A = Va(m, C)),
        0 < A.length &&
          ((C = new al(C, e, null, n, v)), _.push({event: C, listeners: A}), E ? (C.data = E) : ((E = Hs(n)), E !== null && (C.data = E)))),
        (E = Sc ? yc(e, n) : kc(e, n)) &&
          ((m = Va(m, "onBeforeInput")),
          0 < m.length && ((v = new al("onBeforeInput", "beforeinput", null, n, v)), _.push({event: v, listeners: m}), (v.data = E)));
    }
    Zs(_, t);
  });
}
function jn(e, t, n) {
  return {instance: e, listener: t, currentTarget: n};
}
function Va(e, t) {
  for (var n = t + "Capture", a = []; e !== null; ) {
    var r = e,
      i = r.stateNode;
    r.tag === 5 &&
      i !== null &&
      ((r = i), (i = On(e, n)), i != null && a.unshift(jn(e, i, r)), (i = On(e, t)), i != null && a.push(jn(e, i, r))),
      (e = e.return);
  }
  return a;
}
function Dt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function hl(e, t, n, a, r) {
  for (var i = t._reactName, l = []; n !== null && n !== a; ) {
    var s = n,
      u = s.alternate,
      m = s.stateNode;
    if (u !== null && u === a) break;
    s.tag === 5 &&
      m !== null &&
      ((s = m), r ? ((u = On(n, i)), u != null && l.unshift(jn(n, u, s))) : r || ((u = On(n, i)), u != null && l.push(jn(n, u, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({event: t, listeners: l});
}
var Bc = /\r\n?/g,
  Dc = /\u0000|\uFFFD/g;
function gl(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Bc,
      `
`
    )
    .replace(Dc, "");
}
function ga(e, t, n) {
  if (((t = gl(t)), gl(e) !== t && n)) throw Error(S(425));
}
function Ia() {}
var Si = null,
  yi = null;
function ki(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
  );
}
var bi = typeof setTimeout == "function" ? setTimeout : void 0,
  Rc = typeof clearTimeout == "function" ? clearTimeout : void 0,
  _l = typeof Promise == "function" ? Promise : void 0,
  Oc =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof _l < "u"
      ? function (e) {
          return _l.resolve(null).then(e).catch(Hc);
        }
      : bi;
function Hc(e) {
  setTimeout(function () {
    throw e;
  });
}
function Vr(e, t) {
  var n = t,
    a = 0;
  do {
    var r = n.nextSibling;
    if ((e.removeChild(n), r && r.nodeType === 8))
      if (((n = r.data), n === "/$")) {
        if (a === 0) {
          e.removeChild(r), Vn(t);
          return;
        }
        a--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || a++;
    n = r;
  } while (n);
  Vn(t);
}
function dt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function vl(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var pn = Math.random().toString(36).slice(2),
  Le = "__reactFiber$" + pn,
  Qn = "__reactProps$" + pn,
  Xe = "__reactContainer$" + pn,
  Ni = "__reactEvents$" + pn,
  Lc = "__reactListeners$" + pn,
  Vc = "__reactHandles$" + pn;
function Pt(e) {
  var t = e[Le];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Xe] || n[Le])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = vl(e); e !== null; ) {
          if ((n = e[Le])) return n;
          e = vl(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function aa(e) {
  return (e = e[Le] || e[Xe]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function It(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function dr(e) {
  return e[Qn] || null;
}
var Pi = [],
  Ut = -1;
function vt(e) {
  return {current: e};
}
function H(e) {
  0 > Ut || ((e.current = Pi[Ut]), (Pi[Ut] = null), Ut--);
}
function R(e, t) {
  Ut++, (Pi[Ut] = e.current), (e.current = t);
}
var gt = {},
  le = vt(gt),
  he = vt(!1),
  Ct = gt;
function an(e, t) {
  var n = e.type.contextTypes;
  if (!n) return gt;
  var a = e.stateNode;
  if (a && a.__reactInternalMemoizedUnmaskedChildContext === t) return a.__reactInternalMemoizedMaskedChildContext;
  var r = {},
    i;
  for (i in n) r[i] = t[i];
  return (
    a && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = r)), r
  );
}
function ge(e) {
  return (e = e.childContextTypes), e != null;
}
function Ua() {
  H(he), H(le);
}
function wl(e, t, n) {
  if (le.current !== gt) throw Error(S(168));
  R(le, t), R(he, n);
}
function eu(e, t, n) {
  var a = e.stateNode;
  if (((t = t.childContextTypes), typeof a.getChildContext != "function")) return n;
  a = a.getChildContext();
  for (var r in a) if (!(r in t)) throw Error(S(108, Md(e) || "Unknown", r));
  return j({}, n, a);
}
function Ka(e) {
  return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || gt), (Ct = le.current), R(le, e), R(he, he.current), !0;
}
function Sl(e, t, n) {
  var a = e.stateNode;
  if (!a) throw Error(S(169));
  n ? ((e = eu(e, t, Ct)), (a.__reactInternalMemoizedMergedChildContext = e), H(he), H(le), R(le, e)) : H(he), R(he, n);
}
var Ke = null,
  cr = !1,
  Ir = !1;
function tu(e) {
  Ke === null ? (Ke = [e]) : Ke.push(e);
}
function Ic(e) {
  (cr = !0), tu(e);
}
function wt() {
  if (!Ir && Ke !== null) {
    Ir = !0;
    var e = 0,
      t = B;
    try {
      var n = Ke;
      for (B = 1; e < n.length; e++) {
        var a = n[e];
        do a = a(!0);
        while (a !== null);
      }
      (Ke = null), (cr = !1);
    } catch (r) {
      throw (Ke !== null && (Ke = Ke.slice(e + 1)), Ms(no, wt), r);
    } finally {
      (B = t), (Ir = !1);
    }
  }
  return null;
}
var Kt = [],
  jt = 0,
  ja = null,
  Qa = 0,
  Pe = [],
  Me = 0,
  Gt = null,
  je = 1,
  Qe = "";
function bt(e, t) {
  (Kt[jt++] = Qa), (Kt[jt++] = ja), (ja = e), (Qa = t);
}
function nu(e, t, n) {
  (Pe[Me++] = je), (Pe[Me++] = Qe), (Pe[Me++] = Gt), (Gt = e);
  var a = je;
  e = Qe;
  var r = 32 - Fe(a) - 1;
  (a &= ~(1 << r)), (n += 1);
  var i = 32 - Fe(t) + r;
  if (30 < i) {
    var l = r - (r % 5);
    (i = (a & ((1 << l) - 1)).toString(32)), (a >>= l), (r -= l), (je = (1 << (32 - Fe(t) + r)) | (n << r) | a), (Qe = i + e);
  } else (je = (1 << i) | (n << r) | a), (Qe = e);
}
function po(e) {
  e.return !== null && (bt(e, 1), nu(e, 1, 0));
}
function fo(e) {
  for (; e === ja; ) (ja = Kt[--jt]), (Kt[jt] = null), (Qa = Kt[--jt]), (Kt[jt] = null);
  for (; e === Gt; ) (Gt = Pe[--Me]), (Pe[Me] = null), (Qe = Pe[--Me]), (Pe[Me] = null), (je = Pe[--Me]), (Pe[Me] = null);
}
var ye = null,
  Se = null,
  L = !1,
  We = null;
function au(e, t) {
  var n = xe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function yl(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (ye = e), (Se = dt(t.firstChild)), !0) : !1
      );
    case 6:
      return (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), (ye = e), (Se = null), !0) : !1;
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Gt !== null ? {id: je, overflow: Qe} : null),
            (e.memoizedState = {dehydrated: t, treeContext: n, retryLane: 1073741824}),
            (n = xe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ye = e),
            (Se = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Mi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function xi(e) {
  if (L) {
    var t = Se;
    if (t) {
      var n = t;
      if (!yl(e, t)) {
        if (Mi(e)) throw Error(S(418));
        t = dt(n.nextSibling);
        var a = ye;
        t && yl(e, t) ? au(a, n) : ((e.flags = (e.flags & -4097) | 2), (L = !1), (ye = e));
      }
    } else {
      if (Mi(e)) throw Error(S(418));
      (e.flags = (e.flags & -4097) | 2), (L = !1), (ye = e);
    }
  }
}
function kl(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ye = e;
}
function _a(e) {
  if (e !== ye) return !1;
  if (!L) return kl(e), (L = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) && !(t = e.tag !== 5) && ((t = e.type), (t = t !== "head" && t !== "body" && !ki(e.type, e.memoizedProps))),
    t && (t = Se))
  ) {
    if (Mi(e)) throw (ru(), Error(S(418)));
    for (; t; ) au(e, t), (t = dt(t.nextSibling));
  }
  if ((kl(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Se = dt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Se = null;
    }
  } else Se = ye ? dt(e.stateNode.nextSibling) : null;
  return !0;
}
function ru() {
  for (var e = Se; e; ) e = dt(e.nextSibling);
}
function rn() {
  (Se = ye = null), (L = !1);
}
function mo(e) {
  We === null ? (We = [e]) : We.push(e);
}
var Uc = Je.ReactCurrentBatchConfig;
function ze(e, t) {
  if (e && e.defaultProps) {
    (t = j({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var $a = vt(null),
  qa = null,
  Qt = null,
  ho = null;
function go() {
  ho = Qt = qa = null;
}
function _o(e) {
  var t = $a.current;
  H($a), (e._currentValue = t);
}
function Ei(e, t, n) {
  for (; e !== null; ) {
    var a = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
        : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function en(e, t) {
  (qa = e),
    (ho = Qt = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (me = !0), (e.firstContext = null));
}
function Ae(e) {
  var t = e._currentValue;
  if (ho !== e)
    if (((e = {context: e, memoizedValue: t, next: null}), Qt === null)) {
      if (qa === null) throw Error(S(308));
      (Qt = e), (qa.dependencies = {lanes: 0, firstContext: e});
    } else Qt = Qt.next = e;
  return t;
}
var Mt = null;
function vo(e) {
  Mt === null ? (Mt = [e]) : Mt.push(e);
}
function iu(e, t, n, a) {
  var r = t.interleaved;
  return r === null ? ((n.next = n), vo(t)) : ((n.next = r.next), (r.next = n)), (t.interleaved = n), Ye(e, a);
}
function Ye(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var nt = !1;
function wo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {pending: null, interleaved: null, lanes: 0},
    effects: null,
  };
}
function ou(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function $e(e, t) {
  return {eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null};
}
function ct(e, t, n) {
  var a = e.updateQueue;
  if (a === null) return null;
  if (((a = a.shared), (F & 2) !== 0)) {
    var r = a.pending;
    return r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (a.pending = t), Ye(e, n);
  }
  return (r = a.interleaved), r === null ? ((t.next = t), vo(a)) : ((t.next = r.next), (r.next = t)), (a.interleaved = t), Ye(e, n);
}
function Ea(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var a = t.lanes;
    (a &= e.pendingLanes), (n |= a), (t.lanes = n), ao(e, n);
  }
}
function bl(e, t) {
  var n = e.updateQueue,
    a = e.alternate;
  if (a !== null && ((a = a.updateQueue), n === a)) {
    var r = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null};
        i === null ? (r = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (r = i = t) : (i = i.next = t);
    } else r = i = t;
    (n = {baseState: a.baseState, firstBaseUpdate: r, lastBaseUpdate: i, shared: a.shared, effects: a.effects}), (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Xa(e, t, n, a) {
  var r = e.updateQueue;
  nt = !1;
  var i = r.firstBaseUpdate,
    l = r.lastBaseUpdate,
    s = r.shared.pending;
  if (s !== null) {
    r.shared.pending = null;
    var u = s,
      m = u.next;
    (u.next = null), l === null ? (i = m) : (l.next = m), (l = u);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (s = v.lastBaseUpdate),
      s !== l && (s === null ? (v.firstBaseUpdate = m) : (s.next = m), (v.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var _ = r.baseState;
    (l = 0), (v = m = u = null), (s = i);
    do {
      var g = s.lane,
        y = s.eventTime;
      if ((a & g) === g) {
        v !== null && (v = v.next = {eventTime: y, lane: 0, tag: s.tag, payload: s.payload, callback: s.callback, next: null});
        e: {
          var b = e,
            N = s;
          switch (((g = t), (y = n), N.tag)) {
            case 1:
              if (((b = N.payload), typeof b == "function")) {
                _ = b.call(y, _, g);
                break e;
              }
              _ = b;
              break e;
            case 3:
              b.flags = (b.flags & -65537) | 128;
            case 0:
              if (((b = N.payload), (g = typeof b == "function" ? b.call(y, _, g) : b), g == null)) break e;
              _ = j({}, _, g);
              break e;
            case 2:
              nt = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && ((e.flags |= 64), (g = r.effects), g === null ? (r.effects = [s]) : g.push(s));
      } else
        (y = {eventTime: y, lane: g, tag: s.tag, payload: s.payload, callback: s.callback, next: null}),
          v === null ? ((m = v = y), (u = _)) : (v = v.next = y),
          (l |= g);
      if (((s = s.next), s === null)) {
        if (((s = r.shared.pending), s === null)) break;
        (g = s), (s = g.next), (g.next = null), (r.lastBaseUpdate = g), (r.shared.pending = null);
      }
    } while (1);
    if (
      (v === null && (u = _), (r.baseState = u), (r.firstBaseUpdate = m), (r.lastBaseUpdate = v), (t = r.shared.interleaved), t !== null)
    ) {
      r = t;
      do (l |= r.lane), (r = r.next);
      while (r !== t);
    } else i === null && (r.shared.lanes = 0);
    (Tt |= l), (e.lanes = l), (e.memoizedState = _);
  }
}
function Nl(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var a = e[t],
        r = a.callback;
      if (r !== null) {
        if (((a.callback = null), (a = n), typeof r != "function")) throw Error(S(191, r));
        r.call(a);
      }
    }
}
var lu = new is.Component().refs;
function Ai(e, t, n, a) {
  (t = e.memoizedState),
    (n = n(a, t)),
    (n = n == null ? t : j({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var pr = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Bt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var a = de(),
      r = ft(e),
      i = $e(a, r);
    (i.payload = t), n != null && (i.callback = n), (t = ct(e, i, r)), t !== null && (Be(t, e, r, a), Ea(t, e, r));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var a = de(),
      r = ft(e),
      i = $e(a, r);
    (i.tag = 1), (i.payload = t), n != null && (i.callback = n), (t = ct(e, i, r)), t !== null && (Be(t, e, r, a), Ea(t, e, r));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = de(),
      a = ft(e),
      r = $e(n, a);
    (r.tag = 2), t != null && (r.callback = t), (t = ct(e, r, a)), t !== null && (Be(t, e, a, n), Ea(t, e, a));
  },
};
function Pl(e, t, n, a, r, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(a, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Un(n, a) || !Un(r, i)
      : !0
  );
}
function su(e, t, n) {
  var a = !1,
    r = gt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ae(i))
      : ((r = ge(t) ? Ct : le.current), (a = t.contextTypes), (i = (a = a != null) ? an(e, r) : gt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = pr),
    (e.stateNode = t),
    (t._reactInternals = e),
    a && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = r), (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Ml(e, t, n, a) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a),
    t.state !== e && pr.enqueueReplaceState(t, t.state, null);
}
function Ci(e, t, n, a) {
  var r = e.stateNode;
  (r.props = n), (r.state = e.memoizedState), (r.refs = lu), wo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? (r.context = Ae(i)) : ((i = ge(t) ? Ct : le.current), (r.context = an(e, i))),
    (r.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ai(e, t, i, n), (r.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof r.getSnapshotBeforeUpdate == "function" ||
      (typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function") ||
      ((t = r.state),
      typeof r.componentWillMount == "function" && r.componentWillMount(),
      typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(),
      t !== r.state && pr.enqueueReplaceState(r, r.state, null),
      Xa(e, n, r, a),
      (r.state = e.memoizedState)),
    typeof r.componentDidMount == "function" && (e.flags |= 4194308);
}
function yn(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var a = n.stateNode;
      }
      if (!a) throw Error(S(147, e));
      var r = a,
        i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var s = r.refs;
            s === lu && (s = r.refs = {}), l === null ? delete s[i] : (s[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function va(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
  );
}
function xl(e) {
  var t = e._init;
  return t(e._payload);
}
function uu(e) {
  function t(p, c) {
    if (e) {
      var h = p.deletions;
      h === null ? ((p.deletions = [c]), (p.flags |= 16)) : h.push(c);
    }
  }
  function n(p, c) {
    if (!e) return null;
    for (; c !== null; ) t(p, c), (c = c.sibling);
    return null;
  }
  function a(p, c) {
    for (p = new Map(); c !== null; ) c.key !== null ? p.set(c.key, c) : p.set(c.index, c), (c = c.sibling);
    return p;
  }
  function r(p, c) {
    return (p = mt(p, c)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, c, h) {
    return (
      (p.index = h),
      e
        ? ((h = p.alternate), h !== null ? ((h = h.index), h < c ? ((p.flags |= 2), c) : h) : ((p.flags |= 2), c))
        : ((p.flags |= 1048576), c)
    );
  }
  function l(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function s(p, c, h, w) {
    return c === null || c.tag !== 6 ? ((c = Xr(h, p.mode, w)), (c.return = p), c) : ((c = r(c, h)), (c.return = p), c);
  }
  function u(p, c, h, w) {
    var P = h.type;
    return P === Ot
      ? v(p, c, h.props.children, w, h.key)
      : c !== null && (c.elementType === P || (typeof P == "object" && P !== null && P.$$typeof === tt && xl(P) === c.type))
      ? ((w = r(c, h.props)), (w.ref = yn(p, c, h)), (w.return = p), w)
      : ((w = Wa(h.type, h.key, h.props, null, p.mode, w)), (w.ref = yn(p, c, h)), (w.return = p), w);
  }
  function m(p, c, h, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== h.containerInfo || c.stateNode.implementation !== h.implementation
      ? ((c = Yr(h, p.mode, w)), (c.return = p), c)
      : ((c = r(c, h.children || [])), (c.return = p), c);
  }
  function v(p, c, h, w, P) {
    return c === null || c.tag !== 7 ? ((c = At(h, p.mode, w, P)), (c.return = p), c) : ((c = r(c, h)), (c.return = p), c);
  }
  function _(p, c, h) {
    if ((typeof c == "string" && c !== "") || typeof c == "number") return (c = Xr("" + c, p.mode, h)), (c.return = p), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case la:
          return (h = Wa(c.type, c.key, c.props, null, p.mode, h)), (h.ref = yn(p, null, c)), (h.return = p), h;
        case Rt:
          return (c = Yr(c, p.mode, h)), (c.return = p), c;
        case tt:
          var w = c._init;
          return _(p, w(c._payload), h);
      }
      if (Pn(c) || gn(c)) return (c = At(c, p.mode, h, null)), (c.return = p), c;
      va(p, c);
    }
    return null;
  }
  function g(p, c, h, w) {
    var P = c !== null ? c.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number") return P !== null ? null : s(p, c, "" + h, w);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case la:
          return h.key === P ? u(p, c, h, w) : null;
        case Rt:
          return h.key === P ? m(p, c, h, w) : null;
        case tt:
          return (P = h._init), g(p, c, P(h._payload), w);
      }
      if (Pn(h) || gn(h)) return P !== null ? null : v(p, c, h, w, null);
      va(p, h);
    }
    return null;
  }
  function y(p, c, h, w, P) {
    if ((typeof w == "string" && w !== "") || typeof w == "number") return (p = p.get(h) || null), s(c, p, "" + w, P);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case la:
          return (p = p.get(w.key === null ? h : w.key) || null), u(c, p, w, P);
        case Rt:
          return (p = p.get(w.key === null ? h : w.key) || null), m(c, p, w, P);
        case tt:
          var A = w._init;
          return y(p, c, h, A(w._payload), P);
      }
      if (Pn(w) || gn(w)) return (p = p.get(h) || null), v(c, p, w, P, null);
      va(c, w);
    }
    return null;
  }
  function b(p, c, h, w) {
    for (var P = null, A = null, E = c, C = (c = 0), V = null; E !== null && C < h.length; C++) {
      E.index > C ? ((V = E), (E = null)) : (V = E.sibling);
      var T = g(p, E, h[C], w);
      if (T === null) {
        E === null && (E = V);
        break;
      }
      e && E && T.alternate === null && t(p, E), (c = i(T, c, C)), A === null ? (P = T) : (A.sibling = T), (A = T), (E = V);
    }
    if (C === h.length) return n(p, E), L && bt(p, C), P;
    if (E === null) {
      for (; C < h.length; C++) (E = _(p, h[C], w)), E !== null && ((c = i(E, c, C)), A === null ? (P = E) : (A.sibling = E), (A = E));
      return L && bt(p, C), P;
    }
    for (E = a(p, E); C < h.length; C++)
      (V = y(E, p, C, h[C], w)),
        V !== null &&
          (e && V.alternate !== null && E.delete(V.key === null ? C : V.key),
          (c = i(V, c, C)),
          A === null ? (P = V) : (A.sibling = V),
          (A = V));
    return (
      e &&
        E.forEach(function (se) {
          return t(p, se);
        }),
      L && bt(p, C),
      P
    );
  }
  function N(p, c, h, w) {
    var P = gn(h);
    if (typeof P != "function") throw Error(S(150));
    if (((h = P.call(h)), h == null)) throw Error(S(151));
    for (var A = (P = null), E = c, C = (c = 0), V = null, T = h.next(); E !== null && !T.done; C++, T = h.next()) {
      E.index > C ? ((V = E), (E = null)) : (V = E.sibling);
      var se = g(p, E, T.value, w);
      if (se === null) {
        E === null && (E = V);
        break;
      }
      e && E && se.alternate === null && t(p, E), (c = i(se, c, C)), A === null ? (P = se) : (A.sibling = se), (A = se), (E = V);
    }
    if (T.done) return n(p, E), L && bt(p, C), P;
    if (E === null) {
      for (; !T.done; C++, T = h.next())
        (T = _(p, T.value, w)), T !== null && ((c = i(T, c, C)), A === null ? (P = T) : (A.sibling = T), (A = T));
      return L && bt(p, C), P;
    }
    for (E = a(p, E); !T.done; C++, T = h.next())
      (T = y(E, p, C, T.value, w)),
        T !== null &&
          (e && T.alternate !== null && E.delete(T.key === null ? C : T.key),
          (c = i(T, c, C)),
          A === null ? (P = T) : (A.sibling = T),
          (A = T));
    return (
      e &&
        E.forEach(function (St) {
          return t(p, St);
        }),
      L && bt(p, C),
      P
    );
  }
  function D(p, c, h, w) {
    if (
      (typeof h == "object" && h !== null && h.type === Ot && h.key === null && (h = h.props.children), typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case la:
          e: {
            for (var P = h.key, A = c; A !== null; ) {
              if (A.key === P) {
                if (((P = h.type), P === Ot)) {
                  if (A.tag === 7) {
                    n(p, A.sibling), (c = r(A, h.props.children)), (c.return = p), (p = c);
                    break e;
                  }
                } else if (A.elementType === P || (typeof P == "object" && P !== null && P.$$typeof === tt && xl(P) === A.type)) {
                  n(p, A.sibling), (c = r(A, h.props)), (c.ref = yn(p, A, h)), (c.return = p), (p = c);
                  break e;
                }
                n(p, A);
                break;
              } else t(p, A);
              A = A.sibling;
            }
            h.type === Ot
              ? ((c = At(h.props.children, p.mode, w, h.key)), (c.return = p), (p = c))
              : ((w = Wa(h.type, h.key, h.props, null, p.mode, w)), (w.ref = yn(p, c, h)), (w.return = p), (p = w));
          }
          return l(p);
        case Rt:
          e: {
            for (A = h.key; c !== null; ) {
              if (c.key === A)
                if (c.tag === 4 && c.stateNode.containerInfo === h.containerInfo && c.stateNode.implementation === h.implementation) {
                  n(p, c.sibling), (c = r(c, h.children || [])), (c.return = p), (p = c);
                  break e;
                } else {
                  n(p, c);
                  break;
                }
              else t(p, c);
              c = c.sibling;
            }
            (c = Yr(h, p.mode, w)), (c.return = p), (p = c);
          }
          return l(p);
        case tt:
          return (A = h._init), D(p, c, A(h._payload), w);
      }
      if (Pn(h)) return b(p, c, h, w);
      if (gn(h)) return N(p, c, h, w);
      va(p, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        c !== null && c.tag === 6
          ? (n(p, c.sibling), (c = r(c, h)), (c.return = p), (p = c))
          : (n(p, c), (c = Xr(h, p.mode, w)), (c.return = p), (p = c)),
        l(p))
      : n(p, c);
  }
  return D;
}
var on = uu(!0),
  du = uu(!1),
  ra = {},
  Ie = vt(ra),
  $n = vt(ra),
  qn = vt(ra);
function xt(e) {
  if (e === ra) throw Error(S(174));
  return e;
}
function So(e, t) {
  switch ((R(qn, t), R($n, e), R(Ie, ra), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : si(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = si(t, e));
  }
  H(Ie), R(Ie, t);
}
function ln() {
  H(Ie), H($n), H(qn);
}
function cu(e) {
  xt(qn.current);
  var t = xt(Ie.current),
    n = si(t, e.type);
  t !== n && (R($n, e), R(Ie, n));
}
function yo(e) {
  $n.current === e && (H(Ie), H($n));
}
var U = vt(0);
function Ya(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 128) !== 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ur = [];
function ko() {
  for (var e = 0; e < Ur.length; e++) Ur[e]._workInProgressVersionPrimary = null;
  Ur.length = 0;
}
var Aa = Je.ReactCurrentDispatcher,
  Kr = Je.ReactCurrentBatchConfig,
  zt = 0,
  K = null,
  Y = null,
  J = null,
  Za = !1,
  Tn = !1,
  Xn = 0,
  Kc = 0;
function re() {
  throw Error(S(321));
}
function bo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!De(e[n], t[n])) return !1;
  return !0;
}
function No(e, t, n, a, r, i) {
  if (
    ((zt = i),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Aa.current = e === null || e.memoizedState === null ? qc : Xc),
    (e = n(a, r)),
    Tn)
  ) {
    i = 0;
    do {
      if (((Tn = !1), (Xn = 0), 25 <= i)) throw Error(S(301));
      (i += 1), (J = Y = null), (t.updateQueue = null), (Aa.current = Yc), (e = n(a, r));
    } while (Tn);
  }
  if (((Aa.current = Ja), (t = Y !== null && Y.next !== null), (zt = 0), (J = Y = K = null), (Za = !1), t)) throw Error(S(300));
  return e;
}
function Po() {
  var e = Xn !== 0;
  return (Xn = 0), e;
}
function He() {
  var e = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
  return J === null ? (K.memoizedState = J = e) : (J = J.next = e), J;
}
function Ce() {
  if (Y === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var t = J === null ? K.memoizedState : J.next;
  if (t !== null) (J = t), (Y = e);
  else {
    if (e === null) throw Error(S(310));
    (Y = e),
      (e = {memoizedState: Y.memoizedState, baseState: Y.baseState, baseQueue: Y.baseQueue, queue: Y.queue, next: null}),
      J === null ? (K.memoizedState = J = e) : (J = J.next = e);
  }
  return J;
}
function Yn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function jr(e) {
  var t = Ce(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var a = Y,
    r = a.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (r !== null) {
      var l = r.next;
      (r.next = i.next), (i.next = l);
    }
    (a.baseQueue = r = i), (n.pending = null);
  }
  if (r !== null) {
    (i = r.next), (a = a.baseState);
    var s = (l = null),
      u = null,
      m = i;
    do {
      var v = m.lane;
      if ((zt & v) === v)
        u !== null && (u = u.next = {lane: 0, action: m.action, hasEagerState: m.hasEagerState, eagerState: m.eagerState, next: null}),
          (a = m.hasEagerState ? m.eagerState : e(a, m.action));
      else {
        var _ = {lane: v, action: m.action, hasEagerState: m.hasEagerState, eagerState: m.eagerState, next: null};
        u === null ? ((s = u = _), (l = a)) : (u = u.next = _), (K.lanes |= v), (Tt |= v);
      }
      m = m.next;
    } while (m !== null && m !== i);
    u === null ? (l = a) : (u.next = s),
      De(a, t.memoizedState) || (me = !0),
      (t.memoizedState = a),
      (t.baseState = l),
      (t.baseQueue = u),
      (n.lastRenderedState = a);
  }
  if (((e = n.interleaved), e !== null)) {
    r = e;
    do (i = r.lane), (K.lanes |= i), (Tt |= i), (r = r.next);
    while (r !== e);
  } else r === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Qr(e) {
  var t = Ce(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var a = n.dispatch,
    r = n.pending,
    i = t.memoizedState;
  if (r !== null) {
    n.pending = null;
    var l = (r = r.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== r);
    De(i, t.memoizedState) || (me = !0), (t.memoizedState = i), t.baseQueue === null && (t.baseState = i), (n.lastRenderedState = i);
  }
  return [i, a];
}
function pu() {}
function fu(e, t) {
  var n = K,
    a = Ce(),
    r = t(),
    i = !De(a.memoizedState, r);
  if (
    (i && ((a.memoizedState = r), (me = !0)),
    (a = a.queue),
    Mo(gu.bind(null, n, a, e), [e]),
    a.getSnapshot !== t || i || (J !== null && J.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Zn(9, hu.bind(null, n, a, r, t), void 0, null), ee === null)) throw Error(S(349));
    (zt & 30) !== 0 || mu(n, t, r);
  }
  return r;
}
function mu(e, t, n) {
  (e.flags |= 16384),
    (e = {getSnapshot: t, value: n}),
    (t = K.updateQueue),
    t === null
      ? ((t = {lastEffect: null, stores: null}), (K.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function hu(e, t, n, a) {
  (t.value = n), (t.getSnapshot = a), _u(t) && vu(e);
}
function gu(e, t, n) {
  return n(function () {
    _u(t) && vu(e);
  });
}
function _u(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !De(e, n);
  } catch {
    return !0;
  }
}
function vu(e) {
  var t = Ye(e, 1);
  t !== null && Be(t, e, 1, -1);
}
function El(e) {
  var t = He();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Yn, lastRenderedState: e}),
    (t.queue = e),
    (e = e.dispatch = $c.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function Zn(e, t, n, a) {
  return (
    (e = {tag: e, create: t, destroy: n, deps: a, next: null}),
    (t = K.updateQueue),
    t === null
      ? ((t = {lastEffect: null, stores: null}), (K.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect), n === null ? (t.lastEffect = e.next = e) : ((a = n.next), (n.next = e), (e.next = a), (t.lastEffect = e))),
    e
  );
}
function wu() {
  return Ce().memoizedState;
}
function Ca(e, t, n, a) {
  var r = He();
  (K.flags |= e), (r.memoizedState = Zn(1 | t, n, void 0, a === void 0 ? null : a));
}
function fr(e, t, n, a) {
  var r = Ce();
  a = a === void 0 ? null : a;
  var i = void 0;
  if (Y !== null) {
    var l = Y.memoizedState;
    if (((i = l.destroy), a !== null && bo(a, l.deps))) {
      r.memoizedState = Zn(t, n, i, a);
      return;
    }
  }
  (K.flags |= e), (r.memoizedState = Zn(1 | t, n, i, a));
}
function Al(e, t) {
  return Ca(8390656, 8, e, t);
}
function Mo(e, t) {
  return fr(2048, 8, e, t);
}
function Su(e, t) {
  return fr(4, 2, e, t);
}
function yu(e, t) {
  return fr(4, 4, e, t);
}
function ku(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function bu(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), fr(4, 4, ku.bind(null, t, e), n);
}
function xo() {}
function Nu(e, t) {
  var n = Ce();
  t = t === void 0 ? null : t;
  var a = n.memoizedState;
  return a !== null && t !== null && bo(t, a[1]) ? a[0] : ((n.memoizedState = [e, t]), e);
}
function Pu(e, t) {
  var n = Ce();
  t = t === void 0 ? null : t;
  var a = n.memoizedState;
  return a !== null && t !== null && bo(t, a[1]) ? a[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Mu(e, t, n) {
  return (zt & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (me = !0)), (e.memoizedState = n))
    : (De(n, t) || ((n = As()), (K.lanes |= n), (Tt |= n), (e.baseState = !0)), t);
}
function jc(e, t) {
  var n = B;
  (B = n !== 0 && 4 > n ? n : 4), e(!0);
  var a = Kr.transition;
  Kr.transition = {};
  try {
    e(!1), t();
  } finally {
    (B = n), (Kr.transition = a);
  }
}
function xu() {
  return Ce().memoizedState;
}
function Qc(e, t, n) {
  var a = ft(e);
  if (((n = {lane: a, action: n, hasEagerState: !1, eagerState: null, next: null}), Eu(e))) Au(t, n);
  else if (((n = iu(e, t, n, a)), n !== null)) {
    var r = de();
    Be(n, e, a, r), Cu(n, t, a);
  }
}
function $c(e, t, n) {
  var a = ft(e),
    r = {lane: a, action: n, hasEagerState: !1, eagerState: null, next: null};
  if (Eu(e)) Au(t, r);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var l = t.lastRenderedState,
          s = i(l, n);
        if (((r.hasEagerState = !0), (r.eagerState = s), De(s, l))) {
          var u = t.interleaved;
          u === null ? ((r.next = r), vo(t)) : ((r.next = u.next), (u.next = r)), (t.interleaved = r);
          return;
        }
      } catch {
      } finally {
      }
    (n = iu(e, t, r, a)), n !== null && ((r = de()), Be(n, e, a, r), Cu(n, t, a));
  }
}
function Eu(e) {
  var t = e.alternate;
  return e === K || (t !== null && t === K);
}
function Au(e, t) {
  Tn = Za = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function Cu(e, t, n) {
  if ((n & 4194240) !== 0) {
    var a = t.lanes;
    (a &= e.pendingLanes), (n |= a), (t.lanes = n), ao(e, n);
  }
}
var Ja = {
    readContext: Ae,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  qc = {
    readContext: Ae,
    useCallback: function (e, t) {
      return (He().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ae,
    useEffect: Al,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), Ca(4194308, 4, ku.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return Ca(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ca(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = He();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var a = He();
      return (
        (t = n !== void 0 ? n(t) : t),
        (a.memoizedState = a.baseState = t),
        (e = {pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t}),
        (a.queue = e),
        (e = e.dispatch = Qc.bind(null, K, e)),
        [a.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = He();
      return (e = {current: e}), (t.memoizedState = e);
    },
    useState: El,
    useDebugValue: xo,
    useDeferredValue: function (e) {
      return (He().memoizedState = e);
    },
    useTransition: function () {
      var e = El(!1),
        t = e[0];
      return (e = jc.bind(null, e[1])), (He().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var a = K,
        r = He();
      if (L) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), ee === null)) throw Error(S(349));
        (zt & 30) !== 0 || mu(a, t, n);
      }
      r.memoizedState = n;
      var i = {value: n, getSnapshot: t};
      return (r.queue = i), Al(gu.bind(null, a, i, e), [e]), (a.flags |= 2048), Zn(9, hu.bind(null, a, i, n, t), void 0, null), n;
    },
    useId: function () {
      var e = He(),
        t = ee.identifierPrefix;
      if (L) {
        var n = Qe,
          a = je;
        (n = (a & ~(1 << (32 - Fe(a) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Xn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Kc++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Xc = {
    readContext: Ae,
    useCallback: Nu,
    useContext: Ae,
    useEffect: Mo,
    useImperativeHandle: bu,
    useInsertionEffect: Su,
    useLayoutEffect: yu,
    useMemo: Pu,
    useReducer: jr,
    useRef: wu,
    useState: function () {
      return jr(Yn);
    },
    useDebugValue: xo,
    useDeferredValue: function (e) {
      var t = Ce();
      return Mu(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = jr(Yn)[0],
        t = Ce().memoizedState;
      return [e, t];
    },
    useMutableSource: pu,
    useSyncExternalStore: fu,
    useId: xu,
    unstable_isNewReconciler: !1,
  },
  Yc = {
    readContext: Ae,
    useCallback: Nu,
    useContext: Ae,
    useEffect: Mo,
    useImperativeHandle: bu,
    useInsertionEffect: Su,
    useLayoutEffect: yu,
    useMemo: Pu,
    useReducer: Qr,
    useRef: wu,
    useState: function () {
      return Qr(Yn);
    },
    useDebugValue: xo,
    useDeferredValue: function (e) {
      var t = Ce();
      return Y === null ? (t.memoizedState = e) : Mu(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Qr(Yn)[0],
        t = Ce().memoizedState;
      return [e, t];
    },
    useMutableSource: pu,
    useSyncExternalStore: fu,
    useId: xu,
    unstable_isNewReconciler: !1,
  };
function sn(e, t) {
  try {
    var n = "",
      a = t;
    do (n += Pd(a)), (a = a.return);
    while (a);
    var r = n;
  } catch (i) {
    r =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return {value: e, source: t, stack: r, digest: null};
}
function $r(e, t, n) {
  return {value: e, source: null, stack: n != null ? n : null, digest: t != null ? t : null};
}
function Gi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Zc = typeof WeakMap == "function" ? WeakMap : Map;
function Gu(e, t, n) {
  (n = $e(-1, n)), (n.tag = 3), (n.payload = {element: null});
  var a = t.value;
  return (
    (n.callback = function () {
      tr || ((tr = !0), (Li = a)), Gi(e, t);
    }),
    n
  );
}
function zu(e, t, n) {
  (n = $e(-1, n)), (n.tag = 3);
  var a = e.type.getDerivedStateFromError;
  if (typeof a == "function") {
    var r = t.value;
    (n.payload = function () {
      return a(r);
    }),
      (n.callback = function () {
        Gi(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Gi(e, t), typeof a != "function" && (pt === null ? (pt = new Set([this])) : pt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {componentStack: l !== null ? l : ""});
      }),
    n
  );
}
function Cl(e, t, n) {
  var a = e.pingCache;
  if (a === null) {
    a = e.pingCache = new Zc();
    var r = new Set();
    a.set(t, r);
  } else (r = a.get(t)), r === void 0 && ((r = new Set()), a.set(t, r));
  r.has(n) || (r.add(n), (e = pp.bind(null, e, t, n)), t.then(e, e));
}
function Gl(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function zl(e, t, n, a, r) {
  return (e.mode & 1) === 0
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = $e(-1, 1)), (t.tag = 2), ct(n, t, 1))),
          (n.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = r), e);
}
var Jc = Je.ReactCurrentOwner,
  me = !1;
function ue(e, t, n, a) {
  t.child = e === null ? du(t, null, n, a) : on(t, e.child, n, a);
}
function Tl(e, t, n, a, r) {
  n = n.render;
  var i = t.ref;
  return (
    en(t, r),
    (a = No(e, t, n, a, i, r)),
    (n = Po()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~r), Ze(e, t, r))
      : (L && n && po(t), (t.flags |= 1), ue(e, t, a, r), t.child)
  );
}
function Wl(e, t, n, a, r) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Fo(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Tu(e, t, i, a, r))
      : ((e = Wa(n.type, null, a, t, t.mode, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((i = e.child), (e.lanes & r) === 0)) {
    var l = i.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : Un), n(l, a) && e.ref === t.ref)) return Ze(e, t, r);
  }
  return (t.flags |= 1), (e = mt(i, a)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Tu(e, t, n, a, r) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Un(i, a) && e.ref === t.ref)
      if (((me = !1), (t.pendingProps = a = i), (e.lanes & r) !== 0)) (e.flags & 131072) !== 0 && (me = !0);
      else return (t.lanes = e.lanes), Ze(e, t, r);
  }
  return zi(e, t, n, a, r);
}
function Wu(e, t, n) {
  var a = t.pendingProps,
    r = a.children,
    i = e !== null ? e.memoizedState : null;
  if (a.mode === "hidden")
    if ((t.mode & 1) === 0) (t.memoizedState = {baseLanes: 0, cachePool: null, transitions: null}), R(qt, we), (we |= n);
    else {
      if ((n & 1073741824) === 0)
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {baseLanes: e, cachePool: null, transitions: null}),
          (t.updateQueue = null),
          R(qt, we),
          (we |= e),
          null
        );
      (t.memoizedState = {baseLanes: 0, cachePool: null, transitions: null}), (a = i !== null ? i.baseLanes : n), R(qt, we), (we |= a);
    }
  else i !== null ? ((a = i.baseLanes | n), (t.memoizedState = null)) : (a = n), R(qt, we), (we |= a);
  return ue(e, t, r, n), t.child;
}
function Fu(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function zi(e, t, n, a, r) {
  var i = ge(n) ? Ct : le.current;
  return (
    (i = an(t, i)),
    en(t, r),
    (n = No(e, t, n, a, i, r)),
    (a = Po()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~r), Ze(e, t, r))
      : (L && a && po(t), (t.flags |= 1), ue(e, t, n, r), t.child)
  );
}
function Fl(e, t, n, a, r) {
  if (ge(n)) {
    var i = !0;
    Ka(t);
  } else i = !1;
  if ((en(t, r), t.stateNode === null)) Ga(e, t), su(t, n, a), Ci(t, n, a, r), (a = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var u = l.context,
      m = n.contextType;
    typeof m == "object" && m !== null ? (m = Ae(m)) : ((m = ge(n) ? Ct : le.current), (m = an(t, m)));
    var v = n.getDerivedStateFromProps,
      _ = typeof v == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    _ ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function") ||
      ((s !== a || u !== m) && Ml(t, l, a, m)),
      (nt = !1);
    var g = t.memoizedState;
    (l.state = g),
      Xa(t, a, l, r),
      (u = t.memoizedState),
      s !== a || g !== u || he.current || nt
        ? (typeof v == "function" && (Ai(t, n, v, a), (u = t.memoizedState)),
          (s = nt || Pl(t, n, s, a, g, u, m))
            ? (_ ||
                (typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" && l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), (t.memoizedProps = a), (t.memoizedState = u)),
          (l.props = a),
          (l.state = u),
          (l.context = m),
          (a = s))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), (a = !1));
  } else {
    (l = t.stateNode),
      ou(e, t),
      (s = t.memoizedProps),
      (m = t.type === t.elementType ? s : ze(t.type, s)),
      (l.props = m),
      (_ = t.pendingProps),
      (g = l.context),
      (u = n.contextType),
      typeof u == "object" && u !== null ? (u = Ae(u)) : ((u = ge(n) ? Ct : le.current), (u = an(t, u)));
    var y = n.getDerivedStateFromProps;
    (v = typeof y == "function" || typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function") ||
      ((s !== _ || g !== u) && Ml(t, l, a, u)),
      (nt = !1),
      (g = t.memoizedState),
      (l.state = g),
      Xa(t, a, l, r);
    var b = t.memoizedState;
    s !== _ || g !== b || he.current || nt
      ? (typeof y == "function" && (Ai(t, n, y, a), (b = t.memoizedState)),
        (m = nt || Pl(t, n, m, a, g, b, u) || !1)
          ? (v ||
              (typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(a, b, u),
              typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(a, b, u)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" || (s === e.memoizedProps && g === e.memoizedState) || (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" || (s === e.memoizedProps && g === e.memoizedState) || (t.flags |= 1024),
            (t.memoizedProps = a),
            (t.memoizedState = b)),
        (l.props = a),
        (l.state = b),
        (l.context = u),
        (a = m))
      : (typeof l.componentDidUpdate != "function" || (s === e.memoizedProps && g === e.memoizedState) || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || (s === e.memoizedProps && g === e.memoizedState) || (t.flags |= 1024),
        (a = !1));
  }
  return Ti(e, t, n, a, i, r);
}
function Ti(e, t, n, a, r, i) {
  Fu(e, t);
  var l = (t.flags & 128) !== 0;
  if (!a && !l) return r && Sl(t, n, !1), Ze(e, t, i);
  (a = t.stateNode), (Jc.current = t);
  var s = l && typeof n.getDerivedStateFromError != "function" ? null : a.render();
  return (
    (t.flags |= 1),
    e !== null && l ? ((t.child = on(t, e.child, null, i)), (t.child = on(t, null, s, i))) : ue(e, t, s, i),
    (t.memoizedState = a.state),
    r && Sl(t, n, !0),
    t.child
  );
}
function Bu(e) {
  var t = e.stateNode;
  t.pendingContext ? wl(e, t.pendingContext, t.pendingContext !== t.context) : t.context && wl(e, t.context, !1), So(e, t.containerInfo);
}
function Bl(e, t, n, a, r) {
  return rn(), mo(r), (t.flags |= 256), ue(e, t, n, a), t.child;
}
var Wi = {dehydrated: null, treeContext: null, retryLane: 0};
function Fi(e) {
  return {baseLanes: e, cachePool: null, transitions: null};
}
function Du(e, t, n) {
  var a = t.pendingProps,
    r = U.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (r & 2) !== 0),
    s ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (r |= 1),
    R(U, r & 1),
    e === null)
  )
    return (
      xi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? ((t.mode & 1) === 0 ? (t.lanes = 1) : e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824), null)
        : ((l = a.children),
          (e = a.fallback),
          i
            ? ((a = t.mode),
              (i = t.child),
              (l = {mode: "hidden", children: l}),
              (a & 1) === 0 && i !== null ? ((i.childLanes = 0), (i.pendingProps = l)) : (i = gr(l, a, 0, null)),
              (e = At(e, a, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Fi(n)),
              (t.memoizedState = Wi),
              e)
            : Eo(t, l))
    );
  if (((r = e.memoizedState), r !== null && ((s = r.dehydrated), s !== null))) return ep(e, t, l, a, s, r, n);
  if (i) {
    (i = a.fallback), (l = t.mode), (r = e.child), (s = r.sibling);
    var u = {mode: "hidden", children: a.children};
    return (
      (l & 1) === 0 && t.child !== r
        ? ((a = t.child), (a.childLanes = 0), (a.pendingProps = u), (t.deletions = null))
        : ((a = mt(r, u)), (a.subtreeFlags = r.subtreeFlags & 14680064)),
      s !== null ? (i = mt(s, i)) : ((i = At(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (a.return = t),
      (a.sibling = i),
      (t.child = a),
      (a = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l = l === null ? Fi(n) : {baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions}),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Wi),
      a
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (a = mt(i, {mode: "visible", children: a.children})),
    (t.mode & 1) === 0 && (a.lanes = n),
    (a.return = t),
    (a.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = a),
    (t.memoizedState = null),
    a
  );
}
function Eo(e, t) {
  return (t = gr({mode: "visible", children: t}, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function wa(e, t, n, a) {
  return a !== null && mo(a), on(t, e.child, null, n), (e = Eo(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
}
function ep(e, t, n, a, r, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (a = $r(Error(S(422)))), wa(e, t, l, a))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = a.fallback),
        (r = t.mode),
        (a = gr({mode: "visible", children: a.children}, r, 0, null)),
        (i = At(i, r, l, null)),
        (i.flags |= 2),
        (a.return = t),
        (i.return = t),
        (a.sibling = i),
        (t.child = a),
        (t.mode & 1) !== 0 && on(t, e.child, null, l),
        (t.child.memoizedState = Fi(l)),
        (t.memoizedState = Wi),
        i);
  if ((t.mode & 1) === 0) return wa(e, t, l, null);
  if (r.data === "$!") {
    if (((a = r.nextSibling && r.nextSibling.dataset), a)) var s = a.dgst;
    return (a = s), (i = Error(S(419))), (a = $r(i, a, void 0)), wa(e, t, l, a);
  }
  if (((s = (l & e.childLanes) !== 0), me || s)) {
    if (((a = ee), a !== null)) {
      switch (l & -l) {
        case 4:
          r = 2;
          break;
        case 16:
          r = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          r = 32;
          break;
        case 536870912:
          r = 268435456;
          break;
        default:
          r = 0;
      }
      (r = (r & (a.suspendedLanes | l)) !== 0 ? 0 : r), r !== 0 && r !== i.retryLane && ((i.retryLane = r), Ye(e, r), Be(a, e, r, -1));
    }
    return Wo(), (a = $r(Error(S(421)))), wa(e, t, l, a);
  }
  return r.data === "$?"
    ? ((t.flags |= 128), (t.child = e.child), (t = fp.bind(null, e)), (r._reactRetry = t), null)
    : ((e = i.treeContext),
      (Se = dt(r.nextSibling)),
      (ye = t),
      (L = !0),
      (We = null),
      e !== null && ((Pe[Me++] = je), (Pe[Me++] = Qe), (Pe[Me++] = Gt), (je = e.id), (Qe = e.overflow), (Gt = t)),
      (t = Eo(t, a.children)),
      (t.flags |= 4096),
      t);
}
function Dl(e, t, n) {
  e.lanes |= t;
  var a = e.alternate;
  a !== null && (a.lanes |= t), Ei(e.return, t, n);
}
function qr(e, t, n, a, r) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: n, tailMode: r})
    : ((i.isBackwards = t), (i.rendering = null), (i.renderingStartTime = 0), (i.last = a), (i.tail = n), (i.tailMode = r));
}
function Ru(e, t, n) {
  var a = t.pendingProps,
    r = a.revealOrder,
    i = a.tail;
  if ((ue(e, t, a.children, n), (a = U.current), (a & 2) !== 0)) (a = (a & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Dl(e, n, t);
        else if (e.tag === 19) Dl(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    a &= 1;
  }
  if ((R(U, a), (t.mode & 1) === 0)) t.memoizedState = null;
  else
    switch (r) {
      case "forwards":
        for (n = t.child, r = null; n !== null; ) (e = n.alternate), e !== null && Ya(e) === null && (r = n), (n = n.sibling);
        (n = r), n === null ? ((r = t.child), (t.child = null)) : ((r = n.sibling), (n.sibling = null)), qr(t, !1, r, n, i);
        break;
      case "backwards":
        for (n = null, r = t.child, t.child = null; r !== null; ) {
          if (((e = r.alternate), e !== null && Ya(e) === null)) {
            t.child = r;
            break;
          }
          (e = r.sibling), (r.sibling = n), (n = r), (r = e);
        }
        qr(t, !0, n, null, i);
        break;
      case "together":
        qr(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ga(e, t) {
  (t.mode & 1) === 0 && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ze(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Tt |= t.lanes), (n & t.childLanes) === 0)) return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (e = t.child, n = mt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = mt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function tp(e, t, n) {
  switch (t.tag) {
    case 3:
      Bu(t), rn();
      break;
    case 5:
      cu(t);
      break;
    case 1:
      ge(t.type) && Ka(t);
      break;
    case 4:
      So(t, t.stateNode.containerInfo);
      break;
    case 10:
      var a = t.type._context,
        r = t.memoizedProps.value;
      R($a, a._currentValue), (a._currentValue = r);
      break;
    case 13:
      if (((a = t.memoizedState), a !== null))
        return a.dehydrated !== null
          ? (R(U, U.current & 1), (t.flags |= 128), null)
          : (n & t.child.childLanes) !== 0
          ? Du(e, t, n)
          : (R(U, U.current & 1), (e = Ze(e, t, n)), e !== null ? e.sibling : null);
      R(U, U.current & 1);
      break;
    case 19:
      if (((a = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (a) return Ru(e, t, n);
        t.flags |= 128;
      }
      if (((r = t.memoizedState), r !== null && ((r.rendering = null), (r.tail = null), (r.lastEffect = null)), R(U, U.current), a)) break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Wu(e, t, n);
  }
  return Ze(e, t, n);
}
var Ou, Bi, Hu, Lu;
Ou = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Bi = function () {};
Hu = function (e, t, n, a) {
  var r = e.memoizedProps;
  if (r !== a) {
    (e = t.stateNode), xt(Ie.current);
    var i = null;
    switch (n) {
      case "input":
        (r = ri(e, r)), (a = ri(e, a)), (i = []);
        break;
      case "select":
        (r = j({}, r, {value: void 0})), (a = j({}, a, {value: void 0})), (i = []);
        break;
      case "textarea":
        (r = li(e, r)), (a = li(e, a)), (i = []);
        break;
      default:
        typeof r.onClick != "function" && typeof a.onClick == "function" && (e.onclick = Ia);
    }
    ui(n, a);
    var l;
    n = null;
    for (m in r)
      if (!a.hasOwnProperty(m) && r.hasOwnProperty(m) && r[m] != null)
        if (m === "style") {
          var s = r[m];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          m !== "dangerouslySetInnerHTML" &&
            m !== "children" &&
            m !== "suppressContentEditableWarning" &&
            m !== "suppressHydrationWarning" &&
            m !== "autoFocus" &&
            (Dn.hasOwnProperty(m) ? i || (i = []) : (i = i || []).push(m, null));
    for (m in a) {
      var u = a[m];
      if (((s = r != null ? r[m] : void 0), a.hasOwnProperty(m) && u !== s && (u != null || s != null)))
        if (m === "style")
          if (s) {
            for (l in s) !s.hasOwnProperty(l) || (u && u.hasOwnProperty(l)) || (n || (n = {}), (n[l] = ""));
            for (l in u) u.hasOwnProperty(l) && s[l] !== u[l] && (n || (n = {}), (n[l] = u[l]));
          } else n || (i || (i = []), i.push(m, n)), (n = u);
        else
          m === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0), (s = s ? s.__html : void 0), u != null && s !== u && (i = i || []).push(m, u))
            : m === "children"
            ? (typeof u != "string" && typeof u != "number") || (i = i || []).push(m, "" + u)
            : m !== "suppressContentEditableWarning" &&
              m !== "suppressHydrationWarning" &&
              (Dn.hasOwnProperty(m)
                ? (u != null && m === "onScroll" && O("scroll", e), i || s === u || (i = []))
                : (i = i || []).push(m, u));
    }
    n && (i = i || []).push("style", n);
    var m = i;
    (t.updateQueue = m) && (t.flags |= 4);
  }
};
Lu = function (e, t, n, a) {
  n !== a && (t.flags |= 4);
};
function kn(e, t) {
  if (!L)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var a = null; n !== null; ) n.alternate !== null && (a = n), (n = n.sibling);
        a === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (a.sibling = null);
    }
}
function ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    a = 0;
  if (t)
    for (var r = e.child; r !== null; )
      (n |= r.lanes | r.childLanes), (a |= r.subtreeFlags & 14680064), (a |= r.flags & 14680064), (r.return = e), (r = r.sibling);
  else
    for (r = e.child; r !== null; ) (n |= r.lanes | r.childLanes), (a |= r.subtreeFlags), (a |= r.flags), (r.return = e), (r = r.sibling);
  return (e.subtreeFlags |= a), (e.childLanes = n), t;
}
function np(e, t, n) {
  var a = t.pendingProps;
  switch ((fo(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ie(t), null;
    case 1:
      return ge(t.type) && Ua(), ie(t), null;
    case 3:
      return (
        (a = t.stateNode),
        ln(),
        H(he),
        H(le),
        ko(),
        a.pendingContext && ((a.context = a.pendingContext), (a.pendingContext = null)),
        (e === null || e.child === null) &&
          (_a(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), We !== null && (Ui(We), (We = null)))),
        Bi(e, t),
        ie(t),
        null
      );
    case 5:
      yo(t);
      var r = xt(qn.current);
      if (((n = t.type), e !== null && t.stateNode != null)) Hu(e, t, n, a, r), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!a) {
          if (t.stateNode === null) throw Error(S(166));
          return ie(t), null;
        }
        if (((e = xt(Ie.current)), _a(t))) {
          (a = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((a[Le] = t), (a[Qn] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              O("cancel", a), O("close", a);
              break;
            case "iframe":
            case "object":
            case "embed":
              O("load", a);
              break;
            case "video":
            case "audio":
              for (r = 0; r < xn.length; r++) O(xn[r], a);
              break;
            case "source":
              O("error", a);
              break;
            case "img":
            case "image":
            case "link":
              O("error", a), O("load", a);
              break;
            case "details":
              O("toggle", a);
              break;
            case "input":
              jo(a, i), O("invalid", a);
              break;
            case "select":
              (a._wrapperState = {wasMultiple: !!i.multiple}), O("invalid", a);
              break;
            case "textarea":
              $o(a, i), O("invalid", a);
          }
          ui(n, i), (r = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === "children"
                ? typeof s == "string"
                  ? a.textContent !== s && (i.suppressHydrationWarning !== !0 && ga(a.textContent, s, e), (r = ["children", s]))
                  : typeof s == "number" &&
                    a.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 && ga(a.textContent, s, e), (r = ["children", "" + s]))
                : Dn.hasOwnProperty(l) && s != null && l === "onScroll" && O("scroll", a);
            }
          switch (n) {
            case "input":
              sa(a), Qo(a, i, !0);
              break;
            case "textarea":
              sa(a), qo(a);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (a.onclick = Ia);
          }
          (a = r), (t.updateQueue = a), a !== null && (t.flags |= 4);
        } else {
          (l = r.nodeType === 9 ? r : r.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ms(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                : typeof a.is == "string"
                ? (e = l.createElement(n, {is: a.is}))
                : ((e = l.createElement(n)), n === "select" && ((l = e), a.multiple ? (l.multiple = !0) : a.size && (l.size = a.size)))
              : (e = l.createElementNS(e, n)),
            (e[Le] = t),
            (e[Qn] = a),
            Ou(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = di(n, a)), n)) {
              case "dialog":
                O("cancel", e), O("close", e), (r = a);
                break;
              case "iframe":
              case "object":
              case "embed":
                O("load", e), (r = a);
                break;
              case "video":
              case "audio":
                for (r = 0; r < xn.length; r++) O(xn[r], e);
                r = a;
                break;
              case "source":
                O("error", e), (r = a);
                break;
              case "img":
              case "image":
              case "link":
                O("error", e), O("load", e), (r = a);
                break;
              case "details":
                O("toggle", e), (r = a);
                break;
              case "input":
                jo(e, a), (r = ri(e, a)), O("invalid", e);
                break;
              case "option":
                r = a;
                break;
              case "select":
                (e._wrapperState = {wasMultiple: !!a.multiple}), (r = j({}, a, {value: void 0})), O("invalid", e);
                break;
              case "textarea":
                $o(e, a), (r = li(e, a)), O("invalid", e);
                break;
              default:
                r = a;
            }
            ui(n, r), (s = r);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var u = s[i];
                i === "style"
                  ? _s(e, u)
                  : i === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && hs(e, u))
                  : i === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Rn(e, u)
                    : typeof u == "number" && Rn(e, "" + u)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Dn.hasOwnProperty(i) ? u != null && i === "onScroll" && O("scroll", e) : u != null && Yi(e, i, u, l));
              }
            switch (n) {
              case "input":
                sa(e), Qo(e, a, !1);
                break;
              case "textarea":
                sa(e), qo(e);
                break;
              case "option":
                a.value != null && e.setAttribute("value", "" + ht(a.value));
                break;
              case "select":
                (e.multiple = !!a.multiple),
                  (i = a.value),
                  i != null ? Xt(e, !!a.multiple, i, !1) : a.defaultValue != null && Xt(e, !!a.multiple, a.defaultValue, !0);
                break;
              default:
                typeof r.onClick == "function" && (e.onclick = Ia);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1;
            }
          }
          a && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ie(t), null;
    case 6:
      if (e && t.stateNode != null) Lu(e, t, e.memoizedProps, a);
      else {
        if (typeof a != "string" && t.stateNode === null) throw Error(S(166));
        if (((n = xt(qn.current)), xt(Ie.current), _a(t))) {
          if (((a = t.stateNode), (n = t.memoizedProps), (a[Le] = t), (i = a.nodeValue !== n) && ((e = ye), e !== null)))
            switch (e.tag) {
              case 3:
                ga(a.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ga(a.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else (a = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(a)), (a[Le] = t), (t.stateNode = a);
      }
      return ie(t), null;
    case 13:
      if ((H(U), (a = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
        if (L && Se !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) ru(), rn(), (t.flags |= 98560), (i = !1);
        else if (((i = _a(t)), a !== null && a.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(S(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(S(317));
            i[Le] = t;
          } else rn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
          ie(t), (i = !1);
        } else We !== null && (Ui(We), (We = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return (t.flags & 128) !== 0
        ? ((t.lanes = n), t)
        : ((a = a !== null),
          a !== (e !== null && e.memoizedState !== null) &&
            a &&
            ((t.child.flags |= 8192), (t.mode & 1) !== 0 && (e === null || (U.current & 1) !== 0 ? Z === 0 && (Z = 3) : Wo())),
          t.updateQueue !== null && (t.flags |= 4),
          ie(t),
          null);
    case 4:
      return ln(), Bi(e, t), e === null && Kn(t.stateNode.containerInfo), ie(t), null;
    case 10:
      return _o(t.type._context), ie(t), null;
    case 17:
      return ge(t.type) && Ua(), ie(t), null;
    case 19:
      if ((H(U), (i = t.memoizedState), i === null)) return ie(t), null;
      if (((a = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (a) kn(i, !1);
        else {
          if (Z !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((l = Ya(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    kn(i, !1),
                    a = l.updateQueue,
                    a !== null && ((t.updateQueue = a), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    a = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = a),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies = e === null ? null : {lanes: e.lanes, firstContext: e.firstContext})),
                    (n = n.sibling);
                return R(U, (U.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && $() > un && ((t.flags |= 128), (a = !0), kn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!a)
          if (((e = Ya(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (a = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              kn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !L)
            )
              return ie(t), null;
          } else 2 * $() - i.renderingStartTime > un && n !== 1073741824 && ((t.flags |= 128), (a = !0), kn(i, !1), (t.lanes = 4194304));
        i.isBackwards ? ((l.sibling = t.child), (t.child = l)) : ((n = i.last), n !== null ? (n.sibling = l) : (t.child = l), (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = $()),
          (t.sibling = null),
          (n = U.current),
          R(U, a ? (n & 1) | 2 : n & 1),
          t)
        : (ie(t), null);
    case 22:
    case 23:
      return (
        To(),
        (a = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== a && (t.flags |= 8192),
        a && (t.mode & 1) !== 0 ? (we & 1073741824) !== 0 && (ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ie(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function ap(e, t) {
  switch ((fo(t), t.tag)) {
    case 1:
      return ge(t.type) && Ua(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return ln(), H(he), H(le), ko(), (e = t.flags), (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 5:
      return yo(t), null;
    case 13:
      if ((H(U), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        rn();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return H(U), null;
    case 4:
      return ln(), null;
    case 10:
      return _o(t.type._context), null;
    case 22:
    case 23:
      return To(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Sa = !1,
  oe = !1,
  rp = typeof WeakSet == "function" ? WeakSet : Set,
  x = null;
function $t(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (a) {
        Q(e, t, a);
      }
    else n.current = null;
}
function Di(e, t, n) {
  try {
    n();
  } catch (a) {
    Q(e, t, a);
  }
}
var Rl = !1;
function ip(e, t) {
  if (((Si = Ha), (e = Ks()), co(e))) {
    if ("selectionStart" in e) var n = {start: e.selectionStart, end: e.selectionEnd};
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var a = n.getSelection && n.getSelection();
        if (a && a.rangeCount !== 0) {
          n = a.anchorNode;
          var r = a.anchorOffset,
            i = a.focusNode;
          a = a.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            u = -1,
            m = 0,
            v = 0,
            _ = e,
            g = null;
          t: for (;;) {
            for (
              var y;
              _ !== n || (r !== 0 && _.nodeType !== 3) || (s = l + r),
                _ !== i || (a !== 0 && _.nodeType !== 3) || (u = l + a),
                _.nodeType === 3 && (l += _.nodeValue.length),
                (y = _.firstChild) !== null;

            )
              (g = _), (_ = y);
            for (;;) {
              if (_ === e) break t;
              if ((g === n && ++m === r && (s = l), g === i && ++v === a && (u = l), (y = _.nextSibling) !== null)) break;
              (_ = g), (g = _.parentNode);
            }
            _ = y;
          }
          n = s === -1 || u === -1 ? null : {start: s, end: u};
        } else n = null;
      }
    n = n || {start: 0, end: 0};
  } else n = null;
  for (yi = {focusedElem: e, selectionRange: n}, Ha = !1, x = t; x !== null; )
    if (((t = x), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (x = e);
    else
      for (; x !== null; ) {
        t = x;
        try {
          var b = t.alternate;
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (b !== null) {
                  var N = b.memoizedProps,
                    D = b.memoizedState,
                    p = t.stateNode,
                    c = p.getSnapshotBeforeUpdate(t.elementType === t.type ? N : ze(t.type, N), D);
                  p.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1 ? (h.textContent = "") : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (w) {
          Q(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (x = e);
          break;
        }
        x = t.return;
      }
  return (b = Rl), (Rl = !1), b;
}
function Wn(e, t, n) {
  var a = t.updateQueue;
  if (((a = a !== null ? a.lastEffect : null), a !== null)) {
    var r = (a = a.next);
    do {
      if ((r.tag & e) === e) {
        var i = r.destroy;
        (r.destroy = void 0), i !== void 0 && Di(t, n, i);
      }
      r = r.next;
    } while (r !== a);
  }
}
function mr(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var a = n.create;
        n.destroy = a();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ri(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Vu(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Vu(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[Le], delete t[Qn], delete t[Ni], delete t[Lc], delete t[Vc])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Iu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ol(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Iu(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Oi(e, t, n) {
  var a = e.tag;
  if (a === 5 || a === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ia));
  else if (a !== 4 && ((e = e.child), e !== null)) for (Oi(e, t, n), e = e.sibling; e !== null; ) Oi(e, t, n), (e = e.sibling);
}
function Hi(e, t, n) {
  var a = e.tag;
  if (a === 5 || a === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (a !== 4 && ((e = e.child), e !== null)) for (Hi(e, t, n), e = e.sibling; e !== null; ) Hi(e, t, n), (e = e.sibling);
}
var te = null,
  Te = !1;
function et(e, t, n) {
  for (n = n.child; n !== null; ) Uu(e, t, n), (n = n.sibling);
}
function Uu(e, t, n) {
  if (Ve && typeof Ve.onCommitFiberUnmount == "function")
    try {
      Ve.onCommitFiberUnmount(or, n);
    } catch {}
  switch (n.tag) {
    case 5:
      oe || $t(n, t);
    case 6:
      var a = te,
        r = Te;
      (te = null),
        et(e, t, n),
        (te = a),
        (Te = r),
        te !== null &&
          (Te
            ? ((e = te), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : te.removeChild(n.stateNode));
      break;
    case 18:
      te !== null &&
        (Te
          ? ((e = te), (n = n.stateNode), e.nodeType === 8 ? Vr(e.parentNode, n) : e.nodeType === 1 && Vr(e, n), Vn(e))
          : Vr(te, n.stateNode));
      break;
    case 4:
      (a = te), (r = Te), (te = n.stateNode.containerInfo), (Te = !0), et(e, t, n), (te = a), (Te = r);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!oe && ((a = n.updateQueue), a !== null && ((a = a.lastEffect), a !== null))) {
        r = a = a.next;
        do {
          var i = r,
            l = i.destroy;
          (i = i.tag), l !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && Di(n, t, l), (r = r.next);
        } while (r !== a);
      }
      et(e, t, n);
      break;
    case 1:
      if (!oe && ($t(n, t), (a = n.stateNode), typeof a.componentWillUnmount == "function"))
        try {
          (a.props = n.memoizedProps), (a.state = n.memoizedState), a.componentWillUnmount();
        } catch (s) {
          Q(n, t, s);
        }
      et(e, t, n);
      break;
    case 21:
      et(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((oe = (a = oe) || n.memoizedState !== null), et(e, t, n), (oe = a)) : et(e, t, n);
      break;
    default:
      et(e, t, n);
  }
}
function Hl(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new rp()),
      t.forEach(function (a) {
        var r = mp.bind(null, e, a);
        n.has(a) || (n.add(a), a.then(r, r));
      });
  }
}
function Ge(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var a = 0; a < n.length; a++) {
      var r = n[a];
      try {
        var i = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (te = s.stateNode), (Te = !1);
              break e;
            case 3:
              (te = s.stateNode.containerInfo), (Te = !0);
              break e;
            case 4:
              (te = s.stateNode.containerInfo), (Te = !0);
              break e;
          }
          s = s.return;
        }
        if (te === null) throw Error(S(160));
        Uu(i, l, r), (te = null), (Te = !1);
        var u = r.alternate;
        u !== null && (u.return = null), (r.return = null);
      } catch (m) {
        Q(r, t, m);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ku(t, e), (t = t.sibling);
}
function Ku(e, t) {
  var n = e.alternate,
    a = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ge(t, e), Oe(e), a & 4)) {
        try {
          Wn(3, e, e.return), mr(3, e);
        } catch (N) {
          Q(e, e.return, N);
        }
        try {
          Wn(5, e, e.return);
        } catch (N) {
          Q(e, e.return, N);
        }
      }
      break;
    case 1:
      Ge(t, e), Oe(e), a & 512 && n !== null && $t(n, n.return);
      break;
    case 5:
      if ((Ge(t, e), Oe(e), a & 512 && n !== null && $t(n, n.return), e.flags & 32)) {
        var r = e.stateNode;
        try {
          Rn(r, "");
        } catch (N) {
          Q(e, e.return, N);
        }
      }
      if (a & 4 && ((r = e.stateNode), r != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && ps(r, i), di(s, l);
            var m = di(s, i);
            for (l = 0; l < u.length; l += 2) {
              var v = u[l],
                _ = u[l + 1];
              v === "style" ? _s(r, _) : v === "dangerouslySetInnerHTML" ? hs(r, _) : v === "children" ? Rn(r, _) : Yi(r, v, _, m);
            }
            switch (s) {
              case "input":
                ii(r, i);
                break;
              case "textarea":
                fs(r, i);
                break;
              case "select":
                var g = r._wrapperState.wasMultiple;
                r._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? Xt(r, !!i.multiple, y, !1)
                  : g !== !!i.multiple &&
                    (i.defaultValue != null ? Xt(r, !!i.multiple, i.defaultValue, !0) : Xt(r, !!i.multiple, i.multiple ? [] : "", !1));
            }
            r[Qn] = i;
          } catch (N) {
            Q(e, e.return, N);
          }
      }
      break;
    case 6:
      if ((Ge(t, e), Oe(e), a & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        (r = e.stateNode), (i = e.memoizedProps);
        try {
          r.nodeValue = i;
        } catch (N) {
          Q(e, e.return, N);
        }
      }
      break;
    case 3:
      if ((Ge(t, e), Oe(e), a & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Vn(t.containerInfo);
        } catch (N) {
          Q(e, e.return, N);
        }
      break;
    case 4:
      Ge(t, e), Oe(e);
      break;
    case 13:
      Ge(t, e),
        Oe(e),
        (r = e.child),
        r.flags & 8192 &&
          ((i = r.memoizedState !== null),
          (r.stateNode.isHidden = i),
          !i || (r.alternate !== null && r.alternate.memoizedState !== null) || (Go = $())),
        a & 4 && Hl(e);
      break;
    case 22:
      if (
        ((v = n !== null && n.memoizedState !== null), e.mode & 1 ? ((oe = (m = oe) || v), Ge(t, e), (oe = m)) : Ge(t, e), Oe(e), a & 8192)
      ) {
        if (((m = e.memoizedState !== null), (e.stateNode.isHidden = m) && !v && (e.mode & 1) !== 0))
          for (x = e, v = e.child; v !== null; ) {
            for (_ = x = v; x !== null; ) {
              switch (((g = x), (y = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Wn(4, g, g.return);
                  break;
                case 1:
                  $t(g, g.return);
                  var b = g.stateNode;
                  if (typeof b.componentWillUnmount == "function") {
                    (a = g), (n = g.return);
                    try {
                      (t = a), (b.props = t.memoizedProps), (b.state = t.memoizedState), b.componentWillUnmount();
                    } catch (N) {
                      Q(a, n, N);
                    }
                  }
                  break;
                case 5:
                  $t(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    Vl(_);
                    continue;
                  }
              }
              y !== null ? ((y.return = g), (x = y)) : Vl(_);
            }
            v = v.sibling;
          }
        e: for (v = null, _ = e; ; ) {
          if (_.tag === 5) {
            if (v === null) {
              v = _;
              try {
                (r = _.stateNode),
                  m
                    ? ((i = r.style),
                      typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : (i.display = "none"))
                    : ((s = _.stateNode),
                      (u = _.memoizedProps.style),
                      (l = u != null && u.hasOwnProperty("display") ? u.display : null),
                      (s.style.display = gs("display", l)));
              } catch (N) {
                Q(e, e.return, N);
              }
            }
          } else if (_.tag === 6) {
            if (v === null)
              try {
                _.stateNode.nodeValue = m ? "" : _.memoizedProps;
              } catch (N) {
                Q(e, e.return, N);
              }
          } else if (((_.tag !== 22 && _.tag !== 23) || _.memoizedState === null || _ === e) && _.child !== null) {
            (_.child.return = _), (_ = _.child);
            continue;
          }
          if (_ === e) break e;
          for (; _.sibling === null; ) {
            if (_.return === null || _.return === e) break e;
            v === _ && (v = null), (_ = _.return);
          }
          v === _ && (v = null), (_.sibling.return = _.return), (_ = _.sibling);
        }
      }
      break;
    case 19:
      Ge(t, e), Oe(e), a & 4 && Hl(e);
      break;
    case 21:
      break;
    default:
      Ge(t, e), Oe(e);
  }
}
function Oe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Iu(n)) {
            var a = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (a.tag) {
        case 5:
          var r = a.stateNode;
          a.flags & 32 && (Rn(r, ""), (a.flags &= -33));
          var i = Ol(e);
          Hi(e, i, r);
          break;
        case 3:
        case 4:
          var l = a.stateNode.containerInfo,
            s = Ol(e);
          Oi(e, s, l);
          break;
        default:
          throw Error(S(161));
      }
    } catch (u) {
      Q(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function op(e, t, n) {
  (x = e), ju(e);
}
function ju(e, t, n) {
  for (var a = (e.mode & 1) !== 0; x !== null; ) {
    var r = x,
      i = r.child;
    if (r.tag === 22 && a) {
      var l = r.memoizedState !== null || Sa;
      if (!l) {
        var s = r.alternate,
          u = (s !== null && s.memoizedState !== null) || oe;
        s = Sa;
        var m = oe;
        if (((Sa = l), (oe = u) && !m))
          for (x = r; x !== null; )
            (l = x), (u = l.child), l.tag === 22 && l.memoizedState !== null ? Il(r) : u !== null ? ((u.return = l), (x = u)) : Il(r);
        for (; i !== null; ) (x = i), ju(i), (i = i.sibling);
        (x = r), (Sa = s), (oe = m);
      }
      Ll(e);
    } else (r.subtreeFlags & 8772) !== 0 && i !== null ? ((i.return = r), (x = i)) : Ll(e);
  }
}
function Ll(e) {
  for (; x !== null; ) {
    var t = x;
    if ((t.flags & 8772) !== 0) {
      var n = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              oe || mr(5, t);
              break;
            case 1:
              var a = t.stateNode;
              if (t.flags & 4 && !oe)
                if (n === null) a.componentDidMount();
                else {
                  var r = t.elementType === t.type ? n.memoizedProps : ze(t.type, n.memoizedProps);
                  a.componentDidUpdate(r, n.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && Nl(t, i, a);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Nl(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var m = t.alternate;
                if (m !== null) {
                  var v = m.memoizedState;
                  if (v !== null) {
                    var _ = v.dehydrated;
                    _ !== null && Vn(_);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(S(163));
          }
        oe || (t.flags & 512 && Ri(t));
      } catch (g) {
        Q(t, t.return, g);
      }
    }
    if (t === e) {
      x = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (x = n);
      break;
    }
    x = t.return;
  }
}
function Vl(e) {
  for (; x !== null; ) {
    var t = x;
    if (t === e) {
      x = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (x = n);
      break;
    }
    x = t.return;
  }
}
function Il(e) {
  for (; x !== null; ) {
    var t = x;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            mr(4, t);
          } catch (u) {
            Q(t, n, u);
          }
          break;
        case 1:
          var a = t.stateNode;
          if (typeof a.componentDidMount == "function") {
            var r = t.return;
            try {
              a.componentDidMount();
            } catch (u) {
              Q(t, r, u);
            }
          }
          var i = t.return;
          try {
            Ri(t);
          } catch (u) {
            Q(t, i, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Ri(t);
          } catch (u) {
            Q(t, l, u);
          }
      }
    } catch (u) {
      Q(t, t.return, u);
    }
    if (t === e) {
      x = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (x = s);
      break;
    }
    x = t.return;
  }
}
var lp = Math.ceil,
  er = Je.ReactCurrentDispatcher,
  Ao = Je.ReactCurrentOwner,
  Ee = Je.ReactCurrentBatchConfig,
  F = 0,
  ee = null,
  X = null,
  ne = 0,
  we = 0,
  qt = vt(0),
  Z = 0,
  Jn = null,
  Tt = 0,
  hr = 0,
  Co = 0,
  Fn = null,
  fe = null,
  Go = 0,
  un = 1 / 0,
  Ue = null,
  tr = !1,
  Li = null,
  pt = null,
  ya = !1,
  ot = null,
  nr = 0,
  Bn = 0,
  Vi = null,
  za = -1,
  Ta = 0;
function de() {
  return (F & 6) !== 0 ? $() : za !== -1 ? za : (za = $());
}
function ft(e) {
  return (e.mode & 1) === 0
    ? 1
    : (F & 2) !== 0 && ne !== 0
    ? ne & -ne
    : Uc.transition !== null
    ? (Ta === 0 && (Ta = As()), Ta)
    : ((e = B), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Bs(e.type))), e);
}
function Be(e, t, n, a) {
  if (50 < Bn) throw ((Bn = 0), (Vi = null), Error(S(185)));
  ta(e, n, a),
    ((F & 2) === 0 || e !== ee) &&
      (e === ee && ((F & 2) === 0 && (hr |= n), Z === 4 && rt(e, ne)),
      _e(e, a),
      n === 1 && F === 0 && (t.mode & 1) === 0 && ((un = $() + 500), cr && wt()));
}
function _e(e, t) {
  var n = e.callbackNode;
  Ud(e, t);
  var a = Oa(e, e === ee ? ne : 0);
  if (a === 0) n !== null && Zo(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = a & -a), e.callbackPriority !== t)) {
    if ((n != null && Zo(n), t === 1))
      e.tag === 0 ? Ic(Ul.bind(null, e)) : tu(Ul.bind(null, e)),
        Oc(function () {
          (F & 6) === 0 && wt();
        }),
        (n = null);
    else {
      switch (Cs(a)) {
        case 1:
          n = no;
          break;
        case 4:
          n = xs;
          break;
        case 16:
          n = Ra;
          break;
        case 536870912:
          n = Es;
          break;
        default:
          n = Ra;
      }
      n = ed(n, Qu.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Qu(e, t) {
  if (((za = -1), (Ta = 0), (F & 6) !== 0)) throw Error(S(327));
  var n = e.callbackNode;
  if (tn() && e.callbackNode !== n) return null;
  var a = Oa(e, e === ee ? ne : 0);
  if (a === 0) return null;
  if ((a & 30) !== 0 || (a & e.expiredLanes) !== 0 || t) t = ar(e, a);
  else {
    t = a;
    var r = F;
    F |= 2;
    var i = qu();
    (ee !== e || ne !== t) && ((Ue = null), (un = $() + 500), Et(e, t));
    do
      try {
        dp();
        break;
      } catch (s) {
        $u(e, s);
      }
    while (1);
    go(), (er.current = i), (F = r), X !== null ? (t = 0) : ((ee = null), (ne = 0), (t = Z));
  }
  if (t !== 0) {
    if ((t === 2 && ((r = hi(e)), r !== 0 && ((a = r), (t = Ii(e, r)))), t === 1)) throw ((n = Jn), Et(e, 0), rt(e, a), _e(e, $()), n);
    if (t === 6) rt(e, a);
    else {
      if (
        ((r = e.current.alternate),
        (a & 30) === 0 && !sp(r) && ((t = ar(e, a)), t === 2 && ((i = hi(e)), i !== 0 && ((a = i), (t = Ii(e, i)))), t === 1))
      )
        throw ((n = Jn), Et(e, 0), rt(e, a), _e(e, $()), n);
      switch (((e.finishedWork = r), (e.finishedLanes = a), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Nt(e, fe, Ue);
          break;
        case 3:
          if ((rt(e, a), (a & 130023424) === a && ((t = Go + 500 - $()), 10 < t))) {
            if (Oa(e, 0) !== 0) break;
            if (((r = e.suspendedLanes), (r & a) !== a)) {
              de(), (e.pingedLanes |= e.suspendedLanes & r);
              break;
            }
            e.timeoutHandle = bi(Nt.bind(null, e, fe, Ue), t);
            break;
          }
          Nt(e, fe, Ue);
          break;
        case 4:
          if ((rt(e, a), (a & 4194240) === a)) break;
          for (t = e.eventTimes, r = -1; 0 < a; ) {
            var l = 31 - Fe(a);
            (i = 1 << l), (l = t[l]), l > r && (r = l), (a &= ~i);
          }
          if (
            ((a = r),
            (a = $() - a),
            (a =
              (120 > a ? 120 : 480 > a ? 480 : 1080 > a ? 1080 : 1920 > a ? 1920 : 3e3 > a ? 3e3 : 4320 > a ? 4320 : 1960 * lp(a / 1960)) -
              a),
            10 < a)
          ) {
            e.timeoutHandle = bi(Nt.bind(null, e, fe, Ue), a);
            break;
          }
          Nt(e, fe, Ue);
          break;
        case 5:
          Nt(e, fe, Ue);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return _e(e, $()), e.callbackNode === n ? Qu.bind(null, e) : null;
}
function Ii(e, t) {
  var n = Fn;
  return (
    e.current.memoizedState.isDehydrated && (Et(e, t).flags |= 256), (e = ar(e, t)), e !== 2 && ((t = fe), (fe = n), t !== null && Ui(t)), e
  );
}
function Ui(e) {
  fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function sp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var a = 0; a < n.length; a++) {
          var r = n[a],
            i = r.getSnapshot;
          r = r.value;
          try {
            if (!De(i(), r)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function rt(e, t) {
  for (t &= ~Co, t &= ~hr, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Fe(t),
      a = 1 << n;
    (e[n] = -1), (t &= ~a);
  }
}
function Ul(e) {
  if ((F & 6) !== 0) throw Error(S(327));
  tn();
  var t = Oa(e, 0);
  if ((t & 1) === 0) return _e(e, $()), null;
  var n = ar(e, t);
  if (e.tag !== 0 && n === 2) {
    var a = hi(e);
    a !== 0 && ((t = a), (n = Ii(e, a)));
  }
  if (n === 1) throw ((n = Jn), Et(e, 0), rt(e, t), _e(e, $()), n);
  if (n === 6) throw Error(S(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Nt(e, fe, Ue), _e(e, $()), null;
}
function zo(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((un = $() + 500), cr && wt());
  }
}
function Wt(e) {
  ot !== null && ot.tag === 0 && (F & 6) === 0 && tn();
  var t = F;
  F |= 1;
  var n = Ee.transition,
    a = B;
  try {
    if (((Ee.transition = null), (B = 1), e)) return e();
  } finally {
    (B = a), (Ee.transition = n), (F = t), (F & 6) === 0 && wt();
  }
}
function To() {
  (we = qt.current), H(qt);
}
function Et(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Rc(n)), X !== null))
    for (n = X.return; n !== null; ) {
      var a = n;
      switch ((fo(a), a.tag)) {
        case 1:
          (a = a.type.childContextTypes), a != null && Ua();
          break;
        case 3:
          ln(), H(he), H(le), ko();
          break;
        case 5:
          yo(a);
          break;
        case 4:
          ln();
          break;
        case 13:
          H(U);
          break;
        case 19:
          H(U);
          break;
        case 10:
          _o(a.type._context);
          break;
        case 22:
        case 23:
          To();
      }
      n = n.return;
    }
  if (((ee = e), (X = e = mt(e.current, null)), (ne = we = t), (Z = 0), (Jn = null), (Co = hr = Tt = 0), (fe = Fn = null), Mt !== null)) {
    for (t = 0; t < Mt.length; t++)
      if (((n = Mt[t]), (a = n.interleaved), a !== null)) {
        n.interleaved = null;
        var r = a.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = r), (a.next = l);
        }
        n.pending = a;
      }
    Mt = null;
  }
  return e;
}
function $u(e, t) {
  do {
    var n = X;
    try {
      if ((go(), (Aa.current = Ja), Za)) {
        for (var a = K.memoizedState; a !== null; ) {
          var r = a.queue;
          r !== null && (r.pending = null), (a = a.next);
        }
        Za = !1;
      }
      if (((zt = 0), (J = Y = K = null), (Tn = !1), (Xn = 0), (Ao.current = null), n === null || n.return === null)) {
        (Z = 1), (Jn = t), (X = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          s = n,
          u = t;
        if (((t = ne), (s.flags |= 32768), u !== null && typeof u == "object" && typeof u.then == "function")) {
          var m = u,
            v = s,
            _ = v.tag;
          if ((v.mode & 1) === 0 && (_ === 0 || _ === 11 || _ === 15)) {
            var g = v.alternate;
            g
              ? ((v.updateQueue = g.updateQueue), (v.memoizedState = g.memoizedState), (v.lanes = g.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var y = Gl(l);
          if (y !== null) {
            (y.flags &= -257), zl(y, l, s, i, t), y.mode & 1 && Cl(i, m, t), (t = y), (u = m);
            var b = t.updateQueue;
            if (b === null) {
              var N = new Set();
              N.add(u), (t.updateQueue = N);
            } else b.add(u);
            break e;
          } else {
            if ((t & 1) === 0) {
              Cl(i, m, t), Wo();
              break e;
            }
            u = Error(S(426));
          }
        } else if (L && s.mode & 1) {
          var D = Gl(l);
          if (D !== null) {
            (D.flags & 65536) === 0 && (D.flags |= 256), zl(D, l, s, i, t), mo(sn(u, s));
            break e;
          }
        }
        (i = u = sn(u, s)), Z !== 4 && (Z = 2), Fn === null ? (Fn = [i]) : Fn.push(i), (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = Gu(i, u, t);
              bl(i, p);
              break e;
            case 1:
              s = u;
              var c = i.type,
                h = i.stateNode;
              if (
                (i.flags & 128) === 0 &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (h !== null && typeof h.componentDidCatch == "function" && (pt === null || !pt.has(h))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var w = zu(i, s, t);
                bl(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Yu(n);
    } catch (P) {
      (t = P), X === n && n !== null && (X = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function qu() {
  var e = er.current;
  return (er.current = Ja), e === null ? Ja : e;
}
function Wo() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4), ee === null || ((Tt & 268435455) === 0 && (hr & 268435455) === 0) || rt(ee, ne);
}
function ar(e, t) {
  var n = F;
  F |= 2;
  var a = qu();
  (ee !== e || ne !== t) && ((Ue = null), Et(e, t));
  do
    try {
      up();
      break;
    } catch (r) {
      $u(e, r);
    }
  while (1);
  if ((go(), (F = n), (er.current = a), X !== null)) throw Error(S(261));
  return (ee = null), (ne = 0), Z;
}
function up() {
  for (; X !== null; ) Xu(X);
}
function dp() {
  for (; X !== null && !Fd(); ) Xu(X);
}
function Xu(e) {
  var t = Ju(e.alternate, e, we);
  (e.memoizedProps = e.pendingProps), t === null ? Yu(e) : (X = t), (Ao.current = null);
}
function Yu(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((n = np(n, t, we)), n !== null)) {
        X = n;
        return;
      }
    } else {
      if (((n = ap(n, t)), n !== null)) {
        (n.flags &= 32767), (X = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Z = 6), (X = null);
        return;
      }
    }
    if (((t = t.sibling), t !== null)) {
      X = t;
      return;
    }
    X = t = e;
  } while (t !== null);
  Z === 0 && (Z = 5);
}
function Nt(e, t, n) {
  var a = B,
    r = Ee.transition;
  try {
    (Ee.transition = null), (B = 1), cp(e, t, n, a);
  } finally {
    (Ee.transition = r), (B = a);
  }
  return null;
}
function cp(e, t, n, a) {
  do tn();
  while (ot !== null);
  if ((F & 6) !== 0) throw Error(S(327));
  n = e.finishedWork;
  var r = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(S(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Kd(e, i),
    e === ee && ((X = ee = null), (ne = 0)),
    ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
      ya ||
      ((ya = !0),
      ed(Ra, function () {
        return tn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    (n.subtreeFlags & 15990) !== 0 || i)
  ) {
    (i = Ee.transition), (Ee.transition = null);
    var l = B;
    B = 1;
    var s = F;
    (F |= 4),
      (Ao.current = null),
      ip(e, n),
      Ku(n, e),
      Gc(yi),
      (Ha = !!Si),
      (yi = Si = null),
      (e.current = n),
      op(n),
      Bd(),
      (F = s),
      (B = l),
      (Ee.transition = i);
  } else e.current = n;
  if ((ya && ((ya = !1), (ot = e), (nr = r)), (i = e.pendingLanes), i === 0 && (pt = null), Od(n.stateNode), _e(e, $()), t !== null))
    for (a = e.onRecoverableError, n = 0; n < t.length; n++) (r = t[n]), a(r.value, {componentStack: r.stack, digest: r.digest});
  if (tr) throw ((tr = !1), (e = Li), (Li = null), e);
  return (
    (nr & 1) !== 0 && e.tag !== 0 && tn(),
    (i = e.pendingLanes),
    (i & 1) !== 0 ? (e === Vi ? Bn++ : ((Bn = 0), (Vi = e))) : (Bn = 0),
    wt(),
    null
  );
}
function tn() {
  if (ot !== null) {
    var e = Cs(nr),
      t = Ee.transition,
      n = B;
    try {
      if (((Ee.transition = null), (B = 16 > e ? 16 : e), ot === null)) var a = !1;
      else {
        if (((e = ot), (ot = null), (nr = 0), (F & 6) !== 0)) throw Error(S(331));
        var r = F;
        for (F |= 4, x = e.current; x !== null; ) {
          var i = x,
            l = i.child;
          if ((x.flags & 16) !== 0) {
            var s = i.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var m = s[u];
                for (x = m; x !== null; ) {
                  var v = x;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wn(8, v, i);
                  }
                  var _ = v.child;
                  if (_ !== null) (_.return = v), (x = _);
                  else
                    for (; x !== null; ) {
                      v = x;
                      var g = v.sibling,
                        y = v.return;
                      if ((Vu(v), v === m)) {
                        x = null;
                        break;
                      }
                      if (g !== null) {
                        (g.return = y), (x = g);
                        break;
                      }
                      x = y;
                    }
                }
              }
              var b = i.alternate;
              if (b !== null) {
                var N = b.child;
                if (N !== null) {
                  b.child = null;
                  do {
                    var D = N.sibling;
                    (N.sibling = null), (N = D);
                  } while (N !== null);
                }
              }
              x = i;
            }
          }
          if ((i.subtreeFlags & 2064) !== 0 && l !== null) (l.return = i), (x = l);
          else
            e: for (; x !== null; ) {
              if (((i = x), (i.flags & 2048) !== 0))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Wn(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (x = p);
                break e;
              }
              x = i.return;
            }
        }
        var c = e.current;
        for (x = c; x !== null; ) {
          l = x;
          var h = l.child;
          if ((l.subtreeFlags & 2064) !== 0 && h !== null) (h.return = l), (x = h);
          else
            e: for (l = c; x !== null; ) {
              if (((s = x), (s.flags & 2048) !== 0))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mr(9, s);
                  }
                } catch (P) {
                  Q(s, s.return, P);
                }
              if (s === l) {
                x = null;
                break e;
              }
              var w = s.sibling;
              if (w !== null) {
                (w.return = s.return), (x = w);
                break e;
              }
              x = s.return;
            }
        }
        if (((F = r), wt(), Ve && typeof Ve.onPostCommitFiberRoot == "function"))
          try {
            Ve.onPostCommitFiberRoot(or, e);
          } catch {}
        a = !0;
      }
      return a;
    } finally {
      (B = n), (Ee.transition = t);
    }
  }
  return !1;
}
function Kl(e, t, n) {
  (t = sn(n, t)), (t = Gu(e, t, 1)), (e = ct(e, t, 1)), (t = de()), e !== null && (ta(e, 1, t), _e(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) Kl(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Kl(t, e, n);
        break;
      } else if (t.tag === 1) {
        var a = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof a.componentDidCatch == "function" && (pt === null || !pt.has(a)))
        ) {
          (e = sn(n, e)), (e = zu(t, e, 1)), (t = ct(t, e, 1)), (e = de()), t !== null && (ta(t, 1, e), _e(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function pp(e, t, n) {
  var a = e.pingCache;
  a !== null && a.delete(t),
    (t = de()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ee === e && (ne & n) === n && (Z === 4 || (Z === 3 && (ne & 130023424) === ne && 500 > $() - Go) ? Et(e, 0) : (Co |= n)),
    _e(e, t);
}
function Zu(e, t) {
  t === 0 && ((e.mode & 1) === 0 ? (t = 1) : ((t = ca), (ca <<= 1), (ca & 130023424) === 0 && (ca = 4194304)));
  var n = de();
  (e = Ye(e, t)), e !== null && (ta(e, t, n), _e(e, n));
}
function fp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Zu(e, n);
}
function mp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var a = e.stateNode,
        r = e.memoizedState;
      r !== null && (n = r.retryLane);
      break;
    case 19:
      a = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  a !== null && a.delete(t), Zu(e, n);
}
var Ju;
Ju = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || he.current) me = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return (me = !1), tp(e, t, n);
      me = (e.flags & 131072) !== 0;
    }
  else (me = !1), L && (t.flags & 1048576) !== 0 && nu(t, Qa, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var a = t.type;
      Ga(e, t), (e = t.pendingProps);
      var r = an(t, le.current);
      en(t, n), (r = No(null, t, a, e, r, n));
      var i = Po();
      return (
        (t.flags |= 1),
        typeof r == "object" && r !== null && typeof r.render == "function" && r.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ge(a) ? ((i = !0), Ka(t)) : (i = !1),
            (t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null),
            wo(t),
            (r.updater = pr),
            (t.stateNode = r),
            (r._reactInternals = t),
            Ci(t, a, e, n),
            (t = Ti(null, t, a, !0, i, n)))
          : ((t.tag = 0), L && i && po(t), ue(null, t, r, n), (t = t.child)),
        t
      );
    case 16:
      a = t.elementType;
      e: {
        switch (
          (Ga(e, t), (e = t.pendingProps), (r = a._init), (a = r(a._payload)), (t.type = a), (r = t.tag = gp(a)), (e = ze(a, e)), r)
        ) {
          case 0:
            t = zi(null, t, a, e, n);
            break e;
          case 1:
            t = Fl(null, t, a, e, n);
            break e;
          case 11:
            t = Tl(null, t, a, e, n);
            break e;
          case 14:
            t = Wl(null, t, a, ze(a.type, e), n);
            break e;
        }
        throw Error(S(306, a, ""));
      }
      return t;
    case 0:
      return (a = t.type), (r = t.pendingProps), (r = t.elementType === a ? r : ze(a, r)), zi(e, t, a, r, n);
    case 1:
      return (a = t.type), (r = t.pendingProps), (r = t.elementType === a ? r : ze(a, r)), Fl(e, t, a, r, n);
    case 3:
      e: {
        if ((Bu(t), e === null)) throw Error(S(387));
        (a = t.pendingProps), (i = t.memoizedState), (r = i.element), ou(e, t), Xa(t, a, null, n);
        var l = t.memoizedState;
        if (((a = l.element), i.isDehydrated))
          if (
            ((i = {
              element: a,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (r = sn(Error(S(423)), t)), (t = Bl(e, t, a, n, r));
            break e;
          } else if (a !== r) {
            (r = sn(Error(S(424)), t)), (t = Bl(e, t, a, n, r));
            break e;
          } else
            for (Se = dt(t.stateNode.containerInfo.firstChild), ye = t, L = !0, We = null, n = du(t, null, a, n), t.child = n; n; )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((rn(), a === r)) {
            t = Ze(e, t, n);
            break e;
          }
          ue(e, t, a, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        cu(t),
        e === null && xi(t),
        (a = t.type),
        (r = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = r.children),
        ki(a, r) ? (l = null) : i !== null && ki(a, i) && (t.flags |= 32),
        Fu(e, t),
        ue(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && xi(t), null;
    case 13:
      return Du(e, t, n);
    case 4:
      return So(t, t.stateNode.containerInfo), (a = t.pendingProps), e === null ? (t.child = on(t, null, a, n)) : ue(e, t, a, n), t.child;
    case 11:
      return (a = t.type), (r = t.pendingProps), (r = t.elementType === a ? r : ze(a, r)), Tl(e, t, a, r, n);
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((a = t.type._context),
          (r = t.pendingProps),
          (i = t.memoizedProps),
          (l = r.value),
          R($a, a._currentValue),
          (a._currentValue = l),
          i !== null)
        )
          if (De(i.value, l)) {
            if (i.children === r.children && !he.current) {
              t = Ze(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                l = i.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === a) {
                    if (i.tag === 1) {
                      (u = $e(-1, n & -n)), (u.tag = 2);
                      var m = i.updateQueue;
                      if (m !== null) {
                        m = m.shared;
                        var v = m.pending;
                        v === null ? (u.next = u) : ((u.next = v.next), (v.next = u)), (m.pending = u);
                      }
                    }
                    (i.lanes |= n), (u = i.alternate), u !== null && (u.lanes |= n), Ei(i.return, n, t), (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(S(341));
                (l.lanes |= n), (s = l.alternate), s !== null && (s.lanes |= n), Ei(l, n, t), (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        ue(e, t, r.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (r = t.type), (a = t.pendingProps.children), en(t, n), (r = Ae(r)), (a = a(r)), (t.flags |= 1), ue(e, t, a, n), t.child;
    case 14:
      return (a = t.type), (r = ze(a, t.pendingProps)), (r = ze(a.type, r)), Wl(e, t, a, r, n);
    case 15:
      return Tu(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (a = t.type),
        (r = t.pendingProps),
        (r = t.elementType === a ? r : ze(a, r)),
        Ga(e, t),
        (t.tag = 1),
        ge(a) ? ((e = !0), Ka(t)) : (e = !1),
        en(t, n),
        su(t, a, r),
        Ci(t, a, r, n),
        Ti(null, t, a, !0, e, n)
      );
    case 19:
      return Ru(e, t, n);
    case 22:
      return Wu(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function ed(e, t) {
  return Ms(e, t);
}
function hp(e, t, n, a) {
  (this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = a),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function xe(e, t, n, a) {
  return new hp(e, t, n, a);
}
function Fo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function gp(e) {
  if (typeof e == "function") return Fo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ji)) return 11;
    if (e === eo) return 14;
  }
  return 2;
}
function mt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = xe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : {lanes: t.lanes, firstContext: t.firstContext}),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Wa(e, t, n, a, r, i) {
  var l = 2;
  if (((a = e), typeof e == "function")) Fo(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Ot:
        return At(n.children, r, i, t);
      case Zi:
        (l = 8), (r |= 8);
        break;
      case ei:
        return (e = xe(12, n, t, r | 2)), (e.elementType = ei), (e.lanes = i), e;
      case ti:
        return (e = xe(13, n, t, r)), (e.elementType = ti), (e.lanes = i), e;
      case ni:
        return (e = xe(19, n, t, r)), (e.elementType = ni), (e.lanes = i), e;
      case us:
        return gr(n, r, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ls:
              l = 10;
              break e;
            case ss:
              l = 9;
              break e;
            case Ji:
              l = 11;
              break e;
            case eo:
              l = 14;
              break e;
            case tt:
              (l = 16), (a = null);
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
  return (t = xe(l, n, t, r)), (t.elementType = e), (t.type = a), (t.lanes = i), t;
}
function At(e, t, n, a) {
  return (e = xe(7, e, a, t)), (e.lanes = n), e;
}
function gr(e, t, n, a) {
  return (e = xe(22, e, a, t)), (e.elementType = us), (e.lanes = n), (e.stateNode = {isHidden: !1}), e;
}
function Xr(e, t, n) {
  return (e = xe(6, e, null, t)), (e.lanes = n), e;
}
function Yr(e, t, n) {
  return (
    (t = xe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation}),
    t
  );
}
function _p(e, t, n, a, r) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Gr(0)),
    (this.expirationTimes = Gr(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Gr(0)),
    (this.identifierPrefix = a),
    (this.onRecoverableError = r),
    (this.mutableSourceEagerHydrationData = null);
}
function Bo(e, t, n, a, r, i, l, s, u) {
  return (
    (e = new _p(e, t, n, s, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = xe(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {element: a, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null}),
    wo(i),
    e
  );
}
function vp(e, t, n) {
  var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {$$typeof: Rt, key: a == null ? null : "" + a, children: e, containerInfo: t, implementation: n};
}
function td(e) {
  if (!e) return gt;
  e = e._reactInternals;
  e: {
    if (Bt(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ge(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ge(n)) return eu(e, n, t);
  }
  return t;
}
function nd(e, t, n, a, r, i, l, s, u) {
  return (
    (e = Bo(n, a, !0, e, r, i, l, s, u)),
    (e.context = td(null)),
    (n = e.current),
    (a = de()),
    (r = ft(n)),
    (i = $e(a, r)),
    (i.callback = t != null ? t : null),
    ct(n, i, r),
    (e.current.lanes = r),
    ta(e, r, a),
    _e(e, a),
    e
  );
}
function _r(e, t, n, a) {
  var r = t.current,
    i = de(),
    l = ft(r);
  return (
    (n = td(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = $e(i, l)),
    (t.payload = {element: e}),
    (a = a === void 0 ? null : a),
    a !== null && (t.callback = a),
    (e = ct(r, t, l)),
    e !== null && (Be(e, r, l, i), Ea(e, r, l)),
    l
  );
}
function rr(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function jl(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Do(e, t) {
  jl(e, t), (e = e.alternate) && jl(e, t);
}
function wp() {
  return null;
}
var ad =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ro(e) {
  this._internalRoot = e;
}
vr.prototype.render = Ro.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  _r(e, t, null, null);
};
vr.prototype.unmount = Ro.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Wt(function () {
      _r(null, e, null, null);
    }),
      (t[Xe] = null);
  }
};
function vr(e) {
  this._internalRoot = e;
}
vr.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ts();
    e = {blockedOn: null, target: e, priority: t};
    for (var n = 0; n < at.length && t !== 0 && t < at[n].priority; n++);
    at.splice(n, 0, e), n === 0 && Fs(e);
  }
};
function Oo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function wr(e) {
  return !(
    !e ||
    (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ql() {}
function Sp(e, t, n, a, r) {
  if (r) {
    if (typeof a == "function") {
      var i = a;
      a = function () {
        var m = rr(l);
        i.call(m);
      };
    }
    var l = nd(t, a, e, 0, null, !1, !1, "", Ql);
    return (e._reactRootContainer = l), (e[Xe] = l.current), Kn(e.nodeType === 8 ? e.parentNode : e), Wt(), l;
  }
  for (; (r = e.lastChild); ) e.removeChild(r);
  if (typeof a == "function") {
    var s = a;
    a = function () {
      var m = rr(u);
      s.call(m);
    };
  }
  var u = Bo(e, 0, !1, null, null, !1, !1, "", Ql);
  return (
    (e._reactRootContainer = u),
    (e[Xe] = u.current),
    Kn(e.nodeType === 8 ? e.parentNode : e),
    Wt(function () {
      _r(t, u, n, a);
    }),
    u
  );
}
function Sr(e, t, n, a, r) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = rr(l);
        s.call(u);
      };
    }
    _r(t, l, e, r);
  } else l = Sp(n, t, e, r, a);
  return rr(l);
}
Gs = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Mn(t.pendingLanes);
        n !== 0 && (ao(t, n | 1), _e(t, $()), (F & 6) === 0 && ((un = $() + 500), wt()));
      }
      break;
    case 13:
      Wt(function () {
        var a = Ye(e, 1);
        if (a !== null) {
          var r = de();
          Be(a, e, 1, r);
        }
      }),
        Do(e, 1);
  }
};
ro = function (e) {
  if (e.tag === 13) {
    var t = Ye(e, 134217728);
    if (t !== null) {
      var n = de();
      Be(t, e, 134217728, n);
    }
    Do(e, 134217728);
  }
};
zs = function (e) {
  if (e.tag === 13) {
    var t = ft(e),
      n = Ye(e, t);
    if (n !== null) {
      var a = de();
      Be(n, e, t, a);
    }
    Do(e, t);
  }
};
Ts = function () {
  return B;
};
Ws = function (e, t) {
  var n = B;
  try {
    return (B = e), t();
  } finally {
    B = n;
  }
};
pi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ii(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var a = n[t];
          if (a !== e && a.form === e.form) {
            var r = dr(a);
            if (!r) throw Error(S(90));
            cs(a), ii(a, r);
          }
        }
      }
      break;
    case "textarea":
      fs(e, n);
      break;
    case "select":
      (t = n.value), t != null && Xt(e, !!n.multiple, t, !1);
  }
};
Ss = zo;
ys = Wt;
var yp = {usingClientEntryPoint: !1, Events: [aa, It, dr, vs, ws, zo]},
  bn = {findFiberByHostInstance: Pt, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom"},
  kp = {
    bundleType: bn.bundleType,
    version: bn.version,
    rendererPackageName: bn.rendererPackageName,
    rendererConfig: bn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Je.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ns(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: bn.findFiberByHostInstance || wp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ka = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ka.isDisabled && ka.supportsFiber)
    try {
      (or = ka.inject(kp)), (Ve = ka);
    } catch {}
}
be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yp;
be.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Oo(t)) throw Error(S(200));
  return vp(e, t, null, n);
};
be.createRoot = function (e, t) {
  if (!Oo(e)) throw Error(S(299));
  var n = !1,
    a = "",
    r = ad;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (r = t.onRecoverableError)),
    (t = Bo(e, 1, !1, null, null, n, !1, a, r)),
    (e[Xe] = t.current),
    Kn(e.nodeType === 8 ? e.parentNode : e),
    new Ro(t)
  );
};
be.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == "function" ? Error(S(188)) : ((e = Object.keys(e).join(",")), Error(S(268, e)));
  return (e = Ns(t)), (e = e === null ? null : e.stateNode), e;
};
be.flushSync = function (e) {
  return Wt(e);
};
be.hydrate = function (e, t, n) {
  if (!wr(t)) throw Error(S(200));
  return Sr(null, e, t, !0, n);
};
be.hydrateRoot = function (e, t, n) {
  if (!Oo(e)) throw Error(S(405));
  var a = (n != null && n.hydratedSources) || null,
    r = !1,
    i = "",
    l = ad;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (r = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = nd(t, null, e, 1, n != null ? n : null, r, !1, i, l)),
    (e[Xe] = t.current),
    Kn(e),
    a)
  )
    for (e = 0; e < a.length; e++)
      (n = a[e]),
        (r = n._getVersion),
        (r = r(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, r])
          : t.mutableSourceEagerHydrationData.push(n, r);
  return new vr(t);
};
be.render = function (e, t, n) {
  if (!wr(t)) throw Error(S(200));
  return Sr(null, e, t, !1, n);
};
be.unmountComponentAtNode = function (e) {
  if (!wr(e)) throw Error(S(40));
  return e._reactRootContainer
    ? (Wt(function () {
        Sr(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Xe] = null);
        });
      }),
      !0)
    : !1;
};
be.unstable_batchedUpdates = zo;
be.unstable_renderSubtreeIntoContainer = function (e, t, n, a) {
  if (!wr(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Sr(e, t, n, !1, a);
};
be.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = be);
})(ns);
var $l = ns.exports;
(Zr.createRoot = $l.createRoot), (Zr.hydrateRoot = $l.hydrateRoot);
const bp = [
    {
      id: "1",
      linha: "ap",
      modelo: "AP 310",
      garantia: "1 ano",
      cobertura: "200 m\xB2",
      raio: "7,98 m",
      usuarioMax: "100 usu\xE1rios",
      qtdePortas: "1",
      status: "Suporte",
      porta: "Fast",
      throughputWireless24: "300Mbps (2x2)",
      throughputWireless50: "",
      ganho: "3dBi (2,4GHz)",
      potenciaMax: "100mW (2,4GHz)",
      tensao: "12V | 24V (PADR\xC3O B)",
      poe: "",
      distancia: "30m",
      consumo: "12 W",
      wisefi: "Sim",
      handover: "N\xE3o",
      pagina: "https://www.intelbras.com/pt-br/access-point-corporativo-com-gerenciamento-centralizado-ap-310",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-07/Datasheet_AP_310_07.22.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2021-03/Guia_instalacao_A6_AP%20310_360_01-21_site.pdf",
      manual: "https://manual-zeus-os.intelbras.com.br/",
    },
    {
      id: "2",
      linha: "ap",
      modelo: "AP 360",
      garantia: "1 ano",
      cobertura: "400 m\xB2",
      raio: "11,2 m",
      usuarioMax: "100 usu\xE1rios",
      qtdePortas: "1",
      status: "Suporte",
      porta: "Fast",
      throughputWireless24: "300Mbps (2x2)",
      throughputWireless50: "",
      ganho: "3dBi (2,4GHz)",
      potenciaMax: "630mW (2,4GHz)",
      tensao: "12V | 24V (PADR\xC3O B)",
      poe: "",
      distancia: "30m",
      consumo: "12 W",
      wisefi: "Sim",
      handover: "N\xE3o",
      pagina: "https://www.intelbras.com/pt-br/access-point-corporativo-com-gerenciamento-centralizado-ap-360",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-07/Datasheet_AP_360_07.22_V3.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2021-03/Guia_instalacao_A6_AP%20310_360_01-21_site.pdf",
      manual: "https://manual-zeus-os.intelbras.com.br/",
    },
    {
      id: "3",
      linha: "ap",
      modelo: "BSPRO 360",
      garantia: "1 ano",
      cobertura: "400 m\xB2",
      raio: "11,2 m",
      usuarioMax: "100 usu\xE1rios",
      qtdePortas: "1",
      status: "Suporte",
      porta: "Fast",
      throughputWireless24: "300Mbps (2x2)",
      throughputWireless50: "",
      ganho: "3dBi (2,4GHz)",
      potenciaMax: "630mW (2,4GHz)",
      tensao: "12V | 24V (PADR\xC3O B)",
      poe: "",
      distancia: "30m",
      consumo: "12 W",
      wisefi: "Sim",
      handover: "N\xE3o",
      pagina: "https://www.intelbras.com/pt-br/access-point-wi-fi-4-para-negocios-bspro-360",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-07/Datasheet%20BSPRO360.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2021-08/Guia_BSPRO_360_01-21_site.pdf",
      manual: "https://manual-zeus-os.intelbras.com.br/",
    },
    {
      id: "4",
      linha: "ap",
      modelo: "AP 1350 AC",
      garantia: "1 ano",
      cobertura: "350 m\xB2",
      raio: "10,52 m",
      usuarioMax: "350 usu\xE1rios",
      qtdePortas: "1",
      status: "Suporte",
      porta: "Giga",
      throughputWireless24: "450Mbps (3x3) ",
      throughputWireless50: "886Mbps (2x2)",
      ganho: "4dBi(2,4GHz) | 5dBi (5,0GHz)",
      potenciaMax: "158mW(2,4GHz) | 251mW (5,0GHz)",
      tensao: "24V (PADR\xC3O B)",
      poe: "PoE 802.3af/A",
      distancia: "CAT 5E(50m) e CAT 6(95m)",
      consumo: "12 W",
      wisefi: "Sim",
      handover: "Sim",
      pagina: "https://www.intelbras.com/pt-br/access-point-dual-band-ac-de-alta-velocidade-ap-1350-ac",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-07/Datasheet_AP_1350_AC_07-22.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2021-02/Guia_AP_1350_1750_01-21_site.pdf",
      manual: "https://manual-zeus-os.intelbras.com.br/",
    },
    {
      id: "5",
      linha: "ap",
      modelo: "AP 1350 AC-S",
      garantia: "1 ano",
      cobertura: "350 m\xB2",
      raio: "10,52 m",
      usuarioMax: "350 usu\xE1rios",
      qtdePortas: "1",
      status: "Suporte",
      porta: "Giga",
      throughputWireless24: "450Mbps (3x3) ",
      throughputWireless50: "886Mbps (2x2)",
      ganho: "4dBi(2,4GHz) | 4dBi (5,0GHz)",
      potenciaMax: "398mW(2,4GHz) | 158mW (5,0GHz)",
      tensao: "48V / 12 VDC (Fonte P4)",
      poe: "PoE 802.3at",
      distancia: "CAT 5E(50m) e CAT 6(95m)",
      consumo: "13.5 W",
      wisefi: "Sim",
      handover: "Sim",
      pagina: "https://www.intelbras.com/pt-br/access-point-dual-band-ac-de-alta-velocidade-ap-1350-ac-s",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-07/Datasheet_AP_1350_AC-S_07.22.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-10/Manua_AP_1350_ACS_01-22_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-10/Manual%20AP%201350%20AC%20-%20S.pdf",
    },
    {
      id: "6",
      linha: "ap",
      modelo: "BSPRO 1350 AC",
      garantia: "1 ano",
      cobertura: "350 m\xB2",
      raio: "10,52 m",
      usuarioMax: "350 usu\xE1rios",
      qtdePortas: "1",
      status: "Suporte",
      porta: "Giga",
      throughputWireless24: "450Mbps (3x3) ",
      throughputWireless50: "886Mbps (2x2)",
      ganho: "4dBi(2,4GHz) | 5dBi (5,0GHz)",
      potenciaMax: "158mW(2,4GHz) | 251mW (5,0GHz)",
      tensao: "24V (PADR\xC3O B)",
      poe: "PoE 802.3af/A",
      distancia: "CAT 5E(50m) e CAT 6(95m)",
      consumo: "12 W",
      wisefi: "Sim",
      handover: "Sim",
      pagina: "https://www.intelbras.com/pt-br/access-point-wi-fi-5-para-negocios-bspro-1350",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-07/Datasheet%20BSPRO%201350.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2021-08/Guia_BSPRO_1350_01-21_site.pdf",
      manual: "https://manual-zeus-os.intelbras.com.br/",
    },
    {
      id: "7",
      linha: "ap",
      modelo: "BSPRO 1350 AC-S",
      garantia: "1 ano",
      cobertura: "350 m\xB2",
      raio: "10,52 m",
      usuarioMax: "350 usu\xE1rios",
      qtdePortas: "1",
      status: "Suporte",
      porta: "Giga",
      throughputWireless24: "450Mbps (3x3) ",
      throughputWireless50: "886Mbps (2x2)",
      ganho: "4dBi(2,4GHz) | 4dBi (5,0GHz)",
      potenciaMax: "398mW(2,4GHz) | 158mW (5,0GHz)",
      tensao: "48V / 12 VDC (Fonte P4)",
      poe: "PoE 802.3at",
      distancia: "CAT 5E(50m) e CAT 6(95m)",
      consumo: "13.5 W",
      wisefi: "N\xE3o",
      handover: "Sim",
      pagina: "https://www.intelbras.com/pt-br/access-point-wi-fi-5-para-negocios-bspro-1350-s",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-05/datasheet-bspro-1350-s.pdf",
      guia: "",
      manual: "https://backend.intelbras.com/sites/default/files/2022-05/manual-do-usuario-bspro-1350-s.pdf",
    },
    {
      id: "8",
      linha: "ap",
      modelo: "AP 1250 AC MAX",
      garantia: "1 ano",
      cobertura: "450m\xB2",
      raio: "11,97 m",
      usuarioMax: "350 usu\xE1rios",
      qtdePortas: "2 (WAN E LAN)",
      status: "Suporte",
      porta: "Giga",
      throughputWireless24: "300Mbps (2x2)",
      throughputWireless50: "886Mbps (2x2)",
      ganho: "3dBi(2,4GHz) | 4dBi (5,0GHz)",
      potenciaMax: "630mW(2,4GHz) | 501mW (5,0GHz)",
      tensao: "48V / 12 VDC (Fonte P4)",
      poe: "PoE 802.3at",
      distancia: "CAT 5E(50m) e CAT 6(95m)",
      consumo: "15 W",
      wisefi: "Sim",
      handover: "Sim",
      pagina: "https://www.intelbras.com/pt-br/access-point-dual-band-ac-de-alta-potencia-ap-1250-ac-max",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-07/Datasheet_AP_1250_AC_MAX_PT_07.22.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-05/Guia_AP_1250AC_Max_01-22_site_1.pdf",
      manual: "https://manual-zeus-os.intelbras.com.br/",
    },
    {
      id: "9",
      linha: "ap",
      modelo: "AP 1250 AC OUTDOOR",
      garantia: "1 ano",
      cobertura: "400m\xB2",
      raio: "11,2m",
      usuarioMax: "350 usu\xE1rios",
      qtdePortas: "2 (WAN E LAN)",
      status: "Suporte",
      porta: "Giga",
      throughputWireless24: "300Mbps (2x2)",
      throughputWireless50: "886Mbps (2x2)",
      ganho: "5dBi (2.4GHz) | 5dBi (5GHz)",
      potenciaMax: "398mW(2,4GHz) | 398mW (5,0GHz)",
      tensao: "48V / 12 VDC (Fonte P4)",
      poe: "PoE 802.3at",
      distancia: "CAT 5E(50m) e CAT 6(95m)",
      consumo: "20 W",
      wisefi: "Sim",
      handover: "Sim",
      pagina: "https://www.intelbras.com/pt-br/access-point-dual-band-ac-outdoor-ap-1250-ac-outdoor",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-08/datasheet-ap-1250-ac-outdoor-pt.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-10/Guia_AP_1250AC_Outdoor_03-22_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-08/manual-do-usuario-ap-1250-ac-outdoor-pt.pdf",
    },
    {
      id: "10",
      linha: "ap",
      modelo: "AP 1750 AC",
      garantia: "1 ano",
      cobertura: "350 m\xB2",
      raio: "10,52 m",
      usuarioMax: "500 usu\xE1rios",
      qtdePortas: "2 (WAN E LAN)",
      status: "Suporte",
      porta: "Giga",
      throughputWireless24: "450Mbps (3x3) ",
      throughputWireless50: "1300Mbps (3x3)",
      ganho: "4dBi(2,4GHz) | 5dBi (5,0GHz)",
      potenciaMax: "251mW(2,4Ghz) | 251mW (5,0GHz)",
      tensao: "48V (PADR\xC3O B)",
      poe: "PoE 802.3af/A-B",
      distancia: "CAT 5E(50m) e CAT 6(95m)",
      consumo: "13 W",
      wisefi: "Sim",
      handover: "Sim",
      pagina: "https://www.intelbras.com/pt-br/access-point-dual-band-ac-de-alta-velocidade-ap-1750-ac",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-07/Datasheet_AP_1750_AC_07.22.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2021-02/Guia_AP_1350_1750_01-21_site.pdf",
      manual: "https://manual-zeus-os.intelbras.com.br/",
    },
    {
      id: "11",
      linha: "ap",
      modelo: "AP 1210 AC",
      garantia: "1 ano",
      cobertura: "200 m\xB2",
      raio: "7,98 m",
      usuarioMax: "200 usu\xE1rios",
      qtdePortas: "1",
      status: "Suporte",
      porta: "Giga",
      throughputWireless24: "300Mbps (2x2)",
      throughputWireless50: "886Mbps (2x2)",
      ganho: "3dBi(2,4GHz) | 3dBi (5,0GHz)",
      potenciaMax: "125mW(2,4GHz) | 125mW (5,0GHz)",
      tensao: "48V (PADR\xC3O B)",
      poe: "PoE 802.3af/A-B",
      distancia: "CAT 5E(50m) e CAT 6(95m)",
      consumo: "12 W",
      wisefi: "Sim",
      handover: "Sim",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/access-point-corporativo-dual-band-ac-ap-1210-ac",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-09/AP1210AC-2.9.19.zip",
      guia: "https://backend.intelbras.com/sites/default/files/2019-05/Guia_de_instalacao_AP_1210_AC_Lite_01-19.pdf",
      manual: "https://manual-zeus-os.intelbras.com.br/",
    },
    {
      id: "12",
      linha: "ap",
      modelo: "HOTSPOT 300",
      garantia: "1 ano",
      cobertura: "300 m\xB2",
      raio: "9,77 m",
      usuarioMax: "60 usu\xE1rios",
      qtdePortas: "2 (WAN E LAN)",
      status: "Suporte",
      porta: "Fast",
      throughputWireless24: "300Mbps (2x2)",
      throughputWireless50: "",
      ganho: "5dBi (2,4GHz)",
      potenciaMax: "500 mW (2,4GHz)",
      tensao: "12V | 24V (PADR\xC3O B)",
      poe: "",
      distancia: "30m",
      consumo: "6 W",
      wisefi: "N\xE3o",
      handover: "N\xE3o",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/roteador-wireless-com-ferramenta-de-marketing-hotspot-300",
      datasheet: "https://backend.intelbras.com/sites/default/files/2020-01/Datasheet_HotSpot_300_02-19.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_a6_hotspot_300_espanhol_01-17_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2020-02/Manual-del-usuario-HotSpot-300-01.20_0.pdf",
    },
    {
      id: "13",
      linha: "ap",
      modelo: "AP 300",
      garantia: "1 ano",
      cobertura: "300 m\xB2",
      raio: "9,77 m",
      usuarioMax: "100 usu\xE1rios",
      qtdePortas: "1",
      status: "Phaseout",
      porta: "Fast",
      throughputWireless24: "300Mbps (2x2)",
      throughputWireless50: "",
      ganho: "5dBi (2,4GHz)",
      potenciaMax: "500mW (2,4GHz)",
      tensao: "12V | 24V (PADR\xC3O B)",
      poe: "",
      distancia: "30m",
      consumo: "6 W",
      wisefi: "N\xE3o",
      handover: "N\xE3o",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/download/access-point-corporativo-com-gerenciamento-centralizado-ap-300",
      datasheet: "https://backend.intelbras.com/sites/default/files/2019-04/Datasheet_AP_300_01-19_Zeus%20OS.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2019-04/Guia_AP_300_portugues_01-19-ZeusOS.pdf",
      manual:
        "https://backend.intelbras.com/sites/default/files/2019-05/Manual_do_usuario_Zeus_OS_AP_300_e_HotSpot_300_AP_310_AP_360_AP_1210AC_02-19_site.pdf",
    },
  ],
  Np = [
    {
      id: "1",
      linha: "conversor",
      modelo: "KFSD 1120 A /B",
      conector: "SC/UPC (\xDAnica)",
      wdm: "Sim",
      distancia: "20 Km",
      modulação: "Fast",
      fibra: "Monomodo",
      potencia: "-3 dBm a -10 dBm",
      recepMax: "-3 dBm",
      recepMin: "-34 dBm",
      CompTX: "A -1550 nm / B- 1310 nm",
      CompRX: "A - 1310 nm / B- 1550 nm ",
      status: "Suporte",
      garantia: "2 Anos",
      pagina: "https://www.intelbras.com/pt-br/conversor-de-midia-fast-ethernet-monomodo-20-km-kfsd-1120-b",
      datasheet:
        "http://backend.intelbras.com/sites/default/files/2022-06/Datasheet-KFM-112-1120-KFMD-1120-A-B-KGM-115-KGS-1120-KGSD-1120-A-B-04.20%20_5.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_de_instalacao_KFM_112_KFS_1120_KFSD_1120_A_B_01-22.pdf",
      manual: "-",
    },
    {
      id: "2",
      linha: "conversor",
      modelo: "KGSD 1120 A/B",
      conector: "SC/UPC (\xDAnica)",
      wdm: "Sim",
      distancia: "20 Km",
      modulação: "Giga",
      fibra: "Monomodo",
      potencia: "-3 dBm a -8dBm",
      recepMax: "-3 dBm",
      recepMin: "-23 dBm",
      CompTX: "A - 1550 nm / B - 1310 nm",
      CompRX: "A - 1310 nm/ B \u2013 1550 nm",
      status: "Suporte",
      garantia: "2 Anos",
      pagina: "https://www.intelbras.com/pt-br/conversor-de-midia-gigabit-ethernet-monomodo-20-km-kgsd-1120-b",
      datasheet:
        "http://backend.intelbras.com/sites/default/files/2022-06/Datasheet-KFM-112-1120-KFMD-1120-A-B-KGM-115-KGS-1120-KGSD-1120-A-B-04.20%20_5.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_de_instalacao_KGM_1105_KGS_1120_KGSD_1120_A_B_01-22.pdf",
      manual: "-",
    },
    {
      id: "3",
      linha: "conversor",
      modelo: "KFM 112",
      conector: "SC/UPC (Duplo)",
      wdm: "N\xE3o",
      distancia: "2 Km",
      modulação: "Fast",
      fibra: "Multimodo",
      potencia: "-3 dBm a -10 dBm",
      recepMax: "-3 dBm",
      recepMin: "-34 dBm",
      CompTX: "1310 nm",
      CompRX: "1310 nm",
      status: "Suporte",
      garantia: "2 Anos",
      pagina: "https://www.intelbras.com/pt-br/conversor-de-midia-fast-ethernet-multimodo-kfm-112",
      datasheet:
        "http://backend.intelbras.com/sites/default/files/2022-06/Datasheet-KFM-112-1120-KFMD-1120-A-B-KGM-115-KGS-1120-KGSD-1120-A-B-04.20%20_5.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_de_instalacao_KFM_112_KFS_1120_KFSD_1120_A_B_01-22.pdf",
      manual: "-",
    },
    {
      id: "4",
      linha: "conversor",
      modelo: "KFS 1120",
      conector: "SC/UPC (Duplo)",
      wdm: "N\xE3o",
      distancia: "20 Km",
      modulação: "Fast",
      fibra: "Monomodo",
      potencia: "-3 dBm a -10 dBm",
      recepMax: "-3 dBm",
      recepMin: "-34 dBm",
      CompTX: "1310 nm",
      CompRX: "1310 nm",
      status: "Suporte",
      garantia: "2 Anos",
      pagina: "https://www.intelbras.com/pt-br/conversor-de-midia-fast-ethernet-monomodo-kfs-1120",
      datasheet:
        "https://backend.intelbras.com/sites/default/files/2022-06/Datasheet-KFM-112-1120-KFMD-1120-A-B-KGM-115-KGS-1120-KGSD-1120-A-B-04.20%20_6.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_de_instalacao_KFM_112_KFS_1120_KFSD_1120_A_B_01-22.pdf",
      manual: "-",
    },
    {
      id: "5",
      linha: "conversor",
      modelo: "KGM 1105",
      conector: "SC/UPC (Duplo)",
      wdm: "N\xE3o",
      distancia: "500 M",
      modulação: "Giga",
      fibra: "Multimodo",
      potencia: "0 dBm a -8 dBm",
      recepMax: "-3 dBm",
      recepMin: "-20 dBm",
      CompTX: "850 nm",
      CompRX: "850 nm",
      status: "Suporte",
      garantia: "2 Anos",
      pagina: "https://www.intelbras.com/pt-br/conversor-de-midia-gigabit-ethernet-multimodo-05-km-kgm-1105",
      datasheet:
        "https://backend.intelbras.com/sites/default/files/2022-06/Datasheet-KFM-112-1120-KFMD-1120-A-B-KGM-115-KGS-1120-KGSD-1120-A-B-04.20%20_5.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_de_instalacao_KGM_1105_KGS_1120_KGSD_1120_A_B_01-22.pdf",
      manual: "-",
    },
    {
      id: "6",
      linha: "conversor",
      modelo: "KGS 1120",
      conector: "SC/UPC (Duplo)",
      wdm: "N\xE3o",
      distancia: "20 Km",
      modulação: "Giga",
      fibra: "Monomodo",
      potencia: "-3 dBm a -10 dBm",
      recepMax: "-3 dBm",
      recepMin: "-23 dBm",
      CompTX: "1310 nm ",
      CompRX: "1310 nm ",
      status: "Suporte",
      garantia: "2 Anos",
      pagina: "https://www.intelbras.com/pt-br/conversor-de-midia-gigabit-ethernet-monomodo-20-km-kgs-1120",
      datasheet:
        "http://backend.intelbras.com/sites/default/files/2022-06/Datasheet-KFM-112-1120-KFMD-1120-A-B-KGM-115-KGS-1120-KGSD-1120-A-B-04.20%20_5.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_de_instalacao_KGM_1105_KGS_1120_KGSD_1120_A_B_01-22.pdf",
      manual: "-",
    },
  ],
  Pp = [
    {
      id: "1",
      linha: "gbic",
      modelo: "KTS 2110",
      tipoConector: "LC/PC (Dupla)",
      modulo: "XFP",
      wdm: "N\xE3o",
      distancia: "10 Km",
      modulação: "10 Gbps",
      fibra: "Monomodo",
      potencia: "-6 dBm \xE0 -1 dBm",
      recepMaxMin: "0,5 dBm \xE0 -14.4 dBm",
      CompTX: "1490 nm ",
      CompRX: "1310 nm",
      garantia: "1 Ano",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/modulo-conversor-sfp-10-gbps-kts-2110",
      datasheet: "https://backend.intelbras.com/sites/default/files/2020-08/datasheet_KTS_2110_%2B_v2.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_de_instalacao_KTS_2110%2B_01-22_.pdf",
    },
    {
      id: "2",
      linha: "gbic",
      modelo: "KTS 2110+",
      tipoConector: "LC/PC (Dupla)",
      modulo: "SFP+",
      wdm: "N\xE3o",
      distancia: "10 Km",
      modulação: "10 Gbps",
      fibra: "Monomodo",
      potencia: "- 7 \xE0 0,5 dBm",
      recepMaxMin: "0,5 dBm \xE0 -14.4 dBm",
      CompTX: "1490 nm ",
      CompRX: "1310 nm",
      garantia: "1 Ano",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/modulo-conversor-sfp-10-gbps-kts-2110",
      datasheet: "http://backend.intelbras.com/sites/default/files/2020-08/datasheet_KTS_2110_%2B_v2.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_de_instalacao_KTS_2110%2B_01-22_.pdf",
    },
    {
      id: "3",
      linha: "gbic",
      modelo: "KPSD 1120 G C+",
      tipoConector: "SC/UPC (\xDAnica)",
      modulo: "Gpon",
      wdm: "Sim",
      distancia: "20 Km",
      modulação: "1 Giga",
      fibra: "Monomodo",
      potencia: "3 dBm \xE0 8 dBm",
      recepMaxMin: "- 8 dBm \xE0 -30 dbm",
      CompTX: "1490 nm ",
      CompRX: "1310 nm",
      garantia: "1 Ano",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/modulo-sfp-gpon-c-monomodo-20-km-kpsd-1120-g-c",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-08/Datasheet%20KPSD%201120G%20C%2B.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_de_instalacao_KPSD_1120GC%2B_01-22.pdf",
    },
    {
      id: "4",
      linha: "gbic",
      modelo: "KPSD 1120 G B+",
      tipoConector: "SC/UPC (\xDAnica)",
      modulo: "Gpon",
      wdm: "Sim",
      distancia: "20 Km",
      modulação: "1 Giga",
      fibra: "Monomodo",
      potencia: "1,5 dBm \xE0 5 dBm",
      recepMaxMin: "- 8 dBm \xE0 -28 dbm",
      CompTX: "1490 nm ",
      CompRX: "1310 nm",
      garantia: "1 Ano",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/modulo-sfp-gpon-b-kpsd-1120-g",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-08/Datasheet%20KPSD%201120-G%20B%2B.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_de_instalacao_KPSD_1120G_01-22.pdf",
    },
    {
      id: "5",
      linha: "gbic",
      modelo: "KPSD 1120 E",
      tipoConector: "SC/UPC (\xDAnica)",
      modulo: "Epon",
      wdm: "Sim",
      distancia: "20 Km",
      modulação: "1 Giga",
      fibra: "Monomodo",
      potencia: "2,5 dBm \xE0 7 dBm",
      recepMaxMin: "- 8 dBm \xE0 -30 dbm",
      CompTX: "1490 nm ",
      CompRX: "1310 nm",
      garantia: "1 Ano",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/modulo-sfp-epon-kpsd-1120-e",
      datasheet: "http://backend.intelbras.com/sites/default/files/integration/datasheet_kpsd_1120_e.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_de_instalacao_KPSD_1120_E_01-22.pdf",
    },
    {
      id: "6",
      linha: "gbic",
      modelo: "KGSD 2110 A/B",
      tipoConector: "LC/UPC (\xDAnico)",
      modulo: "SFP",
      wdm: "Sim",
      distancia: "10 Km",
      modulação: "1 Giga",
      fibra: "Monomodo",
      potencia: "-3 dBm \xE0 -9,5 dBm",
      recepMaxMin: "- 8 dBm \xE0 -21 dbm",
      CompTX: "A \u2013 1550 nm / B \u2013 1310 nm",
      CompRX: "A \u2013 1310 nm / B \u2013 1550 nm",
      garantia: "1 Ano",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/modulo-mini-gbic-gigabit-ethernet-monomodo-10-km-kgsd-2110-b",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-06/Datasheet%20KGS%202110%20Max%20e%20KGM%202110%20Max%20_1.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_de_instalacao_KGM_2105_KGS_2110_KGSD_2110_A_B_A4_01-22.pdf",
    },
    {
      id: "7",
      linha: "gbic",
      modelo: "KGS 2110",
      tipoConector: "LC/UPC (Dupla)",
      modulo: "SFP",
      wdm: "N\xE3o",
      distancia: "10 Km",
      modulação: "1 Giga",
      fibra: "Monomodo",
      potencia: "-3 dBm \xE0 -9,5 dBm",
      recepMaxMin: "- 8 dBm \xE0 -21 dbm",
      CompTX: "1310 nm",
      CompRX: "1310 nm",
      garantia: "1 Ano",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/modulo-mini-gbic-gigabit-ethernet-monomodo-10-km-kgs-2110",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-06/Datasheet%20KGS%202110%20Max%20e%20KGM%202110%20Max%20_0.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_de_instalacao_KGM_2105_KGS_2110_KGSD_2110_A_B_A4_01-22.pdf",
    },
    {
      id: "8",
      linha: "gbic",
      modelo: "KGM 2105 ",
      tipoConector: "LC/UPC (Dupla)",
      modulo: "SFP",
      wdm: "N\xE3o",
      distancia: "500 M",
      modulação: "1 Giga",
      fibra: "Multimodo",
      potencia: "-3 dBm \xE0 -9,5 dBm",
      recepMaxMin: "-3 dBm \xE0 -17 dbm",
      CompTX: "850 nm",
      CompRX: "850 nm",
      garantia: "1 Ano",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/modulo-mini-gbic-gigabit-ethernet-multimodo-05-km-kgm-2105",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-06/Datasheet%20KGS%202110%20Max%20e%20KGM%202110%20Max%20_0.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_de_instalacao_KGM_2105_KGS_2110_KGSD_2110_A_B_A4_01-22.pdf",
    },
  ],
  Mp = [
    {
      id: "1",
      linha: "radio",
      modelo: "WOG 212",
      indicado: "PTP",
      garantia: "1 ano",
      ganho: "12 dBi",
      potencia: "27 dBm - 500 mW",
      porta: "Fast",
      pps: "N/A",
      throughputEfetivo: "90 Mbps",
      throughputNominal: "150 Mbps",
      aberturaHorVer: "H-60\xB0| V-30\xB0",
      distancia: "1-2Km",
      distanciaMax: "60m",
      consumo: "6,8 W",
      alimentaçao: "12V",
      wireless: "SiSo 1x1",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/cpe-24-ghz-12-dbi-wog-212",
      datasheet: "https://backend.intelbras.com/sites/default/files/integration/datasheet_wog_212_01-18.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_wog_212_04-18_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/integration/manual_wog_212_portugues_02-18_site.pdf",
    },
    {
      id: "2",
      linha: "radio",
      modelo: "APC 5A-15",
      indicado: "PTP",
      garantia: "2 anos",
      ganho: "15 dBi",
      potencia: "29 dBm - 800 mW",
      porta: "Fast",
      pps: "80.000 Pps",
      throughputEfetivo: "180 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "H-35\xB0 | V-35\xB0",
      distancia: "6Km",
      distanciaMax: "50m (CAT5E) 90m (CAT6)",
      consumo: "4,5 W",
      alimentaçao: "12V - 24V",
      wireless: "iPoll\u2122, MiMo 2x2",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/cpeptp-5-ghz-com-15-dbi-mimo-2x2-apc-5a-15",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-12/APC%205A-15.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-08/Guia-de-instalacao-APC-5A-15-08.22.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-12/Manual_APC_5A_portugues_04-22_site.pdf",
    },
    {
      id: "3",
      linha: "radio",
      modelo: "APC 5A-20",
      indicado: "PTP",
      garantia: "2 anos",
      ganho: "20 dBi",
      potencia: "29 dBm - 800 mW",
      porta: "Fast",
      pps: "80.000 Pps",
      throughputEfetivo: "180 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "H-16\xB0 | V-16\xB0",
      distancia: "10km (PtMP) - 15km (PtP)",
      distanciaMax: "50m (CAT5E) 90m (CAT6)",
      consumo: "4,5 W",
      alimentaçao: "12V - 24V",
      wireless: "iPoll\u2122, MiMo 2x2",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/cpeptp-5-ghz-com-20-dbi-mimo-2x2-apc-5a-20",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-09/APC_5A-20_V2.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-10/Guia_APC_5A-20_02-22_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-10/Manual_APC_5A_portugues_03-22_site.pdf",
    },
    {
      id: "4",
      linha: "radio",
      modelo: "WOM 5A",
      indicado: "PTP",
      garantia: "1 ano",
      ganho: "16 dBi",
      potencia: "28 dBm - 630 mW",
      porta: "Fast",
      pps: "60.000 Pps",
      throughputEfetivo: "110 Mbps",
      throughputNominal: "150 Mbps",
      aberturaHorVer: "H-40\xB0 | V-18\xB0",
      distancia: "4Km",
      distanciaMax: "30m",
      consumo: "2,8 W",
      alimentaçao: "12V - 24V",
      wireless: "iPoll\u2122,SiSo 1T\xD71R",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/cpe-5-ghz-com-antena-de-16-dbi-siso-1x1-wom-5a",
      datasheet: "http://backend.intelbras.com/sites/default/files/integration/datasheet-wom-5a-wom-5a-mimo.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2020-11/guia%20de%20instalacao%20-%20wom%205a-wom%205a%20mimo.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2021-12/Manual_WOM_5A_portugues_01-21.pdf",
    },
    {
      id: "5",
      linha: "radio",
      modelo: "WOM 5A MIMO",
      indicado: "PTP",
      garantia: "1 ano",
      ganho: "16 dBi",
      potencia: "28 dBm - 630 mW",
      porta: "Fast",
      pps: "60.000 Pps",
      throughputEfetivo: "160 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "H-40\xB0 | V-18\xB0",
      distancia: "6Km",
      distanciaMax: "30m",
      consumo: "2,8 W",
      alimentaçao: "12V - 24V",
      wireless: "iPoll\u2122, MiMo 2x2",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/cpe-5-ghz-com-antena-de-16-dbi-mimo-2x2-wom-5a-mimo",
      datasheet: "http://backend.intelbras.com/sites/default/files/2020-08/datasheet-wom-5a-wom-5a-mimo_0.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2020-11/guia%20de%20instalacao%20-%20wom%205a-wom%205a%20mimo.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2021-12/Manual_WOM_5A_portugues_01-21.pdf",
    },
    {
      id: "6",
      linha: "radio",
      modelo: "KIT WOM 5A MIMO",
      indicado: "PTP",
      garantia: "1 ano",
      ganho: "16 dBi",
      potencia: "28 dBm - 630 mW",
      porta: "Fast",
      pps: "N/A",
      throughputEfetivo: "160 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "H-40\xB0 | V-18\xB0",
      distancia: "1Km",
      distanciaMax: "30m",
      consumo: "2,8 W",
      alimentaçao: "12V - 24V",
      wireless: "iPoll\u2122, MiMo 2x2",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/kit-conexao-sem-fio-para-cftv-ip-wom-5a-mimo-kit-conexao-wom-5a-mimo",
      datasheet:
        "http://backend.intelbras.com/sites/default/files/2021-08/Datasheet%20%28Ficha%20t%C3%A9cnica%29%20-%20Kit%20Conex%C3%A3o%20WOM%205A%20MiMo_2.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2020-11/guia%20de%20instalacao%20-%20wom%205a-wom%205a%20mimo.pdf",
      manual: "https://manual-zeus-os.intelbras.com.br/",
    },
    {
      id: "7",
      linha: "radio",
      modelo: "WOM 5A-23",
      indicado: "PTP",
      garantia: "1 ano",
      ganho: "23 dBi",
      potencia: "25 dBm - 316 mW",
      porta: "Fast",
      pps: "60.000 Pps",
      throughputEfetivo: "160 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "H-9\xB0 | V-9\xB0",
      distancia: "10 km",
      distanciaMax: "30m",
      consumo: "6 W",
      alimentaçao: "12V - 24V",
      wireless: "iPoll\u2122, MiMo 2x2",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/cpeptp-com-antena-dish-de-23-dbi-mimo-2x2-wom-5a-23",
      datasheet: "http://backend.intelbras.com/sites/default/files/2020-08/Datasheet_WOM_5a-23_01-20.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2020-11/guia%20de%20instalacao%20-%20wom%205a-23.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2020-11/manual%20do%20usuario%20-%20wom%205a-23.pdf",
    },
    {
      id: "8",
      linha: "radio",
      modelo: "APC 5A/Giga",
      indicado: "BASE/PTP",
      garantia: "2 anos",
      ganho: "SEM ANTENA",
      potencia: "29 dBm - 800 mW",
      porta: "Giga",
      pps: "80.000 Pps",
      throughputEfetivo: "180 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: " ",
      distancia: " ",
      distanciaMax: "50m (CAT5E) 90m (CAT6)",
      consumo: "4,5 W",
      alimentaçao: "12V - 24V",
      wireless: "iPoll\u2122, MiMo 2x2",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/radio-gigabit-ptpptmp-5-ghz-conectorizado-mimo-apc-5a-giga",
      datasheet: "http://backend.intelbras.com/sites/default/files/2021-12/APC%205A%20Giga.pdf",
      guia: "-",
      manual: "https://backend.intelbras.com/sites/default/files/2022-10/Manual_APC_5A_portugues_03-22_site.pdf",
    },
    {
      id: "9",
      linha: "radio",
      modelo: "APC 5A-90 V3",
      indicado: "BASE",
      garantia: "2 anos",
      ganho: "18 dBi",
      potencia: "29 dBm - 800 mW",
      porta: "Giga",
      pps: "80.000 Pps",
      throughputEfetivo: "180 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "H-90\xB0 | V-20\xB0",
      distancia: "10Km",
      distanciaMax: "50m (CAT5E) 90m (CAT6)",
      consumo: "4,5 W",
      alimentaçao: "12V - 24V",
      wireless: "iPoll\u2122, MiMo 2x2",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/basestation-5-ghz-com-antena-setorial-de-90o-integrada-apc-5a-90-giga-v3",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-10/Datasheet_APC_5A-90_V3_10.22.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-10/Guia_APC_5A-90_01-22_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-10/Manual_APC_5A_portugues_03-22_site.pdf",
    },
    {
      id: "10",
      linha: "radio",
      modelo: "APC 5A-90",
      indicado: "BASE",
      garantia: "2 anos",
      ganho: "18 dBi",
      potencia: "29 dBm - 800 mW",
      porta: "Fast",
      pps: "80.000 Pps",
      throughputEfetivo: "180 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "H-90\xB0 | V-20\xB0",
      distancia: "10Km",
      distanciaMax: "50m (CAT5E) 90m (CAT6)",
      consumo: "4,5 W",
      alimentaçao: "12V - 24V",
      wireless: "iPoll\u2122, MiMo 2x2",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/basestation-5-ghz-com-antena-setorial-integrada-apc-5a-90",
      datasheet: "https://backend.intelbras.com/sites/default/files/2019-04/Datasheet_APC_5A-90.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-10/Guia_APC_5A-90_01-22_site_0.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-10/Manual_APC_5A_portugues_03-22_site.pdf",
    },
    {
      id: "11",
      linha: "radio",
      modelo: "PTP 5-N MiMo Pro",
      indicado: "PTP",
      garantia: "1 ano",
      ganho: "SEM ANTENA",
      potencia: "29 dBm - 800 mW",
      porta: "Giga",
      pps: "80.000 Pps",
      throughputEfetivo: "200 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: " ",
      distancia: " ",
      distanciaMax: "30m",
      consumo: "8 W",
      alimentaçao: "48V | POE 802.3af",
      wireless: "W-Jet\xB2, MiMo 2x2",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/ptp-5-ghz-2n-mimo-2x2-ptp-5-n-mimo-pro",
      datasheet: "https://backend.intelbras.com/sites/default/files/integration/datasheet_ptp_5-n_mimo_pro_site.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_ptp_5-n_mimo_pro_01-18_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/integration/manual_ptp_mimo_pro_portugues_02-17.pdf",
    },
    {
      id: "12",
      linha: "radio",
      modelo: "WOM 5000",
      indicado: "PTP",
      garantia: "1 ano",
      ganho: "12 dBi",
      potencia: "28 dBm - 630 mW",
      porta: "Fast",
      pps: "50.000 Pps",
      throughputEfetivo: "110 Mbps",
      throughputNominal: "150 Mbps",
      aberturaHorVer: "H-40\xB0 | V-15\xB0",
      distancia: "2Km",
      distanciaMax: "30m",
      consumo: "2,8 W",
      alimentaçao: "12V - 24V",
      wireless: "SiSo 1T \xD7 1R",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/cpe-5-ghz-12-dbi-com-sma-wom-5000",
      datasheet: "https://backend.intelbras.com/sites/default/files/2019-04/Datasheet_WOM_5000.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2020-11/guia%20de%20instalacao%20-%20familia%20wom%205000.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2020-11/manual%20do%20usuario%20-%20familia%20wom%205000.pdf",
    },
    {
      id: "13",
      linha: "radio",
      modelo: "WOM 5000i",
      indicado: "PTP",
      garantia: "1 ano",
      ganho: "12 dBi",
      potencia: "28 dBm - 630 mW",
      porta: "Fast",
      pps: "50.000 Pps",
      throughputEfetivo: "110 Mbps",
      throughputNominal: "150 Mbps",
      aberturaHorVer: "H-40\xB0 | V-15\xB0",
      distancia: "2Km",
      distanciaMax: "30m",
      consumo: "2,8 W",
      alimentaçao: "12V - 24V",
      wireless: "SiSo 1T \xD7 1R",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/cpe-5-ghz-12-dbi-wom-5000i",
      datasheet: "https://backend.intelbras.com/sites/default/files/2019-04/Datasheet_WOM_5000i.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2020-11/guia%20de%20instalacao%20-%20familia%20wom%205000.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2020-11/manual%20do%20usuario%20-%20familia%20wom%205000.pdf",
    },
    {
      id: "14",
      linha: "radio",
      modelo: "WOM 5000 MiMo",
      indicado: "PTP",
      garantia: "1 ano",
      ganho: "14 dBi",
      potencia: "28 dBm - 630 mW",
      porta: "Fast",
      pps: "50.000 Pps",
      throughputEfetivo: "160 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "H-40\xB0 | V-15\xB0",
      distancia: "4Km",
      distanciaMax: "30m",
      consumo: "2,8 W",
      alimentaçao: "12V - 24V",
      wireless: "MiMo 2Tx2R",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/cpe-5-ghz-mimo-2x2-wom-5000-mimo",
      datasheet: "https://backend.intelbras.com/sites/default/files/2019-04/Datasheet_WOM_5000_MiMo.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2020-11/guia%20de%20instalacao%20-%20familia%20wom%205000.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2020-11/manual%20do%20usuario%20-%20familia%20wom%205000.pdf",
    },
    {
      id: "15",
      linha: "radio",
      modelo: "APC 5M-18+",
      indicado: "PTP",
      garantia: "2 anos",
      ganho: "18 dBi",
      potencia: "29 dBm - 800 mW",
      porta: "Fast",
      pps: "60.000 Pps",
      throughputEfetivo: "180 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "H-16\xB0 | V-16\xB0",
      distancia: "10Km",
      distanciaMax: "50m (CAT5E) 90m (CAT6)",
      consumo: "4,8 W",
      alimentaçao: "12V - 24V",
      wireless: "iPoll\u2122, MiMo 2x2",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/cpeptp-5-ghz-18-dbi-mimo-2x2-apc-5m-18",
      datasheet: "https://backend.intelbras.com/sites/default/files/integration/datasheet_a4_apc_5m-18_site.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_apc_5m-18_01-18_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/integration/manual_apc_5m_5m-18_5m-90_2m-90_02-18.pdf",
    },
    {
      id: "16",
      linha: "radio",
      modelo: "APC 2M-90",
      indicado: "BASE",
      garantia: "2 anos",
      ganho: "16 dBi",
      potencia: "30 dBm - 1000mW",
      porta: "Fast",
      pps: "33.000 Pps",
      throughputEfetivo: "160 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "H-90\xB0 | V-30\xB0",
      distancia: "4Km",
      distanciaMax: "30m",
      consumo: "7 W",
      alimentaçao: "12V - 24V",
      wireless: "iPoll\u2122, MiMo 2x2",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/basestation-24-ghz-16-dbi-mimo-2x2-apc-2m-90",
      datasheet: "https://backend.intelbras.com/sites/default/files/integration/datasheet_a4_apc_2m_90_0.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_apc_2m_90_portugues_01-18_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/integration/manual_apc_5m_5m-18_5m-90_2m-90_02-18.pdf",
    },
    {
      id: "17",
      linha: "radio",
      modelo: "APC 5M+",
      indicado: "BASE/PTP",
      garantia: "2 anos",
      ganho: "SEM ANTENA",
      potencia: "29 dBm - 800 mW",
      porta: "Fast",
      pps: "60.000 Pps",
      throughputEfetivo: "180 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: " ",
      distancia: " ",
      distanciaMax: "30m",
      consumo: "4,6 W",
      alimentaçao: "12V - 24V",
      wireless: "iPoll\u2122, MiMo 2x2",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/ptpptmp-2n-5-ghz-mimo-2x2-apc-5m",
      datasheet: "https://backend.intelbras.com/sites/default/files/integration/datasheet_apc_5m_portugues_01-14_site.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_instalacao_apc_5m_02-18_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/integration/manual_apc_5m_5m-18_5m-90_2m-90_02-18.pdf",
    },
    {
      id: "18",
      linha: "radio",
      modelo: "APC 5M-90+",
      indicado: "BASE",
      garantia: "2 anos",
      ganho: "18 dBi",
      potencia: "29 dBm - 800 mW",
      porta: "Fast",
      pps: "60.000 Pps",
      throughputEfetivo: "180 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "H-90\xB0 | V-16\xB0",
      distancia: "10Km",
      distanciaMax: "30m",
      consumo: "4,6 W",
      alimentaçao: "12V - 24V",
      wireless: "iPoll\u2122, MiMo 2x2",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/basestation-5-ghz-18-dbi-mimo-2x2-apc-5m-90",
      datasheet: "https://backend.intelbras.com/sites/default/files/integration/datasheet_apc_5m-90_site.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_apc_5m-90_portugues_02-18_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/integration/manual_apc_5m_5m-18_5m-90_2m-90_02-18.pdf",
    },
    {
      id: "19",
      linha: "radio",
      modelo: "APC 5M-90",
      indicado: "BASE",
      garantia: "N/A",
      ganho: "18 dBi",
      potencia: "29 dBm - 800 mW",
      porta: "Fast",
      pps: "60.000 Pps",
      throughputEfetivo: "180 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "H-90\xB0 | V-16\xB0",
      distancia: "10Km",
      distanciaMax: "30m",
      consumo: "4,6 W",
      alimentaçao: "12V - 24V",
      wireless: "iPoll\u2122, MiMo 2x2",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/basestation-5-ghz-18-dbi-mimo-2x2-basestation-apc-5m-90",
      datasheet: "https://backend.intelbras.com/sites/default/files/integration/datasheet_apc_5m-90.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_apc_5m-90_portugues_02-13_0.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/integration/manual_apc_5m_5m-18_5m-90_2m-90_02-18.pdf",
    },
    {
      id: "20",
      linha: "radio",
      modelo: "APC Mach 5",
      indicado: "PTP",
      garantia: "N/A",
      ganho: "25 dBi",
      potencia: "29 dBm - 800 mW",
      porta: "Fast",
      pps: "60.000 Pps",
      throughputEfetivo: "180 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "H-6\xB0 | V-9\xB0",
      distancia: "10Km",
      distanciaMax: "30m",
      consumo: "6,5 W",
      alimentaçao: "12V - 48V",
      wireless: "iPoll\u2122, MiMo 2x2",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/ptp-5-ghz-23-dbi-mimo-2x2-apc-mach-5",
      datasheet: "https://backend.intelbras.com/sites/default/files/integration/datasheet_apc_mach-5.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_instalacao_apc_mach_5_site.pdf",
      manual: "-",
    },
    {
      id: "21",
      linha: "radio",
      modelo: "APC 5M",
      indicado: "BASE/PTP",
      garantia: "N/A",
      ganho: "SEM ANTENA",
      potencia: "29 dBm - 800 mW",
      porta: "Fast",
      pps: "60.000 Pps",
      throughputEfetivo: "180 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: " ",
      distancia: " ",
      distanciaMax: "30m",
      consumo: "4,6 W",
      alimentaçao: "12V - 24V",
      wireless: "iPoll\u2122, MiMo 2x2",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/ptpptmp-2n-5-ghz-mimo-2x2-ptp-apc-5m",
      datasheet: "https://backend.intelbras.com/sites/default/files/integration/ficha_tecnica_-_cpe_2n_5ghz_mimo_2x2_apc_5m.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_de_instalacao_apc_5m_02-13_0.pdf",
      manual: "-",
    },
    {
      id: "22",
      linha: "radio",
      modelo: "PTP 5-23",
      indicado: "PTP",
      garantia: "N/A",
      ganho: "23 dBi",
      potencia: "29 dBm - 800 mW",
      porta: "Fast",
      pps: "80.000 Pps",
      throughputEfetivo: "200 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "H-6\xB0 | V-9\xB0",
      distancia: "10Km",
      distanciaMax: "30m",
      consumo: "8 W",
      alimentaçao: "48V | POE 802.3af",
      wireless: "W-Jet\xB2, MiMo 2x2",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/ptp-5-ghz-23-dbi-mimo-2x2-ptp-5-23-mimo-pro",
      datasheet: "https://backend.intelbras.com/sites/default/files/integration/datasheet_ptp_5-23_mimo_pro.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_instalacao_ptp_5-23_mimo_pro.pdf",
      manual: "-",
    },
    {
      id: "23",
      linha: "radio",
      modelo: "APC 2M-14",
      indicado: "PTP",
      garantia: "N/A",
      ganho: "14 dBi",
      potencia: "30 dBm - 1000mW",
      porta: "Fast",
      pps: "33.000 Pps",
      throughputEfetivo: "160 Mbps",
      throughputNominal: "300 Mbps",
      aberturaHorVer: "H-34\xB0 | V-36\xB0",
      distancia: "2Km",
      distanciaMax: "30m",
      consumo: "7 W",
      alimentaçao: "12V - 48V",
      wireless: "iPoll\u2122, MiMo 2x2",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/cpeptp-24-ghz-14-dbi-mimo-2x2-apc-2m-14",
      datasheet: "https://backend.intelbras.com/sites/default/files/integration/lamina_apc_2m-14.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_instalacao_apc_2m-14.pdf",
      manual: "-",
    },
    {
      id: "24",
      linha: "radio",
      modelo: "WOM AC",
      indicado: "PTP",
      garantia: "1 ano",
      ganho: "16 dBi",
      potencia: "23 dBm - 200mW",
      porta: "Giga",
      pps: "N/A",
      throughputEfetivo: "N/A",
      throughputNominal: "867 Mbps",
      aberturaHorVer: "H-40\xB0 | V-20\xB0",
      distancia: "5Km",
      distanciaMax: "N/A",
      consumo: ">20 W",
      alimentaçao: "12V - 24V",
      wireless: "MiMo 2x2",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/cpe-5-ghz-com-antena-de-16-dbi-mimo-2x2-wom-ac",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-12/Datasheet_WOM_AC_12.22.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-12/Guia_WOM_AC_E_WOM_AC_MAX_02-22_site.pdf",
      manual: "https://manuais.intelbras.com.br/manual-familia-wom-ac/",
    },
    {
      id: "25",
      linha: "radio",
      modelo: "WOM AC MAX",
      indicado: "PTP",
      garantia: "1 ano",
      ganho: "20 dBi",
      potencia: "23 dBm - 200mW",
      porta: "Giga",
      pps: "N/A",
      throughputEfetivo: "N/A",
      throughputNominal: "867 Mbps",
      aberturaHorVer: "H-16\xB0 | V-16\xB0",
      distancia: "15Km",
      distanciaMax: "N/A",
      consumo: ">20 W",
      alimentaçao: "12V - 24V",
      wireless: "MiMo 2x2",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/cpe-5-ghz-com-antena-de-20-dbi-mimo-2x2-wom-ac-max",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-12/Datasheet_WOM_AC_MAX_12.22.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-12/Guia_WOM_AC_E_WOM_AC_MAX_02-22_site.pdf",
      manual: "https://manuais.intelbras.com.br/manual-familia-wom-ac/",
    },
  ],
  xp = [
    {
      id: "1",
      modelo: "SF 500 PoE",
      linha: "switch",
      portas: "5 Portas",
      modulação: "Fast",
      gerenciavel: "N\xE3o",
      sfp: "N\xE3o",
      taxaTransferencia: "148 kpps",
      backplane: "1 Gbps",
      pdAlive: "N\xE3o",
      qos: "Sim",
      poe: "Sim | 802.3af - 802.3at",
      poeExtender: "Sim",
      poePorta: "30 W",
      poeTotal: "58 W",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-5-portas-fast-ethernet-com-4-portas-poe-sf-500-poe",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-10/Datasheet%20SF%20500%20PoE_2021.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-03/Guia_SF_500_PoE_portugues_01-22_site.pdf",
      manual: "-",
    },
    {
      id: "2",
      modelo: "SF 500 Hi-PoE",
      linha: "switch",
      portas: "5 Portas",
      modulação: "Fast",
      gerenciavel: "N\xE3o",
      sfp: "N\xE3o",
      taxaTransferencia: "744Kpps",
      backplane: "1.8 Gbps",
      pdAlive: "Sim",
      qos: "Sim",
      poe: "Sim | 802.3af - 802.3at",
      poeExtender: "Sim",
      poePorta: "1P 60W / 2-4P 30W",
      poeTotal: "60 W ",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-5-portas-fast-ethernet-com-4-portas-poe-sf-500-hi-poe",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-10/Datasheet%20-%20SF%20500%20Hi-PoE.pdf",
      guia: "https://manuais-switches.intelbras.com.br/pt-BR/SF500HiPoE_guia.html",
      manual: "-",
    },
    {
      id: "3",
      modelo: "SF 800 Q+",
      linha: "switch",
      portas: "8 Portas",
      modulação: "Fast",
      gerenciavel: "N\xE3o",
      sfp: "N\xE3o",
      taxaTransferencia: "1,19 Mpps",
      backplane: "1,6 Gbps",
      pdAlive: "N\xE3o",
      qos: "Sim",
      poe: "N\xE3o",
      poeExtender: "N\xE3o",
      poePorta: " ",
      poeTotal: " ",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-8-portas-fast-ethernet-sf-800-q",
      datasheet: "http://backend.intelbras.com/sites/default/files/integration/datasheet_sf_800_q_01-18.pdf",
      guia: "-",
      manual: "https://backend.intelbras.com/sites/default/files/2022-05/Manual%20do%20usu%C3%A1rio_SF800_05.22.pdf",
    },
    {
      id: "4",
      modelo: "SF 800 Q+ ULTRA",
      linha: "switch",
      portas: "8 Portas",
      modulação: "Fast",
      gerenciavel: "N\xE3o",
      sfp: "N\xE3o",
      taxaTransferencia: "1,19 Mpps",
      backplane: "1,6 Gbps",
      pdAlive: "N\xE3o",
      qos: "Sim",
      poe: "N\xE3o",
      poeExtender: "N\xE3o",
      poePorta: " ",
      poeTotal: " ",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-8-portas-fast-ethernet-com-protecao-antissurto-sf-800-q-ultra",
      datasheet: "http://backend.intelbras.com/sites/default/files/integration/datasheet_sf_800_q_ultra_01-18.pdf",
      guia: "-",
      manual: "https://backend.intelbras.com/sites/default/files/2022-05/Manual%20do%20usu%C3%A1rio_SF800_05.22.pdf",
    },
    {
      id: "5",
      modelo: "SF 800 VLAN",
      linha: "switch",
      portas: "8 Portas",
      modulação: "Fast",
      gerenciavel: "N\xE3o",
      sfp: "N\xE3o",
      taxaTransferencia: "1,19 Mpps",
      backplane: "200 Mbps",
      pdAlive: "N\xE3o",
      qos: "Sim",
      poe: "N\xE3o",
      poeExtender: "N\xE3o",
      poePorta: " ",
      poeTotal: " ",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-8-portas-fast-ethernet-com-vlan-fixa-sf-800-vlan",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-05/datasheet_sf_800_vlan.pdf",
      guia: "-",
      manual: "https://backend.intelbras.com/sites/default/files/2022-05/Manual%20do%20usu%C3%A1rio_SF800_05.22.pdf",
    },
    {
      id: "6",
      modelo: "SF 800 VLAN ULTRA",
      linha: "switch",
      portas: "8 Portas",
      modulação: "Fast",
      gerenciavel: "N\xE3o",
      sfp: "N\xE3o",
      taxaTransferencia: "1,19 Mpps",
      backplane: "200 Mbps",
      pdAlive: "N\xE3o",
      qos: "Sim",
      poe: "N\xE3o",
      poeExtender: "N\xE3o",
      poePorta: " ",
      poeTotal: " ",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-8-portas-fast-ethernet-com-vlan-fixa-sf-800-vlan-ultra",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-05/datasheet_sf_800_vlan_ultra_05_22.pdf",
      guia: "-",
      manual: "https://backend.intelbras.com/sites/default/files/2022-05/Manual%20do%20usu%C3%A1rio_SF800_05.22.pdf",
    },
    {
      id: "7",
      modelo: "SF 900 PoE",
      linha: "switch",
      portas: "9 Portas",
      modulação: "Fast",
      gerenciavel: "N\xE3o",
      sfp: "N\xE3o",
      taxaTransferencia: "1,48 Mpps",
      backplane: "1,8 Gbps",
      pdAlive: "N\xE3o",
      qos: "N\xE3o",
      poe: "Sim | 802.3af - 802.3at",
      poeExtender: "Sim",
      poePorta: "30 W",
      poeTotal: "97 W",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-9-portas-fast-ethernet-com-8-portas-poe-sf-900-poe",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-10/Datasheet%20SF%20900%20PoE%202021.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-03/Guia_SF%20900%20PoE_01-22_site_0.pdf",
      manual: "-",
    },
    {
      id: "8",
      modelo: "SF 900 Hi-PoE",
      linha: "switch",
      portas: "9 Portas",
      modulação: "Fast",
      gerenciavel: "N\xE3o",
      sfp: "N\xE3o",
      taxaTransferencia: "1.34 Mpps",
      backplane: "1,8 Gbps",
      pdAlive: "N\xE3o",
      qos: "Sim",
      poe: "Sim | 802.3af - 802.3at",
      poeExtender: "Sim",
      poePorta: "1P 60W / 2-8P 30W",
      poeTotal: "96 W",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-9-portas-fast-ethernet-8-portas-poe-sf-900-hi-poe",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-10/Datasheet%20SF%20900%20Hi-PoE%20v2.pdf",
      guia: "https://manuais-switches.intelbras.com.br/pt-BR/SF900HiPoE_guia.html",
      manual: "-",
    },
    {
      id: "9",
      modelo: "SF 910 PAC",
      linha: "switch",
      portas: "9 Portas",
      modulação: "Fast",
      gerenciavel: "N\xE3o",
      sfp: "N\xE3o",
      taxaTransferencia: "2.67 Mpps",
      backplane: "3,6 Gbps",
      pdAlive: "N\xE3o",
      qos: "Sim",
      poe: "N\xE3o",
      poeExtender: "N\xE3o",
      poePorta: " ",
      poeTotal: " ",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-com-9-portas-sf-910-pac",
      datasheet: "http://backend.intelbras.com/sites/default/files/2020-08/datasheet-SF-910-PAC-v2.pdf",
      guia: "-",
      manual: "https://backend.intelbras.com/sites/default/files/2022-03/Manual_SF%20910%20PAC_portugues_01-22_site.pdf",
    },
    {
      id: "10",
      modelo: "SF 1600 Q+",
      linha: "switch",
      portas: "16 Portas",
      modulação: "Fast",
      gerenciavel: "N\xE3o",
      sfp: "N\xE3o",
      taxaTransferencia: "2,38 Mpps",
      backplane: "3,2 Gbps",
      pdAlive: "N\xE3o",
      qos: "Sim",
      poe: "N\xE3o",
      poeExtender: "N\xE3o",
      poePorta: " ",
      poeTotal: " ",
      status: "Suporte",
      garantia: "2 Anos",
      pagina: "https://www.intelbras.com/pt-br/switch-16-portas-fast-ethernet-sf-1600-q",
      datasheet: "http://backend.intelbras.com/sites/default/files/2021-07/Datasheet%20SF%201600%20Q%2B.pdf",
      guia: "-",
      manual: "https://backend.intelbras.com/sites/default/files/2022-03/Manual_SF_1600_Q%2B_portugues_01-22_site.pdf",
    },
    {
      id: "11",
      modelo: "SF 1811 PoE",
      linha: "switch",
      portas: "16 Portas",
      modulação: "Giga (Uplink)",
      gerenciavel: "N\xE3o",
      sfp: "1 Independente",
      taxaTransferencia: "5,36 Mpps",
      backplane: "7,2 Gbps",
      pdAlive: "N\xE3o",
      qos: "Sim",
      poe: "Sim | 802.3af - 802.3at",
      poeExtender: "Sim",
      poePorta: "30 W",
      poeTotal: "180 W",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-16p-fast-poe-com-1p-gigabit-sf-1811-poe",
      datasheet: "http://backend.intelbras.com/sites/default/files/integration/datasheet_sf_1811_poe_01-18.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-03/Guia_SF%201811_PoE_01-22_site.pdf",
      manual: "-",
    },
    {
      id: "12",
      modelo: "SF 1821 PoE",
      linha: "switch",
      portas: "16 Portas",
      modulação: "Giga (Uplink)",
      gerenciavel: "N\xE3o",
      sfp: "2 Independentes",
      taxaTransferencia: "5.36 Mpps",
      backplane: "7,2 Gbps",
      pdAlive: "N\xE3o",
      qos: "N\xE3o",
      poe: "Sim | 802.3af - 802.3at",
      poeExtender: "Sim",
      poePorta: "30 W",
      poeTotal: "130 W",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-16-portas-fast-ethernet-poe-sf-1821-poe",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-02/Datasheet%20SF%201821%20PoE%20v2_0.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-03/Guia_SF_1821_PoE_02-22_site.pdf",
      manual: "-",
    },
    {
      id: "13",
      modelo: "SF 1822 Hi-PoE",
      linha: "switch",
      portas: "16 Portas",
      modulação: "Giga (Uplink)",
      gerenciavel: "N\xE3o",
      sfp: "2 Combo",
      taxaTransferencia: "5.36 Mpps",
      backplane: "7,2 Gbps",
      pdAlive: "Sim",
      qos: "Sim",
      poe: "Sim | 802.3af - 802.3at",
      poeExtender: "Sim",
      poePorta: "1-2P 60W / 3-16P 30W",
      poeTotal: "135W",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-16-portas-fast-ethernet-poe-sf-1822-hi-poe",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-02/Datasheet%20SF%201822%20Hi-PoE%20v2.pdf",
      guia: "https://manuais-switches.intelbras.com.br/pt-BR/SF1822HiPoE_guia.html",
      manual: "-",
    },
    {
      id: "14",
      modelo: "SF 2400 QR+",
      linha: "switch",
      portas: "24 Portas",
      modulação: "Fast",
      gerenciavel: "N\xE3o",
      sfp: "N\xE3o",
      taxaTransferencia: "3,5 Mpps",
      backplane: "4,8 Gbps",
      pdAlive: "N\xE3o",
      qos: "Sim",
      poe: "N\xE3o",
      poeExtender: "N\xE3o",
      poePorta: " ",
      poeTotal: " ",
      status: "Suporte",
      garantia: "2 Anos",
      pagina: "https://www.intelbras.com/pt-br/switch-24-portas-fast-ethernet-sf-2400-qr",
      datasheet: "http://backend.intelbras.com/sites/default/files/integration/datasheet_sf_2400_qr.pdf",
      guia: "-",
      manual: "https://backend.intelbras.com/sites/default/files/2022-03/Manual_SF_2400%20QR%2B_portugues_01-22_site.pdf",
    },
    {
      id: "15",
      modelo: "SG 800 Q+",
      linha: "switch",
      portas: "8 Portas",
      modulação: "Giga",
      gerenciavel: "N\xE3o",
      sfp: "N\xE3o",
      taxaTransferencia: "11,9 Mpps",
      backplane: "16 Gbps",
      pdAlive: "N\xE3o",
      qos: "Sim",
      poe: "N\xE3o",
      poeExtender: "N\xE3o",
      poePorta: " ",
      poeTotal: " ",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-com-8-portas-gigabit-ethernet-sg-800-q",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-11/SG%20800%20Q%2B%20-%20Datasheet_compilado%2018.11.22.pdf",
      guia: "https://manuais-switches.intelbras.com.br/pt-BR/SG_800.html",
      manual: "-",
    },
    {
      id: "16",
      modelo: "SG 800 VLAN",
      linha: "switch",
      portas: "8 Portas",
      modulação: "Giga",
      gerenciavel: "N\xE3o",
      sfp: "N\xE3o",
      taxaTransferencia: "11,9 Mpps",
      backplane: "2 Gbps",
      pdAlive: "N\xE3o",
      qos: "Sim",
      poe: "N\xE3o",
      poeExtender: "N\xE3o",
      poePorta: " ",
      poeTotal: " ",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/switch-com-8-portas-gigabit-ethernet-com-vlan-fixa-sg-800-vlan",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-11/datasheet-sg-800%20VLAN%2018.11.22.pdf",
      guia: "https://manuais-switches.intelbras.com.br/pt-BR/SG_800.html",
      manual: "-",
    },
    {
      id: "17",
      modelo: "SG 2400 QR+",
      linha: "switch",
      portas: "24 Portas",
      modulação: "Giga",
      gerenciavel: "N\xE3o",
      sfp: "N\xE3o",
      taxaTransferencia: "35,7 Mpps",
      backplane: "48 Gbps",
      pdAlive: "N\xE3o",
      qos: "N\xE3o",
      poe: "N\xE3o",
      poeExtender: "N\xE3o",
      poePorta: " ",
      poeTotal: " ",
      status: "Suporte",
      garantia: "2 Anos",
      pagina: "https://www.intelbras.com/pt-br/switch-24-portas-gigabit-ethernet-sg-2400-qr-0",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-04/Datasheet%20SG%202400%20QR%2B.pdf",
      guia: "https://manuais-switches.intelbras.com.br/pt-BR/SG2400QR+_guia.html",
      manual: "-",
    },
    {
      id: "18",
      modelo: "SG 2400 QR",
      linha: "switch",
      portas: "24 Portas",
      modulação: "Giga",
      gerenciavel: "N\xE3o",
      sfp: "N\xE3o",
      taxaTransferencia: "35,7 Mpps",
      backplane: "48 Gbps",
      pdAlive: "N\xE3o",
      qos: "Sim",
      poe: "N\xE3o",
      poeExtender: "N\xE3o",
      poePorta: " ",
      poeTotal: " ",
      status: "Suporte",
      garantia: "2 Anos",
      pagina: "https://www.intelbras.com/pt-br/switch-24-portas-gigabit-ethernet-sg-2400-qr",
      datasheet: "http://backend.intelbras.com/sites/default/files/2020-11/Datasheet%20SG%202400%20QR.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-03/Guia_SG_2400_QR_portugues_01-22_site.pdf",
      manual: "-",
    },
    {
      id: "19",
      modelo: "SF 2622 MR L2",
      linha: "switch",
      portas: "24 Portas",
      modulação: "Fast",
      gerenciavel: "Sim",
      sfp: "2 Combo",
      taxaTransferencia: "6,6 Mpps",
      backplane: "8 Gbps",
      pdAlive: "N\xE3o",
      qos: "Sim",
      poe: "N\xE3o",
      poeExtender: "N\xE3o",
      poePorta: " ",
      poeTotal: " ",
      status: "Suporte",
      garantia: "3 Anos",
      pagina: "https://www.intelbras.com/pt-br/switch-gerenciavel-com-24-portas-fast-ethernet-2-portas-mini-gbic-sf-2622-mr-l2",
      datasheet: "http://backend.intelbras.com/sites/default/files/2021-05/Datasheet%20SF%202622%20MR%20L2%20editavel%202021_0.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-03/Guia_SF%202622%20MR%20L2_01-22_site_0.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-03/Manual_SF%202622%20MR%20L2_portugues_01-22_site.pdf",
    },
    {
      id: "20",
      modelo: "SG 1002 MR L2+",
      linha: "switch",
      portas: "8 Portas",
      modulação: "Giga",
      gerenciavel: "Sim",
      sfp: "2 Independentes",
      taxaTransferencia: "15 Mpps",
      backplane: "20 Gbps",
      pdAlive: "N\xE3o",
      qos: "Sim",
      poe: "N\xE3o",
      poeExtender: "N\xE3o",
      poePorta: " ",
      poeTotal: " ",
      status: "Suporte",
      garantia: "3 Anos",
      pagina: "https://www.intelbras.com/pt-br/switch-gerenciavel-com-8-portas-giga-2-portas-mini-gbic-sg-1002-mr-l2",
      datasheet: "http://backend.intelbras.com/sites/default/files/2021-05/Datasheet%20SG%201002%20MR%20L2%2B%202021.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-03/Guia_SG%201002%20MR%20L2%2B_01-22_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-05/Manual_SG%201002%20MR%20L2%20_02-22_site%20%282%29.pdf",
    },
    {
      id: "21",
      modelo: "SG 1002 MR",
      linha: "switch",
      portas: "8 Portas",
      modulação: "Giga",
      gerenciavel: "Sim",
      sfp: "2 Independentes",
      taxaTransferencia: "14,9 Mpps",
      backplane: "20 Gbps",
      pdAlive: "N\xE3o",
      qos: "Sim",
      poe: "N\xE3o",
      poeExtender: "N\xE3o",
      poePorta: " ",
      poeTotal: " ",
      status: "Suporte",
      garantia: "3 Anos",
      pagina: "https://www.intelbras.com/pt-br/switch-gerenciavel-8-portas-gigabit-ethernet-sg-1002-mr",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-04/datasheet_switches_gerenciaveis_03-22_2_1.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_de_instalacao_sg-1002-mr_portugues_01-18_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/integration/manual_do_usuario_sg_1002_mr_03-18_site.pdf",
    },
    {
      id: "22",
      modelo: "SG 2404 MR",
      linha: "switch",
      portas: "24 Portas",
      modulação: "Giga",
      gerenciavel: "Sim",
      sfp: "4 Combo",
      taxaTransferencia: "35,7 Mpps",
      backplane: "48 Gbps",
      pdAlive: "N\xE3o",
      qos: "Sim",
      poe: "N\xE3o",
      poeExtender: "N\xE3o",
      poePorta: " ",
      poeTotal: " ",
      status: "Suporte",
      garantia: "3 Anos",
      pagina: "https://www.intelbras.com/pt-br/switch-gerenciavel-24-portas-gigabit-ethernet-sg-2404-mr",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-04/datasheet_switches_gerenciaveis_03-22_2_1.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-03/Guia_SG%202404%20MR_01-22_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-03/Manual_SG_2404_MR_01-22_site.pdf",
    },
    {
      id: "23",
      modelo: "SG 2404 MR L2+",
      linha: "switch",
      portas: "24 Portas",
      modulação: "Giga",
      gerenciavel: "Sim",
      sfp: "4 Combo",
      taxaTransferencia: "38,7 Mpps",
      backplane: "56 Gbps",
      pdAlive: "N\xE3o",
      qos: "Sim",
      poe: "N\xE3o",
      poeExtender: "N\xE3o",
      poePorta: " ",
      poeTotal: " ",
      status: "Suporte",
      garantia: "3 Anos",
      pagina: "https://www.intelbras.com/pt-br/switch-gerenciavel-24p-giga-4p-gbic-sg-2404-mr-l2",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-08/Datasheet%20SG%202404%20MR%20L2%2B_0.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-03/Guia_SG_2404_MR_L2%2B_01-22_site.pdf",
      manual: "https://manuais-switches.intelbras.com.br/pt-BR/LinhaMR.html",
    },
    {
      id: "24",
      modelo: "SG 2404 PoE",
      linha: "switch",
      portas: "24 Portas",
      modulação: "Giga",
      gerenciavel: "Sim",
      sfp: "4 Combo",
      taxaTransferencia: "35,7 Mpps",
      backplane: "48 Gbps",
      pdAlive: "N\xE3o",
      qos: "Sim",
      poe: "Sim | 802.3af - 802.3at",
      poeExtender: "N\xE3o",
      poePorta: "30 W",
      poeTotal: "180 W",
      status: "Suporte",
      garantia: "3 Anos",
      pagina: "https://www.intelbras.com/pt-br/switch-gerenciavel-24-portas-poe-gigabit-ethernet-sg-2404-poe",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-04/datasheet_switches_gerenciaveis_03-22_2_1.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-03/Guia_SG_2404_PoE_portugues_01-22_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-03/Manual_SG_2404_PoE_portugues_01-22_site.pdf",
    },
    {
      id: "25",
      modelo: "SG 2404 PoE L2+",
      linha: "switch",
      portas: "24 Portas",
      modulação: "Giga",
      gerenciavel: "Sim",
      sfp: "4 Combo",
      taxaTransferencia: "41,7 Mbps ",
      backplane: "56 Gbps",
      pdAlive: "N\xE3o",
      qos: "Sim",
      poe: "Sim | 802.3af - 802.3at",
      poeExtender: "N\xE3o",
      poePorta: "35 W",
      poeTotal: "240 W",
      status: "Suporte",
      garantia: "3 Anos",
      pagina: "https://www.intelbras.com/pt-br/sg-2404-poe-l2-switch-gerenciavel-24-portas-poe-gigabit-ethernet-sg-2404-poe-l2",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-08/Datasheet%20SG%202404%20PoE%20L2%2B.pdf",
      guia: "https://manuais-switches.intelbras.com.br/pt-BR/SG2404PoEL2+_guia.html",
      manual: "https://manuais-switches.intelbras.com.br/pt-BR/S-Series.html",
    },
    {
      id: "26",
      modelo: "SG 2404D PoE Max",
      linha: "switch",
      portas: "24 Portas",
      modulação: "Giga",
      gerenciavel: "Sim",
      sfp: "4 Independentes",
      taxaTransferencia: "44,3 Mpps",
      backplane: "56 Gbps",
      pdAlive: "N\xE3o",
      qos: "Sim",
      poe: "Sim | 802.3af/B - 802.3at",
      poeExtender: "N\xE3o",
      poePorta: "30 W",
      poeTotal: "320 W",
      status: "Suporte",
      garantia: "3 Anos",
      pagina: "https://www.intelbras.com/pt-br/switch-gerenciavel-24-portas-gigabit-4-mini-gbic-sg-2404d-poe-max",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-08/SG%202404D%20PoE%20Max%20datasheet_1.pdf",
      guia: "https://manuais-switches.intelbras.com.br/pt-BR/SG2404DPoEMax_guia.html",
      manual: "https://manuais-switches.intelbras.com.br/pt-BR/SG2404DPoEMax_manual.html",
    },
    {
      id: "27",
      modelo: "SG 2404D MR L2+",
      linha: "switch",
      portas: "24 Portas",
      modulação: "Giga",
      gerenciavel: "Sim",
      sfp: "4 Independentes",
      taxaTransferencia: "44,3 Mpps",
      backplane: "56 Gbps",
      pdAlive: "N\xE3o",
      qos: "Sim",
      poe: "N\xE3o",
      poeExtender: "N\xE3o",
      poePorta: " ",
      poeTotal: " ",
      status: "Suporte",
      garantia: "3 Anos",
      pagina: "https://www.intelbras.com/pt-br/switch-gerenciavel-24-portas-gigabit-ethernet-sg-2404d-mr-l2",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-08/datasheet-sg-2404d-mr-l2%2B-pt.pdf",
      guia: "-",
      manual: "https://manuais-switches.intelbras.com.br/pt-BR/SG2404DMRL2+_manual.html",
    },
    {
      id: "28",
      modelo: "SG 5200 MR",
      linha: "switch",
      portas: "48 Portas",
      modulação: "Giga",
      gerenciavel: "Sim",
      sfp: "4 Independentes",
      taxaTransferencia: "77,3 Mpps",
      backplane: "104 Gbps",
      pdAlive: "N\xE3o",
      qos: "Sim",
      poe: "N\xE3o",
      poeExtender: "N\xE3o",
      poePorta: " ",
      poeTotal: " ",
      status: "Suporte",
      garantia: "3 Anos",
      pagina: "https://www.intelbras.com/pt-br/switch-gerenciavel-48-portas-gigabit-ethernet-sg-5200-mr",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-04/datasheet_switches_gerenciaveis_03-22_2_1.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_sg_5200_mr_site_arquivo_final.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-03/Manual_SG_5200_MR_portugues_01-22_site.pdf",
    },
    {
      id: "29",
      modelo: "SG 5204 MR L2+",
      linha: "switch",
      portas: "48 Portas",
      modulação: "Giga",
      gerenciavel: "Sim",
      sfp: "4 Independentes",
      taxaTransferencia: "77,4 Mpps",
      backplane: "104 Gbps",
      pdAlive: "N\xE3o",
      qos: "Sim",
      poe: "N\xE3o",
      poeExtender: "N\xE3o",
      poePorta: " ",
      poeTotal: " ",
      status: "Suporte",
      garantia: "3 Anos",
      pagina: "https://www.intelbras.com/pt-br/switch-gerenciavel-48p-giga-sg-5204-mr-l2",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-08/Datasheet%20SG%205204%20MR%20L2%2B.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-03/Guia_usuario_SG_5204_MR%20L2%2B_01-22_site.pdf",
      manual: "https://manuais-switches.intelbras.com.br/pt-BR/LinhaMR.html",
    },
  ],
  Ep = [
    {
      id: "1",
      linha: "onu/ont",
      modelo: "WiFiber 120 AC",
      portas: "2 portas",
      modulação: "Giga",
      fxs: "",
      tipo: "EPON/GPON",
      ssid: "8 SSIDs",
      tr069: "Sim",
      customize: "Sim",
      remotize: "Sim",
      transmissao2ghz: "300 Mbps",
      transmissao5ghz: "867 Mbps",
      transmissaoUPDown: "",
      fibra: "",
      distancia: "",
      antenas: "4",
      clientesSimultaneos: "64",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/modem-optico-pon-lan-2p-wi-fi-ac-wifiber-120-ac",
      datasheet:
        "http://backend.intelbras.com/sites/default/files/2022-09/Ficha%20t%C3%A9cnica%20%28Datasheet%29%20%E2%80%93%20WiFiber%20120%20AC_0.pdf",
      guia: "https://guiasmanuais.intelbras.com.br/WiFiber120AC/home.html",
      manual: "https://guiasmanuais.intelbras.com.br/WiFiber120AC/home.html",
    },
    {
      id: "2",
      linha: "onu/ont",
      modelo: "WiFiber 121 AC",
      portas: "2 portas",
      modulação: "Giga",
      fxs: "1 Porta",
      tipo: "EPON/GPON",
      ssid: "8 SSIDs",
      tr069: "Sim",
      customize: "Sim",
      remotize: "Sim",
      transmissao2ghz: "300 Mbps",
      transmissao5ghz: "867 Mbps",
      transmissaoUPDown: "",
      fibra: "",
      distancia: "",
      antenas: "4",
      clientesSimultaneos: "64",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/modem-optico-pon-lan-2p-fxs-1p-wi-fi-ac-wifiber-121-ac",
      datasheet:
        "http://backend.intelbras.com/sites/default/files/2022-09/Ficha%20t%C3%A9cnica%20%28Datasheet%29%20%E2%80%93%20WiFiber%20121%20AC.pdf",
      guia: "https://guiasmanuais.intelbras.com.br/WiFiber121AC/home.html",
      manual: "https://guiasmanuais.intelbras.com.br/WiFiber121AC/home.html",
    },
    {
      id: "3",
      linha: "onu/ont",
      modelo: "WiFiber 1200R",
      portas: "2 portas",
      modulação: "Giga",
      fxs: "",
      tipo: "EPON/GPON",
      ssid: "10 SSIDs",
      tr069: "Sim",
      customize: "Sim",
      remotize: "Sim",
      transmissao2ghz: "300 Mbps",
      transmissao5ghz: "867 Mbps",
      transmissaoUPDown: "",
      fibra: "",
      distancia: "",
      antenas: "4",
      clientesSimultaneos: "64",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/modem-optico-pon-lan-2p-wi-fi-ac-ont-wifiber-1200r",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-09/Datasheet%20ONT%20WiFiber%201200R%20Editavel%20V3.pdf",
      guia: "https://guiasmanuais.intelbras.com.br/WiFiber1200R/home.html",
      manual: "https://guiasmanuais.intelbras.com.br/WiFiber1200R/home.html",
    },
    {
      id: "4",
      linha: "onu/ont",
      modelo: "142NW",
      portas: "4 portas",
      modulação: "Giga",
      fxs: "2 Portas",
      tipo: "EPON/GPON",
      ssid: "4 SSIDs",
      tr069: "Sim",
      customize: "Sim",
      remotize: "N\xE3o",
      transmissao2ghz: "300 Mbps",
      transmissao5ghz: "",
      transmissaoUPDown: "",
      fibra: "",
      distancia: "",
      antenas: "2",
      clientesSimultaneos: "64",
      status: "Phaseout",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/conversor-de-sinal-gponepon-em-sinal-ethernet-ou-wi-fi-ont-142n-w",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-06/Datasheet%20ONT%20142N%20W_0.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_do_usuario_ONT_142NW_portugues_01-22.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-06/Manual_de_usuario_ONT_142_NW_portugues_01-22.pdf",
    },
    {
      id: "5",
      linha: "onu/ont",
      modelo: "121W",
      portas: "2 portas",
      modulação: "Giga/Fast",
      fxs: "1 Porta",
      tipo: "EPON/GPON",
      ssid: "4 SSIDs",
      tr069: "Sim",
      customize: "Sim",
      remotize: "N\xE3o",
      transmissao2ghz: "300 Mbps",
      transmissao5ghz: "",
      transmissaoUPDown: "",
      fibra: "",
      distancia: "",
      antenas: "2",
      clientesSimultaneos: "64",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/conversor-de-sinal-gponepon-em-sinal-ethernet-ou-wi-fi-ont-121-w",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-06/Datasheet%20ONT%20121%20W_1.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_do_usuario_ONT_121W_01-22.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-06/Manual_do_usuario_ONT_121W_portugues_01-22.pdf",
    },
    {
      id: "6",
      linha: "onu/ont",
      modelo: "142NG",
      portas: "4 portas",
      modulação: "Giga",
      fxs: "2 Portas",
      tipo: "GPON",
      ssid: "4 SSIDs",
      tr069: "Sim",
      customize: "N\xE3o",
      remotize: "N\xE3o",
      transmissao2ghz: "300 Mbps",
      transmissao5ghz: "",
      transmissaoUPDown: "",
      fibra: "",
      distancia: "",
      antenas: "2",
      clientesSimultaneos: "16 por ssid",
      status: "Phaseout",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/ont-4-portas-gigabit-ethernet-e-2-portas-fxs-e-wi-fi-ont-142n-g",
      datasheet: "https://backend.intelbras.com/sites/default/files/2019-11/Datasheet_Gpon_ONT_1420_G_e_ONT_142N_G_01-19.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_de_instalacao_ONT_142N_G_portugues_01-22_0.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-06/Manual_do_usuario_ONT_142N_G_1420_G_portugues_01-22.pdf",
    },
    {
      id: "7",
      linha: "onu/ont",
      modelo: "R1",
      portas: "1 porta",
      modulação: "Giga",
      fxs: "",
      tipo: "EPON/GPON",
      ssid: "",
      tr069: "Sim",
      customize: "Sim",
      remotize: "N\xE3o",
      transmissao2ghz: "",
      transmissao5ghz: "",
      transmissaoUPDown: "",
      fibra: "Monomodo",
      distancia: "20 Km",
      antenas: "",
      clientesSimultaneos: "",
      status: "Suporte",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/modem-optico-pon-lan-1p-onu-r1",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-09/Datasheet%20ONU%20R1%20CKD%20V3.pdf",
      guia: "https://guiasmanuais.intelbras.com.br/R1/home.html",
      manual: "https://guiasmanuais.intelbras.com.br/R1/home.html",
    },
    {
      id: "8",
      linha: "onu/ont",
      modelo: "110B",
      portas: "1 porta",
      modulação: "Giga",
      fxs: "",
      tipo: "EPON/GPON",
      ssid: "",
      tr069: "N\xE3o",
      customize: "Sim",
      remotize: "N\xE3o",
      transmissao2ghz: "",
      transmissao5ghz: "",
      transmissaoUPDown: "",
      fibra: "Monomodo",
      distancia: "20 Km",
      antenas: "",
      clientesSimultaneos: "",
      status: "Phaseout",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/conversor-de-sinal-pon-para-sinal-ethernet-onu-110-b",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-11/Datasheet%20ONU%20110B.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2021-10/Guia_ONU_110_B.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-10/Manual_ONU_110B.pdf",
    },
    {
      id: "9",
      linha: "onu/ont",
      modelo: "110G",
      portas: "1 porta",
      modulação: "Giga",
      fxs: "",
      tipo: "GPON",
      ssid: "",
      tr069: "N\xE3o",
      customize: "N\xE3o",
      remotize: "N\xE3o",
      transmissao2ghz: "",
      transmissao5ghz: "",
      transmissaoUPDown: "1000 Mbps",
      fibra: "Monomodo",
      distancia: "20 Km",
      antenas: "",
      clientesSimultaneos: "",
      status: "Phaseout",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/onu-1-porta-gigabit-ethernet-onu-110-g",
      datasheet: "https://backend.intelbras.com/sites/default/files/2019-11/Datasheet_ONU_110G_01-19.PDF",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_onu_110_g_portugues_01-16.pdf",
      manual: "-",
    },
    {
      id: "10",
      linha: "onu/ont",
      modelo: "110",
      portas: "1 porta",
      modulação: "Giga",
      fxs: "",
      tipo: "EPON/GPON",
      ssid: "",
      tr069: "N\xE3o",
      customize: "N\xE3o",
      remotize: "N\xE3o",
      transmissao2ghz: "",
      transmissao5ghz: "",
      transmissaoUPDown: "1000 Mbps",
      fibra: "Monomodo",
      distancia: "20 Km",
      antenas: "",
      clientesSimultaneos: "",
      status: "Phaseout",
      garantia: "1 Ano",
      pagina: "https://www.intelbras.com/pt-br/1-porta-gigabit-ethernet-onu-110",
      datasheet: "http://backend.intelbras.com/sites/default/files/2020-07/Datasheet-onu-110.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2020-09/Guia_ONU_110_portugues_02-20_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2021-05/Manual_ONU_110_portugues_01-21_site.pdf",
    },
  ],
  Ap = [
    {
      id: "1",
      modelo: "RF 301K",
      linha: "roteador",
      cobertura: "70m\xB2",
      raio: "4,72m",
      usuarioMax: "10 usu\xE1rios",
      planoRecomendado: "At\xE9 40Mbps",
      QtdePortas: "3 (LAN) + 1 (WAN)",
      porta: "Fast",
      datarateMax: "2Ghz (300Mbps)",
      ipv6: "Sim",
      wps: "Sim",
      antenas: "2x2 (2,4GHz)",
      ganho: "5dBi (2,4GHz)",
      potenciaMax: "100 mW (2,4GHz)",
      tensao: "9 - 12V (0,6 - 1A)",
      consumo: "5,4W",
      repetidor: "Sim",
      roteador: "Sim",
      cliente: "Sim",
      ap: "Sim",
      garantia: "5 anos",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/roteador-wi-fi-n-300-mpbs-rf-301k",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-10/RF%20301K%20datasheet%2031.10.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-01/Guia_RF_301K_01-22.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-07/Manual_RF_301K_portugues_07-22_site_0.pdf",
    },
    {
      id: "2",
      modelo: "W4 300F",
      linha: "roteador",
      cobertura: "70m\xB2",
      raio: "4,72m",
      usuarioMax: "10 usu\xE1rios",
      planoRecomendado: "At\xE9 70Mbps",
      QtdePortas: "3 (LAN) + 1 (WAN)",
      porta: "Fast",
      datarateMax: "2Ghz (300Mbps)",
      ipv6: "Sim",
      wps: "Sim",
      antenas: "2x2 (2,4GHz)",
      ganho: "5dBi (2,4GHz)",
      potenciaMax: "250 mW (2,4GHz)",
      tensao: "12V (1A)",
      consumo: "12W",
      repetidor: "N\xE3o",
      roteador: "Sim",
      cliente: "N\xE3o",
      ap: "N\xE3o",
      garantia: "5 anos",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/roteador-wi-fi-4-wi-force-w4-300f",
      datasheet: "http://backend.intelbras.com/sites/default/files/2021-11/Datasheet%20Wi-Force%20W4-300F%20-%2018112021.pdf",
      guia: "https://manual-bifrost.intelbras.com.br/",
      manual: "https://manual-bifrost.intelbras.com.br/",
    },
    {
      id: "3",
      modelo: "ACTION RF 1200",
      linha: "roteador",
      cobertura: "80m\xB2",
      raio: "5,04m",
      usuarioMax: "20 usu\xE1rios",
      planoRecomendado: "At\xE9 100Mbps",
      QtdePortas: "3 (LAN) + 1 (WAN)",
      porta: "Fast",
      datarateMax: "2Ghz (300Mbps) | 5G (867Mbps)",
      ipv6: "Sim",
      wps: "Sim",
      antenas: "2x2 (2,4GHz) // 2x2 (5 GHz)",
      ganho: "5dBi (2,4GHz) | 5dBi (5GHz)",
      potenciaMax: "63 mW (2,4GHz) | 126 mW (5GHz)",
      tensao: "9V (1A)",
      consumo: "9W",
      repetidor: "Sim",
      roteador: "Sim",
      cliente: "Sim",
      ap: "Sim",
      garantia: "5 anos",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/roteador-wireless-smart-dual-band-action-rf-1200",
      datasheet: "http://backend.intelbras.com/sites/default/files/2021-12/Datasheet%20ACtion%20RF%201200%20-%2001.12.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2021-10/Guia_Action_RF1200_02-21_site_0.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-09/Manual_ACTION_RF1200_02-22.pdf",
    },
    {
      id: "4",
      modelo: "W5 1200F",
      linha: "roteador",
      cobertura: "80m\xB2",
      raio: "5,04m",
      usuarioMax: "20 usu\xE1rios",
      planoRecomendado: "At\xE9 100Mbps",
      QtdePortas: "3 (LAN) + 1 (WAN)",
      porta: "Fast",
      datarateMax: "2Ghz (300Mbps) | 5G (867Mbps)",
      ipv6: "Sim",
      wps: "Sim",
      antenas: "2x2 (2,4GHz) // 2x2 (5 GHz)",
      ganho: "5dBi (2,4GHz) | 5dBi (5GHz)",
      potenciaMax: "250 mW (2,4GHz) | 200 mW (5GHz)",
      tensao: "12V (1A)",
      consumo: "12W",
      repetidor: "N\xE3o",
      roteador: "Sim",
      cliente: "N\xE3o",
      ap: "N\xE3o",
      garantia: "5 anos",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/roteador-wi-fi-5-dual-band-ac-1200-wi-force-w5-1200f",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-04/Datasheet%20Wi-Force%20W5-1200F%20-%2028042022.pdf",
      guia: "https://manual-bifrost.intelbras.com.br/",
      manual: "https://manual-bifrost.intelbras.com.br/",
    },
    {
      id: "5",
      modelo: "TWIBI FAST",
      linha: "roteador",
      cobertura: "100m\xB2",
      raio: "5,64m",
      usuarioMax: "40 usu\xE1rios",
      planoRecomendado: "At\xE9 100Mbps",
      QtdePortas: "1(LAN) + 1(W / L)",
      porta: "Fast",
      datarateMax: "2Ghz (300Mbps) | 5G (867Mbps)",
      ipv6: "Sim",
      wps: "Sim",
      antenas: "2x2 Compartilhadas",
      ganho: "3dBi (Compartilhadas)",
      potenciaMax: "160 mW (2,4GHz | 5GHz)",
      tensao: "9V (1A)",
      consumo: "9W",
      repetidor: "N\xE3o",
      roteador: "Sim",
      cliente: "N\xE3o",
      ap: "Sim",
      garantia: "5 anos",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/roteador-wi-fi-5-mesh-twibi-fast",
      datasheet: "http://backend.intelbras.com/sites/default/files/2021-12/Datasheet%20Twibi%20Fast%20-%2001.12.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2020-11/Guia-de-instalacao-twibi-fast-01.20.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-11/Manual_Twibi_FAST_portugues_05-22.pdf",
    },
    {
      id: "6",
      modelo: "ACTION RG 1200",
      linha: "roteador",
      cobertura: "120m\xB2",
      raio: "6,18m",
      usuarioMax: "40 usu\xE1rios",
      planoRecomendado: "Acima de 100Mbps",
      QtdePortas: "3 (LAN) + 1 (WAN)",
      porta: "Giga",
      datarateMax: "2Ghz (300Mbps) | 5G (867Mbps)",
      ipv6: "Sim",
      wps: "Sim",
      antenas: "2x2 (2,4GHz) // 2x2 (5 GHz)",
      ganho: "5dBi (2,4GHz) | 5dBi (5GHz)",
      potenciaMax: "158 mW (2,4GHz) | 158 mW (5GHz)",
      tensao: "12V (1A)",
      consumo: "12W",
      repetidor: "Sim",
      roteador: "Sim",
      cliente: "Sim",
      ap: "Sim",
      garantia: "5 anos",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/roteador-wireless-smart-dual-band-gigabit-action-rg-1200",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-11/Datasheet%20ACtion%20RG%201200%20-%20Ficha%20t%C3%A9cnica.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-06/Guia_Action_RG1200_06-22_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-10/Manual_ACTION_RG1200_03-22.pdf",
    },
    {
      id: "7",
      modelo: "GF 1200",
      linha: "roteador",
      cobertura: "100m\xB2",
      raio: "5,64m",
      usuarioMax: "30 usu\xE1rios",
      planoRecomendado: "Acima de 100Mbps",
      QtdePortas: "3 (LAN) + 1 (WAN)",
      porta: "Giga WAN | Fast LAN",
      datarateMax: "2Ghz (300Mbps) | 5G (867Mbps)",
      ipv6: "Sim",
      wps: "Sim",
      antenas: "2x2 (2,4GHz) // 2x2 (5 GHz)",
      ganho: "5dBi (2,4GHz) | 5dBi (5GHz)",
      potenciaMax: "316 mW (2,4GHz) | 158 mW (5GHz)",
      tensao: "12V (1A)",
      consumo: "12W",
      repetidor: "N\xE3o",
      roteador: "Sim",
      cliente: "N\xE3o",
      ap: "N\xE3o",
      garantia: "5 anos",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/roteador-wi-fi-5-ac-1200-com-porta-internet-giga-e-lan-fast-wi-force-gf-1200",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-04/Datasheet%20Wi-Force%20GF%201200%20-%2028042022.pdf",
      guia: "https://manual-bifrost.intelbras.com.br/",
      manual: "https://manual-bifrost.intelbras.com.br/",
    },
    {
      id: "8",
      modelo: "W5 1200G",
      linha: "roteador",
      cobertura: "120m\xB2",
      raio: "6,18m",
      usuarioMax: "40 usu\xE1rios",
      planoRecomendado: "Acima de 100Mbps",
      QtdePortas: "3 (LAN) + 1 (WAN)",
      porta: "Giga",
      datarateMax: "2Ghz (300Mbps) | 5G (867Mbps)",
      ipv6: "Sim",
      wps: "Sim",
      antenas: "2x2 (2,4GHz) // 2x2 (5 GHz)",
      ganho: "5dBi (2,4GHz) | 5dBi (5GHz)",
      potenciaMax: "316 mW (2,4GHz) | 158 mW (5GHz)",
      tensao: "9 - 12V (1A)",
      consumo: "9 - 12W",
      repetidor: "N\xE3o",
      roteador: "Sim",
      cliente: "N\xE3o",
      ap: "N\xE3o",
      garantia: "5 anos",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/roteador-wi-fi-5-wi-force-w5-1200g",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-11/Datasheet%20Wi-Force%20W5-1200G%20-%20Ficha%20t%C3%A9cnica.pdf",
      guia: "https://manual-bifrost.intelbras.com.br/",
      manual: "https://manual-bifrost.intelbras.com.br/",
    },
    {
      id: "9",
      modelo: "TWIBI GIGA",
      linha: "roteador",
      cobertura: "180m\xB2",
      raio: "7,56m",
      usuarioMax: "60 usu\xE1rios",
      planoRecomendado: "At\xE9 400Mbps",
      QtdePortas: "1(LAN) + 1(W / L)",
      porta: "Giga",
      datarateMax: "2Ghz (300Mbps) | 5G (867Mbps)",
      ipv6: "Sim",
      wps: "Sim",
      antenas: "2x2 Compartilhadas",
      ganho: "3dBi (Compartilhadas)",
      potenciaMax: "315 mW (2,4GHz | 5GHz)",
      tensao: "12V(1,5)",
      consumo: "18W",
      repetidor: "N\xE3o",
      roteador: "Sim",
      cliente: "N\xE3o",
      ap: "Sim",
      garantia: "5 anos",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/roteador-wireless-mesh-twibi-giga",
      datasheet: "http://backend.intelbras.com/sites/default/files/2021-12/Datasheet%20Twibi%20Giga%20-%2001.12.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-11/Manual_Twibi_GIGA_portugues_05-22.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-11/Manual_Twibi_GIGA_portugues_05-22_site_0.pdf",
    },
    {
      id: "10",
      modelo: "TWIBI GIGA+",
      linha: "roteador",
      cobertura: "180m\xB2",
      raio: "7,56m",
      usuarioMax: "60 usu\xE1rios",
      planoRecomendado: "At\xE9 400Mbps",
      QtdePortas: "1(LAN) + 1(W / L)",
      porta: "Giga",
      datarateMax: "2Ghz (300Mbps) | 5G (867Mbps)",
      ipv6: "Sim",
      wps: "Sim",
      antenas: "2x2 Compartilhadas",
      ganho: "3dBi (Compartilhadas)",
      potenciaMax: "315 mW (2,4GHz | 5GHz)",
      tensao: "12V (1A)",
      consumo: "12W",
      repetidor: "N\xE3o",
      roteador: "Sim",
      cliente: "N\xE3o",
      ap: "Sim",
      garantia: "5 anos",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/roteador-wi-fi-5-mesh-ac-1200-twibi-giga",
      datasheet: "http://backend.intelbras.com/sites/default/files/2021-12/Datasheet%20Twibi%20Giga%2B%20-%2001.12.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2021-02/Guia_Twibi_Giga%2B_03-20_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2022-12/Manual_Twibi_GIGA%20_portugues_07-22.pdf",
    },
    {
      id: "11",
      modelo: "ACTION A 1200",
      linha: "roteador",
      cobertura: "N/A",
      raio: "N/A",
      usuarioMax: "N/A",
      planoRecomendado: "N/A",
      QtdePortas: "1 (USB)",
      porta: "USB 3.0",
      datarateMax: "2Ghz (300Mbps) | 5G (867Mbps)",
      ipv6: "Sim",
      wps: "N/A",
      antenas: "2x2 Compartilhadas",
      ganho: "1dBi (2,4GHz) | 2dBi (5GHz)",
      potenciaMax: "100 mW (2,4GHz) | 30 mW (5GHz)",
      tensao: "5V (USB)",
      consumo: "N/A",
      repetidor: "N/A",
      roteador: "N/A",
      cliente: "N/A",
      ap: "N/A",
      garantia: "5 anos",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/adaptador-usb-wireless-dual-band-action-a1200",
      datasheet: "http://backend.intelbras.com/sites/default/files/2021-06/Datasheet%20A1200_0.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2021-07/Manual_ACtion_1200_portugues_01-21_site.pdf",
      manual: "-",
    },
    {
      id: "12",
      modelo: "IWA 3001",
      linha: "roteador",
      cobertura: "N/A",
      raio: "N/A",
      usuarioMax: "N/A",
      planoRecomendado: "At\xE9 40Mbps",
      QtdePortas: "1 (USB)",
      porta: "USB 2.0",
      datarateMax: "2Ghz (300Mbps)",
      ipv6: "Sim",
      wps: "N/A",
      antenas: "2x2 (2,4GHz)",
      ganho: "3,5 dBi externa | 1 dBi interna",
      potenciaMax: "100 mW (2,4GHz)",
      tensao: "5V (USB)",
      consumo: "N/A",
      repetidor: "N/A",
      roteador: "N/A",
      cliente: "N/A",
      ap: "N/A",
      garantia: "5 anos",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/adaptador-usb-wireless-com-antena-externa-iwa-3001",
      datasheet: "http://backend.intelbras.com/sites/default/files/2021-02/datasheet-IWA-3001_0.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2021-10/Manual_IWA_3001_portugues_01-21_site_0.pdf",
      manual: "-",
    },
    {
      id: "13",
      modelo: "RX 1500",
      linha: "roteador",
      cobertura: "140m\xB2",
      raio: "66,755",
      usuarioMax: "128 usu\xE1rios",
      planoRecomendado: "At\xE9 600Mbps",
      QtdePortas: "3 (LAN) + 1 (WAN)",
      porta: "Giga",
      datarateMax: "2Ghz (300Mbps) | 5G (1200Mbps)",
      ipv6: "Sim",
      wps: "Sim",
      antenas: "2x2 (2,4GHz) // 2x2 (5 GHz)",
      ganho: "5dBi (2,4GHz) | 5dBi (5GHz)",
      potenciaMax: "158 mW (2,4GHz) | 158 mW (5GHz)",
      tensao: "12V (1A)",
      consumo: "12W",
      repetidor: "N\xE3o",
      roteador: "Sim",
      cliente: "N\xE3o",
      ap: "N\xE3o",
      garantia: "5 anos",
      status: "Suporte",
      pagina: "https://www.intelbras.com/pt-br/roteador-wi-fi-6-dual-band-ax-1500-rx-1500",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-11/Datasheet%20RX%201500%20-%20Ficha%20t%C3%A9cnica.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2022-08/guia-de-instalacao-rx-1500-pt.pdf",
      manual: "https://manuais.intelbras.com.br/manual-roteador-rx-1500/",
    },
    {
      id: "14",
      modelo: "ACTION R 1200",
      linha: "roteador",
      cobertura: "80m\xB2",
      raio: "5,04m",
      usuarioMax: "10 usu\xE1rios",
      planoRecomendado: "N/A",
      QtdePortas: "3 (LAN) + 1 (WAN)",
      porta: "Fast",
      datarateMax: "2Ghz (300Mbps) | 5G (867Mbps)",
      ipv6: "Sim",
      wps: "Sim",
      antenas: "2x2 (2,4GHz) // 2x2 (5 GHz)",
      ganho: "5dBi (2,4GHz) | 5dBi (5GHz)",
      potenciaMax: "100 mW (2,4GHz) | 200 mW (5GHz)",
      tensao: "12V (1A)",
      consumo: "12W",
      repetidor: "Sim",
      roteador: "Sim",
      cliente: "Sim",
      ap: "Sim",
      garantia: "5 anos",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/roteador-wireless-smart-dual-band-action-r1200",
      datasheet: "http://backend.intelbras.com/sites/default/files/2022-07/datasheet_a4_icon_action_r1200_0_0.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_action_r1200_01-18_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/integration/manual_action_r1200_01-18_site_08_18.pdf",
    },
    {
      id: "15",
      modelo: "IWE 3000N",
      linha: "roteador",
      cobertura: "40m\xB2",
      raio: "3,56m",
      usuarioMax: "5 usu\xE1rios",
      planoRecomendado: "N/A",
      QtdePortas: "1 (LAN)",
      porta: "Fast",
      datarateMax: "2Ghz (300Mbps)",
      ipv6: "N\xE3o",
      wps: "Sim",
      antenas: "2x2 (2,4GHz)",
      ganho: "2dBi (2,4GHz)",
      potenciaMax: "100 mW (2,4GHz)",
      tensao: "(SEM FONTE)",
      consumo: "6W",
      repetidor: "Sim",
      roteador: "N\xE3o",
      cliente: "N\xE3o",
      ap: "Sim",
      garantia: "5 anos",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/repetidor-de-sinal-wireless-iwe-3000n",
      datasheet: "-",
      guia: "https://backend.intelbras.com/sites/default/files/2021-10/Guia_IWE_3000N_portugu%C3%AAs_01-21_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2021-10/Manual%20IWE-3000N_portugues_01-21_site.pdf",
    },
    {
      id: "16",
      modelo: "IWE 3001",
      linha: "roteador",
      cobertura: "40m\xB2",
      raio: "3,56m",
      usuarioMax: "5 usu\xE1rios",
      planoRecomendado: "N/A",
      QtdePortas: "N/A",
      porta: "Fast",
      datarateMax: "2Ghz (300Mbps)",
      ipv6: "N\xE3o",
      wps: "Sim",
      antenas: "2x2 (2,4GHz)",
      ganho: "3dBi (2,4GHz)",
      potenciaMax: "100 mW (2,4GHz)",
      tensao: "(SEM FONTE)",
      consumo: "6W",
      repetidor: "Sim",
      roteador: "N\xE3o",
      cliente: "N\xE3o",
      ap: "N\xE3o",
      garantia: "5 anos",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/repetidor-wi-fi-n300-mbps-iwe-3001",
      datasheet: "-",
      guia: "https://backend.intelbras.com/sites/default/files/2021-10/Guia_IWE_3001_portugu%C3%AAs_01-21_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2021-10/Manual%20IWE%203001_portugues_01-21_site.pdf",
    },
    {
      id: "17",
      modelo: "IWR 1000N",
      linha: "roteador",
      cobertura: "80m\xB2",
      raio: "5,04m",
      usuarioMax: "10 usu\xE1rios",
      planoRecomendado: "N/A",
      QtdePortas: "4 (LAN) + 1 (WAN)",
      porta: "Fast",
      datarateMax: "2Ghz (150Mbps)",
      ipv6: "Sim",
      wps: "Sim",
      antenas: "1x1 (2,4GHz)",
      ganho: "5dBi (2,4GHz)",
      potenciaMax: "100 mW (2,4GHz)",
      tensao: "12V (0,5A)",
      consumo: "6W",
      repetidor: "Sim",
      roteador: "Sim",
      cliente: "N\xE3o",
      ap: "N\xE3o",
      garantia: "5 anos",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/roteador-wireless-com-ipv6-iwr-1000n",
      datasheet: "https://backend.intelbras.com/sites/default/files/integration/datasheet_iwr_1000n_site_02-18_0.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2019-02/Guia_IWR_1000N_01-19_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/integration/manual_iwr_1000n_02-18_site.pdf",
    },
    {
      id: "18",
      modelo: "IWR 3000N",
      linha: "roteador",
      cobertura: "70m\xB2",
      raio: "4,72m",
      usuarioMax: "10 usu\xE1rios",
      planoRecomendado: "At\xE9 40Mbps (F.D.M)",
      QtdePortas: "4 (LAN) + 1 (WAN)",
      porta: "Fast",
      datarateMax: "2Ghz (300Mbps)",
      ipv6: "Sim",
      wps: "Sim",
      antenas: "2x2 (2,4GHz)",
      ganho: "5dBi (2,4GHz)",
      potenciaMax: "100 mW (2,4GHz)",
      tensao: "12V (0,3 - 0,5A)",
      consumo: "3,6 - 6W",
      repetidor: "Sim",
      roteador: "Sim",
      cliente: "N\xE3o",
      ap: "N\xE3o",
      garantia: "5 anos",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/roteador-wireless-com-ipv6-iwr-3000n",
      datasheet: "http://backend.intelbras.com/sites/default/files/2020-06/Datasheet-IWR-3000-N-01.20.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/2021-11/Guia_IWR_3000N_01-21_site.pdf",
      manual: "https://backend.intelbras.com/sites/default/files/2021-11/Manual_IWR_3000N_01-21_site.pdf",
    },
    {
      id: "19",
      modelo: "WIN 300",
      linha: "roteador",
      cobertura: "N/A",
      raio: "N/A",
      usuarioMax: "N/A",
      planoRecomendado: "N/A",
      QtdePortas: "4 (LAN) + 1 (WAN)",
      porta: "Fast",
      datarateMax: "2Ghz (300Mbps)",
      ipv6: "Sim",
      wps: "N\xE3o",
      antenas: "2x2 (2,4GHz)",
      ganho: "5dBi (2,4GHz)",
      potenciaMax: "500 mW (2,4GHz)",
      tensao: "9 VCC / 1 A (F.D.M)",
      consumo: "6W",
      repetidor: "Sim",
      roteador: "Sim",
      cliente: "Sim",
      ap: "N\xE3o",
      garantia: "2 anos",
      status: "Phaseout",
      pagina: "https://www.intelbras.com/pt-br/ajuda-download/faq/roteador-wireless-de-alta-potencia-win-300",
      datasheet: "https://backend.intelbras.com/sites/default/files/2022-07/datasheet_a4_win_300_intelbras_site_1.pdf",
      guia: "https://backend.intelbras.com/sites/default/files/integration/guia_win_300_portugues_02-17_site.pdf",
      manual: "-",
    },
  ],
  Cp = "_container_83y7t_65",
  Gp = "_header_content_83y7t_75",
  zp = "_aviso_83y7t_93",
  Tp = "_logo_83y7t_107",
  Wp = "_searchbarContainer_83y7t_125",
  Fp = "_mainsearchbar_83y7t_135",
  Bp = "_mainSearchBtn_83y7t_165",
  Dp = "_mainSearchBtnClean_83y7t_167",
  Rp = "_btns_container_83y7t_227",
  Op = "_btns_83y7t_227",
  Hp = "_legendas_83y7t_275",
  Lp = "_btn_hideShow_83y7t_311",
  Vp = "_box_container_83y7t_347",
  Ip = "_box_content_83y7t_361",
  Up = "_header_box_content_83y7t_375",
  Kp = "_arrowHide_83y7t_387",
  jp = "_arrowShow_83y7t_389",
  Qp = "_searchBarDevices_83y7t_431",
  $p = "_status_phaseout_83y7t_455",
  qp = "_status_suporte_83y7t_457",
  Xp = "_pdfbtn_83y7t_513",
  Yp = "_paginalink_83y7t_515",
  Zp = "_pdfbtn_NA_83y7t_517",
  Jp = "_fast_83y7t_571",
  ef = "_giga_83y7t_573",
  tf = "_sim_83y7t_575",
  nf = "_nao_83y7t_577",
  af = "_normal_83y7t_579",
  rf = "_variado1_83y7t_581",
  of = "_variado2_83y7t_583",
  lf = "_variado3_83y7t_585",
  sf = "_NaoPossui_83y7t_679",
  uf = "_devicesTable_83y7t_703",
  df = "_tooltip_83y7t_823",
  cf = "_tooltiptext_83y7t_833",
  pf = "_top_83y7t_875",
  f = {
    container: Cp,
    header_content: Gp,
    aviso: zp,
    logo: Tp,
    searchbarContainer: Wp,
    mainsearchbar: Fp,
    mainSearchBtn: Bp,
    mainSearchBtnClean: Dp,
    btns_container: Rp,
    btns: Op,
    legendas: Hp,
    btn_hideShow: Lp,
    box_container: Vp,
    box_content: Ip,
    header_box_content: Up,
    arrowHide: Kp,
    arrowShow: jp,
    searchBarDevices: Qp,
    status_phaseout: $p,
    status_suporte: qp,
    pdfbtn: Xp,
    paginalink: Yp,
    pdfbtn_NA: Zp,
    fast: Jp,
    giga: ef,
    sim: tf,
    nao: nf,
    normal: af,
    variado1: rf,
    variado2: of,
    variado3: lf,
    NaoPossui: sf,
    devicesTable: uf,
    tooltip: df,
    tooltiptext: cf,
    top: pf,
  };
var yr = {exports: {}},
  kr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ff = ir.exports,
  mf = Symbol.for("react.element"),
  hf = Symbol.for("react.fragment"),
  gf = Object.prototype.hasOwnProperty,
  _f = ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  vf = {key: !0, ref: !0, __self: !0, __source: !0};
function rd(e, t, n) {
  var a,
    r = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (a in t) gf.call(t, a) && !vf.hasOwnProperty(a) && (r[a] = t[a]);
  if (e && e.defaultProps) for (a in ((t = e.defaultProps), t)) r[a] === void 0 && (r[a] = t[a]);
  return {$$typeof: mf, type: e, key: i, ref: l, props: r, _owner: _f.current};
}
kr.Fragment = hf;
kr.jsx = rd;
kr.jsxs = rd;
(function (e) {
  e.exports = kr;
})(yr);
const br = yr.exports.Fragment,
  o = yr.exports.jsx,
  k = yr.exports.jsxs;
function wf() {
  return o("thead", {
    children: k("tr", {
      children: [
        o("th", {children: "Modelo"}),
        o("th", {children: "Cobertura"}),
        o("th", {children: "Raio"}),
        o("th", {children: "Usu\xE1rios simult\xE2neos"}),
        o("th", {children: "Porta"}),
        o("th", {children: "Wireless 2.4ghz"}),
        o("th", {children: "Wireless 5ghz"}),
        o("th", {children: "Qtde Portas"}),
        o("th", {children: "PoE"}),
        o("th", {children: "Handover"}),
        o("th", {children: "WiseFi"}),
        o("th", {children: "Pot\xEAncia M\xE1x."}),
        o("th", {children: "Status"}),
        o("th", {children: "P\xE1gina"}),
        o("th", {children: "Datasheet"}),
        o("th", {children: "Guia"}),
        o("th", {children: "Manual"}),
      ],
    }),
  });
}
function Sf() {
  return o("thead", {
    children: k("tr", {
      children: [
        o("th", {children: "Modelo"}),
        o("th", {children: "Indicado"}),
        o("th", {children: "Ganho"}),
        o("th", {children: "Porta"}),
        o("th", {children: "Pot\xEAncia"}),
        o("th", {children: "Encam. de Pacotes"}),
        o("th", {children: "Throughput Efetivo"}),
        o("th", {children: "Throughput Nominal"}),
        o("th", {children: "Abertura"}),
        o("th", {children: "Dist\xE2ncia M\xE1x"}),
        o("th", {children: "Wireless"}),
        o("th", {children: "Garantia"}),
        o("th", {children: "Status"}),
        o("th", {children: "P\xE1gina"}),
        o("th", {children: "Datasheet"}),
        o("th", {children: "Guia"}),
        o("th", {children: "Manual"}),
      ],
    }),
  });
}
function yf() {
  return o("thead", {
    children: k("tr", {
      children: [
        o("th", {children: "Modelo"}),
        o("th", {children: "Conector"}),
        o("th", {children: "WDM"}),
        o("th", {children: "Dist\xE2ncia"}),
        o("th", {children: "Modula\xE7\xE3o"}),
        o("th", {children: "Fibra"}),
        o("th", {children: "Pot\xEAncia Sinal"}),
        o("th", {children: "Recep\xE7\xE3o Max"}),
        o("th", {children: "Recep\xE7\xE3o Min"}),
        o("th", {children: "Garantia"}),
        o("th", {children: "Status"}),
        o("th", {children: "P\xE1gina"}),
        o("th", {children: "Datasheet"}),
        o("th", {children: "Guia"}),
      ],
    }),
  });
}
function kf() {
  return o(br, {
    children: o("thead", {
      children: k("tr", {
        children: [
          o("th", {children: "Modelo"}),
          o("th", {children: "Conector"}),
          o("th", {children: "Modulo"}),
          o("th", {children: "WDM"}),
          o("th", {children: "Dist\xE2ncia"}),
          o("th", {children: "Modula\xE7\xE3o"}),
          o("th", {children: "Fibra"}),
          o("th", {children: "Pot\xEAncia Sinal"}),
          o("th", {children: "Sensibilidade Max | Min"}),
          o("th", {children: "Garantia"}),
          o("th", {children: "Status"}),
          o("th", {children: "P\xE1gina"}),
          o("th", {children: "Datasheet"}),
          o("th", {children: "Guia"}),
        ],
      }),
    }),
  });
}
function bf() {
  return o(br, {
    children: o("thead", {
      children: k("tr", {
        children: [
          o("th", {children: "Modelo"}),
          o("th", {children: "Portas"}),
          o("th", {children: "Modula\xE7\xE3o"}),
          o("th", {children: "Gerenci\xE1vel"}),
          o("th", {children: "Alimenta via PoE"}),
          o("th", {children: "Encam. de Pacotes"}),
          o("th", {children: "Backplane"}),
          o("th", {children: "Possui SFP"}),
          o("th", {children: "PoE Extender"}),
          o("th", {children: "PoE/Porta"}),
          o("th", {children: "PoE/Total"}),
          o("th", {children: "Qos"}),
          o("th", {children: "Garantia"}),
          o("th", {children: "Status"}),
          o("th", {children: "P\xE1gina"}),
          o("th", {children: "Datasheet"}),
          o("th", {children: "Guia"}),
          o("th", {children: "Manual"}),
        ],
      }),
    }),
  });
}
function Nf() {
  return o(br, {
    children: o("thead", {
      children: k("tr", {
        children: [
          o("th", {children: "Modelo"}),
          o("th", {children: "Porta"}),
          o("th", {children: "Fxs"}),
          o("th", {children: "Tipo"}),
          o("th", {children: "Wireless 2.4ghz"}),
          o("th", {children: "Wireless 5ghz"}),
          o("th", {children: "SSID"}),
          o("th", {children: "TR069"}),
          o("th", {children: "Customize"}),
          o("th", {children: "Remotize"}),
          o("th", {children: "Status"}),
          o("th", {children: "Garantia"}),
          o("th", {children: "P\xE1gina"}),
          o("th", {children: "Datasheet"}),
          o("th", {children: "Guia"}),
          o("th", {children: "Manual"}),
        ],
      }),
    }),
  });
}
function Pf() {
  return o(br, {
    children: o("thead", {
      children: k("tr", {
        children: [
          o("th", {children: "Modelo"}),
          o("th", {children: "Cobertura"}),
          o("th", {children: "Raio"}),
          o("th", {children: "Usu\xE1rios M\xE1ximos"}),
          o("th", {children: "Plano Recomendado"}),
          o("th", {children: "Porta"}),
          o("th", {children: "Quantidade de Portas"}),
          o("th", {children: "Datarate M\xE1x."}),
          o("th", {children: "Ganho da antena"}),
          o("th", {children: "IPV6"}),
          o("th", {children: "Repetidor"}),
          o("th", {children: "Roteador AP"}),
          o("th", {children: "Cliente Wireless"}),
          o("th", {children: "Modo AP "}),
          o("th", {children: "Status"}),
          o("th", {children: "Garantia"}),
          o("th", {children: "P\xE1gina"}),
          o("th", {children: "Datasheet"}),
          o("th", {children: "Guia"}),
          o("th", {children: "Manual"}),
        ],
      }),
    }),
  });
}
function Mf() {
  const [e, t] = ve.useState(""),
    [n, a] = ve.useState(!0),
    r = () => a(!n),
    [i, l] = ve.useState(""),
    [s, u] = ve.useState(!0),
    m = () => u(!s),
    [v, _] = ve.useState(""),
    [g, y] = ve.useState(!0),
    b = () => y(!g),
    [N, D] = ve.useState(""),
    [p, c] = ve.useState(!0),
    h = () => c(!p),
    [w, P] = ve.useState(!0),
    A = () => P(!w),
    [E, C] = ve.useState(!0),
    V = () => C(!E),
    [T, se] = ve.useState(!0),
    St = () => se(!T),
    [Re, fn] = ve.useState(""),
    Nr = (d) => {
      t(d.target.value);
    },
    mn = (d) => {
      l(d.target.value);
    },
    hn = (d) => {
      D(d.target.value);
    },
    M = (d) => {
      _(d.target.value);
    },
    G = (d) => {
      fn(d.target.value);
    },
    z = () => {
      a(!0), u(!0), y(!0), c(!0), P(!0), C(!0), se(!0);
    },
    I = () => {
      a(!1), u(!1), y(!1), c(!1), P(!1), C(!1), se(!1);
    },
    q = `https://www.intelbras.com/pt-br/busca/?q=${Re}&tipo_busca=pagina-resultado`;
  return k("div", {
    className: f.container,
    children: [
      o("a", {href: "#home", children: o("div", {className: f.top})}),
      o("div", {
        className: f.aviso,
        children: k("p", {
          children: [
            o("b", {children: "Aviso!"}),
            " Este \xE9 um material para facilitar o acesso a informa\xE7\xF5es dos principais equipamentos.",
            o("b", {children: " Sempre consulte a documenta\xE7\xE3o oficial."}),
            " :)",
          ],
        }),
      }),
      k("div", {
        className: f.header_content,
        id: "home",
        children: [
          o("div", {className: f.logo, children: o("p", {children: "Olimpo!"})}),
          k("div", {
            className: f.searchbarContainer,
            children: [
              o("input", {className: f.mainsearchbar, value: Re, onChange: G, placeholder: "Pesquise em intelbras.com.br"}),
              o("a", {
                target: "_blank",
                rel: "noopener noreferrer",
                href: q,
                children: Re === "" ? null : o("button", {className: f.mainSearchBtn}),
              }),
              Re === "" ? null : o("button", {className: f.mainSearchBtnClean, onClick: () => fn("")}),
            ],
          }),
          k("div", {
            className: f.btns_container,
            children: [
              o("a", {href: "#ap", children: o("button", {className: f.btns, children: "Access Point"})}),
              o("a", {href: "#radio", children: o("button", {className: f.btns, children: "Radio Outdoor"})}),
              o("a", {href: "#ho", children: o("button", {className: f.btns, children: "Roteador HO"})}),
              o("a", {href: "#switch", children: o("button", {className: f.btns, children: "Switch"})}),
              o("a", {href: "#conversor", children: o("button", {className: f.btns, children: "Conversor de M\xEDdia"})}),
              o("a", {href: "#sfp", children: o("button", {className: f.btns, children: "Modulo SFP"})}),
              o("a", {href: "#onu", children: o("button", {className: f.btns, children: "Onu/Ont"})}),
            ],
          }),
          k("div", {
            className: f.legendas,
            children: [
              o("p", {children: o("b", {children: o("i", {children: "Legendas"})})}),
              k("p", {children: [o("b", {children: "N/A"}), " = Informa\xE7\xE3o N\xE3o Encontrada."]}),
              o("p", {children: "X = N\xE3o Possui a Fun\xE7\xE3o."}),
            ],
          }),
        ],
      }),
      k("div", {
        className: f.box_container,
        children: [
          k("div", {
            children: [
              k("button", {className: f.btn_hideShow, onClick: z, children: ["Mostrar Tudo ", o("i", {className: "fa-solid fa-eye"})]}),
              k("button", {
                className: f.btn_hideShow,
                onClick: I,
                children: ["Ocultar Tudo ", o("i", {className: "fa-regular fa-eye-slash"})],
              }),
            ],
          }),
          k("div", {
            className: f.box_content,
            children: [
              k("div", {
                className: f.header_box_content,
                children: [
                  k("h2", {id: "ap", children: ["Access Point", o("button", {className: n ? f.arrowHide : f.arrowShow, onClick: r})]}),
                  k("label", {
                    children: [
                      o("i", {className: "fa-solid fa-magnifying-glass"}),
                      o("input", {placeholder: "Pesquise o Equipamento", value: e, onChange: Nr, className: f.searchBarDevices}),
                    ],
                  }),
                ],
              }),
              n
                ? o("div", {
                    style: {overflowX: "auto"},
                    children: k("table", {
                      className: f.devicesTable,
                      children: [
                        o(wf, {}),
                        bp
                          .filter((d) => {
                            if (d.modelo.toLowerCase().includes(e.toLowerCase())) return d;
                            if (d.porta.toLowerCase().includes(e.toLowerCase())) return d;
                          })
                          .map((d) =>
                            o("tbody", {
                              children: k("tr", {
                                children: [
                                  o("td", {children: d.modelo}),
                                  o("td", {children: d.cobertura}),
                                  o("td", {children: d.raio}),
                                  o("td", {children: d.usuarioMax}),
                                  o("td", {children: o("span", {className: d.porta === "Fast" ? f.fast : f.giga, children: d.porta})}),
                                  o("td", {children: d.throughputWireless24}),
                                  o("td", {
                                    className: d.throughputWireless50 === "" ? f.NaoPossui : null,
                                    children: d.throughputWireless50,
                                  }),
                                  o("td", {children: d.qtdePortas}),
                                  o("td", {className: d.poe === "" && f.NaoPossui, children: d.poe}),
                                  o("td", {children: d.handover}),
                                  o("td", {children: d.wisefi}),
                                  o("td", {children: d.potenciaMax}),
                                  o("td", {
                                    children: k("span", {
                                      className: f.tooltip,
                                      children: [
                                        k("span", {
                                          children: [
                                            d.status === "Phaseout" && o("span", {className: f.status_phaseout, children: d.status}),
                                            d.status === "Suporte" && o("span", {className: f.status_suporte, children: d.status}),
                                          ],
                                        }),
                                        d.status === "Phaseout" && o("span", {className: f.tooltiptext, children: "Apenas email"}),
                                        d.status === "Suporte" && o("span", {className: f.tooltiptext, children: "Fornecemos suporte"}),
                                      ],
                                    }),
                                  }),
                                  o("td", {
                                    children: o("a", {
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      href: d.pagina,
                                      children: o("span", {className: f.paginalink, children: "P\xE1gina"}),
                                    }),
                                  }),
                                  o("td", {
                                    children: o("a", {
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      href: d.datasheet,
                                      children: o("span", {className: f.pdfbtn, children: "Datasheet"}),
                                    }),
                                  }),
                                  o("td", {
                                    children: o("a", {
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      href: d.guia,
                                      children: o("span", {className: f.pdfbtn, children: "Guia"}),
                                    }),
                                  }),
                                  o("td", {
                                    children: o("a", {
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      href: d.manual,
                                      children: o("span", {className: f.pdfbtn, children: "Manual"}),
                                    }),
                                  }),
                                ],
                              }),
                            })
                          ),
                      ],
                    }),
                  })
                : null,
            ],
          }),
          k("div", {
            className: f.box_content,
            children: [
              k("div", {
                className: f.header_box_content,
                children: [
                  k("h2", {id: "radio", children: ["Radios Outdoor", o("button", {className: s ? f.arrowHide : f.arrowShow, onClick: m})]}),
                  k("label", {
                    children: [
                      o("i", {className: "fa-solid fa-magnifying-glass"}),
                      o("input", {placeholder: "Pesquise o Equipamento", value: i, onChange: mn, className: f.searchBarDevices}),
                    ],
                  }),
                ],
              }),
              s
                ? o("div", {
                    style: {overflowX: "auto"},
                    children: k("table", {
                      className: f.devicesTable,
                      children: [
                        o(Sf, {}),
                        Mp.filter((d) => {
                          if (d.modelo.toLowerCase().includes(i.toLowerCase())) return d;
                          if (d.porta.toLowerCase().includes(i.toLowerCase())) return d;
                        }).map((d) =>
                          o("tbody", {
                            children: k("tr", {
                              children: [
                                o("td", {children: d.modelo}),
                                o("td", {children: d.indicado}),
                                o("td", {
                                  children: k("span", {
                                    className: f.tooltip,
                                    children: [
                                      d.ganho,
                                      d.ganho === "SEM ANTENA" && o("i", {className: "fa-regular fa-circle-question"}),
                                      d.ganho === "SEM ANTENA" &&
                                        k("span", {
                                          className: f.tooltiptext,
                                          children: ["Indicar parceria ", o("a", {href: "http://www.algcom.com.br", children: "ALGCOM"})],
                                        }),
                                    ],
                                  }),
                                }),
                                o("td", {children: o("span", {className: d.porta === "Fast" ? f.fast : f.giga, children: d.porta})}),
                                o("td", {children: d.potencia}),
                                o("td", {children: d.pps}),
                                o("td", {children: d.throughputEfetivo}),
                                o("td", {children: d.throughputNominal}),
                                o("td", {className: d.aberturaHorVer === " " && f.NaoPossui, children: d.aberturaHorVer}),
                                o("td", {className: d.distancia === " " && f.NaoPossui, children: d.distancia}),
                                o("td", {children: d.wireless}),
                                o("td", {children: d.garantia}),
                                o("td", {
                                  children: k("span", {
                                    className: f.tooltip,
                                    children: [
                                      k("span", {
                                        children: [
                                          d.status === "Phaseout" && o("span", {className: f.status_phaseout, children: d.status}),
                                          d.status === "Suporte" && o("span", {className: f.status_suporte, children: d.status}),
                                        ],
                                      }),
                                      d.status === "Phaseout" && o("span", {className: f.tooltiptext, children: "Apenas email"}),
                                      d.status === "Suporte" && o("span", {className: f.tooltiptext, children: "Fornecemos suporte"}),
                                    ],
                                  }),
                                }),
                                o("td", {
                                  children: o("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: d.pagina,
                                    children: o("span", {className: f.paginalink, children: "P\xE1gina"}),
                                  }),
                                }),
                                o("td", {
                                  children:
                                    d.datasheet === "-"
                                      ? o("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: "#",
                                          children: o("span", {className: f.pdfbtn_NA, children: "N/A"}),
                                        })
                                      : o("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: d.datasheet,
                                          children: o("span", {className: f.pdfbtn, children: "Datasheet"}),
                                        }),
                                }),
                                o("td", {
                                  children:
                                    d.guia === "-"
                                      ? o("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: "#",
                                          children: o("span", {className: f.pdfbtn_NA, children: "N/A"}),
                                        })
                                      : o("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: d.guia,
                                          children: o("span", {className: f.pdfbtn, children: "Guia"}),
                                        }),
                                }),
                                o("td", {
                                  children:
                                    d.manual === "-"
                                      ? o("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: "#",
                                          children: o("span", {className: f.pdfbtn_NA, children: "N/A"}),
                                        })
                                      : o("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: d.manual,
                                          children: o("span", {className: f.pdfbtn, children: "Manual"}),
                                        }),
                                }),
                              ],
                            }),
                          })
                        ),
                      ],
                    }),
                  })
                : null,
            ],
          }),
          k("div", {
            className: f.box_content,
            children: [
              k("div", {
                className: f.header_box_content,
                children: [
                  k("h2", {id: "ho", children: ["Roteadores HO", o("button", {className: g ? f.arrowHide : f.arrowShow, onClick: b})]}),
                  k("label", {
                    children: [
                      o("i", {className: "fa-solid fa-magnifying-glass"}),
                      o("input", {placeholder: "Pesquise o Equipamento", value: v, onChange: M, className: f.searchBarDevices}),
                    ],
                  }),
                ],
              }),
              g
                ? k("div", {
                    style: {overflowX: "auto"},
                    children: [
                      k("table", {
                        className: f.devicesTable,
                        children: [
                          o(Pf, {}),
                          Ap.filter((d) => {
                            if (d.modelo.toLowerCase().includes(v.toLowerCase())) return d;
                            if (d.porta.toLowerCase().includes(v.toLowerCase())) return d;
                          }).map((d) =>
                            o("tbody", {
                              children: k("tr", {
                                children: [
                                  o("td", {children: o("b", {children: d.modelo})}),
                                  o("td", {children: d.cobertura}),
                                  o("td", {children: d.raio}),
                                  o("td", {children: d.usuarioMax}),
                                  o("td", {children: d.planoRecomendado}),
                                  o("td", {children: o("span", {className: d.porta === "Fast" ? f.fast : f.giga, children: d.porta})}),
                                  o("td", {children: d.QtdePortas}),
                                  o("td", {children: d.datarateMax}),
                                  o("td", {children: d.ganho}),
                                  o("td", {children: d.ipv6}),
                                  o("td", {children: d.repetidor}),
                                  o("td", {children: d.roteador}),
                                  o("td", {children: d.cliente}),
                                  o("td", {children: d.ap}),
                                  o("td", {
                                    children: k("span", {
                                      className: f.tooltip,
                                      children: [
                                        k("span", {
                                          children: [
                                            d.status === "Phaseout" && o("span", {className: f.status_phaseout, children: d.status}),
                                            d.status === "Suporte" && o("span", {className: f.status_suporte, children: d.status}),
                                          ],
                                        }),
                                        d.status === "Phaseout" && o("span", {className: f.tooltiptext, children: "Apenas email"}),
                                        d.status === "Suporte" && o("span", {className: f.tooltiptext, children: "Fornecemos suporte"}),
                                      ],
                                    }),
                                  }),
                                  o("td", {children: d.garantia}),
                                  o("td", {
                                    children: o("a", {
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      href: d.pagina,
                                      children: o("span", {className: f.paginalink, children: "P\xE1gina"}),
                                    }),
                                  }),
                                  o("td", {
                                    children:
                                      d.datasheet === "-"
                                        ? o("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: "#",
                                            children: o("span", {className: f.pdfbtn_NA, children: "N/A"}),
                                          })
                                        : o("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: d.datasheet,
                                            children: o("span", {className: f.pdfbtn, children: "Datasheet"}),
                                          }),
                                  }),
                                  o("td", {
                                    children:
                                      d.guia === "-"
                                        ? o("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: "#",
                                            children: o("span", {className: f.pdfbtn_NA, children: "N/A"}),
                                          })
                                        : o("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: d.guia,
                                            children: o("span", {className: f.pdfbtn, children: "Guia"}),
                                          }),
                                  }),
                                  o("td", {
                                    children:
                                      d.manual === "-"
                                        ? o("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: "#",
                                            children: o("span", {className: f.pdfbtn_NA, children: "N/A"}),
                                          })
                                        : o("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: d.manual,
                                            children: o("span", {className: f.pdfbtn, children: "Manual"}),
                                          }),
                                  }),
                                ],
                              }),
                            })
                          ),
                        ],
                      }),
                      " ",
                    ],
                  })
                : null,
            ],
          }),
          k("div", {
            className: f.box_content,
            children: [
              k("div", {
                className: f.header_box_content,
                children: [
                  k("h2", {id: "switch", children: ["Switchs", o("button", {className: p ? f.arrowHide : f.arrowShow, onClick: h})]}),
                  k("label", {
                    children: [
                      o("i", {className: "fa-solid fa-magnifying-glass"}),
                      o("input", {className: f.searchBarDevices, placeholder: "Pesquise o Equipamento", value: N, onChange: hn}),
                    ],
                  }),
                ],
              }),
              p
                ? o("div", {
                    style: {overflowX: "auto"},
                    children: k("table", {
                      className: f.devicesTable,
                      children: [
                        o(bf, {}),
                        xp
                          .filter((d) => {
                            if (d.modelo.toLowerCase().includes(N.toLowerCase())) return d;
                            if (d.gerenciavel.toLowerCase().includes(N.toLowerCase())) return d;
                          })
                          .map((d) =>
                            o("tbody", {
                              children: k("tr", {
                                id: f.swicth_id,
                                children: [
                                  o("td", {
                                    children: k("span", {
                                      className: f.tooltip,
                                      children: [
                                        d.modelo,
                                        d.modelo === "SG 2404 PoE L2+" && o("i", {className: "fa-regular fa-circle-question"}),
                                        d.modelo === "SG 2404 PoE L2+" &&
                                          o("span", {className: f.tooltiptext, children: "SG 2404 PoE L2+ (4760062)"}),
                                      ],
                                    }),
                                  }),
                                  o("td", {children: d.portas}),
                                  o("td", {
                                    children: o("span", {className: d.modulação === "Fast" ? f.fast : f.giga, children: d.modulação}),
                                  }),
                                  o("td", {children: d.gerenciavel}),
                                  o("td", {children: d.poe}),
                                  o("td", {children: d.taxaTransferencia}),
                                  o("td", {children: d.backplane}),
                                  o("td", {children: d.sfp}),
                                  o("td", {children: d.poeExtender}),
                                  o("td", {className: d.poePorta === " " && f.NaoPossui, children: d.poePorta}),
                                  o("td", {className: d.poeTotal === " " && f.NaoPossui, children: d.poeTotal}),
                                  o("td", {children: d.qos}),
                                  o("td", {children: d.garantia}),
                                  o("td", {
                                    children: k("span", {
                                      className: f.tooltip,
                                      children: [
                                        k("span", {
                                          children: [
                                            d.status === "Phaseout" && o("span", {className: f.status_phaseout, children: d.status}),
                                            d.status === "Suporte" && o("span", {className: f.status_suporte, children: d.status}),
                                          ],
                                        }),
                                        d.status === "Phaseout" && o("span", {className: f.tooltiptext, children: "Apenas email"}),
                                        d.status === "Suporte" && o("span", {className: f.tooltiptext, children: "Fornecemos suporte"}),
                                      ],
                                    }),
                                  }),
                                  o("td", {
                                    children: o("a", {
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      href: d.pagina,
                                      children: o("span", {className: f.paginalink, children: "P\xE1gina"}),
                                    }),
                                  }),
                                  o("td", {
                                    children:
                                      d.datasheet === "-"
                                        ? o("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: "#",
                                            children: o("span", {className: f.pdfbtn_NA, children: "N/A"}),
                                          })
                                        : o("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: d.datasheet,
                                            children: o("span", {className: f.pdfbtn, children: "Datasheet"}),
                                          }),
                                  }),
                                  o("td", {
                                    children:
                                      d.guia === "-"
                                        ? o("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: "#",
                                            children: o("span", {className: f.pdfbtn_NA, children: "N/A"}),
                                          })
                                        : o("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: d.guia,
                                            children: o("span", {className: f.pdfbtn, children: "Guia"}),
                                          }),
                                  }),
                                  o("td", {
                                    children:
                                      d.manual === "-"
                                        ? o("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: "#",
                                            children: o("span", {className: f.pdfbtn_NA, children: "N/A"}),
                                          })
                                        : o("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: d.manual,
                                            children: o("span", {className: f.pdfbtn, children: "Manual"}),
                                          }),
                                  }),
                                ],
                              }),
                            })
                          ),
                      ],
                    }),
                  })
                : null,
            ],
          }),
          k("div", {
            className: f.box_content,
            children: [
              o("div", {
                className: f.header_box_content,
                children: k("h2", {
                  id: "conversor",
                  children: ["Conversor de M\xEDdia", o("button", {className: w ? f.arrowHide : f.arrowShow, onClick: A})],
                }),
              }),
              w
                ? k("table", {
                    className: f.devicesTable,
                    children: [
                      o(yf, {}),
                      Np.map((d) =>
                        o("tbody", {
                          children: k("tr", {
                            children: [
                              o("td", {children: o("b", {children: d.modelo})}),
                              o("td", {children: d.conector}),
                              o("td", {children: d.wdm}),
                              o("td", {children: d.distancia}),
                              o("td", {children: o("span", {className: d.modulação === "Fast" ? f.fast : f.giga, children: d.modulação})}),
                              o("td", {children: d.fibra}),
                              o("td", {children: d.potencia}),
                              o("td", {children: d.recepMax}),
                              o("td", {children: d.recepMin}),
                              o("td", {children: d.garantia}),
                              o("td", {
                                children: k("span", {
                                  className: f.tooltip,
                                  children: [
                                    k("span", {
                                      children: [
                                        d.status === "Phaseout" && o("span", {className: f.status_phaseout, children: d.status}),
                                        d.status === "Suporte" && o("span", {className: f.status_suporte, children: d.status}),
                                      ],
                                    }),
                                    d.status === "Phaseout" && o("span", {className: f.tooltiptext, children: "Apenas email"}),
                                    d.status === "Suporte" && o("span", {className: f.tooltiptext, children: "Fornecemos suporte"}),
                                  ],
                                }),
                              }),
                              o("td", {
                                children: o("a", {
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  href: d.pagina,
                                  children: o("span", {className: f.paginalink, children: "P\xE1gina"}),
                                }),
                              }),
                              o("td", {
                                children:
                                  d.datasheet === "-"
                                    ? o("a", {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: "#",
                                        children: o("span", {className: f.pdfbtn_NA, children: "N/A"}),
                                      })
                                    : o("a", {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: d.datasheet,
                                        children: o("span", {className: f.pdfbtn, children: "Datasheet"}),
                                      }),
                              }),
                              o("td", {
                                children:
                                  d.guia === "-"
                                    ? o("a", {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: "#",
                                        children: o("span", {className: f.pdfbtn_NA, children: "N/A"}),
                                      })
                                    : o("a", {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: d.guia,
                                        children: o("span", {className: f.pdfbtn, children: "Guia"}),
                                      }),
                              }),
                            ],
                          }),
                        })
                      ),
                    ],
                  })
                : null,
            ],
          }),
          k("div", {
            className: f.box_content,
            children: [
              o("div", {
                className: f.header_box_content,
                children: k("h2", {
                  id: "sfp",
                  children: ["M\xF3dulo SFP", o("button", {className: E ? f.arrowHide : f.arrowShow, onClick: V})],
                }),
              }),
              E
                ? k("table", {
                    className: f.devicesTable,
                    children: [
                      o(kf, {}),
                      Pp.map((d) => {
                        if (d.linha === "gbic")
                          return o("tbody", {
                            children: k("tr", {
                              children: [
                                o("td", {children: o("b", {children: d.modelo})}),
                                o("td", {children: d.tipoConector}),
                                k("td", {
                                  children: [
                                    d.modulo === "SFP+" && o("span", {className: f.variado1, children: "SFP+"}),
                                    d.modulo === "SFP" && o("span", {className: f.variado2, children: "SFP"}),
                                    d.modulo === "Epon" && o("span", {className: f.variado3, children: "EPON"}),
                                    d.modulo === "Gpon" && o("span", {className: f.fast, children: "GPON"}),
                                    d.modulo === "XFP" && o("span", {className: f.giga, children: "XFP"}),
                                  ],
                                }),
                                o("td", {children: d.wdm}),
                                o("td", {
                                  children: k("span", {
                                    className: f.tooltip,
                                    children: [
                                      d.distancia,
                                      " ",
                                      d.fibra === "Multimodo" && o("i", {className: "fa-regular fa-circle-question"}),
                                      d.fibra === "Multimodo" &&
                                        o("span", {className: f.tooltiptext, children: "62,5 / 125 \u03BCm at\xE9 275 mts"}),
                                    ],
                                  }),
                                }),
                                o("td", {children: d.modulação}),
                                o("td", {children: d.fibra}),
                                o("td", {children: d.potencia}),
                                o("td", {children: d.recepMaxMin}),
                                o("td", {children: d.garantia}),
                                o("td", {
                                  children: k("span", {
                                    className: f.tooltip,
                                    children: [
                                      k("span", {
                                        children: [
                                          d.status === "Phaseout" && o("span", {className: f.status_phaseout, children: d.status}),
                                          d.status === "Suporte" && o("span", {className: f.status_suporte, children: d.status}),
                                        ],
                                      }),
                                      d.status === "Phaseout" && o("span", {className: f.tooltiptext, children: "Apenas email"}),
                                      d.status === "Suporte" && o("span", {className: f.tooltiptext, children: "Fornecemos suporte"}),
                                    ],
                                  }),
                                }),
                                o("td", {
                                  children: o("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: d.pagina,
                                    children: o("span", {className: f.paginalink, children: "P\xE1gina"}),
                                  }),
                                }),
                                o("td", {
                                  children: o("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: d.datasheet,
                                    children: o("span", {className: f.pdfbtn, children: "Datasheet"}),
                                  }),
                                }),
                                o("td", {
                                  children: o("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: d.guia,
                                    children: o("span", {className: f.pdfbtn, children: "Guia"}),
                                  }),
                                }),
                              ],
                            }),
                          });
                      }),
                    ],
                  })
                : null,
            ],
          }),
          k("div", {
            className: f.box_content,
            children: [
              o("div", {
                className: f.header_box_content,
                children: k("h2", {
                  id: "onu",
                  children: ["ONUs/ONTs", o("button", {className: T ? f.arrowHide : f.arrowShow, onClick: St})],
                }),
              }),
              T
                ? k("table", {
                    className: f.devicesTable,
                    children: [
                      o(Nf, {}),
                      Ep.map((d) => {
                        if (d.linha === "onu/ont")
                          return o("tbody", {
                            children: k("tr", {
                              children: [
                                o("td", {children: o("b", {children: d.modelo})}),
                                o("td", {
                                  children: o("span", {className: d.modulação === "Fast" ? f.fast : f.giga, children: d.modulação}),
                                }),
                                o("td", {className: d.fxs === "" ? f.NaoPossui : null, children: d.fxs}),
                                k("td", {
                                  children: [
                                    d.tipo === "EPON/GPON" && o("span", {className: f.variado1, children: d.tipo}),
                                    d.tipo === "GPON" && o("span", {className: f.variado2, children: d.tipo}),
                                  ],
                                }),
                                o("td", {className: d.transmissao2ghz === "" ? f.NaoPossui : null, children: d.transmissao2ghz}),
                                o("td", {className: d.transmissao5ghz === "" ? f.NaoPossui : null, children: d.transmissao5ghz}),
                                o("td", {className: d.ssid === "" ? f.NaoPossui : null, children: d.ssid}),
                                o("td", {children: d.tr069}),
                                o("td", {children: d.customize}),
                                o("td", {children: d.remotize}),
                                o("td", {children: d.garantia}),
                                o("td", {
                                  children: k("span", {
                                    className: f.tooltip,
                                    children: [
                                      k("span", {
                                        children: [
                                          d.status === "Phaseout" && o("span", {className: f.status_phaseout, children: d.status}),
                                          d.status === "Suporte" && o("span", {className: f.status_suporte, children: d.status}),
                                        ],
                                      }),
                                      d.status === "Phaseout" && o("span", {className: f.tooltiptext, children: "Apenas email"}),
                                      d.status === "Suporte" && o("span", {className: f.tooltiptext, children: "Fornecemos suporte"}),
                                    ],
                                  }),
                                }),
                                o("td", {
                                  children: o("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: d.pagina,
                                    children: o("span", {className: f.paginalink, children: "P\xE1gina"}),
                                  }),
                                }),
                                o("td", {
                                  children:
                                    d.datasheet === "-"
                                      ? o("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: "#",
                                          children: o("span", {className: f.pdfbtn_NA, children: "N/A"}),
                                        })
                                      : o("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: d.datasheet,
                                          children: o("span", {className: f.pdfbtn, children: "Datasheet"}),
                                        }),
                                }),
                                o("td", {
                                  children:
                                    d.guia === "-"
                                      ? o("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: "#",
                                          children: o("span", {className: f.pdfbtn_NA, children: "N/A"}),
                                        })
                                      : o("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: d.guia,
                                          children: o("span", {className: f.pdfbtn, children: "Guia"}),
                                        }),
                                }),
                                o("td", {
                                  children:
                                    d.manual === "-"
                                      ? o("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: "#",
                                          children: o("span", {className: f.pdfbtn_NA, children: "N/A"}),
                                        })
                                      : o("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: d.manual,
                                          children: o("span", {className: f.pdfbtn, children: "Manual"}),
                                        }),
                                }),
                              ],
                            }),
                          });
                      }),
                    ],
                  })
                : null,
            ],
          }),
        ],
      }),
    ],
  });
}
Zr.createRoot(document.getElementById("root")).render(o(ve.StrictMode, {children: o(Mf, {})}));
