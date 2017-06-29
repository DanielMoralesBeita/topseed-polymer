"use strict";

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

(function() {
    function n(a, b) {
        return {
            index: a,
            i: [],
            m: b
        };
    }
    function aa(a, b, c, d) {
        var e = 0, h = 0, g = 0, f = 0, k = Math.min(b - e, d - h);
        if (0 == e && 0 == h) a: {
            for (g = 0; g < k; g++) if (a[g] !== c[g]) break a;
            g = k;
        }
        if (b == a.length && d == c.length) {
            for (var f = a.length, l = c.length, m = 0; m < k - g && ba(a[--f], c[--l]); ) m++;
            f = m;
        }
        if (e += g, h += g, b -= f, d -= f, !(b - e || d - h)) return [];
        if (e == b) {
            for (b = n(e, 0); h < d; ) b.i.push(c[h++]);
            return [ b ];
        }
        if (h == d) return [ n(e, b - e) ];
        for (d = d - (g = h) + 1, f = b - (k = e) + 1, b = Array(d), l = 0; l < d; l++) b[l] = Array(f), 
        b[l][0] = l;
        for (l = 0; l < f; l++) b[0][l] = l;
        for (l = 1; l < d; l++) for (m = 1; m < f; m++) if (a[k + m - 1] === c[g + l - 1]) b[l][m] = b[l - 1][m - 1]; else {
            var q = b[l - 1][m] + 1, y = b[l][m - 1] + 1;
            b[l][m] = q < y ? q : y;
        }
        for (k = b.length - 1, g = b[0].length - 1, d = b[k][g], a = []; 0 < k || 0 < g; ) k ? g ? (f = b[k - 1][g - 1], 
        l = b[k - 1][g], m = b[k][g - 1], q = l < m ? l < f ? l : f : m < f ? m : f, q == f ? (f == d ? a.push(0) : (a.push(1), 
        d = f), k--, g--) : q == l ? (a.push(3), k--, d = l) : (a.push(2), g--, d = m)) : (a.push(3), 
        k--) : (a.push(2), g--);
        for (a.reverse(), b = void 0, k = [], g = 0; g < a.length; g++) switch (a[g]) {
          case 0:
            b && (k.push(b), b = void 0), e++, h++;
            break;

          case 1:
            b || (b = n(e, 0)), b.m++, e++, b.i.push(c[h]), h++;
            break;

          case 2:
            b || (b = n(e, 0)), b.m++, e++;
            break;

          case 3:
            b || (b = n(e, 0)), b.i.push(c[h]), h++;
        }
        return b && k.push(b), k;
    }
    function ba(a, b) {
        return a === b;
    }
    function u(a) {
        return "ShadyRoot" === a.M;
    }
    function v(a) {
        if (a = a.getRootNode(), u(a)) return a;
    }
    function x(a, b) {
        if (a && b) for (var e, c = Object.getOwnPropertyNames(b), d = 0; d < c.length && (e = c[d]); d++) {
            var h = Object.getOwnPropertyDescriptor(b, e);
            h && Object.defineProperty(a, e, h);
        }
    }
    function z(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        for (d = 0; d < c.length; d++) x(a, c[d]);
        return a;
    }
    function da(a, b) {
        for (var c in b) a[c] = b[c];
    }
    function fa(a) {
        B.push(a), A.textContent = ea++;
    }
    function ga(a) {
        E || (E = !0, fa(F)), D.push(a);
    }
    function F() {
        E = !1;
        for (var a = !!D.length; D.length; ) D.shift()();
        return a;
    }
    function ja(a) {
        switch (a) {
          case "&":
            return "&amp;";

          case "<":
            return "&lt;";

          case ">":
            return "&gt;";

          case '"':
            return "&quot;";

          case " ":
            return "&nbsp;";
        }
    }
    function ka(a) {
        for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0;
        return b;
    }
    function H(a, b) {
        "template" === a.localName && (a = a.content);
        for (var g, c = "", d = b ? b(a) : a.childNodes, e = 0, h = d.length; e < h && (g = d[e]); e++) {
            var f;
            a: {
                var k;
                k = a;
                var l = b;
                switch ((f = g).nodeType) {
                  case Node.ELEMENT_NODE:
                    for (var m = f.localName, q = "<" + m, y = f.attributes, r = 0; k = y[r]; r++) q += " " + k.name + '="' + k.value.replace(ha, ja) + '"';
                    q += ">", f = la[m] ? q : q + H(f, l) + "</" + m + ">";
                    break a;

                  case Node.TEXT_NODE:
                    f = f.data, f = k && ma[k.localName] ? f : f.replace(ia, ja);
                    break a;

                  case Node.COMMENT_NODE:
                    f = "<!--" + f.data + "-->";
                    break a;

                  default:
                    throw window.console.error(f), Error("not implemented");
                }
            }
            c += f;
        }
        return c;
    }
    function na(a) {
        var b = [];
        for (J.currentNode = a, a = J.firstChild(); a; ) b.push(a), a = J.nextSibling();
        return b;
    }
    function R(a, b, c) {
        for (var d in b) {
            var e = Object.getOwnPropertyDescriptor(a, d);
            e && e.configurable || !e && c ? Object.defineProperty(a, d, b[d]) : c && console.warn("Could not define", d, "on", a);
        }
    }
    function S(a) {
        R(a, oa), R(a, P), R(a, Q);
    }
    function sa(a, b, c) {
        qa(a), c = c || null, a.__shady = a.__shady || {}, b.__shady = b.__shady || {}, 
        c && (c.__shady = c.__shady || {}), a.__shady.previousSibling = c ? c.__shady.previousSibling : b.lastChild;
        var d = a.__shady.previousSibling;
        d && d.__shady && (d.__shady.nextSibling = a), (d = a.__shady.nextSibling = c) && d.__shady && (d.__shady.previousSibling = a), 
        a.__shady.parentNode = b, c ? c === b.__shady.firstChild && (b.__shady.firstChild = a) : (b.__shady.lastChild = a, 
        b.__shady.firstChild || (b.__shady.firstChild = a)), b.__shady.childNodes = null;
    }
    function T(a) {
        if (!a.__shady || void 0 === a.__shady.firstChild) {
            a.__shady = a.__shady || {}, a.__shady.firstChild = I.firstChild(a), a.__shady.lastChild = I.lastChild(a), 
            ra(a);
            for (var d, b = a.__shady.childNodes = I.childNodes(a), c = 0; c < b.length && (d = b[c]); c++) d.__shady = d.__shady || {}, 
            d.__shady.parentNode = a, d.__shady.nextSibling = b[c + 1] || null, d.__shady.previousSibling = b[c - 1] || null, 
            qa(d);
        }
    }
    function V(a) {
        this.root = a, this.s = "slot";
    }
    function Ha(a, b) {
        var c = a.__shady.assignedNodes;
        if (c) for (var d = 0; d < c.length; d++) {
            var e = c[d];
            b && (e.__shady.C = e.__shady.assignedSlot), e.__shady.assignedSlot === a && (e.__shady.assignedSlot = null);
        }
    }
    function Ia(a, b) {
        U.dispatchEvent.call(b, new Ea("slotchange")), b.__shady.assignedSlot && Ia(a, b.__shady.assignedSlot);
    }
    function W(a, b) {
        if (a !== Ja) throw new TypeError("Illegal constructor");
        return a = document.createDocumentFragment(), a.__proto__ = W.prototype, a.M = "ShadyRoot", 
        T(b), T(a), b.shadowRoot = a, a.host = b, a.c = !1, a.B = !1, a.b = new V(a), a.update(), 
        a;
    }
    function Ka(a) {
        if (a.c) {
            for (var b = a; a; ) {
                a.c && (b = a);
                a: {
                    var c;
                    if (c = a, a = c.host.getRootNode(), u(a)) for (var d = c.host.childNodes, e = 0; e < d.length; e++) if ((c = d[e]).localName && "slot" == c.localName) break a;
                    a = void 0;
                }
            }
            b._render();
        }
    }
    function La(a) {
        var b = a.a;
        if (b) for (var d, c = 0; c < b.length; c++) (d = b[c]).getRootNode() !== a && Ha(d);
        for (b = a.a = a.b.root.querySelectorAll("slot"), a = 0; a < b.length; a++) (d = b[a]).__shady = d.__shady || {}, 
        T(d), T(d.parentNode);
    }
    function Na(a, b) {
        var c = [];
        b = (b.__shady && b.__shady.root || b).childNodes;
        for (var d = 0; d < b.length; d++) {
            var e = b[d];
            if (e.localName && "slot" == e.localName) for (var h = e.__shady.f || (e.__shady.f = []), g = 0; g < h.length; g++) {
                var f = h[g];
                a.u(e, f) && c.push(f);
            } else c.push(e);
        }
        return c;
    }
    function Ma(a, b) {
        for (var g, c = I.childNodes(a), d = aa(b, b.length, c, c.length), e = 0, h = 0; e < d.length && (g = d[e]); e++) {
            for (var k, f = 0; f < g.i.length && (k = g.i[f]); f++) I.parentNode(k) === a && U.removeChild.call(a, k), 
            c.splice(g.index + h, 1);
            h -= g.m;
        }
        for (e = 0; e < d.length && (g = d[e]); e++) for (h = c[g.index], f = g.index; f < g.index + g.m; f++) k = b[f], 
        U.insertBefore.call(a, k, h), c.splice(f, 0, k);
    }
    function Fa(a) {
        return !(!a.a || !a.a.length);
    }
    function Ga(a) {
        return a.a || La(a), a.a;
    }
    function Pa(a) {
        var c, b = a.__shady && a.__shady.parentNode, d = v(a);
        if (b || d) {
            if (c = Qa(a), b) {
                a.__shady = a.__shady || {}, b.__shady = b.__shady || {}, a === b.__shady.firstChild && (b.__shady.firstChild = a.__shady.nextSibling), 
                a === b.__shady.lastChild && (b.__shady.lastChild = a.__shady.previousSibling);
                var e = a.__shady.previousSibling, h = a.__shady.nextSibling;
                e && (e.__shady = e.__shady || {}, e.__shady.nextSibling = h), h && (h.__shady = h.__shady || {}, 
                h.__shady.previousSibling = e), a.__shady.parentNode = a.__shady.previousSibling = a.__shady.nextSibling = void 0, 
                void 0 !== b.__shady.childNodes && (b.__shady.childNodes = null);
            }
            if (e = d) {
                for (var g, e = Ga(d), h = 0; h < e.length; h++) {
                    var k, f = e[h];
                    a: {
                        for (k = f; k; ) {
                            if (k == a) {
                                k = !0;
                                break a;
                            }
                            k = k.parentNode;
                        }
                        k = void 0;
                    }
                    if (k) for (f = f.assignedNodes({
                        flatten: !0
                    }), k = 0; k < f.length; k++) {
                        g = !0;
                        var l = f[k], m = I.parentNode(l);
                        m && U.removeChild.call(m, l);
                    }
                }
                e = g;
            }
            b = b && d && b.localName === d.b.s, (e || b) && (d.l = !1, X(d));
        }
        return Ra(a), c;
    }
    function Sa(a, b, c) {
        (a = a.__shady && a.__shady.h) && (b && a.addedNodes.push(b), c && a.removedNodes.push(c), 
        Ta(a));
    }
    function Ua(a) {
        if (a && a.nodeType) {
            a.__shady = a.__shady || {};
            var b = a.__shady.F;
            return void 0 === b && (b = u(a) ? a : (b = a.parentNode) ? Ua(b) : a, document.documentElement.contains(a) && (a.__shady.F = b)), 
            b;
        }
    }
    function Va(a, b, c) {
        var d, e = c.b.s;
        if (a.nodeType !== Node.DOCUMENT_FRAGMENT_NODE || a.__noInsertionPoint) a.localName === e && (T(b), 
        T(a), d = !0); else for (var g, f, e = a.querySelectorAll(e), h = 0; h < e.length && (g = e[h]); h++) (f = g.parentNode) === a && (f = b), 
        f = Va(g, f, c), d = d || f;
        return d;
    }
    function Wa(a) {
        return (a = a && a.__shady && a.__shady.root) && Fa(a);
    }
    function Ra(a) {
        if (a.__shady && void 0 !== a.__shady.F) for (var e, b = a.childNodes, c = 0, d = b.length; c < d && (e = b[c]); c++) Ra(e);
        a.__shady = a.__shady || {}, a.__shady.F = void 0;
    }
    function Qa(a) {
        if (a = a.parentNode, Wa(a)) return X(a.__shady.root), !0;
    }
    function X(a) {
        a.B = !0, a.update();
    }
    function Xa(a, b) {
        "slot" === b ? Qa(a) : "slot" === a.localName && "name" === b && (a = v(a)) && a.update();
    }
    function Ya(a, b, c) {
        var d = [];
        return Za(a.childNodes, b, c, d), d;
    }
    function Za(a, b, c, d) {
        for (var g, e = 0, h = a.length; e < h && (g = a[e]); e++) {
            var f;
            if (f = g.nodeType === Node.ELEMENT_NODE) {
                var k = b, l = c, m = d, q = k(f = g);
                q && m.push(f), l && l(q) ? f = q : (Za(f.childNodes, k, l, m), f = void 0);
            }
            if (f) break;
        }
    }
    function $a(a, b, c) {
        if (c && (void 0 !== (d = c.__shady && c.__shady.parentNode) && d !== a || void 0 === d && I.parentNode(c) !== a)) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
        if (c === b) return b;
        b.nodeType !== Node.DOCUMENT_FRAGMENT_NODE && ((d = b.__shady && b.__shady.parentNode) ? (Sa(d, null, b), 
        Pa(b)) : (b.parentNode && U.removeChild.call(b.parentNode, b), Ra(b)));
        var h, d = c, e = v(a);
        if (e && (b.__noInsertionPoint && !e.B && (e.l = !0), h = Va(b, a, e)) && (e.l = !1), 
        a.__shady && void 0 !== a.__shady.firstChild) if (ra(a), a.__shady = a.__shady || {}, 
        void 0 !== a.__shady.firstChild && (a.__shady.childNodes = null), b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            for (var g = b.childNodes, f = 0; f < g.length; f++) sa(g[f], a, d);
            b.__shady = b.__shady || {}, g = void 0 !== b.__shady.firstChild ? null : void 0, 
            b.__shady.firstChild = b.__shady.lastChild = g, b.__shady.childNodes = g;
        } else sa(b, a, d);
        var g = h, f = e && e.b.s || "", k = b.nodeType === Node.DOCUMENT_FRAGMENT_NODE && !b.__noInsertionPoint && f && b.querySelector(f);
        if (h = k && k.parentNode.nodeType !== Node.DOCUMENT_FRAGMENT_NODE, ((k = k || b.localName === f) || a.localName === f || g) && e && X(e), 
        (e = Wa(a)) && X(a.__shady && a.__shady.root), !(e || k && !h || a.__shady.root || d && u(d.parentNode) && d.parentNode.c)) {
            if (c && (d = v(c))) {
                var l;
                if (c.localName === d.b.s) a: {
                    for (d = c.assignedNodes({
                        flatten: !0
                    }), e = Ua(c), h = 0, g = d.length; h < g && (l = d[h]); h++) if (e.u(c, l)) break a;
                    l = void 0;
                } else l = c;
                c = l;
            }
            l = u(a) ? a.host : a, c ? U.insertBefore.call(l, b, c) : U.appendChild.call(l, b);
        }
        return Sa(a, b), b;
    }
    function ab(a, b) {
        if (a.ownerDocument !== document) return U.importNode.call(document, a, b);
        var c = U.importNode.call(document, a, !1);
        if (b) {
            a = a.childNodes, b = 0;
            for (var d; b < a.length; b++) d = ab(a[b], !0), c.appendChild(d);
        }
        return c;
    }
    function bb() {
        this.a = !1, this.addedNodes = [], this.removedNodes = [], this.o = new Set();
    }
    function Ta(a) {
        a.a || (a.a = !0, fa(function() {
            cb(a);
        }));
    }
    function cb(a) {
        if (a.a) {
            a.a = !1;
            var b = a.takeRecords();
            b.length && a.o.forEach(function(a) {
                a(b);
            });
        }
    }
    function db(a, b) {
        a.__shady = a.__shady || {}, a.__shady.h || (a.__shady.h = new bb()), a.__shady.h.o.add(b);
        var c = a.__shady.h;
        return {
            O: b,
            R: c,
            P: a,
            takeRecords: function() {
                return c.takeRecords();
            }
        };
    }
    function eb(a) {
        var b = a && a.R;
        b && (b.o.delete(a.O), b.o.size || (a.P.__shady.h = null));
    }
    function fb(a, b) {
        var c = b.getRootNode();
        return a.map(function(a) {
            var b = c === a.target.getRootNode();
            if (b && a.addedNodes) {
                if ((b = Array.from(a.addedNodes).filter(function(a) {
                    return c === a.getRootNode();
                })).length) return a = Object.create(a), Object.defineProperty(a, "addedNodes", {
                    value: b,
                    configurable: !0
                }), a;
            } else if (b) return a;
        }).filter(function(a) {
            return a;
        });
    }
    function hb(a, b) {
        var c = [], d = a;
        for (a = a === window ? window : a.getRootNode(); d; ) c.push(d), d = d.assignedSlot ? d.assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a) ? d.host : d.parentNode;
        return c[c.length - 1] === document && c.push(window), c;
    }
    function ib(a, b) {
        if (!u) return a;
        a = hb(a, !0);
        for (var d, e, h, g, c = 0; c < b.length; c++) if (d = b[c], (h = d === window ? window : d.getRootNode()) !== e && (g = a.indexOf(h), 
        e = h), !u(h) || -1 < g) return d;
    }
    function kb(a) {
        function b(b, d) {
            return b = new a(b, d), b.v = d && !!d.composed, b;
        }
        return da(b, a), b.prototype = a.prototype, b;
    }
    function mb(a, b, c) {
        if (c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c]) for (var e, d = 0; (e = c[d]) && a.target !== a.relatedTarget && (e.call(b, a), 
        !a.K); d++) ;
    }
    function nb(a) {
        var c, b = a.composedPath();
        Object.defineProperty(a, "currentTarget", {
            get: function() {
                return c;
            },
            configurable: !0
        });
        for (d = b.length - 1; 0 <= d; d--) if (c = b[d], mb(a, c, "capture"), a.w) return;
        Object.defineProperty(a, "eventPhase", {
            get: function() {
                return Event.AT_TARGET;
            }
        });
        for (var e, d = 0; d < b.length && (c = b[d], d && (!c.shadowRoot || c.shadowRoot !== e) || (mb(a, c, "bubble"), 
        c !== window && (e = c.getRootNode()), !a.w)); d++) ;
    }
    function ob(a, b, c, d, e, h) {
        for (var g = 0; g < a.length; g++) {
            var f = a[g], k = f.type, l = f.capture, m = f.once, q = f.passive;
            if (b === f.node && c === k && d === l && e === m && h === q) return g;
        }
        return -1;
    }
    function pb(a, b, c) {
        if (b) {
            var d, e, h;
            "object" === (void 0 === c ? "undefined" : _typeof(c)) ? (d = !!c.capture, e = !!c.once, 
            h = !!c.passive) : (d = !!c, h = e = !1);
            var g = c && c.A || this, f = b.j;
            if (f) {
                if (-1 < ob(f, g, a, d, e, h)) return;
            } else b.j = [];
            f = function(d) {
                e && this.removeEventListener(a, b, c), d.__target || qb(d);
                var f;
                if (g !== this && (f = Object.getOwnPropertyDescriptor(d, "currentTarget"), Object.defineProperty(d, "currentTarget", {
                    get: function() {
                        return g;
                    },
                    configurable: !0
                })), d.composed || -1 < d.composedPath().indexOf(g)) if (d.target === d.relatedTarget) d.eventPhase === Event.BUBBLING_PHASE && d.stopImmediatePropagation(); else if (d.eventPhase === Event.CAPTURING_PHASE || d.bubbles || d.target === g) {
                    var h = "object" === (void 0 === b ? "undefined" : _typeof(b)) && b.handleEvent ? b.handleEvent(d) : b.call(g, d);
                    return g !== this && (f ? (Object.defineProperty(d, "currentTarget", f), f = null) : delete d.currentTarget), 
                    h;
                }
            }, b.j.push({
                node: this,
                type: a,
                capture: d,
                once: e,
                passive: h,
                V: f
            }), lb[a] ? (this.__handlers = this.__handlers || {}, this.__handlers[a] = this.__handlers[a] || {
                capture: [],
                bubble: []
            }, this.__handlers[a][d ? "capture" : "bubble"].push(f)) : (this instanceof Window ? U.T : U.addEventListener).call(this, a, f, c);
        }
    }
    function rb(a, b, c) {
        if (b) {
            var d, e, h;
            "object" === (void 0 === c ? "undefined" : _typeof(c)) ? (d = !!c.capture, e = !!c.once, 
            h = !!c.passive) : (d = !!c, h = e = !1);
            var k, g = c && c.A || this, f = void 0;
            k = null;
            try {
                k = b.j;
            } catch (l) {}
            k && -1 < (e = ob(k, g, a, d, e, h)) && (f = k.splice(e, 1)[0].V, k.length || (b.j = void 0)), 
            (this instanceof Window ? U.U : U.removeEventListener).call(this, a, f || b, c), 
            f && lb[a] && this.__handlers && this.__handlers[a] && (a = this.__handlers[a][d ? "capture" : "bubble"], 
            -1 < (f = a.indexOf(f)) && a.splice(f, 1));
        }
    }
    function qb(a) {
        if (a.__target = a.target, a.H = a.relatedTarget, p.g) {
            var b = Object.getPrototypeOf(a);
            if (!b.hasOwnProperty("__patchProto")) {
                var c = Object.create(b);
                c.W = b, x(c, jb), b.__patchProto = c;
            }
            a.__proto__ = b.__patchProto;
        } else x(a, jb);
    }
    function wb(a) {
        var b = a.getRootNode();
        return u(b) && Ka(b), a.__shady && a.__shady.assignedSlot || null;
    }
    function Z(a, b) {
        for (var c = Object.getOwnPropertyNames(b), d = 0; d < c.length; d++) {
            var e = c[d], h = Object.getOwnPropertyDescriptor(b, e);
            h.value ? a[e] = h.value : Object.defineProperty(a, e, h);
        }
    }
    var p = window.ShadyDOM || {};
    p.S = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
    var t = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");
    p.g = !!(t && t.configurable && t.get), p.J = p.force || !p.S;
    var w = Element.prototype, ca = w.matches || w.matchesSelector || w.mozMatchesSelector || w.msMatchesSelector || w.oMatchesSelector || w.webkitMatchesSelector, A = document.createTextNode(""), ea = 0, B = [];
    new MutationObserver(function() {
        for (;B.length; ) try {
            B.shift()();
        } catch (a) {
            throw A.textContent = ea++, a;
        }
    }).observe(A, {
        characterData: !0
    });
    var E, D = [];
    F.list = D;
    var ha = /[&\u00A0"]/g, ia = /[&\u00A0<>]/g, la = ka("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")), ma = ka("style script xmp iframe noembed noframes plaintext noscript".split(" ")), I = {}, J = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1), K = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1);
    I.parentNode = function(a) {
        return J.currentNode = a, J.parentNode();
    }, I.firstChild = function(a) {
        return J.currentNode = a, J.firstChild();
    }, I.lastChild = function(a) {
        return J.currentNode = a, J.lastChild();
    }, I.previousSibling = function(a) {
        return J.currentNode = a, J.previousSibling();
    }, I.nextSibling = function(a) {
        return J.currentNode = a, J.nextSibling();
    }, I.childNodes = na, I.parentElement = function(a) {
        return K.currentNode = a, K.parentNode();
    }, I.firstElementChild = function(a) {
        return K.currentNode = a, K.firstChild();
    }, I.lastElementChild = function(a) {
        return K.currentNode = a, K.lastChild();
    }, I.previousElementSibling = function(a) {
        return K.currentNode = a, K.previousSibling();
    }, I.nextElementSibling = function(a) {
        return K.currentNode = a, K.nextSibling();
    }, I.children = function(a) {
        var b = [];
        for (K.currentNode = a, a = K.firstChild(); a; ) b.push(a), a = K.nextSibling();
        return b;
    }, I.innerHTML = function(a) {
        return H(a, function(a) {
            return na(a);
        });
    }, I.textContent = function(a) {
        if (a.nodeType !== Node.ELEMENT_NODE) return a.nodeValue;
        a = document.createTreeWalker(a, NodeFilter.SHOW_TEXT, null, !1);
        for (var c, b = ""; c = a.nextNode(); ) b += c.nodeValue;
        return b;
    };
    var M = Object.getOwnPropertyDescriptor(Element.prototype, "innerHTML") || Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML"), N = document.implementation.createHTMLDocument("inert").createElement("div"), O = Object.getOwnPropertyDescriptor(Document.prototype, "activeElement"), oa = {
        parentElement: {
            get: function() {
                var a = this.__shady && this.__shady.parentNode;
                return a && a.nodeType !== Node.ELEMENT_NODE && (a = null), void 0 !== a ? a : I.parentElement(this);
            },
            configurable: !0
        },
        parentNode: {
            get: function() {
                var a = this.__shady && this.__shady.parentNode;
                return void 0 !== a ? a : I.parentNode(this);
            },
            configurable: !0
        },
        nextSibling: {
            get: function() {
                var a = this.__shady && this.__shady.nextSibling;
                return void 0 !== a ? a : I.nextSibling(this);
            },
            configurable: !0
        },
        previousSibling: {
            get: function() {
                var a = this.__shady && this.__shady.previousSibling;
                return void 0 !== a ? a : I.previousSibling(this);
            },
            configurable: !0
        },
        className: {
            get: function() {
                return this.getAttribute("class") || "";
            },
            set: function(a) {
                this.setAttribute("class", a);
            },
            configurable: !0
        },
        nextElementSibling: {
            get: function() {
                if (this.__shady && void 0 !== this.__shady.nextSibling) {
                    for (var a = this.nextSibling; a && a.nodeType !== Node.ELEMENT_NODE; ) a = a.nextSibling;
                    return a;
                }
                return I.nextElementSibling(this);
            },
            configurable: !0
        },
        previousElementSibling: {
            get: function() {
                if (this.__shady && void 0 !== this.__shady.previousSibling) {
                    for (var a = this.previousSibling; a && a.nodeType !== Node.ELEMENT_NODE; ) a = a.previousSibling;
                    return a;
                }
                return I.previousElementSibling(this);
            },
            configurable: !0
        }
    }, P = {
        childNodes: {
            get: function() {
                var a;
                if (this.__shady && void 0 !== this.__shady.firstChild) {
                    if (!this.__shady.childNodes) {
                        this.__shady.childNodes = [];
                        for (var b = this.firstChild; b; b = b.nextSibling) this.__shady.childNodes.push(b);
                    }
                    a = this.__shady.childNodes;
                } else a = I.childNodes(this);
                return a.item = function(b) {
                    return a[b];
                }, a;
            },
            configurable: !0
        },
        childElementCount: {
            get: function() {
                return this.children.length;
            },
            configurable: !0
        },
        firstChild: {
            get: function() {
                var a = this.__shady && this.__shady.firstChild;
                return void 0 !== a ? a : I.firstChild(this);
            },
            configurable: !0
        },
        lastChild: {
            get: function() {
                var a = this.__shady && this.__shady.lastChild;
                return void 0 !== a ? a : I.lastChild(this);
            },
            configurable: !0
        },
        textContent: {
            get: function() {
                if (this.__shady && void 0 !== this.__shady.firstChild) {
                    for (var d, a = [], b = 0, c = this.childNodes; d = c[b]; b++) d.nodeType !== Node.COMMENT_NODE && a.push(d.textContent);
                    return a.join("");
                }
                return I.textContent(this);
            },
            set: function(a) {
                if (this.nodeType !== Node.ELEMENT_NODE) this.nodeValue = a; else {
                    for (;this.firstChild; ) this.removeChild(this.firstChild);
                    this.appendChild(document.createTextNode(a));
                }
            },
            configurable: !0
        },
        firstElementChild: {
            get: function() {
                if (this.__shady && void 0 !== this.__shady.firstChild) {
                    for (var a = this.firstChild; a && a.nodeType !== Node.ELEMENT_NODE; ) a = a.nextSibling;
                    return a;
                }
                return I.firstElementChild(this);
            },
            configurable: !0
        },
        lastElementChild: {
            get: function() {
                if (this.__shady && void 0 !== this.__shady.lastChild) {
                    for (var a = this.lastChild; a && a.nodeType !== Node.ELEMENT_NODE; ) a = a.previousSibling;
                    return a;
                }
                return I.lastElementChild(this);
            },
            configurable: !0
        },
        children: {
            get: function() {
                var a;
                return a = this.__shady && void 0 !== this.__shady.firstChild ? Array.prototype.filter.call(this.childNodes, function(a) {
                    return a.nodeType === Node.ELEMENT_NODE;
                }) : I.children(this), a.item = function(b) {
                    return a[b];
                }, a;
            },
            configurable: !0
        },
        innerHTML: {
            get: function() {
                var a = "template" === this.localName ? this.content : this;
                return this.__shady && void 0 !== this.__shady.firstChild ? H(a) : I.innerHTML(a);
            },
            set: function(a) {
                for (var b = "template" === this.localName ? this.content : this; b.firstChild; ) b.removeChild(b.firstChild);
                for (M && M.set ? M.set.call(N, a) : N.innerHTML = a; N.firstChild; ) b.appendChild(N.firstChild);
            },
            configurable: !0
        }
    }, pa = {
        shadowRoot: {
            get: function() {
                return this.__shady && this.__shady.root || null;
            },
            set: function(a) {
                this.__shady = this.__shady || {}, this.__shady.root = a;
            },
            configurable: !0
        }
    }, Q = {
        activeElement: {
            get: function() {
                var a;
                if ((a = O && O.get ? O.get.call(document) : p.g ? void 0 : document.activeElement) && a.nodeType) {
                    var b = !!u(this);
                    if (this === document || b && this.host !== a && this.host.contains(a)) {
                        for (b = v(a); b && b !== this; ) b = v(a = b.host);
                        a = this === document ? b ? null : a : b === this ? a : null;
                    } else a = null;
                } else a = null;
                return a;
            },
            set: function() {},
            configurable: !0
        }
    }, qa = p.g ? function() {} : function(a) {
        a.__shady && a.__shady.N || (a.__shady = a.__shady || {}, a.__shady.N = !0, R(a, oa, !0));
    }, ra = p.g ? function() {} : function(a) {
        a.__shady && a.__shady.L || (a.__shady = a.__shady || {}, a.__shady.L = !0, R(a, P, !0), 
        R(a, pa, !0));
    }, U = {}, ta = Element.prototype.insertBefore, ua = Element.prototype.removeChild, va = Element.prototype.setAttribute, wa = Element.prototype.removeAttribute, xa = Element.prototype.cloneNode, ya = Document.prototype.importNode, za = Element.prototype.addEventListener, Aa = Element.prototype.removeEventListener, Ba = Window.prototype.addEventListener, Ca = Window.prototype.removeEventListener, Da = Element.prototype.dispatchEvent;
    U.appendChild = Element.prototype.appendChild, U.insertBefore = ta, U.removeChild = ua, 
    U.setAttribute = va, U.removeAttribute = wa, U.cloneNode = xa, U.importNode = ya, 
    U.addEventListener = za, U.removeEventListener = Aa, U.T = Ba, U.U = Ca, U.dispatchEvent = Da;
    var Ea = "function" == typeof Event ? Event : function(a, b) {
        b = b || {};
        var c = document.createEvent("Event");
        return c.initEvent(a, !!b.bubbles, !!b.cancelable), c;
    };
    V.prototype.D = function() {
        var a;
        if (Fa(this.root)) {
            a = [];
            for (var b = 0, c = this.root.host.firstChild; c; c = c.nextSibling) a[b++] = c;
            for (var h, b = [], d = 0, e = (c = Ga(this.root)).length; d < e && (h = c[d]); d++) {
                var f, g = void 0, k = h, l = a, m = k.__shady.assignedNodes;
                m && Ha(k, !0), k.__shady.assignedNodes = [];
                for (var q = !1, y = !1, r = 0, L = l.length; r < L; r++) {
                    var C;
                    if (C = f = l[r]) {
                        var G = f;
                        C = (C = k.getAttribute("name")) ? C.trim() : "", C = (G = (G = G.getAttribute && G.getAttribute("slot")) ? G.trim() : "") == C;
                    }
                    C && (f.__shady.C != k && (q = !0), (y = k).__shady.assignedNodes.push(f), f.__shady.assignedSlot = y, 
                    l[r] = void 0, y = !0);
                }
                if (!y) for (l = k.childNodes, r = 0; r < l.length; r++) (f = l[r]).__shady.C != k && (q = !0), 
                (L = k).__shady.assignedNodes.push(f), f.__shady.assignedSlot = L;
                if (m) {
                    for (f = 0; f < m.length; f++) m[f].__shady.C = null;
                    k.__shady.assignedNodes.length < m.length && (q = !0);
                }
                for (m = k.__shady.assignedNodes, k.__shady.f = [], f = 0; f < m.length && (g = m[f]); f++) if (g.localName && "slot" == g.localName) {
                    if (l = g.__shady.f) for (r = 0; r < l.length; r++) k.__shady.f.push(l[r]);
                } else k.__shady.f.push(m[f]);
                q && Ia(this, k), (g = (g = h.parentNode) && g.__shady && g.__shady.root) && Fa(g) && b.push(g);
            }
            for (c = 0; c < a.length; c++) (h = a[c]) && (h.__shady = h.__shady || {}, h.__shady.assignedSlot = void 0, 
            (d = I.parentNode(h)) && U.removeChild.call(d, h));
            a = b;
        } else a = [];
        return a;
    }, V.prototype.u = function(a) {
        return !a.__shady.assignedSlot;
    };
    var Ja = {};
    W.prototype = Object.create(DocumentFragment.prototype), W.prototype.update = function() {
        var a = this;
        this.c || (this.c = !0, ga(function() {
            return Ka(a);
        }));
    }, W.prototype._render = function() {
        this.B = this.c = !1, this.l || La(this), this.l = !1, this.D(), Ma(this.host, Na(this, this.host));
        for (var d, e, a = Ga(this), b = 0, c = a.length; b < c && (d = a[b]); b++) (e = d.parentNode) !== this.host && e !== this && Ma(e, Na(this, e));
    }, W.prototype.D = function() {
        for (var a = this.b.D(), b = 0; b < a.length; b++) a[b]._render();
    }, W.prototype.u = function(a, b) {
        return this.b.u(a, b);
    }, W.prototype.addEventListener = function(a, b, c) {
        "object" !== (void 0 === c ? "undefined" : _typeof(c)) && (c = {
            capture: !!c
        }), c.A = this, this.host.addEventListener(a, b, c);
    }, W.prototype.removeEventListener = function(a, b, c) {
        "object" !== (void 0 === c ? "undefined" : _typeof(c)) && (c = {
            capture: !!c
        }), c.A = this, this.host.removeEventListener(a, b, c);
    }, W.prototype.getElementById = function(a) {
        return this.querySelector("#" + a);
    };
    var Oa = W.prototype;
    R(Oa, P, !0), R(Oa, Q, !0);
    var Y = null;
    bb.prototype.takeRecords = function() {
        if (this.addedNodes.length || this.removedNodes.length) {
            var a = [ {
                addedNodes: this.addedNodes,
                removedNodes: this.removedNodes
            } ];
            return this.addedNodes = [], this.removedNodes = [], a;
        }
        return [];
    };
    var gb = {
        blur: !0,
        focus: !0,
        focusin: !0,
        focusout: !0,
        click: !0,
        dblclick: !0,
        mousedown: !0,
        mouseenter: !0,
        mouseleave: !0,
        mousemove: !0,
        mouseout: !0,
        mouseover: !0,
        mouseup: !0,
        wheel: !0,
        beforeinput: !0,
        input: !0,
        keydown: !0,
        keyup: !0,
        compositionstart: !0,
        compositionupdate: !0,
        compositionend: !0,
        touchstart: !0,
        touchend: !0,
        touchmove: !0,
        touchcancel: !0,
        pointerover: !0,
        pointerenter: !0,
        pointerdown: !0,
        pointermove: !0,
        pointerup: !0,
        pointercancel: !0,
        pointerout: !0,
        pointerleave: !0,
        gotpointercapture: !0,
        lostpointercapture: !0,
        dragstart: !0,
        drag: !0,
        dragenter: !0,
        dragleave: !0,
        dragover: !0,
        drop: !0,
        dragend: !0,
        DOMActivate: !0,
        DOMFocusIn: !0,
        DOMFocusOut: !0,
        keypress: !0
    }, jb = {
        get composed() {
            return !1 !== this.isTrusted && void 0 === this.v && (this.v = gb[this.type]), this.v || !1;
        },
        composedPath: function() {
            return this.G || (this.G = hb(this.__target, this.composed)), this.G;
        },
        get target() {
            return ib(this.currentTarget, this.composedPath());
        },
        get relatedTarget() {
            return this.H ? (this.I || (this.I = hb(this.H, !0)), ib(this.currentTarget, this.I)) : null;
        },
        stopPropagation: function() {
            Event.prototype.stopPropagation.call(this), this.w = !0;
        },
        stopImmediatePropagation: function() {
            Event.prototype.stopImmediatePropagation.call(this), this.w = this.K = !0;
        }
    }, lb = {
        focus: !0,
        blur: !0
    }, tb = kb(window.Event), ub = kb(window.CustomEvent), vb = kb(window.MouseEvent), xb = {
        addEventListener: pb.bind(window),
        removeEventListener: rb.bind(window)
    }, yb = {
        addEventListener: pb,
        removeEventListener: rb,
        appendChild: function(a) {
            return $a(this, a);
        },
        insertBefore: function(a, b) {
            return $a(this, a, b);
        },
        removeChild: function(a) {
            if (a.parentNode !== this) throw Error("The node to be removed is not a child of this node: " + a);
            if (!Pa(a)) {
                var b = u(this) ? this.host : this;
                b === I.parentNode(a) && U.removeChild.call(b, a);
            }
            return Sa(this, null, a), a;
        },
        replaceChild: function(a, b) {
            return this.insertBefore(a, b), this.removeChild(b), a;
        },
        cloneNode: function(a) {
            var b;
            if ("template" == this.localName) b = U.cloneNode.call(this, a); else if (b = U.cloneNode.call(this, !1), 
            a) {
                a = this.childNodes;
                for (var d, c = 0; c < a.length; c++) d = a[c].cloneNode(!0), b.appendChild(d);
            }
            return b;
        },
        getRootNode: function() {
            return Ua(this);
        },
        get isConnected() {
            var a = this.ownerDocument;
            if (a && a.contains && a.contains(this) || (a = a.documentElement) && a.contains && a.contains(this)) return !0;
            for (a = this; a && !(a instanceof Document); ) a = a.parentNode || (a instanceof W ? a.host : void 0);
            return !!(a && a instanceof Document);
        },
        dispatchEvent: function(a) {
            return F(), U.dispatchEvent.call(this, a);
        }
    }, zb = {
        get assignedSlot() {
            return wb(this);
        }
    }, Ab = {
        querySelector: function(a) {
            return Ya(this, function(b) {
                return ca.call(b, a);
            }, function(a) {
                return !!a;
            })[0] || null;
        },
        querySelectorAll: function(a) {
            return Ya(this, function(b) {
                return ca.call(b, a);
            });
        }
    }, Bb = {
        assignedNodes: function(a) {
            if ("slot" === this.localName) {
                var b = this.getRootNode();
                return u(b) && Ka(b), this.__shady ? (a && a.flatten ? this.__shady.f : this.__shady.assignedNodes) || [] : [];
            }
        }
    }, Cb = z({
        setAttribute: function(a, b) {
            Y || (Y = window.ShadyCSS && window.ShadyCSS.ScopingShim), Y && "class" === a ? Y.setElementClass(this, b) : (U.setAttribute.call(this, a, b), 
            Xa(this, a));
        },
        removeAttribute: function(a) {
            U.removeAttribute.call(this, a), Xa(this, a);
        },
        attachShadow: function(a) {
            if (!this) throw "Must provide a host.";
            if (!a) throw "Not enough arguments.";
            return new W(Ja, this);
        },
        get slot() {
            return this.getAttribute("slot");
        },
        set slot(a) {
            this.setAttribute("slot", a);
        },
        get assignedSlot() {
            return wb(this);
        }
    }, Ab, Bb);
    Object.defineProperties(Cb, pa);
    var Db = z({
        importNode: function(a, b) {
            return ab(a, b);
        },
        getElementById: function(a) {
            return this.querySelector("#" + a);
        }
    }, Ab);
    Object.defineProperties(Db, {
        _activeElement: Q.activeElement
    });
    var Eb = HTMLElement.prototype.blur, Fb = z({
        blur: function() {
            var a = this.shadowRoot;
            (a = a && a.activeElement) ? a.blur() : Eb.call(this);
        }
    });
    if (p.J) {
        window.ShadyDOM = {
            inUse: p.J,
            patch: function(a) {
                return a;
            },
            isShadyRoot: u,
            enqueue: ga,
            flush: F,
            settings: p,
            filterMutations: fb,
            observeChildren: db,
            unobserveChildren: eb,
            nativeMethods: U,
            nativeTree: I
        }, window.Event = tb, window.CustomEvent = ub, window.MouseEvent = vb, function() {
            for (var a in lb) window.addEventListener(a, function(a) {
                a.__target || (qb(a), nb(a));
            }, !0);
        }();
        var Gb = window.customElements && window.customElements.nativeHTMLElement || HTMLElement;
        Z(window.Node.prototype, yb), Z(window.Window.prototype, xb), Z(window.Text.prototype, zb), 
        Z(window.DocumentFragment.prototype, Ab), Z(window.Element.prototype, Cb), Z(window.Document.prototype, Db), 
        window.HTMLSlotElement && Z(window.HTMLSlotElement.prototype, Bb), Z(Gb.prototype, Fb), 
        p.g && (S(window.Node.prototype), S(window.Text.prototype), S(window.DocumentFragment.prototype), 
        S(window.Element.prototype), S(Gb.prototype), S(window.Document.prototype), window.HTMLSlotElement && S(window.HTMLSlotElement.prototype)), 
        window.ShadowRoot = W;
    }
}).call(self);