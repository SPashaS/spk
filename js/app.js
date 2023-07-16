/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  "use strict";
  const e = {};
  let t = (e, t = 500, i = 0) => {
      e.classList.contains("_slide") ||
        (e.classList.add("_slide"),
        (e.style.transitionProperty = "height, margin, padding"),
        (e.style.transitionDuration = t + "ms"),
        (e.style.height = `${e.offsetHeight}px`),
        e.offsetHeight,
        (e.style.overflow = "hidden"),
        (e.style.height = i ? `${i}px` : "0px"),
        (e.style.paddingTop = 0),
        (e.style.paddingBottom = 0),
        (e.style.marginTop = 0),
        (e.style.marginBottom = 0),
        window.setTimeout(() => {
          (e.hidden = !i),
            !i && e.style.removeProperty("height"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            !i && e.style.removeProperty("overflow"),
            e.style.removeProperty("transition-duration"),
            e.style.removeProperty("transition-property"),
            e.classList.remove("_slide"),
            document.dispatchEvent(
              new CustomEvent("slideUpDone", { detail: { target: e } })
            );
        }, t));
    },
    i = (e, t = 500, i = 0) => {
      if (!e.classList.contains("_slide")) {
        e.classList.add("_slide"),
          (e.hidden = !e.hidden && null),
          i && e.style.removeProperty("height");
        let s = e.offsetHeight;
        (e.style.overflow = "hidden"),
          (e.style.height = i ? `${i}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          e.offsetHeight,
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = s + "px"),
          e.style.removeProperty("padding-top"),
          e.style.removeProperty("padding-bottom"),
          e.style.removeProperty("margin-top"),
          e.style.removeProperty("margin-bottom"),
          window.setTimeout(() => {
            e.style.removeProperty("height"),
              e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideDownDone", { detail: { target: e } })
              );
          }, t);
      }
    },
    s = !0;
  function n(e) {
    return e.filter(function (e, t, i) {
      return i.indexOf(e) === t;
    });
  }
  function r(e, t) {
    const i = Array.from(e).filter(function (e, i, s) {
      if (e.dataset[t]) return e.dataset[t].split(",")[0];
    });
    if (i.length) {
      const e = [];
      i.forEach((i) => {
        const s = {},
          n = i.dataset[t].split(",");
        (s.value = n[0]),
          (s.type = n[1] ? n[1].trim() : "max"),
          (s.item = i),
          e.push(s);
      });
      let s = e.map(function (e) {
        return (
          "(" + e.type + "-width: " + e.value + "px)," + e.value + "," + e.type
        );
      });
      s = n(s);
      const r = [];
      if (s.length)
        return (
          s.forEach((t) => {
            const i = t.split(","),
              s = i[1],
              n = i[2],
              o = window.matchMedia(i[0]),
              a = e.filter(function (e) {
                if (e.value === s && e.type === n) return !0;
              });
            r.push({ itemsArray: a, matchMedia: o });
          }),
          r
        );
    }
  }
  function o(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function a(e = {}, t = {}) {
    Object.keys(t).forEach((i) => {
      void 0 === e[i]
        ? (e[i] = t[i])
        : o(t[i]) && o(e[i]) && Object.keys(t[i]).length > 0 && a(e[i], t[i]);
    });
  }
  const l = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function d() {
    const e = "undefined" != typeof document ? document : {};
    return a(e, l), e;
  }
  const c = {
    document: l,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function p() {
    const e = "undefined" != typeof window ? window : {};
    return a(e, c), e;
  }
  function h(e, t = 0) {
    return setTimeout(e, t);
  }
  function u() {
    return Date.now();
  }
  function g(e, t = "x") {
    const i = p();
    let s, n, r;
    const o = (function (e) {
      const t = p();
      let i;
      return (
        t.getComputedStyle && (i = t.getComputedStyle(e, null)),
        !i && e.currentStyle && (i = e.currentStyle),
        i || (i = e.style),
        i
      );
    })(e);
    return (
      i.WebKitCSSMatrix
        ? ((n = o.transform || o.webkitTransform),
          n.split(",").length > 6 &&
            (n = n
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (r = new i.WebKitCSSMatrix("none" === n ? "" : n)))
        : ((r =
            o.MozTransform ||
            o.OTransform ||
            o.MsTransform ||
            o.msTransform ||
            o.transform ||
            o
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (s = r.toString().split(","))),
      "x" === t &&
        (n = i.WebKitCSSMatrix
          ? r.m41
          : 16 === s.length
          ? parseFloat(s[12])
          : parseFloat(s[4])),
      "y" === t &&
        (n = i.WebKitCSSMatrix
          ? r.m42
          : 16 === s.length
          ? parseFloat(s[13])
          : parseFloat(s[5])),
      n || 0
    );
  }
  function m(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function f(...e) {
    const t = Object(e[0]),
      i = ["__proto__", "constructor", "prototype"];
    for (let n = 1; n < e.length; n += 1) {
      const r = e[n];
      if (
        null != r &&
        ((s = r),
        !("undefined" != typeof window && void 0 !== window.HTMLElement
          ? s instanceof HTMLElement
          : s && (1 === s.nodeType || 11 === s.nodeType)))
      ) {
        const e = Object.keys(Object(r)).filter((e) => i.indexOf(e) < 0);
        for (let i = 0, s = e.length; i < s; i += 1) {
          const s = e[i],
            n = Object.getOwnPropertyDescriptor(r, s);
          void 0 !== n &&
            n.enumerable &&
            (m(t[s]) && m(r[s])
              ? r[s].__swiper__
                ? (t[s] = r[s])
                : f(t[s], r[s])
              : !m(t[s]) && m(r[s])
              ? ((t[s] = {}), r[s].__swiper__ ? (t[s] = r[s]) : f(t[s], r[s]))
              : (t[s] = r[s]));
        }
      }
    }
    var s;
    return t;
  }
  function v(e, t, i) {
    e.style.setProperty(t, i);
  }
  function y({ swiper: e, targetPosition: t, side: i }) {
    const s = p(),
      n = -e.translate;
    let r,
      o = null;
    const a = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      s.cancelAnimationFrame(e.cssModeFrameID);
    const l = t > n ? "next" : "prev",
      d = (e, t) => ("next" === l && e >= t) || ("prev" === l && e <= t),
      c = () => {
        (r = new Date().getTime()), null === o && (o = r);
        const l = Math.max(Math.min((r - o) / a, 1), 0),
          p = 0.5 - Math.cos(l * Math.PI) / 2;
        let h = n + p * (t - n);
        if ((d(h, t) && (h = t), e.wrapperEl.scrollTo({ [i]: h }), d(h, t)))
          return (
            (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [i]: h });
            }),
            void s.cancelAnimationFrame(e.cssModeFrameID)
          );
        e.cssModeFrameID = s.requestAnimationFrame(c);
      };
    c();
  }
  function w(e, t = "") {
    return [...e.children].filter((e) => e.matches(t));
  }
  function b(e, t = []) {
    const i = document.createElement(e);
    return i.classList.add(...(Array.isArray(t) ? t : [t])), i;
  }
  function S(e, t) {
    return p().getComputedStyle(e, null).getPropertyValue(t);
  }
  function x(e) {
    let t,
      i = e;
    if (i) {
      for (t = 0; null !== (i = i.previousSibling); )
        1 === i.nodeType && (t += 1);
      return t;
    }
  }
  function T(e, t, i) {
    const s = p();
    return i
      ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
          parseFloat(
            s
              .getComputedStyle(e, null)
              .getPropertyValue("width" === t ? "margin-right" : "margin-top")
          ) +
          parseFloat(
            s
              .getComputedStyle(e, null)
              .getPropertyValue("width" === t ? "margin-left" : "margin-bottom")
          )
      : e.offsetWidth;
  }
  let C, E, I;
  function L() {
    return (
      C ||
        (C = (function () {
          const e = p(),
            t = d();
          return {
            smoothScroll:
              t.documentElement &&
              t.documentElement.style &&
              "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
          };
        })()),
      C
    );
  }
  function M(e = {}) {
    return (
      E ||
        (E = (function ({ userAgent: e } = {}) {
          const t = L(),
            i = p(),
            s = i.navigator.platform,
            n = e || i.navigator.userAgent,
            r = { ios: !1, android: !1 },
            o = i.screen.width,
            a = i.screen.height,
            l = n.match(/(Android);?[\s\/]+([\d.]+)?/);
          let d = n.match(/(iPad).*OS\s([\d_]+)/);
          const c = n.match(/(iPod)(.*OS\s([\d_]+))?/),
            h = !d && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            u = "Win32" === s;
          let g = "MacIntel" === s;
          return (
            !d &&
              g &&
              t.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(`${o}x${a}`) >= 0 &&
              ((d = n.match(/(Version)\/([\d.]+)/)),
              d || (d = [0, 1, "13_0_0"]),
              (g = !1)),
            l && !u && ((r.os = "android"), (r.android = !0)),
            (d || h || c) && ((r.os = "ios"), (r.ios = !0)),
            r
          );
        })(e)),
      E
    );
  }
  function P() {
    return (
      I ||
        (I = (function () {
          const e = p();
          let t = !1;
          function i() {
            const t = e.navigator.userAgent.toLowerCase();
            return (
              t.indexOf("safari") >= 0 &&
              t.indexOf("chrome") < 0 &&
              t.indexOf("android") < 0
            );
          }
          if (i()) {
            const i = String(e.navigator.userAgent);
            if (i.includes("Version/")) {
              const [e, s] = i
                .split("Version/")[1]
                .split(" ")[0]
                .split(".")
                .map((e) => Number(e));
              t = e < 16 || (16 === e && s < 2);
            }
          }
          return {
            isSafari: t || i(),
            needPerspectiveFix: t,
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
          };
        })()),
      I
    );
  }
  const O = {
    on(e, t, i) {
      const s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ("function" != typeof t) return s;
      const n = i ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          s.eventsListeners[e] || (s.eventsListeners[e] = []),
            s.eventsListeners[e][n](t);
        }),
        s
      );
    },
    once(e, t, i) {
      const s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ("function" != typeof t) return s;
      function n(...i) {
        s.off(e, n), n.__emitterProxy && delete n.__emitterProxy, t.apply(s, i);
      }
      return (n.__emitterProxy = t), s.on(e, n, i);
    },
    onAny(e, t) {
      const i = this;
      if (!i.eventsListeners || i.destroyed) return i;
      if ("function" != typeof e) return i;
      const s = t ? "unshift" : "push";
      return (
        i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e), i
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      const i = t.eventsAnyListeners.indexOf(e);
      return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
    },
    off(e, t) {
      const i = this;
      return !i.eventsListeners || i.destroyed
        ? i
        : i.eventsListeners
        ? (e.split(" ").forEach((e) => {
            void 0 === t
              ? (i.eventsListeners[e] = [])
              : i.eventsListeners[e] &&
                i.eventsListeners[e].forEach((s, n) => {
                  (s === t || (s.__emitterProxy && s.__emitterProxy === t)) &&
                    i.eventsListeners[e].splice(n, 1);
                });
          }),
          i)
        : i;
    },
    emit(...e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsListeners) return t;
      let i, s, n;
      "string" == typeof e[0] || Array.isArray(e[0])
        ? ((i = e[0]), (s = e.slice(1, e.length)), (n = t))
        : ((i = e[0].events), (s = e[0].data), (n = e[0].context || t)),
        s.unshift(n);
      return (
        (Array.isArray(i) ? i : i.split(" ")).forEach((e) => {
          t.eventsAnyListeners &&
            t.eventsAnyListeners.length &&
            t.eventsAnyListeners.forEach((t) => {
              t.apply(n, [e, ...s]);
            }),
            t.eventsListeners &&
              t.eventsListeners[e] &&
              t.eventsListeners[e].forEach((e) => {
                e.apply(n, s);
              });
        }),
        t
      );
    },
  };
  const k = (e, t) => {
      if (!e || e.destroyed || !e.params) return;
      const i = t.closest(
        e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
      );
      if (i) {
        const t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
        t && t.remove();
      }
    },
    _ = (e, t) => {
      if (!e.slides[t]) return;
      const i = e.slides[t].querySelector('[loading="lazy"]');
      i && i.removeAttribute("loading");
    },
    A = (e) => {
      if (!e || e.destroyed || !e.params) return;
      let t = e.params.lazyPreloadPrevNext;
      const i = e.slides.length;
      if (!i || !t || t < 0) return;
      t = Math.min(t, i);
      const s =
          "auto" === e.params.slidesPerView
            ? e.slidesPerViewDynamic()
            : Math.ceil(e.params.slidesPerView),
        n = e.activeIndex,
        r = n + s - 1;
      if (e.params.rewind)
        for (let s = n - t; s <= r + t; s += 1) {
          const t = ((s % i) + i) % i;
          t !== n && t > r && _(e, t);
        }
      else
        for (let s = Math.max(r - t, 0); s <= Math.min(r + t, i - 1); s += 1)
          s !== n && s > r && _(e, s);
    };
  const z = {
    updateSize: function () {
      const e = this;
      let t, i;
      const s = e.el;
      (t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : s.clientWidth),
        (i =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : s.clientHeight),
        (0 === t && e.isHorizontal()) ||
          (0 === i && e.isVertical()) ||
          ((t =
            t -
            parseInt(S(s, "padding-left") || 0, 10) -
            parseInt(S(s, "padding-right") || 0, 10)),
          (i =
            i -
            parseInt(S(s, "padding-top") || 0, 10) -
            parseInt(S(s, "padding-bottom") || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(i) && (i = 0),
          Object.assign(e, {
            width: t,
            height: i,
            size: e.isHorizontal() ? t : i,
          }));
    },
    updateSlides: function () {
      const e = this;
      function t(t) {
        return e.isHorizontal()
          ? t
          : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom",
            }[t];
      }
      function i(e, i) {
        return parseFloat(e.getPropertyValue(t(i)) || 0);
      }
      const s = e.params,
        {
          wrapperEl: n,
          slidesEl: r,
          size: o,
          rtlTranslate: a,
          wrongRTL: l,
        } = e,
        d = e.virtual && s.virtual.enabled,
        c = d ? e.virtual.slides.length : e.slides.length,
        p = w(r, `.${e.params.slideClass}, swiper-slide`),
        h = d ? e.virtual.slides.length : p.length;
      let u = [];
      const g = [],
        m = [];
      let f = s.slidesOffsetBefore;
      "function" == typeof f && (f = s.slidesOffsetBefore.call(e));
      let y = s.slidesOffsetAfter;
      "function" == typeof y && (y = s.slidesOffsetAfter.call(e));
      const b = e.snapGrid.length,
        x = e.slidesGrid.length;
      let C = s.spaceBetween,
        E = -f,
        I = 0,
        L = 0;
      if (void 0 === o) return;
      "string" == typeof C && C.indexOf("%") >= 0
        ? (C = (parseFloat(C.replace("%", "")) / 100) * o)
        : "string" == typeof C && (C = parseFloat(C)),
        (e.virtualSize = -C),
        p.forEach((e) => {
          a ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
            (e.style.marginBottom = ""),
            (e.style.marginTop = "");
        }),
        s.centeredSlides &&
          s.cssMode &&
          (v(n, "--swiper-centered-offset-before", ""),
          v(n, "--swiper-centered-offset-after", ""));
      const M = s.grid && s.grid.rows > 1 && e.grid;
      let P;
      M && e.grid.initSlides(h);
      const O =
        "auto" === s.slidesPerView &&
        s.breakpoints &&
        Object.keys(s.breakpoints).filter(
          (e) => void 0 !== s.breakpoints[e].slidesPerView
        ).length > 0;
      for (let n = 0; n < h; n += 1) {
        let r;
        if (
          ((P = 0),
          p[n] && (r = p[n]),
          M && e.grid.updateSlide(n, r, h, t),
          !p[n] || "none" !== S(r, "display"))
        ) {
          if ("auto" === s.slidesPerView) {
            O && (p[n].style[t("width")] = "");
            const o = getComputedStyle(r),
              a = r.style.transform,
              l = r.style.webkitTransform;
            if (
              (a && (r.style.transform = "none"),
              l && (r.style.webkitTransform = "none"),
              s.roundLengths)
            )
              P = e.isHorizontal() ? T(r, "width", !0) : T(r, "height", !0);
            else {
              const e = i(o, "width"),
                t = i(o, "padding-left"),
                s = i(o, "padding-right"),
                n = i(o, "margin-left"),
                a = i(o, "margin-right"),
                l = o.getPropertyValue("box-sizing");
              if (l && "border-box" === l) P = e + n + a;
              else {
                const { clientWidth: i, offsetWidth: o } = r;
                P = e + t + s + n + a + (o - i);
              }
            }
            a && (r.style.transform = a),
              l && (r.style.webkitTransform = l),
              s.roundLengths && (P = Math.floor(P));
          } else
            (P = (o - (s.slidesPerView - 1) * C) / s.slidesPerView),
              s.roundLengths && (P = Math.floor(P)),
              p[n] && (p[n].style[t("width")] = `${P}px`);
          p[n] && (p[n].swiperSlideSize = P),
            m.push(P),
            s.centeredSlides
              ? ((E = E + P / 2 + I / 2 + C),
                0 === I && 0 !== n && (E = E - o / 2 - C),
                0 === n && (E = E - o / 2 - C),
                Math.abs(E) < 0.001 && (E = 0),
                s.roundLengths && (E = Math.floor(E)),
                L % s.slidesPerGroup == 0 && u.push(E),
                g.push(E))
              : (s.roundLengths && (E = Math.floor(E)),
                (L - Math.min(e.params.slidesPerGroupSkip, L)) %
                  e.params.slidesPerGroup ==
                  0 && u.push(E),
                g.push(E),
                (E = E + P + C)),
            (e.virtualSize += P + C),
            (I = P),
            (L += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, o) + y),
        a &&
          l &&
          ("slide" === s.effect || "coverflow" === s.effect) &&
          (n.style.width = `${e.virtualSize + C}px`),
        s.setWrapperSize && (n.style[t("width")] = `${e.virtualSize + C}px`),
        M && e.grid.updateWrapperSize(P, u, t),
        !s.centeredSlides)
      ) {
        const t = [];
        for (let i = 0; i < u.length; i += 1) {
          let n = u[i];
          s.roundLengths && (n = Math.floor(n)),
            u[i] <= e.virtualSize - o && t.push(n);
        }
        (u = t),
          Math.floor(e.virtualSize - o) - Math.floor(u[u.length - 1]) > 1 &&
            u.push(e.virtualSize - o);
      }
      if (d && s.loop) {
        const t = m[0] + C;
        if (s.slidesPerGroup > 1) {
          const i = Math.ceil(
              (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                s.slidesPerGroup
            ),
            n = t * s.slidesPerGroup;
          for (let e = 0; e < i; e += 1) u.push(u[u.length - 1] + n);
        }
        for (
          let i = 0;
          i < e.virtual.slidesBefore + e.virtual.slidesAfter;
          i += 1
        )
          1 === s.slidesPerGroup && u.push(u[u.length - 1] + t),
            g.push(g[g.length - 1] + t),
            (e.virtualSize += t);
      }
      if ((0 === u.length && (u = [0]), 0 !== C)) {
        const i = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
        p.filter(
          (e, t) => !(s.cssMode && !s.loop) || t !== p.length - 1
        ).forEach((e) => {
          e.style[i] = `${C}px`;
        });
      }
      if (s.centeredSlides && s.centeredSlidesBounds) {
        let e = 0;
        m.forEach((t) => {
          e += t + (C || 0);
        }),
          (e -= C);
        const t = e - o;
        u = u.map((e) => (e < 0 ? -f : e > t ? t + y : e));
      }
      if (s.centerInsufficientSlides) {
        let e = 0;
        if (
          (m.forEach((t) => {
            e += t + (C || 0);
          }),
          (e -= C),
          e < o)
        ) {
          const t = (o - e) / 2;
          u.forEach((e, i) => {
            u[i] = e - t;
          }),
            g.forEach((e, i) => {
              g[i] = e + t;
            });
        }
      }
      if (
        (Object.assign(e, {
          slides: p,
          snapGrid: u,
          slidesGrid: g,
          slidesSizesGrid: m,
        }),
        s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
      ) {
        v(n, "--swiper-centered-offset-before", -u[0] + "px"),
          v(
            n,
            "--swiper-centered-offset-after",
            e.size / 2 - m[m.length - 1] / 2 + "px"
          );
        const t = -e.snapGrid[0],
          i = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + i));
      }
      if (
        (h !== c && e.emit("slidesLengthChange"),
        u.length !== b &&
          (e.params.watchOverflow && e.checkOverflow(),
          e.emit("snapGridLengthChange")),
        g.length !== x && e.emit("slidesGridLengthChange"),
        s.watchSlidesProgress && e.updateSlidesOffset(),
        !(d || s.cssMode || ("slide" !== s.effect && "fade" !== s.effect)))
      ) {
        const t = `${s.containerModifierClass}backface-hidden`,
          i = e.el.classList.contains(t);
        h <= s.maxBackfaceHiddenSlides
          ? i || e.el.classList.add(t)
          : i && e.el.classList.remove(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
        i = [],
        s = t.virtual && t.params.virtual.enabled;
      let n,
        r = 0;
      "number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const o = (e) => (s ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          (t.visibleSlides || []).forEach((e) => {
            i.push(e);
          });
        else
          for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
            const e = t.activeIndex + n;
            if (e > t.slides.length && !s) break;
            i.push(o(e));
          }
      else i.push(o(t.activeIndex));
      for (n = 0; n < i.length; n += 1)
        if (void 0 !== i[n]) {
          const e = i[n].offsetHeight;
          r = e > r ? e : r;
        }
      (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides,
        i = e.isElement
          ? e.isHorizontal()
            ? e.wrapperEl.offsetLeft
            : e.wrapperEl.offsetTop
          : 0;
      for (let s = 0; s < t.length; s += 1)
        t[s].swiperSlideOffset =
          (e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop) -
          i -
          e.cssOverflowAdjustment();
    },
    updateSlidesProgress: function (e = (this && this.translate) || 0) {
      const t = this,
        i = t.params,
        { slides: s, rtlTranslate: n, snapGrid: r } = t;
      if (0 === s.length) return;
      void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
      let o = -e;
      n && (o = e),
        s.forEach((e) => {
          e.classList.remove(i.slideVisibleClass);
        }),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      let a = i.spaceBetween;
      "string" == typeof a && a.indexOf("%") >= 0
        ? (a = (parseFloat(a.replace("%", "")) / 100) * t.size)
        : "string" == typeof a && (a = parseFloat(a));
      for (let e = 0; e < s.length; e += 1) {
        const l = s[e];
        let d = l.swiperSlideOffset;
        i.cssMode && i.centeredSlides && (d -= s[0].swiperSlideOffset);
        const c =
            (o + (i.centeredSlides ? t.minTranslate() : 0) - d) /
            (l.swiperSlideSize + a),
          p =
            (o - r[0] + (i.centeredSlides ? t.minTranslate() : 0) - d) /
            (l.swiperSlideSize + a),
          h = -(o - d),
          u = h + t.slidesSizesGrid[e];
        ((h >= 0 && h < t.size - 1) ||
          (u > 1 && u <= t.size) ||
          (h <= 0 && u >= t.size)) &&
          (t.visibleSlides.push(l),
          t.visibleSlidesIndexes.push(e),
          s[e].classList.add(i.slideVisibleClass)),
          (l.progress = n ? -c : c),
          (l.originalProgress = n ? -p : p);
      }
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const i = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * i) || 0;
      }
      const i = t.params,
        s = t.maxTranslate() - t.minTranslate();
      let { progress: n, isBeginning: r, isEnd: o, progressLoop: a } = t;
      const l = r,
        d = o;
      if (0 === s) (n = 0), (r = !0), (o = !0);
      else {
        n = (e - t.minTranslate()) / s;
        const i = Math.abs(e - t.minTranslate()) < 1,
          a = Math.abs(e - t.maxTranslate()) < 1;
        (r = i || n <= 0), (o = a || n >= 1), i && (n = 0), a && (n = 1);
      }
      if (i.loop) {
        const i = t.getSlideIndexByData(0),
          s = t.getSlideIndexByData(t.slides.length - 1),
          n = t.slidesGrid[i],
          r = t.slidesGrid[s],
          o = t.slidesGrid[t.slidesGrid.length - 1],
          l = Math.abs(e);
        (a = l >= n ? (l - n) / o : (l + o - r) / o), a > 1 && (a -= 1);
      }
      Object.assign(t, {
        progress: n,
        progressLoop: a,
        isBeginning: r,
        isEnd: o,
      }),
        (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
          t.updateSlidesProgress(e),
        r && !l && t.emit("reachBeginning toEdge"),
        o && !d && t.emit("reachEnd toEdge"),
        ((l && !r) || (d && !o)) && t.emit("fromEdge"),
        t.emit("progress", n);
    },
    updateSlidesClasses: function () {
      const e = this,
        { slides: t, params: i, slidesEl: s, activeIndex: n } = e,
        r = e.virtual && i.virtual.enabled,
        o = (e) => w(s, `.${i.slideClass}${e}, swiper-slide${e}`)[0];
      let a;
      if (
        (t.forEach((e) => {
          e.classList.remove(
            i.slideActiveClass,
            i.slideNextClass,
            i.slidePrevClass
          );
        }),
        r)
      )
        if (i.loop) {
          let t = n - e.virtual.slidesBefore;
          t < 0 && (t = e.virtual.slides.length + t),
            t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
            (a = o(`[data-swiper-slide-index="${t}"]`));
        } else a = o(`[data-swiper-slide-index="${n}"]`);
      else a = t[n];
      if (a) {
        a.classList.add(i.slideActiveClass);
        let e = (function (e, t) {
          const i = [];
          for (; e.nextElementSibling; ) {
            const s = e.nextElementSibling;
            t ? s.matches(t) && i.push(s) : i.push(s), (e = s);
          }
          return i;
        })(a, `.${i.slideClass}, swiper-slide`)[0];
        i.loop && !e && (e = t[0]), e && e.classList.add(i.slideNextClass);
        let s = (function (e, t) {
          const i = [];
          for (; e.previousElementSibling; ) {
            const s = e.previousElementSibling;
            t ? s.matches(t) && i.push(s) : i.push(s), (e = s);
          }
          return i;
        })(a, `.${i.slideClass}, swiper-slide`)[0];
        i.loop && 0 === !s && (s = t[t.length - 1]),
          s && s.classList.add(i.slidePrevClass);
      }
      e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        i = t.rtlTranslate ? t.translate : -t.translate,
        {
          snapGrid: s,
          params: n,
          activeIndex: r,
          realIndex: o,
          snapIndex: a,
        } = t;
      let l,
        d = e;
      const c = (e) => {
        let i = e - t.virtual.slidesBefore;
        return (
          i < 0 && (i = t.virtual.slides.length + i),
          i >= t.virtual.slides.length && (i -= t.virtual.slides.length),
          i
        );
      };
      if (
        (void 0 === d &&
          (d = (function (e) {
            const { slidesGrid: t, params: i } = e,
              s = e.rtlTranslate ? e.translate : -e.translate;
            let n;
            for (let e = 0; e < t.length; e += 1)
              void 0 !== t[e + 1]
                ? s >= t[e] && s < t[e + 1] - (t[e + 1] - t[e]) / 2
                  ? (n = e)
                  : s >= t[e] && s < t[e + 1] && (n = e + 1)
                : s >= t[e] && (n = e);
            return (
              i.normalizeSlideIndex && (n < 0 || void 0 === n) && (n = 0), n
            );
          })(t)),
        s.indexOf(i) >= 0)
      )
        l = s.indexOf(i);
      else {
        const e = Math.min(n.slidesPerGroupSkip, d);
        l = e + Math.floor((d - e) / n.slidesPerGroup);
      }
      if ((l >= s.length && (l = s.length - 1), d === r))
        return (
          l !== a && ((t.snapIndex = l), t.emit("snapIndexChange")),
          void (
            t.params.loop &&
            t.virtual &&
            t.params.virtual.enabled &&
            (t.realIndex = c(d))
          )
        );
      let p;
      (p =
        t.virtual && n.virtual.enabled && n.loop
          ? c(d)
          : t.slides[d]
          ? parseInt(
              t.slides[d].getAttribute("data-swiper-slide-index") || d,
              10
            )
          : d),
        Object.assign(t, {
          previousSnapIndex: a,
          snapIndex: l,
          previousRealIndex: o,
          realIndex: p,
          previousIndex: r,
          activeIndex: d,
        }),
        t.initialized && A(t),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        o !== p && t.emit("realIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function (e) {
      const t = this,
        i = t.params,
        s = e.closest(`.${i.slideClass}, swiper-slide`);
      let n,
        r = !1;
      if (s)
        for (let e = 0; e < t.slides.length; e += 1)
          if (t.slides[e] === s) {
            (r = !0), (n = e);
            break;
          }
      if (!s || !r)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = s),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              s.getAttribute("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = n),
        i.slideToClickedSlide &&
          void 0 !== t.clickedIndex &&
          t.clickedIndex !== t.activeIndex &&
          t.slideToClickedSlide();
    },
  };
  const D = {
    getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
      const { params: t, rtlTranslate: i, translate: s, wrapperEl: n } = this;
      if (t.virtualTranslate) return i ? -s : s;
      if (t.cssMode) return s;
      let r = g(n, e);
      return (r += this.cssOverflowAdjustment()), i && (r = -r), r || 0;
    },
    setTranslate: function (e, t) {
      const i = this,
        { rtlTranslate: s, params: n, wrapperEl: r, progress: o } = i;
      let a,
        l = 0,
        d = 0;
      i.isHorizontal() ? (l = s ? -e : e) : (d = e),
        n.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))),
        (i.previousTranslate = i.translate),
        (i.translate = i.isHorizontal() ? l : d),
        n.cssMode
          ? (r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal()
              ? -l
              : -d)
          : n.virtualTranslate ||
            (i.isHorizontal()
              ? (l -= i.cssOverflowAdjustment())
              : (d -= i.cssOverflowAdjustment()),
            (r.style.transform = `translate3d(${l}px, ${d}px, 0px)`));
      const c = i.maxTranslate() - i.minTranslate();
      (a = 0 === c ? 0 : (e - i.minTranslate()) / c),
        a !== o && i.updateProgress(e),
        i.emit("setTranslate", i.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e = 0, t = this.params.speed, i = !0, s = !0, n) {
      const r = this,
        { params: o, wrapperEl: a } = r;
      if (r.animating && o.preventInteractionOnTransition) return !1;
      const l = r.minTranslate(),
        d = r.maxTranslate();
      let c;
      if (
        ((c = s && e > l ? l : s && e < d ? d : e),
        r.updateProgress(c),
        o.cssMode)
      ) {
        const e = r.isHorizontal();
        if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -c;
        else {
          if (!r.support.smoothScroll)
            return (
              y({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }), !0
            );
          a.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === t
          ? (r.setTransition(0),
            r.setTranslate(c),
            i &&
              (r.emit("beforeTransitionStart", t, n), r.emit("transitionEnd")))
          : (r.setTransition(t),
            r.setTranslate(c),
            i &&
              (r.emit("beforeTransitionStart", t, n),
              r.emit("transitionStart")),
            r.animating ||
              ((r.animating = !0),
              r.onTranslateToWrapperTransitionEnd ||
                (r.onTranslateToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.wrapperEl.removeEventListener(
                      "transitionend",
                      r.onTranslateToWrapperTransitionEnd
                    ),
                    (r.onTranslateToWrapperTransitionEnd = null),
                    delete r.onTranslateToWrapperTransitionEnd,
                    i && r.emit("transitionEnd"));
                }),
              r.wrapperEl.addEventListener(
                "transitionend",
                r.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  function G({ swiper: e, runCallbacks: t, direction: i, step: s }) {
    const { activeIndex: n, previousIndex: r } = e;
    let o = i;
    if (
      (o || (o = n > r ? "next" : n < r ? "prev" : "reset"),
      e.emit(`transition${s}`),
      t && n !== r)
    ) {
      if ("reset" === o) return void e.emit(`slideResetTransition${s}`);
      e.emit(`slideChangeTransition${s}`),
        "next" === o
          ? e.emit(`slideNextTransition${s}`)
          : e.emit(`slidePrevTransition${s}`);
    }
  }
  const B = {
    slideTo: function (e = 0, t = this.params.speed, i = !0, s, n) {
      "string" == typeof e && (e = parseInt(e, 10));
      const r = this;
      let o = e;
      o < 0 && (o = 0);
      const {
        params: a,
        snapGrid: l,
        slidesGrid: d,
        previousIndex: c,
        activeIndex: p,
        rtlTranslate: h,
        wrapperEl: u,
        enabled: g,
      } = r;
      if ((r.animating && a.preventInteractionOnTransition) || (!g && !s && !n))
        return !1;
      const m = Math.min(r.params.slidesPerGroupSkip, o);
      let f = m + Math.floor((o - m) / r.params.slidesPerGroup);
      f >= l.length && (f = l.length - 1);
      const v = -l[f];
      if (a.normalizeSlideIndex)
        for (let e = 0; e < d.length; e += 1) {
          const t = -Math.floor(100 * v),
            i = Math.floor(100 * d[e]),
            s = Math.floor(100 * d[e + 1]);
          void 0 !== d[e + 1]
            ? t >= i && t < s - (s - i) / 2
              ? (o = e)
              : t >= i && t < s && (o = e + 1)
            : t >= i && (o = e);
        }
      if (r.initialized && o !== p) {
        if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
          return !1;
        if (
          !r.allowSlidePrev &&
          v > r.translate &&
          v > r.maxTranslate() &&
          (p || 0) !== o
        )
          return !1;
      }
      let w;
      if (
        (o !== (c || 0) && i && r.emit("beforeSlideChangeStart"),
        r.updateProgress(v),
        (w = o > p ? "next" : o < p ? "prev" : "reset"),
        (h && -v === r.translate) || (!h && v === r.translate))
      )
        return (
          r.updateActiveIndex(o),
          a.autoHeight && r.updateAutoHeight(),
          r.updateSlidesClasses(),
          "slide" !== a.effect && r.setTranslate(v),
          "reset" !== w && (r.transitionStart(i, w), r.transitionEnd(i, w)),
          !1
        );
      if (a.cssMode) {
        const e = r.isHorizontal(),
          i = h ? v : -v;
        if (0 === t) {
          const t = r.virtual && r.params.virtual.enabled;
          t &&
            ((r.wrapperEl.style.scrollSnapType = "none"),
            (r._immediateVirtual = !0)),
            t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
              ? ((r._cssModeVirtualInitialSet = !0),
                requestAnimationFrame(() => {
                  u[e ? "scrollLeft" : "scrollTop"] = i;
                }))
              : (u[e ? "scrollLeft" : "scrollTop"] = i),
            t &&
              requestAnimationFrame(() => {
                (r.wrapperEl.style.scrollSnapType = ""),
                  (r._immediateVirtual = !1);
              });
        } else {
          if (!r.support.smoothScroll)
            return (
              y({ swiper: r, targetPosition: i, side: e ? "left" : "top" }), !0
            );
          u.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
        }
        return !0;
      }
      return (
        r.setTransition(t),
        r.setTranslate(v),
        r.updateActiveIndex(o),
        r.updateSlidesClasses(),
        r.emit("beforeTransitionStart", t, s),
        r.transitionStart(i, w),
        0 === t
          ? r.transitionEnd(i, w)
          : r.animating ||
            ((r.animating = !0),
            r.onSlideToWrapperTransitionEnd ||
              (r.onSlideToWrapperTransitionEnd = function (e) {
                r &&
                  !r.destroyed &&
                  e.target === this &&
                  (r.wrapperEl.removeEventListener(
                    "transitionend",
                    r.onSlideToWrapperTransitionEnd
                  ),
                  (r.onSlideToWrapperTransitionEnd = null),
                  delete r.onSlideToWrapperTransitionEnd,
                  r.transitionEnd(i, w));
              }),
            r.wrapperEl.addEventListener(
              "transitionend",
              r.onSlideToWrapperTransitionEnd
            )),
        !0
      );
    },
    slideToLoop: function (e = 0, t = this.params.speed, i = !0, s) {
      if ("string" == typeof e) {
        e = parseInt(e, 10);
      }
      const n = this;
      let r = e;
      return (
        n.params.loop &&
          (n.virtual && n.params.virtual.enabled
            ? (r += n.virtual.slidesBefore)
            : (r = n.getSlideIndexByData(r))),
        n.slideTo(r, t, i, s)
      );
    },
    slideNext: function (e = this.params.speed, t = !0, i) {
      const s = this,
        { enabled: n, params: r, animating: o } = s;
      if (!n) return s;
      let a = r.slidesPerGroup;
      "auto" === r.slidesPerView &&
        1 === r.slidesPerGroup &&
        r.slidesPerGroupAuto &&
        (a = Math.max(s.slidesPerViewDynamic("current", !0), 1));
      const l = s.activeIndex < r.slidesPerGroupSkip ? 1 : a,
        d = s.virtual && r.virtual.enabled;
      if (r.loop) {
        if (o && !d && r.loopPreventsSliding) return !1;
        s.loopFix({ direction: "next" }),
          (s._clientLeft = s.wrapperEl.clientLeft);
      }
      return r.rewind && s.isEnd
        ? s.slideTo(0, e, t, i)
        : s.slideTo(s.activeIndex + l, e, t, i);
    },
    slidePrev: function (e = this.params.speed, t = !0, i) {
      const s = this,
        {
          params: n,
          snapGrid: r,
          slidesGrid: o,
          rtlTranslate: a,
          enabled: l,
          animating: d,
        } = s;
      if (!l) return s;
      const c = s.virtual && n.virtual.enabled;
      if (n.loop) {
        if (d && !c && n.loopPreventsSliding) return !1;
        s.loopFix({ direction: "prev" }),
          (s._clientLeft = s.wrapperEl.clientLeft);
      }
      function p(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const h = p(a ? s.translate : -s.translate),
        u = r.map((e) => p(e));
      let g = r[u.indexOf(h) - 1];
      if (void 0 === g && n.cssMode) {
        let e;
        r.forEach((t, i) => {
          h >= t && (e = i);
        }),
          void 0 !== e && (g = r[e > 0 ? e - 1 : e]);
      }
      let m = 0;
      if (
        (void 0 !== g &&
          ((m = o.indexOf(g)),
          m < 0 && (m = s.activeIndex - 1),
          "auto" === n.slidesPerView &&
            1 === n.slidesPerGroup &&
            n.slidesPerGroupAuto &&
            ((m = m - s.slidesPerViewDynamic("previous", !0) + 1),
            (m = Math.max(m, 0)))),
        n.rewind && s.isBeginning)
      ) {
        const n =
          s.params.virtual && s.params.virtual.enabled && s.virtual
            ? s.virtual.slides.length - 1
            : s.slides.length - 1;
        return s.slideTo(n, e, t, i);
      }
      return s.slideTo(m, e, t, i);
    },
    slideReset: function (e = this.params.speed, t = !0, i) {
      return this.slideTo(this.activeIndex, e, t, i);
    },
    slideToClosest: function (e = this.params.speed, t = !0, i, s = 0.5) {
      const n = this;
      let r = n.activeIndex;
      const o = Math.min(n.params.slidesPerGroupSkip, r),
        a = o + Math.floor((r - o) / n.params.slidesPerGroup),
        l = n.rtlTranslate ? n.translate : -n.translate;
      if (l >= n.snapGrid[a]) {
        const e = n.snapGrid[a];
        l - e > (n.snapGrid[a + 1] - e) * s && (r += n.params.slidesPerGroup);
      } else {
        const e = n.snapGrid[a - 1];
        l - e <= (n.snapGrid[a] - e) * s && (r -= n.params.slidesPerGroup);
      }
      return (
        (r = Math.max(r, 0)),
        (r = Math.min(r, n.slidesGrid.length - 1)),
        n.slideTo(r, e, t, i)
      );
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, slidesEl: i } = e,
        s =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let n,
        r = e.clickedIndex;
      const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
      if (t.loop) {
        if (e.animating) return;
        (n = parseInt(
          e.clickedSlide.getAttribute("data-swiper-slide-index"),
          10
        )),
          t.centeredSlides
            ? r < e.loopedSlides - s / 2 ||
              r > e.slides.length - e.loopedSlides + s / 2
              ? (e.loopFix(),
                (r = e.getSlideIndex(
                  w(i, `${o}[data-swiper-slide-index="${n}"]`)[0]
                )),
                h(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r)
            : r > e.slides.length - s
            ? (e.loopFix(),
              (r = e.getSlideIndex(
                w(i, `${o}[data-swiper-slide-index="${n}"]`)[0]
              )),
              h(() => {
                e.slideTo(r);
              }))
            : e.slideTo(r);
      } else e.slideTo(r);
    },
  };
  const F = {
    loopCreate: function (e) {
      const t = this,
        { params: i, slidesEl: s } = t;
      if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
      w(s, `.${i.slideClass}, swiper-slide`).forEach((e, t) => {
        e.setAttribute("data-swiper-slide-index", t);
      }),
        t.loopFix({
          slideRealIndex: e,
          direction: i.centeredSlides ? void 0 : "next",
        });
    },
    loopFix: function ({
      slideRealIndex: e,
      slideTo: t = !0,
      direction: i,
      setTranslate: s,
      activeSlideIndex: n,
      byController: r,
      byMousewheel: o,
    } = {}) {
      const a = this;
      if (!a.params.loop) return;
      a.emit("beforeLoopFix");
      const {
        slides: l,
        allowSlidePrev: d,
        allowSlideNext: c,
        slidesEl: p,
        params: h,
      } = a;
      if (
        ((a.allowSlidePrev = !0),
        (a.allowSlideNext = !0),
        a.virtual && h.virtual.enabled)
      )
        return (
          t &&
            (h.centeredSlides || 0 !== a.snapIndex
              ? h.centeredSlides && a.snapIndex < h.slidesPerView
                ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
                : a.snapIndex === a.snapGrid.length - 1 &&
                  a.slideTo(a.virtual.slidesBefore, 0, !1, !0)
              : a.slideTo(a.virtual.slides.length, 0, !1, !0)),
          (a.allowSlidePrev = d),
          (a.allowSlideNext = c),
          void a.emit("loopFix")
        );
      const u =
        "auto" === h.slidesPerView
          ? a.slidesPerViewDynamic()
          : Math.ceil(parseFloat(h.slidesPerView, 10));
      let g = h.loopedSlides || u;
      g % h.slidesPerGroup != 0 &&
        (g += h.slidesPerGroup - (g % h.slidesPerGroup)),
        (a.loopedSlides = g);
      const m = [],
        f = [];
      let v = a.activeIndex;
      void 0 === n
        ? (n = a.getSlideIndex(
            a.slides.filter((e) => e.classList.contains(h.slideActiveClass))[0]
          ))
        : (v = n);
      const y = "next" === i || !i,
        w = "prev" === i || !i;
      let b = 0,
        S = 0;
      if (n < g) {
        b = Math.max(g - n, h.slidesPerGroup);
        for (let e = 0; e < g - n; e += 1) {
          const t = e - Math.floor(e / l.length) * l.length;
          m.push(l.length - t - 1);
        }
      } else if (n > a.slides.length - 2 * g) {
        S = Math.max(n - (a.slides.length - 2 * g), h.slidesPerGroup);
        for (let e = 0; e < S; e += 1) {
          const t = e - Math.floor(e / l.length) * l.length;
          f.push(t);
        }
      }
      if (
        (w &&
          m.forEach((e) => {
            (a.slides[e].swiperLoopMoveDOM = !0),
              p.prepend(a.slides[e]),
              (a.slides[e].swiperLoopMoveDOM = !1);
          }),
        y &&
          f.forEach((e) => {
            (a.slides[e].swiperLoopMoveDOM = !0),
              p.append(a.slides[e]),
              (a.slides[e].swiperLoopMoveDOM = !1);
          }),
        a.recalcSlides(),
        "auto" === h.slidesPerView && a.updateSlides(),
        h.watchSlidesProgress && a.updateSlidesOffset(),
        t)
      )
        if (m.length > 0 && w)
          if (void 0 === e) {
            const e = a.slidesGrid[v],
              t = a.slidesGrid[v + b] - e;
            o
              ? a.setTranslate(a.translate - t)
              : (a.slideTo(v + b, 0, !1, !0),
                s && (a.touches[a.isHorizontal() ? "startX" : "startY"] += t));
          } else s && a.slideToLoop(e, 0, !1, !0);
        else if (f.length > 0 && y)
          if (void 0 === e) {
            const e = a.slidesGrid[v],
              t = a.slidesGrid[v - S] - e;
            o
              ? a.setTranslate(a.translate - t)
              : (a.slideTo(v - S, 0, !1, !0),
                s && (a.touches[a.isHorizontal() ? "startX" : "startY"] += t));
          } else a.slideToLoop(e, 0, !1, !0);
      if (
        ((a.allowSlidePrev = d),
        (a.allowSlideNext = c),
        a.controller && a.controller.control && !r)
      ) {
        const t = {
          slideRealIndex: e,
          slideTo: !1,
          direction: i,
          setTranslate: s,
          activeSlideIndex: n,
          byController: !0,
        };
        Array.isArray(a.controller.control)
          ? a.controller.control.forEach((e) => {
              !e.destroyed && e.params.loop && e.loopFix(t);
            })
          : a.controller.control instanceof a.constructor &&
            a.controller.control.params.loop &&
            a.controller.control.loopFix(t);
      }
      a.emit("loopFix");
    },
    loopDestroy: function () {
      const e = this,
        { params: t, slidesEl: i } = e;
      if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
      e.recalcSlides();
      const s = [];
      e.slides.forEach((e) => {
        const t =
          void 0 === e.swiperSlideIndex
            ? 1 * e.getAttribute("data-swiper-slide-index")
            : e.swiperSlideIndex;
        s[t] = e;
      }),
        e.slides.forEach((e) => {
          e.removeAttribute("data-swiper-slide-index");
        }),
        s.forEach((e) => {
          i.append(e);
        }),
        e.recalcSlides(),
        e.slideTo(e.realIndex, 0);
    },
  };
  function V(e) {
    const t = this,
      i = d(),
      s = p(),
      n = t.touchEventsData;
    n.evCache.push(e);
    const { params: r, touches: o, enabled: a } = t;
    if (!a) return;
    if (!r.simulateTouch && "mouse" === e.pointerType) return;
    if (t.animating && r.preventInteractionOnTransition) return;
    !t.animating && r.cssMode && r.loop && t.loopFix();
    let l = e;
    l.originalEvent && (l = l.originalEvent);
    let c = l.target;
    if ("wrapper" === r.touchEventsTarget && !t.wrapperEl.contains(c)) return;
    if ("which" in l && 3 === l.which) return;
    if ("button" in l && l.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    const h = !!r.noSwipingClass && "" !== r.noSwipingClass,
      g = e.composedPath ? e.composedPath() : e.path;
    h && l.target && l.target.shadowRoot && g && (c = g[0]);
    const m = r.noSwipingSelector
        ? r.noSwipingSelector
        : `.${r.noSwipingClass}`,
      f = !(!l.target || !l.target.shadowRoot);
    if (
      r.noSwiping &&
      (f
        ? (function (e, t = this) {
            return (function t(i) {
              if (!i || i === d() || i === p()) return null;
              i.assignedSlot && (i = i.assignedSlot);
              const s = i.closest(e);
              return s || i.getRootNode ? s || t(i.getRootNode().host) : null;
            })(t);
          })(m, c)
        : c.closest(m))
    )
      return void (t.allowClick = !0);
    if (r.swipeHandler && !c.closest(r.swipeHandler)) return;
    (o.currentX = l.pageX), (o.currentY = l.pageY);
    const v = o.currentX,
      y = o.currentY,
      w = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
      b = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
    if (w && (v <= b || v >= s.innerWidth - b)) {
      if ("prevent" !== w) return;
      e.preventDefault();
    }
    Object.assign(n, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (o.startX = v),
      (o.startY = y),
      (n.touchStartTime = u()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      r.threshold > 0 && (n.allowThresholdMove = !1);
    let S = !0;
    c.matches(n.focusableElements) &&
      ((S = !1), "SELECT" === c.nodeName && (n.isTouched = !1)),
      i.activeElement &&
        i.activeElement.matches(n.focusableElements) &&
        i.activeElement !== c &&
        i.activeElement.blur();
    const x = S && t.allowTouchMove && r.touchStartPreventDefault;
    (!r.touchStartForcePreventDefault && !x) ||
      c.isContentEditable ||
      l.preventDefault(),
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !r.cssMode &&
        t.freeMode.onTouchStart(),
      t.emit("touchStart", l);
  }
  function H(e) {
    const t = d(),
      i = this,
      s = i.touchEventsData,
      { params: n, touches: r, rtlTranslate: o, enabled: a } = i;
    if (!a) return;
    if (!n.simulateTouch && "mouse" === e.pointerType) return;
    let l = e;
    if ((l.originalEvent && (l = l.originalEvent), !s.isTouched))
      return void (
        s.startMoving &&
        s.isScrolling &&
        i.emit("touchMoveOpposite", l)
      );
    const c = s.evCache.findIndex((e) => e.pointerId === l.pointerId);
    c >= 0 && (s.evCache[c] = l);
    const p = s.evCache.length > 1 ? s.evCache[0] : l,
      h = p.pageX,
      g = p.pageY;
    if (l.preventedByNestedSwiper) return (r.startX = h), void (r.startY = g);
    if (!i.allowTouchMove)
      return (
        l.target.matches(s.focusableElements) || (i.allowClick = !1),
        void (
          s.isTouched &&
          (Object.assign(r, {
            startX: h,
            startY: g,
            prevX: i.touches.currentX,
            prevY: i.touches.currentY,
            currentX: h,
            currentY: g,
          }),
          (s.touchStartTime = u()))
        )
      );
    if (n.touchReleaseOnEdges && !n.loop)
      if (i.isVertical()) {
        if (
          (g < r.startY && i.translate <= i.maxTranslate()) ||
          (g > r.startY && i.translate >= i.minTranslate())
        )
          return (s.isTouched = !1), void (s.isMoved = !1);
      } else if (
        (h < r.startX && i.translate <= i.maxTranslate()) ||
        (h > r.startX && i.translate >= i.minTranslate())
      )
        return;
    if (
      t.activeElement &&
      l.target === t.activeElement &&
      l.target.matches(s.focusableElements)
    )
      return (s.isMoved = !0), void (i.allowClick = !1);
    if (
      (s.allowTouchCallbacks && i.emit("touchMove", l),
      l.targetTouches && l.targetTouches.length > 1)
    )
      return;
    (r.currentX = h), (r.currentY = g);
    const m = r.currentX - r.startX,
      f = r.currentY - r.startY;
    if (i.params.threshold && Math.sqrt(m ** 2 + f ** 2) < i.params.threshold)
      return;
    if (void 0 === s.isScrolling) {
      let e;
      (i.isHorizontal() && r.currentY === r.startY) ||
      (i.isVertical() && r.currentX === r.startX)
        ? (s.isScrolling = !1)
        : m * m + f * f >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(f), Math.abs(m))) / Math.PI),
          (s.isScrolling = i.isHorizontal()
            ? e > n.touchAngle
            : 90 - e > n.touchAngle));
    }
    if (
      (s.isScrolling && i.emit("touchMoveOpposite", l),
      void 0 === s.startMoving &&
        ((r.currentX === r.startX && r.currentY === r.startY) ||
          (s.startMoving = !0)),
      s.isScrolling ||
        (i.zoom &&
          i.params.zoom &&
          i.params.zoom.enabled &&
          s.evCache.length > 1))
    )
      return void (s.isTouched = !1);
    if (!s.startMoving) return;
    (i.allowClick = !1),
      !n.cssMode && l.cancelable && l.preventDefault(),
      n.touchMoveStopPropagation && !n.nested && l.stopPropagation();
    let v = i.isHorizontal() ? m : f,
      y = i.isHorizontal()
        ? r.currentX - r.previousX
        : r.currentY - r.previousY;
    n.oneWayMovement &&
      ((v = Math.abs(v) * (o ? 1 : -1)), (y = Math.abs(y) * (o ? 1 : -1))),
      (r.diff = v),
      (v *= n.touchRatio),
      o && ((v = -v), (y = -y));
    const w = i.touchesDirection;
    (i.swipeDirection = v > 0 ? "prev" : "next"),
      (i.touchesDirection = y > 0 ? "prev" : "next");
    const b = i.params.loop && !n.cssMode;
    if (!s.isMoved) {
      if (
        (b && i.loopFix({ direction: i.swipeDirection }),
        (s.startTranslate = i.getTranslate()),
        i.setTransition(0),
        i.animating)
      ) {
        const e = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
        });
        i.wrapperEl.dispatchEvent(e);
      }
      (s.allowMomentumBounce = !1),
        !n.grabCursor ||
          (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
          i.setGrabCursor(!0),
        i.emit("sliderFirstMove", l);
    }
    let S;
    s.isMoved &&
      w !== i.touchesDirection &&
      b &&
      Math.abs(v) >= 1 &&
      (i.loopFix({ direction: i.swipeDirection, setTranslate: !0 }), (S = !0)),
      i.emit("sliderMove", l),
      (s.isMoved = !0),
      (s.currentTranslate = v + s.startTranslate);
    let x = !0,
      T = n.resistanceRatio;
    if (
      (n.touchReleaseOnEdges && (T = 0),
      v > 0
        ? (b &&
            !S &&
            s.currentTranslate >
              (n.centeredSlides
                ? i.minTranslate() - i.size / 2
                : i.minTranslate()) &&
            i.loopFix({
              direction: "prev",
              setTranslate: !0,
              activeSlideIndex: 0,
            }),
          s.currentTranslate > i.minTranslate() &&
            ((x = !1),
            n.resistance &&
              (s.currentTranslate =
                i.minTranslate() -
                1 +
                (-i.minTranslate() + s.startTranslate + v) ** T)))
        : v < 0 &&
          (b &&
            !S &&
            s.currentTranslate <
              (n.centeredSlides
                ? i.maxTranslate() + i.size / 2
                : i.maxTranslate()) &&
            i.loopFix({
              direction: "next",
              setTranslate: !0,
              activeSlideIndex:
                i.slides.length -
                ("auto" === n.slidesPerView
                  ? i.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(n.slidesPerView, 10))),
            }),
          s.currentTranslate < i.maxTranslate() &&
            ((x = !1),
            n.resistance &&
              (s.currentTranslate =
                i.maxTranslate() +
                1 -
                (i.maxTranslate() - s.startTranslate - v) ** T))),
      x && (l.preventedByNestedSwiper = !0),
      !i.allowSlideNext &&
        "next" === i.swipeDirection &&
        s.currentTranslate < s.startTranslate &&
        (s.currentTranslate = s.startTranslate),
      !i.allowSlidePrev &&
        "prev" === i.swipeDirection &&
        s.currentTranslate > s.startTranslate &&
        (s.currentTranslate = s.startTranslate),
      i.allowSlidePrev ||
        i.allowSlideNext ||
        (s.currentTranslate = s.startTranslate),
      n.threshold > 0)
    ) {
      if (!(Math.abs(v) > n.threshold || s.allowThresholdMove))
        return void (s.currentTranslate = s.startTranslate);
      if (!s.allowThresholdMove)
        return (
          (s.allowThresholdMove = !0),
          (r.startX = r.currentX),
          (r.startY = r.currentY),
          (s.currentTranslate = s.startTranslate),
          void (r.diff = i.isHorizontal()
            ? r.currentX - r.startX
            : r.currentY - r.startY)
        );
    }
    n.followFinger &&
      !n.cssMode &&
      (((n.freeMode && n.freeMode.enabled && i.freeMode) ||
        n.watchSlidesProgress) &&
        (i.updateActiveIndex(), i.updateSlidesClasses()),
      i.params.freeMode &&
        n.freeMode.enabled &&
        i.freeMode &&
        i.freeMode.onTouchMove(),
      i.updateProgress(s.currentTranslate),
      i.setTranslate(s.currentTranslate));
  }
  function $(e) {
    const t = this,
      i = t.touchEventsData,
      s = i.evCache.findIndex((t) => t.pointerId === e.pointerId);
    if (
      (s >= 0 && i.evCache.splice(s, 1),
      ["pointercancel", "pointerout", "pointerleave"].includes(e.type))
    ) {
      if (
        !(
          "pointercancel" === e.type &&
          (t.browser.isSafari || t.browser.isWebView)
        )
      )
        return;
    }
    const {
      params: n,
      touches: r,
      rtlTranslate: o,
      slidesGrid: a,
      enabled: l,
    } = t;
    if (!l) return;
    if (!n.simulateTouch && "mouse" === e.pointerType) return;
    let d = e;
    if (
      (d.originalEvent && (d = d.originalEvent),
      i.allowTouchCallbacks && t.emit("touchEnd", d),
      (i.allowTouchCallbacks = !1),
      !i.isTouched)
    )
      return (
        i.isMoved && n.grabCursor && t.setGrabCursor(!1),
        (i.isMoved = !1),
        void (i.startMoving = !1)
      );
    n.grabCursor &&
      i.isMoved &&
      i.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const c = u(),
      p = c - i.touchStartTime;
    if (t.allowClick) {
      const e = d.path || (d.composedPath && d.composedPath());
      t.updateClickedSlide((e && e[0]) || d.target),
        t.emit("tap click", d),
        p < 300 &&
          c - i.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", d);
    }
    if (
      ((i.lastClickTime = u()),
      h(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !i.isTouched ||
        !i.isMoved ||
        !t.swipeDirection ||
        0 === r.diff ||
        i.currentTranslate === i.startTranslate)
    )
      return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
    let g;
    if (
      ((i.isTouched = !1),
      (i.isMoved = !1),
      (i.startMoving = !1),
      (g = n.followFinger
        ? o
          ? t.translate
          : -t.translate
        : -i.currentTranslate),
      n.cssMode)
    )
      return;
    if (t.params.freeMode && n.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: g });
    let m = 0,
      f = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < a.length;
      e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
    ) {
      const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      void 0 !== a[e + t]
        ? g >= a[e] && g < a[e + t] && ((m = e), (f = a[e + t] - a[e]))
        : g >= a[e] && ((m = e), (f = a[a.length - 1] - a[a.length - 2]));
    }
    let v = null,
      y = null;
    n.rewind &&
      (t.isBeginning
        ? (y =
            t.params.virtual && t.params.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (v = 0));
    const w = (g - a[m]) / f,
      b = m < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    if (p > n.longSwipesMs) {
      if (!n.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (w >= n.longSwipesRatio
          ? t.slideTo(n.rewind && t.isEnd ? v : m + b)
          : t.slideTo(m)),
        "prev" === t.swipeDirection &&
          (w > 1 - n.longSwipesRatio
            ? t.slideTo(m + b)
            : null !== y && w < 0 && Math.abs(w) > n.longSwipesRatio
            ? t.slideTo(y)
            : t.slideTo(m));
    } else {
      if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
      (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl)
        ? d.target === t.navigation.nextEl
          ? t.slideTo(m + b)
          : t.slideTo(m)
        : ("next" === t.swipeDirection && t.slideTo(null !== v ? v : m + b),
          "prev" === t.swipeDirection && t.slideTo(null !== y ? y : m));
    }
  }
  function N() {
    const e = this,
      { params: t, el: i } = e;
    if (i && 0 === i.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: s, allowSlidePrev: n, snapGrid: r } = e,
      o = e.virtual && e.params.virtual.enabled;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses();
    const a = o && t.loop;
    !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
    !e.isEnd ||
    e.isBeginning ||
    e.params.centeredSlides ||
    a
      ? e.params.loop && !o
        ? e.slideToLoop(e.realIndex, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0)
      : e.slideTo(e.slides.length - 1, 0, !1, !0),
      e.autoplay &&
        e.autoplay.running &&
        e.autoplay.paused &&
        (clearTimeout(e.autoplay.resizeTimeout),
        (e.autoplay.resizeTimeout = setTimeout(() => {
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.resume();
        }, 500))),
      (e.allowSlidePrev = n),
      (e.allowSlideNext = s),
      e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }
  function W(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function j() {
    const e = this,
      { wrapperEl: t, rtlTranslate: i, enabled: s } = e;
    if (!s) return;
    let n;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const r = e.maxTranslate() - e.minTranslate();
    (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
      n !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  function R(e) {
    const t = this;
    k(t, e.target),
      t.params.cssMode ||
        ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
        t.update();
  }
  let q = !1;
  function Y() {}
  const X = (e, t) => {
    const i = d(),
      { params: s, el: n, wrapperEl: r, device: o } = e,
      a = !!s.nested,
      l = "on" === t ? "addEventListener" : "removeEventListener",
      c = t;
    n[l]("pointerdown", e.onTouchStart, { passive: !1 }),
      i[l]("pointermove", e.onTouchMove, { passive: !1, capture: a }),
      i[l]("pointerup", e.onTouchEnd, { passive: !0 }),
      i[l]("pointercancel", e.onTouchEnd, { passive: !0 }),
      i[l]("pointerout", e.onTouchEnd, { passive: !0 }),
      i[l]("pointerleave", e.onTouchEnd, { passive: !0 }),
      (s.preventClicks || s.preventClicksPropagation) &&
        n[l]("click", e.onClick, !0),
      s.cssMode && r[l]("scroll", e.onScroll),
      s.updateOnWindowResize
        ? e[c](
            o.ios || o.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            N,
            !0
          )
        : e[c]("observerUpdate", N, !0),
      n[l]("load", e.onLoad, { capture: !0 });
  };
  const U = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  const K = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function Z(e, t) {
    return function (i = {}) {
      const s = Object.keys(i)[0],
        n = i[s];
      "object" == typeof n && null !== n
        ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 &&
            !0 === e[s] &&
            (e[s] = { auto: !0 }),
          s in e && "enabled" in n
            ? (!0 === e[s] && (e[s] = { enabled: !0 }),
              "object" != typeof e[s] ||
                "enabled" in e[s] ||
                (e[s].enabled = !0),
              e[s] || (e[s] = { enabled: !1 }),
              f(t, i))
            : f(t, i))
        : f(t, i);
    };
  }
  const Q = {
      eventsEmitter: O,
      update: z,
      translate: D,
      transition: {
        setTransition: function (e, t) {
          const i = this;
          i.params.cssMode || (i.wrapperEl.style.transitionDuration = `${e}ms`),
            i.emit("setTransition", e, t);
        },
        transitionStart: function (e = !0, t) {
          const i = this,
            { params: s } = i;
          s.cssMode ||
            (s.autoHeight && i.updateAutoHeight(),
            G({ swiper: i, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e = !0, t) {
          const i = this,
            { params: s } = i;
          (i.animating = !1),
            s.cssMode ||
              (i.setTransition(0),
              G({ swiper: i, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: B,
      loop: F,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const i =
            "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          t.isElement && (t.__preventObserver__ = !0),
            (i.style.cursor = "move"),
            (i.style.cursor = e ? "grabbing" : "grab"),
            t.isElement &&
              requestAnimationFrame(() => {
                t.__preventObserver__ = !1;
              });
        },
        unsetGrabCursor: function () {
          const e = this;
          (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e.isElement && (e.__preventObserver__ = !0),
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = ""),
            e.isElement &&
              requestAnimationFrame(() => {
                e.__preventObserver__ = !1;
              }));
        },
      },
      events: {
        attachEvents: function () {
          const e = this,
            t = d(),
            { params: i } = e;
          (e.onTouchStart = V.bind(e)),
            (e.onTouchMove = H.bind(e)),
            (e.onTouchEnd = $.bind(e)),
            i.cssMode && (e.onScroll = j.bind(e)),
            (e.onClick = W.bind(e)),
            (e.onLoad = R.bind(e)),
            q || (t.addEventListener("touchstart", Y), (q = !0)),
            X(e, "on");
        },
        detachEvents: function () {
          X(this, "off");
        },
      },
      breakpoints: {
        setBreakpoint: function () {
          const e = this,
            { realIndex: t, initialized: i, params: s, el: n } = e,
            r = s.breakpoints;
          if (!r || (r && 0 === Object.keys(r).length)) return;
          const o = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
          if (!o || e.currentBreakpoint === o) return;
          const a = (o in r ? r[o] : void 0) || e.originalParams,
            l = U(e, s),
            d = U(e, a),
            c = s.enabled;
          l && !d
            ? (n.classList.remove(
                `${s.containerModifierClass}grid`,
                `${s.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !l &&
              d &&
              (n.classList.add(`${s.containerModifierClass}grid`),
              ((a.grid.fill && "column" === a.grid.fill) ||
                (!a.grid.fill && "column" === s.grid.fill)) &&
                n.classList.add(`${s.containerModifierClass}grid-column`),
              e.emitContainerClasses()),
            ["navigation", "pagination", "scrollbar"].forEach((t) => {
              const i = s[t] && s[t].enabled,
                n = a[t] && a[t].enabled;
              i && !n && e[t].disable(), !i && n && e[t].enable();
            });
          const p = a.direction && a.direction !== s.direction,
            h = s.loop && (a.slidesPerView !== s.slidesPerView || p);
          p && i && e.changeDirection(), f(e.params, a);
          const u = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            c && !u ? e.disable() : !c && u && e.enable(),
            (e.currentBreakpoint = o),
            e.emit("_beforeBreakpoint", a),
            h && i && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
            e.emit("breakpoint", a);
        },
        getBreakpoint: function (e, t = "window", i) {
          if (!e || ("container" === t && !i)) return;
          let s = !1;
          const n = p(),
            r = "window" === t ? n.innerHeight : i.clientHeight,
            o = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: r * t, point: e };
              }
              return { value: e, point: e };
            });
          o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < o.length; e += 1) {
            const { point: r, value: a } = o[e];
            "window" === t
              ? n.matchMedia(`(min-width: ${a}px)`).matches && (s = r)
              : a <= i.clientWidth && (s = r);
          }
          return s || "max";
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: i } = e,
            { slidesOffsetBefore: s } = i;
          if (s) {
            const t = e.slides.length - 1,
              i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
            e.isLocked = e.size > i;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      classes: {
        addClasses: function () {
          const e = this,
            { classNames: t, params: i, rtl: s, el: n, device: r } = e,
            o = (function (e, t) {
              const i = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((s) => {
                        e[s] && i.push(t + s);
                      })
                    : "string" == typeof e && i.push(t + e);
                }),
                i
              );
            })(
              [
                "initialized",
                i.direction,
                { "free-mode": e.params.freeMode && i.freeMode.enabled },
                { autoheight: i.autoHeight },
                { rtl: s },
                { grid: i.grid && i.grid.rows > 1 },
                {
                  "grid-column":
                    i.grid && i.grid.rows > 1 && "column" === i.grid.fill,
                },
                { android: r.android },
                { ios: r.ios },
                { "css-mode": i.cssMode },
                { centered: i.cssMode && i.centeredSlides },
                { "watch-progress": i.watchSlidesProgress },
              ],
              i.containerModifierClass
            );
          t.push(...o), n.classList.add(...t), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { el: e, classNames: t } = this;
          e.classList.remove(...t), this.emitContainerClasses();
        },
      },
    },
    J = {};
  class ee {
    constructor(...e) {
      let t, i;
      1 === e.length &&
      e[0].constructor &&
      "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
        ? (i = e[0])
        : ([t, i] = e),
        i || (i = {}),
        (i = f({}, i)),
        t && !i.el && (i.el = t);
      const s = d();
      if (
        i.el &&
        "string" == typeof i.el &&
        s.querySelectorAll(i.el).length > 1
      ) {
        const e = [];
        return (
          s.querySelectorAll(i.el).forEach((t) => {
            const s = f({}, i, { el: t });
            e.push(new ee(s));
          }),
          e
        );
      }
      const n = this;
      (n.__swiper__ = !0),
        (n.support = L()),
        (n.device = M({ userAgent: i.userAgent })),
        (n.browser = P()),
        (n.eventsListeners = {}),
        (n.eventsAnyListeners = []),
        (n.modules = [...n.__modules__]),
        i.modules && Array.isArray(i.modules) && n.modules.push(...i.modules);
      const r = {};
      n.modules.forEach((e) => {
        e({
          params: i,
          swiper: n,
          extendParams: Z(i, r),
          on: n.on.bind(n),
          once: n.once.bind(n),
          off: n.off.bind(n),
          emit: n.emit.bind(n),
        });
      });
      const o = f({}, K, r);
      return (
        (n.params = f({}, o, J, i)),
        (n.originalParams = f({}, n.params)),
        (n.passedParams = f({}, i)),
        n.params &&
          n.params.on &&
          Object.keys(n.params.on).forEach((e) => {
            n.on(e, n.params.on[e]);
          }),
        n.params && n.params.onAny && n.onAny(n.params.onAny),
        Object.assign(n, {
          enabled: n.params.enabled,
          el: t,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === n.params.direction,
          isVertical: () => "vertical" === n.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          cssOverflowAdjustment() {
            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
          },
          allowSlideNext: n.params.allowSlideNext,
          allowSlidePrev: n.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: n.params.focusableElements,
            lastClickTime: 0,
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            evCache: [],
          },
          allowClick: !0,
          allowTouchMove: n.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        n.emit("_swiper"),
        n.params.init && n.init(),
        n
      );
    }
    getSlideIndex(e) {
      const { slidesEl: t, params: i } = this,
        s = x(w(t, `.${i.slideClass}, swiper-slide`)[0]);
      return x(e) - s;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(
        this.slides.filter(
          (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
        )[0]
      );
    }
    recalcSlides() {
      const { slidesEl: e, params: t } = this;
      this.slides = w(e, `.${t.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const i = this;
      e = Math.min(Math.max(e, 0), 1);
      const s = i.minTranslate(),
        n = (i.maxTranslate() - s) * e + s;
      i.translateTo(n, void 0 === t ? 0 : t),
        i.updateActiveIndex(),
        i.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ""
        : e.className
            .split(" ")
            .filter(
              (e) =>
                0 === e.indexOf("swiper-slide") ||
                0 === e.indexOf(t.params.slideClass)
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.forEach((i) => {
        const s = e.getSlideClasses(i);
        t.push({ slideEl: i, classNames: s }), e.emit("_slideClass", i, s);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e = "current", t = !1) {
      const {
        params: i,
        slides: s,
        slidesGrid: n,
        slidesSizesGrid: r,
        size: o,
        activeIndex: a,
      } = this;
      let l = 1;
      if (i.centeredSlides) {
        let e,
          t = s[a].swiperSlideSize;
        for (let i = a + 1; i < s.length; i += 1)
          s[i] &&
            !e &&
            ((t += s[i].swiperSlideSize), (l += 1), t > o && (e = !0));
        for (let i = a - 1; i >= 0; i -= 1)
          s[i] &&
            !e &&
            ((t += s[i].swiperSlideSize), (l += 1), t > o && (e = !0));
      } else if ("current" === e)
        for (let e = a + 1; e < s.length; e += 1) {
          (t ? n[e] + r[e] - n[a] < o : n[e] - n[a] < o) && (l += 1);
        }
      else
        for (let e = a - 1; e >= 0; e -= 1) {
          n[a] - n[e] < o && (l += 1);
        }
      return l;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: i } = e;
      function s() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let n;
      if (
        (i.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
          t.complete && k(e, t);
        }),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.params.freeMode && e.params.freeMode.enabled)
      )
        s(), e.params.autoHeight && e.updateAutoHeight();
      else {
        if (
          ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) &&
          e.isEnd &&
          !e.params.centeredSlides
        ) {
          const t =
            e.virtual && e.params.virtual.enabled ? e.virtual.slides : e.slides;
          n = e.slideTo(t.length - 1, 0, !1, !0);
        } else n = e.slideTo(e.activeIndex, 0, !1, !0);
        n || s();
      }
      i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t = !0) {
      const i = this,
        s = i.params.direction;
      return (
        e || (e = "horizontal" === s ? "vertical" : "horizontal"),
        e === s ||
          ("horizontal" !== e && "vertical" !== e) ||
          (i.el.classList.remove(`${i.params.containerModifierClass}${s}`),
          i.el.classList.add(`${i.params.containerModifierClass}${e}`),
          i.emitContainerClasses(),
          (i.params.direction = e),
          i.slides.forEach((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          i.emit("changeDirection"),
          t && i.update()),
        i
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && "rtl" === e) ||
        (!t.rtl && "ltr" === e) ||
        ((t.rtl = "rtl" === e),
        (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
        t.rtl
          ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "rtl"))
          : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "ltr")),
        t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      let i = e || t.params.el;
      if (("string" == typeof i && (i = document.querySelector(i)), !i))
        return !1;
      (i.swiper = t), i.shadowEl && (t.isElement = !0);
      const s = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let n = (() => {
        if (i && i.shadowRoot && i.shadowRoot.querySelector) {
          return i.shadowRoot.querySelector(s());
        }
        return w(i, s())[0];
      })();
      return (
        !n &&
          t.params.createElements &&
          ((n = b("div", t.params.wrapperClass)),
          i.append(n),
          w(i, `.${t.params.slideClass}`).forEach((e) => {
            n.append(e);
          })),
        Object.assign(t, {
          el: i,
          wrapperEl: n,
          slidesEl: t.isElement ? i : n,
          mounted: !0,
          rtl: "rtl" === i.dir.toLowerCase() || "rtl" === S(i, "direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === i.dir.toLowerCase() || "rtl" === S(i, "direction")),
          wrongRTL: "-webkit-box" === S(n, "display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      return (
        !1 === t.mount(e) ||
          (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.loop && t.virtual && t.params.virtual.enabled
            ? t.slideTo(
                t.params.initialSlide + t.virtual.slidesBefore,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              ),
          t.params.loop && t.loopCreate(),
          t.attachEvents(),
          [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
            e.complete
              ? k(t, e)
              : e.addEventListener("load", (e) => {
                  k(t, e.target);
                });
          }),
          A(t),
          (t.initialized = !0),
          A(t),
          t.emit("init"),
          t.emit("afterInit")),
        t
      );
    }
    destroy(e = !0, t = !0) {
      const i = this,
        { params: s, el: n, wrapperEl: r, slides: o } = i;
      return (
        void 0 === i.params ||
          i.destroyed ||
          (i.emit("beforeDestroy"),
          (i.initialized = !1),
          i.detachEvents(),
          s.loop && i.loopDestroy(),
          t &&
            (i.removeClasses(),
            n.removeAttribute("style"),
            r.removeAttribute("style"),
            o &&
              o.length &&
              o.forEach((e) => {
                e.classList.remove(
                  s.slideVisibleClass,
                  s.slideActiveClass,
                  s.slideNextClass,
                  s.slidePrevClass
                ),
                  e.removeAttribute("style"),
                  e.removeAttribute("data-swiper-slide-index");
              })),
          i.emit("destroy"),
          Object.keys(i.eventsListeners).forEach((e) => {
            i.off(e);
          }),
          !1 !== e &&
            ((i.el.swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(i)),
          (i.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      f(J, e);
    }
    static get extendedDefaults() {
      return J;
    }
    static get defaults() {
      return K;
    }
    static installModule(e) {
      ee.prototype.__modules__ || (ee.prototype.__modules__ = []);
      const t = ee.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => ee.installModule(e)), ee)
        : (ee.installModule(e), ee);
    }
  }
  Object.keys(Q).forEach((e) => {
    Object.keys(Q[e]).forEach((t) => {
      ee.prototype[t] = Q[e][t];
    });
  }),
    ee.use([
      function ({ swiper: e, on: t, emit: i }) {
        const s = p();
        let n = null,
          r = null;
        const o = () => {
            e &&
              !e.destroyed &&
              e.initialized &&
              (i("beforeResize"), i("resize"));
          },
          a = () => {
            e && !e.destroyed && e.initialized && i("orientationchange");
          };
        t("init", () => {
          e.params.resizeObserver && void 0 !== s.ResizeObserver
            ? e &&
              !e.destroyed &&
              e.initialized &&
              ((n = new ResizeObserver((t) => {
                r = s.requestAnimationFrame(() => {
                  const { width: i, height: s } = e;
                  let n = i,
                    r = s;
                  t.forEach(
                    ({ contentBoxSize: t, contentRect: i, target: s }) => {
                      (s && s !== e.el) ||
                        ((n = i ? i.width : (t[0] || t).inlineSize),
                        (r = i ? i.height : (t[0] || t).blockSize));
                    }
                  ),
                    (n === i && r === s) || o();
                });
              })),
              n.observe(e.el))
            : (s.addEventListener("resize", o),
              s.addEventListener("orientationchange", a));
        }),
          t("destroy", () => {
            r && s.cancelAnimationFrame(r),
              n && n.unobserve && e.el && (n.unobserve(e.el), (n = null)),
              s.removeEventListener("resize", o),
              s.removeEventListener("orientationchange", a);
          });
      },
      function ({ swiper: e, extendParams: t, on: i, emit: s }) {
        const n = [],
          r = p(),
          o = (t, i = {}) => {
            const o = new (r.MutationObserver || r.WebkitMutationObserver)(
              (t) => {
                if (e.__preventObserver__) return;
                if (1 === t.length) return void s("observerUpdate", t[0]);
                const i = function () {
                  s("observerUpdate", t[0]);
                };
                r.requestAnimationFrame
                  ? r.requestAnimationFrame(i)
                  : r.setTimeout(i, 0);
              }
            );
            o.observe(t, {
              attributes: void 0 === i.attributes || i.attributes,
              childList: void 0 === i.childList || i.childList,
              characterData: void 0 === i.characterData || i.characterData,
            }),
              n.push(o);
          };
        t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          i("init", () => {
            if (e.params.observer) {
              if (e.params.observeParents) {
                const t = (function (e, t) {
                  const i = [];
                  let s = e.parentElement;
                  for (; s; )
                    t ? s.matches(t) && i.push(s) : i.push(s),
                      (s = s.parentElement);
                  return i;
                })(e.el);
                for (let e = 0; e < t.length; e += 1) o(t[e]);
              }
              o(e.el, { childList: e.params.observeSlideChildren }),
                o(e.wrapperEl, { attributes: !1 });
            }
          }),
          i("destroy", () => {
            n.forEach((e) => {
              e.disconnect();
            }),
              n.splice(0, n.length);
          });
      },
    ]);
  const te = ee;
  function ie({ swiper: e, extendParams: t, on: i, emit: s }) {
    t({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled",
      },
    }),
      (e.navigation = { nextEl: null, prevEl: null });
    const n = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
    function r(t) {
      let i;
      return t &&
        "string" == typeof t &&
        e.isElement &&
        ((i = e.el.shadowRoot.querySelector(t)), i)
        ? i
        : (t &&
            ("string" == typeof t && (i = [...document.querySelectorAll(t)]),
            e.params.uniqueNavElements &&
              "string" == typeof t &&
              i.length > 1 &&
              1 === e.el.querySelectorAll(t).length &&
              (i = e.el.querySelector(t))),
          t && !i ? t : i);
    }
    function o(t, i) {
      const s = e.params.navigation;
      (t = n(t)).forEach((t) => {
        t &&
          (t.classList[i ? "add" : "remove"](...s.disabledClass.split(" ")),
          "BUTTON" === t.tagName && (t.disabled = i),
          e.params.watchOverflow &&
            e.enabled &&
            t.classList[e.isLocked ? "add" : "remove"](s.lockClass));
      });
    }
    function a() {
      const { nextEl: t, prevEl: i } = e.navigation;
      if (e.params.loop) return o(i, !1), void o(t, !1);
      o(i, e.isBeginning && !e.params.rewind),
        o(t, e.isEnd && !e.params.rewind);
    }
    function l(t) {
      t.preventDefault(),
        (!e.isBeginning || e.params.loop || e.params.rewind) &&
          (e.slidePrev(), s("navigationPrev"));
    }
    function d(t) {
      t.preventDefault(),
        (!e.isEnd || e.params.loop || e.params.rewind) &&
          (e.slideNext(), s("navigationNext"));
    }
    function c() {
      const t = e.params.navigation;
      if (
        ((e.params.navigation = (function (e, t, i, s) {
          return (
            e.params.createElements &&
              Object.keys(s).forEach((n) => {
                if (!i[n] && !0 === i.auto) {
                  let r = w(e.el, `.${s[n]}`)[0];
                  r ||
                    ((r = b("div", s[n])),
                    (r.className = s[n]),
                    e.el.append(r)),
                    (i[n] = r),
                    (t[n] = r);
                }
              }),
            i
          );
        })(e, e.originalParams.navigation, e.params.navigation, {
          nextEl: "swiper-button-next",
          prevEl: "swiper-button-prev",
        })),
        !t.nextEl && !t.prevEl)
      )
        return;
      let i = r(t.nextEl),
        s = r(t.prevEl);
      Object.assign(e.navigation, { nextEl: i, prevEl: s }),
        (i = n(i)),
        (s = n(s));
      const o = (i, s) => {
        i && i.addEventListener("click", "next" === s ? d : l),
          !e.enabled && i && i.classList.add(...t.lockClass.split(" "));
      };
      i.forEach((e) => o(e, "next")), s.forEach((e) => o(e, "prev"));
    }
    function p() {
      let { nextEl: t, prevEl: i } = e.navigation;
      (t = n(t)), (i = n(i));
      const s = (t, i) => {
        t.removeEventListener("click", "next" === i ? d : l),
          t.classList.remove(...e.params.navigation.disabledClass.split(" "));
      };
      t.forEach((e) => s(e, "next")), i.forEach((e) => s(e, "prev"));
    }
    i("init", () => {
      !1 === e.params.navigation.enabled ? h() : (c(), a());
    }),
      i("toEdge fromEdge lock unlock", () => {
        a();
      }),
      i("destroy", () => {
        p();
      }),
      i("enable disable", () => {
        let { nextEl: t, prevEl: i } = e.navigation;
        (t = n(t)),
          (i = n(i)),
          [...t, ...i]
            .filter((e) => !!e)
            .forEach((t) =>
              t.classList[e.enabled ? "remove" : "add"](
                e.params.navigation.lockClass
              )
            );
      }),
      i("click", (t, i) => {
        let { nextEl: r, prevEl: o } = e.navigation;
        (r = n(r)), (o = n(o));
        const a = i.target;
        if (
          e.params.navigation.hideOnClick &&
          !o.includes(a) &&
          !r.includes(a)
        ) {
          if (
            e.pagination &&
            e.params.pagination &&
            e.params.pagination.clickable &&
            (e.pagination.el === a || e.pagination.el.contains(a))
          )
            return;
          let t;
          r.length
            ? (t = r[0].classList.contains(e.params.navigation.hiddenClass))
            : o.length &&
              (t = o[0].classList.contains(e.params.navigation.hiddenClass)),
            s(!0 === t ? "navigationShow" : "navigationHide"),
            [...r, ...o]
              .filter((e) => !!e)
              .forEach((t) =>
                t.classList.toggle(e.params.navigation.hiddenClass)
              );
        }
      });
    const h = () => {
      e.el.classList.add(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        p();
    };
    Object.assign(e.navigation, {
      enable: () => {
        e.el.classList.remove(
          ...e.params.navigation.navigationDisabledClass.split(" ")
        ),
          c(),
          a();
      },
      disable: h,
      update: a,
      init: c,
      destroy: p,
    });
  }
  function se() {
    let e = document.querySelectorAll(
      '[class*="__swiper"]:not(.swiper-wrapper)'
    );
    e &&
      e.forEach((e) => {
        e.parentElement.classList.add("swiper"),
          e.classList.add("swiper-wrapper");
        for (const t of e.children) t.classList.add("swiper-slide");
      });
  }
  window.addEventListener("load", function (e) {
    se(),
      document.querySelector(".clients__slider") &&
        new te(".clients__slider", {
          modules: [ie],
          observer: !0,
          observeParents: !0,
          slidesPerView: 4,
          spaceBetween: 40,
          speed: 800,
          loop: !0,
          navigation: {
            prevEl: ".clients__navigation .navigation-slider__button_prev",
            nextEl: ".clients__navigation .navigation-slider__button_next",
          },
          breakpoints: {
            0: { slidesPerView: 1, spaceBetween: 20 },
            478: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1268: { slidesPerView: 4, spaceBetween: 30 },
          },
          on: {},
        }),
      document.querySelector(".certificates__slider") &&
        new te(".certificates__slider", {
          modules: [ie],
          observer: !0,
          observeParents: !0,
          spaceBetween: 0,
          speed: 800,
          loop: !0,
          navigation: {
            prevEl: ".certificates__navigation .navigation-slider__button_prev",
            nextEl: ".certificates__navigation .navigation-slider__button_next",
          },
          breakpoints: {
            0: { slidesPerView: 1, spaceBetween: 10 },
            595: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 20 },
            1330: { slidesPerView: 4 },
          },
          on: {},
        }),
      document.querySelector(".testimonials__slider") &&
        new te(".testimonials__slider", {
          modules: [ie],
          observer: !0,
          observeParents: !0,
          slidesPerView: 3,
          spaceBetween: 0,
          speed: 800,
          loop: !0,
          navigation: {
            prevEl: ".testimonials__navigation .navigation-slider__button_prev",
            nextEl: ".testimonials__navigation .navigation-slider__button_next",
          },
          breakpoints: {
            0: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1330: { slidesPerView: 3, spaceBetween: 30 },
          },
          on: {},
        }),
      document.querySelector(".mb-of-interest__slider") &&
        new te(".mb-of-interest__slider", {
          modules: [ie],
          observer: !0,
          observeParents: !0,
          slidesPerView: 3,
          spaceBetween: 0,
          speed: 800,
          loop: !0,
          navigation: {
            prevEl:
              ".mb-of-interest__navigation .navigation-slider__button_prev",
            nextEl:
              ".mb-of-interest__navigation .navigation-slider__button_next",
          },
          breakpoints: {
            0: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1330: { slidesPerView: 3, spaceBetween: 30 },
          },
          on: {},
        });
  });
  e.watcher = new (class {
    constructor(e) {
      (this.config = Object.assign({ logging: !0 }, e)),
        this.observer,
        !document.documentElement.classList.contains("watcher") &&
          this.scrollWatcherRun();
    }
    scrollWatcherUpdate() {
      this.scrollWatcherRun();
    }
    scrollWatcherRun() {
      document.documentElement.classList.add("watcher"),
        this.scrollWatcherConstructor(
          document.querySelectorAll("[data-watch]")
        );
    }
    scrollWatcherConstructor(e) {
      if (e.length) {
        this.scrollWatcherLogging(
          `Проснулся, слежу за объектами (${e.length})...`
        ),
          n(
            Array.from(e).map(function (e) {
              return `${
                e.dataset.watchRoot ? e.dataset.watchRoot : null
              }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
            })
          ).forEach((t) => {
            let i = t.split("|"),
              s = { root: i[0], margin: i[1], threshold: i[2] },
              n = Array.from(e).filter(function (e) {
                let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                  i = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                  n = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                if (
                  String(t) === s.root &&
                  String(i) === s.margin &&
                  String(n) === s.threshold
                )
                  return e;
              }),
              r = this.getScrollWatcherConfig(s);
            this.scrollWatcherInit(n, r);
          });
      } else
        this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
    }
    getScrollWatcherConfig(e) {
      let t = {};
      if (
        (document.querySelector(e.root)
          ? (t.root = document.querySelector(e.root))
          : "null" !== e.root &&
            this.scrollWatcherLogging(
              `Эмм... родительского объекта ${e.root} нет на странице`
            ),
        (t.rootMargin = e.margin),
        !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
      ) {
        if ("prx" === e.threshold) {
          e.threshold = [];
          for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
        } else e.threshold = e.threshold.split(",");
        return (t.threshold = e.threshold), t;
      }
      this.scrollWatcherLogging(
        "Ой ой, настройку data-watch-margin нужно задавать в PX или %"
      );
    }
    scrollWatcherCreate(e) {
      this.observer = new IntersectionObserver((e, t) => {
        e.forEach((e) => {
          this.scrollWatcherCallback(e, t);
        });
      }, e);
    }
    scrollWatcherInit(e, t) {
      this.scrollWatcherCreate(t), e.forEach((e) => this.observer.observe(e));
    }
    scrollWatcherIntersecting(e, t) {
      e.isIntersecting
        ? (!t.classList.contains("_watcher-view") &&
            t.classList.add("_watcher-view"),
          this.scrollWatcherLogging(
            `Я вижу ${t.classList}, добавил класс _watcher-view`
          ))
        : (t.classList.contains("_watcher-view") &&
            t.classList.remove("_watcher-view"),
          this.scrollWatcherLogging(
            `Я не вижу ${t.classList}, убрал класс _watcher-view`
          ));
    }
    scrollWatcherOff(e, t) {
      t.unobserve(e),
        this.scrollWatcherLogging(`Я перестал следить за ${e.classList}`);
    }
    scrollWatcherLogging(e) {
      this.config.logging &&
        (function (e) {
          setTimeout(() => {
            window.FLS && console.log(e);
          }, 0);
        })(`[Наблюдатель]: ${e}`);
    }
    scrollWatcherCallback(e, t) {
      const i = e.target;
      this.scrollWatcherIntersecting(e, i),
        i.hasAttribute("data-watch-once") &&
          e.isIntersecting &&
          this.scrollWatcherOff(i, t),
        document.dispatchEvent(
          new CustomEvent("watcherCallback", { detail: { entry: e } })
        );
    }
  })({});
  let ne = !1;
  setTimeout(() => {
    if (ne) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0);
  var re = function () {
    return (
      (re =
        Object.assign ||
        function (e) {
          for (var t, i = 1, s = arguments.length; i < s; i++)
            for (var n in (t = arguments[i]))
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e;
        }),
      re.apply(this, arguments)
    );
  };
  var oe = "lgAfterAppendSlide",
    ae = "lgInit",
    le = "lgHasVideo",
    de = "lgContainerResize",
    ce = "lgUpdateSlides",
    pe = "lgAfterAppendSubHtml",
    he = "lgBeforeOpen",
    ue = "lgAfterOpen",
    ge = "lgSlideItemLoad",
    me = "lgBeforeSlide",
    fe = "lgAfterSlide",
    ve = "lgPosterClick",
    ye = "lgDragStart",
    we = "lgDragMove",
    be = "lgDragEnd",
    Se = "lgBeforeNextSlide",
    xe = "lgBeforePrevSlide",
    Te = "lgBeforeClose",
    Ce = "lgAfterClose",
    Ee = {
      mode: "lg-slide",
      easing: "ease",
      speed: 400,
      licenseKey: "0000-0000-000-0000",
      height: "100%",
      width: "100%",
      addClass: "",
      startClass: "lg-start-zoom",
      backdropDuration: 300,
      container: "",
      startAnimationDuration: 400,
      zoomFromOrigin: !0,
      hideBarsDelay: 0,
      showBarsAfter: 1e4,
      slideDelay: 0,
      supportLegacyBrowser: !0,
      allowMediaOverlap: !1,
      videoMaxSize: "1280-720",
      loadYouTubePoster: !0,
      defaultCaptionHeight: 0,
      ariaLabelledby: "",
      ariaDescribedby: "",
      resetScrollPosition: !0,
      hideScrollbar: !1,
      closable: !0,
      swipeToClose: !0,
      closeOnTap: !0,
      showCloseIcon: !0,
      showMaximizeIcon: !1,
      loop: !0,
      escKey: !0,
      keyPress: !0,
      trapFocus: !0,
      controls: !0,
      slideEndAnimation: !0,
      hideControlOnEnd: !1,
      mousewheel: !1,
      getCaptionFromTitleOrAlt: !0,
      appendSubHtmlTo: ".lg-sub-html",
      subHtmlSelectorRelative: !1,
      preload: 2,
      numberOfSlideItemsInDom: 10,
      selector: "",
      selectWithin: "",
      nextHtml: "",
      prevHtml: "",
      index: 0,
      iframeWidth: "100%",
      iframeHeight: "100%",
      iframeMaxWidth: "100%",
      iframeMaxHeight: "100%",
      download: !0,
      counter: !0,
      appendCounterTo: ".lg-toolbar",
      swipeThreshold: 50,
      enableSwipe: !0,
      enableDrag: !0,
      dynamic: !1,
      dynamicEl: [],
      extraProps: [],
      exThumbImage: "",
      isMobile: void 0,
      mobileSettings: { controls: !1, showCloseIcon: !1, download: !1 },
      plugins: [],
      strings: {
        closeGallery: "Close gallery",
        toggleMaximize: "Toggle maximize",
        previousSlide: "Previous slide",
        nextSlide: "Next slide",
        download: "Download",
        playVideo: "Play video",
      },
    };
  var Ie = (function () {
    function e(e) {
      return (
        (this.cssVenderPrefixes = [
          "TransitionDuration",
          "TransitionTimingFunction",
          "Transform",
          "Transition",
        ]),
        (this.selector = this._getSelector(e)),
        (this.firstElement = this._getFirstEl()),
        this
      );
    }
    return (
      (e.generateUUID = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (e) {
            var t = (16 * Math.random()) | 0;
            return ("x" == e ? t : (3 & t) | 8).toString(16);
          }
        );
      }),
      (e.prototype._getSelector = function (e, t) {
        return (
          void 0 === t && (t = document),
          "string" != typeof e
            ? e
            : ((t = t || document),
              "#" === e.substring(0, 1)
                ? t.querySelector(e)
                : t.querySelectorAll(e))
        );
      }),
      (e.prototype._each = function (e) {
        return this.selector
          ? (void 0 !== this.selector.length
              ? [].forEach.call(this.selector, e)
              : e(this.selector, 0),
            this)
          : this;
      }),
      (e.prototype._setCssVendorPrefix = function (e, t, i) {
        var s = t.replace(/-([a-z])/gi, function (e, t) {
          return t.toUpperCase();
        });
        -1 !== this.cssVenderPrefixes.indexOf(s)
          ? ((e.style[s.charAt(0).toLowerCase() + s.slice(1)] = i),
            (e.style["webkit" + s] = i),
            (e.style["moz" + s] = i),
            (e.style["ms" + s] = i),
            (e.style["o" + s] = i))
          : (e.style[s] = i);
      }),
      (e.prototype._getFirstEl = function () {
        return this.selector && void 0 !== this.selector.length
          ? this.selector[0]
          : this.selector;
      }),
      (e.prototype.isEventMatched = function (e, t) {
        var i = t.split(".");
        return e
          .split(".")
          .filter(function (e) {
            return e;
          })
          .every(function (e) {
            return -1 !== i.indexOf(e);
          });
      }),
      (e.prototype.attr = function (e, t) {
        return void 0 === t
          ? this.firstElement
            ? this.firstElement.getAttribute(e)
            : ""
          : (this._each(function (i) {
              i.setAttribute(e, t);
            }),
            this);
      }),
      (e.prototype.find = function (e) {
        return Le(this._getSelector(e, this.selector));
      }),
      (e.prototype.first = function () {
        return this.selector && void 0 !== this.selector.length
          ? Le(this.selector[0])
          : Le(this.selector);
      }),
      (e.prototype.eq = function (e) {
        return Le(this.selector[e]);
      }),
      (e.prototype.parent = function () {
        return Le(this.selector.parentElement);
      }),
      (e.prototype.get = function () {
        return this._getFirstEl();
      }),
      (e.prototype.removeAttr = function (e) {
        var t = e.split(" ");
        return (
          this._each(function (e) {
            t.forEach(function (t) {
              return e.removeAttribute(t);
            });
          }),
          this
        );
      }),
      (e.prototype.wrap = function (e) {
        if (!this.firstElement) return this;
        var t = document.createElement("div");
        return (
          (t.className = e),
          this.firstElement.parentNode.insertBefore(t, this.firstElement),
          this.firstElement.parentNode.removeChild(this.firstElement),
          t.appendChild(this.firstElement),
          this
        );
      }),
      (e.prototype.addClass = function (e) {
        return (
          void 0 === e && (e = ""),
          this._each(function (t) {
            e.split(" ").forEach(function (e) {
              e && t.classList.add(e);
            });
          }),
          this
        );
      }),
      (e.prototype.removeClass = function (e) {
        return (
          this._each(function (t) {
            e.split(" ").forEach(function (e) {
              e && t.classList.remove(e);
            });
          }),
          this
        );
      }),
      (e.prototype.hasClass = function (e) {
        return !!this.firstElement && this.firstElement.classList.contains(e);
      }),
      (e.prototype.hasAttribute = function (e) {
        return !!this.firstElement && this.firstElement.hasAttribute(e);
      }),
      (e.prototype.toggleClass = function (e) {
        return this.firstElement
          ? (this.hasClass(e) ? this.removeClass(e) : this.addClass(e), this)
          : this;
      }),
      (e.prototype.css = function (e, t) {
        var i = this;
        return (
          this._each(function (s) {
            i._setCssVendorPrefix(s, e, t);
          }),
          this
        );
      }),
      (e.prototype.on = function (t, i) {
        var s = this;
        return this.selector
          ? (t.split(" ").forEach(function (t) {
              Array.isArray(e.eventListeners[t]) || (e.eventListeners[t] = []),
                e.eventListeners[t].push(i),
                s.selector.addEventListener(t.split(".")[0], i);
            }),
            this)
          : this;
      }),
      (e.prototype.once = function (e, t) {
        var i = this;
        return (
          this.on(e, function () {
            i.off(e), t(e);
          }),
          this
        );
      }),
      (e.prototype.off = function (t) {
        var i = this;
        return this.selector
          ? (Object.keys(e.eventListeners).forEach(function (s) {
              i.isEventMatched(t, s) &&
                (e.eventListeners[s].forEach(function (e) {
                  i.selector.removeEventListener(s.split(".")[0], e);
                }),
                (e.eventListeners[s] = []));
            }),
            this)
          : this;
      }),
      (e.prototype.trigger = function (e, t) {
        if (!this.firstElement) return this;
        var i = new CustomEvent(e.split(".")[0], { detail: t || null });
        return this.firstElement.dispatchEvent(i), this;
      }),
      (e.prototype.load = function (e) {
        var t = this;
        return (
          fetch(e)
            .then(function (e) {
              return e.text();
            })
            .then(function (e) {
              t.selector.innerHTML = e;
            }),
          this
        );
      }),
      (e.prototype.html = function (e) {
        return void 0 === e
          ? this.firstElement
            ? this.firstElement.innerHTML
            : ""
          : (this._each(function (t) {
              t.innerHTML = e;
            }),
            this);
      }),
      (e.prototype.append = function (e) {
        return (
          this._each(function (t) {
            "string" == typeof e
              ? t.insertAdjacentHTML("beforeend", e)
              : t.appendChild(e);
          }),
          this
        );
      }),
      (e.prototype.prepend = function (e) {
        return (
          this._each(function (t) {
            t.insertAdjacentHTML("afterbegin", e);
          }),
          this
        );
      }),
      (e.prototype.remove = function () {
        return (
          this._each(function (e) {
            e.parentNode.removeChild(e);
          }),
          this
        );
      }),
      (e.prototype.empty = function () {
        return (
          this._each(function (e) {
            e.innerHTML = "";
          }),
          this
        );
      }),
      (e.prototype.scrollTop = function (e) {
        return void 0 !== e
          ? ((document.body.scrollTop = e),
            (document.documentElement.scrollTop = e),
            this)
          : window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop ||
              0;
      }),
      (e.prototype.scrollLeft = function (e) {
        return void 0 !== e
          ? ((document.body.scrollLeft = e),
            (document.documentElement.scrollLeft = e),
            this)
          : window.pageXOffset ||
              document.documentElement.scrollLeft ||
              document.body.scrollLeft ||
              0;
      }),
      (e.prototype.offset = function () {
        if (!this.firstElement) return { left: 0, top: 0 };
        var e = this.firstElement.getBoundingClientRect(),
          t = Le("body").style().marginLeft;
        return {
          left: e.left - parseFloat(t) + this.scrollLeft(),
          top: e.top + this.scrollTop(),
        };
      }),
      (e.prototype.style = function () {
        return this.firstElement
          ? this.firstElement.currentStyle ||
              window.getComputedStyle(this.firstElement)
          : {};
      }),
      (e.prototype.width = function () {
        var e = this.style();
        return (
          this.firstElement.clientWidth -
          parseFloat(e.paddingLeft) -
          parseFloat(e.paddingRight)
        );
      }),
      (e.prototype.height = function () {
        var e = this.style();
        return (
          this.firstElement.clientHeight -
          parseFloat(e.paddingTop) -
          parseFloat(e.paddingBottom)
        );
      }),
      (e.eventListeners = {}),
      e
    );
  })();
  function Le(e) {
    return (
      (function () {
        if ("function" == typeof window.CustomEvent) return !1;
        window.CustomEvent = function (e, t) {
          t = t || { bubbles: !1, cancelable: !1, detail: null };
          var i = document.createEvent("CustomEvent");
          return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
        };
      })(),
      Element.prototype.matches ||
        (Element.prototype.matches =
          Element.prototype.msMatchesSelector ||
          Element.prototype.webkitMatchesSelector),
      new Ie(e)
    );
  }
  var Me = [
    "src",
    "sources",
    "subHtml",
    "subHtmlUrl",
    "html",
    "video",
    "poster",
    "slideName",
    "responsive",
    "srcset",
    "sizes",
    "iframe",
    "downloadUrl",
    "download",
    "width",
    "facebookShareUrl",
    "tweetText",
    "iframeTitle",
    "twitterShareUrl",
    "pinterestShareUrl",
    "pinterestText",
    "fbHtml",
    "disqusIdentifier",
    "disqusUrl",
  ];
  function Pe(e) {
    return "href" === e
      ? "src"
      : (e = (e =
          (e = e.replace("data-", "")).charAt(0).toLowerCase() +
          e.slice(1)).replace(/-([a-z])/g, function (e) {
          return e[1].toUpperCase();
        }));
  }
  var Oe = function (e, t, i, s) {
      void 0 === i && (i = 0);
      var n = Le(e).attr("data-lg-size") || s;
      if (n) {
        var r = n.split(",");
        if (r[1])
          for (var o = window.innerWidth, a = 0; a < r.length; a++) {
            var l = r[a];
            if (parseInt(l.split("-")[2], 10) > o) {
              n = l;
              break;
            }
            a === r.length - 1 && (n = l);
          }
        var d = n.split("-"),
          c = parseInt(d[0], 10),
          p = parseInt(d[1], 10),
          h = t.width(),
          u = t.height() - i,
          g = Math.min(h, c),
          m = Math.min(u, p),
          f = Math.min(g / c, m / p);
        return { width: c * f, height: p * f };
      }
    },
    ke = function (e, t, i, s, n) {
      if (n) {
        var r = Le(e).find("img").first();
        if (r.get()) {
          var o = t.get().getBoundingClientRect(),
            a = o.width,
            l = t.height() - (i + s),
            d = r.width(),
            c = r.height(),
            p = r.style(),
            h =
              (a - d) / 2 -
              r.offset().left +
              (parseFloat(p.paddingLeft) || 0) +
              (parseFloat(p.borderLeft) || 0) +
              Le(window).scrollLeft() +
              o.left,
            u =
              (l - c) / 2 -
              r.offset().top +
              (parseFloat(p.paddingTop) || 0) +
              (parseFloat(p.borderTop) || 0) +
              Le(window).scrollTop() +
              i;
          return (
            "translate3d(" +
            (h *= -1) +
            "px, " +
            (u *= -1) +
            "px, 0) scale3d(" +
            d / n.width +
            ", " +
            c / n.height +
            ", 1)"
          );
        }
      }
    },
    _e = function (e, t, i, s, n, r) {
      return (
        '<div class="lg-video-cont lg-has-iframe" style="width:' +
        e +
        "; max-width:" +
        i +
        "; height: " +
        t +
        "; max-height:" +
        s +
        '">\n                    <iframe class="lg-object" frameborder="0" ' +
        (r ? 'title="' + r + '"' : "") +
        ' src="' +
        n +
        '"  allowfullscreen="true"></iframe>\n                </div>'
      );
    },
    Ae = function (e, t, i, s, n, r) {
      var o =
          "<img " +
          i +
          " " +
          (s ? 'srcset="' + s + '"' : "") +
          "  " +
          (n ? 'sizes="' + n + '"' : "") +
          ' class="lg-object lg-image" data-index="' +
          e +
          '" src="' +
          t +
          '" />',
        a = "";
      r &&
        (a = ("string" == typeof r ? JSON.parse(r) : r).map(function (e) {
          var t = "";
          return (
            Object.keys(e).forEach(function (i) {
              t += " " + i + '="' + e[i] + '"';
            }),
            "<source " + t + "></source>"
          );
        }));
      return "" + a + o;
    },
    ze = function (e) {
      for (var t = [], i = [], s = "", n = 0; n < e.length; n++) {
        var r = e[n].split(" ");
        "" === r[0] && r.splice(0, 1), i.push(r[0]), t.push(r[1]);
      }
      for (var o = window.innerWidth, a = 0; a < t.length; a++)
        if (parseInt(t[a], 10) > o) {
          s = i[a];
          break;
        }
      return s;
    },
    De = function (e) {
      return !!e && !!e.complete && 0 !== e.naturalWidth;
    },
    Ge = function (e, t, i, s, n) {
      return (
        '<div class="lg-video-cont ' +
        (n && n.youtube
          ? "lg-has-youtube"
          : n && n.vimeo
          ? "lg-has-vimeo"
          : "lg-has-html5") +
        '" style="' +
        i +
        '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' +
        s +
        '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' +
        s +
        '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' +
        (t || "") +
        '\n            <img class="lg-object lg-video-poster" src="' +
        e +
        '" />\n        </div>'
      );
    },
    Be = function (e) {
      var t = e.querySelectorAll(
        'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
      );
      return [].filter.call(t, function (e) {
        var t = window.getComputedStyle(e);
        return "none" !== t.display && "hidden" !== t.visibility;
      });
    },
    Fe = function (e, t, i, s) {
      var n = [],
        r = (function () {
          for (var e = 0, t = 0, i = arguments.length; t < i; t++)
            e += arguments[t].length;
          var s = Array(e),
            n = 0;
          for (t = 0; t < i; t++)
            for (var r = arguments[t], o = 0, a = r.length; o < a; o++, n++)
              s[n] = r[o];
          return s;
        })(Me, t);
      return (
        [].forEach.call(e, function (e) {
          for (var t = {}, o = 0; o < e.attributes.length; o++) {
            var a = e.attributes[o];
            if (a.specified) {
              var l = Pe(a.name),
                d = "";
              r.indexOf(l) > -1 && (d = l), d && (t[d] = a.value);
            }
          }
          var c = Le(e),
            p = c.find("img").first().attr("alt"),
            h = c.attr("title"),
            u = s ? c.attr(s) : c.find("img").first().attr("src");
          (t.thumb = u),
            i && !t.subHtml && (t.subHtml = h || p || ""),
            (t.alt = p || h || ""),
            n.push(t);
        }),
        n
      );
    },
    Ve = function () {
      return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    },
    He = function (e, t, i) {
      if (!e)
        return t
          ? { html5: !0 }
          : void console.error(
              "lightGallery :- data-src is not provided on slide item " +
                (i + 1) +
                ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/"
            );
      var s = e.match(
          /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i
        ),
        n = e.match(
          /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i
        ),
        r = e.match(
          /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/
        );
      return s ? { youtube: s } : n ? { vimeo: n } : r ? { wistia: r } : void 0;
    },
    $e = 0,
    Ne = (function () {
      function e(e, t) {
        if (
          ((this.lgOpened = !1),
          (this.index = 0),
          (this.plugins = []),
          (this.lGalleryOn = !1),
          (this.lgBusy = !1),
          (this.currentItemsInDom = []),
          (this.prevScrollTop = 0),
          (this.bodyPaddingRight = 0),
          (this.isDummyImageRemoved = !1),
          (this.dragOrSwipeEnabled = !1),
          (this.mediaContainerPosition = { top: 0, bottom: 0 }),
          !e)
        )
          return this;
        if (
          ($e++,
          (this.lgId = $e),
          (this.el = e),
          (this.LGel = Le(e)),
          this.generateSettings(t),
          this.buildModules(),
          this.settings.dynamic &&
            void 0 !== this.settings.dynamicEl &&
            !Array.isArray(this.settings.dynamicEl))
        )
          throw "When using dynamic mode, you must also define dynamicEl as an Array.";
        return (
          (this.galleryItems = this.getItems()),
          this.normalizeSettings(),
          this.init(),
          this.validateLicense(),
          this
        );
      }
      return (
        (e.prototype.generateSettings = function (e) {
          if (
            ((this.settings = re(re({}, Ee), e)),
            this.settings.isMobile &&
            "function" == typeof this.settings.isMobile
              ? this.settings.isMobile()
              : Ve())
          ) {
            var t = re(
              re({}, this.settings.mobileSettings),
              this.settings.mobileSettings
            );
            this.settings = re(re({}, this.settings), t);
          }
        }),
        (e.prototype.normalizeSettings = function () {
          this.settings.slideEndAnimation &&
            (this.settings.hideControlOnEnd = !1),
            this.settings.closable || (this.settings.swipeToClose = !1),
            (this.zoomFromOrigin = this.settings.zoomFromOrigin),
            this.settings.dynamic && (this.zoomFromOrigin = !1),
            this.settings.container ||
              (this.settings.container = document.body),
            (this.settings.preload = Math.min(
              this.settings.preload,
              this.galleryItems.length
            ));
        }),
        (e.prototype.init = function () {
          var e = this;
          this.addSlideVideoInfo(this.galleryItems),
            this.buildStructure(),
            this.LGel.trigger(ae, { instance: this }),
            this.settings.keyPress && this.keyPress(),
            setTimeout(function () {
              e.enableDrag(), e.enableSwipe(), e.triggerPosterClick();
            }, 50),
            this.arrow(),
            this.settings.mousewheel && this.mousewheel(),
            this.settings.dynamic || this.openGalleryOnItemClick();
        }),
        (e.prototype.openGalleryOnItemClick = function () {
          for (
            var e = this,
              t = function (t) {
                var s = i.items[t],
                  n = Le(s),
                  r = Ie.generateUUID();
                n.attr("data-lg-id", r).on(
                  "click.lgcustom-item-" + r,
                  function (i) {
                    i.preventDefault();
                    var n = e.settings.index || t;
                    e.openGallery(n, s);
                  }
                );
              },
              i = this,
              s = 0;
            s < this.items.length;
            s++
          )
            t(s);
        }),
        (e.prototype.buildModules = function () {
          var e = this;
          this.settings.plugins.forEach(function (t) {
            e.plugins.push(new t(e, Le));
          });
        }),
        (e.prototype.validateLicense = function () {
          this.settings.licenseKey
            ? "0000-0000-000-0000" === this.settings.licenseKey &&
              console.warn(
                "lightGallery: " +
                  this.settings.licenseKey +
                  " license key is not valid for production use"
              )
            : console.error("Please provide a valid license key");
        }),
        (e.prototype.getSlideItem = function (e) {
          return Le(this.getSlideItemId(e));
        }),
        (e.prototype.getSlideItemId = function (e) {
          return "#lg-item-" + this.lgId + "-" + e;
        }),
        (e.prototype.getIdName = function (e) {
          return e + "-" + this.lgId;
        }),
        (e.prototype.getElementById = function (e) {
          return Le("#" + this.getIdName(e));
        }),
        (e.prototype.manageSingleSlideClassName = function () {
          this.galleryItems.length < 2
            ? this.outer.addClass("lg-single-item")
            : this.outer.removeClass("lg-single-item");
        }),
        (e.prototype.buildStructure = function () {
          var e = this;
          if (!(this.$container && this.$container.get())) {
            var t = "",
              i = "";
            this.settings.controls &&
              (t =
                '<button type="button" id="' +
                this.getIdName("lg-prev") +
                '" aria-label="' +
                this.settings.strings.previousSlide +
                '" class="lg-prev lg-icon"> ' +
                this.settings.prevHtml +
                ' </button>\n                <button type="button" id="' +
                this.getIdName("lg-next") +
                '" aria-label="' +
                this.settings.strings.nextSlide +
                '" class="lg-next lg-icon"> ' +
                this.settings.nextHtml +
                " </button>"),
              ".lg-item" !== this.settings.appendSubHtmlTo &&
                (i =
                  '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
            var s = "";
            this.settings.allowMediaOverlap && (s += "lg-media-overlap ");
            var n = this.settings.ariaLabelledby
                ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
                : "",
              r = this.settings.ariaDescribedby
                ? 'aria-describedby="' + this.settings.ariaDescribedby + '"'
                : "",
              o =
                "lg-container " +
                this.settings.addClass +
                " " +
                (document.body !== this.settings.container ? "lg-inline" : ""),
              a =
                this.settings.closable && this.settings.showCloseIcon
                  ? '<button type="button" aria-label="' +
                    this.settings.strings.closeGallery +
                    '" id="' +
                    this.getIdName("lg-close") +
                    '" class="lg-close lg-icon"></button>'
                  : "",
              l = this.settings.showMaximizeIcon
                ? '<button type="button" aria-label="' +
                  this.settings.strings.toggleMaximize +
                  '" id="' +
                  this.getIdName("lg-maximize") +
                  '" class="lg-maximize lg-icon"></button>'
                : "",
              d =
                '\n        <div class="' +
                o +
                '" id="' +
                this.getIdName("lg-container") +
                '" tabindex="-1" aria-modal="true" ' +
                n +
                " " +
                r +
                ' role="dialog"\n        >\n            <div id="' +
                this.getIdName("lg-backdrop") +
                '" class="lg-backdrop"></div>\n\n            <div id="' +
                this.getIdName("lg-outer") +
                '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' +
                s +
                ' ">\n\n              <div id="' +
                this.getIdName("lg-content") +
                '" class="lg-content">\n                <div id="' +
                this.getIdName("lg-inner") +
                '" class="lg-inner">\n                </div>\n                ' +
                t +
                '\n              </div>\n                <div id="' +
                this.getIdName("lg-toolbar") +
                '" class="lg-toolbar lg-group">\n                    ' +
                l +
                "\n                    " +
                a +
                "\n                    </div>\n                    " +
                (".lg-outer" === this.settings.appendSubHtmlTo ? i : "") +
                '\n                <div id="' +
                this.getIdName("lg-components") +
                '" class="lg-components">\n                    ' +
                (".lg-sub-html" === this.settings.appendSubHtmlTo ? i : "") +
                "\n                </div>\n            </div>\n        </div>\n        ";
            Le(this.settings.container).append(d),
              document.body !== this.settings.container &&
                Le(this.settings.container).css("position", "relative"),
              (this.outer = this.getElementById("lg-outer")),
              (this.$lgComponents = this.getElementById("lg-components")),
              (this.$backdrop = this.getElementById("lg-backdrop")),
              (this.$container = this.getElementById("lg-container")),
              (this.$inner = this.getElementById("lg-inner")),
              (this.$content = this.getElementById("lg-content")),
              (this.$toolbar = this.getElementById("lg-toolbar")),
              this.$backdrop.css(
                "transition-duration",
                this.settings.backdropDuration + "ms"
              );
            var c = this.settings.mode + " ";
            this.manageSingleSlideClassName(),
              this.settings.enableDrag && (c += "lg-grab "),
              this.outer.addClass(c),
              this.$inner.css(
                "transition-timing-function",
                this.settings.easing
              ),
              this.$inner.css(
                "transition-duration",
                this.settings.speed + "ms"
              ),
              this.settings.download &&
                this.$toolbar.append(
                  '<a id="' +
                    this.getIdName("lg-download") +
                    '" target="_blank" rel="noopener" aria-label="' +
                    this.settings.strings.download +
                    '" download class="lg-download lg-icon"></a>'
                ),
              this.counter(),
              Le(window).on(
                "resize.lg.global" +
                  this.lgId +
                  " orientationchange.lg.global" +
                  this.lgId,
                function () {
                  e.refreshOnResize();
                }
              ),
              this.hideBars(),
              this.manageCloseGallery(),
              this.toggleMaximize(),
              this.initModules();
          }
        }),
        (e.prototype.refreshOnResize = function () {
          if (this.lgOpened) {
            var e = this.galleryItems[this.index].__slideVideoInfo;
            this.mediaContainerPosition = this.getMediaContainerPosition();
            var t = this.mediaContainerPosition,
              i = t.top,
              s = t.bottom;
            if (
              ((this.currentImageSize = Oe(
                this.items[this.index],
                this.outer,
                i + s,
                e && this.settings.videoMaxSize
              )),
              e && this.resizeVideoSlide(this.index, this.currentImageSize),
              this.zoomFromOrigin && !this.isDummyImageRemoved)
            ) {
              var n = this.getDummyImgStyles(this.currentImageSize);
              this.outer
                .find(".lg-current .lg-dummy-img")
                .first()
                .attr("style", n);
            }
            this.LGel.trigger(de);
          }
        }),
        (e.prototype.resizeVideoSlide = function (e, t) {
          var i = this.getVideoContStyle(t);
          this.getSlideItem(e).find(".lg-video-cont").attr("style", i);
        }),
        (e.prototype.updateSlides = function (e, t) {
          if (
            (this.index > e.length - 1 && (this.index = e.length - 1),
            1 === e.length && (this.index = 0),
            e.length)
          ) {
            var i = this.galleryItems[t].src;
            (this.galleryItems = e),
              this.updateControls(),
              this.$inner.empty(),
              (this.currentItemsInDom = []);
            var s = 0;
            this.galleryItems.some(function (e, t) {
              return e.src === i && ((s = t), !0);
            }),
              (this.currentItemsInDom = this.organizeSlideItems(s, -1)),
              this.loadContent(s, !0),
              this.getSlideItem(s).addClass("lg-current"),
              (this.index = s),
              this.updateCurrentCounter(s),
              this.LGel.trigger(ce);
          } else this.closeGallery();
        }),
        (e.prototype.getItems = function () {
          if (((this.items = []), this.settings.dynamic))
            return this.settings.dynamicEl || [];
          if ("this" === this.settings.selector) this.items.push(this.el);
          else if (this.settings.selector)
            if ("string" == typeof this.settings.selector)
              if (this.settings.selectWithin) {
                var e = Le(this.settings.selectWithin);
                this.items = e.find(this.settings.selector).get();
              } else
                this.items = this.el.querySelectorAll(this.settings.selector);
            else this.items = this.settings.selector;
          else this.items = this.el.children;
          return Fe(
            this.items,
            this.settings.extraProps,
            this.settings.getCaptionFromTitleOrAlt,
            this.settings.exThumbImage
          );
        }),
        (e.prototype.shouldHideScrollbar = function () {
          return (
            this.settings.hideScrollbar &&
            document.body === this.settings.container
          );
        }),
        (e.prototype.hideScrollbar = function () {
          if (this.shouldHideScrollbar()) {
            this.bodyPaddingRight = parseFloat(Le("body").style().paddingRight);
            var e = document.documentElement.getBoundingClientRect(),
              t = window.innerWidth - e.width;
            Le(document.body).css(
              "padding-right",
              t + this.bodyPaddingRight + "px"
            ),
              Le(document.body).addClass("lg-overlay-open");
          }
        }),
        (e.prototype.resetScrollBar = function () {
          this.shouldHideScrollbar() &&
            (Le(document.body).css(
              "padding-right",
              this.bodyPaddingRight + "px"
            ),
            Le(document.body).removeClass("lg-overlay-open"));
        }),
        (e.prototype.openGallery = function (e, t) {
          var i = this;
          if ((void 0 === e && (e = this.settings.index), !this.lgOpened)) {
            (this.lgOpened = !0),
              this.outer.removeClass("lg-hide-items"),
              this.hideScrollbar(),
              this.$container.addClass("lg-show");
            var s = this.getItemsToBeInsertedToDom(e, e);
            this.currentItemsInDom = s;
            var n = "";
            s.forEach(function (e) {
              n = n + '<div id="' + e + '" class="lg-item"></div>';
            }),
              this.$inner.append(n),
              this.addHtml(e);
            var r = "";
            this.mediaContainerPosition = this.getMediaContainerPosition();
            var o = this.mediaContainerPosition,
              a = o.top,
              l = o.bottom;
            this.settings.allowMediaOverlap ||
              this.setMediaContainerPosition(a, l);
            var d = this.galleryItems[e].__slideVideoInfo;
            this.zoomFromOrigin &&
              t &&
              ((this.currentImageSize = Oe(
                t,
                this.outer,
                a + l,
                d && this.settings.videoMaxSize
              )),
              (r = ke(t, this.outer, a, l, this.currentImageSize))),
              (this.zoomFromOrigin && r) ||
                (this.outer.addClass(this.settings.startClass),
                this.getSlideItem(e).removeClass("lg-complete"));
            var c = this.settings.zoomFromOrigin
              ? 100
              : this.settings.backdropDuration;
            setTimeout(function () {
              i.outer.addClass("lg-components-open");
            }, c),
              (this.index = e),
              this.LGel.trigger(he),
              this.getSlideItem(e).addClass("lg-current"),
              (this.lGalleryOn = !1),
              (this.prevScrollTop = Le(window).scrollTop()),
              setTimeout(function () {
                if (i.zoomFromOrigin && r) {
                  var t = i.getSlideItem(e);
                  t.css("transform", r),
                    setTimeout(function () {
                      t
                        .addClass("lg-start-progress lg-start-end-progress")
                        .css(
                          "transition-duration",
                          i.settings.startAnimationDuration + "ms"
                        ),
                        i.outer.addClass("lg-zoom-from-image");
                    }),
                    setTimeout(function () {
                      t.css("transform", "translate3d(0, 0, 0)");
                    }, 100);
                }
                setTimeout(function () {
                  i.$backdrop.addClass("in"),
                    i.$container.addClass("lg-show-in");
                }, 10),
                  setTimeout(function () {
                    i.settings.trapFocus &&
                      document.body === i.settings.container &&
                      i.trapFocus();
                  }, i.settings.backdropDuration + 50),
                  (i.zoomFromOrigin && r) ||
                    setTimeout(function () {
                      i.outer.addClass("lg-visible");
                    }, i.settings.backdropDuration),
                  i.slide(e, !1, !1, !1),
                  i.LGel.trigger(ue);
              }),
              document.body === this.settings.container &&
                Le("html").addClass("lg-on");
          }
        }),
        (e.prototype.getMediaContainerPosition = function () {
          if (this.settings.allowMediaOverlap) return { top: 0, bottom: 0 };
          var e = this.$toolbar.get().clientHeight || 0,
            t = this.outer.find(".lg-components .lg-sub-html").get(),
            i =
              this.settings.defaultCaptionHeight || (t && t.clientHeight) || 0,
            s = this.outer.find(".lg-thumb-outer").get();
          return { top: e, bottom: (s ? s.clientHeight : 0) + i };
        }),
        (e.prototype.setMediaContainerPosition = function (e, t) {
          void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            this.$content.css("top", e + "px").css("bottom", t + "px");
        }),
        (e.prototype.hideBars = function () {
          var e = this;
          setTimeout(function () {
            e.outer.removeClass("lg-hide-items"),
              e.settings.hideBarsDelay > 0 &&
                (e.outer.on("mousemove.lg click.lg touchstart.lg", function () {
                  e.outer.removeClass("lg-hide-items"),
                    clearTimeout(e.hideBarTimeout),
                    (e.hideBarTimeout = setTimeout(function () {
                      e.outer.addClass("lg-hide-items");
                    }, e.settings.hideBarsDelay));
                }),
                e.outer.trigger("mousemove.lg"));
          }, this.settings.showBarsAfter);
        }),
        (e.prototype.initPictureFill = function (e) {
          if (this.settings.supportLegacyBrowser)
            try {
              picturefill({ elements: [e.get()] });
            } catch (e) {
              console.warn(
                "lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document."
              );
            }
        }),
        (e.prototype.counter = function () {
          if (this.settings.counter) {
            var e =
              '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' +
              this.getIdName("lg-counter-current") +
              '" class="lg-counter-current">' +
              (this.index + 1) +
              ' </span> /\n                <span id="' +
              this.getIdName("lg-counter-all") +
              '" class="lg-counter-all">' +
              this.galleryItems.length +
              " </span></div>";
            this.outer.find(this.settings.appendCounterTo).append(e);
          }
        }),
        (e.prototype.addHtml = function (e) {
          var t, i;
          if (
            (this.galleryItems[e].subHtmlUrl
              ? (i = this.galleryItems[e].subHtmlUrl)
              : (t = this.galleryItems[e].subHtml),
            !i)
          )
            if (t) {
              var s = t.substring(0, 1);
              ("." !== s && "#" !== s) ||
                (t =
                  this.settings.subHtmlSelectorRelative &&
                  !this.settings.dynamic
                    ? Le(this.items).eq(e).find(t).first().html()
                    : Le(t).first().html());
            } else t = "";
          if (".lg-item" !== this.settings.appendSubHtmlTo)
            i
              ? this.outer.find(".lg-sub-html").load(i)
              : this.outer.find(".lg-sub-html").html(t);
          else {
            var n = Le(this.getSlideItemId(e));
            i
              ? n.load(i)
              : n.append('<div class="lg-sub-html">' + t + "</div>");
          }
          null != t &&
            ("" === t
              ? this.outer
                  .find(this.settings.appendSubHtmlTo)
                  .addClass("lg-empty-html")
              : this.outer
                  .find(this.settings.appendSubHtmlTo)
                  .removeClass("lg-empty-html")),
            this.LGel.trigger(pe, { index: e });
        }),
        (e.prototype.preload = function (e) {
          for (
            var t = 1;
            t <= this.settings.preload && !(t >= this.galleryItems.length - e);
            t++
          )
            this.loadContent(e + t, !1);
          for (var i = 1; i <= this.settings.preload && !(e - i < 0); i++)
            this.loadContent(e - i, !1);
        }),
        (e.prototype.getDummyImgStyles = function (e) {
          return e
            ? "width:" +
                e.width +
                "px;\n                margin-left: -" +
                e.width / 2 +
                "px;\n                margin-top: -" +
                e.height / 2 +
                "px;\n                height:" +
                e.height +
                "px"
            : "";
        }),
        (e.prototype.getVideoContStyle = function (e) {
          return e
            ? "width:" +
                e.width +
                "px;\n                height:" +
                e.height +
                "px"
            : "";
        }),
        (e.prototype.getDummyImageContent = function (e, t, i) {
          var s;
          if ((this.settings.dynamic || (s = Le(this.items).eq(t)), s)) {
            var n = void 0;
            if (
              !(n = this.settings.exThumbImage
                ? s.attr(this.settings.exThumbImage)
                : s.find("img").first().attr("src"))
            )
              return "";
            var r =
              "<img " +
              i +
              ' style="' +
              this.getDummyImgStyles(this.currentImageSize) +
              '" class="lg-dummy-img" src="' +
              n +
              '" />';
            return (
              e.addClass("lg-first-slide"),
              this.outer.addClass("lg-first-slide-loading"),
              r
            );
          }
          return "";
        }),
        (e.prototype.setImgMarkup = function (e, t, i) {
          var s = this.galleryItems[i],
            n = s.alt,
            r = s.srcset,
            o = s.sizes,
            a = s.sources,
            l = n ? 'alt="' + n + '"' : "",
            d =
              '<picture class="lg-img-wrap"> ' +
              (this.isFirstSlideWithZoomAnimation()
                ? this.getDummyImageContent(t, i, l)
                : Ae(i, e, l, r, o, a)) +
              "</picture>";
          t.prepend(d);
        }),
        (e.prototype.onSlideObjectLoad = function (e, t, i, s) {
          var n = e.find(".lg-object").first();
          De(n.get()) || t
            ? i()
            : (n.on("load.lg error.lg", function () {
                i && i();
              }),
              n.on("error.lg", function () {
                s && s();
              }));
        }),
        (e.prototype.onLgObjectLoad = function (e, t, i, s, n, r) {
          var o = this;
          this.onSlideObjectLoad(
            e,
            r,
            function () {
              o.triggerSlideItemLoad(e, t, i, s, n);
            },
            function () {
              e.addClass("lg-complete lg-complete_"),
                e.html(
                  '<span class="lg-error-msg">Oops... Failed to load content...</span>'
                );
            }
          );
        }),
        (e.prototype.triggerSlideItemLoad = function (e, t, i, s, n) {
          var r = this,
            o = this.galleryItems[t],
            a = n && "video" === this.getSlideType(o) && !o.poster ? s : 0;
          setTimeout(function () {
            e.addClass("lg-complete lg-complete_"),
              r.LGel.trigger(ge, { index: t, delay: i || 0, isFirstSlide: n });
          }, a);
        }),
        (e.prototype.isFirstSlideWithZoomAnimation = function () {
          return !(
            this.lGalleryOn ||
            !this.zoomFromOrigin ||
            !this.currentImageSize
          );
        }),
        (e.prototype.addSlideVideoInfo = function (e) {
          var t = this;
          e.forEach(function (e, i) {
            (e.__slideVideoInfo = He(e.src, !!e.video, i)),
              e.__slideVideoInfo &&
                t.settings.loadYouTubePoster &&
                !e.poster &&
                e.__slideVideoInfo.youtube &&
                (e.poster =
                  "//img.youtube.com/vi/" +
                  e.__slideVideoInfo.youtube[1] +
                  "/maxresdefault.jpg");
          });
        }),
        (e.prototype.loadContent = function (e, t) {
          var i = this,
            s = this.galleryItems[e],
            n = Le(this.getSlideItemId(e)),
            r = s.poster,
            o = s.srcset,
            a = s.sizes,
            l = s.sources,
            d = s.src,
            c = s.video,
            p = c && "string" == typeof c ? JSON.parse(c) : c;
          if (s.responsive) {
            var h = s.responsive.split(",");
            d = ze(h) || d;
          }
          var u = s.__slideVideoInfo,
            g = "",
            m = !!s.iframe,
            f = !this.lGalleryOn,
            v = 0;
          if (
            (f &&
              (v =
                this.zoomFromOrigin && this.currentImageSize
                  ? this.settings.startAnimationDuration + 10
                  : this.settings.backdropDuration + 10),
            !n.hasClass("lg-loaded"))
          ) {
            if (u) {
              var y = this.mediaContainerPosition,
                w = y.top,
                b = y.bottom,
                S = Oe(
                  this.items[e],
                  this.outer,
                  w + b,
                  u && this.settings.videoMaxSize
                );
              g = this.getVideoContStyle(S);
            }
            if (m) {
              var x = _e(
                this.settings.iframeWidth,
                this.settings.iframeHeight,
                this.settings.iframeMaxWidth,
                this.settings.iframeMaxHeight,
                d,
                s.iframeTitle
              );
              n.prepend(x);
            } else if (r) {
              var T = "";
              f &&
                this.zoomFromOrigin &&
                this.currentImageSize &&
                (T = this.getDummyImageContent(n, e, ""));
              x = Ge(r, T || "", g, this.settings.strings.playVideo, u);
              n.prepend(x);
            } else if (u) {
              x = '<div class="lg-video-cont " style="' + g + '"></div>';
              n.prepend(x);
            } else if ((this.setImgMarkup(d, n, e), o || l)) {
              var C = n.find(".lg-object");
              this.initPictureFill(C);
            }
            (r || u) &&
              this.LGel.trigger(le, {
                index: e,
                src: d,
                html5Video: p,
                hasPoster: !!r,
              }),
              this.LGel.trigger(oe, { index: e }),
              this.lGalleryOn &&
                ".lg-item" === this.settings.appendSubHtmlTo &&
                this.addHtml(e);
          }
          var E = 0;
          v && !Le(document.body).hasClass("lg-from-hash") && (E = v),
            this.isFirstSlideWithZoomAnimation() &&
              (setTimeout(function () {
                n.removeClass(
                  "lg-start-end-progress lg-start-progress"
                ).removeAttr("style");
              }, this.settings.startAnimationDuration + 100),
              n.hasClass("lg-loaded") ||
                setTimeout(function () {
                  if ("image" === i.getSlideType(s)) {
                    var t = s.alt,
                      c = t ? 'alt="' + t + '"' : "";
                    if (
                      (n
                        .find(".lg-img-wrap")
                        .append(Ae(e, d, c, o, a, s.sources)),
                      o || l)
                    ) {
                      var p = n.find(".lg-object");
                      i.initPictureFill(p);
                    }
                  }
                  ("image" === i.getSlideType(s) ||
                    ("video" === i.getSlideType(s) && r)) &&
                    (i.onLgObjectLoad(n, e, v, E, !0, !1),
                    i.onSlideObjectLoad(
                      n,
                      !(!u || !u.html5 || r),
                      function () {
                        i.loadContentOnFirstSlideLoad(e, n, E);
                      },
                      function () {
                        i.loadContentOnFirstSlideLoad(e, n, E);
                      }
                    ));
                }, this.settings.startAnimationDuration + 100)),
            n.addClass("lg-loaded"),
            (this.isFirstSlideWithZoomAnimation() &&
              ("video" !== this.getSlideType(s) || r)) ||
              this.onLgObjectLoad(n, e, v, E, f, !(!u || !u.html5 || r)),
            (this.zoomFromOrigin && this.currentImageSize) ||
              !n.hasClass("lg-complete_") ||
              this.lGalleryOn ||
              setTimeout(function () {
                n.addClass("lg-complete");
              }, this.settings.backdropDuration),
            (this.lGalleryOn = !0),
            !0 === t &&
              (n.hasClass("lg-complete_")
                ? this.preload(e)
                : n
                    .find(".lg-object")
                    .first()
                    .on("load.lg error.lg", function () {
                      i.preload(e);
                    }));
        }),
        (e.prototype.loadContentOnFirstSlideLoad = function (e, t, i) {
          var s = this;
          setTimeout(function () {
            t.find(".lg-dummy-img").remove(),
              t.removeClass("lg-first-slide"),
              s.outer.removeClass("lg-first-slide-loading"),
              (s.isDummyImageRemoved = !0),
              s.preload(e);
          }, i + 300);
        }),
        (e.prototype.getItemsToBeInsertedToDom = function (e, t, i) {
          var s = this;
          void 0 === i && (i = 0);
          var n = [],
            r = Math.max(i, 3);
          r = Math.min(r, this.galleryItems.length);
          var o = "lg-item-" + this.lgId + "-" + t;
          if (this.galleryItems.length <= 3)
            return (
              this.galleryItems.forEach(function (e, t) {
                n.push("lg-item-" + s.lgId + "-" + t);
              }),
              n
            );
          if (e < (this.galleryItems.length - 1) / 2) {
            for (var a = e; a > e - r / 2 && a >= 0; a--)
              n.push("lg-item-" + this.lgId + "-" + a);
            var l = n.length;
            for (a = 0; a < r - l; a++)
              n.push("lg-item-" + this.lgId + "-" + (e + a + 1));
          } else {
            for (a = e; a <= this.galleryItems.length - 1 && a < e + r / 2; a++)
              n.push("lg-item-" + this.lgId + "-" + a);
            for (l = n.length, a = 0; a < r - l; a++)
              n.push("lg-item-" + this.lgId + "-" + (e - a - 1));
          }
          return (
            this.settings.loop &&
              (e === this.galleryItems.length - 1
                ? n.push("lg-item-" + this.lgId + "-0")
                : 0 === e &&
                  n.push(
                    "lg-item-" +
                      this.lgId +
                      "-" +
                      (this.galleryItems.length - 1)
                  )),
            -1 === n.indexOf(o) && n.push("lg-item-" + this.lgId + "-" + t),
            n
          );
        }),
        (e.prototype.organizeSlideItems = function (e, t) {
          var i = this,
            s = this.getItemsToBeInsertedToDom(
              e,
              t,
              this.settings.numberOfSlideItemsInDom
            );
          return (
            s.forEach(function (e) {
              -1 === i.currentItemsInDom.indexOf(e) &&
                i.$inner.append('<div id="' + e + '" class="lg-item"></div>');
            }),
            this.currentItemsInDom.forEach(function (e) {
              -1 === s.indexOf(e) && Le("#" + e).remove();
            }),
            s
          );
        }),
        (e.prototype.getPreviousSlideIndex = function () {
          var e = 0;
          try {
            var t = this.outer.find(".lg-current").first().attr("id");
            e = parseInt(t.split("-")[3]) || 0;
          } catch (t) {
            e = 0;
          }
          return e;
        }),
        (e.prototype.setDownloadValue = function (e) {
          if (this.settings.download) {
            var t = this.galleryItems[e];
            if (!1 === t.downloadUrl || "false" === t.downloadUrl)
              this.outer.addClass("lg-hide-download");
            else {
              var i = this.getElementById("lg-download");
              this.outer.removeClass("lg-hide-download"),
                i.attr("href", t.downloadUrl || t.src),
                t.download && i.attr("download", t.download);
            }
          }
        }),
        (e.prototype.makeSlideAnimation = function (e, t, i) {
          var s = this;
          this.lGalleryOn && i.addClass("lg-slide-progress"),
            setTimeout(
              function () {
                s.outer.addClass("lg-no-trans"),
                  s.outer
                    .find(".lg-item")
                    .removeClass("lg-prev-slide lg-next-slide"),
                  "prev" === e
                    ? (t.addClass("lg-prev-slide"), i.addClass("lg-next-slide"))
                    : (t.addClass("lg-next-slide"),
                      i.addClass("lg-prev-slide")),
                  setTimeout(function () {
                    s.outer.find(".lg-item").removeClass("lg-current"),
                      t.addClass("lg-current"),
                      s.outer.removeClass("lg-no-trans");
                  }, 50);
              },
              this.lGalleryOn ? this.settings.slideDelay : 0
            );
        }),
        (e.prototype.slide = function (e, t, i, s) {
          var n = this,
            r = this.getPreviousSlideIndex();
          if (
            ((this.currentItemsInDom = this.organizeSlideItems(e, r)),
            !this.lGalleryOn || r !== e)
          ) {
            var o = this.galleryItems.length;
            if (!this.lgBusy) {
              this.settings.counter && this.updateCurrentCounter(e);
              var a = this.getSlideItem(e),
                l = this.getSlideItem(r),
                d = this.galleryItems[e],
                c = d.__slideVideoInfo;
              if (
                (this.outer.attr("data-lg-slide-type", this.getSlideType(d)),
                this.setDownloadValue(e),
                c)
              ) {
                var p = this.mediaContainerPosition,
                  h = p.top,
                  u = p.bottom,
                  g = Oe(
                    this.items[e],
                    this.outer,
                    h + u,
                    c && this.settings.videoMaxSize
                  );
                this.resizeVideoSlide(e, g);
              }
              if (
                (this.LGel.trigger(me, {
                  prevIndex: r,
                  index: e,
                  fromTouch: !!t,
                  fromThumb: !!i,
                }),
                (this.lgBusy = !0),
                clearTimeout(this.hideBarTimeout),
                this.arrowDisable(e),
                s || (e < r ? (s = "prev") : e > r && (s = "next")),
                t)
              ) {
                this.outer
                  .find(".lg-item")
                  .removeClass("lg-prev-slide lg-current lg-next-slide");
                var m = void 0,
                  f = void 0;
                o > 2
                  ? ((m = e - 1),
                    (f = e + 1),
                    ((0 === e && r === o - 1) || (e === o - 1 && 0 === r)) &&
                      ((f = 0), (m = o - 1)))
                  : ((m = 0), (f = 1)),
                  "prev" === s
                    ? this.getSlideItem(f).addClass("lg-next-slide")
                    : this.getSlideItem(m).addClass("lg-prev-slide"),
                  a.addClass("lg-current");
              } else this.makeSlideAnimation(s, a, l);
              this.lGalleryOn
                ? setTimeout(function () {
                    n.loadContent(e, !0),
                      ".lg-item" !== n.settings.appendSubHtmlTo && n.addHtml(e);
                  }, this.settings.speed +
                    50 +
                    (t ? 0 : this.settings.slideDelay))
                : this.loadContent(e, !0),
                setTimeout(function () {
                  (n.lgBusy = !1),
                    l.removeClass("lg-slide-progress"),
                    n.LGel.trigger(fe, {
                      prevIndex: r,
                      index: e,
                      fromTouch: t,
                      fromThumb: i,
                    });
                }, (this.lGalleryOn ? this.settings.speed + 100 : 100) +
                  (t ? 0 : this.settings.slideDelay));
            }
            this.index = e;
          }
        }),
        (e.prototype.updateCurrentCounter = function (e) {
          this.getElementById("lg-counter-current").html(e + 1 + "");
        }),
        (e.prototype.updateCounterTotal = function () {
          this.getElementById("lg-counter-all").html(
            this.galleryItems.length + ""
          );
        }),
        (e.prototype.getSlideType = function (e) {
          return e.__slideVideoInfo ? "video" : e.iframe ? "iframe" : "image";
        }),
        (e.prototype.touchMove = function (e, t, i) {
          var s = t.pageX - e.pageX,
            n = t.pageY - e.pageY,
            r = !1;
          if (
            (this.swipeDirection
              ? (r = !0)
              : Math.abs(s) > 15
              ? ((this.swipeDirection = "horizontal"), (r = !0))
              : Math.abs(n) > 15 &&
                ((this.swipeDirection = "vertical"), (r = !0)),
            r)
          ) {
            var o = this.getSlideItem(this.index);
            if ("horizontal" === this.swipeDirection) {
              null == i || i.preventDefault(),
                this.outer.addClass("lg-dragging"),
                this.setTranslate(o, s, 0);
              var a = o.get().offsetWidth,
                l = (15 * a) / 100 - Math.abs((10 * s) / 100);
              this.setTranslate(
                this.outer.find(".lg-prev-slide").first(),
                -a + s - l,
                0
              ),
                this.setTranslate(
                  this.outer.find(".lg-next-slide").first(),
                  a + s + l,
                  0
                );
            } else if (
              "vertical" === this.swipeDirection &&
              this.settings.swipeToClose
            ) {
              null == i || i.preventDefault(),
                this.$container.addClass("lg-dragging-vertical");
              var d = 1 - Math.abs(n) / window.innerHeight;
              this.$backdrop.css("opacity", d);
              var c = 1 - Math.abs(n) / (2 * window.innerWidth);
              this.setTranslate(o, 0, n, c, c),
                Math.abs(n) > 100 &&
                  this.outer
                    .addClass("lg-hide-items")
                    .removeClass("lg-components-open");
            }
          }
        }),
        (e.prototype.touchEnd = function (e, t, i) {
          var s,
            n = this;
          "lg-slide" !== this.settings.mode && this.outer.addClass("lg-slide"),
            setTimeout(function () {
              n.$container.removeClass("lg-dragging-vertical"),
                n.outer
                  .removeClass("lg-dragging lg-hide-items")
                  .addClass("lg-components-open");
              var r = !0;
              if ("horizontal" === n.swipeDirection) {
                s = e.pageX - t.pageX;
                var o = Math.abs(e.pageX - t.pageX);
                s < 0 && o > n.settings.swipeThreshold
                  ? (n.goToNextSlide(!0), (r = !1))
                  : s > 0 &&
                    o > n.settings.swipeThreshold &&
                    (n.goToPrevSlide(!0), (r = !1));
              } else if ("vertical" === n.swipeDirection) {
                if (
                  ((s = Math.abs(e.pageY - t.pageY)),
                  n.settings.closable && n.settings.swipeToClose && s > 100)
                )
                  return void n.closeGallery();
                n.$backdrop.css("opacity", 1);
              }
              if (
                (n.outer.find(".lg-item").removeAttr("style"),
                r && Math.abs(e.pageX - t.pageX) < 5)
              ) {
                var a = Le(i.target);
                n.isPosterElement(a) && n.LGel.trigger(ve);
              }
              n.swipeDirection = void 0;
            }),
            setTimeout(function () {
              n.outer.hasClass("lg-dragging") ||
                "lg-slide" === n.settings.mode ||
                n.outer.removeClass("lg-slide");
            }, this.settings.speed + 100);
        }),
        (e.prototype.enableSwipe = function () {
          var e = this,
            t = {},
            i = {},
            s = !1,
            n = !1;
          this.settings.enableSwipe &&
            (this.$inner.on("touchstart.lg", function (i) {
              e.dragOrSwipeEnabled = !0;
              var s = e.getSlideItem(e.index);
              (!Le(i.target).hasClass("lg-item") &&
                !s.get().contains(i.target)) ||
                e.outer.hasClass("lg-zoomed") ||
                e.lgBusy ||
                1 !== i.touches.length ||
                ((n = !0),
                (e.touchAction = "swipe"),
                e.manageSwipeClass(),
                (t = { pageX: i.touches[0].pageX, pageY: i.touches[0].pageY }));
            }),
            this.$inner.on("touchmove.lg", function (r) {
              n &&
                "swipe" === e.touchAction &&
                1 === r.touches.length &&
                ((i = { pageX: r.touches[0].pageX, pageY: r.touches[0].pageY }),
                e.touchMove(t, i, r),
                (s = !0));
            }),
            this.$inner.on("touchend.lg", function (r) {
              if ("swipe" === e.touchAction) {
                if (s) (s = !1), e.touchEnd(i, t, r);
                else if (n) {
                  var o = Le(r.target);
                  e.isPosterElement(o) && e.LGel.trigger(ve);
                }
                (e.touchAction = void 0), (n = !1);
              }
            }));
        }),
        (e.prototype.enableDrag = function () {
          var e = this,
            t = {},
            i = {},
            s = !1,
            n = !1;
          this.settings.enableDrag &&
            (this.outer.on("mousedown.lg", function (i) {
              e.dragOrSwipeEnabled = !0;
              var n = e.getSlideItem(e.index);
              (Le(i.target).hasClass("lg-item") ||
                n.get().contains(i.target)) &&
                (e.outer.hasClass("lg-zoomed") ||
                  e.lgBusy ||
                  (i.preventDefault(),
                  e.lgBusy ||
                    (e.manageSwipeClass(),
                    (t = { pageX: i.pageX, pageY: i.pageY }),
                    (s = !0),
                    (e.outer.get().scrollLeft += 1),
                    (e.outer.get().scrollLeft -= 1),
                    e.outer.removeClass("lg-grab").addClass("lg-grabbing"),
                    e.LGel.trigger(ye))));
            }),
            Le(window).on("mousemove.lg.global" + this.lgId, function (r) {
              s &&
                e.lgOpened &&
                ((n = !0),
                (i = { pageX: r.pageX, pageY: r.pageY }),
                e.touchMove(t, i),
                e.LGel.trigger(we));
            }),
            Le(window).on("mouseup.lg.global" + this.lgId, function (r) {
              if (e.lgOpened) {
                var o = Le(r.target);
                n
                  ? ((n = !1), e.touchEnd(i, t, r), e.LGel.trigger(be))
                  : e.isPosterElement(o) && e.LGel.trigger(ve),
                  s &&
                    ((s = !1),
                    e.outer.removeClass("lg-grabbing").addClass("lg-grab"));
              }
            }));
        }),
        (e.prototype.triggerPosterClick = function () {
          var e = this;
          this.$inner.on("click.lg", function (t) {
            !e.dragOrSwipeEnabled &&
              e.isPosterElement(Le(t.target)) &&
              e.LGel.trigger(ve);
          });
        }),
        (e.prototype.manageSwipeClass = function () {
          var e = this.index + 1,
            t = this.index - 1;
          this.settings.loop &&
            this.galleryItems.length > 2 &&
            (0 === this.index
              ? (t = this.galleryItems.length - 1)
              : this.index === this.galleryItems.length - 1 && (e = 0)),
            this.outer
              .find(".lg-item")
              .removeClass("lg-next-slide lg-prev-slide"),
            t > -1 && this.getSlideItem(t).addClass("lg-prev-slide"),
            this.getSlideItem(e).addClass("lg-next-slide");
        }),
        (e.prototype.goToNextSlide = function (e) {
          var t = this,
            i = this.settings.loop;
          e && this.galleryItems.length < 3 && (i = !1),
            this.lgBusy ||
              (this.index + 1 < this.galleryItems.length
                ? (this.index++,
                  this.LGel.trigger(Se, { index: this.index }),
                  this.slide(this.index, !!e, !1, "next"))
                : i
                ? ((this.index = 0),
                  this.LGel.trigger(Se, { index: this.index }),
                  this.slide(this.index, !!e, !1, "next"))
                : this.settings.slideEndAnimation &&
                  !e &&
                  (this.outer.addClass("lg-right-end"),
                  setTimeout(function () {
                    t.outer.removeClass("lg-right-end");
                  }, 400)));
        }),
        (e.prototype.goToPrevSlide = function (e) {
          var t = this,
            i = this.settings.loop;
          e && this.galleryItems.length < 3 && (i = !1),
            this.lgBusy ||
              (this.index > 0
                ? (this.index--,
                  this.LGel.trigger(xe, { index: this.index, fromTouch: e }),
                  this.slide(this.index, !!e, !1, "prev"))
                : i
                ? ((this.index = this.galleryItems.length - 1),
                  this.LGel.trigger(xe, { index: this.index, fromTouch: e }),
                  this.slide(this.index, !!e, !1, "prev"))
                : this.settings.slideEndAnimation &&
                  !e &&
                  (this.outer.addClass("lg-left-end"),
                  setTimeout(function () {
                    t.outer.removeClass("lg-left-end");
                  }, 400)));
        }),
        (e.prototype.keyPress = function () {
          var e = this;
          Le(window).on("keydown.lg.global" + this.lgId, function (t) {
            e.lgOpened &&
              !0 === e.settings.escKey &&
              27 === t.keyCode &&
              (t.preventDefault(),
              e.settings.allowMediaOverlap &&
              e.outer.hasClass("lg-can-toggle") &&
              e.outer.hasClass("lg-components-open")
                ? e.outer.removeClass("lg-components-open")
                : e.closeGallery()),
              e.lgOpened &&
                e.galleryItems.length > 1 &&
                (37 === t.keyCode && (t.preventDefault(), e.goToPrevSlide()),
                39 === t.keyCode && (t.preventDefault(), e.goToNextSlide()));
          });
        }),
        (e.prototype.arrow = function () {
          var e = this;
          this.getElementById("lg-prev").on("click.lg", function () {
            e.goToPrevSlide();
          }),
            this.getElementById("lg-next").on("click.lg", function () {
              e.goToNextSlide();
            });
        }),
        (e.prototype.arrowDisable = function (e) {
          if (!this.settings.loop && this.settings.hideControlOnEnd) {
            var t = this.getElementById("lg-prev"),
              i = this.getElementById("lg-next");
            e + 1 === this.galleryItems.length
              ? i.attr("disabled", "disabled").addClass("disabled")
              : i.removeAttr("disabled").removeClass("disabled"),
              0 === e
                ? t.attr("disabled", "disabled").addClass("disabled")
                : t.removeAttr("disabled").removeClass("disabled");
          }
        }),
        (e.prototype.setTranslate = function (e, t, i, s, n) {
          void 0 === s && (s = 1),
            void 0 === n && (n = 1),
            e.css(
              "transform",
              "translate3d(" +
                t +
                "px, " +
                i +
                "px, 0px) scale3d(" +
                s +
                ", " +
                n +
                ", 1)"
            );
        }),
        (e.prototype.mousewheel = function () {
          var e = this,
            t = 0;
          this.outer.on("wheel.lg", function (i) {
            if (i.deltaY && !(e.galleryItems.length < 2)) {
              i.preventDefault();
              var s = new Date().getTime();
              s - t < 1e3 ||
                ((t = s),
                i.deltaY > 0
                  ? e.goToNextSlide()
                  : i.deltaY < 0 && e.goToPrevSlide());
            }
          });
        }),
        (e.prototype.isSlideElement = function (e) {
          return (
            e.hasClass("lg-outer") ||
            e.hasClass("lg-item") ||
            e.hasClass("lg-img-wrap")
          );
        }),
        (e.prototype.isPosterElement = function (e) {
          var t = this.getSlideItem(this.index)
            .find(".lg-video-play-button")
            .get();
          return (
            e.hasClass("lg-video-poster") ||
            e.hasClass("lg-video-play-button") ||
            (t && t.contains(e.get()))
          );
        }),
        (e.prototype.toggleMaximize = function () {
          var e = this;
          this.getElementById("lg-maximize").on("click.lg", function () {
            e.$container.toggleClass("lg-inline"), e.refreshOnResize();
          });
        }),
        (e.prototype.invalidateItems = function () {
          for (var e = 0; e < this.items.length; e++) {
            var t = Le(this.items[e]);
            t.off("click.lgcustom-item-" + t.attr("data-lg-id"));
          }
        }),
        (e.prototype.trapFocus = function () {
          var e = this;
          this.$container.get().focus({ preventScroll: !0 }),
            Le(window).on("keydown.lg.global" + this.lgId, function (t) {
              if (e.lgOpened && ("Tab" === t.key || 9 === t.keyCode)) {
                var i = Be(e.$container.get()),
                  s = i[0],
                  n = i[i.length - 1];
                t.shiftKey
                  ? document.activeElement === s &&
                    (n.focus(), t.preventDefault())
                  : document.activeElement === n &&
                    (s.focus(), t.preventDefault());
              }
            });
        }),
        (e.prototype.manageCloseGallery = function () {
          var e = this;
          if (this.settings.closable) {
            var t = !1;
            this.getElementById("lg-close").on("click.lg", function () {
              e.closeGallery();
            }),
              this.settings.closeOnTap &&
                (this.outer.on("mousedown.lg", function (i) {
                  var s = Le(i.target);
                  t = !!e.isSlideElement(s);
                }),
                this.outer.on("mousemove.lg", function () {
                  t = !1;
                }),
                this.outer.on("mouseup.lg", function (i) {
                  var s = Le(i.target);
                  e.isSlideElement(s) &&
                    t &&
                    (e.outer.hasClass("lg-dragging") || e.closeGallery());
                }));
          }
        }),
        (e.prototype.closeGallery = function (e) {
          var t = this;
          if (!this.lgOpened || (!this.settings.closable && !e)) return 0;
          this.LGel.trigger(Te),
            this.settings.resetScrollPosition &&
              !this.settings.hideScrollbar &&
              Le(window).scrollTop(this.prevScrollTop);
          var i,
            s = this.items[this.index];
          if (this.zoomFromOrigin && s) {
            var n = this.mediaContainerPosition,
              r = n.top,
              o = n.bottom,
              a = this.galleryItems[this.index],
              l = a.__slideVideoInfo,
              d = a.poster,
              c = Oe(
                s,
                this.outer,
                r + o,
                l && d && this.settings.videoMaxSize
              );
            i = ke(s, this.outer, r, o, c);
          }
          this.zoomFromOrigin && i
            ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
              this.getSlideItem(this.index)
                .addClass("lg-start-end-progress")
                .css(
                  "transition-duration",
                  this.settings.startAnimationDuration + "ms"
                )
                .css("transform", i))
            : (this.outer.addClass("lg-hide-items"),
              this.outer.removeClass("lg-zoom-from-image")),
            this.destroyModules(),
            (this.lGalleryOn = !1),
            (this.isDummyImageRemoved = !1),
            (this.zoomFromOrigin = this.settings.zoomFromOrigin),
            clearTimeout(this.hideBarTimeout),
            (this.hideBarTimeout = !1),
            Le("html").removeClass("lg-on"),
            this.outer.removeClass("lg-visible lg-components-open"),
            this.$backdrop.removeClass("in").css("opacity", 0);
          var p =
            this.zoomFromOrigin && i
              ? Math.max(
                  this.settings.startAnimationDuration,
                  this.settings.backdropDuration
                )
              : this.settings.backdropDuration;
          return (
            this.$container.removeClass("lg-show-in"),
            setTimeout(function () {
              t.zoomFromOrigin &&
                i &&
                t.outer.removeClass("lg-zoom-from-image"),
                t.$container.removeClass("lg-show"),
                t.resetScrollBar(),
                t.$backdrop
                  .removeAttr("style")
                  .css(
                    "transition-duration",
                    t.settings.backdropDuration + "ms"
                  ),
                t.outer.removeClass("lg-closing " + t.settings.startClass),
                t.getSlideItem(t.index).removeClass("lg-start-end-progress"),
                t.$inner.empty(),
                t.lgOpened && t.LGel.trigger(Ce, { instance: t }),
                t.$container.get() && t.$container.get().blur(),
                (t.lgOpened = !1);
            }, p + 100),
            p + 100
          );
        }),
        (e.prototype.initModules = function () {
          this.plugins.forEach(function (e) {
            try {
              e.init();
            } catch (e) {
              console.warn(
                "lightGallery:- make sure lightGallery module is properly initiated"
              );
            }
          });
        }),
        (e.prototype.destroyModules = function (e) {
          this.plugins.forEach(function (t) {
            try {
              e ? t.destroy() : t.closeGallery && t.closeGallery();
            } catch (e) {
              console.warn(
                "lightGallery:- make sure lightGallery module is properly destroyed"
              );
            }
          });
        }),
        (e.prototype.refresh = function (e) {
          this.settings.dynamic || this.invalidateItems(),
            (this.galleryItems = e || this.getItems()),
            this.updateControls(),
            this.openGalleryOnItemClick(),
            this.LGel.trigger(ce);
        }),
        (e.prototype.updateControls = function () {
          this.addSlideVideoInfo(this.galleryItems),
            this.updateCounterTotal(),
            this.manageSingleSlideClassName();
        }),
        (e.prototype.destroyGallery = function () {
          this.destroyModules(!0),
            this.settings.dynamic || this.invalidateItems(),
            Le(window).off(".lg.global" + this.lgId),
            this.LGel.off(".lg"),
            this.$container.remove();
        }),
        (e.prototype.destroy = function () {
          var e = this.closeGallery(!0);
          return (
            e
              ? setTimeout(this.destroyGallery.bind(this), e)
              : this.destroyGallery(),
            e
          );
        }),
        e
      );
    })();
  const We = function (e, t) {
      return new Ne(e, t);
    },
    je = document.querySelectorAll("[data-gallery]");
  if (je.length) {
    let qe = [];
    je.forEach((e) => {
      qe.push({
        gallery: e,
        galleryClass: We(e, {
          selector: ".gallery__link",
          licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
          download: !1,
          speed: 500,
        }),
      });
    }),
      (e.gallery = qe);
  }
  function Re(e) {
    this.type = e;
  }
  (Re.prototype.init = function () {
    const e = this;
    (this.оbjects = []),
      (this.daClassname = "_dynamic_adapt_"),
      (this.nodes = document.querySelectorAll("[data-da]"));
    for (let e = 0; e < this.nodes.length; e++) {
      const t = this.nodes[e],
        i = t.dataset.da.trim().split(","),
        s = {};
      (s.element = t),
        (s.parent = t.parentNode),
        (s.destination = document.querySelector(i[0].trim())),
        (s.breakpoint = i[1] ? i[1].trim() : "767"),
        (s.place = i[2] ? i[2].trim() : "last"),
        (s.index = this.indexInParent(s.parent, s.element)),
        this.оbjects.push(s);
    }
    this.arraySort(this.оbjects),
      (this.mediaQueries = Array.prototype.map.call(
        this.оbjects,
        function (e) {
          return (
            "(" + this.type + "-width: " + e.breakpoint + "px)," + e.breakpoint
          );
        },
        this
      )),
      (this.mediaQueries = Array.prototype.filter.call(
        this.mediaQueries,
        function (e, t, i) {
          return Array.prototype.indexOf.call(i, e) === t;
        }
      ));
    for (let t = 0; t < this.mediaQueries.length; t++) {
      const i = this.mediaQueries[t],
        s = String.prototype.split.call(i, ","),
        n = window.matchMedia(s[0]),
        r = s[1],
        o = Array.prototype.filter.call(this.оbjects, function (e) {
          return e.breakpoint === r;
        });
      n.addListener(function () {
        e.mediaHandler(n, o);
      }),
        this.mediaHandler(n, o);
    }
  }),
    (Re.prototype.mediaHandler = function (e, t) {
      if (e.matches)
        for (let e = 0; e < t.length; e++) {
          const i = t[e];
          (i.index = this.indexInParent(i.parent, i.element)),
            this.moveTo(i.place, i.element, i.destination);
        }
      else
        for (let e = t.length - 1; e >= 0; e--) {
          const i = t[e];
          i.element.classList.contains(this.daClassname) &&
            this.moveBack(i.parent, i.element, i.index);
        }
    }),
    (Re.prototype.moveTo = function (e, t, i) {
      t.classList.add(this.daClassname),
        "last" === e || e >= i.children.length
          ? i.insertAdjacentElement("beforeend", t)
          : "first" !== e
          ? i.children[e].insertAdjacentElement("beforebegin", t)
          : i.insertAdjacentElement("afterbegin", t);
    }),
    (Re.prototype.moveBack = function (e, t, i) {
      t.classList.remove(this.daClassname),
        void 0 !== e.children[i]
          ? e.children[i].insertAdjacentElement("beforebegin", t)
          : e.insertAdjacentElement("beforeend", t);
    }),
    (Re.prototype.indexInParent = function (e, t) {
      const i = Array.prototype.slice.call(e.children);
      return Array.prototype.indexOf.call(i, t);
    }),
    (Re.prototype.arraySort = function (e) {
      "min" === this.type
        ? Array.prototype.sort.call(e, function (e, t) {
            return e.breakpoint === t.breakpoint
              ? e.place === t.place
                ? 0
                : "first" === e.place || "last" === t.place
                ? -1
                : "last" === e.place || "first" === t.place
                ? 1
                : e.place - t.place
              : e.breakpoint - t.breakpoint;
          })
        : Array.prototype.sort.call(e, function (e, t) {
            return e.breakpoint === t.breakpoint
              ? e.place === t.place
                ? 0
                : "first" === e.place || "last" === t.place
                ? 1
                : "last" === e.place || "first" === t.place
                ? -1
                : t.place - e.place
              : t.breakpoint - e.breakpoint;
          });
    });
  new Re("max").init();
  if (document.getElementById("map")) {
    let Ye = [55.79956456550331, 37.767582319465596];
    function Xe() {
      let e = new ymaps.Map("map", {
          center: [55.79835594059611, 37.76396046599078],
          zoom: 16,
        }),
        t = new ymaps.Placemark(
          Ye,
          {},
          { iconImageSize: [80, 80], iconImageOffset: [-40, -70] }
        );
      e.controls.remove("geolocationControl"),
        e.controls.remove("searchControl"),
        e.controls.remove("trafficControl"),
        e.controls.remove("typeSelector"),
        e.controls.remove("fullscreenControl"),
        e.geoObjects.add(t);
    }
    ymaps.ready(Xe);
  }
  (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    (function () {
      let e = document.querySelector(".icon-burger");
      e &&
        e.addEventListener("click", function (e) {
          s && document.documentElement.classList.toggle("menu-open");
        });
    })(),
    (function () {
      const e = document.querySelectorAll("[data-spollers]");
      if (e.length > 0) {
        const s = Array.from(e).filter(function (e, t, i) {
          return !e.dataset.spollers.split(",")[0];
        });
        s.length && o(s);
        let n = r(e, "spollers");
        function o(e, t = !1) {
          e.forEach((e) => {
            (e = t ? e.item : e),
              t.matches || !t
                ? (e.classList.add("_spoller-init"),
                  a(e),
                  e.addEventListener("click", l))
                : (e.classList.remove("_spoller-init"),
                  a(e, !1),
                  e.removeEventListener("click", l));
          });
        }
        function a(e, t = !0) {
          let i = e.querySelectorAll("[data-spoller]");
          i.length &&
            ((i = Array.from(i).filter(
              (t) => t.closest("[data-spollers]") === e
            )),
            i.forEach((e) => {
              t
                ? (e.removeAttribute("tabindex"),
                  e.classList.contains("_spoller-active") ||
                    (e.nextElementSibling.hidden = !0))
                : (e.setAttribute("tabindex", "-1"),
                  (e.nextElementSibling.hidden = !1));
            }));
        }
        function l(e) {
          const s = e.target;
          if (s.closest("[data-spoller]")) {
            const n = s.closest("[data-spoller]"),
              r = n.closest("[data-spollers]"),
              o = !!r.hasAttribute("data-one-spoller");
            r.querySelectorAll("._slide").length ||
              (o && !n.classList.contains("_spoller-active") && d(r),
              n.classList.toggle("_spoller-active"),
              ((e, s = 500) => {
                e.hidden ? i(e, s) : t(e, s);
              })(n.nextElementSibling, 500)),
              e.preventDefault();
          }
        }
        function d(e) {
          const i = e.querySelector("[data-spoller]._spoller-active");
          i &&
            (i.classList.remove("_spoller-active"),
            t(i.nextElementSibling, 500));
        }
        n &&
          n.length &&
          n.forEach((e) => {
            e.matchMedia.addEventListener("change", function () {
              o(e.itemsArray, e.matchMedia);
            }),
              o(e.itemsArray, e.matchMedia);
          });
      }
    })(),
    (function () {
      ne = !0;
      const e = document.querySelector(".header-top"),
        t = e.hasAttribute("data-scroll-show"),
        i = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
        s = e.dataset.scroll ? e.dataset.scroll : 1;
      let n,
        r = 0;
      document.addEventListener("windowScroll", function (o) {
        const a = window.scrollY;
        clearTimeout(n),
          a >= s
            ? (!e.classList.contains("_header-scroll") &&
                e.classList.add("_header-scroll"),
              t &&
                (a > r
                  ? e.classList.contains("_header-show") &&
                    e.classList.remove("_header-show")
                  : !e.classList.contains("_header-show") &&
                    e.classList.add("_header-show"),
                (n = setTimeout(() => {
                  !e.classList.contains("_header-show") &&
                    e.classList.add("_header-show");
                }, i))))
            : (e.classList.contains("_header-scroll") &&
                e.classList.remove("_header-scroll"),
              t &&
                e.classList.contains("_header-show") &&
                e.classList.remove("_header-show")),
          (r = a <= 0 ? 0 : a);
      });
    })();
})();
