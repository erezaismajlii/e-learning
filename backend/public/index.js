<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon"
      href="https://res.cloudinary.com/phongvn2611/image/upload/v1634179173/english/avatar/avatar-default_tx5lsb.png" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using create-react-app" />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;1,300;1,400&display=swap" />
    <title>English Website</title>
    <link href="/static/css/main.0634c9f2.chunk.css" rel="stylesheet" />
  </head>
  <body>
    <noscript> You need to enable JavaScript to run this app. </noscript>
    <div id="root"></div>
    <script>
      (function (e) {
        function t(t) {
          for (
            var r, n, d = t[0], o = t[1], u = t[2], i = 0, s = [];
            i < d.length;
          )
            (n = d[i]),
              Object.prototype.hasOwnProperty.call(f, n) &&
                f[n] &&
                s.push(f[n][0]),
              (f[n] = 0);
          for (r in o)
            Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
          for (l && l(t); s.length; ) s.shift()();
          return a.push.apply(a, u || []), c();
        }
        function c() {
          for (var e, t = 0; t < a.length; t++) {
            for (var c = a[t], r = !0, n = 1; n < c.length; n++) {
              var o = c[n];
              0 !== f[o] && (r = 1);
            }
            r && (a.splice(t--, 1), (e = d((d.s = c[0]))));
          }
          return e;
        }
        var r = {},
          n = { 8: 0 },
          f = { 8: 0 },
          a = [];
        function d(t) {
          if (r[t]) return r[t].exports;
          var c = (r[t] = { i: t, l: !1, exports: {} });
          return e[t].call(c.exports, c, c.exports, d), (c.l = !0), c.exports;
        }
        (d.e = function (e) {
          var t = [];
          n[e]
            ? t.push(n[e])
            : 0 !== n[e] &&
              { 24: 1, 33: 1 }[e] &&
              t.push(
                (n[e] = new Promise(function (t, c) { {
                    var u =
                      (l = a[o]).getAttribute("data-href") ||
                      l.getAttribute("href");
                    if ("stylesheet" === l.rel && (u === r || u === f))
                      return t();
                  }
                  var i = document.getElementsByTagName("style");
                  for (o = 0; o < i.length; o++) {
                    var l;
                    if (
                      (u = (l = i[o]).getAttribute("data-href")) === r ||
                      u === f
                    )
                      return t();
                  }
                  var s = document.createElement("link");
                  (s.rel = "stylesheet"),
                    (s.type = "text/css"),
                    (s.onload = t),
                    (s.onerror = function (t) {
                      var r = (t && t.target && t.target.src) || f,
                        a = new Error(
                          "Loading CSS chunk " + e + " failed.\n(" + r + ")"
                        );
                      (a.code = "CSS_CHUNK_LOAD_FAILED"),
                        (a.request = r),
                        delete n[e],
                        s.parentNode.removeChild(s),
                        c(a);
                    }),
                    (s.href = f),
                    document.getElementsByTagName("head")[0].appendChild(s);
                }).then(function () {
                  n[e] = 0;
                }))
              );
          var c = f[e];
          if (0 !== c)
            if (c) t.push(c[2]);
            else {
              var r = new Promise(function (t, r) {
                c = f[e] = [t, r];
              });
              t.push((c[2] = r));
              var a,
                o = document.createElement("script");
              (o.charset = "utf-8"),
                (o.timeout = 120),
                d.nc && o.setAttribute("nonce", d.nc),
                (o.src = (function (e) {
                  return (
                    d.p +
                    "static/js/" +
                    ({}[e] || e) +
                    "." +
                    { 0: "21bd67a4",
                      1: "b78bc6a2",
                      2: "7ab15a0b",
                      3: "da2fb577",
                      4: "371a4c64",
                      5: "81f14766",
                      6: "8abf7ca4",
                      7: "009f5393",
                      8: "d682ba9a",
                      9: "388bac49",
                      10: "300c72e4",
                    }[e] +
                    ".chunk.js"
                  );
                })(e));
              var u = new Error();
              a = function (t) {
                (o.onerror = o.onload = null), clearTimeout(i);
                var c = f[e];
                if (0 !== c) {
                  if (c) {
                    var r = t && ("load" === t.type ? "missing" : t.type),
                      n = t && t.target && t.target.src;
                    (u.message =
                      "Loading chunk " +
                      e +
                      " failed.\n(" +
                      r +
                      ": " +
                      n +
                      ")"),
                      (u.name = "ChunkLoadError"),
                      (u.type = r),
                      (u.request = n),
                      c[1](u);
                  }
                  f[e] = void 0;
                }
              };
              var i = setTimeout(function () {
                a({ type: "timeout", target: o });
              }, 12e4);
              (o.onerror = o.onload = a), document.head.appendChild(o);
            }
          return Promise.all(t);
        }),
          (d.m = e),
          (d.c = r),
          (d.d = function (e, t, c) {
            d.o(e, t) ||
              Object.defineProperty(e, t, { enumerable: !0, get: c });
          }),
          (d.r = function (e) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          (d.t = function (e, t) {
            if ((1 & t && (e = d(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var c = Object.create(null);
            if (
              (d.r(c),
              Object.defineProperty(c, "default", { enumerable: !0, value: e }),
              2 & t && "string" != typeof e)
            )
              for (var r in e)
                d.d(c, r , function (t) {
                    return e[t];
                  }.bind(null, r)
                );
            return c;
          }),
          (d.n = function (e) {
            var t = e && e.__esModule ? function () {
                    return e.default;
                  } : function () { 
                    return e;
                  };
            return d.d(t, "a", t), t;
          }),
          (d.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (d.p = "/"),
          (d.oe = function (e) {
            throw (console.error(e), e);
          });
        var o = (this.webpackJsonpfrontend = this.webpackJsonpfrontend || []),
          u = o.push.bind(o);
        (o.push = t), (o = o.slice());
        for (var i = 0; i < o.length; i++) t(o[i]);
      })([]);
    </script>
    <script src="/static/js/9.f2b49022.chunk.js"></script>
    <script src="/static/js/main.ce556799.chunk.js"></script>
  </body>
</html>

