"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// const getFetch = (url: string) => fetch(url);
var getFetch = function getFetch(url) {
  return new Promise(function () {
    return {
      one: 2,
      three: 4,
      url: url
    };
  });
};

var getSeconds = function getSeconds(_ref) {
  var _ref$seconds = _ref.seconds,
      s = _ref$seconds === void 0 ? 0 : _ref$seconds,
      _ref$minutes = _ref.minutes,
      mi = _ref$minutes === void 0 ? 0 : _ref$minutes,
      _ref$hours = _ref.hours,
      h = _ref$hours === void 0 ? 0 : _ref$hours,
      _ref$days = _ref.days,
      d = _ref$days === void 0 ? 0 : _ref$days,
      _ref$weeks = _ref.weeks,
      w = _ref$weeks === void 0 ? 0 : _ref$weeks,
      _ref$months = _ref.months,
      mo = _ref$months === void 0 ? 0 : _ref$months,
      _ref$years = _ref.years,
      y = _ref$years === void 0 ? 0 : _ref$years;
  return s + mi * 60 + h * 3600 + d * 86400 + w * 604800 + mo * 2592000 + y * 31556952;
};

var getExpiry = function getExpiry(_ref2) {
  var until = _ref2.until,
      storeFor = _objectWithoutProperties(_ref2, ["until"]);

  return until ? until : getSeconds(storeFor) + new Date().getTime();
};

var kFetch = function kFetch(url) {
  var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      storageType = _ref3.storageType,
      storeFor = _ref3.storeFor;

  var storeTime = storeFor ? getExpiry(storeFor) : 0;
  return getFetch(url);
};

var _default = kFetch;
exports.default = _default;
