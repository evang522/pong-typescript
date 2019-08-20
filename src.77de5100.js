// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"lib/Models/Canvas/Canvas.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Canvas =
/*#__PURE__*/
function () {
  function Canvas(canvas) {
    _classCallCheck(this, Canvas);

    this.canvas = canvas;
    this.setDrawColor('white');
  }

  _createClass(Canvas, [{
    key: "clear",
    value: function clear() {
      this.setDrawColor('black');
      this.get2dContext().fillRect(0, 0, this.getRightPx(), this.getHeight());
      this.setDrawColor('white');
    }
  }, {
    key: "get2dContext",
    value: function get2dContext() {
      return this.canvas.getContext('2d');
    }
  }, {
    key: "setDrawColor",
    value: function setDrawColor(setting) {
      this.get2dContext().fillStyle = setting;
    }
  }, {
    key: "drawRect",
    value: function drawRect(rect) {
      this.get2dContext().fillRect(rect.x, rect.y, rect.xOffset, rect.yOffset);
    }
  }, {
    key: "getLeftPx",
    value: function getLeftPx() {
      return 0;
    }
  }, {
    key: "getRightPx",
    value: function getRightPx() {
      return this.canvas.width;
    }
  }, {
    key: "getWidthCenterPx",
    value: function getWidthCenterPx() {
      return this.getRightPx() / 2;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.canvas.height;
    }
  }, {
    key: "getHeightCenterPx",
    value: function getHeightCenterPx() {
      return this.canvas.height / 2;
    }
  }]);

  return Canvas;
}();

exports.default = Canvas;
},{}],"lib/Models/PongBall/PongBall.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var PongBall =
/*#__PURE__*/
function () {
  function PongBall(rect, richtung) {
    _classCallCheck(this, PongBall);

    this.rect = rect;
    this.richtung = richtung;
  }

  _createClass(PongBall, [{
    key: "getShape",
    value: function getShape() {
      return this.rect;
    }
  }, {
    key: "speedX",
    get: function get() {
      return this.richtung.x;
    },
    set: function set(speed) {
      this.richtung.x = speed;
    }
  }, {
    key: "speedY",
    get: function get() {
      return this.richtung.y;
    },
    set: function set(speed) {
      this.richtung.y = speed;
    }
  }]);

  return PongBall;
}();

exports.default = PongBall;
},{}],"lib/Models/PongBall/index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var PongBall_1 = __importDefault(require("./PongBall"));

exports.default = PongBall_1.default;
},{"./PongBall":"lib/Models/PongBall/PongBall.ts"}],"lib/Models/Rectangle/Rectangle.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Rectangle =
/*#__PURE__*/
function () {
  function Rectangle(location, sizeOffset) {
    _classCallCheck(this, Rectangle);

    this.location = location;
    this.sizeOffset = sizeOffset;
  }

  _createClass(Rectangle, [{
    key: "getRightSide",
    value: function getRightSide() {
      return this.location.x + this.xOffset;
    }
  }, {
    key: "getLeftSide",
    value: function getLeftSide() {
      return this.location.x;
    }
  }, {
    key: "getTopSide",
    value: function getTopSide() {
      return this.location.y;
    }
  }, {
    key: "getBottomSide",
    value: function getBottomSide() {
      return this.location.y + this.yOffset;
    }
  }, {
    key: "x",
    get: function get() {
      return this.location.x;
    },
    set: function set(newX) {
      this.location.x = newX;
    }
  }, {
    key: "y",
    get: function get() {
      return this.location.y;
    },
    set: function set(newY) {
      this.location.y = newY;
    }
  }, {
    key: "xOffset",
    get: function get() {
      return this.sizeOffset.x;
    }
  }, {
    key: "yOffset",
    get: function get() {
      return this.sizeOffset.y;
    }
  }]);

  return Rectangle;
}();

exports.default = Rectangle;
},{}],"lib/Models/Vector/Vector.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Vector = function Vector(x, y) {
  _classCallCheck(this, Vector);

  this.x = x;
  this.y = y;
};

exports.default = Vector;
},{}],"lib/Services/PongGame/PongGame.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Canvas_1 = __importDefault(require("../../Models/Canvas/Canvas"));

var index_1 = __importDefault(require("../../Models/PongBall/index"));

var Rectangle_1 = __importDefault(require("../../Models/Rectangle/Rectangle"));

var Vector_1 = __importDefault(require("../../Models/Vector/Vector"));

var PongGame =
/*#__PURE__*/
function () {
  function PongGame(canvasId) {
    var _this = this;

    _classCallCheck(this, PongGame);

    this.lastTimestamp = 0;

    this.draw = function (ms) {
      _this.drawBall();

      _this.updateBallPosition(ms || 0);

      window.requestAnimationFrame(_this.draw);
    };

    this.canvas = this.buildCanvas(canvasId);
    this.ball = this.buildBall();
  }

  _createClass(PongGame, [{
    key: "start",
    value: function start() {
      this.draw();
    }
  }, {
    key: "drawBall",
    value: function drawBall() {
      this.canvas.clear();
      this.canvas.setDrawColor('white');
      this.canvas.drawRect(this.ball.getShape());
    }
  }, {
    key: "updateBallPosition",
    value: function updateBallPosition(lifeCycleMs) {
      if (this.ball.getShape().getLeftSide() < this.canvas.getLeftPx()) {
        this.ball.speedX = -this.ball.speedX;
      }

      if (this.ball.getShape().getRightSide() > this.canvas.getRightPx()) {
        this.ball.speedX = -this.ball.speedX;
      }

      if (this.ball.getShape().getTopSide() < 0) {
        this.ball.speedY = -this.ball.speedY;
      }

      if (this.ball.getShape().getBottomSide() > this.canvas.getHeight()) {
        this.ball.speedY = -this.ball.speedY;
      }

      var timeDiff = lifeCycleMs - this.lastTimestamp;
      this.lastTimestamp = lifeCycleMs;
      var adjusted = timeDiff / 1500;
      this.ball.getShape().x += this.ball.speedX * adjusted;
      this.ball.getShape().y += this.ball.speedY * adjusted;
    }
  }, {
    key: "buildCanvas",
    value: function buildCanvas(canvasId) {
      var canvasElement = document.getElementById(canvasId);

      if (!canvasElement) {
        throw new Error('Canvas Element not found');
      }

      canvasElement.width = 1000;
      canvasElement.height = 500;
      return new Canvas_1.default(canvasElement);
    }
  }, {
    key: "buildBall",
    value: function buildBall() {
      var location = new Rectangle_1.default(new Vector_1.default(this.canvas.getWidthCenterPx(), this.canvas.getHeightCenterPx()), new Vector_1.default(8, 8));
      var speed = new Vector_1.default(300, 200);
      return new index_1.default(location, speed);
    }
  }]);

  return PongGame;
}();

exports.default = PongGame;
},{"../../Models/Canvas/Canvas":"lib/Models/Canvas/Canvas.ts","../../Models/PongBall/index":"lib/Models/PongBall/index.ts","../../Models/Rectangle/Rectangle":"lib/Models/Rectangle/Rectangle.ts","../../Models/Vector/Vector":"lib/Models/Vector/Vector.ts"}],"index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var PongGame_1 = __importDefault(require("./lib/Services/PongGame/PongGame"));

console.log('Loaded Properly: ' + new Date().toUTCString());
var game = new PongGame_1.default('theimportantobject');
game.start();
},{"./lib/Services/PongGame/PongGame":"lib/Services/PongGame/PongGame.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "42053" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=pong-typescript/src.77de5100.js.map