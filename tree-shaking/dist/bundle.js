(() => {
  "use strict";
  var t,
    e = [
      ,
      (t, e, o) => {
        o.d(e, { Button: () => r });
        const r = () => document.createElement("button");
      },
    ],
    o = {};
  function r(t) {
    var n = o[t];
    if (void 0 !== n) return n.exports;
    var c = (o[t] = { exports: {} });
    return e[t](c, c.exports, r), c.exports;
  }
  (r.d = (t, e) => {
    for (var o in e)
      r.o(e, o) &&
        !r.o(t, o) &&
        Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
  }),
    (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (t = r(1)),
    console.log(1111),
    document.body.appendChild((0, t.Button)());
})();