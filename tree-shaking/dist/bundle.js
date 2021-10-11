(() => {
  "use strict";
  var e,
    t = [
      ,
      (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Link = t.Heading = t.Button = void 0),
          (t.Button = function () {
            return document.createElement("button");
          }),
          (t.Link = function () {
            return document.createElement("a");
          }),
          (t.Heading = function (e) {
            return document.createElement("h" + e);
          });
      },
    ],
    n = {};
  (e = (function e(o) {
    var r = n[o];
    if (void 0 !== r) return r.exports;
    var u = (n[o] = { exports: {} });
    return t[o](u, u.exports, e), u.exports;
  })(1)),
    console.log(1111),
    document.body.appendChild((0, e.Button)());
})();
