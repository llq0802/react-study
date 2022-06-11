window.FlvJsPlayer = (function (e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var r = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if ((n.r(i), Object.defineProperty(i, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
        for (var r in e)
          n.d(
            i,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return i;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 18))
  );
})([
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i,
      r = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      a = n(2),
      s = (i = a) && i.__esModule ? i : { default: i };
    var o = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, e);
      }
      return (
        r(e, null, [
          {
            key: 'e',
            value: function (t, n) {
              (t && !e.FORCE_GLOBAL_TAG) || (t = e.GLOBAL_TAG);
              var i = '[' + t + '] > ' + n;
              e.ENABLE_CALLBACK && e.emitter.emit('log', 'error', i), e.ENABLE_ERROR;
            },
          },
          {
            key: 'i',
            value: function (t, n) {
              (t && !e.FORCE_GLOBAL_TAG) || (t = e.GLOBAL_TAG);
              var i = '[' + t + '] > ' + n;
              e.ENABLE_CALLBACK && e.emitter.emit('log', 'info', i), e.ENABLE_INFO;
            },
          },
          {
            key: 'w',
            value: function (t, n) {
              (t && !e.FORCE_GLOBAL_TAG) || (t = e.GLOBAL_TAG);
              var i = '[' + t + '] > ' + n;
              e.ENABLE_CALLBACK && e.emitter.emit('log', 'warn', i), e.ENABLE_WARN;
            },
          },
          {
            key: 'd',
            value: function (t, n) {
              (t && !e.FORCE_GLOBAL_TAG) || (t = e.GLOBAL_TAG);
              var i = '[' + t + '] > ' + n;
              e.ENABLE_CALLBACK && e.emitter.emit('log', 'debug', i), e.ENABLE_DEBUG;
            },
          },
          {
            key: 'v',
            value: function (t, n) {
              (t && !e.FORCE_GLOBAL_TAG) || (t = e.GLOBAL_TAG);
              var i = '[' + t + '] > ' + n;
              e.ENABLE_CALLBACK && e.emitter.emit('log', 'verbose', i), e.ENABLE_VERBOSE;
            },
          },
        ]),
        e
      );
    })();
    (o.GLOBAL_TAG = 'flv.js'),
      (o.FORCE_GLOBAL_TAG = !1),
      (o.ENABLE_ERROR = !0),
      (o.ENABLE_INFO = !0),
      (o.ENABLE_WARN = !0),
      (o.ENABLE_DEBUG = !0),
      (o.ENABLE_VERBOSE = !0),
      (o.ENABLE_CALLBACK = !1),
      (o.emitter = new s.default()),
      (t.default = o),
      (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
      };
    })();
    function r(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }
    function a(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
      })),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
    }
    function s(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    var o = (t.RuntimeException = (function () {
      function e(t) {
        s(this, e), (this._message = t);
      }
      return (
        i(e, [
          {
            key: 'toString',
            value: function () {
              return this.name + ': ' + this.message;
            },
          },
          {
            key: 'name',
            get: function () {
              return 'RuntimeException';
            },
          },
          {
            key: 'message',
            get: function () {
              return this._message;
            },
          },
        ]),
        e
      );
    })());
    (t.IllegalStateException = (function (e) {
      function t(e) {
        return s(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      }
      return (
        a(t, e),
        i(t, [
          {
            key: 'name',
            get: function () {
              return 'IllegalStateException';
            },
          },
        ]),
        t
      );
    })(o)),
      (t.InvalidArgumentException = (function (e) {
        function t(e) {
          return s(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        }
        return (
          a(t, e),
          i(t, [
            {
              key: 'name',
              get: function () {
                return 'InvalidArgumentException';
              },
            },
          ]),
          t
        );
      })(o)),
      (t.NotImplementedException = (function (e) {
        function t(e) {
          return s(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        }
        return (
          a(t, e),
          i(t, [
            {
              key: 'name',
              get: function () {
                return 'NotImplementedException';
              },
            },
          ]),
          t
        );
      })(o));
  },
  function (e, t, n) {
    var i,
      r = 'object' == typeof Reflect ? Reflect : null,
      a =
        r && 'function' == typeof r.apply
          ? r.apply
          : function (e, t, n) {
              return Function.prototype.apply.call(e, t, n);
            };
    i =
      r && 'function' == typeof r.ownKeys
        ? r.ownKeys
        : Object.getOwnPropertySymbols
        ? function (e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
          }
        : function (e) {
            return Object.getOwnPropertyNames(e);
          };
    var s =
      Number.isNaN ||
      function (e) {
        return e != e;
      };
    function o() {
      o.init.call(this);
    }
    (e.exports = o),
      (o.EventEmitter = o),
      (o.prototype._events = void 0),
      (o.prototype._eventsCount = 0),
      (o.prototype._maxListeners = void 0);
    var u = 10;
    function l(e) {
      if ('function' != typeof e)
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
    }
    function d(e) {
      return void 0 === e._maxListeners ? o.defaultMaxListeners : e._maxListeners;
    }
    function h(e, t, n, i) {
      var r, a, s, o;
      if (
        (l(n),
        void 0 === (a = e._events)
          ? ((a = e._events = Object.create(null)), (e._eventsCount = 0))
          : (void 0 !== a.newListener && (e.emit('newListener', t, n.listener ? n.listener : n), (a = e._events)),
            (s = a[t])),
        void 0 === s)
      )
        (s = a[t] = n), ++e._eventsCount;
      else if (
        ('function' == typeof s ? (s = a[t] = i ? [n, s] : [s, n]) : i ? s.unshift(n) : s.push(n),
        (r = d(e)) > 0 && s.length > r && !s.warned)
      ) {
        s.warned = !0;
        var u = new Error(
          'Possible EventEmitter memory leak detected. ' +
            s.length +
            ' ' +
            String(t) +
            ' listeners added. Use emitter.setMaxListeners() to increase limit'
        );
        (u.name = 'MaxListenersExceededWarning'),
          (u.emitter = e),
          (u.type = t),
          (u.count = s.length),
          (o = u),
          console && console.warn && console.warn(o);
      }
      return e;
    }
    function f() {
      if (!this.fired)
        return (
          this.target.removeListener(this.type, this.wrapFn),
          (this.fired = !0),
          0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
        );
    }
    function c(e, t, n) {
      var i = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
        r = f.bind(i);
      return (r.listener = n), (i.wrapFn = r), r;
    }
    function _(e, t, n) {
      var i = e._events;
      if (void 0 === i) return [];
      var r = i[t];
      return void 0 === r
        ? []
        : 'function' == typeof r
        ? n
          ? [r.listener || r]
          : [r]
        : n
        ? (function (e) {
            for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
            return t;
          })(r)
        : p(r, r.length);
    }
    function m(e) {
      var t = this._events;
      if (void 0 !== t) {
        var n = t[e];
        if ('function' == typeof n) return 1;
        if (void 0 !== n) return n.length;
      }
      return 0;
    }
    function p(e, t) {
      for (var n = new Array(t), i = 0; i < t; ++i) n[i] = e[i];
      return n;
    }
    Object.defineProperty(o, 'defaultMaxListeners', {
      enumerable: !0,
      get: function () {
        return u;
      },
      set: function (e) {
        if ('number' != typeof e || e < 0 || s(e))
          throw new RangeError(
            'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + '.'
          );
        u = e;
      },
    }),
      (o.init = function () {
        (void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events) ||
          ((this._events = Object.create(null)), (this._eventsCount = 0)),
          (this._maxListeners = this._maxListeners || void 0);
      }),
      (o.prototype.setMaxListeners = function (e) {
        if ('number' != typeof e || e < 0 || s(e))
          throw new RangeError(
            'The value of "n" is out of range. It must be a non-negative number. Received ' + e + '.'
          );
        return (this._maxListeners = e), this;
      }),
      (o.prototype.getMaxListeners = function () {
        return d(this);
      }),
      (o.prototype.emit = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
        var i = 'error' === e,
          r = this._events;
        if (void 0 !== r) i = i && void 0 === r.error;
        else if (!i) return !1;
        if (i) {
          var s;
          if ((t.length > 0 && (s = t[0]), s instanceof Error)) throw s;
          var o = new Error('Unhandled error.' + (s ? ' (' + s.message + ')' : ''));
          throw ((o.context = s), o);
        }
        var u = r[e];
        if (void 0 === u) return !1;
        if ('function' == typeof u) a(u, this, t);
        else {
          var l = u.length,
            d = p(u, l);
          for (n = 0; n < l; ++n) a(d[n], this, t);
        }
        return !0;
      }),
      (o.prototype.addListener = function (e, t) {
        return h(this, e, t, !1);
      }),
      (o.prototype.on = o.prototype.addListener),
      (o.prototype.prependListener = function (e, t) {
        return h(this, e, t, !0);
      }),
      (o.prototype.once = function (e, t) {
        return l(t), this.on(e, c(this, e, t)), this;
      }),
      (o.prototype.prependOnceListener = function (e, t) {
        return l(t), this.prependListener(e, c(this, e, t)), this;
      }),
      (o.prototype.removeListener = function (e, t) {
        var n, i, r, a, s;
        if ((l(t), void 0 === (i = this._events))) return this;
        if (void 0 === (n = i[e])) return this;
        if (n === t || n.listener === t)
          0 == --this._eventsCount
            ? (this._events = Object.create(null))
            : (delete i[e], i.removeListener && this.emit('removeListener', e, n.listener || t));
        else if ('function' != typeof n) {
          for (r = -1, a = n.length - 1; a >= 0; a--)
            if (n[a] === t || n[a].listener === t) {
              (s = n[a].listener), (r = a);
              break;
            }
          if (r < 0) return this;
          0 === r
            ? n.shift()
            : (function (e, t) {
                for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                e.pop();
              })(n, r),
            1 === n.length && (i[e] = n[0]),
            void 0 !== i.removeListener && this.emit('removeListener', e, s || t);
        }
        return this;
      }),
      (o.prototype.off = o.prototype.removeListener),
      (o.prototype.removeAllListeners = function (e) {
        var t, n, i;
        if (void 0 === (n = this._events)) return this;
        if (void 0 === n.removeListener)
          return (
            0 === arguments.length
              ? ((this._events = Object.create(null)), (this._eventsCount = 0))
              : void 0 !== n[e] && (0 == --this._eventsCount ? (this._events = Object.create(null)) : delete n[e]),
            this
          );
        if (0 === arguments.length) {
          var r,
            a = Object.keys(n);
          for (i = 0; i < a.length; ++i) 'removeListener' !== (r = a[i]) && this.removeAllListeners(r);
          return (
            this.removeAllListeners('removeListener'),
            (this._events = Object.create(null)),
            (this._eventsCount = 0),
            this
          );
        }
        if ('function' == typeof (t = n[e])) this.removeListener(e, t);
        else if (void 0 !== t) for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
        return this;
      }),
      (o.prototype.listeners = function (e) {
        return _(this, e, !0);
      }),
      (o.prototype.rawListeners = function (e) {
        return _(this, e, !1);
      }),
      (o.listenerCount = function (e, t) {
        return 'function' == typeof e.listenerCount ? e.listenerCount(t) : m.call(e, t);
      }),
      (o.prototype.listenerCount = m),
      (o.prototype.eventNames = function () {
        return this._eventsCount > 0 ? i(this._events) : [];
      });
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.BaseLoader = t.LoaderErrors = t.LoaderStatus = void 0);
    var i = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      r = n(1);
    var a = (t.LoaderStatus = { kIdle: 0, kConnecting: 1, kBuffering: 2, kError: 3, kComplete: 4 });
    (t.LoaderErrors = {
      OK: 'OK',
      EXCEPTION: 'Exception',
      HTTP_STATUS_CODE_INVALID: 'HttpStatusCodeInvalid',
      CONNECTING_TIMEOUT: 'ConnectingTimeout',
      EARLY_EOF: 'EarlyEof',
      UNRECOVERABLE_EARLY_EOF: 'UnrecoverableEarlyEof',
    }),
      (t.BaseLoader = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this._type = t || 'undefined'),
            (this._status = a.kIdle),
            (this._needStash = !1),
            (this._onContentLengthKnown = null),
            (this._onURLRedirect = null),
            (this._onDataArrival = null),
            (this._onError = null),
            (this._onComplete = null);
        }
        return (
          i(e, [
            {
              key: 'destroy',
              value: function () {
                (this._status = a.kIdle),
                  (this._onContentLengthKnown = null),
                  (this._onURLRedirect = null),
                  (this._onDataArrival = null),
                  (this._onError = null),
                  (this._onComplete = null);
              },
            },
            {
              key: 'isWorking',
              value: function () {
                return this._status === a.kConnecting || this._status === a.kBuffering;
              },
            },
            {
              key: 'open',
              value: function (e, t) {
                throw new r.NotImplementedException('Unimplemented abstract function!');
              },
            },
            {
              key: 'abort',
              value: function () {
                throw new r.NotImplementedException('Unimplemented abstract function!');
              },
            },
            {
              key: 'type',
              get: function () {
                return this._type;
              },
            },
            {
              key: 'status',
              get: function () {
                return this._status;
              },
            },
            {
              key: 'needStashBuffer',
              get: function () {
                return this._needStash;
              },
            },
            {
              key: 'onContentLengthKnown',
              get: function () {
                return this._onContentLengthKnown;
              },
              set: function (e) {
                this._onContentLengthKnown = e;
              },
            },
            {
              key: 'onURLRedirect',
              get: function () {
                return this._onURLRedirect;
              },
              set: function (e) {
                this._onURLRedirect = e;
              },
            },
            {
              key: 'onDataArrival',
              get: function () {
                return this._onDataArrival;
              },
              set: function (e) {
                this._onDataArrival = e;
              },
            },
            {
              key: 'onError',
              get: function () {
                return this._onError;
              },
              set: function (e) {
                this._onError = e;
              },
            },
            {
              key: 'onComplete',
              get: function () {
                return this._onComplete;
              },
              set: function (e) {
                this._onComplete = e;
              },
            },
          ]),
          e
        );
      })());
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = {};
    !(function () {
      var e = self.navigator.userAgent.toLowerCase(),
        t =
          /(edge)\/([\w.]+)/.exec(e) ||
          /(opr)[\/]([\w.]+)/.exec(e) ||
          /(chrome)[ \/]([\w.]+)/.exec(e) ||
          /(iemobile)[\/]([\w.]+)/.exec(e) ||
          /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) ||
          /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) ||
          /(webkit)[ \/]([\w.]+)/.exec(e) ||
          /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) ||
          /(msie) ([\w.]+)/.exec(e) ||
          (e.indexOf('trident') >= 0 && /(rv)(?::| )([\w.]+)/.exec(e)) ||
          (e.indexOf('compatible') < 0 && /(firefox)[ \/]([\w.]+)/.exec(e)) ||
          [],
        n =
          /(ipad)/.exec(e) ||
          /(ipod)/.exec(e) ||
          /(windows phone)/.exec(e) ||
          /(iphone)/.exec(e) ||
          /(kindle)/.exec(e) ||
          /(android)/.exec(e) ||
          /(windows)/.exec(e) ||
          /(mac)/.exec(e) ||
          /(linux)/.exec(e) ||
          /(cros)/.exec(e) ||
          [],
        r = {
          browser: t[5] || t[3] || t[1] || '',
          version: t[2] || t[4] || '0',
          majorVersion: t[4] || t[2] || '0',
          platform: n[0] || '',
        },
        a = {};
      if (r.browser) {
        a[r.browser] = !0;
        var s = r.majorVersion.split('.');
        (a.version = { major: parseInt(r.majorVersion, 10), string: r.version }),
          s.length > 1 && (a.version.minor = parseInt(s[1], 10)),
          s.length > 2 && (a.version.build = parseInt(s[2], 10));
      }
      if (
        (r.platform && (a[r.platform] = !0), (a.chrome || a.opr || a.safari) && (a.webkit = !0), a.rv || a.iemobile)
      ) {
        a.rv && delete a.rv;
        (r.browser = 'msie'), (a.msie = !0);
      }
      if (a.edge) {
        delete a.edge;
        (r.browser = 'msedge'), (a.msedge = !0);
      }
      if (a.opr) {
        (r.browser = 'opera'), (a.opera = !0);
      }
      if (a.safari && a.android) {
        (r.browser = 'android'), (a.android = !0);
      }
      for (var o in ((a.name = r.browser), (a.platform = r.platform), i)) i.hasOwnProperty(o) && delete i[o];
      Object.assign(i, a);
    })(),
      (t.default = i),
      (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    (t.default = {
      IO_ERROR: 'io_error',
      DEMUX_ERROR: 'demux_error',
      INIT_SEGMENT: 'init_segment',
      MEDIA_SEGMENT: 'media_segment',
      LOADING_COMPLETE: 'loading_complete',
      RECOVERED_EARLY_EOF: 'recovered_early_eof',
      MEDIA_INFO: 'media_info',
      STATISTICS_INFO: 'statistics_info',
      RECOMMEND_SEEKPOINT: 'recommend_seekpoint',
      LOADED_SEI: 'loaded_sei',
    }),
      (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.createDefaultConfig = function () {
        return Object.assign({}, i);
      });
    var i = (t.defaultConfig = {
      enableWorker: !1,
      enableStashBuffer: !0,
      stashInitialSize: void 0,
      isLive: !1,
      lazyLoad: !0,
      lazyLoadMaxDuration: 180,
      lazyLoadRecoverDuration: 30,
      deferLoadAfterSourceOpen: !0,
      autoCleanupMaxBackwardDuration: 180,
      autoCleanupMinBackwardDuration: 120,
      statisticsInfoReportInterval: 600,
      fixAudioTimestampGap: !0,
      accurateSeek: !1,
      seekType: 'range',
      seekParamStart: 'bstart',
      seekParamEnd: 'bend',
      rangeLoadZeroStart: !1,
      customSeekHandler: void 0,
      reuseRedirectedURL: !1,
    });
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    (t.default = {
      ERROR: 'error',
      LOADING_COMPLETE: 'loading_complete',
      RECOVERED_EARLY_EOF: 'recovered_early_eof',
      MEDIA_INFO: 'media_info',
      STATISTICS_INFO: 'statistics_info',
      LOADED_SEI: 'loaded_sei',
    }),
      (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      r = s(n(2)),
      a = s(n(0));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var o = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, e);
      }
      return (
        i(e, null, [
          {
            key: 'getConfig',
            value: function () {
              return {
                globalTag: a.default.GLOBAL_TAG,
                forceGlobalTag: a.default.FORCE_GLOBAL_TAG,
                enableVerbose: a.default.ENABLE_VERBOSE,
                enableDebug: a.default.ENABLE_DEBUG,
                enableInfo: a.default.ENABLE_INFO,
                enableWarn: a.default.ENABLE_WARN,
                enableError: a.default.ENABLE_ERROR,
                enableCallback: a.default.ENABLE_CALLBACK,
              };
            },
          },
          {
            key: 'applyConfig',
            value: function (e) {
              (a.default.GLOBAL_TAG = e.globalTag),
                (a.default.FORCE_GLOBAL_TAG = e.forceGlobalTag),
                (a.default.ENABLE_VERBOSE = e.enableVerbose),
                (a.default.ENABLE_DEBUG = e.enableDebug),
                (a.default.ENABLE_INFO = e.enableInfo),
                (a.default.ENABLE_WARN = e.enableWarn),
                (a.default.ENABLE_ERROR = e.enableError),
                (a.default.ENABLE_CALLBACK = e.enableCallback);
            },
          },
          {
            key: '_notifyChange',
            value: function () {
              var t = e.emitter;
              if (t.listenerCount('change') > 0) {
                var n = e.getConfig();
                t.emit('change', n);
              }
            },
          },
          {
            key: 'registerListener',
            value: function (t) {
              e.emitter.addListener('change', t);
            },
          },
          {
            key: 'removeListener',
            value: function (t) {
              e.emitter.removeListener('change', t);
            },
          },
          {
            key: 'addLogListener',
            value: function (t) {
              a.default.emitter.addListener('log', t),
                a.default.emitter.listenerCount('log') > 0 && ((a.default.ENABLE_CALLBACK = !0), e._notifyChange());
            },
          },
          {
            key: 'removeLogListener',
            value: function (t) {
              a.default.emitter.removeListener('log', t),
                0 === a.default.emitter.listenerCount('log') && ((a.default.ENABLE_CALLBACK = !1), e._notifyChange());
            },
          },
          {
            key: 'forceGlobalTag',
            get: function () {
              return a.default.FORCE_GLOBAL_TAG;
            },
            set: function (t) {
              (a.default.FORCE_GLOBAL_TAG = t), e._notifyChange();
            },
          },
          {
            key: 'globalTag',
            get: function () {
              return a.default.GLOBAL_TAG;
            },
            set: function (t) {
              (a.default.GLOBAL_TAG = t), e._notifyChange();
            },
          },
          {
            key: 'enableAll',
            get: function () {
              return (
                a.default.ENABLE_VERBOSE &&
                a.default.ENABLE_DEBUG &&
                a.default.ENABLE_INFO &&
                a.default.ENABLE_WARN &&
                a.default.ENABLE_ERROR
              );
            },
            set: function (t) {
              (a.default.ENABLE_VERBOSE = t),
                (a.default.ENABLE_DEBUG = t),
                (a.default.ENABLE_INFO = t),
                (a.default.ENABLE_WARN = t),
                (a.default.ENABLE_ERROR = t),
                e._notifyChange();
            },
          },
          {
            key: 'enableDebug',
            get: function () {
              return a.default.ENABLE_DEBUG;
            },
            set: function (t) {
              (a.default.ENABLE_DEBUG = t), e._notifyChange();
            },
          },
          {
            key: 'enableVerbose',
            get: function () {
              return a.default.ENABLE_VERBOSE;
            },
            set: function (t) {
              (a.default.ENABLE_VERBOSE = t), e._notifyChange();
            },
          },
          {
            key: 'enableInfo',
            get: function () {
              return a.default.ENABLE_INFO;
            },
            set: function (t) {
              (a.default.ENABLE_INFO = t), e._notifyChange();
            },
          },
          {
            key: 'enableWarn',
            get: function () {
              return a.default.ENABLE_WARN;
            },
            set: function (t) {
              (a.default.ENABLE_WARN = t), e._notifyChange();
            },
          },
          {
            key: 'enableError',
            get: function () {
              return a.default.ENABLE_ERROR;
            },
            set: function (t) {
              (a.default.ENABLE_ERROR = t), e._notifyChange();
            },
          },
        ]),
        e
      );
    })();
    (o.emitter = new r.default()), (t.default = o), (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
      };
    })();
    var r = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, e),
          (this.mimeType = null),
          (this.duration = null),
          (this.hasAudio = null),
          (this.hasVideo = null),
          (this.audioCodec = null),
          (this.videoCodec = null),
          (this.audioDataRate = null),
          (this.videoDataRate = null),
          (this.audioSampleRate = null),
          (this.audioChannelCount = null),
          (this.width = null),
          (this.height = null),
          (this.fps = null),
          (this.profile = null),
          (this.level = null),
          (this.refFrames = null),
          (this.chromaFormat = null),
          (this.sarNum = null),
          (this.sarDen = null),
          (this.metadata = null),
          (this.segments = null),
          (this.segmentCount = null),
          (this.hasKeyframesIndex = null),
          (this.keyframesIndex = null);
      }
      return (
        i(e, [
          {
            key: 'isComplete',
            value: function () {
              var e =
                  !1 === this.hasAudio ||
                  (!0 === this.hasAudio &&
                    null != this.audioCodec &&
                    null != this.audioSampleRate &&
                    null != this.audioChannelCount),
                t =
                  !1 === this.hasVideo ||
                  (!0 === this.hasVideo &&
                    null != this.videoCodec &&
                    null != this.width &&
                    null != this.height &&
                    null != this.fps &&
                    null != this.profile &&
                    null != this.level &&
                    null != this.refFrames &&
                    null != this.chromaFormat &&
                    null != this.sarNum &&
                    null != this.sarDen);
              return (
                null != this.mimeType &&
                null != this.duration &&
                null != this.metadata &&
                null != this.hasKeyframesIndex &&
                e &&
                t
              );
            },
          },
          {
            key: 'isSeekable',
            value: function () {
              return !0 === this.hasKeyframesIndex;
            },
          },
          {
            key: 'getNearestKeyframe',
            value: function (e) {
              if (null == this.keyframesIndex) return null;
              var t = this.keyframesIndex,
                n = this._search(t.times, e);
              return { index: n, milliseconds: t.times[n], fileposition: t.filepositions[n] };
            },
          },
          {
            key: '_search',
            value: function (e, t) {
              var n = 0,
                i = e.length - 1,
                r = 0,
                a = 0,
                s = i;
              for (t < e[0] && ((n = 0), (a = s + 1)); a <= s; ) {
                if ((r = a + Math.floor((s - a) / 2)) === i || (t >= e[r] && t < e[r + 1])) {
                  n = r;
                  break;
                }
                e[r] < t ? (a = r + 1) : (s = r - 1);
              }
              return n;
            },
          },
        ]),
        e
      );
    })();
    (t.default = r), (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    (t.default = {
      OK: 'OK',
      FORMAT_ERROR: 'FormatError',
      FORMAT_UNSUPPORTED: 'FormatUnsupported',
      CODEC_UNSUPPORTED: 'CodecUnsupported',
    }),
      (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
      };
    })();
    var r = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, e);
      }
      return (
        i(e, null, [
          {
            key: 'install',
            value: function () {
              (Object.setPrototypeOf =
                Object.setPrototypeOf ||
                function (e, t) {
                  return (e.__proto__ = t), e;
                }),
                (Object.assign =
                  Object.assign ||
                  function (e) {
                    if (null == e) throw new TypeError('Cannot convert undefined or null to object');
                    for (var t = Object(e), n = 1; n < arguments.length; n++) {
                      var i = arguments[n];
                      if (null != i) for (var r in i) i.hasOwnProperty(r) && (t[r] = i[r]);
                    }
                    return t;
                  }),
                'function' != typeof self.Promise && n(22).polyfill();
            },
          },
        ]),
        e
      );
    })();
    r.install(), (t.default = r), (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      r = _(n(0)),
      a = _(n(13)),
      s = n(3),
      o = _(n(26)),
      u = _(n(27)),
      l = (_(n(28)), _(n(29))),
      d = _(n(30)),
      h = _(n(31)),
      f = _(n(32)),
      c = n(1);
    function _(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var m = (function () {
      function e(t, n, i) {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, e),
          (this.TAG = 'IOController'),
          (this._config = n),
          (this._extraData = i),
          (this._stashInitialSize = 393216),
          null != n.stashInitialSize && n.stashInitialSize > 0 && (this._stashInitialSize = n.stashInitialSize),
          (this._stashUsed = 0),
          (this._stashSize = this._stashInitialSize),
          (this._bufferSize = 3145728),
          (this._stashBuffer = new ArrayBuffer(this._bufferSize)),
          (this._stashByteStart = 0),
          (this._enableStash = !0),
          !1 === n.enableStashBuffer && (this._enableStash = !1),
          (this._loader = null),
          (this._loaderClass = null),
          (this._seekHandler = null),
          (this._dataSource = t),
          (this._isWebSocketURL = /wss?:\/\/(.+?)/.test(t.url)),
          (this._refTotalLength = t.filesize ? t.filesize : null),
          (this._totalLength = this._refTotalLength),
          (this._fullRequestFlag = !1),
          (this._currentRange = null),
          (this._redirectedURL = null),
          (this._speedNormalized = 0),
          (this._speedSampler = new a.default()),
          (this._speedNormalizeList = [64, 128, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096]),
          (this._isEarlyEofReconnecting = !1),
          (this._paused = !1),
          (this._resumeFrom = 0),
          (this._onDataArrival = null),
          (this._onSeeked = null),
          (this._onError = null),
          (this._onComplete = null),
          (this._onRedirect = null),
          (this._onRecoveredEarlyEof = null),
          this._selectSeekHandler(),
          this._selectLoader(),
          this._createLoader();
      }
      return (
        i(e, [
          {
            key: 'destroy',
            value: function () {
              this._loader.isWorking() && this._loader.abort(),
                this._loader.destroy(),
                (this._loader = null),
                (this._loaderClass = null),
                (this._dataSource = null),
                (this._stashBuffer = null),
                (this._stashUsed = this._stashSize = this._bufferSize = this._stashByteStart = 0),
                (this._currentRange = null),
                (this._speedSampler = null),
                (this._isEarlyEofReconnecting = !1),
                (this._onDataArrival = null),
                (this._onSeeked = null),
                (this._onError = null),
                (this._onComplete = null),
                (this._onRedirect = null),
                (this._onRecoveredEarlyEof = null),
                (this._extraData = null);
            },
          },
          {
            key: 'isWorking',
            value: function () {
              return this._loader && this._loader.isWorking() && !this._paused;
            },
          },
          {
            key: 'isPaused',
            value: function () {
              return this._paused;
            },
          },
          {
            key: '_selectSeekHandler',
            value: function () {
              var e = this._config;
              if ('range' === e.seekType) this._seekHandler = new h.default(this._config.rangeLoadZeroStart);
              else if ('param' === e.seekType) {
                var t = e.seekParamStart || 'bstart',
                  n = e.seekParamEnd || 'bend';
                this._seekHandler = new f.default(t, n);
              } else {
                if ('custom' !== e.seekType)
                  throw new c.InvalidArgumentException('Invalid seekType in config: ' + e.seekType);
                if ('function' != typeof e.customSeekHandler)
                  throw new c.InvalidArgumentException(
                    'Custom seekType specified in config but invalid customSeekHandler!'
                  );
                this._seekHandler = new e.customSeekHandler();
              }
            },
          },
          {
            key: '_selectLoader',
            value: function () {
              if (this._isWebSocketURL) this._loaderClass = d.default;
              else if (o.default.isSupported()) this._loaderClass = o.default;
              else if (u.default.isSupported()) this._loaderClass = u.default;
              else {
                if (!l.default.isSupported())
                  throw new c.RuntimeException("Your browser doesn't support xhr with arraybuffer responseType!");
                this._loaderClass = l.default;
              }
            },
          },
          {
            key: '_createLoader',
            value: function () {
              (this._loader = new this._loaderClass(this._seekHandler, this._config)),
                !1 === this._loader.needStashBuffer && (this._enableStash = !1),
                (this._loader.onContentLengthKnown = this._onContentLengthKnown.bind(this)),
                (this._loader.onURLRedirect = this._onURLRedirect.bind(this)),
                (this._loader.onDataArrival = this._onLoaderChunkArrival.bind(this)),
                (this._loader.onComplete = this._onLoaderComplete.bind(this)),
                (this._loader.onError = this._onLoaderError.bind(this));
            },
          },
          {
            key: 'open',
            value: function (e) {
              (this._currentRange = { from: 0, to: -1 }),
                e && (this._currentRange.from = e),
                this._speedSampler.reset(),
                e || (this._fullRequestFlag = !0),
                this._loader.open(this._dataSource, Object.assign({}, this._currentRange));
            },
          },
          {
            key: 'abort',
            value: function () {
              this._loader.abort(), this._paused && ((this._paused = !1), (this._resumeFrom = 0));
            },
          },
          {
            key: 'pause',
            value: function () {
              this.isWorking() &&
                (this._loader.abort(),
                0 !== this._stashUsed
                  ? ((this._resumeFrom = this._stashByteStart), (this._currentRange.to = this._stashByteStart - 1))
                  : (this._resumeFrom = this._currentRange.to + 1),
                (this._stashUsed = 0),
                (this._stashByteStart = 0),
                (this._paused = !0));
            },
          },
          {
            key: 'resume',
            value: function () {
              if (this._paused) {
                this._paused = !1;
                var e = this._resumeFrom;
                (this._resumeFrom = 0), this._internalSeek(e, !0);
              }
            },
          },
          {
            key: 'seek',
            value: function (e) {
              (this._paused = !1), (this._stashUsed = 0), (this._stashByteStart = 0), this._internalSeek(e, !0);
            },
          },
          {
            key: '_internalSeek',
            value: function (e, t) {
              this._loader.isWorking() && this._loader.abort(),
                this._flushStashBuffer(t),
                this._loader.destroy(),
                (this._loader = null);
              var n = { from: e, to: -1 };
              (this._currentRange = { from: n.from, to: -1 }),
                this._speedSampler.reset(),
                (this._stashSize = this._stashInitialSize),
                this._createLoader(),
                this._loader.open(this._dataSource, n),
                this._onSeeked && this._onSeeked();
            },
          },
          {
            key: 'updateUrl',
            value: function (e) {
              if (!e || 'string' != typeof e || 0 === e.length)
                throw new c.InvalidArgumentException('Url must be a non-empty string!');
              this._dataSource.url = e;
            },
          },
          {
            key: '_expandBuffer',
            value: function (e) {
              for (var t = this._stashSize; t + 1048576 < e; ) t *= 2;
              if ((t += 1048576) !== this._bufferSize) {
                var n = new ArrayBuffer(t);
                if (this._stashUsed > 0) {
                  var i = new Uint8Array(this._stashBuffer, 0, this._stashUsed);
                  new Uint8Array(n, 0, t).set(i, 0);
                }
                (this._stashBuffer = n), (this._bufferSize = t);
              }
            },
          },
          {
            key: '_normalizeSpeed',
            value: function (e) {
              var t = this._speedNormalizeList,
                n = t.length - 1,
                i = 0,
                r = 0,
                a = n;
              if (e < t[0]) return t[0];
              for (; r <= a; ) {
                if ((i = r + Math.floor((a - r) / 2)) === n || (e >= t[i] && e < t[i + 1])) return t[i];
                t[i] < e ? (r = i + 1) : (a = i - 1);
              }
            },
          },
          {
            key: '_adjustStashSize',
            value: function (e) {
              var t = 0;
              (t = this._config.isLive || e < 512 ? e : e >= 512 && e <= 1024 ? Math.floor(1.5 * e) : 2 * e) > 8192 &&
                (t = 8192);
              var n = 1024 * t + 1048576;
              this._bufferSize < n && this._expandBuffer(n), (this._stashSize = 1024 * t);
            },
          },
          {
            key: '_dispatchChunks',
            value: function (e, t) {
              return (this._currentRange.to = t + e.byteLength - 1), this._onDataArrival(e, t);
            },
          },
          {
            key: '_onURLRedirect',
            value: function (e) {
              (this._redirectedURL = e), this._onRedirect && this._onRedirect(e);
            },
          },
          {
            key: '_onContentLengthKnown',
            value: function (e) {
              e && this._fullRequestFlag && ((this._totalLength = e), (this._fullRequestFlag = !1));
            },
          },
          {
            key: '_onLoaderChunkArrival',
            value: function (e, t, n) {
              if (!this._onDataArrival)
                throw new c.IllegalStateException('IOController: No existing consumer (onDataArrival) callback!');
              if (!this._paused) {
                this._isEarlyEofReconnecting &&
                  ((this._isEarlyEofReconnecting = !1), this._onRecoveredEarlyEof && this._onRecoveredEarlyEof()),
                  this._speedSampler.addBytes(e.byteLength);
                var i = this._speedSampler.lastSecondKBps;
                if (0 !== i) {
                  var r = this._normalizeSpeed(i);
                  this._speedNormalized !== r && ((this._speedNormalized = r), this._adjustStashSize(r));
                }
                if (this._enableStash)
                  if (
                    (0 === this._stashUsed && 0 === this._stashByteStart && (this._stashByteStart = t),
                    this._stashUsed + e.byteLength <= this._stashSize)
                  ) {
                    new Uint8Array(this._stashBuffer, 0, this._stashSize).set(new Uint8Array(e), this._stashUsed),
                      (this._stashUsed += e.byteLength);
                  } else {
                    var a = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
                    if (this._stashUsed > 0) {
                      var s = this._stashBuffer.slice(0, this._stashUsed),
                        o = this._dispatchChunks(s, this._stashByteStart);
                      if (o < s.byteLength) {
                        if (o > 0) {
                          var u = new Uint8Array(s, o);
                          a.set(u, 0), (this._stashUsed = u.byteLength), (this._stashByteStart += o);
                        }
                      } else (this._stashUsed = 0), (this._stashByteStart += o);
                      this._stashUsed + e.byteLength > this._bufferSize &&
                        (this._expandBuffer(this._stashUsed + e.byteLength),
                        (a = new Uint8Array(this._stashBuffer, 0, this._bufferSize))),
                        a.set(new Uint8Array(e), this._stashUsed),
                        (this._stashUsed += e.byteLength);
                    } else {
                      var l = this._dispatchChunks(e, t);
                      if (l < e.byteLength) {
                        var d = e.byteLength - l;
                        d > this._bufferSize &&
                          (this._expandBuffer(d), (a = new Uint8Array(this._stashBuffer, 0, this._bufferSize))),
                          a.set(new Uint8Array(e, l), 0),
                          (this._stashUsed += d),
                          (this._stashByteStart = t + l);
                      }
                    }
                  }
                else if (0 === this._stashUsed) {
                  var h = this._dispatchChunks(e, t);
                  if (h < e.byteLength) {
                    var f = e.byteLength - h;
                    f > this._bufferSize && this._expandBuffer(f),
                      new Uint8Array(this._stashBuffer, 0, this._bufferSize).set(new Uint8Array(e, h), 0),
                      (this._stashUsed += f),
                      (this._stashByteStart = t + h);
                  }
                } else {
                  this._stashUsed + e.byteLength > this._bufferSize &&
                    this._expandBuffer(this._stashUsed + e.byteLength);
                  var _ = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
                  _.set(new Uint8Array(e), this._stashUsed), (this._stashUsed += e.byteLength);
                  var m = this._dispatchChunks(this._stashBuffer.slice(0, this._stashUsed), this._stashByteStart);
                  if (m < this._stashUsed && m > 0) {
                    var p = new Uint8Array(this._stashBuffer, m);
                    _.set(p, 0);
                  }
                  (this._stashUsed -= m), (this._stashByteStart += m);
                }
              }
            },
          },
          {
            key: '_flushStashBuffer',
            value: function (e) {
              if (this._stashUsed > 0) {
                var t = this._stashBuffer.slice(0, this._stashUsed),
                  n = this._dispatchChunks(t, this._stashByteStart),
                  i = t.byteLength - n;
                if (n < t.byteLength) {
                  if (!e) {
                    if (n > 0) {
                      var a = new Uint8Array(this._stashBuffer, 0, this._bufferSize),
                        s = new Uint8Array(t, n);
                      a.set(s, 0), (this._stashUsed = s.byteLength), (this._stashByteStart += n);
                    }
                    return 0;
                  }
                  r.default.w(this.TAG, i + ' bytes unconsumed data remain when flush buffer, dropped');
                }
                return (this._stashUsed = 0), (this._stashByteStart = 0), i;
              }
              return 0;
            },
          },
          {
            key: '_onLoaderComplete',
            value: function (e, t) {
              this._flushStashBuffer(!0), this._onComplete && this._onComplete(this._extraData);
            },
          },
          {
            key: '_onLoaderError',
            value: function (e, t) {
              switch (
                (r.default.e(this.TAG, 'Loader error, code = ' + t.code + ', msg = ' + t.msg),
                this._flushStashBuffer(!1),
                this._isEarlyEofReconnecting &&
                  ((this._isEarlyEofReconnecting = !1), (e = s.LoaderErrors.UNRECOVERABLE_EARLY_EOF)),
                e)
              ) {
                case s.LoaderErrors.EARLY_EOF:
                  if (!this._config.isLive && this._totalLength) {
                    var n = this._currentRange.to + 1;
                    return void (
                      n < this._totalLength &&
                      (r.default.w(this.TAG, 'Connection lost, trying reconnect...'),
                      (this._isEarlyEofReconnecting = !0),
                      this._internalSeek(n, !1))
                    );
                  }
                  e = s.LoaderErrors.UNRECOVERABLE_EARLY_EOF;
                  break;
                case s.LoaderErrors.UNRECOVERABLE_EARLY_EOF:
                case s.LoaderErrors.CONNECTING_TIMEOUT:
                case s.LoaderErrors.HTTP_STATUS_CODE_INVALID:
                case s.LoaderErrors.EXCEPTION:
              }
              if (!this._onError) throw new c.RuntimeException('IOException: ' + t.msg);
              this._onError(e, t);
            },
          },
          {
            key: 'status',
            get: function () {
              return this._loader.status;
            },
          },
          {
            key: 'extraData',
            get: function () {
              return this._extraData;
            },
            set: function (e) {
              this._extraData = e;
            },
          },
          {
            key: 'onDataArrival',
            get: function () {
              return this._onDataArrival;
            },
            set: function (e) {
              this._onDataArrival = e;
            },
          },
          {
            key: 'onSeeked',
            get: function () {
              return this._onSeeked;
            },
            set: function (e) {
              this._onSeeked = e;
            },
          },
          {
            key: 'onError',
            get: function () {
              return this._onError;
            },
            set: function (e) {
              this._onError = e;
            },
          },
          {
            key: 'onComplete',
            get: function () {
              return this._onComplete;
            },
            set: function (e) {
              this._onComplete = e;
            },
          },
          {
            key: 'onRedirect',
            get: function () {
              return this._onRedirect;
            },
            set: function (e) {
              this._onRedirect = e;
            },
          },
          {
            key: 'onRecoveredEarlyEof',
            get: function () {
              return this._onRecoveredEarlyEof;
            },
            set: function (e) {
              this._onRecoveredEarlyEof = e;
            },
          },
          {
            key: 'currentURL',
            get: function () {
              return this._dataSource.url;
            },
          },
          {
            key: 'hasRedirect',
            get: function () {
              return null != this._redirectedURL || null != this._dataSource.redirectedURL;
            },
          },
          {
            key: 'currentRedirectedURL',
            get: function () {
              return this._redirectedURL || this._dataSource.redirectedURL;
            },
          },
          {
            key: 'currentSpeed',
            get: function () {
              return this._loaderClass === l.default ? this._loader.currentSpeed : this._speedSampler.lastSecondKBps;
            },
          },
          {
            key: 'loaderType',
            get: function () {
              return this._loader.type;
            },
          },
        ]),
        e
      );
    })();
    (t.default = m), (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
      };
    })();
    var r = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, e),
          (this._firstCheckpoint = 0),
          (this._lastCheckpoint = 0),
          (this._intervalBytes = 0),
          (this._totalBytes = 0),
          (this._lastSecondBytes = 0),
          self.performance && self.performance.now
            ? (this._now = self.performance.now.bind(self.performance))
            : (this._now = Date.now);
      }
      return (
        i(e, [
          {
            key: 'reset',
            value: function () {
              (this._firstCheckpoint = this._lastCheckpoint = 0),
                (this._totalBytes = this._intervalBytes = 0),
                (this._lastSecondBytes = 0);
            },
          },
          {
            key: 'addBytes',
            value: function (e) {
              0 === this._firstCheckpoint
                ? ((this._firstCheckpoint = this._now()),
                  (this._lastCheckpoint = this._firstCheckpoint),
                  (this._intervalBytes += e),
                  (this._totalBytes += e))
                : this._now() - this._lastCheckpoint < 1e3
                ? ((this._intervalBytes += e), (this._totalBytes += e))
                : ((this._lastSecondBytes = this._intervalBytes),
                  (this._intervalBytes = e),
                  (this._totalBytes += e),
                  (this._lastCheckpoint = this._now()));
            },
          },
          {
            key: 'currentKBps',
            get: function () {
              this.addBytes(0);
              var e = (this._now() - this._lastCheckpoint) / 1e3;
              return 0 == e && (e = 1), this._intervalBytes / e / 1024;
            },
          },
          {
            key: 'lastSecondKBps',
            get: function () {
              return (
                this.addBytes(0),
                0 !== this._lastSecondBytes
                  ? this._lastSecondBytes / 1024
                  : this._now() - this._lastCheckpoint >= 500
                  ? this.currentKBps
                  : 0
              );
            },
          },
          {
            key: 'averageKBps',
            get: function () {
              var e = (this._now() - this._firstCheckpoint) / 1e3;
              return this._totalBytes / e / 1024;
            },
          },
        ]),
        e
      );
    })();
    (t.default = r), (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      r = c(n(2)),
      a = c(n(0)),
      s = c(n(4)),
      o = c(n(9)),
      u = c(n(35)),
      l = c(n(40)),
      d = c(n(10)),
      h = c(n(12)),
      f = c(n(5));
    n(3);
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var _ = (function () {
      function e(t, n) {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, e),
          (this.TAG = 'TransmuxingController'),
          (this._emitter = new r.default()),
          (this._config = n),
          t.segments || (t.segments = [{ duration: t.duration, filesize: t.filesize, url: t.url }]),
          'boolean' != typeof t.cors && (t.cors = !0),
          'boolean' != typeof t.withCredentials && (t.withCredentials = !1),
          (this._mediaDataSource = t),
          (this._currentSegmentIndex = 0);
        var i = 0;
        this._mediaDataSource.segments.forEach(function (e) {
          (e.timestampBase = i),
            (i += e.duration),
            (e.cors = t.cors),
            (e.withCredentials = t.withCredentials),
            n.referrerPolicy && (e.referrerPolicy = n.referrerPolicy);
        }),
          isNaN(i) || this._mediaDataSource.duration === i || (this._mediaDataSource.duration = i),
          (this._mediaInfo = null),
          (this._demuxer = null),
          (this._remuxer = null),
          (this._ioctl = null),
          (this._pendingSeekTime = null),
          (this._pendingResolveSeekPoint = null),
          (this._statisticsReporter = null);
      }
      return (
        i(e, [
          {
            key: 'destroy',
            value: function () {
              (this._mediaInfo = null),
                (this._mediaDataSource = null),
                this._statisticsReporter && this._disableStatisticsReporter(),
                this._ioctl && (this._ioctl.destroy(), (this._ioctl = null)),
                this._demuxer && (this._demuxer.destroy(), (this._demuxer = null)),
                this._remuxer && (this._remuxer.destroy(), (this._remuxer = null)),
                this._emitter.removeAllListeners(),
                (this._emitter = null);
            },
          },
          {
            key: 'on',
            value: function (e, t) {
              this._emitter.addListener(e, t);
            },
          },
          {
            key: 'off',
            value: function (e, t) {
              this._emitter.removeListener(e, t);
            },
          },
          {
            key: 'start',
            value: function () {
              this._loadSegment(0), this._enableStatisticsReporter();
            },
          },
          {
            key: '_loadSegment',
            value: function (e, t) {
              this._currentSegmentIndex = e;
              var n = this._mediaDataSource.segments[e],
                i = (this._ioctl = new h.default(n, this._config, e));
              (i.onError = this._onIOException.bind(this)),
                (i.onSeeked = this._onIOSeeked.bind(this)),
                (i.onComplete = this._onIOComplete.bind(this)),
                (i.onRedirect = this._onIORedirect.bind(this)),
                (i.onRecoveredEarlyEof = this._onIORecoveredEarlyEof.bind(this)),
                t ? this._demuxer.bindDataSource(this._ioctl) : (i.onDataArrival = this._onInitChunkArrival.bind(this)),
                i.open(t);
            },
          },
          {
            key: 'stop',
            value: function () {
              this._internalAbort(), this._disableStatisticsReporter();
            },
          },
          {
            key: '_internalAbort',
            value: function () {
              this._ioctl && (this._ioctl.destroy(), (this._ioctl = null));
            },
          },
          {
            key: 'pause',
            value: function () {
              this._ioctl && this._ioctl.isWorking() && (this._ioctl.pause(), this._disableStatisticsReporter());
            },
          },
          {
            key: 'resume',
            value: function () {
              this._ioctl && this._ioctl.isPaused() && (this._ioctl.resume(), this._enableStatisticsReporter());
            },
          },
          {
            key: 'seek',
            value: function (e) {
              if (null != this._mediaInfo && this._mediaInfo.isSeekable()) {
                var t = this._searchSegmentIndexContains(e);
                if (t === this._currentSegmentIndex) {
                  var n = this._mediaInfo.segments[t];
                  if (null == n) this._pendingSeekTime = e;
                  else {
                    var i = n.getNearestKeyframe(e);
                    this._remuxer.seek(i.milliseconds),
                      this._ioctl.seek(i.fileposition),
                      (this._pendingResolveSeekPoint = i.milliseconds);
                  }
                } else {
                  var r = this._mediaInfo.segments[t];
                  if (null == r)
                    (this._pendingSeekTime = e),
                      this._internalAbort(),
                      this._remuxer.seek(),
                      this._remuxer.insertDiscontinuity(),
                      this._loadSegment(t);
                  else {
                    var a = r.getNearestKeyframe(e);
                    this._internalAbort(),
                      this._remuxer.seek(e),
                      this._remuxer.insertDiscontinuity(),
                      this._demuxer.resetMediaInfo(),
                      (this._demuxer.timestampBase = this._mediaDataSource.segments[t].timestampBase),
                      this._loadSegment(t, a.fileposition),
                      (this._pendingResolveSeekPoint = a.milliseconds),
                      this._reportSegmentMediaInfo(t);
                  }
                }
                this._enableStatisticsReporter();
              }
            },
          },
          {
            key: '_searchSegmentIndexContains',
            value: function (e) {
              for (var t = this._mediaDataSource.segments, n = t.length - 1, i = 0; i < t.length; i++)
                if (e < t[i].timestampBase) {
                  n = i - 1;
                  break;
                }
              return n;
            },
          },
          {
            key: '_onInitChunkArrival',
            value: function (e, t) {
              var n = this,
                i = null,
                r = 0;
              if (t > 0)
                this._demuxer.bindDataSource(this._ioctl),
                  (this._demuxer.timestampBase =
                    this._mediaDataSource.segments[this._currentSegmentIndex].timestampBase),
                  (r = this._demuxer.parseChunks(e, t));
              else if ((i = u.default.probe(e)).match) {
                (this._demuxer = new u.default(i, this._config)),
                  this._remuxer || (this._remuxer = new l.default(this._config));
                var s = this._mediaDataSource;
                null == s.duration || isNaN(s.duration) || (this._demuxer.overridedDuration = s.duration),
                  'boolean' == typeof s.hasAudio && (this._demuxer.overridedHasAudio = s.hasAudio),
                  'boolean' == typeof s.hasVideo && (this._demuxer.overridedHasVideo = s.hasVideo),
                  (this._demuxer.timestampBase = s.segments[this._currentSegmentIndex].timestampBase),
                  (this._demuxer.onError = this._onDemuxException.bind(this)),
                  (this._demuxer.onMediaInfo = this._onMediaInfo.bind(this)),
                  (this._demuxer.onLoadedSei = this._onLoadedSei.bind(this)),
                  this._remuxer.bindDataSource(this._demuxer.bindDataSource(this._ioctl)),
                  (this._remuxer.onInitSegment = this._onRemuxerInitSegmentArrival.bind(this)),
                  (this._remuxer.onMediaSegment = this._onRemuxerMediaSegmentArrival.bind(this)),
                  (r = this._demuxer.parseChunks(e, t));
              } else
                (i = null),
                  a.default.e(this.TAG, 'Non-FLV, Unsupported media type!'),
                  Promise.resolve().then(function () {
                    n._internalAbort();
                  }),
                  this._emitter.emit(
                    f.default.DEMUX_ERROR,
                    d.default.FORMAT_UNSUPPORTED,
                    'Non-FLV, Unsupported media type'
                  ),
                  (r = 0);
              return r;
            },
          },
          {
            key: '_onMediaInfo',
            value: function (e) {
              var t = this;
              null == this._mediaInfo &&
                ((this._mediaInfo = Object.assign({}, e)),
                (this._mediaInfo.keyframesIndex = null),
                (this._mediaInfo.segments = []),
                (this._mediaInfo.segmentCount = this._mediaDataSource.segments.length),
                Object.setPrototypeOf(this._mediaInfo, o.default.prototype));
              var n = Object.assign({}, e);
              Object.setPrototypeOf(n, o.default.prototype),
                (this._mediaInfo.segments[this._currentSegmentIndex] = n),
                this._reportSegmentMediaInfo(this._currentSegmentIndex),
                null != this._pendingSeekTime &&
                  Promise.resolve().then(function () {
                    var e = t._pendingSeekTime;
                    (t._pendingSeekTime = null), t.seek(e);
                  });
            },
          },
          {
            key: '_onLoadedSei',
            value: function (e, t) {
              this._emitter.emit(f.default.LOADED_SEI, e, t);
            },
          },
          {
            key: '_onIOSeeked',
            value: function () {
              this._remuxer.insertDiscontinuity();
            },
          },
          {
            key: '_onIOComplete',
            value: function (e) {
              var t = e + 1;
              t < this._mediaDataSource.segments.length
                ? (this._internalAbort(), this._remuxer.flushStashedSamples(), this._loadSegment(t))
                : (this._remuxer.flushStashedSamples(),
                  this._emitter.emit(f.default.LOADING_COMPLETE),
                  this._disableStatisticsReporter());
            },
          },
          {
            key: '_onIORedirect',
            value: function (e) {
              var t = this._ioctl.extraData;
              this._mediaDataSource.segments[t].redirectedURL = e;
            },
          },
          {
            key: '_onIORecoveredEarlyEof',
            value: function () {
              this._emitter.emit(f.default.RECOVERED_EARLY_EOF);
            },
          },
          {
            key: '_onIOException',
            value: function (e, t) {
              a.default.e(this.TAG, 'IOException: type = ' + e + ', code = ' + t.code + ', msg = ' + t.msg),
                this._emitter.emit(f.default.IO_ERROR, e, t),
                this._disableStatisticsReporter();
            },
          },
          {
            key: '_onDemuxException',
            value: function (e, t) {
              a.default.e(this.TAG, 'DemuxException: type = ' + e + ', info = ' + t),
                this._emitter.emit(f.default.DEMUX_ERROR, e, t);
            },
          },
          {
            key: '_onRemuxerInitSegmentArrival',
            value: function (e, t) {
              this._emitter.emit(f.default.INIT_SEGMENT, e, t);
            },
          },
          {
            key: '_onRemuxerMediaSegmentArrival',
            value: function (e, t) {
              if (
                null == this._pendingSeekTime &&
                (this._emitter.emit(f.default.MEDIA_SEGMENT, e, t),
                null != this._pendingResolveSeekPoint && 'video' === e)
              ) {
                var n = t.info.syncPoints,
                  i = this._pendingResolveSeekPoint;
                (this._pendingResolveSeekPoint = null),
                  s.default.safari && n.length > 0 && n[0].originalDts === i && (i = n[0].pts),
                  this._emitter.emit(f.default.RECOMMEND_SEEKPOINT, i);
              }
            },
          },
          {
            key: '_enableStatisticsReporter',
            value: function () {
              null == this._statisticsReporter &&
                (this._statisticsReporter = self.setInterval(
                  this._reportStatisticsInfo.bind(this),
                  this._config.statisticsInfoReportInterval
                ));
            },
          },
          {
            key: '_disableStatisticsReporter',
            value: function () {
              this._statisticsReporter &&
                (self.clearInterval(this._statisticsReporter), (this._statisticsReporter = null));
            },
          },
          {
            key: '_reportSegmentMediaInfo',
            value: function (e) {
              var t = this._mediaInfo.segments[e],
                n = Object.assign({}, t);
              (n.duration = this._mediaInfo.duration),
                (n.segmentCount = this._mediaInfo.segmentCount),
                delete n.segments,
                delete n.keyframesIndex,
                this._emitter.emit(f.default.MEDIA_INFO, n);
            },
          },
          {
            key: '_reportStatisticsInfo',
            value: function () {
              var e = {};
              (e.url = this._ioctl.currentURL),
                (e.hasRedirect = this._ioctl.hasRedirect),
                e.hasRedirect && (e.redirectedURL = this._ioctl.currentRedirectedURL),
                (e.speed = this._ioctl.currentSpeed),
                (e.loaderType = this._ioctl.loaderType),
                (e.currentSegmentIndex = this._currentSegmentIndex),
                (e.totalSegmentCount = this._mediaDataSource.segments.length),
                this._emitter.emit(f.default.STATISTICS_INFO, e);
            },
          },
        ]),
        e
      );
    })();
    (t.default = _), (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
      };
    })();
    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    (t.SampleInfo = function e(t, n, i, a, s) {
      r(this, e),
        (this.dts = t),
        (this.pts = n),
        (this.duration = i),
        (this.originalDts = a),
        (this.isSyncPoint = s),
        (this.fileposition = null);
    }),
      (t.MediaSegmentInfo = (function () {
        function e() {
          r(this, e),
            (this.beginDts = 0),
            (this.endDts = 0),
            (this.beginPts = 0),
            (this.endPts = 0),
            (this.originalBeginDts = 0),
            (this.originalEndDts = 0),
            (this.syncPoints = []),
            (this.firstSample = null),
            (this.lastSample = null);
        }
        return (
          i(e, [
            {
              key: 'appendSyncPoint',
              value: function (e) {
                (e.isSyncPoint = !0), this.syncPoints.push(e);
              },
            },
          ]),
          e
        );
      })()),
      (t.IDRSampleList = (function () {
        function e() {
          r(this, e), (this._list = []);
        }
        return (
          i(e, [
            {
              key: 'clear',
              value: function () {
                this._list = [];
              },
            },
            {
              key: 'appendArray',
              value: function (e) {
                var t = this._list;
                0 !== e.length &&
                  (t.length > 0 && e[0].originalDts < t[t.length - 1].originalDts && this.clear(),
                  Array.prototype.push.apply(t, e));
              },
            },
            {
              key: 'getLastSyncPointBeforeDts',
              value: function (e) {
                if (0 == this._list.length) return null;
                var t = this._list,
                  n = 0,
                  i = t.length - 1,
                  r = 0,
                  a = 0,
                  s = i;
                for (e < t[0].dts && ((n = 0), (a = s + 1)); a <= s; ) {
                  if ((r = a + Math.floor((s - a) / 2)) === i || (e >= t[r].dts && e < t[r + 1].dts)) {
                    n = r;
                    break;
                  }
                  t[r].dts < e ? (a = r + 1) : (s = r - 1);
                }
                return this._list[n];
              },
            },
          ]),
          e
        );
      })()),
      (t.MediaSegmentInfoList = (function () {
        function e(t) {
          r(this, e), (this._type = t), (this._list = []), (this._lastAppendLocation = -1);
        }
        return (
          i(e, [
            {
              key: 'isEmpty',
              value: function () {
                return 0 === this._list.length;
              },
            },
            {
              key: 'clear',
              value: function () {
                (this._list = []), (this._lastAppendLocation = -1);
              },
            },
            {
              key: '_searchNearestSegmentBefore',
              value: function (e) {
                var t = this._list;
                if (0 === t.length) return -2;
                var n = t.length - 1,
                  i = 0,
                  r = 0,
                  a = n,
                  s = 0;
                if (e < t[0].originalBeginDts) return (s = -1);
                for (; r <= a; ) {
                  if (
                    (i = r + Math.floor((a - r) / 2)) === n ||
                    (e > t[i].lastSample.originalDts && e < t[i + 1].originalBeginDts)
                  ) {
                    s = i;
                    break;
                  }
                  t[i].originalBeginDts < e ? (r = i + 1) : (a = i - 1);
                }
                return s;
              },
            },
            {
              key: '_searchNearestSegmentAfter',
              value: function (e) {
                return this._searchNearestSegmentBefore(e) + 1;
              },
            },
            {
              key: 'append',
              value: function (e) {
                var t = this._list,
                  n = e,
                  i = this._lastAppendLocation,
                  r = 0;
                -1 !== i &&
                i < t.length &&
                n.originalBeginDts >= t[i].lastSample.originalDts &&
                (i === t.length - 1 || (i < t.length - 1 && n.originalBeginDts < t[i + 1].originalBeginDts))
                  ? (r = i + 1)
                  : t.length > 0 && (r = this._searchNearestSegmentBefore(n.originalBeginDts) + 1),
                  (this._lastAppendLocation = r),
                  this._list.splice(r, 0, n);
              },
            },
            {
              key: 'getLastSegmentBefore',
              value: function (e) {
                var t = this._searchNearestSegmentBefore(e);
                return t >= 0 ? this._list[t] : null;
              },
            },
            {
              key: 'getLastSampleBefore',
              value: function (e) {
                var t = this.getLastSegmentBefore(e);
                return null != t ? t.lastSample : null;
              },
            },
            {
              key: 'getLastSyncPointBefore',
              value: function (e) {
                for (
                  var t = this._searchNearestSegmentBefore(e), n = this._list[t].syncPoints;
                  0 === n.length && t > 0;

                )
                  t--, (n = this._list[t].syncPoints);
                return n.length > 0 ? n[n.length - 1] : null;
              },
            },
            {
              key: 'type',
              get: function () {
                return this._type;
              },
            },
            {
              key: 'length',
              get: function () {
                return this._list.length;
              },
            },
          ]),
          e
        );
      })());
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    (t.default = { ERROR: 'error', SOURCE_OPEN: 'source_open', UPDATE_END: 'update_end', BUFFER_FULL: 'buffer_full' }),
      (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.ErrorDetails = t.ErrorTypes = void 0);
    var i,
      r = n(3),
      a = n(10),
      s = (i = a) && i.__esModule ? i : { default: i };
    (t.ErrorTypes = { NETWORK_ERROR: 'NetworkError', MEDIA_ERROR: 'MediaError', OTHER_ERROR: 'OtherError' }),
      (t.ErrorDetails = {
        NETWORK_EXCEPTION: r.LoaderErrors.EXCEPTION,
        NETWORK_STATUS_CODE_INVALID: r.LoaderErrors.HTTP_STATUS_CODE_INVALID,
        NETWORK_TIMEOUT: r.LoaderErrors.CONNECTING_TIMEOUT,
        NETWORK_UNRECOVERABLE_EARLY_EOF: r.LoaderErrors.UNRECOVERABLE_EARLY_EOF,
        MEDIA_MSE_ERROR: 'MediaMSEError',
        MEDIA_FORMAT_ERROR: s.default.FORMAT_ERROR,
        MEDIA_FORMAT_UNSUPPORTED: s.default.FORMAT_UNSUPPORTED,
        MEDIA_CODEC_UNSUPPORTED: s.default.CODEC_UNSUPPORTED,
      });
  },
  function (e, t, n) {
    e.exports = n(19);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      r = s(n(20)),
      a = s(n(21));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var o = (function (e) {
      function t(e) {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, t);
        var n = (function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        (n.flvOpts = { type: 'flv' }),
          (n.optionalConfig = {}),
          r.default.util.deepCopy(n.flvOpts, e),
          r.default.util.deepCopy(n.optionalConfig, e.flvOptionalConfig);
        var i = n;
        return (
          Object.defineProperty(i, 'src', {
            get: function () {
              return i.currentSrc;
            },
            set: function (e) {
              i.flv_load(e);
              i.volume;
              (i.video.muted = !0),
                r.default.util.addClass(i.root, 'xgplayer-is-enter'),
                i.once('playing', function () {
                  r.default.util.removeClass(i.root, 'xgplayer-is-enter'), (i.video.muted = !1);
                }),
                i.once('canplay', function () {
                  i.play();
                });
            },
            configurable: !0,
          }),
          i.once('complete', function () {
            if (
              ((i.__flv__ = a.default.createPlayer(n.flvOpts, n.optionalConfig)),
              i.createInstance(i.__flv__),
              i.config.isLive)
            ) {
              r.default.util.addClass(i.root, 'xgplayer-is-live');
              var e = r.default.util.createDom('xg-live', '姝ｅ湪鐩存挱', {}, 'xgplayer-live');
              i.controls.appendChild(e);
            }
          }),
          n
        );
      }
      return (
        (function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
        })(t, e),
        i(t, [
          {
            key: 'createInstance',
            value: function (e) {
              var t = this;
              t.video.addEventListener('contextmenu', function (e) {
                e.preventDefault();
              }),
                e.attachMediaElement(t.video),
                e.load(),
                e.play(),
                e.on(a.default.Events.ERROR, function (e) {
                  t.emit('error', new r.default.Errors('other', t.config.url));
                }),
                e.on(a.default.Events.LOADED_SEI, function (e, n) {
                  t.emit('loaded_sei', e, n);
                }),
                e.on(a.default.Events.STATISTICS_INFO, function (e) {
                  t.emit('statistics_info', e);
                }),
                e.on(a.default.Events.MEDIA_INFO, function (e) {
                  (t.mediainfo = e), t.emit('MEDIA_INFO', e);
                }),
                t.once('destroy', function () {
                  e.destroy(), (t.__flv__ = null);
                });
            },
          },
          {
            key: 'flv_load',
            value: function (e) {
              var t = this.flvOpts;
              (t.segments = [
                { cors: !0, duration: void 0, filesize: void 0, timestampBase: 0, url: e, withCredentials: !1 },
              ]),
                (t.url = e),
                this.flv_load_mds(t);
            },
          },
          {
            key: 'flv_load_mds',
            value: function (e) {
              void 0 !== this.__flv__ &&
                null != this.__flv__ &&
                (this.__flv__.unload(),
                this.__flv__.detachMediaElement(),
                this.__flv__.destroy(),
                (this.__flv__ = null)),
                (this.__flv__ = a.default.createPlayer(e, this.optionalConfig)),
                this.__flv__.attachMediaElement(this.video),
                this.__flv__.load();
            },
          },
          {
            key: 'switchURL',
            value: function (e) {
              var t = this,
                n = 0;
              t.config.isLive || (n = t.currentTime), t.flv_load(e);
              t.volume;
              (t.video.muted = !0),
                r.default.util.addClass(t.root, 'xgplayer-is-enter'),
                t.once('playing', function () {
                  r.default.util.removeClass(t.root, 'xgplayer-is-enter'), (t.video.muted = !1);
                }),
                t.once('canplay', function () {
                  t.config.isLive || (t.currentTime = n), t.play();
                });
            },
          },
        ]),
        t
      );
    })(r.default);
    (o.isSupported = a.default.isSupported), (t.default = o), (e.exports = t.default);
  },
  function (e, t) {
    e.exports = window.Player;
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            },
      r = f(n(11)),
      a = f(n(25)),
      s = f(n(33)),
      o = f(n(46)),
      u = f(n(7)),
      l = n(17),
      d = f(n(8)),
      h = n(1);
    function f(e) {
      return e && e.__esModule ? e : { default: e };
    }
    r.default.install();
    var c = {
      createPlayer: function (e, t) {
        var n = e;
        if (null == n || 'object' !== (void 0 === n ? 'undefined' : i(n)))
          throw new h.InvalidArgumentException('MediaDataSource must be an javascript object!');
        if (!n.hasOwnProperty('type'))
          throw new h.InvalidArgumentException('MediaDataSource must has type field to indicate video file type!');
        switch (n.type) {
          case 'flv':
            return new s.default(n, t);
          default:
            return new o.default(n, t);
        }
      },
      isSupported: function () {
        return a.default.supportMSEH264Playback();
      },
      getFeatureList: function () {
        return a.default.getFeatureList();
      },
    };
    (c.Events = u.default),
      (c.ErrorTypes = l.ErrorTypes),
      (c.ErrorDetails = l.ErrorDetails),
      (c.FlvPlayer = s.default),
      (c.NativePlayer = o.default),
      (c.LoggingControl = d.default),
      Object.defineProperty(c, 'version', {
        enumerable: !0,
        get: function () {
          return '__VERSION__';
        },
      }),
      (t.default = c),
      (e.exports = t.default);
  },
  function (e, t, n) {
    (function (t, n) {
      /*!
       * @overview es6-promise - a tiny implementation of Promises/A+.
       * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
       * @license   Licensed under MIT license
       *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
       * @version   v4.2.8+1e68dce6
       */ var i;
      (i = function () {
        function e(e) {
          return 'function' == typeof e;
        }
        var i = Array.isArray
            ? Array.isArray
            : function (e) {
                return '[object Array]' === Object.prototype.toString.call(e);
              },
          r = 0,
          a = void 0,
          s = void 0,
          o = function (e, t) {
            (_[r] = e), (_[r + 1] = t), 2 === (r += 2) && (s ? s(m) : E());
          },
          u = 'undefined' != typeof window ? window : void 0,
          l = u || {},
          d = l.MutationObserver || l.WebKitMutationObserver,
          h = 'undefined' == typeof self && void 0 !== t && '[object process]' === {}.toString.call(t),
          f =
            'undefined' != typeof Uint8ClampedArray &&
            'undefined' != typeof importScripts &&
            'undefined' != typeof MessageChannel;
        function c() {
          var e = setTimeout;
          return function () {
            return e(m, 1);
          };
        }
        var _ = new Array(1e3);
        function m() {
          for (var e = 0; e < r; e += 2) (0, _[e])(_[e + 1]), (_[e] = void 0), (_[e + 1] = void 0);
          r = 0;
        }
        var p,
          v,
          g,
          y,
          E = void 0;
        function b(e, t) {
          var n = this,
            i = new this.constructor(L);
          void 0 === i[k] && D(i);
          var r = n._state;
          if (r) {
            var a = arguments[r - 1];
            o(function () {
              return M(r, i, a, n._result);
            });
          } else C(n, i, e, t);
          return i;
        }
        function S(e) {
          if (e && 'object' == typeof e && e.constructor === this) return e;
          var t = new this(L);
          return R(t, e), t;
        }
        h
          ? (E = function () {
              return t.nextTick(m);
            })
          : d
          ? ((v = 0),
            (g = new d(m)),
            (y = document.createTextNode('')),
            g.observe(y, { characterData: !0 }),
            (E = function () {
              y.data = v = ++v % 2;
            }))
          : f
          ? (((p = new MessageChannel()).port1.onmessage = m),
            (E = function () {
              return p.port2.postMessage(0);
            }))
          : (E =
              void 0 === u
                ? (function () {
                    try {
                      var e = Function('return this')().require('vertx');
                      return void 0 !== (a = e.runOnLoop || e.runOnContext)
                        ? function () {
                            a(m);
                          }
                        : c();
                    } catch (e) {
                      return c();
                    }
                  })()
                : c());
        var k = Math.random().toString(36).substring(2);
        function L() {}
        function w(t, n, i) {
          n.constructor === t.constructor && i === b && n.constructor.resolve === S
            ? (function (e, t) {
                1 === t._state
                  ? O(e, t._result)
                  : 2 === t._state
                  ? T(e, t._result)
                  : C(
                      t,
                      void 0,
                      function (t) {
                        return R(e, t);
                      },
                      function (t) {
                        return T(e, t);
                      }
                    );
              })(t, n)
            : void 0 === i
            ? O(t, n)
            : e(i)
            ? (function (e, t, n) {
                o(function (e) {
                  var i = !1,
                    r = (function (e, t, n, i) {
                      try {
                        e.call(t, n, i);
                      } catch (e) {
                        return e;
                      }
                    })(
                      n,
                      t,
                      function (n) {
                        i || ((i = !0), t !== n ? R(e, n) : O(e, n));
                      },
                      function (t) {
                        i || ((i = !0), T(e, t));
                      },
                      e._label
                    );
                  !i && r && ((i = !0), T(e, r));
                }, e);
              })(t, n, i)
            : O(t, n);
        }
        function R(e, t) {
          if (e === t) T(e, new TypeError('You cannot resolve a promise with itself'));
          else if (((r = typeof (i = t)), null === i || ('object' !== r && 'function' !== r))) O(e, t);
          else {
            var n = void 0;
            try {
              n = t.then;
            } catch (t) {
              return void T(e, t);
            }
            w(e, t, n);
          }
          var i, r;
        }
        function A(e) {
          e._onerror && e._onerror(e._result), I(e);
        }
        function O(e, t) {
          void 0 === e._state && ((e._result = t), (e._state = 1), 0 !== e._subscribers.length && o(I, e));
        }
        function T(e, t) {
          void 0 === e._state && ((e._state = 2), (e._result = t), o(A, e));
        }
        function C(e, t, n, i) {
          var r = e._subscribers,
            a = r.length;
          (e._onerror = null), (r[a] = t), (r[a + 1] = n), (r[a + 2] = i), 0 === a && e._state && o(I, e);
        }
        function I(e) {
          var t = e._subscribers,
            n = e._state;
          if (0 !== t.length) {
            for (var i = void 0, r = void 0, a = e._result, s = 0; s < t.length; s += 3)
              (i = t[s]), (r = t[s + n]), i ? M(n, i, r, a) : r(a);
            e._subscribers.length = 0;
          }
        }
        function M(t, n, i, r) {
          var a = e(i),
            s = void 0,
            o = void 0,
            u = !0;
          if (a) {
            try {
              s = i(r);
            } catch (e) {
              (u = !1), (o = e);
            }
            if (n === s) return void T(n, new TypeError('A promises callback cannot return that same promise.'));
          } else s = r;
          void 0 !== n._state || (a && u ? R(n, s) : !1 === u ? T(n, o) : 1 === t ? O(n, s) : 2 === t && T(n, s));
        }
        var x = 0;
        function D(e) {
          (e[k] = x++), (e._state = void 0), (e._result = void 0), (e._subscribers = []);
        }
        var B = (function () {
            function e(e, t) {
              (this._instanceConstructor = e),
                (this.promise = new e(L)),
                this.promise[k] || D(this.promise),
                i(t)
                  ? ((this.length = t.length),
                    (this._remaining = t.length),
                    (this._result = new Array(this.length)),
                    0 === this.length
                      ? O(this.promise, this._result)
                      : ((this.length = this.length || 0),
                        this._enumerate(t),
                        0 === this._remaining && O(this.promise, this._result)))
                  : T(this.promise, new Error('Array Methods must be provided an Array'));
            }
            return (
              (e.prototype._enumerate = function (e) {
                for (var t = 0; void 0 === this._state && t < e.length; t++) this._eachEntry(e[t], t);
              }),
              (e.prototype._eachEntry = function (e, t) {
                var n = this._instanceConstructor,
                  i = n.resolve;
                if (i === S) {
                  var r = void 0,
                    a = void 0,
                    s = !1;
                  try {
                    r = e.then;
                  } catch (e) {
                    (s = !0), (a = e);
                  }
                  if (r === b && void 0 !== e._state) this._settledAt(e._state, t, e._result);
                  else if ('function' != typeof r) this._remaining--, (this._result[t] = e);
                  else if (n === P) {
                    var o = new n(L);
                    s ? T(o, a) : w(o, e, r), this._willSettleAt(o, t);
                  } else
                    this._willSettleAt(
                      new n(function (t) {
                        return t(e);
                      }),
                      t
                    );
                } else this._willSettleAt(i(e), t);
              }),
              (e.prototype._settledAt = function (e, t, n) {
                var i = this.promise;
                void 0 === i._state && (this._remaining--, 2 === e ? T(i, n) : (this._result[t] = n)),
                  0 === this._remaining && O(i, this._result);
              }),
              (e.prototype._willSettleAt = function (e, t) {
                var n = this;
                C(
                  e,
                  void 0,
                  function (e) {
                    return n._settledAt(1, t, e);
                  },
                  function (e) {
                    return n._settledAt(2, t, e);
                  }
                );
              }),
              e
            );
          })(),
          P = (function () {
            function t(e) {
              (this[k] = x++),
                (this._result = this._state = void 0),
                (this._subscribers = []),
                L !== e &&
                  ('function' != typeof e &&
                    (function () {
                      throw new TypeError(
                        'You must pass a resolver function as the first argument to the promise constructor'
                      );
                    })(),
                  this instanceof t
                    ? (function (e, t) {
                        try {
                          t(
                            function (t) {
                              R(e, t);
                            },
                            function (t) {
                              T(e, t);
                            }
                          );
                        } catch (t) {
                          T(e, t);
                        }
                      })(this, e)
                    : (function () {
                        throw new TypeError(
                          "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                        );
                      })());
            }
            return (
              (t.prototype.catch = function (e) {
                return this.then(null, e);
              }),
              (t.prototype.finally = function (t) {
                var n = this.constructor;
                return e(t)
                  ? this.then(
                      function (e) {
                        return n.resolve(t()).then(function () {
                          return e;
                        });
                      },
                      function (e) {
                        return n.resolve(t()).then(function () {
                          throw e;
                        });
                      }
                    )
                  : this.then(t, t);
              }),
              t
            );
          })();
        return (
          (P.prototype.then = b),
          (P.all = function (e) {
            return new B(this, e).promise;
          }),
          (P.race = function (e) {
            var t = this;
            return i(e)
              ? new t(function (n, i) {
                  for (var r = e.length, a = 0; a < r; a++) t.resolve(e[a]).then(n, i);
                })
              : new t(function (e, t) {
                  return t(new TypeError('You must pass an array to race.'));
                });
          }),
          (P.resolve = S),
          (P.reject = function (e) {
            var t = new this(L);
            return T(t, e), t;
          }),
          (P._setScheduler = function (e) {
            s = e;
          }),
          (P._setAsap = function (e) {
            o = e;
          }),
          (P._asap = o),
          (P.polyfill = function () {
            var e = void 0;
            if (void 0 !== n) e = n;
            else if ('undefined' != typeof self) e = self;
            else
              try {
                e = Function('return this')();
              } catch (e) {
                throw new Error('polyfill failed because global object is unavailable in this environment');
              }
            var t = e.Promise;
            if (t) {
              var i = null;
              try {
                i = Object.prototype.toString.call(t.resolve());
              } catch (e) {}
              if ('[object Promise]' === i && !t.cast) return;
            }
            e.Promise = P;
          }),
          (P.Promise = P),
          P
        );
      }),
        (e.exports = i());
    }.call(this, n(23), n(24)));
  },
  function (e, t) {
    var n,
      i,
      r = (e.exports = {});
    function a() {
      throw new Error('setTimeout has not been defined');
    }
    function s() {
      throw new Error('clearTimeout has not been defined');
    }
    function o(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === a || !n) && setTimeout) return (n = setTimeout), setTimeout(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        n = 'function' == typeof setTimeout ? setTimeout : a;
      } catch (e) {
        n = a;
      }
      try {
        i = 'function' == typeof clearTimeout ? clearTimeout : s;
      } catch (e) {
        i = s;
      }
    })();
    var u,
      l = [],
      d = !1,
      h = -1;
    function f() {
      d && u && ((d = !1), u.length ? (l = u.concat(l)) : (h = -1), l.length && c());
    }
    function c() {
      if (!d) {
        var e = o(f);
        d = !0;
        for (var t = l.length; t; ) {
          for (u = l, l = []; ++h < t; ) u && u[h].run();
          (h = -1), (t = l.length);
        }
        (u = null),
          (d = !1),
          (function (e) {
            if (i === clearTimeout) return clearTimeout(e);
            if ((i === s || !i) && clearTimeout) return (i = clearTimeout), clearTimeout(e);
            try {
              i(e);
            } catch (t) {
              try {
                return i.call(null, e);
              } catch (t) {
                return i.call(this, e);
              }
            }
          })(e);
      }
    }
    function _(e, t) {
      (this.fun = e), (this.array = t);
    }
    function m() {}
    (r.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      l.push(new _(e, t)), 1 !== l.length || d || o(c);
    }),
      (_.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (r.title = 'browser'),
      (r.browser = !0),
      (r.env = {}),
      (r.argv = []),
      (r.version = ''),
      (r.versions = {}),
      (r.on = m),
      (r.addListener = m),
      (r.once = m),
      (r.off = m),
      (r.removeListener = m),
      (r.removeAllListeners = m),
      (r.emit = m),
      (r.prependListener = m),
      (r.prependOnceListener = m),
      (r.listeners = function (e) {
        return [];
      }),
      (r.binding = function (e) {
        throw new Error('process.binding is not supported');
      }),
      (r.cwd = function () {
        return '/';
      }),
      (r.chdir = function (e) {
        throw new Error('process.chdir is not supported');
      }),
      (r.umask = function () {
        return 0;
      });
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function('return this')();
    } catch (e) {
      'object' == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i,
      r = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      a = n(12),
      s = (i = a) && i.__esModule ? i : { default: i },
      o = n(6);
    var u = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, e);
      }
      return (
        r(e, null, [
          {
            key: 'supportMSEH264Playback',
            value: function () {
              return (
                window.MediaSource && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')
              );
            },
          },
          {
            key: 'supportNetworkStreamIO',
            value: function () {
              var e = new s.default({}, (0, o.createDefaultConfig)()),
                t = e.loaderType;
              return e.destroy(), 'fetch-stream-loader' == t || 'xhr-moz-chunked-loader' == t;
            },
          },
          {
            key: 'getNetworkLoaderTypeName',
            value: function () {
              var e = new s.default({}, (0, o.createDefaultConfig)()),
                t = e.loaderType;
              return e.destroy(), t;
            },
          },
          {
            key: 'supportNativeMediaPlayback',
            value: function (t) {
              null == e.videoElement && (e.videoElement = window.document.createElement('video'));
              var n = e.videoElement.canPlayType(t);
              return 'probably' === n || 'maybe' == n;
            },
          },
          {
            key: 'getFeatureList',
            value: function () {
              var t = {
                mseFlvPlayback: !1,
                mseLiveFlvPlayback: !1,
                networkStreamIO: !1,
                networkLoaderName: '',
                nativeMP4H264Playback: !1,
                nativeWebmVP8Playback: !1,
                nativeWebmVP9Playback: !1,
              };
              return (
                (t.mseFlvPlayback = e.supportMSEH264Playback()),
                (t.networkStreamIO = e.supportNetworkStreamIO()),
                (t.networkLoaderName = e.getNetworkLoaderTypeName()),
                (t.mseLiveFlvPlayback = t.mseFlvPlayback && t.networkStreamIO),
                (t.nativeMP4H264Playback = e.supportNativeMediaPlayback('video/mp4; codecs="avc1.42001E, mp4a.40.2"')),
                (t.nativeWebmVP8Playback = e.supportNativeMediaPlayback('video/webm; codecs="vp8.0, vorbis"')),
                (t.nativeWebmVP9Playback = e.supportNativeMediaPlayback('video/webm; codecs="vp9"')),
                t
              );
            },
          },
        ]),
        e
      );
    })();
    (t.default = u), (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            },
      r = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      a = (u(n(0)), u(n(4))),
      s = n(3),
      o = n(1);
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var l = (function (e) {
      function t(e, n) {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, t);
        var i = (function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 'fetch-stream-loader'));
        return (
          (i.TAG = 'FetchStreamLoader'),
          (i._seekHandler = e),
          (i._config = n),
          (i._needStash = !0),
          (i._requestAbort = !1),
          (i._contentLength = null),
          (i._receivedLength = 0),
          i
        );
      }
      return (
        (function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
        })(t, e),
        r(t, null, [
          {
            key: 'isSupported',
            value: function () {
              try {
                var e = a.default.msedge && a.default.version.minor >= 15048,
                  t = !a.default.msedge || e;
                return self.fetch && self.ReadableStream && t;
              } catch (e) {
                return !1;
              }
            },
          },
        ]),
        r(t, [
          {
            key: 'destroy',
            value: function () {
              this.isWorking() && this.abort(),
                (function e(t, n, i) {
                  null === t && (t = Function.prototype);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  if (void 0 === r) {
                    var a = Object.getPrototypeOf(t);
                    return null === a ? void 0 : e(a, n, i);
                  }
                  if ('value' in r) return r.value;
                  var s = r.get;
                  return void 0 !== s ? s.call(i) : void 0;
                })(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'destroy', this).call(this);
            },
          },
          {
            key: 'open',
            value: function (e, t) {
              var n = this;
              (this._dataSource = e), (this._range = t);
              var r = e.url;
              this._config.reuseRedirectedURL && null != e.redirectedURL && (r = e.redirectedURL);
              var a = this._seekHandler.getConfig(r, t),
                u = new self.Headers();
              if ('object' === i(a.headers)) {
                var l = a.headers;
                for (var d in l) l.hasOwnProperty(d) && u.append(d, l[d]);
              }
              var h = {
                method: 'GET',
                headers: u,
                mode: 'cors',
                cache: 'default',
                referrerPolicy: 'no-referrer-when-downgrade',
              };
              !1 === e.cors && (h.mode = 'same-origin'),
                e.withCredentials && (h.credentials = 'include'),
                e.referrerPolicy && (h.referrerPolicy = e.referrerPolicy),
                (this._status = s.LoaderStatus.kConnecting),
                self
                  .fetch(a.url, h)
                  .then(function (e) {
                    if (n._requestAbort) return (n._requestAbort = !1), void (n._status = s.LoaderStatus.kIdle);
                    if (e.ok && e.status >= 200 && e.status <= 299) {
                      if (e.url !== a.url && n._onURLRedirect) {
                        var t = n._seekHandler.removeURLParameters(e.url);
                        n._onURLRedirect(t);
                      }
                      var i = e.headers.get('Content-Length');
                      return (
                        null != i &&
                          ((n._contentLength = parseInt(i)),
                          0 !== n._contentLength &&
                            n._onContentLengthKnown &&
                            n._onContentLengthKnown(n._contentLength)),
                        n._pump.call(n, e.body.getReader())
                      );
                    }
                    if (((n._status = s.LoaderStatus.kError), !n._onError))
                      throw new o.RuntimeException(
                        'FetchStreamLoader: Http code invalid, ' + e.status + ' ' + e.statusText
                      );
                    n._onError(s.LoaderErrors.HTTP_STATUS_CODE_INVALID, { code: e.status, msg: e.statusText });
                  })
                  .catch(function (e) {
                    if (((n._status = s.LoaderStatus.kError), !n._onError)) throw e;
                    n._onError(s.LoaderErrors.EXCEPTION, { code: -1, msg: e.message });
                  });
            },
          },
          {
            key: 'abort',
            value: function () {
              this._requestAbort = !0;
            },
          },
          {
            key: '_pump',
            value: function (e) {
              var t = this;
              return e
                .read()
                .then(function (n) {
                  if (n.done)
                    if (null !== t._contentLength && t._receivedLength < t._contentLength) {
                      t._status = s.LoaderStatus.kError;
                      var i = s.LoaderErrors.EARLY_EOF,
                        r = { code: -1, msg: 'Fetch stream meet Early-EOF' };
                      if (!t._onError) throw new o.RuntimeException(r.msg);
                      t._onError(i, r);
                    } else
                      (t._status = s.LoaderStatus.kComplete),
                        t._onComplete && t._onComplete(t._range.from, t._range.from + t._receivedLength - 1);
                  else {
                    if (!0 === t._requestAbort)
                      return (t._requestAbort = !1), (t._status = s.LoaderStatus.kComplete), e.cancel();
                    t._status = s.LoaderStatus.kBuffering;
                    var a = n.value.buffer,
                      u = t._range.from + t._receivedLength;
                    (t._receivedLength += a.byteLength),
                      t._onDataArrival && t._onDataArrival(a, u, t._receivedLength),
                      t._pump(e);
                  }
                })
                .catch(function (e) {
                  if (11 !== e.code || !a.default.msedge) {
                    t._status = s.LoaderStatus.kError;
                    var n = 0,
                      i = null;
                    if (
                      ((19 !== e.code && 'network error' !== e.message) ||
                      !(
                        null === t._contentLength ||
                        (null !== t._contentLength && t._receivedLength < t._contentLength)
                      )
                        ? ((n = s.LoaderErrors.EXCEPTION), (i = { code: e.code, msg: e.message }))
                        : ((n = s.LoaderErrors.EARLY_EOF), (i = { code: e.code, msg: 'Fetch stream meet Early-EOF' })),
                      !t._onError)
                    )
                      throw new o.RuntimeException(i.msg);
                    t._onError(n, i);
                  }
                });
            },
          },
        ]),
        t
      );
    })(s.BaseLoader);
    (t.default = l), (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i,
      r =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            },
      a = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      s = n(0),
      o = (i = s) && i.__esModule ? i : { default: i },
      u = n(3),
      l = n(1);
    var d = (function (e) {
      function t(e, n) {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, t);
        var i = (function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 'xhr-moz-chunked-loader'));
        return (
          (i.TAG = 'MozChunkedLoader'),
          (i._seekHandler = e),
          (i._config = n),
          (i._needStash = !0),
          (i._xhr = null),
          (i._requestAbort = !1),
          (i._contentLength = null),
          (i._receivedLength = 0),
          i
        );
      }
      return (
        (function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
        })(t, e),
        a(t, null, [
          {
            key: 'isSupported',
            value: function () {
              try {
                var e = new XMLHttpRequest();
                return (
                  e.open('GET', 'https://example.com', !0),
                  (e.responseType = 'moz-chunked-arraybuffer'),
                  'moz-chunked-arraybuffer' === e.responseType
                );
              } catch (e) {
                return o.default.w('MozChunkedLoader', e.message), !1;
              }
            },
          },
        ]),
        a(t, [
          {
            key: 'destroy',
            value: function () {
              this.isWorking() && this.abort(),
                this._xhr &&
                  ((this._xhr.onreadystatechange = null),
                  (this._xhr.onprogress = null),
                  (this._xhr.onloadend = null),
                  (this._xhr.onerror = null),
                  (this._xhr = null)),
                (function e(t, n, i) {
                  null === t && (t = Function.prototype);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  if (void 0 === r) {
                    var a = Object.getPrototypeOf(t);
                    return null === a ? void 0 : e(a, n, i);
                  }
                  if ('value' in r) return r.value;
                  var s = r.get;
                  return void 0 !== s ? s.call(i) : void 0;
                })(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'destroy', this).call(this);
            },
          },
          {
            key: 'open',
            value: function (e, t) {
              (this._dataSource = e), (this._range = t);
              var n = e.url;
              this._config.reuseRedirectedURL && null != e.redirectedURL && (n = e.redirectedURL);
              var i = this._seekHandler.getConfig(n, t);
              this._requestURL = i.url;
              var a = (this._xhr = new XMLHttpRequest());
              if (
                (a.open('GET', i.url, !0),
                (a.responseType = 'moz-chunked-arraybuffer'),
                (a.onreadystatechange = this._onReadyStateChange.bind(this)),
                (a.onprogress = this._onProgress.bind(this)),
                (a.onloadend = this._onLoadEnd.bind(this)),
                (a.onerror = this._onXhrError.bind(this)),
                e.withCredentials && (a.withCredentials = !0),
                'object' === r(i.headers))
              ) {
                var s = i.headers;
                for (var o in s) s.hasOwnProperty(o) && a.setRequestHeader(o, s[o]);
              }
              (this._status = u.LoaderStatus.kConnecting), a.send();
            },
          },
          {
            key: 'abort',
            value: function () {
              (this._requestAbort = !0), this._xhr && this._xhr.abort(), (this._status = u.LoaderStatus.kComplete);
            },
          },
          {
            key: '_onReadyStateChange',
            value: function (e) {
              var t = e.target;
              if (2 === t.readyState) {
                if (null != t.responseURL && t.responseURL !== this._requestURL && this._onURLRedirect) {
                  var n = this._seekHandler.removeURLParameters(t.responseURL);
                  this._onURLRedirect(n);
                }
                if (0 !== t.status && (t.status < 200 || t.status > 299)) {
                  if (((this._status = u.LoaderStatus.kError), !this._onError))
                    throw new l.RuntimeException(
                      'MozChunkedLoader: Http code invalid, ' + t.status + ' ' + t.statusText
                    );
                  this._onError(u.LoaderErrors.HTTP_STATUS_CODE_INVALID, { code: t.status, msg: t.statusText });
                } else this._status = u.LoaderStatus.kBuffering;
              }
            },
          },
          {
            key: '_onProgress',
            value: function (e) {
              if (this._status !== u.LoaderStatus.kError) {
                null === this._contentLength &&
                  null !== e.total &&
                  0 !== e.total &&
                  ((this._contentLength = e.total),
                  this._onContentLengthKnown && this._onContentLengthKnown(this._contentLength));
                var t = e.target.response,
                  n = this._range.from + this._receivedLength;
                (this._receivedLength += t.byteLength),
                  this._onDataArrival && this._onDataArrival(t, n, this._receivedLength);
              }
            },
          },
          {
            key: '_onLoadEnd',
            value: function (e) {
              !0 !== this._requestAbort
                ? this._status !== u.LoaderStatus.kError &&
                  ((this._status = u.LoaderStatus.kComplete),
                  this._onComplete && this._onComplete(this._range.from, this._range.from + this._receivedLength - 1))
                : (this._requestAbort = !1);
            },
          },
          {
            key: '_onXhrError',
            value: function (e) {
              this._status = u.LoaderStatus.kError;
              var t = 0,
                n = null;
              if (
                (this._contentLength && e.loaded < this._contentLength
                  ? ((t = u.LoaderErrors.EARLY_EOF), (n = { code: -1, msg: 'Moz-Chunked stream meet Early-Eof' }))
                  : ((t = u.LoaderErrors.EXCEPTION), (n = { code: -1, msg: e.constructor.name + ' ' + e.type })),
                !this._onError)
              )
                throw new l.RuntimeException(n.msg);
              this._onError(t, n);
            },
          },
        ]),
        t
      );
    })(u.BaseLoader);
    (t.default = d), (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i,
      r =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            },
      a = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      s = n(0),
      o = (i = s) && i.__esModule ? i : { default: i },
      u = n(3),
      l = n(1);
    var d = (function (e) {
      function t(e, n) {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, t);
        var i = (function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 'xhr-msstream-loader'));
        return (
          (i.TAG = 'MSStreamLoader'),
          (i._seekHandler = e),
          (i._config = n),
          (i._needStash = !0),
          (i._xhr = null),
          (i._reader = null),
          (i._totalRange = null),
          (i._currentRange = null),
          (i._currentRequestURL = null),
          (i._currentRedirectedURL = null),
          (i._contentLength = null),
          (i._receivedLength = 0),
          (i._bufferLimit = 16777216),
          (i._lastTimeBufferSize = 0),
          (i._isReconnecting = !1),
          i
        );
      }
      return (
        (function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
        })(t, e),
        a(t, null, [
          {
            key: 'isSupported',
            value: function () {
              try {
                if (void 0 === self.MSStream || void 0 === self.MSStreamReader) return !1;
                var e = new XMLHttpRequest();
                return (
                  e.open('GET', 'https://example.com', !0),
                  (e.responseType = 'ms-stream'),
                  'ms-stream' === e.responseType
                );
              } catch (e) {
                return o.default.w('MSStreamLoader', e.message), !1;
              }
            },
          },
        ]),
        a(t, [
          {
            key: 'destroy',
            value: function () {
              this.isWorking() && this.abort(),
                this._reader &&
                  ((this._reader.onprogress = null),
                  (this._reader.onload = null),
                  (this._reader.onerror = null),
                  (this._reader = null)),
                this._xhr && ((this._xhr.onreadystatechange = null), (this._xhr = null)),
                (function e(t, n, i) {
                  null === t && (t = Function.prototype);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  if (void 0 === r) {
                    var a = Object.getPrototypeOf(t);
                    return null === a ? void 0 : e(a, n, i);
                  }
                  if ('value' in r) return r.value;
                  var s = r.get;
                  return void 0 !== s ? s.call(i) : void 0;
                })(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'destroy', this).call(this);
            },
          },
          {
            key: 'open',
            value: function (e, t) {
              this._internalOpen(e, t, !1);
            },
          },
          {
            key: '_internalOpen',
            value: function (e, t, n) {
              (this._dataSource = e), n ? (this._currentRange = t) : (this._totalRange = t);
              var i = e.url;
              this._config.reuseRedirectedURL &&
                (null != this._currentRedirectedURL
                  ? (i = this._currentRedirectedURL)
                  : null != e.redirectedURL && (i = e.redirectedURL));
              var a = this._seekHandler.getConfig(i, t);
              this._currentRequestURL = a.url;
              var s = (this._reader = new self.MSStreamReader());
              (s.onprogress = this._msrOnProgress.bind(this)),
                (s.onload = this._msrOnLoad.bind(this)),
                (s.onerror = this._msrOnError.bind(this));
              var o = (this._xhr = new XMLHttpRequest());
              if (
                (o.open('GET', a.url, !0),
                (o.responseType = 'ms-stream'),
                (o.onreadystatechange = this._xhrOnReadyStateChange.bind(this)),
                (o.onerror = this._xhrOnError.bind(this)),
                e.withCredentials && (o.withCredentials = !0),
                'object' === r(a.headers))
              ) {
                var l = a.headers;
                for (var d in l) l.hasOwnProperty(d) && o.setRequestHeader(d, l[d]);
              }
              this._isReconnecting ? (this._isReconnecting = !1) : (this._status = u.LoaderStatus.kConnecting),
                o.send();
            },
          },
          {
            key: 'abort',
            value: function () {
              this._internalAbort(), (this._status = u.LoaderStatus.kComplete);
            },
          },
          {
            key: '_internalAbort',
            value: function () {
              this._reader &&
                (1 === this._reader.readyState && this._reader.abort(),
                (this._reader.onprogress = null),
                (this._reader.onload = null),
                (this._reader.onerror = null),
                (this._reader = null)),
                this._xhr && (this._xhr.abort(), (this._xhr.onreadystatechange = null), (this._xhr = null));
            },
          },
          {
            key: '_xhrOnReadyStateChange',
            value: function (e) {
              var t = e.target;
              if (2 === t.readyState)
                if (t.status >= 200 && t.status <= 299) {
                  if (((this._status = u.LoaderStatus.kBuffering), null != t.responseURL)) {
                    var n = this._seekHandler.removeURLParameters(t.responseURL);
                    t.responseURL !== this._currentRequestURL &&
                      n !== this._currentRedirectedURL &&
                      ((this._currentRedirectedURL = n), this._onURLRedirect && this._onURLRedirect(n));
                  }
                  var i = t.getResponseHeader('Content-Length');
                  if (null != i && null == this._contentLength) {
                    var r = parseInt(i);
                    r > 0 &&
                      ((this._contentLength = r),
                      this._onContentLengthKnown && this._onContentLengthKnown(this._contentLength));
                  }
                } else {
                  if (((this._status = u.LoaderStatus.kError), !this._onError))
                    throw new l.RuntimeException('MSStreamLoader: Http code invalid, ' + t.status + ' ' + t.statusText);
                  this._onError(u.LoaderErrors.HTTP_STATUS_CODE_INVALID, { code: t.status, msg: t.statusText });
                }
              else if (3 === t.readyState && t.status >= 200 && t.status <= 299) {
                this._status = u.LoaderStatus.kBuffering;
                var a = t.response;
                this._reader.readAsArrayBuffer(a);
              }
            },
          },
          {
            key: '_xhrOnError',
            value: function (e) {
              this._status = u.LoaderStatus.kError;
              var t = u.LoaderErrors.EXCEPTION,
                n = { code: -1, msg: e.constructor.name + ' ' + e.type };
              if (!this._onError) throw new l.RuntimeException(n.msg);
              this._onError(t, n);
            },
          },
          {
            key: '_msrOnProgress',
            value: function (e) {
              var t = e.target.result;
              if (null != t) {
                var n = t.slice(this._lastTimeBufferSize);
                this._lastTimeBufferSize = t.byteLength;
                var i = this._totalRange.from + this._receivedLength;
                (this._receivedLength += n.byteLength),
                  this._onDataArrival && this._onDataArrival(n, i, this._receivedLength),
                  t.byteLength >= this._bufferLimit &&
                    (o.default.v(
                      this.TAG,
                      'MSStream buffer exceeded max size near ' + (i + n.byteLength) + ', reconnecting...'
                    ),
                    this._doReconnectIfNeeded());
              } else this._doReconnectIfNeeded();
            },
          },
          {
            key: '_doReconnectIfNeeded',
            value: function () {
              if (null == this._contentLength || this._receivedLength < this._contentLength) {
                (this._isReconnecting = !0), (this._lastTimeBufferSize = 0), this._internalAbort();
                var e = { from: this._totalRange.from + this._receivedLength, to: -1 };
                this._internalOpen(this._dataSource, e, !0);
              }
            },
          },
          {
            key: '_msrOnLoad',
            value: function (e) {
              (this._status = u.LoaderStatus.kComplete),
                this._onComplete &&
                  this._onComplete(this._totalRange.from, this._totalRange.from + this._receivedLength - 1);
            },
          },
          {
            key: '_msrOnError',
            value: function (e) {
              this._status = u.LoaderStatus.kError;
              var t = 0,
                n = null;
              if (
                (this._contentLength && this._receivedLength < this._contentLength
                  ? ((t = u.LoaderErrors.EARLY_EOF), (n = { code: -1, msg: 'MSStream meet Early-Eof' }))
                  : ((t = u.LoaderErrors.EARLY_EOF), (n = { code: -1, msg: e.constructor.name + ' ' + e.type })),
                !this._onError)
              )
                throw new l.RuntimeException(n.msg);
              this._onError(t, n);
            },
          },
        ]),
        t
      );
    })(u.BaseLoader);
    (t.default = d), (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            },
      r = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      a = l(n(0)),
      s = l(n(13)),
      o = n(3),
      u = n(1);
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var d = (function (e) {
      function t(e, n) {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, t);
        var i = (function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 'xhr-range-loader'));
        return (
          (i.TAG = 'RangeLoader'),
          (i._seekHandler = e),
          (i._config = n),
          (i._needStash = !1),
          (i._chunkSizeKBList = [128, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 5120, 6144, 7168, 8192]),
          (i._currentChunkSizeKB = 384),
          (i._currentSpeedNormalized = 0),
          (i._zeroSpeedChunkCount = 0),
          (i._xhr = null),
          (i._speedSampler = new s.default()),
          (i._requestAbort = !1),
          (i._waitForTotalLength = !1),
          (i._totalLengthReceived = !1),
          (i._currentRequestURL = null),
          (i._currentRedirectedURL = null),
          (i._currentRequestRange = null),
          (i._totalLength = null),
          (i._contentLength = null),
          (i._receivedLength = 0),
          (i._lastTimeLoaded = 0),
          i
        );
      }
      return (
        (function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
        })(t, e),
        r(t, null, [
          {
            key: 'isSupported',
            value: function () {
              try {
                var e = new XMLHttpRequest();
                return (
                  e.open('GET', 'https://example.com', !0),
                  (e.responseType = 'arraybuffer'),
                  'arraybuffer' === e.responseType
                );
              } catch (e) {
                return a.default.w('RangeLoader', e.message), !1;
              }
            },
          },
        ]),
        r(t, [
          {
            key: 'destroy',
            value: function () {
              this.isWorking() && this.abort(),
                this._xhr &&
                  ((this._xhr.onreadystatechange = null),
                  (this._xhr.onprogress = null),
                  (this._xhr.onload = null),
                  (this._xhr.onerror = null),
                  (this._xhr = null)),
                (function e(t, n, i) {
                  null === t && (t = Function.prototype);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  if (void 0 === r) {
                    var a = Object.getPrototypeOf(t);
                    return null === a ? void 0 : e(a, n, i);
                  }
                  if ('value' in r) return r.value;
                  var s = r.get;
                  return void 0 !== s ? s.call(i) : void 0;
                })(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'destroy', this).call(this);
            },
          },
          {
            key: 'open',
            value: function (e, t) {
              (this._dataSource = e), (this._range = t), (this._status = o.LoaderStatus.kConnecting);
              var n = !1;
              null != this._dataSource.filesize &&
                0 !== this._dataSource.filesize &&
                ((n = !0), (this._totalLength = this._dataSource.filesize)),
                this._totalLengthReceived || n
                  ? this._openSubRange()
                  : ((this._waitForTotalLength = !0), this._internalOpen(this._dataSource, { from: 0, to: -1 }));
            },
          },
          {
            key: '_openSubRange',
            value: function () {
              var e = 1024 * this._currentChunkSizeKB,
                t = this._range.from + this._receivedLength,
                n = t + e;
              null != this._contentLength &&
                n - this._range.from >= this._contentLength &&
                (n = this._range.from + this._contentLength - 1),
                (this._currentRequestRange = { from: t, to: n }),
                this._internalOpen(this._dataSource, this._currentRequestRange);
            },
          },
          {
            key: '_internalOpen',
            value: function (e, t) {
              this._lastTimeLoaded = 0;
              var n = e.url;
              this._config.reuseRedirectedURL &&
                (null != this._currentRedirectedURL
                  ? (n = this._currentRedirectedURL)
                  : null != e.redirectedURL && (n = e.redirectedURL));
              var r = this._seekHandler.getConfig(n, t);
              this._currentRequestURL = r.url;
              var a = (this._xhr = new XMLHttpRequest());
              if (
                (a.open('GET', r.url, !0),
                (a.responseType = 'arraybuffer'),
                (a.onreadystatechange = this._onReadyStateChange.bind(this)),
                (a.onprogress = this._onProgress.bind(this)),
                (a.onload = this._onLoad.bind(this)),
                (a.onerror = this._onXhrError.bind(this)),
                e.withCredentials && (a.withCredentials = !0),
                'object' === i(r.headers))
              ) {
                var s = r.headers;
                for (var o in s) s.hasOwnProperty(o) && a.setRequestHeader(o, s[o]);
              }
              a.send();
            },
          },
          {
            key: 'abort',
            value: function () {
              (this._requestAbort = !0), this._internalAbort(), (this._status = o.LoaderStatus.kComplete);
            },
          },
          {
            key: '_internalAbort',
            value: function () {
              this._xhr &&
                ((this._xhr.onreadystatechange = null),
                (this._xhr.onprogress = null),
                (this._xhr.onload = null),
                (this._xhr.onerror = null),
                this._xhr.abort(),
                (this._xhr = null));
            },
          },
          {
            key: '_onReadyStateChange',
            value: function (e) {
              var t = e.target;
              if (2 === t.readyState) {
                if (null != t.responseURL) {
                  var n = this._seekHandler.removeURLParameters(t.responseURL);
                  t.responseURL !== this._currentRequestURL &&
                    n !== this._currentRedirectedURL &&
                    ((this._currentRedirectedURL = n), this._onURLRedirect && this._onURLRedirect(n));
                }
                if (t.status >= 200 && t.status <= 299) {
                  if (this._waitForTotalLength) return;
                  this._status = o.LoaderStatus.kBuffering;
                } else {
                  if (((this._status = o.LoaderStatus.kError), !this._onError))
                    throw new u.RuntimeException('RangeLoader: Http code invalid, ' + t.status + ' ' + t.statusText);
                  this._onError(o.LoaderErrors.HTTP_STATUS_CODE_INVALID, { code: t.status, msg: t.statusText });
                }
              }
            },
          },
          {
            key: '_onProgress',
            value: function (e) {
              if (this._status !== o.LoaderStatus.kError) {
                if (null === this._contentLength) {
                  var t = !1;
                  if (this._waitForTotalLength) {
                    (this._waitForTotalLength = !1), (this._totalLengthReceived = !0), (t = !0);
                    var n = e.total;
                    this._internalAbort(), (null != n) & (0 !== n) && (this._totalLength = n);
                  }
                  if (
                    (-1 === this._range.to
                      ? (this._contentLength = this._totalLength - this._range.from)
                      : (this._contentLength = this._range.to - this._range.from + 1),
                    t)
                  )
                    return void this._openSubRange();
                  this._onContentLengthKnown && this._onContentLengthKnown(this._contentLength);
                }
                var i = e.loaded - this._lastTimeLoaded;
                (this._lastTimeLoaded = e.loaded), this._speedSampler.addBytes(i);
              }
            },
          },
          {
            key: '_normalizeSpeed',
            value: function (e) {
              var t = this._chunkSizeKBList,
                n = t.length - 1,
                i = 0,
                r = 0,
                a = n;
              if (e < t[0]) return t[0];
              for (; r <= a; ) {
                if ((i = r + Math.floor((a - r) / 2)) === n || (e >= t[i] && e < t[i + 1])) return t[i];
                t[i] < e ? (r = i + 1) : (a = i - 1);
              }
            },
          },
          {
            key: '_onLoad',
            value: function (e) {
              if (this._status !== o.LoaderStatus.kError)
                if (this._waitForTotalLength) this._waitForTotalLength = !1;
                else {
                  this._lastTimeLoaded = 0;
                  var t = this._speedSampler.lastSecondKBps;
                  if (
                    (0 === t &&
                      (this._zeroSpeedChunkCount++,
                      this._zeroSpeedChunkCount >= 3 && (t = this._speedSampler.currentKBps)),
                    0 !== t)
                  ) {
                    var n = this._normalizeSpeed(t);
                    this._currentSpeedNormalized !== n &&
                      ((this._currentSpeedNormalized = n), (this._currentChunkSizeKB = n));
                  }
                  var i = e.target.response,
                    r = this._range.from + this._receivedLength;
                  this._receivedLength += i.byteLength;
                  var a = !1;
                  null != this._contentLength && this._receivedLength < this._contentLength
                    ? this._openSubRange()
                    : (a = !0),
                    this._onDataArrival && this._onDataArrival(i, r, this._receivedLength),
                    a &&
                      ((this._status = o.LoaderStatus.kComplete),
                      this._onComplete &&
                        this._onComplete(this._range.from, this._range.from + this._receivedLength - 1));
                }
            },
          },
          {
            key: '_onXhrError',
            value: function (e) {
              this._status = o.LoaderStatus.kError;
              var t = 0,
                n = null;
              if (
                (this._contentLength && this._receivedLength > 0 && this._receivedLength < this._contentLength
                  ? ((t = o.LoaderErrors.EARLY_EOF), (n = { code: -1, msg: 'RangeLoader meet Early-Eof' }))
                  : ((t = o.LoaderErrors.EXCEPTION), (n = { code: -1, msg: e.constructor.name + ' ' + e.type })),
                !this._onError)
              )
                throw new u.RuntimeException(n.msg);
              this._onError(t, n);
            },
          },
          {
            key: 'currentSpeed',
            get: function () {
              return this._speedSampler.lastSecondKBps;
            },
          },
        ]),
        t
      );
    })(o.BaseLoader);
    (t.default = d), (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i,
      r = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      a = n(0),
      s = ((i = a) && i.__esModule, n(3)),
      o = n(1);
    var u = (function (e) {
      function t() {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, t);
        var e = (function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, 'websocket-loader'));
        return (
          (e.TAG = 'WebSocketLoader'),
          (e._needStash = !0),
          (e._ws = null),
          (e._requestAbort = !1),
          (e._receivedLength = 0),
          e
        );
      }
      return (
        (function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
        })(t, e),
        r(t, null, [
          {
            key: 'isSupported',
            value: function () {
              try {
                return void 0 !== self.WebSocket;
              } catch (e) {
                return !1;
              }
            },
          },
        ]),
        r(t, [
          {
            key: 'destroy',
            value: function () {
              this._ws && this.abort(),
                (function e(t, n, i) {
                  null === t && (t = Function.prototype);
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  if (void 0 === r) {
                    var a = Object.getPrototypeOf(t);
                    return null === a ? void 0 : e(a, n, i);
                  }
                  if ('value' in r) return r.value;
                  var s = r.get;
                  return void 0 !== s ? s.call(i) : void 0;
                })(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'destroy', this).call(this);
            },
          },
          {
            key: 'open',
            value: function (e) {
              try {
                var t = (this._ws = new self.WebSocket(e.url));
                (t.binaryType = 'arraybuffer'),
                  (t.onopen = this._onWebSocketOpen.bind(this)),
                  (t.onclose = this._onWebSocketClose.bind(this)),
                  (t.onmessage = this._onWebSocketMessage.bind(this)),
                  (t.onerror = this._onWebSocketError.bind(this)),
                  (this._status = s.LoaderStatus.kConnecting);
              } catch (e) {
                this._status = s.LoaderStatus.kError;
                var n = { code: e.code, msg: e.message };
                if (!this._onError) throw new o.RuntimeException(n.msg);
                this._onError(s.LoaderErrors.EXCEPTION, n);
              }
            },
          },
          {
            key: 'abort',
            value: function () {
              var e = this._ws;
              !e || (0 !== e.readyState && 1 !== e.readyState) || ((this._requestAbort = !0), e.close()),
                (this._ws = null),
                (this._status = s.LoaderStatus.kComplete);
            },
          },
          {
            key: '_onWebSocketOpen',
            value: function (e) {
              this._status = s.LoaderStatus.kBuffering;
            },
          },
          {
            key: '_onWebSocketClose',
            value: function (e) {
              !0 !== this._requestAbort
                ? ((this._status = s.LoaderStatus.kComplete),
                  this._onComplete && this._onComplete(0, this._receivedLength - 1))
                : (this._requestAbort = !1);
            },
          },
          {
            key: '_onWebSocketMessage',
            value: function (e) {
              var t = this;
              if (e.data instanceof ArrayBuffer) this._dispatchArrayBuffer(e.data);
              else if (e.data instanceof Blob) {
                var n = new FileReader();
                (n.onload = function () {
                  t._dispatchArrayBuffer(n.result);
                }),
                  n.readAsArrayBuffer(e.data);
              } else {
                this._status = s.LoaderStatus.kError;
                var i = { code: -1, msg: 'Unsupported WebSocket message type: ' + e.data.constructor.name };
                if (!this._onError) throw new o.RuntimeException(i.msg);
                this._onError(s.LoaderErrors.EXCEPTION, i);
              }
            },
          },
          {
            key: '_dispatchArrayBuffer',
            value: function (e) {
              var t = e,
                n = this._receivedLength;
              (this._receivedLength += t.byteLength),
                this._onDataArrival && this._onDataArrival(t, n, this._receivedLength);
            },
          },
          {
            key: '_onWebSocketError',
            value: function (e) {
              this._status = s.LoaderStatus.kError;
              var t = { code: e.code, msg: e.message };
              if (!this._onError) throw new o.RuntimeException(t.msg);
              this._onError(s.LoaderErrors.EXCEPTION, t);
            },
          },
        ]),
        t
      );
    })(s.BaseLoader);
    (t.default = u), (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
      };
    })();
    var r = (function () {
      function e(t) {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, e),
          (this._zeroStart = t || !1);
      }
      return (
        i(e, [
          {
            key: 'getConfig',
            value: function (e, t) {
              var n = {};
              if (0 !== t.from || -1 !== t.to) {
                var i = void 0;
                (i =
                  -1 !== t.to
                    ? 'bytes=' + t.from.toString() + '-' + t.to.toString()
                    : 'bytes=' + t.from.toString() + '-'),
                  (n.Range = i);
              } else this._zeroStart && (n.Range = 'bytes=0-');
              return { url: e, headers: n };
            },
          },
          {
            key: 'removeURLParameters',
            value: function (e) {
              return e;
            },
          },
        ]),
        e
      );
    })();
    (t.default = r), (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
      };
    })();
    var r = (function () {
      function e(t, n) {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, e),
          (this._startName = t),
          (this._endName = n);
      }
      return (
        i(e, [
          {
            key: 'getConfig',
            value: function (e, t) {
              var n = e;
              if (0 !== t.from || -1 !== t.to) {
                var i = !0;
                -1 === n.indexOf('?') && ((n += '?'), (i = !1)),
                  i && (n += '&'),
                  (n += this._startName + '=' + t.from.toString()),
                  -1 !== t.to && (n += '&' + this._endName + '=' + t.to.toString());
              }
              return { url: n, headers: {} };
            },
          },
          {
            key: 'removeURLParameters',
            value: function (e) {
              var t = e.split('?')[0],
                n = void 0,
                i = e.indexOf('?');
              -1 !== i && (n = e.substring(i + 1));
              var r = '';
              if (null != n && n.length > 0)
                for (var a = n.split('&'), s = 0; s < a.length; s++) {
                  var o = a[s].split('='),
                    u = s > 0;
                  o[0] !== this._startName && o[0] !== this._endName && (u && (r += '&'), (r += a[s]));
                }
              return 0 === r.length ? t : t + '?' + r;
            },
          },
        ]),
        e
      );
    })();
    (t.default = r), (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            },
      r = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      a = p(n(2)),
      s = p(n(0)),
      o = p(n(4)),
      u = p(n(7)),
      l = p(n(34)),
      d = p(n(5)),
      h = p(n(45)),
      f = p(n(16)),
      c = n(17),
      _ = n(6),
      m = n(1);
    function p(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var v = (function () {
      function e(t, n) {
        if (
          ((function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
          })(this, e),
          (this.TAG = 'FlvPlayer'),
          (this._type = 'FlvPlayer'),
          (this._emitter = new a.default()),
          (this._config = (0, _.createDefaultConfig)()),
          'object' === (void 0 === n ? 'undefined' : i(n)) && Object.assign(this._config, n),
          'flv' !== t.type.toLowerCase())
        )
          throw new m.InvalidArgumentException('FlvPlayer requires an flv MediaDataSource input!');
        !0 === t.isLive && (this._config.isLive = !0),
          (this.e = {
            onvLoadedMetadata: this._onvLoadedMetadata.bind(this),
            onvSeeking: this._onvSeeking.bind(this),
            onvCanPlay: this._onvCanPlay.bind(this),
            onvStalled: this._onvStalled.bind(this),
            onvProgress: this._onvProgress.bind(this),
          }),
          self.performance && self.performance.now
            ? (this._now = self.performance.now.bind(self.performance))
            : (this._now = Date.now),
          (this._pendingSeekTime = null),
          (this._requestSetTime = !1),
          (this._seekpointRecord = null),
          (this._progressChecker = null),
          (this._mediaDataSource = t),
          (this._mediaElement = null),
          (this._msectl = null),
          (this._transmuxer = null),
          (this._mseSourceOpened = !1),
          (this._hasPendingLoad = !1),
          (this._receivedCanPlay = !1),
          (this._mediaInfo = null),
          (this._statisticsInfo = null);
        var r =
          o.default.chrome &&
          (o.default.version.major < 50 || (50 === o.default.version.major && o.default.version.build < 2661));
        (this._alwaysSeekKeyframe = !!(r || o.default.msedge || o.default.msie)),
          this._alwaysSeekKeyframe && (this._config.accurateSeek = !1);
      }
      return (
        r(e, [
          {
            key: 'destroy',
            value: function () {
              null != this._progressChecker &&
                (window.clearInterval(this._progressChecker), (this._progressChecker = null)),
                this._transmuxer && this.unload(),
                this._mediaElement && this.detachMediaElement(),
                (this.e = null),
                (this._mediaDataSource = null),
                this._emitter.removeAllListeners(),
                (this._emitter = null);
            },
          },
          {
            key: 'on',
            value: function (e, t) {
              var n = this;
              e === u.default.MEDIA_INFO
                ? null != this._mediaInfo &&
                  Promise.resolve().then(function () {
                    n._emitter.emit(u.default.MEDIA_INFO, n.mediaInfo);
                  })
                : e === u.default.STATISTICS_INFO &&
                  null != this._statisticsInfo &&
                  Promise.resolve().then(function () {
                    n._emitter.emit(u.default.STATISTICS_INFO, n.statisticsInfo);
                  }),
                this._emitter.addListener(e, t);
            },
          },
          {
            key: 'off',
            value: function (e, t) {
              this._emitter.removeListener(e, t);
            },
          },
          {
            key: 'attachMediaElement',
            value: function (e) {
              var t = this;
              if (
                ((this._mediaElement = e),
                e.addEventListener('loadedmetadata', this.e.onvLoadedMetadata),
                e.addEventListener('seeking', this.e.onvSeeking),
                e.addEventListener('canplay', this.e.onvCanPlay),
                e.addEventListener('stalled', this.e.onvStalled),
                e.addEventListener('progress', this.e.onvProgress),
                (this._msectl = new h.default(this._config)),
                this._msectl.on(f.default.UPDATE_END, this._onmseUpdateEnd.bind(this)),
                this._msectl.on(f.default.BUFFER_FULL, this._onmseBufferFull.bind(this)),
                this._msectl.on(f.default.SOURCE_OPEN, function () {
                  (t._mseSourceOpened = !0), t._hasPendingLoad && ((t._hasPendingLoad = !1), t.load());
                }),
                this._msectl.on(f.default.ERROR, function (e) {
                  t._emitter.emit(u.default.ERROR, c.ErrorTypes.MEDIA_ERROR, c.ErrorDetails.MEDIA_MSE_ERROR, e);
                }),
                this._msectl.attachMediaElement(e),
                null != this._pendingSeekTime)
              )
                try {
                  (e.currentTime = this._pendingSeekTime), (this._pendingSeekTime = null);
                } catch (e) {}
            },
          },
          {
            key: 'detachMediaElement',
            value: function () {
              this._mediaElement &&
                (this._msectl.detachMediaElement(),
                this._mediaElement.removeEventListener('loadedmetadata', this.e.onvLoadedMetadata),
                this._mediaElement.removeEventListener('seeking', this.e.onvSeeking),
                this._mediaElement.removeEventListener('canplay', this.e.onvCanPlay),
                this._mediaElement.removeEventListener('stalled', this.e.onvStalled),
                this._mediaElement.removeEventListener('progress', this.e.onvProgress),
                (this._mediaElement = null)),
                this._msectl && (this._msectl.destroy(), (this._msectl = null));
            },
          },
          {
            key: 'load',
            value: function () {
              var e = this;
              if (!this._mediaElement)
                throw new m.IllegalStateException('HTMLMediaElement must be attached before load()!');
              if (this._transmuxer)
                throw new m.IllegalStateException('FlvPlayer.load() has been called, please call unload() first!');
              this._hasPendingLoad ||
                (this._config.deferLoadAfterSourceOpen && !1 === this._mseSourceOpened
                  ? (this._hasPendingLoad = !0)
                  : (this._mediaElement.readyState > 0 &&
                      ((this._requestSetTime = !0), (this._mediaElement.currentTime = 0)),
                    (this._transmuxer = new l.default(this._mediaDataSource, this._config)),
                    this._transmuxer.on(d.default.INIT_SEGMENT, function (t, n) {
                      e._msectl.appendInitSegment(n);
                    }),
                    this._transmuxer.on(d.default.MEDIA_SEGMENT, function (t, n) {
                      if ((e._msectl.appendMediaSegment(n), e._config.lazyLoad && !e._config.isLive)) {
                        var i = e._mediaElement.currentTime;
                        n.info.endDts >= 1e3 * (i + e._config.lazyLoadMaxDuration) &&
                          null == e._progressChecker &&
                          (s.default.v(e.TAG, 'Maximum buffering duration exceeded, suspend transmuxing task'),
                          e._suspendTransmuxer());
                      }
                    }),
                    this._transmuxer.on(d.default.LOADING_COMPLETE, function () {
                      e._msectl.endOfStream(), e._emitter.emit(u.default.LOADING_COMPLETE);
                    }),
                    this._transmuxer.on(d.default.RECOVERED_EARLY_EOF, function () {
                      e._emitter.emit(u.default.RECOVERED_EARLY_EOF);
                    }),
                    this._transmuxer.on(d.default.IO_ERROR, function (t, n) {
                      e._emitter.emit(u.default.ERROR, c.ErrorTypes.NETWORK_ERROR, t, n);
                    }),
                    this._transmuxer.on(d.default.DEMUX_ERROR, function (t, n) {
                      e._emitter.emit(u.default.ERROR, c.ErrorTypes.MEDIA_ERROR, t, { code: -1, msg: n });
                    }),
                    this._transmuxer.on(d.default.MEDIA_INFO, function (t) {
                      (e._mediaInfo = t), e._emitter.emit(u.default.MEDIA_INFO, Object.assign({}, t));
                    }),
                    this._transmuxer.on(d.default.STATISTICS_INFO, function (t) {
                      (e._statisticsInfo = e._fillStatisticsInfo(t)),
                        e._emitter.emit(u.default.STATISTICS_INFO, Object.assign({}, e._statisticsInfo));
                    }),
                    this._transmuxer.on(d.default.RECOMMEND_SEEKPOINT, function (t) {
                      e._mediaElement &&
                        !e._config.accurateSeek &&
                        ((e._requestSetTime = !0), (e._mediaElement.currentTime = t / 1e3));
                    }),
                    this._transmuxer.on(d.default.LOADED_SEI, function (t, n) {
                      e._emitter.emit(u.default.LOADED_SEI, t, n);
                    }),
                    this._transmuxer.open()));
            },
          },
          {
            key: 'unload',
            value: function () {
              this._mediaElement && this._mediaElement.pause(),
                this._msectl && this._msectl.seek(0),
                this._transmuxer && (this._transmuxer.close(), this._transmuxer.destroy(), (this._transmuxer = null));
            },
          },
          {
            key: 'play',
            value: function () {
              var e = this._mediaElement.play();
              return void 0 !== e && e ? e.catch(function () {}) : void 0;
            },
          },
          {
            key: 'pause',
            value: function () {
              this._mediaElement.pause();
            },
          },
          {
            key: '_fillStatisticsInfo',
            value: function (e) {
              if (((e.playerType = this._type), !(this._mediaElement instanceof HTMLVideoElement))) return e;
              var t = !0,
                n = 0,
                i = 0;
              if (this._mediaElement.getVideoPlaybackQuality) {
                var r = this._mediaElement.getVideoPlaybackQuality();
                (n = r.totalVideoFrames), (i = r.droppedVideoFrames);
              } else
                null != this._mediaElement.webkitDecodedFrameCount
                  ? ((n = this._mediaElement.webkitDecodedFrameCount), (i = this._mediaElement.webkitDroppedFrameCount))
                  : (t = !1);
              return t && ((e.decodedFrames = n), (e.droppedFrames = i)), e;
            },
          },
          {
            key: '_onmseUpdateEnd',
            value: function () {
              if (this._config.lazyLoad && !this._config.isLive) {
                for (
                  var e = this._mediaElement.buffered, t = this._mediaElement.currentTime, n = 0, i = 0;
                  i < e.length;
                  i++
                ) {
                  var r = e.start(i),
                    a = e.end(i);
                  if (r <= t && t < a) {
                    r, (n = a);
                    break;
                  }
                }
                n >= t + this._config.lazyLoadMaxDuration &&
                  null == this._progressChecker &&
                  (s.default.v(this.TAG, 'Maximum buffering duration exceeded, suspend transmuxing task'),
                  this._suspendTransmuxer());
              }
            },
          },
          {
            key: '_onmseBufferFull',
            value: function () {
              s.default.v(this.TAG, 'MSE SourceBuffer is full, suspend transmuxing task'),
                null == this._progressChecker && this._suspendTransmuxer();
            },
          },
          {
            key: '_suspendTransmuxer',
            value: function () {
              this._transmuxer &&
                (this._transmuxer.pause(),
                null == this._progressChecker &&
                  (this._progressChecker = window.setInterval(this._checkProgressAndResume.bind(this), 1e3)));
            },
          },
          {
            key: '_checkProgressAndResume',
            value: function () {
              for (
                var e = this._mediaElement.currentTime, t = this._mediaElement.buffered, n = !1, i = 0;
                i < t.length;
                i++
              ) {
                var r = t.start(i),
                  a = t.end(i);
                if (e >= r && e < a) {
                  e >= a - this._config.lazyLoadRecoverDuration && (n = !0);
                  break;
                }
              }
              n &&
                (window.clearInterval(this._progressChecker),
                (this._progressChecker = null),
                n && (s.default.v(this.TAG, 'Continue loading from paused position'), this._transmuxer.resume()));
            },
          },
          {
            key: '_isTimepointBuffered',
            value: function (e) {
              for (var t = this._mediaElement.buffered, n = 0; n < t.length; n++) {
                var i = t.start(n),
                  r = t.end(n);
                if (e >= i && e < r) return !0;
              }
              return !1;
            },
          },
          {
            key: '_internalSeek',
            value: function (e) {
              var t = this._isTimepointBuffered(e),
                n = !1,
                i = 0;
              if (e < 1 && this._mediaElement.buffered.length > 0) {
                var r = this._mediaElement.buffered.start(0);
                ((r < 1 && e < r) || o.default.safari) && ((n = !0), (i = o.default.safari ? 0.1 : r));
              }
              if (n) (this._requestSetTime = !0), (this._mediaElement.currentTime = i);
              else if (t) {
                if (this._alwaysSeekKeyframe) {
                  var a = this._msectl.getNearestKeyframe(Math.floor(1e3 * e));
                  (this._requestSetTime = !0), (this._mediaElement.currentTime = null != a ? a.dts / 1e3 : e);
                } else (this._requestSetTime = !0), (this._mediaElement.currentTime = e);
                null != this._progressChecker && this._checkProgressAndResume();
              } else
                null != this._progressChecker &&
                  (window.clearInterval(this._progressChecker), (this._progressChecker = null)),
                  this._msectl.seek(e),
                  this._transmuxer.seek(Math.floor(1e3 * e)),
                  this._config.accurateSeek && ((this._requestSetTime = !0), (this._mediaElement.currentTime = e));
            },
          },
          {
            key: '_checkAndApplyUnbufferedSeekpoint',
            value: function () {
              if (this._seekpointRecord)
                if (this._seekpointRecord.recordTime <= this._now() - 100) {
                  var e = this._mediaElement.currentTime;
                  (this._seekpointRecord = null),
                    this._isTimepointBuffered(e) ||
                      (null != this._progressChecker &&
                        (window.clearTimeout(this._progressChecker), (this._progressChecker = null)),
                      this._msectl.seek(e),
                      this._transmuxer.seek(Math.floor(1e3 * e)),
                      this._config.accurateSeek && ((this._requestSetTime = !0), (this._mediaElement.currentTime = e)));
                } else window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this), 50);
            },
          },
          {
            key: '_checkAndResumeStuckPlayback',
            value: function (e) {
              var t = this._mediaElement;
              if (e || !this._receivedCanPlay || t.readyState < 2) {
                var n = t.buffered;
                n.length > 0 &&
                  t.currentTime < n.start(0) &&
                  (s.default.w(this.TAG, 'Playback seems stuck at ' + t.currentTime + ', seek to ' + n.start(0)),
                  (this._requestSetTime = !0),
                  (this._mediaElement.currentTime = n.start(0)),
                  this._mediaElement.removeEventListener('progress', this.e.onvProgress));
              } else this._mediaElement.removeEventListener('progress', this.e.onvProgress);
            },
          },
          {
            key: '_onvLoadedMetadata',
            value: function (e) {
              null != this._pendingSeekTime &&
                ((this._mediaElement.currentTime = this._pendingSeekTime), (this._pendingSeekTime = null));
            },
          },
          {
            key: '_onvSeeking',
            value: function (e) {
              var t = this._mediaElement.currentTime,
                n = this._mediaElement.buffered;
              if (this._requestSetTime) this._requestSetTime = !1;
              else {
                if (t < 1 && n.length > 0) {
                  var i = n.start(0);
                  if ((i < 1 && t < i) || o.default.safari)
                    return (
                      (this._requestSetTime = !0), void (this._mediaElement.currentTime = o.default.safari ? 0.1 : i)
                    );
                }
                if (this._isTimepointBuffered(t)) {
                  if (this._alwaysSeekKeyframe) {
                    var r = this._msectl.getNearestKeyframe(Math.floor(1e3 * t));
                    null != r && ((this._requestSetTime = !0), (this._mediaElement.currentTime = r.dts / 1e3));
                  }
                  null != this._progressChecker && this._checkProgressAndResume();
                } else
                  (this._seekpointRecord = { seekPoint: t, recordTime: this._now() }),
                    window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this), 50);
              }
            },
          },
          {
            key: '_onvCanPlay',
            value: function (e) {
              (this._receivedCanPlay = !0), this._mediaElement.removeEventListener('canplay', this.e.onvCanPlay);
            },
          },
          {
            key: '_onvStalled',
            value: function (e) {
              this._checkAndResumeStuckPlayback(!0);
            },
          },
          {
            key: '_onvProgress',
            value: function (e) {
              this._checkAndResumeStuckPlayback();
            },
          },
          {
            key: 'type',
            get: function () {
              return this._type;
            },
          },
          {
            key: 'buffered',
            get: function () {
              return this._mediaElement.buffered;
            },
          },
          {
            key: 'duration',
            get: function () {
              return this._mediaElement.duration;
            },
          },
          {
            key: 'volume',
            get: function () {
              return this._mediaElement.volume;
            },
            set: function (e) {
              this._mediaElement.volume = e;
            },
          },
          {
            key: 'muted',
            get: function () {
              return this._mediaElement.muted;
            },
            set: function (e) {
              this._mediaElement.muted = e;
            },
          },
          {
            key: 'currentTime',
            get: function () {
              return this._mediaElement ? this._mediaElement.currentTime : 0;
            },
            set: function (e) {
              this._mediaElement ? this._internalSeek(e) : (this._pendingSeekTime = e);
            },
          },
          {
            key: 'mediaInfo',
            get: function () {
              return Object.assign({}, this._mediaInfo);
            },
          },
          {
            key: 'statisticsInfo',
            get: function () {
              return (
                null == this._statisticsInfo && (this._statisticsInfo = {}),
                (this._statisticsInfo = this._fillStatisticsInfo(this._statisticsInfo)),
                Object.assign({}, this._statisticsInfo)
              );
            },
          },
        ]),
        e
      );
    })();
    (t.default = v), (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      r = h(n(2)),
      a = h(n(0)),
      s = h(n(8)),
      o = h(n(14)),
      u = h(n(5)),
      l = h(n(43)),
      d = h(n(9));
    function h(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var f = (function () {
      function e(t, i) {
        if (
          ((function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
          })(this, e),
          (this.TAG = 'Transmuxer'),
          (this._emitter = new r.default()),
          i.enableWorker && 'undefined' != typeof Worker)
        )
          try {
            var d = n(44);
            (this._worker = d(l.default)),
              (this._workerDestroying = !1),
              this._worker.addEventListener('message', this._onWorkerMessage.bind(this)),
              this._worker.postMessage({ cmd: 'init', param: [t, i] }),
              (this.e = { onLoggingConfigChanged: this._onLoggingConfigChanged.bind(this) }),
              s.default.registerListener(this.e.onLoggingConfigChanged),
              this._worker.postMessage({ cmd: 'logging_config', param: s.default.getConfig() });
          } catch (e) {
            a.default.e(this.TAG, 'Error while initialize transmuxing worker, fallback to inline transmuxing'),
              (this._worker = null),
              (this._controller = new o.default(t, i));
          }
        else this._controller = new o.default(t, i);
        if (this._controller) {
          var h = this._controller;
          h.on(u.default.IO_ERROR, this._onIOError.bind(this)),
            h.on(u.default.DEMUX_ERROR, this._onDemuxError.bind(this)),
            h.on(u.default.INIT_SEGMENT, this._onInitSegment.bind(this)),
            h.on(u.default.MEDIA_SEGMENT, this._onMediaSegment.bind(this)),
            h.on(u.default.LOADING_COMPLETE, this._onLoadingComplete.bind(this)),
            h.on(u.default.RECOVERED_EARLY_EOF, this._onRecoveredEarlyEof.bind(this)),
            h.on(u.default.MEDIA_INFO, this._onMediaInfo.bind(this)),
            h.on(u.default.STATISTICS_INFO, this._onStatisticsInfo.bind(this)),
            h.on(u.default.RECOMMEND_SEEKPOINT, this._onRecommendSeekpoint.bind(this)),
            h.on(u.default.LOADED_SEI, this._onLoadedSei.bind(this));
        }
      }
      return (
        i(e, [
          {
            key: 'destroy',
            value: function () {
              this._worker
                ? this._workerDestroying ||
                  ((this._workerDestroying = !0),
                  this._worker.postMessage({ cmd: 'destroy' }),
                  s.default.removeListener(this.e.onLoggingConfigChanged),
                  (this.e = null))
                : (this._controller.destroy(), (this._controller = null)),
                this._emitter.removeAllListeners(),
                (this._emitter = null);
            },
          },
          {
            key: 'on',
            value: function (e, t) {
              this._emitter.addListener(e, t);
            },
          },
          {
            key: 'off',
            value: function (e, t) {
              this._emitter.removeListener(e, t);
            },
          },
          {
            key: 'hasWorker',
            value: function () {
              return null != this._worker;
            },
          },
          {
            key: 'open',
            value: function () {
              this._worker ? this._worker.postMessage({ cmd: 'start' }) : this._controller.start();
            },
          },
          {
            key: 'close',
            value: function () {
              this._worker ? this._worker.postMessage({ cmd: 'stop' }) : this._controller.stop();
            },
          },
          {
            key: 'seek',
            value: function (e) {
              this._worker ? this._worker.postMessage({ cmd: 'seek', param: e }) : this._controller.seek(e);
            },
          },
          {
            key: 'pause',
            value: function () {
              this._worker ? this._worker.postMessage({ cmd: 'pause' }) : this._controller.pause();
            },
          },
          {
            key: 'resume',
            value: function () {
              this._worker ? this._worker.postMessage({ cmd: 'resume' }) : this._controller.resume();
            },
          },
          {
            key: '_onInitSegment',
            value: function (e, t) {
              var n = this;
              Promise.resolve().then(function () {
                n._emitter.emit(u.default.INIT_SEGMENT, e, t);
              });
            },
          },
          {
            key: '_onMediaSegment',
            value: function (e, t) {
              var n = this;
              Promise.resolve().then(function () {
                n._emitter.emit(u.default.MEDIA_SEGMENT, e, t);
              });
            },
          },
          {
            key: '_onLoadingComplete',
            value: function () {
              var e = this;
              Promise.resolve().then(function () {
                e._emitter.emit(u.default.LOADING_COMPLETE);
              });
            },
          },
          {
            key: '_onRecoveredEarlyEof',
            value: function () {
              var e = this;
              Promise.resolve().then(function () {
                e._emitter.emit(u.default.RECOVERED_EARLY_EOF);
              });
            },
          },
          {
            key: '_onMediaInfo',
            value: function (e) {
              var t = this;
              Promise.resolve().then(function () {
                t._emitter.emit(u.default.MEDIA_INFO, e);
              });
            },
          },
          {
            key: '_onStatisticsInfo',
            value: function (e) {
              var t = this;
              Promise.resolve().then(function () {
                t._emitter.emit(u.default.STATISTICS_INFO, e);
              });
            },
          },
          {
            key: '_onIOError',
            value: function (e, t) {
              var n = this;
              Promise.resolve().then(function () {
                n._emitter.emit(u.default.IO_ERROR, e, t);
              });
            },
          },
          {
            key: '_onDemuxError',
            value: function (e, t) {
              var n = this;
              Promise.resolve().then(function () {
                n._emitter.emit(u.default.DEMUX_ERROR, e, t);
              });
            },
          },
          {
            key: '_onRecommendSeekpoint',
            value: function (e) {
              var t = this;
              Promise.resolve().then(function () {
                t._emitter.emit(u.default.RECOMMEND_SEEKPOINT, e);
              });
            },
          },
          {
            key: '_onLoadedSei',
            value: function (e, t) {
              var n = this;
              Promise.resolve().then(function () {
                n._emitter.emit(u.default.LOADED_SEI, e, t);
              });
            },
          },
          {
            key: '_onLoggingConfigChanged',
            value: function (e) {
              this._worker && this._worker.postMessage({ cmd: 'logging_config', param: e });
            },
          },
          {
            key: '_onWorkerMessage',
            value: function (e) {
              var t = e.data,
                n = t.data;
              if ('destroyed' === t.msg || this._workerDestroying)
                return (this._workerDestroying = !1), this._worker.terminate(), void (this._worker = null);
              switch (t.msg) {
                case u.default.INIT_SEGMENT:
                case u.default.MEDIA_SEGMENT:
                  this._emitter.emit(t.msg, n.type, n.data);
                  break;
                case u.default.LOADING_COMPLETE:
                case u.default.RECOVERED_EARLY_EOF:
                  this._emitter.emit(t.msg);
                  break;
                case u.default.MEDIA_INFO:
                  Object.setPrototypeOf(n, d.default.prototype), this._emitter.emit(t.msg, n);
                  break;
                case u.default.STATISTICS_INFO:
                  this._emitter.emit(t.msg, n);
                  break;
                case u.default.IO_ERROR:
                case u.default.DEMUX_ERROR:
                  this._emitter.emit(t.msg, n.type, n.info);
                  break;
                case u.default.RECOMMEND_SEEKPOINT:
                  this._emitter.emit(t.msg, n);
                  break;
                case 'logcat_callback':
                  a.default.emitter.emit('log', n.type, n.logcat);
              }
            },
          },
        ]),
        e
      );
    })();
    (t.default = f), (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            },
      r = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      a = f(n(0)),
      s = f(n(36)),
      o = f(n(38)),
      u = f(n(10)),
      l = f(n(9)),
      d = n(1),
      h = f(n(2));
    function f(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var c = (function () {
      function e(t, n) {
        var i;
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, e),
          (this.TAG = 'FLVDemuxer'),
          (this._emitter = new h.default()),
          (this._config = n),
          (this._onError = null),
          (this._onMediaInfo = null),
          (this._onTrackMetadata = null),
          (this._onDataAvailable = null),
          (this._dataOffset = t.dataOffset),
          (this._firstParse = !0),
          (this._dispatch = !1),
          (this._hasAudio = t.hasAudioTrack),
          (this._hasVideo = t.hasVideoTrack),
          (this._hasAudioFlagOverrided = !1),
          (this._hasVideoFlagOverrided = !1),
          (this._audioInitialMetadataDispatched = !1),
          (this._videoInitialMetadataDispatched = !1),
          (this._mediaInfo = new l.default()),
          (this._mediaInfo.hasAudio = this._hasAudio),
          (this._mediaInfo.hasVideo = this._hasVideo),
          (this._metadata = null),
          (this._audioMetadata = null),
          (this._videoMetadata = null),
          (this._naluLengthSize = 4),
          (this._timestampBase = 0),
          (this._timescale = 1e3),
          (this._duration = 0),
          (this._durationOverrided = !1),
          (this._referenceFrameRate = { fixed: !0, fps: 23.976, fps_num: 23976, fps_den: 1e3 }),
          (this._flvSoundRateTable = [5500, 11025, 22050, 44100, 48e3]),
          (this._mpegSamplingRates = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350]),
          (this._mpegAudioV10SampleRateTable = [44100, 48e3, 32e3, 0]),
          (this._mpegAudioV20SampleRateTable = [22050, 24e3, 16e3, 0]),
          (this._mpegAudioV25SampleRateTable = [11025, 12e3, 8e3, 0]),
          (this._mpegAudioL1BitRateTable = [0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, -1]),
          (this._mpegAudioL2BitRateTable = [0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, -1]),
          (this._mpegAudioL3BitRateTable = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1]),
          (this._videoTrack = { type: 'video', id: 1, sequenceNumber: 0, samples: [], length: 0 }),
          (this._audioTrack = { type: 'audio', id: 2, sequenceNumber: 0, samples: [], length: 0 }),
          (this._littleEndian =
            ((i = new ArrayBuffer(2)), new DataView(i).setInt16(0, 256, !0), 256 === new Int16Array(i)[0]));
      }
      return (
        r(
          e,
          [
            {
              key: 'destroy',
              value: function () {
                (this._mediaInfo = null),
                  (this._metadata = null),
                  (this._audioMetadata = null),
                  (this._videoMetadata = null),
                  (this._videoTrack = null),
                  (this._audioTrack = null),
                  (this._onError = null),
                  (this._onMediaInfo = null),
                  (this._onTrackMetadata = null),
                  (this._onDataAvailable = null),
                  this._emitter.removeAllListeners(),
                  (this._emitter = null);
              },
            },
            {
              key: 'bindDataSource',
              value: function (e) {
                return (e.onDataArrival = this.parseChunks.bind(this)), this;
              },
            },
            {
              key: 'resetMediaInfo',
              value: function () {
                this._mediaInfo = new l.default();
              },
            },
            {
              key: '_isInitialMetadataDispatched',
              value: function () {
                return this._hasAudio && this._hasVideo
                  ? this._audioInitialMetadataDispatched && this._videoInitialMetadataDispatched
                  : this._hasAudio && !this._hasVideo
                  ? this._audioInitialMetadataDispatched
                  : !(this._hasAudio || !this._hasVideo) && this._videoInitialMetadataDispatched;
              },
            },
            {
              key: 'parseChunks',
              value: function (t, n) {
                if (!(this._onError && this._onMediaInfo && this._onTrackMetadata && this._onDataAvailable))
                  throw new d.IllegalStateException(
                    'Flv: onError & onMediaInfo & onTrackMetadata & onDataAvailable callback must be specified'
                  );
                var i = 0,
                  r = this._littleEndian;
                if (0 === n) {
                  if (!(t.byteLength > 13)) return 0;
                  i = e.probe(t).dataOffset;
                }
                this._firstParse &&
                  ((this._firstParse = !1),
                  n + i !== this._dataOffset &&
                    a.default.w(this.TAG, 'First time parsing but chunk byteStart invalid!'),
                  0 !== new DataView(t, i).getUint32(0, !r) && a.default.w(this.TAG, 'PrevTagSize0 !== 0 !!!'),
                  (i += 4));
                for (; i < t.byteLength; ) {
                  this._dispatch = !0;
                  var s = new DataView(t, i);
                  if (i + 11 + 4 > t.byteLength) break;
                  var o = s.getUint8(0),
                    u = 16777215 & s.getUint32(0, !r);
                  if (i + 11 + u + 4 > t.byteLength) break;
                  if (8 === o || 9 === o || 18 === o) {
                    var l = s.getUint8(4),
                      h = s.getUint8(5),
                      f = s.getUint8(6) | (h << 8) | (l << 16) | (s.getUint8(7) << 24);
                    0 !== (16777215 & s.getUint32(7, !r)) && a.default.w(this.TAG, 'Meet tag which has StreamID != 0!');
                    var c = i + 11;
                    switch (o) {
                      case 8:
                        this._parseAudioData(t, c, u, f);
                        break;
                      case 9:
                        this._parseVideoData(t, c, u, f, n + i);
                        break;
                      case 18:
                        this._parseScriptData(t, c, u);
                    }
                    var _ = s.getUint32(11 + u, !r);
                    _ !== 11 + u && a.default.w(this.TAG, 'Invalid PrevTagSize ' + _), (i += 11 + u + 4);
                  } else a.default.w(this.TAG, 'Unsupported tag type ' + o + ', skipped'), (i += 11 + u + 4);
                }
                return (
                  this._isInitialMetadataDispatched() &&
                    this._dispatch &&
                    (this._audioTrack.length || this._videoTrack.length) &&
                    this._onDataAvailable(this._audioTrack, this._videoTrack),
                  i
                );
              },
            },
            {
              key: '_parseScriptData',
              value: function (e, t, n) {
                var r = s.default.parseScriptData(e, t, n);
                if (r.hasOwnProperty('onMetaData')) {
                  if (null == r.onMetaData || 'object' !== i(r.onMetaData))
                    return void a.default.w(this.TAG, 'Invalid onMetaData structure!');
                  this._metadata && a.default.w(this.TAG, 'Found another onMetaData tag!'), (this._metadata = r);
                  var o = this._metadata.onMetaData;
                  if (
                    (this._emitter.emit('metadata_arrived', o),
                    'boolean' == typeof o.hasAudio &&
                      !1 === this._hasAudioFlagOverrided &&
                      ((this._hasAudio = o.hasAudio), (this._mediaInfo.hasAudio = this._hasAudio)),
                    'boolean' == typeof o.hasVideo &&
                      !1 === this._hasVideoFlagOverrided &&
                      ((this._hasVideo = o.hasVideo), (this._mediaInfo.hasVideo = this._hasVideo)),
                    'number' == typeof o.audiodatarate && (this._mediaInfo.audioDataRate = o.audiodatarate),
                    'number' == typeof o.videodatarate && (this._mediaInfo.videoDataRate = o.videodatarate),
                    'number' == typeof o.width && (this._mediaInfo.width = o.width),
                    'number' == typeof o.height && (this._mediaInfo.height = o.height),
                    'number' == typeof o.duration)
                  ) {
                    if (!this._durationOverrided) {
                      var u = Math.floor(o.duration * this._timescale);
                      (this._duration = u), (this._mediaInfo.duration = u);
                    }
                  } else this._mediaInfo.duration = 0;
                  if ('number' == typeof o.framerate) {
                    var l = Math.floor(1e3 * o.framerate);
                    if (l > 0) {
                      var d = l / 1e3;
                      (this._referenceFrameRate.fixed = !0),
                        (this._referenceFrameRate.fps = d),
                        (this._referenceFrameRate.fps_num = l),
                        (this._referenceFrameRate.fps_den = 1e3),
                        (this._mediaInfo.fps = d);
                    }
                  }
                  if ('object' === i(o.keyframes)) {
                    this._mediaInfo.hasKeyframesIndex = !0;
                    var h = o.keyframes;
                    (this._mediaInfo.keyframesIndex = this._parseKeyframesIndex(h)), (o.keyframes = null);
                  } else this._mediaInfo.hasKeyframesIndex = !1;
                  (this._dispatch = !1),
                    (this._mediaInfo.metadata = o),
                    a.default.v(this.TAG, 'Parsed onMetaData'),
                    this._mediaInfo.isComplete() && this._onMediaInfo(this._mediaInfo);
                }
              },
            },
            {
              key: '_parseKeyframesIndex',
              value: function (e) {
                for (var t = [], n = [], i = 1; i < e.times.length; i++) {
                  var r = this._timestampBase + Math.floor(1e3 * e.times[i]);
                  t.push(r), n.push(e.filepositions[i]);
                }
                return { times: t, filepositions: n };
              },
            },
            {
              key: '_parseAudioData',
              value: function (e, t, n, i) {
                if (n <= 1) a.default.w(this.TAG, 'Flv: Invalid audio packet, missing SoundData payload!');
                else if (!0 !== this._hasAudioFlagOverrided || !1 !== this._hasAudio) {
                  this._littleEndian;
                  var r = new DataView(e, t, n).getUint8(0),
                    s = r >>> 4;
                  if (2 === s || 10 === s) {
                    var o = 0,
                      l = (12 & r) >>> 2;
                    if (l >= 0 && l <= 4) {
                      o = this._flvSoundRateTable[l];
                      var d = 1 & r,
                        h = this._audioMetadata,
                        f = this._audioTrack;
                      if (
                        (h ||
                          (!1 === this._hasAudio &&
                            !1 === this._hasAudioFlagOverrided &&
                            ((this._hasAudio = !0), (this._mediaInfo.hasAudio = !0)),
                          ((h = this._audioMetadata = {}).type = 'audio'),
                          (h.id = f.id),
                          (h.timescale = this._timescale),
                          (h.duration = this._duration),
                          (h.audioSampleRate = o),
                          (h.channelCount = 0 === d ? 1 : 2)),
                        10 === s)
                      ) {
                        var c = this._parseAACAudioData(e, t + 1, n - 1);
                        if (null == c) return;
                        if (0 === c.packetType) {
                          h.config && a.default.w(this.TAG, 'Found another AudioSpecificConfig!');
                          var _ = c.data;
                          (h.audioSampleRate = _.samplingRate),
                            (h.channelCount = _.channelCount),
                            (h.codec = _.codec),
                            (h.originalCodec = _.originalCodec),
                            (h.config = _.config),
                            (h.refSampleDuration = (1024 / h.audioSampleRate) * h.timescale),
                            a.default.v(this.TAG, 'Parsed AudioSpecificConfig'),
                            this._isInitialMetadataDispatched()
                              ? this._dispatch &&
                                (this._audioTrack.length || this._videoTrack.length) &&
                                this._onDataAvailable(this._audioTrack, this._videoTrack)
                              : (this._audioInitialMetadataDispatched = !0),
                            (this._dispatch = !1),
                            this._onTrackMetadata('audio', h);
                          var m = this._mediaInfo;
                          (m.audioCodec = h.originalCodec),
                            (m.audioSampleRate = h.audioSampleRate),
                            (m.audioChannelCount = h.channelCount),
                            m.hasVideo
                              ? null != m.videoCodec &&
                                (m.mimeType = 'video/x-flv; codecs="' + m.videoCodec + ',' + m.audioCodec + '"')
                              : (m.mimeType = 'video/x-flv; codecs="' + m.audioCodec + '"'),
                            m.isComplete() && this._onMediaInfo(m);
                        } else if (1 === c.packetType) {
                          var p = this._timestampBase + i,
                            v = { unit: c.data, length: c.data.byteLength, dts: p, pts: p };
                          f.samples.push(v), (f.length += c.data.length);
                        } else a.default.e(this.TAG, 'Flv: Unsupported AAC data type ' + c.packetType);
                      } else if (2 === s) {
                        if (!h.codec) {
                          var g = this._parseMP3AudioData(e, t + 1, n - 1, !0);
                          if (null == g) return;
                          (h.audioSampleRate = g.samplingRate),
                            (h.channelCount = g.channelCount),
                            (h.codec = g.codec),
                            (h.originalCodec = g.originalCodec),
                            (h.refSampleDuration = (1152 / h.audioSampleRate) * h.timescale),
                            a.default.v(this.TAG, 'Parsed MPEG Audio Frame Header'),
                            (this._audioInitialMetadataDispatched = !0),
                            this._onTrackMetadata('audio', h);
                          var y = this._mediaInfo;
                          (y.audioCodec = h.codec),
                            (y.audioSampleRate = h.audioSampleRate),
                            (y.audioChannelCount = h.channelCount),
                            (y.audioDataRate = g.bitRate),
                            y.hasVideo
                              ? null != y.videoCodec &&
                                (y.mimeType = 'video/x-flv; codecs="' + y.videoCodec + ',' + y.audioCodec + '"')
                              : (y.mimeType = 'video/x-flv; codecs="' + y.audioCodec + '"'),
                            y.isComplete() && this._onMediaInfo(y);
                        }
                        var E = this._parseMP3AudioData(e, t + 1, n - 1, !1);
                        if (null == E) return;
                        var b = this._timestampBase + i,
                          S = { unit: E, length: E.byteLength, dts: b, pts: b };
                        f.samples.push(S), (f.length += E.length);
                      }
                    } else this._onError(u.default.FORMAT_ERROR, 'Flv: Invalid audio sample rate idx: ' + l);
                  } else this._onError(u.default.CODEC_UNSUPPORTED, 'Flv: Unsupported audio codec idx: ' + s);
                }
              },
            },
            {
              key: '_parseAACAudioData',
              value: function (e, t, n) {
                if (!(n <= 1)) {
                  var i = {},
                    r = new Uint8Array(e, t, n);
                  return (
                    (i.packetType = r[0]),
                    0 === r[0]
                      ? (i.data = this._parseAACAudioSpecificConfig(e, t + 1, n - 1))
                      : (i.data = r.subarray(1)),
                    i
                  );
                }
                a.default.w(this.TAG, 'Flv: Invalid AAC packet, missing AACPacketType or/and Data!');
              },
            },
            {
              key: '_parseAACAudioSpecificConfig',
              value: function (e, t, n) {
                var i,
                  r,
                  a = new Uint8Array(e, t, n),
                  s = null,
                  o = 0,
                  l = null;
                if (
                  ((o = i = a[0] >>> 3),
                  (r = ((7 & a[0]) << 1) | (a[1] >>> 7)) < 0 || r >= this._mpegSamplingRates.length)
                )
                  this._onError(u.default.FORMAT_ERROR, 'Flv: AAC invalid sampling frequency index!');
                else {
                  var d = this._mpegSamplingRates[r],
                    h = (120 & a[1]) >>> 3;
                  if (!(h < 0 || h >= 8)) {
                    5 === o && ((l = ((7 & a[1]) << 1) | (a[2] >>> 7)), (124 & a[2]) >>> 2);
                    var f = self.navigator.userAgent.toLowerCase();
                    return (
                      -1 !== f.indexOf('firefox')
                        ? r >= 6
                          ? ((o = 5), (s = new Array(4)), (l = r - 3))
                          : ((o = 2), (s = new Array(2)), (l = r))
                        : -1 !== f.indexOf('android')
                        ? ((o = 2), (s = new Array(2)), (l = r))
                        : ((o = 5),
                          (l = r),
                          (s = new Array(4)),
                          r >= 6 ? (l = r - 3) : 1 === h && ((o = 2), (s = new Array(2)), (l = r))),
                      (s[0] = o << 3),
                      (s[0] |= (15 & r) >>> 1),
                      (s[1] = (15 & r) << 7),
                      (s[1] |= (15 & h) << 3),
                      5 === o && ((s[1] |= (15 & l) >>> 1), (s[2] = (1 & l) << 7), (s[2] |= 8), (s[3] = 0)),
                      {
                        config: s,
                        samplingRate: d,
                        channelCount: h,
                        codec: 'mp4a.40.' + o,
                        originalCodec: 'mp4a.40.' + i,
                      }
                    );
                  }
                  this._onError(u.default.FORMAT_ERROR, 'Flv: AAC invalid channel configuration');
                }
              },
            },
            {
              key: '_parseMP3AudioData',
              value: function (e, t, n, i) {
                if (!(n < 4)) {
                  this._littleEndian;
                  var r = new Uint8Array(e, t, n),
                    s = null;
                  if (i) {
                    if (255 !== r[0]) return;
                    var o = (r[1] >>> 3) & 3,
                      u = (6 & r[1]) >> 1,
                      l = (240 & r[2]) >>> 4,
                      d = (12 & r[2]) >>> 2,
                      h = 3 !== ((r[3] >>> 6) & 3) ? 2 : 1,
                      f = 0,
                      c = 0;
                    switch (o) {
                      case 0:
                        f = this._mpegAudioV25SampleRateTable[d];
                        break;
                      case 2:
                        f = this._mpegAudioV20SampleRateTable[d];
                        break;
                      case 3:
                        f = this._mpegAudioV10SampleRateTable[d];
                    }
                    switch (u) {
                      case 1:
                        34, l < this._mpegAudioL3BitRateTable.length && (c = this._mpegAudioL3BitRateTable[l]);
                        break;
                      case 2:
                        33, l < this._mpegAudioL2BitRateTable.length && (c = this._mpegAudioL2BitRateTable[l]);
                        break;
                      case 3:
                        32, l < this._mpegAudioL1BitRateTable.length && (c = this._mpegAudioL1BitRateTable[l]);
                    }
                    s = { bitRate: c, samplingRate: f, channelCount: h, codec: 'mp3', originalCodec: 'mp3' };
                  } else s = r;
                  return s;
                }
                a.default.w(this.TAG, 'Flv: Invalid MP3 packet, header missing!');
              },
            },
            {
              key: '_parseVideoData',
              value: function (e, t, n, i, r) {
                if (n <= 1) a.default.w(this.TAG, 'Flv: Invalid video packet, missing VideoData payload!');
                else if (!0 !== this._hasVideoFlagOverrided || !1 !== this._hasVideo) {
                  var s = new Uint8Array(e, t, n)[0],
                    o = (240 & s) >>> 4,
                    l = 15 & s;
                  7 === l
                    ? this._parseAVCVideoPacket(e, t + 1, n - 1, i, r, o)
                    : this._onError(u.default.CODEC_UNSUPPORTED, 'Flv: Unsupported codec in video frame: ' + l);
                }
              },
            },
            {
              key: '_parseAVCVideoPacket',
              value: function (e, t, n, i, r, s) {
                if (n < 4)
                  a.default.w(this.TAG, 'Flv: Invalid AVC packet, missing AVCPacketType or/and CompositionTime');
                else {
                  var o = this._littleEndian,
                    l = new DataView(e, t, n),
                    d = l.getUint8(0),
                    h = ((16777215 & l.getUint32(0, !o)) << 8) >> 8;
                  if (0 === d) this._parseAVCDecoderConfigurationRecord(e, t + 4, n - 4);
                  else if (1 === d) this._parseAVCVideoData(e, t + 4, n - 4, i, r, s, h);
                  else if (2 !== d)
                    return void this._onError(u.default.FORMAT_ERROR, 'Flv: Invalid video packet type ' + d);
                }
              },
            },
            {
              key: '_parseAVCDecoderConfigurationRecord',
              value: function (e, t, n) {
                if (n < 7) a.default.w(this.TAG, 'Flv: Invalid AVCDecoderConfigurationRecord, lack of data!');
                else {
                  var i = this._videoMetadata,
                    r = this._videoTrack,
                    s = this._littleEndian,
                    l = new DataView(e, t, n);
                  i
                    ? void 0 !== i.avcc && a.default.w(this.TAG, 'Found another AVCDecoderConfigurationRecord!')
                    : (!1 === this._hasVideo &&
                        !1 === this._hasVideoFlagOverrided &&
                        ((this._hasVideo = !0), (this._mediaInfo.hasVideo = !0)),
                      ((i = this._videoMetadata = {}).type = 'video'),
                      (i.id = r.id),
                      (i.timescale = this._timescale),
                      (i.duration = this._duration));
                  var d = l.getUint8(0),
                    h = l.getUint8(1);
                  l.getUint8(2), l.getUint8(3);
                  if (1 === d && 0 !== h)
                    if (
                      ((this._naluLengthSize = 1 + (3 & l.getUint8(4))),
                      3 === this._naluLengthSize || 4 === this._naluLengthSize)
                    ) {
                      var f = 31 & l.getUint8(5);
                      if (0 !== f) {
                        f > 1 && a.default.w(this.TAG, 'Flv: Strange AVCDecoderConfigurationRecord: SPS Count = ' + f);
                        for (var c = 6, _ = 0; _ < f; _++) {
                          var m = l.getUint16(c, !s);
                          if (((c += 2), 0 !== m)) {
                            var p = new Uint8Array(e, t + c, m);
                            c += m;
                            var v = o.default.parseSPS(p);
                            if (0 === _) {
                              (i.codecWidth = v.codec_size.width),
                                (i.codecHeight = v.codec_size.height),
                                (i.presentWidth = v.present_size.width),
                                (i.presentHeight = v.present_size.height),
                                (i.profile = v.profile_string),
                                (i.level = v.level_string),
                                (i.bitDepth = v.bit_depth),
                                (i.chromaFormat = v.chroma_format),
                                (i.sarRatio = v.par_ratio),
                                (i.frameRate = v.frame_rate),
                                (!1 !== v.frame_rate.fixed &&
                                  0 !== v.frame_rate.fps_num &&
                                  0 !== v.frame_rate.fps_den) ||
                                  (i.frameRate = this._referenceFrameRate);
                              var g = i.frameRate.fps_den,
                                y = i.frameRate.fps_num;
                              i.refSampleDuration = i.timescale * (g / y);
                              for (var E = p.subarray(1, 4), b = 'avc1.', S = 0; S < 3; S++) {
                                var k = E[S].toString(16);
                                k.length < 2 && (k = '0' + k), (b += k);
                              }
                              i.codec = b;
                              var L = this._mediaInfo;
                              (L.width = i.codecWidth),
                                (L.height = i.codecHeight),
                                (L.fps = i.frameRate.fps),
                                (L.profile = i.profile),
                                (L.level = i.level),
                                (L.refFrames = v.ref_frames),
                                (L.chromaFormat = v.chroma_format_string),
                                (L.sarNum = i.sarRatio.width),
                                (L.sarDen = i.sarRatio.height),
                                (L.videoCodec = b),
                                L.hasAudio
                                  ? null != L.audioCodec &&
                                    (L.mimeType = 'video/x-flv; codecs="' + L.videoCodec + ',' + L.audioCodec + '"')
                                  : (L.mimeType = 'video/x-flv; codecs="' + L.videoCodec + '"'),
                                L.isComplete() && this._onMediaInfo(L);
                            }
                          }
                        }
                        var w = l.getUint8(c);
                        if (0 !== w) {
                          w > 1 &&
                            a.default.w(this.TAG, 'Flv: Strange AVCDecoderConfigurationRecord: PPS Count = ' + w),
                            c++;
                          for (var R = 0; R < w; R++) {
                            var A = l.getUint16(c, !s);
                            (c += 2), 0 !== A && (c += A);
                          }
                          (i.avcc = new Uint8Array(n)),
                            i.avcc.set(new Uint8Array(e, t, n), 0),
                            a.default.v(this.TAG, 'Parsed AVCDecoderConfigurationRecord'),
                            this._isInitialMetadataDispatched()
                              ? this._dispatch &&
                                (this._audioTrack.length || this._videoTrack.length) &&
                                this._onDataAvailable(this._audioTrack, this._videoTrack)
                              : (this._videoInitialMetadataDispatched = !0),
                            (this._dispatch = !1),
                            this._onTrackMetadata('video', i);
                        } else
                          this._onError(u.default.FORMAT_ERROR, 'Flv: Invalid AVCDecoderConfigurationRecord: No PPS');
                      } else
                        this._onError(u.default.FORMAT_ERROR, 'Flv: Invalid AVCDecoderConfigurationRecord: No SPS');
                    } else
                      this._onError(
                        u.default.FORMAT_ERROR,
                        'Flv: Strange NaluLengthSizeMinusOne: ' + (this._naluLengthSize - 1)
                      );
                  else this._onError(u.default.FORMAT_ERROR, 'Flv: Invalid AVCDecoderConfigurationRecord');
                }
              },
            },
            {
              key: '_parseAVCVideoData',
              value: function (e, t, n, i, r, s, o) {
                for (
                  var u = this._littleEndian,
                    l = new DataView(e, t, n),
                    d = [],
                    h = 0,
                    f = 0,
                    c = this._naluLengthSize,
                    _ = this._timestampBase + i,
                    m = 1 === s;
                  f < n;

                ) {
                  if (f + 4 >= n) {
                    a.default.w(
                      this.TAG,
                      'Malformed Nalu near timestamp ' + _ + ', offset = ' + f + ', dataSize = ' + n
                    );
                    break;
                  }
                  var p = l.getUint32(f, !u);
                  if ((3 === c && (p >>>= 8), p > n - c))
                    return void a.default.w(this.TAG, 'Malformed Nalus near timestamp ' + _ + ', NaluSize > DataSize!');
                  var v = 31 & l.getUint8(f + c);
                  5 === v && (m = !0);
                  var g = new Uint8Array(e, t + f, c + p),
                    y = { type: v, data: g };
                  d.push(y), (h += g.byteLength), (f += c + p);
                }
                if (d.length) {
                  var E = this._videoTrack,
                    b = { units: d, length: h, isKeyframe: m, dts: _, cts: o, pts: _ + o };
                  m && (b.fileposition = r), E.samples.push(b), (E.length += h);
                }
              },
            },
            {
              key: 'onTrackMetadata',
              get: function () {
                return this._onTrackMetadata;
              },
              set: function (e) {
                this._onTrackMetadata = e;
              },
            },
            {
              key: 'onMediaInfo',
              get: function () {
                return this._onMediaInfo;
              },
              set: function (e) {
                this._onMediaInfo = e;
              },
            },
            {
              key: 'onError',
              get: function () {
                return this._onError;
              },
              set: function (e) {
                this._onError = e;
              },
            },
            {
              key: 'onDataAvailable',
              get: function () {
                return this._onDataAvailable;
              },
              set: function (e) {
                this._onDataAvailable = e;
              },
            },
            {
              key: 'timestampBase',
              get: function () {
                return this._timestampBase;
              },
              set: function (e) {
                this._timestampBase = e;
              },
            },
            {
              key: 'overridedDuration',
              get: function () {
                return this._duration;
              },
              set: function (e) {
                (this._durationOverrided = !0), (this._duration = e), (this._mediaInfo.duration = e);
              },
            },
            {
              key: 'overridedHasAudio',
              set: function (e) {
                (this._hasAudioFlagOverrided = !0), (this._hasAudio = e), (this._mediaInfo.hasAudio = e);
              },
            },
            {
              key: 'overridedHasVideo',
              set: function (e) {
                (this._hasVideoFlagOverrided = !0), (this._hasVideo = e), (this._mediaInfo.hasVideo = e);
              },
            },
          ],
          [
            {
              key: 'probe',
              value: function (e) {
                var t = new Uint8Array(e),
                  n = { match: !1 };
                if (70 !== t[0] || 76 !== t[1] || 86 !== t[2] || 1 !== t[3]) return n;
                var i,
                  r,
                  a = (4 & t[4]) >>> 2 != 0,
                  s = 0 != (1 & t[4]),
                  o = ((i = t)[(r = 5)] << 24) | (i[r + 1] << 16) | (i[r + 2] << 8) | i[r + 3];
                return o < 9 ? n : { match: !0, consumed: o, dataOffset: o, hasAudioTrack: a, hasVideoTrack: s };
              },
            },
          ]
        ),
        e
      );
    })();
    (t.default = c), (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      r = o(n(0)),
      a = o(n(37)),
      s = n(1);
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var u,
      l = ((u = new ArrayBuffer(2)), new DataView(u).setInt16(0, 256, !0), 256 === new Int16Array(u)[0]),
      d = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
          })(this, e);
        }
        return (
          i(e, null, [
            {
              key: 'parseScriptData',
              value: function (t, n, i) {
                var a = {};
                try {
                  var s = e.parseValue(t, n, i),
                    o = e.parseValue(t, n + s.size, i - s.size);
                  a[s.data] = o.data;
                } catch (e) {
                  r.default.e('AMF', e.toString());
                }
                return a;
              },
            },
            {
              key: 'parseObject',
              value: function (t, n, i) {
                if (i < 3) throw new s.IllegalStateException('Data not enough when parse ScriptDataObject');
                var r = e.parseString(t, n, i),
                  a = e.parseValue(t, n + r.size, i - r.size),
                  o = a.objectEnd;
                return { data: { name: r.data, value: a.data }, size: r.size + a.size, objectEnd: o };
              },
            },
            {
              key: 'parseVariable',
              value: function (t, n, i) {
                return e.parseObject(t, n, i);
              },
            },
            {
              key: 'parseString',
              value: function (e, t, n) {
                if (n < 2) throw new s.IllegalStateException('Data not enough when parse String');
                var i = new DataView(e, t, n).getUint16(0, !l);
                return { data: i > 0 ? (0, a.default)(new Uint8Array(e, t + 2, i)) : '', size: 2 + i };
              },
            },
            {
              key: 'parseLongString',
              value: function (e, t, n) {
                if (n < 4) throw new s.IllegalStateException('Data not enough when parse LongString');
                var i = new DataView(e, t, n).getUint32(0, !l);
                return { data: i > 0 ? (0, a.default)(new Uint8Array(e, t + 4, i)) : '', size: 4 + i };
              },
            },
            {
              key: 'parseDate',
              value: function (e, t, n) {
                if (n < 10) throw new s.IllegalStateException('Data size invalid when parse Date');
                var i = new DataView(e, t, n),
                  r = i.getFloat64(0, !l),
                  a = i.getInt16(8, !l);
                return { data: new Date((r += 60 * a * 1e3)), size: 10 };
              },
            },
            {
              key: 'parseValue',
              value: function (t, n, i) {
                if (i < 1) throw new s.IllegalStateException('Data not enough when parse Value');
                var a = new DataView(t, n, i),
                  o = 1,
                  u = a.getUint8(0),
                  d = void 0,
                  h = !1;
                try {
                  switch (u) {
                    case 0:
                      (d = a.getFloat64(1, !l)), (o += 8);
                      break;
                    case 1:
                      (d = !!a.getUint8(1)), (o += 1);
                      break;
                    case 2:
                      var f = e.parseString(t, n + 1, i - 1);
                      (d = f.data), (o += f.size);
                      break;
                    case 3:
                      d = {};
                      var c = 0;
                      9 == (16777215 & a.getUint32(i - 4, !l)) && (c = 3);
                      for (var _ = 1e4; o < i - 4 && _-- > 0; ) {
                        var m = e.parseObject(t, n + o, i - o - c);
                        if (m.objectEnd) break;
                        (d[m.data.name] = m.data.value), (o += m.size);
                      }
                      if (o <= i - 3) 9 === (16777215 & a.getUint32(o - 1, !l)) && (o += 3);
                      break;
                    case 8:
                      (d = {}), (o += 4);
                      var p = 0;
                      9 == (16777215 & a.getUint32(i - 4, !l)) && (p = 3);
                      for (var v = 1e4; o < i - 8 && v-- > 0; ) {
                        var g = e.parseVariable(t, n + o, i - o - p);
                        if (g.objectEnd) break;
                        (d[g.data.name] = g.data.value), (o += g.size);
                      }
                      if (o <= i - 3) 9 === (16777215 & a.getUint32(o - 1, !l)) && (o += 3);
                      break;
                    case 9:
                      (d = void 0), (o = 1), (h = !0);
                      break;
                    case 10:
                      d = [];
                      var y = a.getUint32(1, !l);
                      o += 4;
                      for (var E = 0; E < y; E++) {
                        var b = e.parseValue(t, n + o, i - o);
                        d.push(b.data), (o += b.size);
                      }
                      break;
                    case 11:
                      var S = e.parseDate(t, n + 1, i - 1);
                      (d = S.data), (o += S.size);
                      break;
                    case 12:
                      var k = e.parseString(t, n + 1, i - 1);
                      (d = k.data), (o += k.size);
                      break;
                    default:
                      (o = i), r.default.w('AMF', 'Unsupported AMF value type ' + u);
                  }
                } catch (e) {
                  r.default.e('AMF', e.toString());
                }
                return { data: d, size: o, objectEnd: h };
              },
            },
          ]),
          e
        );
      })();
    (t.default = d), (e.exports = t.default);
  },
  function (e, t, n) {
    function i(e, t, n) {
      var i = e;
      if (t + n < i.length) {
        for (; n--; ) if (128 != (192 & i[++t])) return !1;
        return !0;
      }
      return !1;
    }
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function (e) {
        for (var t = [], n = e, r = 0, a = e.length; r < a; )
          if (n[r] < 128) t.push(String.fromCharCode(n[r])), ++r;
          else {
            if (n[r] < 192);
            else if (n[r] < 224) {
              if (i(n, r, 1)) {
                var s = ((31 & n[r]) << 6) | (63 & n[r + 1]);
                if (s >= 128) {
                  t.push(String.fromCharCode(65535 & s)), (r += 2);
                  continue;
                }
              }
            } else if (n[r] < 240) {
              if (i(n, r, 2)) {
                var o = ((15 & n[r]) << 12) | ((63 & n[r + 1]) << 6) | (63 & n[r + 2]);
                if (o >= 2048 && 55296 != (63488 & o)) {
                  t.push(String.fromCharCode(65535 & o)), (r += 3);
                  continue;
                }
              }
            } else if (n[r] < 248 && i(n, r, 3)) {
              var u = ((7 & n[r]) << 18) | ((63 & n[r + 1]) << 12) | ((63 & n[r + 2]) << 6) | (63 & n[r + 3]);
              if (u > 65536 && u < 1114112) {
                (u -= 65536),
                  t.push(String.fromCharCode((u >>> 10) | 55296)),
                  t.push(String.fromCharCode((1023 & u) | 56320)),
                  (r += 4);
                continue;
              }
            }
            t.push(String.fromCharCode(65533)), ++r;
          }
        return t.join('');
      }),
      (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i,
      r = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      a = n(39),
      s = (i = a) && i.__esModule ? i : { default: i };
    var o = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, e);
      }
      return (
        r(e, null, [
          {
            key: '_ebsp2rbsp',
            value: function (e) {
              for (var t = e, n = t.byteLength, i = new Uint8Array(n), r = 0, a = 0; a < n; a++)
                (a >= 2 && 3 === t[a] && 0 === t[a - 1] && 0 === t[a - 2]) || ((i[r] = t[a]), r++);
              return new Uint8Array(i.buffer, 0, r);
            },
          },
          {
            key: 'parseSPS',
            value: function (t) {
              var n = e._ebsp2rbsp(t),
                i = new s.default(n);
              i.readByte();
              var r = i.readByte();
              i.readByte();
              var a = i.readByte();
              i.readUEG();
              var o = e.getProfileString(r),
                u = e.getLevelString(a),
                l = 1,
                d = 420,
                h = 8;
              if (
                (100 === r ||
                  110 === r ||
                  122 === r ||
                  244 === r ||
                  44 === r ||
                  83 === r ||
                  86 === r ||
                  118 === r ||
                  128 === r ||
                  138 === r ||
                  144 === r) &&
                (3 === (l = i.readUEG()) && i.readBits(1),
                l <= 3 && (d = [0, 420, 422, 444][l]),
                (h = i.readUEG() + 8),
                i.readUEG(),
                i.readBits(1),
                i.readBool())
              )
                for (var f = 3 !== l ? 8 : 12, c = 0; c < f; c++)
                  i.readBool() && (c < 6 ? e._skipScalingList(i, 16) : e._skipScalingList(i, 64));
              i.readUEG();
              var _ = i.readUEG();
              if (0 === _) i.readUEG();
              else if (1 === _) {
                i.readBits(1), i.readSEG(), i.readSEG();
                for (var m = i.readUEG(), p = 0; p < m; p++) i.readSEG();
              }
              var v = i.readUEG();
              i.readBits(1);
              var g = i.readUEG(),
                y = i.readUEG(),
                E = i.readBits(1);
              0 === E && i.readBits(1), i.readBits(1);
              var b = 0,
                S = 0,
                k = 0,
                L = 0;
              i.readBool() && ((b = i.readUEG()), (S = i.readUEG()), (k = i.readUEG()), (L = i.readUEG()));
              var w = 1,
                R = 1,
                A = 0,
                O = !0,
                T = 0,
                C = 0;
              if (i.readBool()) {
                if (i.readBool()) {
                  var I = i.readByte();
                  I > 0 && I < 16
                    ? ((w = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2][I - 1]),
                      (R = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1][I - 1]))
                    : 255 === I && ((w = (i.readByte() << 8) | i.readByte()), (R = (i.readByte() << 8) | i.readByte()));
                }
                if (
                  (i.readBool() && i.readBool(),
                  i.readBool() && (i.readBits(4), i.readBool() && i.readBits(24)),
                  i.readBool() && (i.readUEG(), i.readUEG()),
                  i.readBool())
                ) {
                  var M = i.readBits(32),
                    x = i.readBits(32);
                  (O = i.readBool()), (A = (T = x) / (C = 2 * M));
                }
              }
              var D = 1;
              (1 === w && 1 === R) || (D = w / R);
              var B = 0,
                P = 0;
              0 === l ? ((B = 1), (P = 2 - E)) : ((B = 3 === l ? 1 : 2), (P = (1 === l ? 2 : 1) * (2 - E)));
              var U = 16 * (g + 1),
                N = 16 * (y + 1) * (2 - E);
              (U -= (b + S) * B), (N -= (k + L) * P);
              var F = Math.ceil(U * D);
              return (
                i.destroy(),
                (i = null),
                {
                  profile_string: o,
                  level_string: u,
                  bit_depth: h,
                  ref_frames: v,
                  chroma_format: d,
                  chroma_format_string: e.getChromaFormatString(d),
                  frame_rate: { fixed: O, fps: A, fps_den: C, fps_num: T },
                  par_ratio: { width: w, height: R },
                  codec_size: { width: U, height: N },
                  present_size: { width: F, height: N },
                }
              );
            },
          },
          {
            key: '_skipScalingList',
            value: function (e, t) {
              for (var n = 8, i = 8, r = 0; r < t; r++)
                0 !== i && (i = (n + e.readSEG() + 256) % 256), (n = 0 === i ? n : i);
            },
          },
          {
            key: 'getProfileString',
            value: function (e) {
              switch (e) {
                case 66:
                  return 'Baseline';
                case 77:
                  return 'Main';
                case 88:
                  return 'Extended';
                case 100:
                  return 'High';
                case 110:
                  return 'High10';
                case 122:
                  return 'High422';
                case 244:
                  return 'High444';
                default:
                  return 'Unknown';
              }
            },
          },
          {
            key: 'getLevelString',
            value: function (e) {
              return (e / 10).toFixed(1);
            },
          },
          {
            key: 'getChromaFormatString',
            value: function (e) {
              switch (e) {
                case 420:
                  return '4:2:0';
                case 422:
                  return '4:2:2';
                case 444:
                  return '4:4:4';
                default:
                  return 'Unknown';
              }
            },
          },
        ]),
        e
      );
    })();
    (t.default = o), (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      r = n(1);
    var a = (function () {
      function e(t) {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, e),
          (this.TAG = 'ExpGolomb'),
          (this._buffer = t),
          (this._buffer_index = 0),
          (this._total_bytes = t.byteLength),
          (this._total_bits = 8 * t.byteLength),
          (this._current_word = 0),
          (this._current_word_bits_left = 0);
      }
      return (
        i(e, [
          {
            key: 'destroy',
            value: function () {
              this._buffer = null;
            },
          },
          {
            key: '_fillCurrentWord',
            value: function () {
              var e = this._total_bytes - this._buffer_index;
              if (e <= 0) throw new r.IllegalStateException('ExpGolomb: _fillCurrentWord() but no bytes available');
              var t = Math.min(4, e),
                n = new Uint8Array(4);
              n.set(this._buffer.subarray(this._buffer_index, this._buffer_index + t)),
                (this._current_word = new DataView(n.buffer).getUint32(0, !1)),
                (this._buffer_index += t),
                (this._current_word_bits_left = 8 * t);
            },
          },
          {
            key: 'readBits',
            value: function (e) {
              if (e > 32) throw new r.InvalidArgumentException('ExpGolomb: readBits() bits exceeded max 32bits!');
              if (e <= this._current_word_bits_left) {
                var t = this._current_word >>> (32 - e);
                return (this._current_word <<= e), (this._current_word_bits_left -= e), t;
              }
              var n = this._current_word_bits_left ? this._current_word : 0;
              n >>>= 32 - this._current_word_bits_left;
              var i = e - this._current_word_bits_left;
              this._fillCurrentWord();
              var a = Math.min(i, this._current_word_bits_left),
                s = this._current_word >>> (32 - a);
              return (this._current_word <<= a), (this._current_word_bits_left -= a), (n = (n << a) | s);
            },
          },
          {
            key: 'readBool',
            value: function () {
              return 1 === this.readBits(1);
            },
          },
          {
            key: 'readByte',
            value: function () {
              return this.readBits(8);
            },
          },
          {
            key: '_skipLeadingZero',
            value: function () {
              var e = void 0;
              for (e = 0; e < this._current_word_bits_left; e++)
                if (0 != (this._current_word & (2147483648 >>> e)))
                  return (this._current_word <<= e), (this._current_word_bits_left -= e), e;
              return this._fillCurrentWord(), e + this._skipLeadingZero();
            },
          },
          {
            key: 'readUEG',
            value: function () {
              var e = this._skipLeadingZero();
              return this.readBits(e + 1) - 1;
            },
          },
          {
            key: 'readSEG',
            value: function () {
              var e = this.readUEG();
              return 1 & e ? (e + 1) >>> 1 : -1 * (e >>> 1);
            },
          },
        ]),
        e
      );
    })();
    (t.default = a), (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      r = d(n(0)),
      a = d(n(41)),
      s = d(n(42)),
      o = d(n(4)),
      u = n(15),
      l = n(1);
    function d(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var h = (function () {
      function e(t) {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, e),
          (this.TAG = 'MP4Remuxer'),
          (this._config = t),
          (this._isLive = !0 === t.isLive),
          (this._dtsBase = -1),
          (this._dtsBaseInited = !1),
          (this._audioDtsBase = 1 / 0),
          (this._videoDtsBase = 1 / 0),
          (this._audioNextDts = void 0),
          (this._videoNextDts = void 0),
          (this._audioStashedLastSample = null),
          (this._videoStashedLastSample = null),
          (this._audioMeta = null),
          (this._videoMeta = null),
          (this._audioSegmentInfoList = new u.MediaSegmentInfoList('audio')),
          (this._videoSegmentInfoList = new u.MediaSegmentInfoList('video')),
          (this._onInitSegment = null),
          (this._onMediaSegment = null),
          (this._forceFirstIDR = !(
            !o.default.chrome ||
            !(o.default.version.major < 50 || (50 === o.default.version.major && o.default.version.build < 2661))
          )),
          (this._fillSilentAfterSeek = o.default.msedge || o.default.msie),
          (this._mp3UseMpegAudio = !o.default.firefox),
          (this._fillAudioTimestampGap = this._config.fixAudioTimestampGap);
      }
      return (
        i(e, [
          {
            key: 'destroy',
            value: function () {
              (this._dtsBase = -1),
                (this._dtsBaseInited = !1),
                (this._audioMeta = null),
                (this._videoMeta = null),
                this._audioSegmentInfoList.clear(),
                (this._audioSegmentInfoList = null),
                this._videoSegmentInfoList.clear(),
                (this._videoSegmentInfoList = null),
                (this._onInitSegment = null),
                (this._onMediaSegment = null);
            },
          },
          {
            key: 'bindDataSource',
            value: function (e) {
              return (
                (e.onDataAvailable = this.remux.bind(this)),
                (e.onTrackMetadata = this._onTrackMetadataReceived.bind(this)),
                this
              );
            },
          },
          {
            key: 'insertDiscontinuity',
            value: function () {
              this._audioNextDts = this._videoNextDts = void 0;
            },
          },
          {
            key: 'seek',
            value: function (e) {
              (this._audioStashedLastSample = null),
                (this._videoStashedLastSample = null),
                this._videoSegmentInfoList.clear(),
                this._audioSegmentInfoList.clear();
            },
          },
          {
            key: 'remux',
            value: function (e, t) {
              if (!this._onMediaSegment)
                throw new l.IllegalStateException('MP4Remuxer: onMediaSegment callback must be specificed!');
              this._dtsBaseInited || this._calculateDtsBase(e, t), this._remuxVideo(t), this._remuxAudio(e);
            },
          },
          {
            key: '_onTrackMetadataReceived',
            value: function (e, t) {
              var n = null,
                i = 'mp4',
                r = t.codec;
              if ('audio' === e)
                (this._audioMeta = t),
                  'mp3' === t.codec && this._mp3UseMpegAudio
                    ? ((i = 'mpeg'), (r = ''), (n = new Uint8Array()))
                    : (n = a.default.generateInitSegment(t));
              else {
                if ('video' !== e) return;
                (this._videoMeta = t), (n = a.default.generateInitSegment(t));
              }
              if (!this._onInitSegment)
                throw new l.IllegalStateException('MP4Remuxer: onInitSegment callback must be specified!');
              this._onInitSegment(e, {
                type: e,
                data: n.buffer,
                codec: r,
                container: e + '/' + i,
                mediaDuration: t.duration,
              });
            },
          },
          {
            key: '_calculateDtsBase',
            value: function (e, t) {
              this._dtsBaseInited ||
                (e.samples && e.samples.length && (this._audioDtsBase = e.samples[0].dts),
                t.samples && t.samples.length && (this._videoDtsBase = t.samples[0].dts),
                (this._dtsBase = Math.min(this._audioDtsBase, this._videoDtsBase)),
                (this._dtsBaseInited = !0));
            },
          },
          {
            key: 'flushStashedSamples',
            value: function () {
              var e = this._videoStashedLastSample,
                t = this._audioStashedLastSample,
                n = { type: 'video', id: 1, sequenceNumber: 0, samples: [], length: 0 };
              null != e && (n.samples.push(e), (n.length = e.length));
              var i = { type: 'audio', id: 2, sequenceNumber: 0, samples: [], length: 0 };
              null != t && (i.samples.push(t), (i.length = t.length)),
                (this._videoStashedLastSample = null),
                (this._audioStashedLastSample = null),
                this._remuxVideo(n, !0),
                this._remuxAudio(i, !0);
            },
          },
          {
            key: '_remuxAudio',
            value: function (e, t) {
              if (null != this._audioMeta) {
                var n,
                  i = e,
                  l = i.samples,
                  d = void 0,
                  h = -1,
                  f = this._audioMeta.refSampleDuration,
                  c = 'mp3' === this._audioMeta.codec && this._mp3UseMpegAudio,
                  _ = this._dtsBaseInited && void 0 === this._audioNextDts,
                  m = !1;
                if (l && 0 !== l.length && (1 !== l.length || t)) {
                  var p = 0,
                    v = null,
                    g = 0;
                  c ? ((p = 0), (g = i.length)) : ((p = 8), (g = 8 + i.length));
                  var y = null;
                  if ((l.length > 1 && (g -= (y = l.pop()).length), null != this._audioStashedLastSample)) {
                    var E = this._audioStashedLastSample;
                    (this._audioStashedLastSample = null), l.unshift(E), (g += E.length);
                  }
                  null != y && (this._audioStashedLastSample = y);
                  var b = l[0].dts - this._dtsBase;
                  if (this._audioNextDts) d = b - this._audioNextDts;
                  else if (this._audioSegmentInfoList.isEmpty())
                    (d = 0),
                      this._fillSilentAfterSeek &&
                        !this._videoSegmentInfoList.isEmpty() &&
                        'mp3' !== this._audioMeta.originalCodec &&
                        (m = !0);
                  else {
                    var S = this._audioSegmentInfoList.getLastSampleBefore(b);
                    if (null != S) {
                      var k = b - (S.originalDts + S.duration);
                      k <= 3 && (k = 0), (d = b - (S.dts + S.duration + k));
                    } else d = 0;
                  }
                  if (m) {
                    var L = b - d,
                      w = this._videoSegmentInfoList.getLastSegmentBefore(b);
                    if (null != w && w.beginDts < L) {
                      var R = s.default.getSilentFrame(this._audioMeta.originalCodec, this._audioMeta.channelCount);
                      if (R) {
                        var A = w.beginDts,
                          O = L - w.beginDts;
                        r.default.v(this.TAG, 'InsertPrefixSilentAudio: dts: ' + A + ', duration: ' + O),
                          l.unshift({ unit: R, dts: A, pts: A }),
                          (g += R.byteLength);
                      }
                    } else m = !1;
                  }
                  for (var T = [], C = 0; C < l.length; C++) {
                    var I = l[C],
                      M = I.unit,
                      x = I.dts - this._dtsBase,
                      D = x,
                      B = !1,
                      P = null,
                      U = 0;
                    if (!(x < -0.001)) {
                      if ('mp3' !== this._audioMeta.codec) {
                        var N = x;
                        if ((this._audioNextDts && (N = this._audioNextDts), (d = x - N) <= -3 * f)) {
                          r.default.w(
                            this.TAG,
                            'Dropping 1 audio frame (originalDts: ' +
                              x +
                              ' ms ,curRefDts: ' +
                              N +
                              ' ms)  due to dtsCorrection: ' +
                              d +
                              ' ms overlap.'
                          );
                          continue;
                        }
                        if (d >= 3 * f && this._fillAudioTimestampGap && !o.default.safari) {
                          B = !0;
                          var F = Math.floor(d / f);
                          r.default.w(
                            this.TAG,
                            'Large audio timestamp gap detected, may cause AV sync to drift. Silent frames will be generated to avoid unsync.\noriginalDts: ' +
                              x +
                              ' ms, curRefDts: ' +
                              N +
                              ' ms, dtsCorrection: ' +
                              Math.round(d) +
                              ' ms, generate: ' +
                              F +
                              ' frames'
                          ),
                            (D = Math.floor(N)),
                            (U = Math.floor(N + f) - D);
                          var j = s.default.getSilentFrame(this._audioMeta.originalCodec, this._audioMeta.channelCount);
                          null == j &&
                            (r.default.w(
                              this.TAG,
                              'Unable to generate silent frame for ' +
                                this._audioMeta.originalCodec +
                                ' with ' +
                                this._audioMeta.channelCount +
                                ' channels, repeat last frame'
                            ),
                            (j = M)),
                            (P = []);
                          for (var G = 0; G < F; G++) {
                            N += f;
                            var V = Math.floor(N),
                              z = Math.floor(N + f) - V,
                              K = {
                                dts: V,
                                pts: V,
                                cts: 0,
                                unit: j,
                                size: j.byteLength,
                                duration: z,
                                originalDts: x,
                                flags: { isLeading: 0, dependsOn: 1, isDependedOn: 0, hasRedundancy: 0 },
                              };
                            P.push(K), (g += M.byteLength);
                          }
                          this._audioNextDts = N + f;
                        } else (D = Math.floor(N)), (U = Math.floor(N + f) - D), (this._audioNextDts = N + f);
                      } else {
                        if (((D = x - d), C !== l.length - 1)) U = l[C + 1].dts - this._dtsBase - d - D;
                        else if (null != y) U = y.dts - this._dtsBase - d - D;
                        else U = T.length >= 1 ? T[T.length - 1].duration : Math.floor(f);
                        this._audioNextDts = D + U;
                      }
                      -1 === h && (h = D),
                        T.push({
                          dts: D,
                          pts: D,
                          cts: 0,
                          unit: I.unit,
                          size: I.unit.byteLength,
                          duration: U,
                          originalDts: x,
                          flags: { isLeading: 0, dependsOn: 1, isDependedOn: 0, hasRedundancy: 0 },
                        }),
                        B && T.push.apply(T, P);
                    }
                  }
                  if (0 === T.length) return (i.samples = []), void (i.length = 0);
                  c
                    ? (v = new Uint8Array(g))
                    : (((v = new Uint8Array(g))[0] = (g >>> 24) & 255),
                      (v[1] = (g >>> 16) & 255),
                      (v[2] = (g >>> 8) & 255),
                      (v[3] = 255 & g),
                      v.set(a.default.types.mdat, 4));
                  for (var H = 0; H < T.length; H++) {
                    var q = T[H].unit;
                    v.set(q, p), (p += q.byteLength);
                  }
                  var W = T[T.length - 1];
                  n = W.dts + W.duration;
                  var X = new u.MediaSegmentInfo();
                  (X.beginDts = h),
                    (X.endDts = n),
                    (X.beginPts = h),
                    (X.endPts = n),
                    (X.originalBeginDts = T[0].originalDts),
                    (X.originalEndDts = W.originalDts + W.duration),
                    (X.firstSample = new u.SampleInfo(T[0].dts, T[0].pts, T[0].duration, T[0].originalDts, !1)),
                    (X.lastSample = new u.SampleInfo(W.dts, W.pts, W.duration, W.originalDts, !1)),
                    this._isLive || this._audioSegmentInfoList.append(X),
                    (i.samples = T),
                    i.sequenceNumber++;
                  var Y = null;
                  (Y = c ? new Uint8Array() : a.default.moof(i, h)), (i.samples = []), (i.length = 0);
                  var Z = { type: 'audio', data: this._mergeBoxes(Y, v).buffer, sampleCount: T.length, info: X };
                  c && _ && (Z.timestampOffset = h), this._onMediaSegment('audio', Z);
                }
              }
            },
          },
          {
            key: '_remuxVideo',
            value: function (e, t) {
              if (null != this._videoMeta) {
                var n,
                  i,
                  r = e,
                  s = r.samples,
                  o = void 0,
                  l = -1,
                  d = -1;
                if (s && 0 !== s.length && (1 !== s.length || t)) {
                  var h = 8,
                    f = null,
                    c = 8 + e.length,
                    _ = null;
                  if ((s.length > 1 && (c -= (_ = s.pop()).length), null != this._videoStashedLastSample)) {
                    var m = this._videoStashedLastSample;
                    (this._videoStashedLastSample = null), s.unshift(m), (c += m.length);
                  }
                  null != _ && (this._videoStashedLastSample = _);
                  var p = s[0].dts - this._dtsBase;
                  if (this._videoNextDts) o = p - this._videoNextDts;
                  else if (this._videoSegmentInfoList.isEmpty()) o = 0;
                  else {
                    var v = this._videoSegmentInfoList.getLastSampleBefore(p);
                    if (null != v) {
                      var g = p - (v.originalDts + v.duration);
                      g <= 3 && (g = 0), (o = p - (v.dts + v.duration + g));
                    } else o = 0;
                  }
                  for (var y = new u.MediaSegmentInfo(), E = [], b = 0; b < s.length; b++) {
                    var S = s[b],
                      k = S.dts - this._dtsBase,
                      L = S.isKeyframe,
                      w = k - o,
                      R = S.cts,
                      A = w + R;
                    -1 === l && ((l = w), (d = A));
                    var O = 0;
                    if (b !== s.length - 1) O = s[b + 1].dts - this._dtsBase - o - w;
                    else if (null != _) O = _.dts - this._dtsBase - o - w;
                    else O = E.length >= 1 ? E[E.length - 1].duration : Math.floor(this._videoMeta.refSampleDuration);
                    if (L) {
                      var T = new u.SampleInfo(w, A, O, S.dts, !0);
                      (T.fileposition = S.fileposition), y.appendSyncPoint(T);
                    }
                    E.push({
                      dts: w,
                      pts: A,
                      cts: R,
                      units: S.units,
                      size: S.length,
                      isKeyframe: L,
                      duration: O,
                      originalDts: k,
                      flags: {
                        isLeading: 0,
                        dependsOn: L ? 2 : 1,
                        isDependedOn: L ? 1 : 0,
                        hasRedundancy: 0,
                        isNonSync: L ? 0 : 1,
                      },
                    });
                  }
                  ((f = new Uint8Array(c))[0] = (c >>> 24) & 255),
                    (f[1] = (c >>> 16) & 255),
                    (f[2] = (c >>> 8) & 255),
                    (f[3] = 255 & c),
                    f.set(a.default.types.mdat, 4);
                  for (var C = 0; C < E.length; C++)
                    for (var I = E[C].units; I.length; ) {
                      var M = I.shift().data;
                      f.set(M, h), (h += M.byteLength);
                    }
                  var x = E[E.length - 1];
                  if (
                    ((n = x.dts + x.duration),
                    (i = x.pts + x.duration),
                    (this._videoNextDts = n),
                    (y.beginDts = l),
                    (y.endDts = n),
                    (y.beginPts = d),
                    (y.endPts = i),
                    (y.originalBeginDts = E[0].originalDts),
                    (y.originalEndDts = x.originalDts + x.duration),
                    (y.firstSample = new u.SampleInfo(
                      E[0].dts,
                      E[0].pts,
                      E[0].duration,
                      E[0].originalDts,
                      E[0].isKeyframe
                    )),
                    (y.lastSample = new u.SampleInfo(x.dts, x.pts, x.duration, x.originalDts, x.isKeyframe)),
                    this._isLive || this._videoSegmentInfoList.append(y),
                    (r.samples = E),
                    r.sequenceNumber++,
                    this._forceFirstIDR)
                  ) {
                    var D = E[0].flags;
                    (D.dependsOn = 2), (D.isNonSync = 0);
                  }
                  var B = a.default.moof(r, l);
                  (r.samples = []),
                    (r.length = 0),
                    this._onMediaSegment('video', {
                      type: 'video',
                      data: this._mergeBoxes(B, f).buffer,
                      sampleCount: E.length,
                      info: y,
                    });
                }
              }
            },
          },
          {
            key: '_mergeBoxes',
            value: function (e, t) {
              var n = new Uint8Array(e.byteLength + t.byteLength);
              return n.set(e, 0), n.set(t, e.byteLength), n;
            },
          },
          {
            key: 'onInitSegment',
            get: function () {
              return this._onInitSegment;
            },
            set: function (e) {
              this._onInitSegment = e;
            },
          },
          {
            key: 'onMediaSegment',
            get: function () {
              return this._onMediaSegment;
            },
            set: function (e) {
              this._onMediaSegment = e;
            },
          },
        ]),
        e
      );
    })();
    (t.default = h), (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
      };
    })();
    var r = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, e);
      }
      return (
        i(e, null, [
          {
            key: 'init',
            value: function () {
              for (var t in ((e.types = {
                avc1: [],
                avcC: [],
                btrt: [],
                dinf: [],
                dref: [],
                esds: [],
                ftyp: [],
                hdlr: [],
                mdat: [],
                mdhd: [],
                mdia: [],
                mfhd: [],
                minf: [],
                moof: [],
                moov: [],
                mp4a: [],
                mvex: [],
                mvhd: [],
                sdtp: [],
                stbl: [],
                stco: [],
                stsc: [],
                stsd: [],
                stsz: [],
                stts: [],
                tfdt: [],
                tfhd: [],
                traf: [],
                trak: [],
                trun: [],
                trex: [],
                tkhd: [],
                vmhd: [],
                smhd: [],
                '.mp3': [],
              }),
              e.types))
                e.types.hasOwnProperty(t) &&
                  (e.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
              var n = (e.constants = {});
              (n.FTYP = new Uint8Array([105, 115, 111, 109, 0, 0, 0, 1, 105, 115, 111, 109, 97, 118, 99, 49])),
                (n.STSD_PREFIX = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1])),
                (n.STTS = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
                (n.STSC = n.STCO = n.STTS),
                (n.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
                (n.HDLR_VIDEO = new Uint8Array([
                  0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101,
                  111, 72, 97, 110, 100, 108, 101, 114, 0,
                ])),
                (n.HDLR_AUDIO = new Uint8Array([
                  0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110,
                  100, 72, 97, 110, 100, 108, 101, 114, 0,
                ])),
                (n.DREF = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1])),
                (n.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
                (n.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]));
            },
          },
          {
            key: 'box',
            value: function (e) {
              for (var t = 8, n = null, i = Array.prototype.slice.call(arguments, 1), r = i.length, a = 0; a < r; a++)
                t += i[a].byteLength;
              ((n = new Uint8Array(t))[0] = (t >>> 24) & 255),
                (n[1] = (t >>> 16) & 255),
                (n[2] = (t >>> 8) & 255),
                (n[3] = 255 & t),
                n.set(e, 4);
              for (var s = 8, o = 0; o < r; o++) n.set(i[o], s), (s += i[o].byteLength);
              return n;
            },
          },
          {
            key: 'generateInitSegment',
            value: function (t) {
              var n = e.box(e.types.ftyp, e.constants.FTYP),
                i = e.moov(t),
                r = new Uint8Array(n.byteLength + i.byteLength);
              return r.set(n, 0), r.set(i, n.byteLength), r;
            },
          },
          {
            key: 'moov',
            value: function (t) {
              var n = e.mvhd(t.timescale, t.duration),
                i = e.trak(t),
                r = e.mvex(t);
              return e.box(e.types.moov, n, i, r);
            },
          },
          {
            key: 'mvhd',
            value: function (t, n) {
              return e.box(
                e.types.mvhd,
                new Uint8Array([
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  (t >>> 24) & 255,
                  (t >>> 16) & 255,
                  (t >>> 8) & 255,
                  255 & t,
                  (n >>> 24) & 255,
                  (n >>> 16) & 255,
                  (n >>> 8) & 255,
                  255 & n,
                  0,
                  1,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  64,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  255,
                  255,
                  255,
                  255,
                ])
              );
            },
          },
          {
            key: 'trak',
            value: function (t) {
              return e.box(e.types.trak, e.tkhd(t), e.mdia(t));
            },
          },
          {
            key: 'tkhd',
            value: function (t) {
              var n = t.id,
                i = t.duration,
                r = t.presentWidth,
                a = t.presentHeight;
              return e.box(
                e.types.tkhd,
                new Uint8Array([
                  0,
                  0,
                  0,
                  7,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  (n >>> 24) & 255,
                  (n >>> 16) & 255,
                  (n >>> 8) & 255,
                  255 & n,
                  0,
                  0,
                  0,
                  0,
                  (i >>> 24) & 255,
                  (i >>> 16) & 255,
                  (i >>> 8) & 255,
                  255 & i,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  64,
                  0,
                  0,
                  0,
                  (r >>> 8) & 255,
                  255 & r,
                  0,
                  0,
                  (a >>> 8) & 255,
                  255 & a,
                  0,
                  0,
                ])
              );
            },
          },
          {
            key: 'mdia',
            value: function (t) {
              return e.box(e.types.mdia, e.mdhd(t), e.hdlr(t), e.minf(t));
            },
          },
          {
            key: 'mdhd',
            value: function (t) {
              var n = t.timescale,
                i = t.duration;
              return e.box(
                e.types.mdhd,
                new Uint8Array([
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  (n >>> 24) & 255,
                  (n >>> 16) & 255,
                  (n >>> 8) & 255,
                  255 & n,
                  (i >>> 24) & 255,
                  (i >>> 16) & 255,
                  (i >>> 8) & 255,
                  255 & i,
                  85,
                  196,
                  0,
                  0,
                ])
              );
            },
          },
          {
            key: 'hdlr',
            value: function (t) {
              var n = null;
              return (n = 'audio' === t.type ? e.constants.HDLR_AUDIO : e.constants.HDLR_VIDEO), e.box(e.types.hdlr, n);
            },
          },
          {
            key: 'minf',
            value: function (t) {
              var n = null;
              return (
                (n =
                  'audio' === t.type ? e.box(e.types.smhd, e.constants.SMHD) : e.box(e.types.vmhd, e.constants.VMHD)),
                e.box(e.types.minf, n, e.dinf(), e.stbl(t))
              );
            },
          },
          {
            key: 'dinf',
            value: function () {
              return e.box(e.types.dinf, e.box(e.types.dref, e.constants.DREF));
            },
          },
          {
            key: 'stbl',
            value: function (t) {
              return e.box(
                e.types.stbl,
                e.stsd(t),
                e.box(e.types.stts, e.constants.STTS),
                e.box(e.types.stsc, e.constants.STSC),
                e.box(e.types.stsz, e.constants.STSZ),
                e.box(e.types.stco, e.constants.STCO)
              );
            },
          },
          {
            key: 'stsd',
            value: function (t) {
              return 'audio' === t.type
                ? 'mp3' === t.codec
                  ? e.box(e.types.stsd, e.constants.STSD_PREFIX, e.mp3(t))
                  : e.box(e.types.stsd, e.constants.STSD_PREFIX, e.mp4a(t))
                : e.box(e.types.stsd, e.constants.STSD_PREFIX, e.avc1(t));
            },
          },
          {
            key: 'mp3',
            value: function (t) {
              var n = t.channelCount,
                i = t.audioSampleRate,
                r = new Uint8Array([
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  n,
                  0,
                  16,
                  0,
                  0,
                  0,
                  0,
                  (i >>> 8) & 255,
                  255 & i,
                  0,
                  0,
                ]);
              return e.box(e.types['.mp3'], r);
            },
          },
          {
            key: 'mp4a',
            value: function (t) {
              var n = t.channelCount,
                i = t.audioSampleRate,
                r = new Uint8Array([
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  n,
                  0,
                  16,
                  0,
                  0,
                  0,
                  0,
                  (i >>> 8) & 255,
                  255 & i,
                  0,
                  0,
                ]);
              return e.box(e.types.mp4a, r, e.esds(t));
            },
          },
          {
            key: 'esds',
            value: function (t) {
              var n = t.config || [],
                i = n.length,
                r = new Uint8Array(
                  [0, 0, 0, 0, 3, 23 + i, 0, 1, 0, 4, 15 + i, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5]
                    .concat([i])
                    .concat(n)
                    .concat([6, 1, 2])
                );
              return e.box(e.types.esds, r);
            },
          },
          {
            key: 'avc1',
            value: function (t) {
              var n = t.avcc,
                i = t.codecWidth,
                r = t.codecHeight,
                a = new Uint8Array([
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  (i >>> 8) & 255,
                  255 & i,
                  (r >>> 8) & 255,
                  255 & r,
                  0,
                  72,
                  0,
                  0,
                  0,
                  72,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  10,
                  120,
                  113,
                  113,
                  47,
                  102,
                  108,
                  118,
                  46,
                  106,
                  115,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  24,
                  255,
                  255,
                ]);
              return e.box(e.types.avc1, a, e.box(e.types.avcC, n));
            },
          },
          {
            key: 'mvex',
            value: function (t) {
              return e.box(e.types.mvex, e.trex(t));
            },
          },
          {
            key: 'trex',
            value: function (t) {
              var n = t.id,
                i = new Uint8Array([
                  0,
                  0,
                  0,
                  0,
                  (n >>> 24) & 255,
                  (n >>> 16) & 255,
                  (n >>> 8) & 255,
                  255 & n,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  1,
                ]);
              return e.box(e.types.trex, i);
            },
          },
          {
            key: 'moof',
            value: function (t, n) {
              return e.box(e.types.moof, e.mfhd(t.sequenceNumber), e.traf(t, n));
            },
          },
          {
            key: 'mfhd',
            value: function (t) {
              var n = new Uint8Array([0, 0, 0, 0, (t >>> 24) & 255, (t >>> 16) & 255, (t >>> 8) & 255, 255 & t]);
              return e.box(e.types.mfhd, n);
            },
          },
          {
            key: 'traf',
            value: function (t, n) {
              var i = t.id,
                r = e.box(
                  e.types.tfhd,
                  new Uint8Array([0, 0, 0, 0, (i >>> 24) & 255, (i >>> 16) & 255, (i >>> 8) & 255, 255 & i])
                ),
                a = e.box(
                  e.types.tfdt,
                  new Uint8Array([0, 0, 0, 0, (n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, 255 & n])
                ),
                s = e.sdtp(t),
                o = e.trun(t, s.byteLength + 16 + 16 + 8 + 16 + 8 + 8);
              return e.box(e.types.traf, r, a, o, s);
            },
          },
          {
            key: 'sdtp',
            value: function (t) {
              for (var n = t.samples || [], i = n.length, r = new Uint8Array(4 + i), a = 0; a < i; a++) {
                var s = n[a].flags;
                r[a + 4] = (s.isLeading << 6) | (s.dependsOn << 4) | (s.isDependedOn << 2) | s.hasRedundancy;
              }
              return e.box(e.types.sdtp, r);
            },
          },
          {
            key: 'trun',
            value: function (t, n) {
              var i = t.samples || [],
                r = i.length,
                a = 12 + 16 * r,
                s = new Uint8Array(a);
              (n += 8 + a),
                s.set(
                  [
                    0,
                    0,
                    15,
                    1,
                    (r >>> 24) & 255,
                    (r >>> 16) & 255,
                    (r >>> 8) & 255,
                    255 & r,
                    (n >>> 24) & 255,
                    (n >>> 16) & 255,
                    (n >>> 8) & 255,
                    255 & n,
                  ],
                  0
                );
              for (var o = 0; o < r; o++) {
                var u = i[o].duration,
                  l = i[o].size,
                  d = i[o].flags,
                  h = i[o].cts;
                s.set(
                  [
                    (u >>> 24) & 255,
                    (u >>> 16) & 255,
                    (u >>> 8) & 255,
                    255 & u,
                    (l >>> 24) & 255,
                    (l >>> 16) & 255,
                    (l >>> 8) & 255,
                    255 & l,
                    (d.isLeading << 2) | d.dependsOn,
                    (d.isDependedOn << 6) | (d.hasRedundancy << 4) | d.isNonSync,
                    0,
                    0,
                    (h >>> 24) & 255,
                    (h >>> 16) & 255,
                    (h >>> 8) & 255,
                    255 & h,
                  ],
                  12 + 16 * o
                );
              }
              return e.box(e.types.trun, s);
            },
          },
          {
            key: 'mdat',
            value: function (t) {
              return e.box(e.types.mdat, t);
            },
          },
        ]),
        e
      );
    })();
    r.init(), (t.default = r), (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
      };
    })();
    var r = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, e);
      }
      return (
        i(e, null, [
          {
            key: 'getSilentFrame',
            value: function (e, t) {
              if ('mp4a.40.2' === e) {
                if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]);
                if (2 === t) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                if (3 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                if (4 === t)
                  return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                if (5 === t)
                  return new Uint8Array([
                    0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56,
                  ]);
                if (6 === t)
                  return new Uint8Array([
                    0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8,
                    224,
                  ]);
              } else {
                if (1 === t)
                  return new Uint8Array([
                    1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90,
                    90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                    90, 90, 90, 90, 90, 90, 90, 90, 94,
                  ]);
                if (2 === t)
                  return new Uint8Array([
                    1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90,
                    90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                    90, 90, 90, 90, 90, 90, 90, 90, 94,
                  ]);
                if (3 === t)
                  return new Uint8Array([
                    1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90,
                    90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                    90, 90, 90, 90, 90, 90, 90, 90, 94,
                  ]);
              }
              return null;
            },
          },
        ]),
        e
      );
    })();
    (t.default = r), (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    o(n(0));
    var i = o(n(8)),
      r = o(n(11)),
      a = o(n(14)),
      s = o(n(5));
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (t.default = function (e) {
      var t = null,
        n = function (t, n) {
          e.postMessage({ msg: 'logcat_callback', data: { type: t, logcat: n } });
        };
      function o(t, n) {
        var i = { msg: s.default.INIT_SEGMENT, data: { type: t, data: n } };
        e.postMessage(i, [n.data]);
      }
      function u(t, n) {
        var i = { msg: s.default.MEDIA_SEGMENT, data: { type: t, data: n } };
        e.postMessage(i, [n.data]);
      }
      function l() {
        var t = { msg: s.default.LOADING_COMPLETE };
        e.postMessage(t);
      }
      function d() {
        var t = { msg: s.default.RECOVERED_EARLY_EOF };
        e.postMessage(t);
      }
      function h(t) {
        var n = { msg: s.default.MEDIA_INFO, data: t };
        e.postMessage(n);
      }
      function f(t) {
        var n = { msg: s.default.STATISTICS_INFO, data: t };
        e.postMessage(n);
      }
      function c(t, n) {
        e.postMessage({ msg: s.default.IO_ERROR, data: { type: t, info: n } });
      }
      function _(t, n) {
        e.postMessage({ msg: s.default.DEMUX_ERROR, data: { type: t, info: n } });
      }
      function m(t) {
        e.postMessage({ msg: s.default.RECOMMEND_SEEKPOINT, data: t });
      }
      r.default.install(),
        e.addEventListener('message', function (r) {
          switch (r.data.cmd) {
            case 'init':
              (t = new a.default(r.data.param[0], r.data.param[1])).on(s.default.IO_ERROR, c.bind(this)),
                t.on(s.default.DEMUX_ERROR, _.bind(this)),
                t.on(s.default.INIT_SEGMENT, o.bind(this)),
                t.on(s.default.MEDIA_SEGMENT, u.bind(this)),
                t.on(s.default.LOADING_COMPLETE, l.bind(this)),
                t.on(s.default.RECOVERED_EARLY_EOF, d.bind(this)),
                t.on(s.default.MEDIA_INFO, h.bind(this)),
                t.on(s.default.STATISTICS_INFO, f.bind(this)),
                t.on(s.default.RECOMMEND_SEEKPOINT, m.bind(this));
              break;
            case 'destroy':
              t && (t.destroy(), (t = null)), e.postMessage({ msg: 'destroyed' });
              break;
            case 'start':
              t.start();
              break;
            case 'stop':
              t.stop();
              break;
            case 'seek':
              t.seek(r.data.param);
              break;
            case 'pause':
              t.pause();
              break;
            case 'resume':
              t.resume();
              break;
            case 'logging_config':
              var p = r.data.param;
              i.default.applyConfig(p),
                !0 === p.enableCallback ? i.default.addLogListener(n) : i.default.removeLogListener(n);
          }
        });
    }),
      (e.exports = t.default);
  },
  function (e, t) {
    var n = arguments[3],
      i = arguments[4],
      r = arguments[5],
      a = JSON.stringify;
    e.exports = function (e, t) {
      for (var s, o = Object.keys(r), u = 0, l = o.length; u < l; u++) {
        var d = o[u],
          h = r[d].exports;
        if (h === e || (h && h.default === e)) {
          s = d;
          break;
        }
      }
      if (!s) {
        s = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
        var f = {};
        for (u = 0, l = o.length; u < l; u++) {
          f[(d = o[u])] = d;
        }
        i[s] = ['function(require,module,exports){' + e + '(self); }', f];
      }
      var c = Math.floor(Math.pow(16, 8) * Math.random()).toString(16),
        _ = {};
      (_[s] = s),
        (i[c] = [
          'function(require,module,exports){var f = require(' + a(s) + ');(f.default ? f.default : f)(self);}',
          _,
        ]);
      var m = {};
      !(function e(t) {
        for (var n in ((m[t] = !0), i[t][1])) {
          var r = i[t][1][n];
          m[r] || e(r);
        }
      })(c);
      var p =
          '(' +
          n +
          ')({' +
          Object.keys(m)
            .map(function (e) {
              return a(e) + ':[' + i[e][0] + ',' + a(i[e][1]) + ']';
            })
            .join(',') +
          '},{},[' +
          a(c) +
          '])',
        v = window.URL || window.webkitURL || window.mozURL || window.msURL,
        g = new Blob([p], { type: 'text/javascript' });
      if (t && t.bare) return g;
      var y = v.createObjectURL(g),
        E = new Worker(y);
      return (E.objectURL = y), E;
    };
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      r = d(n(2)),
      a = d(n(0)),
      s = d(n(4)),
      o = d(n(16)),
      u = n(15),
      l = n(1);
    function d(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var h = (function () {
      function e(t) {
        !(function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        })(this, e),
          (this.TAG = 'MSEController'),
          (this._config = t),
          (this._emitter = new r.default()),
          this._config.isLive &&
            null == this._config.autoCleanupSourceBuffer &&
            (this._config.autoCleanupSourceBuffer = !0),
          (this.e = {
            onSourceOpen: this._onSourceOpen.bind(this),
            onSourceEnded: this._onSourceEnded.bind(this),
            onSourceClose: this._onSourceClose.bind(this),
            onSourceBufferError: this._onSourceBufferError.bind(this),
            onSourceBufferUpdateEnd: this._onSourceBufferUpdateEnd.bind(this),
          }),
          (this._mediaSource = null),
          (this._mediaSourceObjectURL = null),
          (this._mediaElement = null),
          (this._isBufferFull = !1),
          (this._hasPendingEos = !1),
          (this._requireSetMediaDuration = !1),
          (this._pendingMediaDuration = 0),
          (this._pendingSourceBufferInit = []),
          (this._mimeTypes = { video: null, audio: null }),
          (this._sourceBuffers = { video: null, audio: null }),
          (this._lastInitSegments = { video: null, audio: null }),
          (this._pendingSegments = { video: [], audio: [] }),
          (this._pendingRemoveRanges = { video: [], audio: [] }),
          (this._idrList = new u.IDRSampleList());
      }
      return (
        i(e, [
          {
            key: 'destroy',
            value: function () {
              (this._mediaElement || this._mediaSource) && this.detachMediaElement(),
                (this.e = null),
                this._emitter.removeAllListeners(),
                (this._emitter = null);
            },
          },
          {
            key: 'on',
            value: function (e, t) {
              this._emitter.addListener(e, t);
            },
          },
          {
            key: 'off',
            value: function (e, t) {
              this._emitter.removeListener(e, t);
            },
          },
          {
            key: 'attachMediaElement',
            value: function (e) {
              if (this._mediaSource)
                throw new l.IllegalStateException('MediaSource has been attached to an HTMLMediaElement!');
              var t = (this._mediaSource = new window.MediaSource());
              t.addEventListener('sourceopen', this.e.onSourceOpen),
                t.addEventListener('sourceended', this.e.onSourceEnded),
                t.addEventListener('sourceclose', this.e.onSourceClose),
                (this._mediaElement = e),
                (this._mediaSourceObjectURL = window.URL.createObjectURL(this._mediaSource)),
                (e.src = this._mediaSourceObjectURL);
            },
          },
          {
            key: 'detachMediaElement',
            value: function () {
              if (this._mediaSource) {
                var e = this._mediaSource;
                for (var t in this._sourceBuffers) {
                  var n = this._pendingSegments[t];
                  n.splice(0, n.length),
                    (this._pendingSegments[t] = null),
                    (this._pendingRemoveRanges[t] = null),
                    (this._lastInitSegments[t] = null);
                  var i = this._sourceBuffers[t];
                  i &&
                    ('closed' !== e.readyState &&
                      (e.removeSourceBuffer(i),
                      i.removeEventListener('error', this.e.onSourceBufferError),
                      i.removeEventListener('updateend', this.e.onSourceBufferUpdateEnd)),
                    (this._mimeTypes[t] = null),
                    (this._sourceBuffers[t] = null));
                }
                if ('open' === e.readyState)
                  try {
                    e.endOfStream();
                  } catch (e) {
                    a.default.e(this.TAG, e.message);
                  }
                e.removeEventListener('sourceopen', this.e.onSourceOpen),
                  e.removeEventListener('sourceended', this.e.onSourceEnded),
                  e.removeEventListener('sourceclose', this.e.onSourceClose),
                  (this._pendingSourceBufferInit = []),
                  (this._isBufferFull = !1),
                  this._idrList.clear(),
                  (this._mediaSource = null);
              }
              this._mediaElement &&
                ((this._mediaElement.src = ''), this._mediaElement.removeAttribute('src'), (this._mediaElement = null)),
                this._mediaSourceObjectURL &&
                  (window.URL.revokeObjectURL(this._mediaSourceObjectURL), (this._mediaSourceObjectURL = null));
            },
          },
          {
            key: 'appendInitSegment',
            value: function (e, t) {
              if (!this._mediaSource || 'open' !== this._mediaSource.readyState)
                return this._pendingSourceBufferInit.push(e), void this._pendingSegments[e.type].push(e);
              var n = e,
                i = '' + n.container;
              n.codec && n.codec.length > 0 && (i += ';codecs=' + n.codec);
              var r = !1;
              if (
                (a.default.v(this.TAG, 'Received Initialization Segment, mimeType: ' + i),
                (this._lastInitSegments[n.type] = n),
                i !== this._mimeTypes[n.type])
              ) {
                if (this._mimeTypes[n.type])
                  a.default.v(
                    this.TAG,
                    'Notice: ' + n.type + ' mimeType changed, origin: ' + this._mimeTypes[n.type] + ', target: ' + i
                  );
                else {
                  r = !0;
                  try {
                    var u = (this._sourceBuffers[n.type] = this._mediaSource.addSourceBuffer(i));
                    u.addEventListener('error', this.e.onSourceBufferError),
                      u.addEventListener('updateend', this.e.onSourceBufferUpdateEnd);
                  } catch (e) {
                    return (
                      a.default.e(this.TAG, e.message),
                      void this._emitter.emit(o.default.ERROR, { code: e.code, msg: e.message })
                    );
                  }
                }
                this._mimeTypes[n.type] = i;
              }
              t || this._pendingSegments[n.type].push(n),
                r || (this._sourceBuffers[n.type] && !this._sourceBuffers[n.type].updating && this._doAppendSegments()),
                s.default.safari &&
                  'audio/mpeg' === n.container &&
                  n.mediaDuration > 0 &&
                  ((this._requireSetMediaDuration = !0),
                  (this._pendingMediaDuration = n.mediaDuration / 1e3),
                  this._updateMediaSourceDuration());
            },
          },
          {
            key: 'appendMediaSegment',
            value: function (e) {
              var t = e;
              this._pendingSegments[t.type].push(t),
                this._config.autoCleanupSourceBuffer &&
                  this._needCleanupSourceBuffer() &&
                  this._doCleanupSourceBuffer();
              var n = this._sourceBuffers[t.type];
              !n || n.updating || this._hasPendingRemoveRanges() || this._doAppendSegments();
            },
          },
          {
            key: 'seek',
            value: function (e) {
              for (var t in this._sourceBuffers)
                if (this._sourceBuffers[t]) {
                  var n = this._sourceBuffers[t];
                  if ('open' === this._mediaSource.readyState)
                    try {
                      n.abort();
                    } catch (e) {
                      a.default.e(this.TAG, e.message);
                    }
                  this._idrList.clear();
                  var i = this._pendingSegments[t];
                  if ((i.splice(0, i.length), 'closed' !== this._mediaSource.readyState)) {
                    for (var r = 0; r < n.buffered.length; r++) {
                      var o = n.buffered.start(r),
                        u = n.buffered.end(r);
                      this._pendingRemoveRanges[t].push({ start: o, end: u });
                    }
                    if ((n.updating || this._doRemoveRanges(), s.default.safari)) {
                      var l = this._lastInitSegments[t];
                      l && (this._pendingSegments[t].push(l), n.updating || this._doAppendSegments());
                    }
                  }
                }
            },
          },
          {
            key: 'endOfStream',
            value: function () {
              var e = this._mediaSource,
                t = this._sourceBuffers;
              e && 'open' === e.readyState
                ? (t.video && t.video.updating) || (t.audio && t.audio.updating)
                  ? (this._hasPendingEos = !0)
                  : ((this._hasPendingEos = !1), e.endOfStream())
                : e && 'closed' === e.readyState && this._hasPendingSegments() && (this._hasPendingEos = !0);
            },
          },
          {
            key: 'getNearestKeyframe',
            value: function (e) {
              return this._idrList.getLastSyncPointBeforeDts(e);
            },
          },
          {
            key: '_needCleanupSourceBuffer',
            value: function () {
              if (!this._config.autoCleanupSourceBuffer) return !1;
              var e = this._mediaElement.currentTime;
              for (var t in this._sourceBuffers) {
                var n = this._sourceBuffers[t];
                if (n) {
                  var i = n.buffered;
                  if (i.length >= 1 && e - i.start(0) >= this._config.autoCleanupMaxBackwardDuration) return !0;
                }
              }
              return !1;
            },
          },
          {
            key: '_doCleanupSourceBuffer',
            value: function () {
              var e = this._mediaElement.currentTime;
              for (var t in this._sourceBuffers) {
                var n = this._sourceBuffers[t];
                if (n) {
                  for (var i = n.buffered, r = !1, a = 0; a < i.length; a++) {
                    var s = i.start(a),
                      o = i.end(a);
                    if (s <= e && e < o + 3) {
                      if (e - s >= this._config.autoCleanupMaxBackwardDuration) {
                        r = !0;
                        var u = e - this._config.autoCleanupMinBackwardDuration;
                        this._pendingRemoveRanges[t].push({ start: s, end: u });
                      }
                    } else o < e && ((r = !0), this._pendingRemoveRanges[t].push({ start: s, end: o }));
                  }
                  r && !n.updating && this._doRemoveRanges();
                }
              }
            },
          },
          {
            key: '_updateMediaSourceDuration',
            value: function () {
              var e = this._sourceBuffers;
              if (
                0 !== this._mediaElement.readyState &&
                'open' === this._mediaSource.readyState &&
                !((e.video && e.video.updating) || (e.audio && e.audio.updating))
              ) {
                var t = this._mediaSource.duration,
                  n = this._pendingMediaDuration;
                n > 0 &&
                  (isNaN(t) || n > t) &&
                  (a.default.v(this.TAG, 'Update MediaSource duration from ' + t + ' to ' + n),
                  (this._mediaSource.duration = n)),
                  (this._requireSetMediaDuration = !1),
                  (this._pendingMediaDuration = 0);
              }
            },
          },
          {
            key: '_doRemoveRanges',
            value: function () {
              for (var e in this._pendingRemoveRanges)
                if (this._sourceBuffers[e] && !this._sourceBuffers[e].updating)
                  for (var t = this._sourceBuffers[e], n = this._pendingRemoveRanges[e]; n.length && !t.updating; ) {
                    var i = n.shift();
                    t.remove(i.start, i.end);
                  }
            },
          },
          {
            key: '_doAppendSegments',
            value: function () {
              var e = this._pendingSegments;
              for (var t in e)
                if (this._sourceBuffers[t] && !this._sourceBuffers[t].updating && e[t].length > 0) {
                  var n = e[t].shift();
                  if (n.timestampOffset) {
                    var i = this._sourceBuffers[t].timestampOffset,
                      r = n.timestampOffset / 1e3;
                    Math.abs(i - r) > 0.1 &&
                      (a.default.v(this.TAG, 'Update MPEG audio timestampOffset from ' + i + ' to ' + r),
                      (this._sourceBuffers[t].timestampOffset = r)),
                      delete n.timestampOffset;
                  }
                  if (!n.data || 0 === n.data.byteLength) continue;
                  try {
                    this._sourceBuffers[t].appendBuffer(n.data),
                      (this._isBufferFull = !1),
                      'video' === t && n.hasOwnProperty('info') && this._idrList.appendArray(n.info.syncPoints);
                  } catch (e) {
                    this._pendingSegments[t].unshift(n),
                      22 === e.code
                        ? (this._isBufferFull || this._emitter.emit(o.default.BUFFER_FULL), (this._isBufferFull = !0))
                        : (a.default.e(this.TAG, e.message),
                          this._emitter.emit(o.default.ERROR, { code: e.code, msg: e.message }));
                  }
                }
            },
          },
          {
            key: '_onSourceOpen',
            value: function () {
              if (
                (a.default.v(this.TAG, 'MediaSource onSourceOpen'),
                this._mediaSource.removeEventListener('sourceopen', this.e.onSourceOpen),
                this._pendingSourceBufferInit.length > 0)
              )
                for (var e = this._pendingSourceBufferInit; e.length; ) {
                  var t = e.shift();
                  this.appendInitSegment(t, !0);
                }
              this._hasPendingSegments() && this._doAppendSegments(), this._emitter.emit(o.default.SOURCE_OPEN);
            },
          },
          {
            key: '_onSourceEnded',
            value: function () {
              a.default.v(this.TAG, 'MediaSource onSourceEnded');
            },
          },
          {
            key: '_onSourceClose',
            value: function () {
              a.default.v(this.TAG, 'MediaSource onSourceClose'),
                this._mediaSource &&
                  null != this.e &&
                  (this._mediaSource.removeEventListener('sourceopen', this.e.onSourceOpen),
                  this._mediaSource.removeEventListener('sourceended', this.e.onSourceEnded),
                  this._mediaSource.removeEventListener('sourceclose', this.e.onSourceClose));
            },
          },
          {
            key: '_hasPendingSegments',
            value: function () {
              var e = this._pendingSegments;
              return e.video.length > 0 || e.audio.length > 0;
            },
          },
          {
            key: '_hasPendingRemoveRanges',
            value: function () {
              var e = this._pendingRemoveRanges;
              return e.video.length > 0 || e.audio.length > 0;
            },
          },
          {
            key: '_onSourceBufferUpdateEnd',
            value: function () {
              this._requireSetMediaDuration
                ? this._updateMediaSourceDuration()
                : this._hasPendingRemoveRanges()
                ? this._doRemoveRanges()
                : this._hasPendingSegments()
                ? this._doAppendSegments()
                : this._hasPendingEos && this.endOfStream(),
                this._emitter.emit(o.default.UPDATE_END);
            },
          },
          {
            key: '_onSourceBufferError',
            value: function (e) {
              a.default.e(this.TAG, 'SourceBuffer Error: ' + e);
            },
          },
        ]),
        e
      );
    })();
    (t.default = h), (e.exports = t.default);
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            },
      r = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      a = l(n(2)),
      s = l(n(7)),
      o = n(6),
      u = n(1);
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var d = (function () {
      function e(t, n) {
        if (
          ((function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
          })(this, e),
          (this.TAG = 'NativePlayer'),
          (this._type = 'NativePlayer'),
          (this._emitter = new a.default()),
          (this._config = (0, o.createDefaultConfig)()),
          'object' === (void 0 === n ? 'undefined' : i(n)) && Object.assign(this._config, n),
          'flv' === t.type.toLowerCase())
        )
          throw new u.InvalidArgumentException("NativePlayer does't support flv MediaDataSource input!");
        if (t.hasOwnProperty('segments'))
          throw new u.InvalidArgumentException('NativePlayer(' + t.type + ") doesn't support multipart playback!");
        (this.e = { onvLoadedMetadata: this._onvLoadedMetadata.bind(this) }),
          (this._pendingSeekTime = null),
          (this._statisticsReporter = null),
          (this._mediaDataSource = t),
          (this._mediaElement = null);
      }
      return (
        r(e, [
          {
            key: 'destroy',
            value: function () {
              this._mediaElement && (this.unload(), this.detachMediaElement()),
                (this.e = null),
                (this._mediaDataSource = null),
                this._emitter.removeAllListeners(),
                (this._emitter = null);
            },
          },
          {
            key: 'on',
            value: function (e, t) {
              var n = this;
              e === s.default.MEDIA_INFO
                ? null != this._mediaElement &&
                  0 !== this._mediaElement.readyState &&
                  Promise.resolve().then(function () {
                    n._emitter.emit(s.default.MEDIA_INFO, n.mediaInfo);
                  })
                : e === s.default.STATISTICS_INFO &&
                  null != this._mediaElement &&
                  0 !== this._mediaElement.readyState &&
                  Promise.resolve().then(function () {
                    n._emitter.emit(s.default.STATISTICS_INFO, n.statisticsInfo);
                  }),
                this._emitter.addListener(e, t);
            },
          },
          {
            key: 'off',
            value: function (e, t) {
              this._emitter.removeListener(e, t);
            },
          },
          {
            key: 'attachMediaElement',
            value: function (e) {
              if (
                ((this._mediaElement = e),
                e.addEventListener('loadedmetadata', this.e.onvLoadedMetadata),
                null != this._pendingSeekTime)
              )
                try {
                  (e.currentTime = this._pendingSeekTime), (this._pendingSeekTime = null);
                } catch (e) {}
            },
          },
          {
            key: 'detachMediaElement',
            value: function () {
              this._mediaElement &&
                ((this._mediaElement.src = ''),
                this._mediaElement.removeAttribute('src'),
                this._mediaElement.removeEventListener('loadedmetadata', this.e.onvLoadedMetadata),
                (this._mediaElement = null)),
                null != this._statisticsReporter &&
                  (window.clearInterval(this._statisticsReporter), (this._statisticsReporter = null));
            },
          },
          {
            key: 'load',
            value: function () {
              if (!this._mediaElement)
                throw new u.IllegalStateException('HTMLMediaElement must be attached before load()!');
              (this._mediaElement.src = this._mediaDataSource.url),
                this._mediaElement.readyState > 0 && (this._mediaElement.currentTime = 0),
                (this._mediaElement.preload = 'auto'),
                this._mediaElement.load(),
                (this._statisticsReporter = window.setInterval(
                  this._reportStatisticsInfo.bind(this),
                  this._config.statisticsInfoReportInterval
                ));
            },
          },
          {
            key: 'unload',
            value: function () {
              this._mediaElement && ((this._mediaElement.src = ''), this._mediaElement.removeAttribute('src')),
                null != this._statisticsReporter &&
                  (window.clearInterval(this._statisticsReporter), (this._statisticsReporter = null));
            },
          },
          {
            key: 'play',
            value: function () {
              var e = this._mediaElement.play();
              return void 0 !== e && e ? e.catch(function () {}) : void 0;
            },
          },
          {
            key: 'pause',
            value: function () {
              this._mediaElement.pause();
            },
          },
          {
            key: '_onvLoadedMetadata',
            value: function (e) {
              null != this._pendingSeekTime &&
                ((this._mediaElement.currentTime = this._pendingSeekTime), (this._pendingSeekTime = null)),
                this._emitter.emit(s.default.MEDIA_INFO, this.mediaInfo);
            },
          },
          {
            key: '_reportStatisticsInfo',
            value: function () {
              this._emitter.emit(s.default.STATISTICS_INFO, this.statisticsInfo);
            },
          },
          {
            key: 'type',
            get: function () {
              return this._type;
            },
          },
          {
            key: 'buffered',
            get: function () {
              return this._mediaElement.buffered;
            },
          },
          {
            key: 'duration',
            get: function () {
              return this._mediaElement.duration;
            },
          },
          {
            key: 'volume',
            get: function () {
              return this._mediaElement.volume;
            },
            set: function (e) {
              this._mediaElement.volume = e;
            },
          },
          {
            key: 'muted',
            get: function () {
              return this._mediaElement.muted;
            },
            set: function (e) {
              this._mediaElement.muted = e;
            },
          },
          {
            key: 'currentTime',
            get: function () {
              return this._mediaElement ? this._mediaElement.currentTime : 0;
            },
            set: function (e) {
              this._mediaElement ? (this._mediaElement.currentTime = e) : (this._pendingSeekTime = e);
            },
          },
          {
            key: 'mediaInfo',
            get: function () {
              var e = {
                mimeType:
                  (this._mediaElement instanceof HTMLAudioElement ? 'audio/' : 'video/') + this._mediaDataSource.type,
              };
              return (
                this._mediaElement &&
                  ((e.duration = Math.floor(1e3 * this._mediaElement.duration)),
                  this._mediaElement instanceof HTMLVideoElement &&
                    ((e.width = this._mediaElement.videoWidth), (e.height = this._mediaElement.videoHeight))),
                e
              );
            },
          },
          {
            key: 'statisticsInfo',
            get: function () {
              var e = { playerType: this._type, url: this._mediaDataSource.url };
              if (!(this._mediaElement instanceof HTMLVideoElement)) return e;
              var t = !0,
                n = 0,
                i = 0;
              if (this._mediaElement.getVideoPlaybackQuality) {
                var r = this._mediaElement.getVideoPlaybackQuality();
                (n = r.totalVideoFrames), (i = r.droppedVideoFrames);
              } else
                null != this._mediaElement.webkitDecodedFrameCount
                  ? ((n = this._mediaElement.webkitDecodedFrameCount), (i = this._mediaElement.webkitDroppedFrameCount))
                  : (t = !1);
              return t && ((e.decodedFrames = n), (e.droppedFrames = i)), e;
            },
          },
        ]),
        e
      );
    })();
    (t.default = d), (e.exports = t.default);
  },
]);
