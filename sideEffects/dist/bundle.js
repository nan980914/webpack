(() => {
  "use strict";
  var t,
    e = [
      ,
      (t, e, o) => {
        o.d(e, { Button: () => r }), console.log("Button component~");
        var r = function () {
          return document.createElement("button");
        };
      },
    ],
    o = {};
  function r(t) {
    var n = o[t];
    if (void 0 !== n) return n.exports;
    var u = (o[t] = { exports: {} });
    return e[t](u, u.exports, r), u.exports;
  }
  (r.d = (t, e) => {
    for (var o in e)
      r.o(e, o) &&
        !r.o(t, o) &&
        Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
  }),
    (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (t = r(1)),
    document.body.appendChild((0, t.Button)());
})();
