import * as path3 from 'path';
import path3__default, { join } from 'path';
import * as fsPromises from 'fs/promises';
import { access } from 'fs/promises';
import crypto, { randomBytes } from 'crypto';
import * as fs3 from 'fs';
import { promises, existsSync } from 'fs';
import * as os2 from 'os';
import { homedir } from 'os';
import { fileURLToPath } from 'url';
import N2, { stdout, stdin } from 'process';
import ot from 'readline';
import 'tty';
import 'util';

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  __defProp(target, "default", { value: mod, enumerable: true }) ,
  mod
));

// ../../node_modules/.pnpm/picocolors@1.1.1/node_modules/picocolors/picocolors.js
var require_picocolors = __commonJS({
  "../../node_modules/.pnpm/picocolors@1.1.1/node_modules/picocolors/picocolors.js"(exports$1, module) {
    var p = process || {};
    var argv = p.argv || [];
    var env = p.env || {};
    var isColorSupported = !(!!env.NO_COLOR || argv.includes("--no-color")) && (!!env.FORCE_COLOR || argv.includes("--color") || p.platform === "win32" || (p.stdout || {}).isTTY && env.TERM !== "dumb" || !!env.CI);
    var formatter = (open, close, replace = open) => (input2) => {
      let string = "" + input2, index = string.indexOf(close, open.length);
      return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
    var replaceClose = (string, close, replace, index) => {
      let result = "", cursor = 0;
      do {
        result += string.substring(cursor, index) + replace;
        cursor = index + close.length;
        index = string.indexOf(close, cursor);
      } while (~index);
      return result + string.substring(cursor);
    };
    var createColors = (enabled = isColorSupported) => {
      let f = enabled ? formatter : () => String;
      return {
        isColorSupported: enabled,
        reset: f("\x1B[0m", "\x1B[0m"),
        bold: f("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"),
        dim: f("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"),
        italic: f("\x1B[3m", "\x1B[23m"),
        underline: f("\x1B[4m", "\x1B[24m"),
        inverse: f("\x1B[7m", "\x1B[27m"),
        hidden: f("\x1B[8m", "\x1B[28m"),
        strikethrough: f("\x1B[9m", "\x1B[29m"),
        black: f("\x1B[30m", "\x1B[39m"),
        red: f("\x1B[31m", "\x1B[39m"),
        green: f("\x1B[32m", "\x1B[39m"),
        yellow: f("\x1B[33m", "\x1B[39m"),
        blue: f("\x1B[34m", "\x1B[39m"),
        magenta: f("\x1B[35m", "\x1B[39m"),
        cyan: f("\x1B[36m", "\x1B[39m"),
        white: f("\x1B[37m", "\x1B[39m"),
        gray: f("\x1B[90m", "\x1B[39m"),
        bgBlack: f("\x1B[40m", "\x1B[49m"),
        bgRed: f("\x1B[41m", "\x1B[49m"),
        bgGreen: f("\x1B[42m", "\x1B[49m"),
        bgYellow: f("\x1B[43m", "\x1B[49m"),
        bgBlue: f("\x1B[44m", "\x1B[49m"),
        bgMagenta: f("\x1B[45m", "\x1B[49m"),
        bgCyan: f("\x1B[46m", "\x1B[49m"),
        bgWhite: f("\x1B[47m", "\x1B[49m"),
        blackBright: f("\x1B[90m", "\x1B[39m"),
        redBright: f("\x1B[91m", "\x1B[39m"),
        greenBright: f("\x1B[92m", "\x1B[39m"),
        yellowBright: f("\x1B[93m", "\x1B[39m"),
        blueBright: f("\x1B[94m", "\x1B[39m"),
        magentaBright: f("\x1B[95m", "\x1B[39m"),
        cyanBright: f("\x1B[96m", "\x1B[39m"),
        whiteBright: f("\x1B[97m", "\x1B[39m"),
        bgBlackBright: f("\x1B[100m", "\x1B[49m"),
        bgRedBright: f("\x1B[101m", "\x1B[49m"),
        bgGreenBright: f("\x1B[102m", "\x1B[49m"),
        bgYellowBright: f("\x1B[103m", "\x1B[49m"),
        bgBlueBright: f("\x1B[104m", "\x1B[49m"),
        bgMagentaBright: f("\x1B[105m", "\x1B[49m"),
        bgCyanBright: f("\x1B[106m", "\x1B[49m"),
        bgWhiteBright: f("\x1B[107m", "\x1B[49m")
      };
    };
    module.exports = createColors();
    module.exports.createColors = createColors;
  }
});

// ../../node_modules/.pnpm/sisteransi@1.0.5/node_modules/sisteransi/src/index.js
var require_src = __commonJS({
  "../../node_modules/.pnpm/sisteransi@1.0.5/node_modules/sisteransi/src/index.js"(exports$1, module) {
    var ESC = "\x1B";
    var CSI = `${ESC}[`;
    var beep = "\x07";
    var cursor = {
      to(x3, y2) {
        if (!y2) return `${CSI}${x3 + 1}G`;
        return `${CSI}${y2 + 1};${x3 + 1}H`;
      },
      move(x3, y2) {
        let ret = "";
        if (x3 < 0) ret += `${CSI}${-x3}D`;
        else if (x3 > 0) ret += `${CSI}${x3}C`;
        if (y2 < 0) ret += `${CSI}${-y2}A`;
        else if (y2 > 0) ret += `${CSI}${y2}B`;
        return ret;
      },
      up: (count = 1) => `${CSI}${count}A`,
      down: (count = 1) => `${CSI}${count}B`,
      forward: (count = 1) => `${CSI}${count}C`,
      backward: (count = 1) => `${CSI}${count}D`,
      nextLine: (count = 1) => `${CSI}E`.repeat(count),
      prevLine: (count = 1) => `${CSI}F`.repeat(count),
      left: `${CSI}G`,
      hide: `${CSI}?25l`,
      show: `${CSI}?25h`,
      save: `${ESC}7`,
      restore: `${ESC}8`
    };
    var scroll = {
      up: (count = 1) => `${CSI}S`.repeat(count),
      down: (count = 1) => `${CSI}T`.repeat(count)
    };
    var erase = {
      screen: `${CSI}2J`,
      up: (count = 1) => `${CSI}1J`.repeat(count),
      down: (count = 1) => `${CSI}J`.repeat(count),
      line: `${CSI}2K`,
      lineEnd: `${CSI}K`,
      lineStart: `${CSI}1K`,
      lines(count) {
        let clear = "";
        for (let i = 0; i < count; i++)
          clear += this.line + (i < count - 1 ? cursor.up() : "");
        if (count)
          clear += cursor.left;
        return clear;
      }
    };
    module.exports = { cursor, scroll, erase, beep };
  }
});

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js
var external_exports = {};
__export(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/util.js
var util;
(function(util2) {
  util2.assertEqual = (_2) => {
  };
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k2) => typeof obj[obj[k2]] !== "number");
    const filtered = {};
    for (const k2 of validKeys) {
      filtered[k2] = obj[k2];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e2) {
      return obj[e2];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_2, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class _ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/locales/en.js
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "bigint")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var en_default = errorMap;

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/errors.js
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/parseUtil.js
var makeIssue = (params) => {
  const { data, path: path5, errorMaps, issueData } = params;
  const fullPath = [...path5, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x3) => !!x3)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x3) => x3.status === "aborted";
var isDirty = (x3) => x3.status === "dirty";
var isValid = (x3) => x3.status === "valid";
var isAsync = (x3) => typeof Promise !== "undefined" && x3 instanceof Promise;

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
  constructor(parent, value, path5, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path5;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input2) {
    return getParsedType(input2.data);
  }
  _getOrReturnCtx(input2, ctx) {
    return ctx || {
      common: input2.parent.common,
      data: input2.data,
      parsedType: getParsedType(input2.data),
      schemaErrorMap: this._def.errorMap,
      path: input2.path,
      parent: input2.parent
    };
  }
  _processInputParams(input2) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input2.parent.common,
        data: input2.data,
        parsedType: getParsedType(input2.data),
        schemaErrorMap: this._def.errorMap,
        path: input2.path,
        parent: input2.parent
      }
    };
  }
  _parseSync(input2) {
    const result = this._parse(input2);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input2) {
    const result = this._parse(input2);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if (err?.message?.toLowerCase()?.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: true
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && decoded?.typ !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class _ZodString extends ZodType {
  _parse(input2) {
    if (this._def.coerce) {
      input2.data = String(input2.data);
    }
    const parsedType = this._getType(input2);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input2);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input2.data.length < check.value) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input2.data.length > check.value) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input2.data.length > check.value;
        const tooSmall = input2.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input2, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input2.data)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input2.data)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input2.data)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input2.data)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input2.data)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input2.data)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input2.data)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input2.data);
        } catch {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input2.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input2.data = input2.data.trim();
      } else if (check.kind === "includes") {
        if (!input2.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input2.data = input2.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input2.data = input2.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input2.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input2.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input2.data)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input2.data)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input2.data)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input2.data)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input2.data, check.version)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input2.data, check.alg)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input2.data, check.version)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input2.data)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input2.data)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input2.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      offset: options?.offset ?? false,
      local: options?.local ?? false,
      ...errorUtil.errToObj(options?.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input2) {
    if (this._def.coerce) {
      input2.data = Number(input2.data);
    }
    const parsedType = this._getType(input2);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input2);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input2.data)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input2.data < check.value : input2.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input2.data > check.value : input2.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input2.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input2.data)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input2.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input2) {
    if (this._def.coerce) {
      try {
        input2.data = BigInt(input2.data);
      } catch {
        return this._getInvalidInput(input2);
      }
    }
    const parsedType = this._getType(input2);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input2);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input2.data < check.value : input2.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input2.data > check.value : input2.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input2.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input2.data };
  }
  _getInvalidInput(input2) {
    const ctx = this._getOrReturnCtx(input2);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input2) {
    if (this._def.coerce) {
      input2.data = Boolean(input2.data);
    }
    const parsedType = this._getType(input2);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input2);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input2.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class _ZodDate extends ZodType {
  _parse(input2) {
    if (this._def.coerce) {
      input2.data = new Date(input2.data);
    }
    const parsedType = this._getType(input2);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input2);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input2.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input2);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input2.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input2.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input2, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input2.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: params?.coerce || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input2) {
    const parsedType = this._getType(input2);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input2);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input2.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input2) {
    const parsedType = this._getType(input2);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input2);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input2.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input2) {
    const parsedType = this._getType(input2);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input2);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input2.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input2) {
    return OK(input2.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input2) {
    return OK(input2.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input2) {
    const ctx = this._getOrReturnCtx(input2);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input2) {
    const parsedType = this._getType(input2);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input2);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input2.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class _ZodArray extends ZodType {
  _parse(input2) {
    const { ctx, status } = this._processInputParams(input2);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }
  _parse(input2) {
    const parsedType = this._getType(input2);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input2);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input2);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") ; else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: errorUtil.errToObj(message).message ?? defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input2) {
    const { ctx } = this._processInputParams(input2);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input2) {
    const { ctx } = this._processInputParams(input2);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input2) {
    const { status, ctx } = this._processInputParams(input2);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input2) {
    const { status, ctx } = this._processInputParams(input2);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x3) => !!x3);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input2) {
    const { status, ctx } = this._processInputParams(input2);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input2) {
    const { status, ctx } = this._processInputParams(input2);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class _ZodSet extends ZodType {
  _parse(input2) {
    const { status, ctx } = this._processInputParams(input2);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input2) {
    const { ctx } = this._processInputParams(input2);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x3) => !!x3),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x3) => !!x3),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me2 = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me2._def.args.parseAsync(args, params).catch((e2) => {
          error.addIssue(makeArgsIssue(args, e2));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me2._def.returns._def.type.parseAsync(result, params).catch((e2) => {
          error.addIssue(makeReturnsIssue(result, e2));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me2 = this;
      return OK(function(...args) {
        const parsedArgs = me2._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me2._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input2) {
    const { ctx } = this._processInputParams(input2);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input2) {
    if (input2.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input2);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input2.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input2) {
    if (typeof input2.data !== "string") {
      const ctx = this._getOrReturnCtx(input2);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input2.data)) {
      const ctx = this._getOrReturnCtx(input2);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input2.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input2) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input2);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input2.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input2.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input2) {
    const { ctx } = this._processInputParams(input2);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input2) {
    const { status, ctx } = this._processInputParams(input2);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input2) {
    const parsedType = this._getType(input2);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input2);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input2) {
    const parsedType = this._getType(input2);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input2);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input2) {
    const { ctx } = this._processInputParams(input2);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input2) {
    const { ctx } = this._processInputParams(input2);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input2) {
    const parsedType = this._getType(input2);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input2);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input2.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = /* @__PURE__ */ Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input2) {
    const { ctx } = this._processInputParams(input2);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input2) {
    const { status, ctx } = this._processInputParams(input2);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new _ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input2) {
    const result = this._def.innerType._parse(input2);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p2 = typeof p === "string" ? { message: p } : p;
  return p2;
}
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      const r = check(data);
      if (r instanceof Promise) {
        return r.then((r2) => {
          if (!r2) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = params.fatal ?? fatal ?? true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: ((arg) => ZodString.create({ ...arg, coerce: true })),
  number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
  boolean: ((arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  })),
  bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
  date: ((arg) => ZodDate.create({ ...arg, coerce: true }))
};
var NEVER = INVALID;

// src/config.ts
var DEFAULT_ACCOUNT_ID = "default";
var WecomAccountSchema = external_exports.object({
  name: external_exports.string().optional(),
  enabled: external_exports.boolean().optional(),
  webhookPath: external_exports.string().optional(),
  token: external_exports.string().optional(),
  encodingAESKey: external_exports.string().optional(),
  receiveId: external_exports.string().optional(),
  welcomeText: external_exports.string().optional(),
  dmPolicy: external_exports.enum(["open", "pairing", "allowlist", "disabled"]).optional(),
  allowFrom: external_exports.array(external_exports.string()).optional(),
  groupPolicy: external_exports.enum(["open", "allowlist", "disabled"]).optional(),
  groupAllowFrom: external_exports.array(external_exports.string()).optional(),
  requireMention: external_exports.boolean().optional()
});
WecomAccountSchema.extend({
  defaultAccount: external_exports.string().optional(),
  accounts: external_exports.record(WecomAccountSchema).optional()
});
var WecomConfigJsonSchema = {
  schema: {
    type: "object",
    additionalProperties: false,
    properties: {
      name: { type: "string" },
      enabled: { type: "boolean" },
      webhookPath: { type: "string" },
      token: { type: "string" },
      encodingAESKey: { type: "string" },
      receiveId: { type: "string" },
      welcomeText: { type: "string" },
      dmPolicy: { type: "string", enum: ["open", "pairing", "allowlist", "disabled"] },
      allowFrom: { type: "array", items: { type: "string" } },
      groupPolicy: { type: "string", enum: ["open", "allowlist", "disabled"] },
      groupAllowFrom: { type: "array", items: { type: "string" } },
      requireMention: { type: "boolean" },
      defaultAccount: { type: "string" },
      accounts: {
        type: "object",
        additionalProperties: {
          type: "object",
          additionalProperties: false,
          properties: {
            name: { type: "string" },
            enabled: { type: "boolean" },
            webhookPath: { type: "string" },
            token: { type: "string" },
            encodingAESKey: { type: "string" },
            receiveId: { type: "string" },
            welcomeText: { type: "string" },
            dmPolicy: { type: "string", enum: ["open", "pairing", "allowlist", "disabled"] },
            allowFrom: { type: "array", items: { type: "string" } },
            groupPolicy: { type: "string", enum: ["open", "allowlist", "disabled"] },
            groupAllowFrom: { type: "array", items: { type: "string" } },
            requireMention: { type: "boolean" }
          }
        }
      }
    }
  }
};
function normalizeAccountId(raw) {
  const trimmed = String(raw ?? "").trim();
  return trimmed || DEFAULT_ACCOUNT_ID;
}
function listConfiguredAccountIds(cfg) {
  const accounts = cfg.channels?.wecom?.accounts;
  if (!accounts || typeof accounts !== "object") return [];
  return Object.keys(accounts).filter(Boolean);
}
function listWecomAccountIds(cfg) {
  const ids = listConfiguredAccountIds(cfg);
  if (ids.length === 0) return [DEFAULT_ACCOUNT_ID];
  return ids.sort((a, b) => a.localeCompare(b));
}
function resolveDefaultWecomAccountId(cfg) {
  const wecomConfig = cfg.channels?.wecom;
  if (wecomConfig?.defaultAccount?.trim()) return wecomConfig.defaultAccount.trim();
  const ids = listWecomAccountIds(cfg);
  if (ids.includes(DEFAULT_ACCOUNT_ID)) return DEFAULT_ACCOUNT_ID;
  return ids[0] ?? DEFAULT_ACCOUNT_ID;
}
function resolveAccountConfig(cfg, accountId) {
  const accounts = cfg.channels?.wecom?.accounts;
  if (!accounts || typeof accounts !== "object") return void 0;
  return accounts[accountId];
}
function mergeWecomAccountConfig(cfg, accountId) {
  const base = cfg.channels?.wecom ?? {};
  const { accounts: _ignored, defaultAccount: _ignored2, ...baseConfig } = base;
  const account = resolveAccountConfig(cfg, accountId) ?? {};
  return { ...baseConfig, ...account };
}
function resolveWecomAccount(params) {
  const accountId = normalizeAccountId(params.accountId);
  const baseEnabled = params.cfg.channels?.wecom?.enabled !== false;
  const merged = mergeWecomAccountConfig(params.cfg, accountId);
  const enabled = baseEnabled && merged.enabled !== false;
  const isDefaultAccount = accountId === DEFAULT_ACCOUNT_ID;
  const token = merged.token?.trim() || (isDefaultAccount ? process.env.WECOM_TOKEN?.trim() : void 0) || void 0;
  const encodingAESKey = merged.encodingAESKey?.trim() || (isDefaultAccount ? process.env.WECOM_ENCODING_AES_KEY?.trim() : void 0) || void 0;
  const receiveId = merged.receiveId?.trim() ?? "";
  const configured = Boolean(token && encodingAESKey);
  return {
    accountId,
    name: merged.name?.trim() || void 0,
    enabled,
    configured,
    token,
    encodingAESKey,
    receiveId,
    config: merged
  };
}
function resolveGroupPolicy(config) {
  return config.groupPolicy ?? "open";
}
function resolveRequireMention(config) {
  if (typeof config.requireMention === "boolean") return config.requireMention;
  return true;
}
function resolveAllowFrom(config) {
  return config.allowFrom ?? [];
}
function resolveGroupAllowFrom(config) {
  return config.groupAllowFrom ?? [];
}

// ../../packages/shared/src/logger/logger.ts
function createLogger(prefix, opts) {
  const logFn = opts?.log ?? console.log;
  const errorFn = opts?.error ?? console.error;
  return {
    debug: (msg) => logFn(`[${prefix}] [DEBUG] ${msg}`),
    info: (msg) => logFn(`[${prefix}] ${msg}`),
    warn: (msg) => logFn(`[${prefix}] [WARN] ${msg}`),
    error: (msg) => errorFn(`[${prefix}] [ERROR] ${msg}`)
  };
}

// ../../packages/shared/src/policy/dm-policy.ts
function checkDmPolicy(params) {
  const { dmPolicy, senderId, allowFrom = [] } = params;
  switch (dmPolicy) {
    case "open":
      return { allowed: true };
    case "pairing":
      return { allowed: true };
    case "allowlist":
      if (allowFrom.includes(senderId)) {
        return { allowed: true };
      }
      return {
        allowed: false,
        reason: `sender ${senderId} not in DM allowlist`
      };
    default:
      return { allowed: true };
  }
}

// ../../packages/shared/src/policy/group-policy.ts
function checkGroupPolicy(params) {
  const { groupPolicy, conversationId, groupAllowFrom = [], requireMention, mentionedBot } = params;
  switch (groupPolicy) {
    case "disabled":
      return {
        allowed: false,
        reason: "group messages disabled"
      };
    case "allowlist":
      if (!groupAllowFrom.includes(conversationId)) {
        return {
          allowed: false,
          reason: `group ${conversationId} not in allowlist`
        };
      }
      break;
  }
  if (requireMention && !mentionedBot) {
    return {
      allowed: false,
      reason: "message did not mention bot"
    };
  }
  return { allowed: true };
}

// ../../packages/shared/src/file/file-utils.ts
var MIME_TO_EXTENSION = {
  // Images
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/gif": ".gif",
  "image/webp": ".webp",
  "image/bmp": ".bmp",
  // Audio
  "audio/mpeg": ".mp3",
  "audio/wav": ".wav",
  "audio/ogg": ".ogg",
  "audio/amr": ".amr",
  "audio/x-m4a": ".m4a",
  // Video
  "video/mp4": ".mp4",
  "video/quicktime": ".mov",
  "video/x-msvideo": ".avi",
  "video/webm": ".webm",
  // Documents
  "application/pdf": ".pdf",
  "application/msword": ".doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ".docx",
  "application/vnd.ms-excel": ".xls",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ".xlsx",
  "application/vnd.ms-powerpoint": ".ppt",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": ".pptx",
  "application/rtf": ".rtf",
  "application/vnd.oasis.opendocument.text": ".odt",
  "application/vnd.oasis.opendocument.spreadsheet": ".ods",
  "text/plain": ".txt",
  "text/markdown": ".md",
  "text/csv": ".csv",
  // Archives
  "application/zip": ".zip",
  "application/x-rar-compressed": ".rar",
  "application/vnd.rar": ".rar",
  "application/x-7z-compressed": ".7z",
  "application/x-tar": ".tar",
  "application/gzip": ".gz",
  "application/x-gzip": ".gz",
  "application/x-bzip2": ".bz2",
  // Code
  "application/json": ".json",
  "application/xml": ".xml",
  "text/xml": ".xml",
  "text/html": ".html",
  "text/css": ".css",
  "text/javascript": ".js",
  "application/javascript": ".js",
  "text/x-python": ".py",
  "text/x-java-source": ".java",
  "text/x-c": ".c",
  "text/x-yaml": ".yaml",
  "application/x-yaml": ".yaml"
};
function resolveExtension(contentType, fileName) {
  const mimeType = contentType.split(";")[0].trim().toLowerCase();
  if (mimeType in MIME_TO_EXTENSION) {
    return MIME_TO_EXTENSION[mimeType];
  }
  return ".bin";
}
var IMAGE_EXTENSIONS = /* @__PURE__ */ new Set([
  "png",
  "jpg",
  "jpeg",
  "gif",
  "webp",
  "bmp",
  "tiff",
  "tif",
  "heic",
  "heif",
  "svg",
  "ico"
]);
var AUDIO_EXTENSIONS = /* @__PURE__ */ new Set([
  "mp3",
  "wav",
  "ogg",
  "m4a",
  "amr",
  "flac",
  "aac",
  "wma"
]);
var VIDEO_EXTENSIONS = /* @__PURE__ */ new Set([
  "mp4",
  "mov",
  "avi",
  "mkv",
  "webm",
  "flv",
  "wmv",
  "m4v"
]);
var NON_IMAGE_EXTENSIONS = /* @__PURE__ */ new Set([
  // 文档
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "csv",
  "ppt",
  "pptx",
  "txt",
  "md",
  "rtf",
  "odt",
  "ods",
  // 压缩包
  "zip",
  "rar",
  "7z",
  "tar",
  "gz",
  "tgz",
  "bz2",
  // 音频
  ...AUDIO_EXTENSIONS,
  // 视频
  ...VIDEO_EXTENSIONS,
  // 数据
  "json",
  "xml",
  "yaml",
  "yml"
]);
var MARKDOWN_IMAGE_RE = /!\[([^\]]*)\]\(([^)]+)\)/g;
var MARKDOWN_LINKED_IMAGE_RE = /\[!\[([^\]]*)\]\(([^)]+)\)\]\(([^)]+)\)/g;
var HTML_IMAGE_RE = /<img\b[^>]*\bsrc\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s>]+))[^>]*>/gi;
var MARKDOWN_LINK_RE = /\[([^\]]*)\]\(([^)]+)\)/g;
var BARE_IMAGE_PATH_RE = /`?((?:\/(?:tmp|var|private|Users|home|root)\/[^\s`'",)]+|[A-Za-z]:[\\/][^\s`'",)]+)\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico))`?/gi;
var NON_IMAGE_EXT_PATTERN = Array.from(NON_IMAGE_EXTENSIONS).join("|");
var WINDOWS_PATH_SEP = String.raw`(?:\\\\|\\)`;
var WINDOWS_FILE_PATH = String.raw`[A-Za-z]:${WINDOWS_PATH_SEP}(?:[^\\/:*?"<>|\r\n]+${WINDOWS_PATH_SEP})*[^\\/:*?"<>|\r\n]+`;
var UNIX_FILE_PATH = String.raw`\/(?:tmp|var|private|Users|home|root)\/[^\s'",)]+`;
var BARE_FILE_PATH_RE = new RegExp(
  String.raw`\`?((?:${UNIX_FILE_PATH}|${WINDOWS_FILE_PATH})\.(?:${NON_IMAGE_EXT_PATTERN}))\`?`,
  "gi"
);
var MEDIA_LINE_PREFIX = "MEDIA:";
function unwrapMediaLinePayload(value) {
  const trimmed = value.trim();
  if (trimmed.length < 2) return void 0;
  const first = trimmed[0];
  const last = trimmed[trimmed.length - 1];
  if (first !== last) return void 0;
  if (first !== `"` && first !== "'" && first !== "`") return void 0;
  return trimmed.slice(1, -1).trim();
}
function cleanMediaLineCandidate(value) {
  return value.replace(/^[`"'[{(<]+/, "").replace(/[`"'\])}>.,;]+$/, "");
}
function splitMediaLineCandidates(payload) {
  const unwrapped = unwrapMediaLinePayload(payload);
  if (unwrapped) return [unwrapped];
  return payload.split(/\s+/).filter(Boolean);
}
function isHttpUrl(value) {
  return /^https?:\/\//i.test(value);
}
function isFileUrl(value) {
  return /^file:\/\//i.test(value);
}
function isLocalReference(raw) {
  if (isHttpUrl(raw)) return false;
  return raw.startsWith("file://") || raw.startsWith("MEDIA:") || raw.startsWith("attachment://") || raw.startsWith("/") || raw.startsWith("~") || /^[a-zA-Z]:[\\/]/.test(raw);
}
function normalizeLocalPath(raw) {
  let p = raw.trim();
  if (isFileUrl(p)) {
    try {
      return fileURLToPath(p);
    } catch {
      p = p.replace(/^file:\/\/\/?/i, "");
    }
  }
  if (p.startsWith("MEDIA:")) {
    p = p.replace(/^MEDIA:/i, "");
  } else if (p.startsWith("attachment://")) {
    p = p.replace(/^attachment:\/\//i, "");
  }
  p = p.replace(/\\ /g, " ");
  try {
    p = decodeURIComponent(p);
  } catch {
  }
  if (p.startsWith("~/") || p === "~") {
    p = path3.join(os2.homedir(), p.slice(1));
  } else if (p.startsWith("~")) ;
  if (!path3.isAbsolute(p)) {
    p = path3.resolve(process.cwd(), p);
  }
  return p;
}
function stripTitleFromUrl(value) {
  const trimmed = value.trim();
  const match = trimmed.match(/^(\S+)\s+["'][^"']*["']\s*$/);
  return match ? match[1] : trimmed;
}
function getExtension(filePath) {
  const ext = path3.extname(filePath).toLowerCase();
  return ext.startsWith(".") ? ext.slice(1) : ext;
}
function isNonImageFilePath(filePath) {
  const ext = getExtension(filePath);
  return ext ? NON_IMAGE_EXTENSIONS.has(ext) : false;
}
function detectMediaType(filePath) {
  const ext = getExtension(filePath);
  if (IMAGE_EXTENSIONS.has(ext)) return "image";
  if (AUDIO_EXTENSIONS.has(ext)) return "audio";
  if (VIDEO_EXTENSIONS.has(ext)) return "video";
  return "file";
}
function createExtractedMedia(source, sourceKind, options) {
  const isHttp = isHttpUrl(source);
  const isLocal = !isHttp && isLocalReference(source);
  const cleanSource = stripTitleFromUrl(source);
  let localPath;
  let fileName;
  if (isLocal) {
    localPath = normalizeLocalPath(cleanSource);
    fileName = path3.basename(localPath);
  } else if (isHttp) {
    try {
      const url = new URL(cleanSource);
      fileName = path3.basename(url.pathname) || void 0;
    } catch {
    }
  }
  const type = detectMediaType(fileName || cleanSource);
  return {
    source: cleanSource,
    localPath,
    type,
    isLocal,
    isHttp,
    fileName,
    sourceKind
  };
}
function extractMediaFromText(text, options = {}) {
  const {
    removeFromText = true,
    checkExists = false,
    existsSync: existsSync4,
    parseMediaLines = false,
    parseMarkdownImages = true,
    parseHtmlImages = true,
    parseBarePaths = true,
    parseMarkdownLinks = true
  } = options;
  const images = [];
  const files = [];
  const seenSources = /* @__PURE__ */ new Set();
  let result = text;
  const addMedia = (media) => {
    const key = media.localPath || media.source;
    if (seenSources.has(key)) return false;
    if (checkExists && media.isLocal && media.localPath) {
      const exists = existsSync4 ? existsSync4(media.localPath) : fs3.existsSync(media.localPath);
      if (!exists) return false;
    }
    seenSources.add(key);
    if (media.type === "image") {
      images.push(media);
    } else {
      files.push(media);
    }
    return true;
  };
  if (parseMediaLines) {
    const lines = result.split("\n");
    const keptLines = [];
    for (const line of lines) {
      const trimmedStart = line.trimStart();
      if (!trimmedStart.startsWith(MEDIA_LINE_PREFIX)) {
        keptLines.push(line);
        continue;
      }
      const payload = trimmedStart.slice(MEDIA_LINE_PREFIX.length).trim();
      if (!payload) {
        keptLines.push(line);
        continue;
      }
      const candidates = splitMediaLineCandidates(payload);
      let addedAny = false;
      for (const raw of candidates) {
        const candidate = stripTitleFromUrl(cleanMediaLineCandidate(raw));
        if (!candidate) continue;
        if (!isHttpUrl(candidate) && !isLocalReference(candidate)) {
          continue;
        }
        const media = createExtractedMedia(candidate, "bare");
        if (addMedia(media)) {
          addedAny = true;
        }
      }
      if (!addedAny || !removeFromText) {
        keptLines.push(line);
      }
    }
    if (removeFromText) {
      result = keptLines.join("\n");
    }
  }
  const replacements = [];
  const applyReplacements = () => {
    if (replacements.length === 0) return;
    replacements.sort((a, b) => b.start - a.start);
    for (const { start, end, replacement } of replacements) {
      result = result.slice(0, start) + replacement + result.slice(end);
    }
    replacements.length = 0;
  };
  if (parseMarkdownImages) {
    const linkedMatches = [...text.matchAll(MARKDOWN_LINKED_IMAGE_RE)];
    for (const match of linkedMatches) {
      const [fullMatch, _alt, imgSrc] = match;
      const media = createExtractedMedia(imgSrc, "markdown");
      if (media.type === "image") {
        addMedia(media);
        if (removeFromText && match.index !== void 0) {
          replacements.push({
            start: match.index,
            end: match.index + fullMatch.length,
            replacement: ""
          });
        }
      }
    }
    applyReplacements();
  }
  if (parseMarkdownImages) {
    const mdMatches = [...result.matchAll(MARKDOWN_IMAGE_RE)];
    for (const match of mdMatches) {
      const [fullMatch, _alt, src] = match;
      const media = createExtractedMedia(src, "markdown");
      if (media.type === "image") {
        addMedia(media);
        if (removeFromText && match.index !== void 0) {
          replacements.push({
            start: match.index,
            end: match.index + fullMatch.length,
            replacement: ""
          });
        }
      }
    }
    applyReplacements();
  }
  if (parseHtmlImages) {
    const htmlMatches = [...result.matchAll(HTML_IMAGE_RE)];
    for (const match of htmlMatches) {
      const [fullMatch, src1, src2, src3] = match;
      const src = src1 || src2 || src3;
      if (src) {
        const media = createExtractedMedia(src, "html");
        if (media.type === "image") {
          addMedia(media);
          if (removeFromText && match.index !== void 0) {
            replacements.push({
              start: match.index,
              end: match.index + fullMatch.length,
              replacement: ""
            });
          }
        }
      }
    }
    applyReplacements();
  }
  if (parseMarkdownLinks) {
    MARKDOWN_LINK_RE.lastIndex = 0;
    const linkMatches = [...result.matchAll(MARKDOWN_LINK_RE)];
    for (const match of linkMatches) {
      const [fullMatch, _label, rawPath] = match;
      const idx = match.index ?? 0;
      if (idx > 0 && result[idx - 1] === "!") continue;
      if (!isLocalReference(rawPath)) continue;
      const media = createExtractedMedia(rawPath, "markdown");
      if (media.type !== "image" && isNonImageFilePath(media.localPath || rawPath)) {
        if (addMedia(media)) {
          if (removeFromText && match.index !== void 0) {
            const fileName = media.fileName || path3.basename(rawPath);
            replacements.push({
              start: match.index,
              end: match.index + fullMatch.length,
              replacement: `[\u6587\u4EF6: ${fileName}]`
            });
          }
        }
      }
    }
    applyReplacements();
  }
  if (parseBarePaths && parseMarkdownImages) {
    BARE_IMAGE_PATH_RE.lastIndex = 0;
    const bareImageMatches = [...result.matchAll(BARE_IMAGE_PATH_RE)];
    const newBareImageMatches = bareImageMatches.filter((m) => {
      const idx = m.index ?? 0;
      const before = result.slice(Math.max(0, idx - 10), idx);
      return !before.includes("](");
    });
    for (const match of newBareImageMatches) {
      const [fullMatch, rawPath] = match;
      const media = createExtractedMedia(rawPath, "bare");
      if (media.type === "image") {
        addMedia(media);
        if (removeFromText && match.index !== void 0) {
          replacements.push({
            start: match.index,
            end: match.index + fullMatch.length,
            replacement: ""
          });
        }
      }
    }
    applyReplacements();
  }
  if (parseBarePaths && parseMarkdownLinks) {
    BARE_FILE_PATH_RE.lastIndex = 0;
    const bareFileMatches = [...result.matchAll(BARE_FILE_PATH_RE)];
    for (const match of bareFileMatches) {
      const [fullMatch, rawPath] = match;
      const media = createExtractedMedia(rawPath, "bare");
      if (media.type !== "image") {
        if (addMedia(media)) {
          if (removeFromText && match.index !== void 0) {
            const fileName = media.fileName || path3.basename(rawPath);
            replacements.push({
              start: match.index,
              end: match.index + fullMatch.length,
              replacement: `[\u6587\u4EF6: ${fileName}]`
            });
          }
        }
      }
    }
    applyReplacements();
  }
  if (removeFromText) {
    result = result.replace(/\n{3,}/g, "\n\n").trim();
  }
  return {
    text: result,
    images,
    files,
    all: [...images, ...files]
  };
}

// ../../node_modules/.pnpm/@clack+core@1.0.1/node_modules/@clack/core/dist/index.mjs
var import_picocolors = __toESM(require_picocolors());
var import_sisteransi = __toESM(require_src());
function B(t, e2, s) {
  if (!s.some((u) => !u.disabled)) return t;
  const i = t + e2, r = Math.max(s.length - 1, 0), n = i < 0 ? r : i > r ? 0 : i;
  return s[n].disabled ? B(n, e2 < 0 ? -1 : 1, s) : n;
}
var at = (t) => t === 161 || t === 164 || t === 167 || t === 168 || t === 170 || t === 173 || t === 174 || t >= 176 && t <= 180 || t >= 182 && t <= 186 || t >= 188 && t <= 191 || t === 198 || t === 208 || t === 215 || t === 216 || t >= 222 && t <= 225 || t === 230 || t >= 232 && t <= 234 || t === 236 || t === 237 || t === 240 || t === 242 || t === 243 || t >= 247 && t <= 250 || t === 252 || t === 254 || t === 257 || t === 273 || t === 275 || t === 283 || t === 294 || t === 295 || t === 299 || t >= 305 && t <= 307 || t === 312 || t >= 319 && t <= 322 || t === 324 || t >= 328 && t <= 331 || t === 333 || t === 338 || t === 339 || t === 358 || t === 359 || t === 363 || t === 462 || t === 464 || t === 466 || t === 468 || t === 470 || t === 472 || t === 474 || t === 476 || t === 593 || t === 609 || t === 708 || t === 711 || t >= 713 && t <= 715 || t === 717 || t === 720 || t >= 728 && t <= 731 || t === 733 || t === 735 || t >= 768 && t <= 879 || t >= 913 && t <= 929 || t >= 931 && t <= 937 || t >= 945 && t <= 961 || t >= 963 && t <= 969 || t === 1025 || t >= 1040 && t <= 1103 || t === 1105 || t === 8208 || t >= 8211 && t <= 8214 || t === 8216 || t === 8217 || t === 8220 || t === 8221 || t >= 8224 && t <= 8226 || t >= 8228 && t <= 8231 || t === 8240 || t === 8242 || t === 8243 || t === 8245 || t === 8251 || t === 8254 || t === 8308 || t === 8319 || t >= 8321 && t <= 8324 || t === 8364 || t === 8451 || t === 8453 || t === 8457 || t === 8467 || t === 8470 || t === 8481 || t === 8482 || t === 8486 || t === 8491 || t === 8531 || t === 8532 || t >= 8539 && t <= 8542 || t >= 8544 && t <= 8555 || t >= 8560 && t <= 8569 || t === 8585 || t >= 8592 && t <= 8601 || t === 8632 || t === 8633 || t === 8658 || t === 8660 || t === 8679 || t === 8704 || t === 8706 || t === 8707 || t === 8711 || t === 8712 || t === 8715 || t === 8719 || t === 8721 || t === 8725 || t === 8730 || t >= 8733 && t <= 8736 || t === 8739 || t === 8741 || t >= 8743 && t <= 8748 || t === 8750 || t >= 8756 && t <= 8759 || t === 8764 || t === 8765 || t === 8776 || t === 8780 || t === 8786 || t === 8800 || t === 8801 || t >= 8804 && t <= 8807 || t === 8810 || t === 8811 || t === 8814 || t === 8815 || t === 8834 || t === 8835 || t === 8838 || t === 8839 || t === 8853 || t === 8857 || t === 8869 || t === 8895 || t === 8978 || t >= 9312 && t <= 9449 || t >= 9451 && t <= 9547 || t >= 9552 && t <= 9587 || t >= 9600 && t <= 9615 || t >= 9618 && t <= 9621 || t === 9632 || t === 9633 || t >= 9635 && t <= 9641 || t === 9650 || t === 9651 || t === 9654 || t === 9655 || t === 9660 || t === 9661 || t === 9664 || t === 9665 || t >= 9670 && t <= 9672 || t === 9675 || t >= 9678 && t <= 9681 || t >= 9698 && t <= 9701 || t === 9711 || t === 9733 || t === 9734 || t === 9737 || t === 9742 || t === 9743 || t === 9756 || t === 9758 || t === 9792 || t === 9794 || t === 9824 || t === 9825 || t >= 9827 && t <= 9829 || t >= 9831 && t <= 9834 || t === 9836 || t === 9837 || t === 9839 || t === 9886 || t === 9887 || t === 9919 || t >= 9926 && t <= 9933 || t >= 9935 && t <= 9939 || t >= 9941 && t <= 9953 || t === 9955 || t === 9960 || t === 9961 || t >= 9963 && t <= 9969 || t === 9972 || t >= 9974 && t <= 9977 || t === 9979 || t === 9980 || t === 9982 || t === 9983 || t === 10045 || t >= 10102 && t <= 10111 || t >= 11094 && t <= 11097 || t >= 12872 && t <= 12879 || t >= 57344 && t <= 63743 || t >= 65024 && t <= 65039 || t === 65533 || t >= 127232 && t <= 127242 || t >= 127248 && t <= 127277 || t >= 127280 && t <= 127337 || t >= 127344 && t <= 127373 || t === 127375 || t === 127376 || t >= 127387 && t <= 127404 || t >= 917760 && t <= 917999 || t >= 983040 && t <= 1048573 || t >= 1048576 && t <= 1114109;
var lt = (t) => t === 12288 || t >= 65281 && t <= 65376 || t >= 65504 && t <= 65510;
var ht = (t) => t >= 4352 && t <= 4447 || t === 8986 || t === 8987 || t === 9001 || t === 9002 || t >= 9193 && t <= 9196 || t === 9200 || t === 9203 || t === 9725 || t === 9726 || t === 9748 || t === 9749 || t >= 9800 && t <= 9811 || t === 9855 || t === 9875 || t === 9889 || t === 9898 || t === 9899 || t === 9917 || t === 9918 || t === 9924 || t === 9925 || t === 9934 || t === 9940 || t === 9962 || t === 9970 || t === 9971 || t === 9973 || t === 9978 || t === 9981 || t === 9989 || t === 9994 || t === 9995 || t === 10024 || t === 10060 || t === 10062 || t >= 10067 && t <= 10069 || t === 10071 || t >= 10133 && t <= 10135 || t === 10160 || t === 10175 || t === 11035 || t === 11036 || t === 11088 || t === 11093 || t >= 11904 && t <= 11929 || t >= 11931 && t <= 12019 || t >= 12032 && t <= 12245 || t >= 12272 && t <= 12287 || t >= 12289 && t <= 12350 || t >= 12353 && t <= 12438 || t >= 12441 && t <= 12543 || t >= 12549 && t <= 12591 || t >= 12593 && t <= 12686 || t >= 12688 && t <= 12771 || t >= 12783 && t <= 12830 || t >= 12832 && t <= 12871 || t >= 12880 && t <= 19903 || t >= 19968 && t <= 42124 || t >= 42128 && t <= 42182 || t >= 43360 && t <= 43388 || t >= 44032 && t <= 55203 || t >= 63744 && t <= 64255 || t >= 65040 && t <= 65049 || t >= 65072 && t <= 65106 || t >= 65108 && t <= 65126 || t >= 65128 && t <= 65131 || t >= 94176 && t <= 94180 || t === 94192 || t === 94193 || t >= 94208 && t <= 100343 || t >= 100352 && t <= 101589 || t >= 101632 && t <= 101640 || t >= 110576 && t <= 110579 || t >= 110581 && t <= 110587 || t === 110589 || t === 110590 || t >= 110592 && t <= 110882 || t === 110898 || t >= 110928 && t <= 110930 || t === 110933 || t >= 110948 && t <= 110951 || t >= 110960 && t <= 111355 || t === 126980 || t === 127183 || t === 127374 || t >= 127377 && t <= 127386 || t >= 127488 && t <= 127490 || t >= 127504 && t <= 127547 || t >= 127552 && t <= 127560 || t === 127568 || t === 127569 || t >= 127584 && t <= 127589 || t >= 127744 && t <= 127776 || t >= 127789 && t <= 127797 || t >= 127799 && t <= 127868 || t >= 127870 && t <= 127891 || t >= 127904 && t <= 127946 || t >= 127951 && t <= 127955 || t >= 127968 && t <= 127984 || t === 127988 || t >= 127992 && t <= 128062 || t === 128064 || t >= 128066 && t <= 128252 || t >= 128255 && t <= 128317 || t >= 128331 && t <= 128334 || t >= 128336 && t <= 128359 || t === 128378 || t === 128405 || t === 128406 || t === 128420 || t >= 128507 && t <= 128591 || t >= 128640 && t <= 128709 || t === 128716 || t >= 128720 && t <= 128722 || t >= 128725 && t <= 128727 || t >= 128732 && t <= 128735 || t === 128747 || t === 128748 || t >= 128756 && t <= 128764 || t >= 128992 && t <= 129003 || t === 129008 || t >= 129292 && t <= 129338 || t >= 129340 && t <= 129349 || t >= 129351 && t <= 129535 || t >= 129648 && t <= 129660 || t >= 129664 && t <= 129672 || t >= 129680 && t <= 129725 || t >= 129727 && t <= 129733 || t >= 129742 && t <= 129755 || t >= 129760 && t <= 129768 || t >= 129776 && t <= 129784 || t >= 131072 && t <= 196605 || t >= 196608 && t <= 262141;
var O = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/y;
var y = /[\x00-\x08\x0A-\x1F\x7F-\x9F]{1,1000}/y;
var L = /\t{1,1000}/y;
var P = /[\u{1F1E6}-\u{1F1FF}]{2}|\u{1F3F4}[\u{E0061}-\u{E007A}]{2}[\u{E0030}-\u{E0039}\u{E0061}-\u{E007A}]{1,3}\u{E007F}|(?:\p{Emoji}\uFE0F\u20E3?|\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation})(?:\u200D(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F\u20E3?))*/yu;
var M = /(?:[\x20-\x7E\xA0-\xFF](?!\uFE0F)){1,1000}/y;
var ct = /\p{M}+/gu;
var ft = { limit: 1 / 0, ellipsis: "" };
var X = (t, e2 = {}, s = {}) => {
  const i = e2.limit ?? 1 / 0, r = e2.ellipsis ?? "", n = e2?.ellipsisWidth ?? (r ? X(r, ft, s).width : 0), u = s.ansiWidth ?? 0, a = s.controlWidth ?? 0, l = s.tabWidth ?? 8, E = s.ambiguousWidth ?? 1, g = s.emojiWidth ?? 2, m = s.fullWidthWidth ?? 2, A = s.regularWidth ?? 1, V2 = s.wideWidth ?? 2;
  let h = 0, o = 0, p = t.length, v = 0, F = false, d2 = p, b = Math.max(0, i - n), C2 = 0, w = 0, c = 0, f = 0;
  t: for (; ; ) {
    if (w > C2 || o >= p && o > h) {
      const ut2 = t.slice(C2, w) || t.slice(h, o);
      v = 0;
      for (const Y of ut2.replaceAll(ct, "")) {
        const $ = Y.codePointAt(0) || 0;
        if (lt($) ? f = m : ht($) ? f = V2 : E !== A && at($) ? f = E : f = A, c + f > b && (d2 = Math.min(d2, Math.max(C2, h) + v)), c + f > i) {
          F = true;
          break t;
        }
        v += Y.length, c += f;
      }
      C2 = w = 0;
    }
    if (o >= p) break;
    if (M.lastIndex = o, M.test(t)) {
      if (v = M.lastIndex - o, f = v * A, c + f > b && (d2 = Math.min(d2, o + Math.floor((b - c) / A))), c + f > i) {
        F = true;
        break;
      }
      c += f, C2 = h, w = o, o = h = M.lastIndex;
      continue;
    }
    if (O.lastIndex = o, O.test(t)) {
      if (c + u > b && (d2 = Math.min(d2, o)), c + u > i) {
        F = true;
        break;
      }
      c += u, C2 = h, w = o, o = h = O.lastIndex;
      continue;
    }
    if (y.lastIndex = o, y.test(t)) {
      if (v = y.lastIndex - o, f = v * a, c + f > b && (d2 = Math.min(d2, o + Math.floor((b - c) / a))), c + f > i) {
        F = true;
        break;
      }
      c += f, C2 = h, w = o, o = h = y.lastIndex;
      continue;
    }
    if (L.lastIndex = o, L.test(t)) {
      if (v = L.lastIndex - o, f = v * l, c + f > b && (d2 = Math.min(d2, o + Math.floor((b - c) / l))), c + f > i) {
        F = true;
        break;
      }
      c += f, C2 = h, w = o, o = h = L.lastIndex;
      continue;
    }
    if (P.lastIndex = o, P.test(t)) {
      if (c + g > b && (d2 = Math.min(d2, o)), c + g > i) {
        F = true;
        break;
      }
      c += g, C2 = h, w = o, o = h = P.lastIndex;
      continue;
    }
    o += 1;
  }
  return { width: F ? b : c, index: F ? d2 : p, truncated: F, ellipsed: F && i >= n };
};
var pt = { limit: 1 / 0, ellipsis: "", ellipsisWidth: 0 };
var S = (t, e2 = {}) => X(t, pt, e2).width;
var W = "\x1B";
var Z = "\x9B";
var Ft = 39;
var j = "\x07";
var Q = "[";
var dt = "]";
var tt = "m";
var U = `${dt}8;;`;
var et = new RegExp(`(?:\\${Q}(?<code>\\d+)m|\\${U}(?<uri>.*)${j})`, "y");
var mt = (t) => {
  if (t >= 30 && t <= 37 || t >= 90 && t <= 97) return 39;
  if (t >= 40 && t <= 47 || t >= 100 && t <= 107) return 49;
  if (t === 1 || t === 2) return 22;
  if (t === 3) return 23;
  if (t === 4) return 24;
  if (t === 7) return 27;
  if (t === 8) return 28;
  if (t === 9) return 29;
  if (t === 0) return 0;
};
var st = (t) => `${W}${Q}${t}${tt}`;
var it = (t) => `${W}${U}${t}${j}`;
var gt = (t) => t.map((e2) => S(e2));
var G = (t, e2, s) => {
  const i = e2[Symbol.iterator]();
  let r = false, n = false, u = t.at(-1), a = u === void 0 ? 0 : S(u), l = i.next(), E = i.next(), g = 0;
  for (; !l.done; ) {
    const m = l.value, A = S(m);
    a + A <= s ? t[t.length - 1] += m : (t.push(m), a = 0), (m === W || m === Z) && (r = true, n = e2.startsWith(U, g + 1)), r ? n ? m === j && (r = false, n = false) : m === tt && (r = false) : (a += A, a === s && !E.done && (t.push(""), a = 0)), l = E, E = i.next(), g += m.length;
  }
  u = t.at(-1), !a && u !== void 0 && u.length > 0 && t.length > 1 && (t[t.length - 2] += t.pop());
};
var vt = (t) => {
  const e2 = t.split(" ");
  let s = e2.length;
  for (; s > 0 && !(S(e2[s - 1]) > 0); ) s--;
  return s === e2.length ? t : e2.slice(0, s).join(" ") + e2.slice(s).join("");
};
var Et = (t, e2, s = {}) => {
  if (s.trim !== false && t.trim() === "") return "";
  let i = "", r, n;
  const u = t.split(" "), a = gt(u);
  let l = [""];
  for (const [h, o] of u.entries()) {
    s.trim !== false && (l[l.length - 1] = (l.at(-1) ?? "").trimStart());
    let p = S(l.at(-1) ?? "");
    if (h !== 0 && (p >= e2 && (s.wordWrap === false || s.trim === false) && (l.push(""), p = 0), (p > 0 || s.trim === false) && (l[l.length - 1] += " ", p++)), s.hard && a[h] > e2) {
      const v = e2 - p, F = 1 + Math.floor((a[h] - v - 1) / e2);
      Math.floor((a[h] - 1) / e2) < F && l.push(""), G(l, o, e2);
      continue;
    }
    if (p + a[h] > e2 && p > 0 && a[h] > 0) {
      if (s.wordWrap === false && p < e2) {
        G(l, o, e2);
        continue;
      }
      l.push("");
    }
    if (p + a[h] > e2 && s.wordWrap === false) {
      G(l, o, e2);
      continue;
    }
    l[l.length - 1] += o;
  }
  s.trim !== false && (l = l.map((h) => vt(h)));
  const E = l.join(`
`), g = E[Symbol.iterator]();
  let m = g.next(), A = g.next(), V2 = 0;
  for (; !m.done; ) {
    const h = m.value, o = A.value;
    if (i += h, h === W || h === Z) {
      et.lastIndex = V2 + 1;
      const F = et.exec(E)?.groups;
      if (F?.code !== void 0) {
        const d2 = Number.parseFloat(F.code);
        r = d2 === Ft ? void 0 : d2;
      } else F?.uri !== void 0 && (n = F.uri.length === 0 ? void 0 : F.uri);
    }
    const p = r ? mt(r) : void 0;
    o === `
` ? (n && (i += it("")), r && p && (i += st(p))) : h === `
` && (r && p && (i += st(r)), n && (i += it(n))), V2 += h.length, m = A, A = g.next();
  }
  return i;
};
function K(t, e2, s) {
  return String(t).normalize().replaceAll(`\r
`, `
`).split(`
`).map((i) => Et(i, e2, s)).join(`
`);
}
var At = ["up", "down", "left", "right", "space", "enter", "cancel"];
var _ = { actions: new Set(At), aliases: /* @__PURE__ */ new Map([["k", "up"], ["j", "down"], ["h", "left"], ["l", "right"], ["", "cancel"], ["escape", "cancel"]]), withGuide: true };
function H(t, e2) {
  if (typeof t == "string") return _.aliases.get(t) === e2;
  for (const s of t) if (s !== void 0 && H(s, e2)) return true;
  return false;
}
function _t(t, e2) {
  if (t === e2) return;
  const s = t.split(`
`), i = e2.split(`
`), r = Math.max(s.length, i.length), n = [];
  for (let u = 0; u < r; u++) s[u] !== i[u] && n.push(u);
  return { lines: n, numLinesBefore: s.length, numLinesAfter: i.length, numLines: r };
}
globalThis.process.platform.startsWith("win");
var z = /* @__PURE__ */ Symbol("clack:cancel");
function Ct(t) {
  return t === z;
}
function T(t, e2) {
  const s = t;
  s.isTTY && s.setRawMode(e2);
}
var rt = (t) => "columns" in t && typeof t.columns == "number" ? t.columns : 80;
var nt = (t) => "rows" in t && typeof t.rows == "number" ? t.rows : 20;
function xt(t, e2, s, i = s) {
  const r = rt(t ?? stdout);
  return K(e2, r - s.length, { hard: true, trim: false }).split(`
`).map((n, u) => `${u === 0 ? i : s}${n}`).join(`
`);
}
var x = class {
  input;
  output;
  _abortSignal;
  rl;
  opts;
  _render;
  _track = false;
  _prevFrame = "";
  _subscribers = /* @__PURE__ */ new Map();
  _cursor = 0;
  state = "initial";
  error = "";
  value;
  userInput = "";
  constructor(e2, s = true) {
    const { input: i = stdin, output: r = stdout, render: n, signal: u, ...a } = e2;
    this.opts = a, this.onKeypress = this.onKeypress.bind(this), this.close = this.close.bind(this), this.render = this.render.bind(this), this._render = n.bind(this), this._track = s, this._abortSignal = u, this.input = i, this.output = r;
  }
  unsubscribe() {
    this._subscribers.clear();
  }
  setSubscriber(e2, s) {
    const i = this._subscribers.get(e2) ?? [];
    i.push(s), this._subscribers.set(e2, i);
  }
  on(e2, s) {
    this.setSubscriber(e2, { cb: s });
  }
  once(e2, s) {
    this.setSubscriber(e2, { cb: s, once: true });
  }
  emit(e2, ...s) {
    const i = this._subscribers.get(e2) ?? [], r = [];
    for (const n of i) n.cb(...s), n.once && r.push(() => i.splice(i.indexOf(n), 1));
    for (const n of r) n();
  }
  prompt() {
    return new Promise((e2) => {
      if (this._abortSignal) {
        if (this._abortSignal.aborted) return this.state = "cancel", this.close(), e2(z);
        this._abortSignal.addEventListener("abort", () => {
          this.state = "cancel", this.close();
        }, { once: true });
      }
      this.rl = ot.createInterface({ input: this.input, tabSize: 2, prompt: "", escapeCodeTimeout: 50, terminal: true }), this.rl.prompt(), this.opts.initialUserInput !== void 0 && this._setUserInput(this.opts.initialUserInput, true), this.input.on("keypress", this.onKeypress), T(this.input, true), this.output.on("resize", this.render), this.render(), this.once("submit", () => {
        this.output.write(import_sisteransi.cursor.show), this.output.off("resize", this.render), T(this.input, false), e2(this.value);
      }), this.once("cancel", () => {
        this.output.write(import_sisteransi.cursor.show), this.output.off("resize", this.render), T(this.input, false), e2(z);
      });
    });
  }
  _isActionKey(e2, s) {
    return e2 === "	";
  }
  _setValue(e2) {
    this.value = e2, this.emit("value", this.value);
  }
  _setUserInput(e2, s) {
    this.userInput = e2 ?? "", this.emit("userInput", this.userInput), s && this._track && this.rl && (this.rl.write(this.userInput), this._cursor = this.rl.cursor);
  }
  _clearUserInput() {
    this.rl?.write(null, { ctrl: true, name: "u" }), this._setUserInput("");
  }
  onKeypress(e2, s) {
    if (this._track && s.name !== "return" && (s.name && this._isActionKey(e2, s) && this.rl?.write(null, { ctrl: true, name: "h" }), this._cursor = this.rl?.cursor ?? 0, this._setUserInput(this.rl?.line)), this.state === "error" && (this.state = "active"), s?.name && (!this._track && _.aliases.has(s.name) && this.emit("cursor", _.aliases.get(s.name)), _.actions.has(s.name) && this.emit("cursor", s.name)), e2 && (e2.toLowerCase() === "y" || e2.toLowerCase() === "n") && this.emit("confirm", e2.toLowerCase() === "y"), this.emit("key", e2?.toLowerCase(), s), s?.name === "return") {
      if (this.opts.validate) {
        const i = this.opts.validate(this.value);
        i && (this.error = i instanceof Error ? i.message : i, this.state = "error", this.rl?.write(this.userInput));
      }
      this.state !== "error" && (this.state = "submit");
    }
    H([e2, s?.name, s?.sequence], "cancel") && (this.state = "cancel"), (this.state === "submit" || this.state === "cancel") && this.emit("finalize"), this.render(), (this.state === "submit" || this.state === "cancel") && this.close();
  }
  close() {
    this.input.unpipe(), this.input.removeListener("keypress", this.onKeypress), this.output.write(`
`), T(this.input, false), this.rl?.close(), this.rl = void 0, this.emit(`${this.state}`, this.value), this.unsubscribe();
  }
  restoreCursor() {
    const e2 = K(this._prevFrame, process.stdout.columns, { hard: true, trim: false }).split(`
`).length - 1;
    this.output.write(import_sisteransi.cursor.move(-999, e2 * -1));
  }
  render() {
    const e2 = K(this._render(this) ?? "", process.stdout.columns, { hard: true, trim: false });
    if (e2 !== this._prevFrame) {
      if (this.state === "initial") this.output.write(import_sisteransi.cursor.hide);
      else {
        const s = _t(this._prevFrame, e2), i = nt(this.output);
        if (this.restoreCursor(), s) {
          const r = Math.max(0, s.numLinesAfter - i), n = Math.max(0, s.numLinesBefore - i);
          let u = s.lines.find((a) => a >= r);
          if (u === void 0) {
            this._prevFrame = e2;
            return;
          }
          if (s.lines.length === 1) {
            this.output.write(import_sisteransi.cursor.move(0, u - n)), this.output.write(import_sisteransi.erase.lines(1));
            const a = e2.split(`
`);
            this.output.write(a[u]), this._prevFrame = e2, this.output.write(import_sisteransi.cursor.move(0, a.length - u - 1));
            return;
          } else if (s.lines.length > 1) {
            if (r < n) u = r;
            else {
              const l = u - n;
              l > 0 && this.output.write(import_sisteransi.cursor.move(0, l));
            }
            this.output.write(import_sisteransi.erase.down());
            const a = e2.split(`
`).slice(u);
            this.output.write(a.join(`
`)), this._prevFrame = e2;
            return;
          }
        }
        this.output.write(import_sisteransi.erase.down());
      }
      this.output.write(e2), this.state === "initial" && (this.state = "active"), this._prevFrame = e2;
    }
  }
};
var kt = class extends x {
  get cursor() {
    return this.value ? 0 : 1;
  }
  get _value() {
    return this.cursor === 0;
  }
  constructor(e2) {
    super(e2, false), this.value = !!e2.initialValue, this.on("userInput", () => {
      this.value = this._value;
    }), this.on("confirm", (s) => {
      this.output.write(import_sisteransi.cursor.move(0, -1)), this.value = s, this.state = "submit", this.close();
    }), this.on("cursor", () => {
      this.value = !this.value;
    });
  }
};
var Wt = class extends x {
  options;
  cursor = 0;
  get _selectedValue() {
    return this.options[this.cursor];
  }
  changeValue() {
    this.value = this._selectedValue.value;
  }
  constructor(e2) {
    super(e2, false), this.options = e2.options;
    const s = this.options.findIndex(({ value: r }) => r === e2.initialValue), i = s === -1 ? 0 : s;
    this.cursor = this.options[i].disabled ? B(i, 1, this.options) : i, this.changeValue(), this.on("cursor", (r) => {
      switch (r) {
        case "left":
        case "up":
          this.cursor = B(this.cursor, -1, this.options);
          break;
        case "down":
        case "right":
          this.cursor = B(this.cursor, 1, this.options);
          break;
      }
      this.changeValue();
    });
  }
};
var $t = class extends x {
  get userInputWithCursor() {
    if (this.state === "submit") return this.userInput;
    const e2 = this.userInput;
    if (this.cursor >= e2.length) return `${this.userInput}\u2588`;
    const s = e2.slice(0, this.cursor), [i, ...r] = e2.slice(this.cursor);
    return `${s}${import_picocolors.default.inverse(i)}${r.join("")}`;
  }
  get cursor() {
    return this._cursor;
  }
  constructor(e2) {
    super({ ...e2, initialUserInput: e2.initialUserInput ?? e2.initialValue }), this.on("userInput", (s) => {
      this._setValue(s);
    }), this.on("finalize", () => {
      this.value || (this.value = e2.defaultValue), this.value === void 0 && (this.value = "");
    });
  }
};

// ../../node_modules/.pnpm/@clack+prompts@1.0.1/node_modules/@clack/prompts/dist/index.mjs
var import_picocolors2 = __toESM(require_picocolors());
__toESM(require_src());
function me() {
  return N2.platform !== "win32" ? N2.env.TERM !== "linux" : !!N2.env.CI || !!N2.env.WT_SESSION || !!N2.env.TERMINUS_SUBLIME || N2.env.ConEmuTask === "{cmd::Cmder}" || N2.env.TERM_PROGRAM === "Terminus-Sublime" || N2.env.TERM_PROGRAM === "vscode" || N2.env.TERM === "xterm-256color" || N2.env.TERM === "alacritty" || N2.env.TERMINAL_EMULATOR === "JetBrains-JediTerm";
}
var et2 = me();
var C = (t, r) => et2 ? t : r;
var Rt = C("\u25C6", "*");
var dt2 = C("\u25A0", "x");
var $t2 = C("\u25B2", "x");
var V = C("\u25C7", "o");
var ht2 = C("\u250C", "T");
var d = C("\u2502", "|");
var x2 = C("\u2514", "\u2014");
var Q2 = C("\u25CF", ">");
var H2 = C("\u25CB", " ");
var rt2 = C("\u2500", "-");
var mt2 = C("\u256E", "+");
var Wt2 = C("\u251C", "+");
var pt2 = C("\u256F", "+");
var W2 = (t) => {
  switch (t) {
    case "initial":
    case "active":
      return import_picocolors2.default.cyan(Rt);
    case "cancel":
      return import_picocolors2.default.red(dt2);
    case "error":
      return import_picocolors2.default.yellow($t2);
    case "submit":
      return import_picocolors2.default.green(V);
  }
};
var vt2 = (t) => {
  switch (t) {
    case "initial":
    case "active":
      return import_picocolors2.default.cyan(d);
    case "cancel":
      return import_picocolors2.default.red(d);
    case "error":
      return import_picocolors2.default.yellow(d);
    case "submit":
      return import_picocolors2.default.green(d);
  }
};
var pe = (t) => t === 161 || t === 164 || t === 167 || t === 168 || t === 170 || t === 173 || t === 174 || t >= 176 && t <= 180 || t >= 182 && t <= 186 || t >= 188 && t <= 191 || t === 198 || t === 208 || t === 215 || t === 216 || t >= 222 && t <= 225 || t === 230 || t >= 232 && t <= 234 || t === 236 || t === 237 || t === 240 || t === 242 || t === 243 || t >= 247 && t <= 250 || t === 252 || t === 254 || t === 257 || t === 273 || t === 275 || t === 283 || t === 294 || t === 295 || t === 299 || t >= 305 && t <= 307 || t === 312 || t >= 319 && t <= 322 || t === 324 || t >= 328 && t <= 331 || t === 333 || t === 338 || t === 339 || t === 358 || t === 359 || t === 363 || t === 462 || t === 464 || t === 466 || t === 468 || t === 470 || t === 472 || t === 474 || t === 476 || t === 593 || t === 609 || t === 708 || t === 711 || t >= 713 && t <= 715 || t === 717 || t === 720 || t >= 728 && t <= 731 || t === 733 || t === 735 || t >= 768 && t <= 879 || t >= 913 && t <= 929 || t >= 931 && t <= 937 || t >= 945 && t <= 961 || t >= 963 && t <= 969 || t === 1025 || t >= 1040 && t <= 1103 || t === 1105 || t === 8208 || t >= 8211 && t <= 8214 || t === 8216 || t === 8217 || t === 8220 || t === 8221 || t >= 8224 && t <= 8226 || t >= 8228 && t <= 8231 || t === 8240 || t === 8242 || t === 8243 || t === 8245 || t === 8251 || t === 8254 || t === 8308 || t === 8319 || t >= 8321 && t <= 8324 || t === 8364 || t === 8451 || t === 8453 || t === 8457 || t === 8467 || t === 8470 || t === 8481 || t === 8482 || t === 8486 || t === 8491 || t === 8531 || t === 8532 || t >= 8539 && t <= 8542 || t >= 8544 && t <= 8555 || t >= 8560 && t <= 8569 || t === 8585 || t >= 8592 && t <= 8601 || t === 8632 || t === 8633 || t === 8658 || t === 8660 || t === 8679 || t === 8704 || t === 8706 || t === 8707 || t === 8711 || t === 8712 || t === 8715 || t === 8719 || t === 8721 || t === 8725 || t === 8730 || t >= 8733 && t <= 8736 || t === 8739 || t === 8741 || t >= 8743 && t <= 8748 || t === 8750 || t >= 8756 && t <= 8759 || t === 8764 || t === 8765 || t === 8776 || t === 8780 || t === 8786 || t === 8800 || t === 8801 || t >= 8804 && t <= 8807 || t === 8810 || t === 8811 || t === 8814 || t === 8815 || t === 8834 || t === 8835 || t === 8838 || t === 8839 || t === 8853 || t === 8857 || t === 8869 || t === 8895 || t === 8978 || t >= 9312 && t <= 9449 || t >= 9451 && t <= 9547 || t >= 9552 && t <= 9587 || t >= 9600 && t <= 9615 || t >= 9618 && t <= 9621 || t === 9632 || t === 9633 || t >= 9635 && t <= 9641 || t === 9650 || t === 9651 || t === 9654 || t === 9655 || t === 9660 || t === 9661 || t === 9664 || t === 9665 || t >= 9670 && t <= 9672 || t === 9675 || t >= 9678 && t <= 9681 || t >= 9698 && t <= 9701 || t === 9711 || t === 9733 || t === 9734 || t === 9737 || t === 9742 || t === 9743 || t === 9756 || t === 9758 || t === 9792 || t === 9794 || t === 9824 || t === 9825 || t >= 9827 && t <= 9829 || t >= 9831 && t <= 9834 || t === 9836 || t === 9837 || t === 9839 || t === 9886 || t === 9887 || t === 9919 || t >= 9926 && t <= 9933 || t >= 9935 && t <= 9939 || t >= 9941 && t <= 9953 || t === 9955 || t === 9960 || t === 9961 || t >= 9963 && t <= 9969 || t === 9972 || t >= 9974 && t <= 9977 || t === 9979 || t === 9980 || t === 9982 || t === 9983 || t === 10045 || t >= 10102 && t <= 10111 || t >= 11094 && t <= 11097 || t >= 12872 && t <= 12879 || t >= 57344 && t <= 63743 || t >= 65024 && t <= 65039 || t === 65533 || t >= 127232 && t <= 127242 || t >= 127248 && t <= 127277 || t >= 127280 && t <= 127337 || t >= 127344 && t <= 127373 || t === 127375 || t === 127376 || t >= 127387 && t <= 127404 || t >= 917760 && t <= 917999 || t >= 983040 && t <= 1048573 || t >= 1048576 && t <= 1114109;
var ge = (t) => t === 12288 || t >= 65281 && t <= 65376 || t >= 65504 && t <= 65510;
var fe = (t) => t >= 4352 && t <= 4447 || t === 8986 || t === 8987 || t === 9001 || t === 9002 || t >= 9193 && t <= 9196 || t === 9200 || t === 9203 || t === 9725 || t === 9726 || t === 9748 || t === 9749 || t >= 9800 && t <= 9811 || t === 9855 || t === 9875 || t === 9889 || t === 9898 || t === 9899 || t === 9917 || t === 9918 || t === 9924 || t === 9925 || t === 9934 || t === 9940 || t === 9962 || t === 9970 || t === 9971 || t === 9973 || t === 9978 || t === 9981 || t === 9989 || t === 9994 || t === 9995 || t === 10024 || t === 10060 || t === 10062 || t >= 10067 && t <= 10069 || t === 10071 || t >= 10133 && t <= 10135 || t === 10160 || t === 10175 || t === 11035 || t === 11036 || t === 11088 || t === 11093 || t >= 11904 && t <= 11929 || t >= 11931 && t <= 12019 || t >= 12032 && t <= 12245 || t >= 12272 && t <= 12287 || t >= 12289 && t <= 12350 || t >= 12353 && t <= 12438 || t >= 12441 && t <= 12543 || t >= 12549 && t <= 12591 || t >= 12593 && t <= 12686 || t >= 12688 && t <= 12771 || t >= 12783 && t <= 12830 || t >= 12832 && t <= 12871 || t >= 12880 && t <= 19903 || t >= 19968 && t <= 42124 || t >= 42128 && t <= 42182 || t >= 43360 && t <= 43388 || t >= 44032 && t <= 55203 || t >= 63744 && t <= 64255 || t >= 65040 && t <= 65049 || t >= 65072 && t <= 65106 || t >= 65108 && t <= 65126 || t >= 65128 && t <= 65131 || t >= 94176 && t <= 94180 || t === 94192 || t === 94193 || t >= 94208 && t <= 100343 || t >= 100352 && t <= 101589 || t >= 101632 && t <= 101640 || t >= 110576 && t <= 110579 || t >= 110581 && t <= 110587 || t === 110589 || t === 110590 || t >= 110592 && t <= 110882 || t === 110898 || t >= 110928 && t <= 110930 || t === 110933 || t >= 110948 && t <= 110951 || t >= 110960 && t <= 111355 || t === 126980 || t === 127183 || t === 127374 || t >= 127377 && t <= 127386 || t >= 127488 && t <= 127490 || t >= 127504 && t <= 127547 || t >= 127552 && t <= 127560 || t === 127568 || t === 127569 || t >= 127584 && t <= 127589 || t >= 127744 && t <= 127776 || t >= 127789 && t <= 127797 || t >= 127799 && t <= 127868 || t >= 127870 && t <= 127891 || t >= 127904 && t <= 127946 || t >= 127951 && t <= 127955 || t >= 127968 && t <= 127984 || t === 127988 || t >= 127992 && t <= 128062 || t === 128064 || t >= 128066 && t <= 128252 || t >= 128255 && t <= 128317 || t >= 128331 && t <= 128334 || t >= 128336 && t <= 128359 || t === 128378 || t === 128405 || t === 128406 || t === 128420 || t >= 128507 && t <= 128591 || t >= 128640 && t <= 128709 || t === 128716 || t >= 128720 && t <= 128722 || t >= 128725 && t <= 128727 || t >= 128732 && t <= 128735 || t === 128747 || t === 128748 || t >= 128756 && t <= 128764 || t >= 128992 && t <= 129003 || t === 129008 || t >= 129292 && t <= 129338 || t >= 129340 && t <= 129349 || t >= 129351 && t <= 129535 || t >= 129648 && t <= 129660 || t >= 129664 && t <= 129672 || t >= 129680 && t <= 129725 || t >= 129727 && t <= 129733 || t >= 129742 && t <= 129755 || t >= 129760 && t <= 129768 || t >= 129776 && t <= 129784 || t >= 131072 && t <= 196605 || t >= 196608 && t <= 262141;
var At2 = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/y;
var it2 = /[\x00-\x08\x0A-\x1F\x7F-\x9F]{1,1000}/y;
var nt2 = /\t{1,1000}/y;
var wt = /[\u{1F1E6}-\u{1F1FF}]{2}|\u{1F3F4}[\u{E0061}-\u{E007A}]{2}[\u{E0030}-\u{E0039}\u{E0061}-\u{E007A}]{1,3}\u{E007F}|(?:\p{Emoji}\uFE0F\u20E3?|\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation})(?:\u200D(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F\u20E3?))*/yu;
var at2 = /(?:[\x20-\x7E\xA0-\xFF](?!\uFE0F)){1,1000}/y;
var Fe = /\p{M}+/gu;
var ye = { limit: 1 / 0, ellipsis: "" };
var jt = (t, r = {}, s = {}) => {
  const i = r.limit ?? 1 / 0, a = r.ellipsis ?? "", o = r?.ellipsisWidth ?? (a ? jt(a, ye, s).width : 0), u = s.ansiWidth ?? 0, l = s.controlWidth ?? 0, n = s.tabWidth ?? 8, c = s.ambiguousWidth ?? 1, g = s.emojiWidth ?? 2, F = s.fullWidthWidth ?? 2, p = s.regularWidth ?? 1, E = s.wideWidth ?? 2;
  let $ = 0, m = 0, h = t.length, y2 = 0, f = false, v = h, S2 = Math.max(0, i - o), I2 = 0, B2 = 0, A = 0, w = 0;
  t: for (; ; ) {
    if (B2 > I2 || m >= h && m > $) {
      const _2 = t.slice(I2, B2) || t.slice($, m);
      y2 = 0;
      for (const D2 of _2.replaceAll(Fe, "")) {
        const T2 = D2.codePointAt(0) || 0;
        if (ge(T2) ? w = F : fe(T2) ? w = E : c !== p && pe(T2) ? w = c : w = p, A + w > S2 && (v = Math.min(v, Math.max(I2, $) + y2)), A + w > i) {
          f = true;
          break t;
        }
        y2 += D2.length, A += w;
      }
      I2 = B2 = 0;
    }
    if (m >= h) break;
    if (at2.lastIndex = m, at2.test(t)) {
      if (y2 = at2.lastIndex - m, w = y2 * p, A + w > S2 && (v = Math.min(v, m + Math.floor((S2 - A) / p))), A + w > i) {
        f = true;
        break;
      }
      A += w, I2 = $, B2 = m, m = $ = at2.lastIndex;
      continue;
    }
    if (At2.lastIndex = m, At2.test(t)) {
      if (A + u > S2 && (v = Math.min(v, m)), A + u > i) {
        f = true;
        break;
      }
      A += u, I2 = $, B2 = m, m = $ = At2.lastIndex;
      continue;
    }
    if (it2.lastIndex = m, it2.test(t)) {
      if (y2 = it2.lastIndex - m, w = y2 * l, A + w > S2 && (v = Math.min(v, m + Math.floor((S2 - A) / l))), A + w > i) {
        f = true;
        break;
      }
      A += w, I2 = $, B2 = m, m = $ = it2.lastIndex;
      continue;
    }
    if (nt2.lastIndex = m, nt2.test(t)) {
      if (y2 = nt2.lastIndex - m, w = y2 * n, A + w > S2 && (v = Math.min(v, m + Math.floor((S2 - A) / n))), A + w > i) {
        f = true;
        break;
      }
      A += w, I2 = $, B2 = m, m = $ = nt2.lastIndex;
      continue;
    }
    if (wt.lastIndex = m, wt.test(t)) {
      if (A + g > S2 && (v = Math.min(v, m)), A + g > i) {
        f = true;
        break;
      }
      A += g, I2 = $, B2 = m, m = $ = wt.lastIndex;
      continue;
    }
    m += 1;
  }
  return { width: f ? S2 : A, index: f ? v : h, truncated: f, ellipsed: f && i >= o };
};
var Ee = { limit: 1 / 0, ellipsis: "", ellipsisWidth: 0 };
var M2 = (t, r = {}) => jt(t, Ee, r).width;
var ot2 = "\x1B";
var Gt = "\x9B";
var ve = 39;
var Ct2 = "\x07";
var kt2 = "[";
var Ae = "]";
var Vt2 = "m";
var St = `${Ae}8;;`;
var Ht = new RegExp(`(?:\\${kt2}(?<code>\\d+)m|\\${St}(?<uri>.*)${Ct2})`, "y");
var we = (t) => {
  if (t >= 30 && t <= 37 || t >= 90 && t <= 97) return 39;
  if (t >= 40 && t <= 47 || t >= 100 && t <= 107) return 49;
  if (t === 1 || t === 2) return 22;
  if (t === 3) return 23;
  if (t === 4) return 24;
  if (t === 7) return 27;
  if (t === 8) return 28;
  if (t === 9) return 29;
  if (t === 0) return 0;
};
var Ut = (t) => `${ot2}${kt2}${t}${Vt2}`;
var Kt = (t) => `${ot2}${St}${t}${Ct2}`;
var Ce = (t) => t.map((r) => M2(r));
var It2 = (t, r, s) => {
  const i = r[Symbol.iterator]();
  let a = false, o = false, u = t.at(-1), l = u === void 0 ? 0 : M2(u), n = i.next(), c = i.next(), g = 0;
  for (; !n.done; ) {
    const F = n.value, p = M2(F);
    l + p <= s ? t[t.length - 1] += F : (t.push(F), l = 0), (F === ot2 || F === Gt) && (a = true, o = r.startsWith(St, g + 1)), a ? o ? F === Ct2 && (a = false, o = false) : F === Vt2 && (a = false) : (l += p, l === s && !c.done && (t.push(""), l = 0)), n = c, c = i.next(), g += F.length;
  }
  u = t.at(-1), !l && u !== void 0 && u.length > 0 && t.length > 1 && (t[t.length - 2] += t.pop());
};
var Se = (t) => {
  const r = t.split(" ");
  let s = r.length;
  for (; s > 0 && !(M2(r[s - 1]) > 0); ) s--;
  return s === r.length ? t : r.slice(0, s).join(" ") + r.slice(s).join("");
};
var Ie = (t, r, s = {}) => {
  if (s.trim !== false && t.trim() === "") return "";
  let i = "", a, o;
  const u = t.split(" "), l = Ce(u);
  let n = [""];
  for (const [$, m] of u.entries()) {
    s.trim !== false && (n[n.length - 1] = (n.at(-1) ?? "").trimStart());
    let h = M2(n.at(-1) ?? "");
    if ($ !== 0 && (h >= r && (s.wordWrap === false || s.trim === false) && (n.push(""), h = 0), (h > 0 || s.trim === false) && (n[n.length - 1] += " ", h++)), s.hard && l[$] > r) {
      const y2 = r - h, f = 1 + Math.floor((l[$] - y2 - 1) / r);
      Math.floor((l[$] - 1) / r) < f && n.push(""), It2(n, m, r);
      continue;
    }
    if (h + l[$] > r && h > 0 && l[$] > 0) {
      if (s.wordWrap === false && h < r) {
        It2(n, m, r);
        continue;
      }
      n.push("");
    }
    if (h + l[$] > r && s.wordWrap === false) {
      It2(n, m, r);
      continue;
    }
    n[n.length - 1] += m;
  }
  s.trim !== false && (n = n.map(($) => Se($)));
  const c = n.join(`
`), g = c[Symbol.iterator]();
  let F = g.next(), p = g.next(), E = 0;
  for (; !F.done; ) {
    const $ = F.value, m = p.value;
    if (i += $, $ === ot2 || $ === Gt) {
      Ht.lastIndex = E + 1;
      const f = Ht.exec(c)?.groups;
      if (f?.code !== void 0) {
        const v = Number.parseFloat(f.code);
        a = v === ve ? void 0 : v;
      } else f?.uri !== void 0 && (o = f.uri.length === 0 ? void 0 : f.uri);
    }
    const h = a ? we(a) : void 0;
    m === `
` ? (o && (i += Kt("")), a && h && (i += Ut(h))) : $ === `
` && (a && h && (i += Ut(a)), o && (i += Kt(o))), E += $.length, F = p, p = g.next();
  }
  return i;
};
function J2(t, r, s) {
  return String(t).normalize().replaceAll(`\r
`, `
`).split(`
`).map((i) => Ie(i, r, s)).join(`
`);
}
var be = (t, r, s, i, a) => {
  let o = r, u = 0;
  for (let l = s; l < i; l++) {
    const n = t[l];
    if (o = o - n.length, u++, o <= a) break;
  }
  return { lineCount: o, removals: u };
};
var X2 = (t) => {
  const { cursor: r, options: s, style: i } = t, a = t.output ?? process.stdout, o = rt(a), u = t.columnPadding ?? 0, l = t.rowPadding ?? 4, n = o - u, c = nt(a), g = import_picocolors2.default.dim("..."), F = t.maxItems ?? Number.POSITIVE_INFINITY, p = Math.max(c - l, 0), E = Math.max(Math.min(F, p), 5);
  let $ = 0;
  r >= E - 3 && ($ = Math.max(Math.min(r - E + 3, s.length - E), 0));
  let m = E < s.length && $ > 0, h = E < s.length && $ + E < s.length;
  const y2 = Math.min($ + E, s.length), f = [];
  let v = 0;
  m && v++, h && v++;
  const S2 = $ + (m ? 1 : 0), I2 = y2 - (h ? 1 : 0);
  for (let A = S2; A < I2; A++) {
    const w = J2(i(s[A], A === r), n, { hard: true, trim: false }).split(`
`);
    f.push(w), v += w.length;
  }
  if (v > p) {
    let A = 0, w = 0, _2 = v;
    const D2 = r - S2, T2 = (Y, L2) => be(f, _2, Y, L2, p);
    m ? ({ lineCount: _2, removals: A } = T2(0, D2), _2 > p && ({ lineCount: _2, removals: w } = T2(D2 + 1, f.length))) : ({ lineCount: _2, removals: w } = T2(D2 + 1, f.length), _2 > p && ({ lineCount: _2, removals: A } = T2(0, D2))), A > 0 && (m = true, f.splice(0, A)), w > 0 && (h = true, f.splice(f.length - w, w));
  }
  const B2 = [];
  m && B2.push(g);
  for (const A of f) for (const w of A) B2.push(w);
  return h && B2.push(g), B2;
};
var Re = (t) => {
  const r = t.active ?? "Yes", s = t.inactive ?? "No";
  return new kt({ active: r, inactive: s, signal: t.signal, input: t.input, output: t.output, initialValue: t.initialValue ?? true, render() {
    const i = t.withGuide ?? _.withGuide, a = `${i ? `${import_picocolors2.default.gray(d)}
` : ""}${W2(this.state)}  ${t.message}
`, o = this.value ? r : s;
    switch (this.state) {
      case "submit": {
        const u = i ? `${import_picocolors2.default.gray(d)}  ` : "";
        return `${a}${u}${import_picocolors2.default.dim(o)}`;
      }
      case "cancel": {
        const u = i ? `${import_picocolors2.default.gray(d)}  ` : "";
        return `${a}${u}${import_picocolors2.default.strikethrough(import_picocolors2.default.dim(o))}${i ? `
${import_picocolors2.default.gray(d)}` : ""}`;
      }
      default: {
        const u = i ? `${import_picocolors2.default.cyan(d)}  ` : "", l = i ? import_picocolors2.default.cyan(x2) : "";
        return `${a}${u}${this.value ? `${import_picocolors2.default.green(Q2)} ${r}` : `${import_picocolors2.default.dim(H2)} ${import_picocolors2.default.dim(r)}`}${t.vertical ? i ? `
${import_picocolors2.default.cyan(d)}  ` : `
` : ` ${import_picocolors2.default.dim("/")} `}${this.value ? `${import_picocolors2.default.dim(H2)} ${import_picocolors2.default.dim(s)}` : `${import_picocolors2.default.green(Q2)} ${s}`}
${l}
`;
      }
    }
  } }).prompt();
};
var Ne = (t = "", r) => {
  (process.stdout).write(`${import_picocolors2.default.gray(x2)}  ${import_picocolors2.default.red(t)}

`);
};
var We = (t = "", r) => {
  (process.stdout).write(`${import_picocolors2.default.gray(ht2)}  ${t}
`);
};
var Le = (t = "", r) => {
  (process.stdout).write(`${import_picocolors2.default.gray(d)}
${import_picocolors2.default.gray(x2)}  ${t}

`);
};
var Ge = (t) => import_picocolors2.default.dim(t);
var ke = (t, r, s) => {
  const i = { hard: true, trim: false }, a = J2(t, r, i).split(`
`), o = a.reduce((n, c) => Math.max(M2(c), n), 0), u = a.map(s).reduce((n, c) => Math.max(M2(c), n), 0), l = r - (u - o);
  return J2(t, l, i);
};
var Ve = (t = "", r = "", s) => {
  const i = N2.stdout, o = Ge, u = ["", ...ke(t, rt(i) - 6, o).split(`
`).map(o), ""], l = M2(r), n = Math.max(u.reduce((p, E) => {
    const $ = M2(E);
    return $ > p ? $ : p;
  }, 0), l) + 2, c = u.map((p) => `${import_picocolors2.default.gray(d)}  ${p}${" ".repeat(n - M2(p))}${import_picocolors2.default.gray(d)}`).join(`
`), g = `${import_picocolors2.default.gray(d)}
` , F = Wt2 ;
  i.write(`${g}${import_picocolors2.default.green(V)}  ${import_picocolors2.default.reset(r)} ${import_picocolors2.default.gray(rt2.repeat(Math.max(n - l - 1, 1)) + mt2)}
${c}
${import_picocolors2.default.gray(F + rt2.repeat(n + 2) + pt2)}
`);
};
import_picocolors2.default.magenta;
var lt2 = (t, r) => t.includes(`
`) ? t.split(`
`).map((s) => r(s)).join(`
`) : r(t);
var Je = (t) => {
  const r = (s, i) => {
    const a = s.label ?? String(s.value);
    switch (i) {
      case "disabled":
        return `${import_picocolors2.default.gray(H2)} ${lt2(a, import_picocolors2.default.gray)}${s.hint ? ` ${import_picocolors2.default.dim(`(${s.hint ?? "disabled"})`)}` : ""}`;
      case "selected":
        return `${lt2(a, import_picocolors2.default.dim)}`;
      case "active":
        return `${import_picocolors2.default.green(Q2)} ${a}${s.hint ? ` ${import_picocolors2.default.dim(`(${s.hint})`)}` : ""}`;
      case "cancelled":
        return `${lt2(a, (o) => import_picocolors2.default.strikethrough(import_picocolors2.default.dim(o)))}`;
      default:
        return `${import_picocolors2.default.dim(H2)} ${lt2(a, import_picocolors2.default.dim)}`;
    }
  };
  return new Wt({ options: t.options, signal: t.signal, input: t.input, output: t.output, initialValue: t.initialValue, render() {
    const s = t.withGuide ?? _.withGuide, i = `${W2(this.state)}  `, a = `${vt2(this.state)}  `, o = xt(t.output, t.message, a, i), u = `${s ? `${import_picocolors2.default.gray(d)}
` : ""}${o}
`;
    switch (this.state) {
      case "submit": {
        const l = s ? `${import_picocolors2.default.gray(d)}  ` : "", n = xt(t.output, r(this.options[this.cursor], "selected"), l);
        return `${u}${n}`;
      }
      case "cancel": {
        const l = s ? `${import_picocolors2.default.gray(d)}  ` : "", n = xt(t.output, r(this.options[this.cursor], "cancelled"), l);
        return `${u}${n}${s ? `
${import_picocolors2.default.gray(d)}` : ""}`;
      }
      default: {
        const l = s ? `${import_picocolors2.default.cyan(d)}  ` : "", n = s ? import_picocolors2.default.cyan(x2) : "", c = u.split(`
`).length, g = s ? 2 : 1;
        return `${u}${l}${X2({ output: t.output, cursor: this.cursor, options: this.options, maxItems: t.maxItems, columnPadding: l.length, rowPadding: c + g, style: (F, p) => r(F, F.disabled ? "disabled" : p ? "active" : "inactive") }).join(`
${l}`)}
${n}
`;
      }
    }
  } }).prompt();
};
`${import_picocolors2.default.gray(d)}  `;
var Ze = (t) => new $t({ validate: t.validate, placeholder: t.placeholder, defaultValue: t.defaultValue, initialValue: t.initialValue, output: t.output, signal: t.signal, input: t.input, render() {
  const r = t?.withGuide ?? _.withGuide, s = `${`${r ? `${import_picocolors2.default.gray(d)}
` : ""}${W2(this.state)}  `}${t.message}
`, i = t.placeholder ? import_picocolors2.default.inverse(t.placeholder[0]) + import_picocolors2.default.dim(t.placeholder.slice(1)) : import_picocolors2.default.inverse(import_picocolors2.default.hidden("_")), a = this.userInput ? this.userInputWithCursor : i, o = this.value ?? "";
  switch (this.state) {
    case "error": {
      const u = this.error ? `  ${import_picocolors2.default.yellow(this.error)}` : "", l = r ? `${import_picocolors2.default.yellow(d)}  ` : "", n = r ? import_picocolors2.default.yellow(x2) : "";
      return `${s.trim()}
${l}${a}
${n}${u}
`;
    }
    case "submit": {
      const u = o ? `  ${import_picocolors2.default.dim(o)}` : "", l = r ? import_picocolors2.default.gray(d) : "";
      return `${s}${l}${u}`;
    }
    case "cancel": {
      const u = o ? `  ${import_picocolors2.default.strikethrough(import_picocolors2.default.dim(o))}` : "", l = r ? import_picocolors2.default.gray(d) : "";
      return `${s}${l}${u}${o.trim() ? `
${l}` : ""}`;
    }
    default: {
      const u = r ? `${import_picocolors2.default.cyan(d)}  ` : "", l = r ? import_picocolors2.default.cyan(x2) : "";
      return `${s}${u}${a}
${l}
`;
    }
  }
} }).prompt();
var PROJECT_REPO = "https://github.com/BytePioneer-AI/openclaw-china";
var GUIDES_BASE = "https://github.com/BytePioneer-AI/openclaw-china/tree/main/doc/guides";
var OPENCLAW_HOME = join(homedir(), ".openclaw");
var DEFAULT_PLUGIN_PATH = join(OPENCLAW_HOME, "extensions");
var LEGACY_PLUGIN_PATH = join(OPENCLAW_HOME, "plugins");
var CONFIG_FILE_PATH = join(OPENCLAW_HOME, "openclaw.json");
var ANSI_RESET = "\x1B[0m";
var ANSI_LINK = "\x1B[1;4;96m";
var ANSI_BORDER = "\x1B[92m";
var CHANNEL_ORDER = [
  "dingtalk",
  "qqbot",
  "wecom",
  "wecom-app",
  "feishu-china"
];
var CHANNEL_DISPLAY_LABELS = {
  dingtalk: "DingTalk\uFF08\u9489\u9489\uFF09",
  "feishu-china": "Feishu\uFF08\u98DE\u4E66\uFF09",
  wecom: "WeCom\uFF08\u4F01\u4E1A\u5FAE\u4FE1-\u667A\u80FD\u673A\u5668\u4EBA\uFF09",
  "wecom-app": "WeCom App\uFF08\u81EA\u5EFA\u5E94\u7528-\u53EF\u63A5\u5165\u5FAE\u4FE1\uFF09",
  qqbot: "QQBot\uFF08QQ \u673A\u5668\u4EBA\uFF09"
};
var CHANNEL_GUIDE_LINKS = {
  dingtalk: `${GUIDES_BASE}/dingtalk/configuration.md`,
  "feishu-china": "https://github.com/BytePioneer-AI/openclaw-china/blob/main/README.md",
  wecom: `${GUIDES_BASE}/wecom/configuration.md`,
  "wecom-app": `${GUIDES_BASE}/wecom-app/configuration.md`,
  qqbot: `${GUIDES_BASE}/qqbot/configuration.md`
};
var CHINA_CLI_STATE_KEY = /* @__PURE__ */ Symbol.for("@openclaw-china/china-cli-state");
var PromptCancelledError = class extends Error {
  constructor() {
    super("prompt-cancelled");
  }
};
function isChannelId(value) {
  return typeof value === "string" && CHANNEL_ORDER.includes(value);
}
function getChinaCliState() {
  const root = globalThis;
  const cached = root[CHINA_CLI_STATE_KEY];
  if (isRecord(cached)) {
    const channels = cached.channels;
    const cliRegistered = cached.cliRegistered;
    if (channels instanceof Set && typeof cliRegistered === "boolean") {
      return {
        channels,
        cliRegistered
      };
    }
  }
  const created = {
    channels: /* @__PURE__ */ new Set(),
    cliRegistered: false
  };
  root[CHINA_CLI_STATE_KEY] = created;
  return created;
}
function normalizeChannels(channels) {
  const selected = channels && channels.length > 0 ? channels : CHANNEL_ORDER;
  const unique = /* @__PURE__ */ new Set();
  for (const channelId of selected) {
    if (isChannelId(channelId)) {
      unique.add(channelId);
    }
  }
  return CHANNEL_ORDER.filter((channelId) => unique.has(channelId));
}
function getInstalledChannels(state) {
  return CHANNEL_ORDER.filter((channelId) => state.channels.has(channelId));
}
function guardCancel(value) {
  if (Ct(value)) {
    Ne("\u5DF2\u53D6\u6D88\u914D\u7F6E\u3002");
    throw new PromptCancelledError();
  }
  return value;
}
function warn(text) {
  stdout.write(`
[warn] ${text}
`);
}
function section(title) {
  stdout.write(`
${title}
`);
}
function resolvePluginPath() {
  if (existsSync(DEFAULT_PLUGIN_PATH)) {
    return DEFAULT_PLUGIN_PATH;
  }
  if (existsSync(LEGACY_PLUGIN_PATH)) {
    return LEGACY_PLUGIN_PATH;
  }
  return DEFAULT_PLUGIN_PATH;
}
function renderReadyMessage() {
  return [
    `${ANSI_BORDER}\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501${ANSI_RESET}`,
    "  OpenClaw China Channels \u5DF2\u5C31\u7EEA!",
    `${ANSI_BORDER}\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501${ANSI_RESET}`,
    "",
    "\u63D2\u4EF6\u8DEF\u5F84:",
    `  ${resolvePluginPath()}`,
    "",
    "\u914D\u7F6E\u6587\u4EF6:",
    `  ${CONFIG_FILE_PATH}`,
    "",
    "\u66F4\u65B0\u63D2\u4EF6:",
    "  openclaw plugins update <plugin-id>",
    "",
    "\u9879\u76EE\u4ED3\u5E93:",
    `  ${ANSI_LINK}${PROJECT_REPO}${ANSI_RESET}`,
    "",
    "\u2B50 \u5982\u679C\u8FD9\u4E2A\u9879\u76EE\u5BF9\u4F60\u6709\u5E2E\u52A9\uFF0C\u8BF7\u7ED9\u6211\u4EEC\u4E00\u4E2A Star\uFF01\u2B50",
    "",
    "\u4E0B\u4E00\u6B65:",
    "  openclaw gateway --port 18789 --verbose",
    ""
  ].join("\n");
}
function showReadyMessage() {
  stdout.write(`
${renderReadyMessage()}
`);
}
function showGuideLink(channelId) {
  const url = CHANNEL_GUIDE_LINKS[channelId];
  Ve(`\u914D\u7F6E\u6587\u6863\uFF1A${url}`, "Docs");
}
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function resolveWriteConfig(runtime2) {
  if (!isRecord(runtime2)) {
    return void 0;
  }
  const config = runtime2.config;
  if (!isRecord(config)) {
    return void 0;
  }
  if (typeof config.writeConfigFile !== "function") {
    return void 0;
  }
  return config.writeConfigFile;
}
function isCommandLike(value) {
  if (!isRecord(value)) {
    return false;
  }
  return typeof value.command === "function" && typeof value.description === "function" && typeof value.action === "function";
}
function toTrimmedString(value) {
  if (typeof value !== "string") {
    return void 0;
  }
  const trimmed = value.trim();
  return trimmed || void 0;
}
function hasNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}
function toBoolean(value, fallback) {
  return typeof value === "boolean" ? value : fallback;
}
function toNumber(value) {
  return typeof value === "number" && Number.isFinite(value) ? value : void 0;
}
function cloneConfig(cfg) {
  try {
    return structuredClone(cfg);
  } catch {
    return JSON.parse(JSON.stringify(cfg));
  }
}
function getChannelConfig(cfg, channelId) {
  const channels = isRecord(cfg.channels) ? cfg.channels : {};
  const existing = channels[channelId];
  return isRecord(existing) ? existing : {};
}
function getPreferredAccountConfig(channelCfg) {
  const accounts = channelCfg.accounts;
  if (!isRecord(accounts)) {
    return void 0;
  }
  const defaultAccountId = toTrimmedString(channelCfg.defaultAccount);
  if (defaultAccountId) {
    const preferred = accounts[defaultAccountId];
    if (isRecord(preferred)) {
      return preferred;
    }
  }
  for (const value of Object.values(accounts)) {
    if (isRecord(value)) {
      return value;
    }
  }
  return void 0;
}
function hasTokenPair(channelCfg) {
  if (hasNonEmptyString(channelCfg.token) && hasNonEmptyString(channelCfg.encodingAESKey)) {
    return true;
  }
  const accountCfg = getPreferredAccountConfig(channelCfg);
  return Boolean(
    accountCfg && hasNonEmptyString(accountCfg.token) && hasNonEmptyString(accountCfg.encodingAESKey)
  );
}
function isChannelConfigured(cfg, channelId) {
  const channelCfg = getChannelConfig(cfg, channelId);
  switch (channelId) {
    case "dingtalk":
      return hasNonEmptyString(channelCfg.clientId) && hasNonEmptyString(channelCfg.clientSecret);
    case "feishu-china":
      return hasNonEmptyString(channelCfg.appId) && hasNonEmptyString(channelCfg.appSecret);
    case "qqbot":
      return hasNonEmptyString(channelCfg.appId) && hasNonEmptyString(channelCfg.clientSecret);
    case "wecom":
    case "wecom-app":
      return hasTokenPair(channelCfg);
    default:
      return false;
  }
}
function withConfiguredSuffix(cfg, channelId) {
  const base = CHANNEL_DISPLAY_LABELS[channelId];
  return isChannelConfigured(cfg, channelId) ? `${base}\uFF08\u5DF2\u914D\u7F6E\uFF09` : base;
}
function mergeChannelConfig(cfg, channelId, patch) {
  const channels = isRecord(cfg.channels) ? { ...cfg.channels } : {};
  const existing = getChannelConfig(cfg, channelId);
  channels[channelId] = {
    ...existing,
    ...patch,
    enabled: true
  };
  return {
    ...cfg,
    channels
  };
}
var SetupPrompter = class {
  async askText(params) {
    const { label, required = false, defaultValue } = params;
    while (true) {
      const value = String(
        guardCancel(
          await Ze({
            message: label,
            initialValue: defaultValue
          })
        )
      ).trim();
      if (value) {
        return value;
      }
      if (defaultValue) {
        return defaultValue;
      }
      if (!required) {
        return "";
      }
      warn("\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879\u3002");
    }
  }
  async askSecret(params) {
    const { label, existingValue, required = true } = params;
    return this.askText({
      label,
      required,
      defaultValue: existingValue
    });
  }
  async askConfirm(label, defaultValue = true) {
    return Boolean(
      guardCancel(
        await Re({
          message: label,
          initialValue: defaultValue
        })
      )
    );
  }
  async askNumber(params) {
    const { label, min, defaultValue } = params;
    while (true) {
      const raw = String(
        guardCancel(
          await Ze({
            message: label,
            initialValue: defaultValue !== void 0 ? String(defaultValue) : void 0
          })
        )
      ).trim();
      const parsed = Number.parseInt(raw, 10);
      if (Number.isFinite(parsed) && (min === void 0 || parsed >= min)) {
        return parsed;
      }
      warn(`\u8BF7\u8F93\u5165\u6709\u6548\u6574\u6570${min !== void 0 ? `\uFF08>= ${min}\uFF09` : ""}\u3002`);
    }
  }
  async askSelect(message, options, defaultValue) {
    const initial = options.some((opt) => opt.value === defaultValue) ? defaultValue : options[0]?.value;
    const selectOptions = options.map((option) => ({
      value: option.value,
      label: option.label
    }));
    return guardCancel(
      await Je({
        message,
        options: selectOptions,
        initialValue: initial
      })
    );
  }
};
async function configureDingtalk(prompter, cfg) {
  section("\u914D\u7F6E DingTalk\uFF08\u9489\u9489\uFF09");
  showGuideLink("dingtalk");
  const existing = getChannelConfig(cfg, "dingtalk");
  const clientId = await prompter.askText({
    label: "DingTalk clientId\uFF08AppKey\uFF09",
    defaultValue: toTrimmedString(existing.clientId),
    required: true
  });
  const clientSecret = await prompter.askSecret({
    label: "DingTalk clientSecret\uFF08AppSecret\uFF09",
    existingValue: toTrimmedString(existing.clientSecret),
    required: true
  });
  const enableAICard = await prompter.askConfirm(
    "\u542F\u7528 AI Card \u6D41\u5F0F\u56DE\u590D\uFF08\u63A8\u8350\u5173\u95ED\uFF0C\u4F7F\u7528\u975E\u6D41\u5F0F\uFF09",
    toBoolean(existing.enableAICard, false)
  );
  return mergeChannelConfig(cfg, "dingtalk", {
    clientId,
    clientSecret,
    enableAICard
  });
}
async function configureFeishu(prompter, cfg) {
  section("\u914D\u7F6E Feishu\uFF08\u98DE\u4E66\uFF09");
  showGuideLink("feishu-china");
  const existing = getChannelConfig(cfg, "feishu-china");
  const appId = await prompter.askText({
    label: "Feishu appId",
    defaultValue: toTrimmedString(existing.appId),
    required: true
  });
  const appSecret = await prompter.askSecret({
    label: "Feishu appSecret",
    existingValue: toTrimmedString(existing.appSecret),
    required: true
  });
  const sendMarkdownAsCard = await prompter.askConfirm(
    "\u4EE5\u5361\u7247\u5F62\u5F0F\u53D1\u9001 Markdown",
    toBoolean(existing.sendMarkdownAsCard, true)
  );
  return mergeChannelConfig(cfg, "feishu-china", {
    appId,
    appSecret,
    sendMarkdownAsCard
  });
}
async function configureWecom(prompter, cfg) {
  section("\u914D\u7F6E WeCom\uFF08\u4F01\u4E1A\u5FAE\u4FE1-\u667A\u80FD\u673A\u5668\u4EBA\uFF09");
  showGuideLink("wecom");
  const existing = getChannelConfig(cfg, "wecom");
  const webhookPath = await prompter.askText({
    label: "Webhook \u8DEF\u5F84\uFF08\u9700\u4E0E\u4F01\u4E1A\u5FAE\u4FE1\u540E\u53F0\u914D\u7F6E\u4E00\u81F4\uFF0C\u9ED8\u8BA4 /wecom\uFF09",
    defaultValue: toTrimmedString(existing.webhookPath) ?? "/wecom",
    required: true
  });
  const token = await prompter.askSecret({
    label: "WeCom token",
    existingValue: toTrimmedString(existing.token),
    required: true
  });
  const encodingAESKey = await prompter.askSecret({
    label: "WeCom encodingAESKey",
    existingValue: toTrimmedString(existing.encodingAESKey),
    required: true
  });
  return mergeChannelConfig(cfg, "wecom", {
    webhookPath,
    token,
    encodingAESKey
  });
}
async function configureWecomApp(prompter, cfg) {
  section("\u914D\u7F6E WeCom App\uFF08\u81EA\u5EFA\u5E94\u7528-\u53EF\u63A5\u5165\u5FAE\u4FE1\uFF09");
  showGuideLink("wecom-app");
  const existing = getChannelConfig(cfg, "wecom-app");
  const existingAsr = isRecord(existing.asr) ? existing.asr : {};
  const webhookPath = await prompter.askText({
    label: "Webhook \u8DEF\u5F84\uFF08\u9700\u4E0E\u4F01\u4E1A\u5FAE\u4FE1\u540E\u53F0\u914D\u7F6E\u4E00\u81F4\uFF0C\u9ED8\u8BA4 /wecom-app\uFF09",
    defaultValue: toTrimmedString(existing.webhookPath) ?? "/wecom-app",
    required: true
  });
  const token = await prompter.askSecret({
    label: "WeCom App token",
    existingValue: toTrimmedString(existing.token),
    required: true
  });
  const encodingAESKey = await prompter.askSecret({
    label: "WeCom App encodingAESKey",
    existingValue: toTrimmedString(existing.encodingAESKey),
    required: true
  });
  const patch = {
    webhookPath,
    token,
    encodingAESKey
  };
  const corpId = await prompter.askText({
    label: "corpId",
    defaultValue: toTrimmedString(existing.corpId),
    required: true
  });
  const corpSecret = await prompter.askSecret({
    label: "corpSecret",
    existingValue: toTrimmedString(existing.corpSecret),
    required: true
  });
  const agentId = await prompter.askNumber({
    label: "agentId",
    min: 1,
    defaultValue: toNumber(existing.agentId)
  });
  patch.corpId = corpId;
  patch.corpSecret = corpSecret;
  patch.agentId = agentId;
  const asrEnabled = await prompter.askConfirm(
    "\u542F\u7528 ASR\uFF08\u652F\u6301\u5165\u7AD9\u8BED\u97F3\u81EA\u52A8\u8F6C\u6587\u5B57\uFF09",
    toBoolean(existingAsr.enabled, false)
  );
  const asr = {
    enabled: asrEnabled
  };
  if (asrEnabled) {
    Ve(
      [
        "ASR \u5F00\u901A\u65B9\u5F0F\u8BF7\u67E5\u770B\u914D\u7F6E\u6587\u6863\uFF1A\u6B65\u9AA4\u4E03\uFF08\u53EF\u9009\uFF09\uFF1A\u5F00\u542F\u8BED\u97F3\u8F6C\u6587\u672C\uFF08ASR\uFF09",
        "https://github.com/BytePioneer-AI/openclaw-china/blob/main/doc/guides/wecom-app/configuration.md"
      ].join("\n"),
      "\u63D0\u793A"
    );
    asr.appId = await prompter.askText({
      label: "ASR appId\uFF08\u817E\u8BAF\u4E91\uFF09",
      defaultValue: toTrimmedString(existingAsr.appId),
      required: true
    });
    asr.secretId = await prompter.askSecret({
      label: "ASR secretId\uFF08\u817E\u8BAF\u4E91\uFF09",
      existingValue: toTrimmedString(existingAsr.secretId),
      required: true
    });
    asr.secretKey = await prompter.askSecret({
      label: "ASR secretKey\uFF08\u817E\u8BAF\u4E91\uFF09",
      existingValue: toTrimmedString(existingAsr.secretKey),
      required: true
    });
  }
  patch.asr = asr;
  return mergeChannelConfig(cfg, "wecom-app", patch);
}
async function configureQQBot(prompter, cfg) {
  section("\u914D\u7F6E QQBot\uFF08QQ \u673A\u5668\u4EBA\uFF09");
  showGuideLink("qqbot");
  const existing = getChannelConfig(cfg, "qqbot");
  const existingAsr = isRecord(existing.asr) ? existing.asr : {};
  const appId = await prompter.askText({
    label: "QQBot appId",
    defaultValue: toTrimmedString(existing.appId),
    required: true
  });
  const clientSecret = await prompter.askSecret({
    label: "QQBot clientSecret",
    existingValue: toTrimmedString(existing.clientSecret),
    required: true
  });
  const asrEnabled = await prompter.askConfirm(
    "\u542F\u7528 ASR\uFF08\u652F\u6301\u5165\u7AD9\u8BED\u97F3\u81EA\u52A8\u8F6C\u6587\u5B57\uFF09",
    toBoolean(existingAsr.enabled, false)
  );
  const asr = {
    enabled: asrEnabled
  };
  if (asrEnabled) {
    Ve("ASR \u5F00\u901A\u65B9\u5F0F\u8BE6\u60C5\u8BF7\u67E5\u770B\u914D\u7F6E\u6587\u6863\u3002", "\u63D0\u793A");
    asr.appId = await prompter.askText({
      label: "ASR appId\uFF08\u817E\u8BAF\u4E91\uFF09",
      defaultValue: toTrimmedString(existingAsr.appId),
      required: true
    });
    asr.secretId = await prompter.askSecret({
      label: "ASR secretId\uFF08\u817E\u8BAF\u4E91\uFF09",
      existingValue: toTrimmedString(existingAsr.secretId),
      required: true
    });
    asr.secretKey = await prompter.askSecret({
      label: "ASR secretKey\uFF08\u817E\u8BAF\u4E91\uFF09",
      existingValue: toTrimmedString(existingAsr.secretKey),
      required: true
    });
  }
  return mergeChannelConfig(cfg, "qqbot", {
    appId,
    clientSecret,
    asr
  });
}
async function configureSingleChannel(channel, prompter, cfg) {
  switch (channel) {
    case "dingtalk":
      return configureDingtalk(prompter, cfg);
    case "feishu-china":
      return configureFeishu(prompter, cfg);
    case "wecom":
      return configureWecom(prompter, cfg);
    case "wecom-app":
      return configureWecomApp(prompter, cfg);
    case "qqbot":
      return configureQQBot(prompter, cfg);
    default:
      return cfg;
  }
}
async function runChinaSetup(params) {
  if (!stdin.isTTY || !stdout.isTTY) {
    params.logger.error?.("\u4EA4\u4E92\u5F0F\u914D\u7F6E\u9700\u8981\u5728 TTY \u7EC8\u7AEF\u4E2D\u8FD0\u884C\u3002");
    return;
  }
  const prompter = new SetupPrompter();
  const touched = /* @__PURE__ */ new Set();
  let next = cloneConfig(params.initialConfig);
  try {
    We("OpenClaw China \u914D\u7F6E\u5411\u5BFC");
    Ve(
      [
        "\u4F7F\u7528\u65B9\u5411\u952E\u9009\u62E9\uFF0C\u6309 Enter \u786E\u8BA4\u3002",
        `\u9879\u76EE\u4ED3\u5E93\uFF1A${ANSI_LINK}${PROJECT_REPO}${ANSI_RESET}`
      ].join("\n"),
      "\u6B22\u8FCE"
    );
    if (params.availableChannels.length === 0) {
      params.logger.error?.("\u672A\u68C0\u6D4B\u5230\u53EF\u914D\u7F6E\u7684 China \u6E20\u9053\u63D2\u4EF6\u3002");
      return;
    }
    const channelOptions = params.availableChannels.map((channelId, index) => ({
      key: index === 0 ? "recommended" : "",
      value: channelId,
      label: withConfiguredSuffix(next, channelId)
    }));
    const defaultChannel = channelOptions[0]?.value ?? "save";
    let continueLoop = true;
    while (continueLoop) {
      const selected = await prompter.askSelect(
        "\u8BF7\u9009\u62E9\u8981\u914D\u7F6E\u7684\u6E20\u9053",
        [
          ...channelOptions,
          { key: "", value: "save", label: "\u4FDD\u5B58\u5E76\u9000\u51FA" },
          { key: "", value: "cancel", label: "\u4E0D\u4FDD\u5B58\u5E76\u9000\u51FA" }
        ],
        defaultChannel
      );
      if (selected === "cancel") {
        Ne("\u5DF2\u53D6\u6D88\uFF0C\u672A\u5199\u5165\u4EFB\u4F55\u914D\u7F6E\u3002");
        return;
      }
      if (selected === "save") {
        break;
      }
      next = await configureSingleChannel(selected, prompter, next);
      touched.add(selected);
      Ve(`\u5DF2\u5B8C\u6210\uFF1A${CHANNEL_DISPLAY_LABELS[selected]}`, "\u5B8C\u6210");
      continueLoop = await prompter.askConfirm("\u7EE7\u7EED\u914D\u7F6E\u5176\u4ED6\u6E20\u9053", true);
    }
    if (touched.size === 0) {
      Ne("\u672A\u8FDB\u884C\u4EFB\u4F55\u4FEE\u6539\u3002");
      return;
    }
    Ve(
      `\u5DF2\u914D\u7F6E\u6E20\u9053\uFF1A${Array.from(touched).map((channelId) => CHANNEL_DISPLAY_LABELS[channelId]).join(", ")}`,
      "\u6458\u8981"
    );
    if (!params.writeConfig) {
      params.logger.error?.("\u65E0\u6CD5\u4FDD\u5B58\u914D\u7F6E\uFF1A\u5F53\u524D\u8FD0\u884C\u65F6\u672A\u63D0\u4F9B\u914D\u7F6E\u5199\u5165\u80FD\u529B\u3002");
      return;
    }
    await params.writeConfig(next);
    Le("\u914D\u7F6E\u5DF2\u4FDD\u5B58\u3002");
    showReadyMessage();
  } catch (err) {
    if (err instanceof PromptCancelledError) {
      return;
    }
    throw err;
  }
}
function registerChinaSetupCli(api, opts) {
  const state = getChinaCliState();
  for (const channelId of normalizeChannels(opts?.channels)) {
    state.channels.add(channelId);
  }
  if (state.cliRegistered || typeof api.registerCli !== "function") {
    return;
  }
  state.cliRegistered = true;
  const writeConfig = resolveWriteConfig(api.runtime);
  const fallbackLogger = {
    info: (message) => stdout.write(`${message}
`),
    warn: (message) => warn(message),
    error: (message) => warn(message)
  };
  api.registerCli(
    (ctx) => {
      if (!isCommandLike(ctx.program)) {
        const logger = ctx.logger ?? api.logger ?? fallbackLogger;
        logger.error?.("\u65E0\u6CD5\u6CE8\u518C china \u547D\u4EE4\uFF1ACLI program \u5B9E\u4F8B\u65E0\u6548\u3002");
        return;
      }
      const root = ctx.program.command("china").description("OpenClaw China \u63D2\u4EF6\u547D\u4EE4");
      root.command("setup").description("\u4E2D\u56FD\u6E20\u9053\u4EA4\u4E92\u5F0F\u914D\u7F6E\u5411\u5BFC").action(async () => {
        const logger = ctx.logger ?? api.logger ?? fallbackLogger;
        const availableChannels = getInstalledChannels(state);
        await runChinaSetup({
          initialConfig: isRecord(ctx.config) ? ctx.config : {},
          writeConfig,
          logger,
          availableChannels
        });
      });
      root.command("about").description("\u663E\u793A\u9879\u76EE\u4FE1\u606F").action(() => {
        const installed = getInstalledChannels(state);
        We("OpenClaw China \u6E20\u9053\u63D2\u4EF6");
        Ve(
          installed.length > 0 ? `\u5F53\u524D\u5DF2\u5B89\u88C5\u6E20\u9053\uFF1A${installed.map((channelId) => CHANNEL_DISPLAY_LABELS[channelId]).join("\u3001")}` : "OpenClaw China \u6E20\u9053\u63D2\u4EF6",
          "\u5173\u4E8E"
        );
        Le(PROJECT_REPO);
        showReadyMessage();
      });
    },
    { commands: ["china"] }
  );
}

// ../../packages/shared/src/cli/install-hint.ts
var PROJECT_REPO2 = "https://github.com/BytePioneer-AI/openclaw-china";
var INSTALL_SETUP_COMMAND = "openclaw china setup";
var START_GATEWAY_COMMAND = "openclaw gateway --port 18789 --verbose";
var ANSI_RESET2 = "\x1B[0m";
var ANSI_BOLD = "\x1B[1m";
var ANSI_LINK2 = "\x1B[1;4;96m";
var ANSI_BORDER2 = "\x1B[92m";
var SUPPORTED_CHANNELS = [
  "dingtalk",
  "feishu-china",
  "wecom",
  "wecom-app",
  "qqbot"
];
var CHINA_INSTALL_HINT_SHOWN_KEY = /* @__PURE__ */ Symbol.for("@openclaw-china/china-install-hint-shown");
function isRecord2(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function hasAnyEnabledChinaChannel(config) {
  if (!isRecord2(config)) {
    return false;
  }
  const channels = config.channels;
  if (!isRecord2(channels)) {
    return false;
  }
  return SUPPORTED_CHANNELS.some((channelId) => {
    const channelConfig = channels[channelId];
    return isRecord2(channelConfig) && channelConfig.enabled === true;
  });
}
function hasShownInstallHint() {
  const root = globalThis;
  return root[CHINA_INSTALL_HINT_SHOWN_KEY] === true;
}
function markInstallHintShown() {
  const root = globalThis;
  root[CHINA_INSTALL_HINT_SHOWN_KEY] = true;
}
function showChinaInstallHint(api) {
  if (hasShownInstallHint() || hasAnyEnabledChinaChannel(api.config)) {
    return;
  }
  markInstallHintShown();
  const lines = [
    `${ANSI_BORDER2}\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501${ANSI_RESET2}`,
    "  OpenClaw China Channels \u5DF2\u5C31\u7EEA!",
    `${ANSI_BORDER2}\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501${ANSI_RESET2}`,
    "",
    "\u9879\u76EE\u4ED3\u5E93:",
    `  ${ANSI_LINK2}${PROJECT_REPO2}${ANSI_RESET2}`,
    "",
    "\u2B50 \u5982\u679C\u8FD9\u4E2A\u9879\u76EE\u5BF9\u4F60\u6709\u5E2E\u52A9\uFF0C\u8BF7\u7ED9\u6211\u4EEC\u4E00\u4E2A Star\uFF01\u2B50",
    "",
    "\u4E0B\u4E00\u6B65\uFF08\u914D\u7F6E\u5F15\u5BFC\uFF09:",
    "  1. \u8FD0\u884C\u4EA4\u4E92\u5F0F\u914D\u7F6E\u5411\u5BFC",
    `     ${ANSI_BOLD}${INSTALL_SETUP_COMMAND}${ANSI_RESET2}`,
    "  2. \u6309\u63D0\u793A\u586B\u5199\u6E20\u9053\u51ED\u636E\u5E76\u4FDD\u5B58\u914D\u7F6E",
    "  3. \u542F\u52A8\u7F51\u5173\u5E76\u89C2\u5BDF\u65E5\u5FD7",
    `     ${START_GATEWAY_COMMAND}`
  ];
  if (api.logger?.info) {
    for (const line of lines) {
      api.logger.info(line);
    }
    return;
  }
  if (api.logger?.warn) {
    for (const line of lines) {
      api.logger.warn(line);
    }
  }
}
function decodeEncodingAESKey(encodingAESKey) {
  const trimmed = encodingAESKey.trim();
  if (!trimmed) throw new Error("encodingAESKey missing");
  const withPadding = trimmed.endsWith("=") ? trimmed : `${trimmed}=`;
  const key = Buffer.from(withPadding, "base64");
  if (key.length !== 32) {
    throw new Error(`invalid encodingAESKey (expected 32 bytes after base64 decode, got ${key.length})`);
  }
  return key;
}
var WECOM_PKCS7_BLOCK_SIZE = 32;
function pkcs7Pad(buf, blockSize) {
  const mod = buf.length % blockSize;
  const pad = mod === 0 ? blockSize : blockSize - mod;
  return Buffer.concat([buf, Buffer.alloc(pad, pad)]);
}
function pkcs7Unpad(buf, blockSize) {
  if (buf.length === 0) throw new Error("invalid pkcs7 payload");
  const pad = buf[buf.length - 1];
  if (!pad || pad < 1 || pad > blockSize || pad > buf.length) {
    throw new Error("invalid pkcs7 padding");
  }
  for (let i = 1; i <= pad; i += 1) {
    if (buf[buf.length - i] !== pad) {
      throw new Error("invalid pkcs7 padding");
    }
  }
  return buf.subarray(0, buf.length - pad);
}
function sha1Hex(input2) {
  return crypto.createHash("sha1").update(input2).digest("hex");
}
function computeWecomMsgSignature(params) {
  const parts = [params.token, params.timestamp, params.nonce, params.encrypt].map((value) => String(value ?? "")).sort();
  return sha1Hex(parts.join(""));
}
function verifyWecomSignature(params) {
  const expected = computeWecomMsgSignature({
    token: params.token,
    timestamp: params.timestamp,
    nonce: params.nonce,
    encrypt: params.encrypt
  });
  return expected === params.signature;
}
function decryptWecomEncrypted(params) {
  const aesKey = decodeEncodingAESKey(params.encodingAESKey);
  const iv = aesKey.subarray(0, 16);
  const decipher = crypto.createDecipheriv("aes-256-cbc", aesKey, iv);
  decipher.setAutoPadding(false);
  const decryptedPadded = Buffer.concat([
    decipher.update(Buffer.from(params.encrypt, "base64")),
    decipher.final()
  ]);
  const decrypted = pkcs7Unpad(decryptedPadded, WECOM_PKCS7_BLOCK_SIZE);
  if (decrypted.length < 20) {
    throw new Error(`invalid decrypted payload (expected at least 20 bytes, got ${decrypted.length})`);
  }
  const msgLen = decrypted.readUInt32BE(16);
  const msgStart = 20;
  const msgEnd = msgStart + msgLen;
  if (msgEnd > decrypted.length) {
    throw new Error(`invalid decrypted msg length (msgEnd=${msgEnd}, payloadLength=${decrypted.length})`);
  }
  const msg = decrypted.subarray(msgStart, msgEnd).toString("utf8");
  const receiveId = params.receiveId ?? "";
  if (receiveId) {
    const trailing = decrypted.subarray(msgEnd).toString("utf8");
    if (trailing !== receiveId) {
      throw new Error(`receiveId mismatch (expected "${receiveId}", got "${trailing}")`);
    }
  }
  return msg;
}
function encryptWecomPlaintext(params) {
  const aesKey = decodeEncodingAESKey(params.encodingAESKey);
  const iv = aesKey.subarray(0, 16);
  const random16 = crypto.randomBytes(16);
  const msg = Buffer.from(params.plaintext ?? "", "utf8");
  const msgLen = Buffer.alloc(4);
  msgLen.writeUInt32BE(msg.length, 0);
  const receiveId = Buffer.from(params.receiveId ?? "", "utf8");
  const raw = Buffer.concat([random16, msgLen, msg, receiveId]);
  const padded = pkcs7Pad(raw, WECOM_PKCS7_BLOCK_SIZE);
  const cipher = crypto.createCipheriv("aes-256-cbc", aesKey, iv);
  cipher.setAutoPadding(false);
  const encrypted = Buffer.concat([cipher.update(padded), cipher.final()]);
  return encrypted.toString("base64");
}
function decryptWecomMedia(params) {
  const { encryptedBuffer, encodingAESKey } = params;
  if (!encryptedBuffer || encryptedBuffer.length === 0) {
    throw new Error("encryptedBuffer cannot be empty");
  }
  const aesKey = decodeEncodingAESKey(encodingAESKey);
  const iv = aesKey.subarray(0, 16);
  const decipher = crypto.createDecipheriv("aes-256-cbc", aesKey, iv);
  decipher.setAutoPadding(false);
  try {
    const decryptedPadded = Buffer.concat([
      decipher.update(encryptedBuffer),
      decipher.final()
    ]);
    const decrypted = pkcs7Unpad(decryptedPadded, WECOM_PKCS7_BLOCK_SIZE);
    return decrypted;
  } catch (err) {
    throw new Error(
      `Failed to decrypt media: ${err instanceof Error ? err.message : String(err)}`
    );
  }
}
var RESPONSE_URL_TTL_MS = 55 * 60 * 1e3;
var TEMP_MEDIA_TTL_MS = 15 * 60 * 1e3;
var TEMP_MEDIA_PREFIX = "/wecom-media";
var responseEndpoints = /* @__PURE__ */ new Map();
var accountPublicBaseUrl = /* @__PURE__ */ new Map();
var tempMedia = /* @__PURE__ */ new Map();
function endpointKey(accountId, to) {
  return `${accountId}::${to}`;
}
function now() {
  return Date.now();
}
function normalizeHeaderValue(value) {
  if (Array.isArray(value)) return value[0] ?? "";
  return typeof value === "string" ? value : "";
}
function pickFirstHeaderPart(value) {
  return value.split(",").map((item) => item.trim()).find(Boolean) ?? "";
}
function normalizeProto(raw) {
  const lower = raw.trim().toLowerCase();
  if (lower === "https" || lower === "http") return lower;
  return "https";
}
function guessContentType(fileName) {
  const ext = path3__default.extname(fileName).toLowerCase();
  switch (ext) {
    case ".pdf":
      return "application/pdf";
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".gif":
      return "image/gif";
    case ".webp":
      return "image/webp";
    case ".txt":
      return "text/plain; charset=utf-8";
    case ".json":
      return "application/json";
    case ".mp3":
      return "audio/mpeg";
    case ".wav":
      return "audio/wav";
    default:
      return "application/octet-stream";
  }
}
function pruneExpiredResponseUrls() {
  const ts = now();
  for (const [key, list] of responseEndpoints.entries()) {
    const active = list.filter((entry) => entry.expiresAt > ts);
    if (active.length > 0) {
      responseEndpoints.set(key, active);
    } else {
      responseEndpoints.delete(key);
    }
  }
}
function pruneExpiredTempMedia() {
  const ts = now();
  for (const [id, item] of tempMedia.entries()) {
    if (item.expiresAt <= ts) {
      tempMedia.delete(id);
    }
  }
}
function rememberAccountPublicBaseUrl(accountId, req) {
  const headers = req.headers ?? {};
  const forwardedHost = pickFirstHeaderPart(normalizeHeaderValue(headers["x-forwarded-host"]));
  const host = forwardedHost || normalizeHeaderValue(headers.host).trim();
  if (!host) return;
  const forwardedProto = pickFirstHeaderPart(normalizeHeaderValue(headers["x-forwarded-proto"]));
  const encrypted = Boolean(req.socket?.encrypted);
  const proto = normalizeProto(forwardedProto || (encrypted ? "https" : "http"));
  accountPublicBaseUrl.set(accountId, `${proto}://${host}`);
}
function getAccountPublicBaseUrl(accountId) {
  return accountPublicBaseUrl.get(accountId);
}
function registerResponseUrl(params) {
  const accountId = params.accountId.trim();
  const to = params.to.trim();
  const responseUrl = params.responseUrl.trim();
  if (!accountId || !to || !responseUrl) return;
  pruneExpiredResponseUrls();
  const key = endpointKey(accountId, to);
  const list = responseEndpoints.get(key) ?? [];
  if (list.some((entry) => entry.url === responseUrl)) return;
  list.push({
    url: responseUrl,
    createdAt: now(),
    expiresAt: now() + RESPONSE_URL_TTL_MS
  });
  responseEndpoints.set(key, list);
}
function consumeResponseUrl(params) {
  const accountId = params.accountId.trim();
  const to = params.to.trim();
  if (!accountId || !to) return null;
  pruneExpiredResponseUrls();
  const key = endpointKey(accountId, to);
  const list = responseEndpoints.get(key) ?? [];
  if (list.length === 0) return null;
  const next = list.pop();
  if (!next?.url) return null;
  if (list.length > 0) {
    responseEndpoints.set(key, list);
  } else {
    responseEndpoints.delete(key);
  }
  return next.url;
}
async function registerTempLocalMedia(params) {
  pruneExpiredTempMedia();
  const absPath = path3__default.resolve(params.filePath);
  const stat = await promises.stat(absPath);
  if (!stat.isFile()) {
    throw new Error(`Local media path is not a file: ${absPath}`);
  }
  const id = randomBytes(12).toString("hex");
  const token = randomBytes(16).toString("hex");
  const fileName = (params.fileName?.trim() || path3__default.basename(absPath) || "file.bin").replace(/[^\w.\-]/g, "_");
  tempMedia.set(id, {
    id,
    token,
    filePath: absPath,
    fileName,
    createdAt: now(),
    expiresAt: now() + TEMP_MEDIA_TTL_MS
  });
  return { id, token, fileName };
}
function buildTempMediaUrl(params) {
  const base = params.baseUrl.replace(/\/+$/, "");
  const safeName = encodeURIComponent(params.fileName);
  return `${base}${TEMP_MEDIA_PREFIX}/${params.id}/${safeName}?token=${encodeURIComponent(params.token)}`;
}
async function handleTempMediaRequest(req, res) {
  pruneExpiredTempMedia();
  const url = new URL(req.url ?? "/", "http://localhost");
  if (!url.pathname.startsWith(`${TEMP_MEDIA_PREFIX}/`)) return false;
  if (req.method !== "GET") {
    res.statusCode = 405;
    res.setHeader("Allow", "GET");
    res.end("Method Not Allowed");
    return true;
  }
  const parts = url.pathname.split("/").filter(Boolean);
  if (parts.length < 2) {
    res.statusCode = 404;
    res.end("Not Found");
    return true;
  }
  const id = parts[1] ?? "";
  const token = String(url.searchParams.get("token") ?? "").trim();
  const entry = tempMedia.get(id);
  if (!entry || !token || token !== entry.token) {
    res.statusCode = 404;
    res.end("Not Found");
    return true;
  }
  try {
    const data = await promises.readFile(entry.filePath);
    res.statusCode = 200;
    res.setHeader("Content-Type", guessContentType(entry.fileName));
    res.setHeader("Content-Disposition", `inline; filename="${entry.fileName}"`);
    res.end(data);
    return true;
  } catch {
    tempMedia.delete(id);
    res.statusCode = 404;
    res.end("Not Found");
    return true;
  }
}

// src/bot.ts
function resolveOpenClawStateDir() {
  const override = process.env.OPENCLAW_STATE_DIR?.trim() || process.env.CLAWDBOT_STATE_DIR?.trim();
  if (override) {
    if (override.startsWith("~")) {
      const home = os2.homedir();
      const normalized = override === "~" ? home : path3.join(home, override.slice(2));
      return path3.resolve(normalized);
    }
    return path3.resolve(override);
  }
  return path3.join(os2.homedir(), ".openclaw");
}
function resolveWecomInboundMediaDir() {
  return path3.join(resolveOpenClawStateDir(), "media", "inbound");
}
function isHttpUrl2(value) {
  return /^https?:\/\//i.test(value.trim());
}
function detectMediaTypeByPath(mediaPath) {
  const ext = path3.extname(mediaPath.split("?")[0] ?? "").toLowerCase();
  if ([".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp"].includes(ext)) {
    return "image";
  }
  return "file";
}
async function buildPublicMediaUrlForStream(params) {
  const raw = params.source.trim();
  if (!raw) return null;
  if (isHttpUrl2(raw)) {
    return {
      url: raw,
      mediaType: detectMediaTypeByPath(raw)
    };
  }
  if (!path3.isAbsolute(raw)) return null;
  if (!fs3.existsSync(raw)) return null;
  const baseUrl = getAccountPublicBaseUrl(params.accountId);
  if (!baseUrl) {
    params.log?.warn?.("[wecom] public base URL missing, cannot expose local media in stream");
    return null;
  }
  const temp = await registerTempLocalMedia({
    filePath: raw,
    fileName: path3.basename(raw)
  });
  const url = buildTempMediaUrl({
    baseUrl,
    id: temp.id,
    token: temp.token,
    fileName: temp.fileName
  });
  return {
    url,
    mediaType: detectMediaTypeByPath(temp.fileName)
  };
}
async function normalizeChunkForWecomStream(params) {
  const rawText = String(params.text ?? "");
  const parseResult = extractMediaFromText(rawText, {
    removeFromText: true,
    checkExists: true,
    existsSync: (p) => fs3.existsSync(p),
    parseMediaLines: true,
    parseMarkdownImages: true,
    parseHtmlImages: true,
    parseBarePaths: true,
    parseMarkdownLinks: true
  });
  const parts = [];
  if (parseResult.text.trim()) {
    parts.push(parseResult.text.trim());
  }
  const sourceSet = /* @__PURE__ */ new Set();
  for (const media of parseResult.all) {
    const source = (media.localPath ?? media.source ?? "").trim();
    if (source) sourceSet.add(source);
  }
  for (const extra of params.payloadMediaUrls ?? []) {
    const source = String(extra ?? "").trim();
    if (source) sourceSet.add(source);
  }
  for (const source of sourceSet) {
    try {
      const mapped = await buildPublicMediaUrlForStream({
        accountId: params.accountId,
        source,
        log: params.log
      });
      if (!mapped) {
        parts.push(source);
        continue;
      }
      if (mapped.mediaType === "image") {
        parts.push(`![](${mapped.url})`);
      } else {
        parts.push(`[\u4E0B\u8F7D\u6587\u4EF6](${mapped.url})`);
      }
    } catch (err) {
      params.log?.warn?.(`[wecom] failed to map stream media source: ${String(err)}`);
      parts.push(source);
    }
  }
  return parts.join("\n\n").trim();
}
function extractWecomContent(msg) {
  const msgtype = String(msg.msgtype ?? "").toLowerCase();
  if (msgtype === "text") {
    const content = msg.text?.content;
    return typeof content === "string" ? content : "";
  }
  if (msgtype === "voice") {
    const content = msg.voice?.content;
    return typeof content === "string" ? content : "[voice]";
  }
  if (msgtype === "mixed") {
    const items = msg.mixed?.msg_item;
    if (Array.isArray(items)) {
      return items.map((item) => {
        if (!item || typeof item !== "object") return "";
        const typed = item;
        const t = String(typed.msgtype ?? "").toLowerCase();
        if (t === "text") return String(typed.text?.content ?? "");
        if (t === "image") return `[image] ${String(typed.image?.url ?? "").trim()}`.trim();
        return t ? `[${t}]` : "";
      }).filter((part) => Boolean(part && part.trim())).join("\n");
    }
    return "[mixed]";
  }
  if (msgtype === "image") {
    const url = String(msg.image?.url ?? "").trim();
    return url ? `[image] ${url}` : "[image]";
  }
  if (msgtype === "file") {
    const url = String(msg.file?.url ?? "").trim();
    return url ? `[file] ${url}` : "[file]";
  }
  if (msgtype === "event") {
    const eventtype = String(msg.event?.eventtype ?? "").trim();
    return eventtype ? `[event] ${eventtype}` : "[event]";
  }
  if (msgtype === "stream") {
    const id = String(msg.stream?.id ?? "").trim();
    return id ? `[stream_refresh] ${id}` : "[stream_refresh]";
  }
  return msgtype ? `[${msgtype}]` : "";
}
function resolveSenderId(msg) {
  const userid = msg.from?.userid?.trim();
  return userid || "unknown";
}
function resolveChatType(msg) {
  return msg.chattype === "group" ? "group" : "direct";
}
function resolveChatId(msg, senderId, chatType) {
  if (chatType === "group") {
    return msg.chatid?.trim() || "unknown";
  }
  return senderId;
}
function resolveMentionedBot(msg) {
  const msgtype = String(msg.msgtype ?? "").toLowerCase();
  if (msgtype === "event") return true;
  const mentionRe = /@[^\s]+/;
  if (msgtype === "text") {
    const content = String(msg.text?.content ?? "");
    return mentionRe.test(content);
  }
  if (msgtype === "mixed") {
    const items = msg.mixed?.msg_item;
    if (!Array.isArray(items)) return false;
    return items.some((item) => {
      if (!item || typeof item !== "object") return false;
      const typed = item;
      if (String(typed.msgtype ?? "").toLowerCase() !== "text") return false;
      const content = String(typed.text?.content ?? "");
      return mentionRe.test(content);
    });
  }
  return false;
}
async function dispatchWecomMessage(params) {
  const { cfg, account, msg, core, hooks } = params;
  const safeCfg = cfg ?? {};
  const logger = createLogger("wecom", { log: params.log, error: params.error });
  const chatType = resolveChatType(msg);
  const senderId = resolveSenderId(msg);
  const chatId = resolveChatId(msg, senderId, chatType);
  const to = chatType === "group" ? `group:${chatId}` : `user:${senderId}`;
  const responseUrl = typeof msg.response_url === "string" ? msg.response_url.trim() : "";
  if (responseUrl) {
    registerResponseUrl({
      accountId: account.accountId,
      to,
      responseUrl
    });
  }
  const accountConfig = account?.config ?? {};
  if (chatType === "group") {
    const groupPolicy = resolveGroupPolicy(accountConfig);
    const groupAllowFrom = resolveGroupAllowFrom(accountConfig);
    const requireMention = resolveRequireMention(accountConfig);
    const policyResult = checkGroupPolicy({
      groupPolicy,
      conversationId: chatId,
      groupAllowFrom,
      requireMention,
      mentionedBot: resolveMentionedBot(msg)
    });
    if (!policyResult.allowed) {
      logger.debug(`policy rejected: ${policyResult.reason}`);
      return;
    }
  } else {
    const dmPolicyRaw = accountConfig.dmPolicy ?? "pairing";
    if (dmPolicyRaw === "disabled") {
      logger.debug("dmPolicy=disabled, skipping dispatch");
      return;
    }
    const allowFrom = resolveAllowFrom(accountConfig);
    const policyResult = checkDmPolicy({
      dmPolicy: dmPolicyRaw,
      senderId,
      allowFrom
    });
    if (!policyResult.allowed) {
      logger.debug(`policy rejected: ${policyResult.reason}`);
      return;
    }
  }
  const channel = core.channel;
  if (!channel?.routing?.resolveAgentRoute || !channel.reply?.dispatchReplyWithBufferedBlockDispatcher) {
    logger.debug("core routing or buffered dispatcher missing, skipping dispatch");
    return;
  }
  const route = channel.routing.resolveAgentRoute({
    cfg: safeCfg,
    channel: "wecom",
    peer: { kind: chatType === "group" ? "group" : "dm", id: chatId }
  });
  const mediaResult = await processMediaInMessage({
    msg,
    encodingAESKey: account.encodingAESKey,
    log: logger
  });
  const rawBody = mediaResult.text;
  const fromLabel = chatType === "group" ? `group:${chatId}` : `user:${senderId}`;
  try {
    const storePath = channel.session?.resolveStorePath?.(safeCfg.session?.store, {
      agentId: route.agentId
    });
    const previousTimestamp = channel.session?.readSessionUpdatedAt ? channel.session.readSessionUpdatedAt({
      storePath,
      sessionKey: route.sessionKey
    }) ?? void 0 : void 0;
    const envelopeOptions = channel.reply?.resolveEnvelopeFormatOptions ? channel.reply.resolveEnvelopeFormatOptions(safeCfg) : void 0;
    const body = channel.reply?.formatAgentEnvelope ? channel.reply.formatAgentEnvelope({
      channel: "WeCom",
      from: fromLabel,
      previousTimestamp,
      envelope: envelopeOptions,
      body: rawBody
    }) : rawBody;
    const from = chatType === "group" ? `wecom:group:${chatId}` : `wecom:user:${senderId}`;
    const ctxPayload = channel.reply?.finalizeInboundContext ? channel.reply.finalizeInboundContext({
      Body: body,
      RawBody: rawBody,
      CommandBody: rawBody,
      From: from,
      To: to,
      SessionKey: route.sessionKey,
      AccountId: route.accountId,
      ChatType: chatType,
      ConversationLabel: fromLabel,
      SenderName: senderId,
      SenderId: senderId,
      Provider: "wecom",
      Surface: "wecom",
      MessageSid: msg.msgid,
      OriginatingChannel: "wecom",
      OriginatingTo: to
    }) : {
      Body: body,
      RawBody: rawBody,
      CommandBody: rawBody,
      From: from,
      To: to,
      SessionKey: route.sessionKey,
      AccountId: route.accountId,
      ChatType: chatType,
      ConversationLabel: fromLabel,
      SenderName: senderId,
      SenderId: senderId,
      Provider: "wecom",
      Surface: "wecom",
      MessageSid: msg.msgid,
      OriginatingChannel: "wecom",
      OriginatingTo: to
    };
    const ctxTo = typeof ctxPayload.To === "string" && ctxPayload.To.trim() ? ctxPayload.To.trim() : void 0;
    const ctxOriginatingTo = typeof ctxPayload.OriginatingTo === "string" && ctxPayload.OriginatingTo.trim() ? ctxPayload.OriginatingTo.trim() : void 0;
    const stableTo = ctxOriginatingTo ?? ctxTo ?? to;
    ctxPayload.To = stableTo;
    ctxPayload.OriginatingTo = stableTo;
    ctxPayload.SenderId = senderId;
    ctxPayload.SenderName = senderId;
    ctxPayload.ConversationLabel = fromLabel;
    const contextRunId = (() => {
      const candidates = ["RunId", "runId", "AgentRunId", "agentRunId"];
      for (const key of candidates) {
        const value = ctxPayload[key];
        if (typeof value === "string" && value.trim()) return value.trim();
      }
      return void 0;
    })();
    hooks.onRouteContext?.({
      sessionKey: route.sessionKey,
      runId: contextRunId
    });
    ctxPayload.CommandAuthorized = true;
    if (channel.session?.recordInboundSession && storePath) {
      const mainSessionKeyRaw = route?.mainSessionKey;
      const mainSessionKey = typeof mainSessionKeyRaw === "string" && mainSessionKeyRaw.trim() ? mainSessionKeyRaw : void 0;
      const recordSessionKeyRaw = ctxPayload.SessionKey ?? route.sessionKey;
      const recordSessionKey = typeof recordSessionKeyRaw === "string" && recordSessionKeyRaw.trim() ? recordSessionKeyRaw : route.sessionKey;
      await channel.session.recordInboundSession({
        storePath,
        sessionKey: recordSessionKey,
        ctx: ctxPayload,
        updateLastRoute: {
          sessionKey: mainSessionKey ?? route.sessionKey,
          channel: "wecom",
          to: stableTo,
          accountId: route.accountId ?? account.accountId
        },
        onRecordError: (err) => {
          logger.error(`wecom: failed updating session meta: ${String(err)}`);
        }
      });
    }
    const tableMode = channel.text?.resolveMarkdownTableMode ? channel.text.resolveMarkdownTableMode({ cfg: safeCfg, channel: "wecom", accountId: account.accountId }) : void 0;
    await channel.reply.dispatchReplyWithBufferedBlockDispatcher({
      ctx: ctxPayload,
      cfg: safeCfg,
      dispatcherOptions: {
        deliver: async (payload) => {
          const rawText = payload.text ?? "";
          const payloadMediaUrls = [
            ...Array.isArray(payload.mediaUrls) ? payload.mediaUrls : [],
            ...payload.mediaUrl ? [payload.mediaUrl] : []
          ].map((entry) => String(entry ?? "").trim()).filter(Boolean);
          if (!rawText.trim() && payloadMediaUrls.length === 0) return;
          const converted = channel.text?.convertMarkdownTables && tableMode ? channel.text.convertMarkdownTables(rawText, tableMode) : rawText;
          const normalized = await normalizeChunkForWecomStream({
            accountId: account.accountId,
            text: converted,
            payloadMediaUrls,
            log: logger
          });
          if (!normalized.trim()) return;
          await hooks.onChunk(normalized);
        },
        onError: (err, info) => {
          hooks.onError?.(err);
          logger.error(`${info.kind} reply failed: ${String(err)}`);
        }
      }
    });
  } finally {
  }
}
var MEDIA_DOWNLOAD_TIMEOUT = 6e4;
async function downloadAndDecryptMedia(params) {
  const { mediaUrl, encodingAESKey, fileName, log } = params;
  if (!mediaUrl) {
    throw new Error("mediaUrl is required");
  }
  if (!encodingAESKey) {
    throw new Error("encodingAESKey is required");
  }
  log?.debug?.(`[wecom] \u4E0B\u8F7D\u52A0\u5BC6\u5A92\u4F53\u6587\u4EF6: ${mediaUrl.slice(0, 100)}...`);
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), MEDIA_DOWNLOAD_TIMEOUT);
  let encryptedBuffer;
  let contentType = "application/octet-stream";
  let contentDisposition = null;
  try {
    const response = await fetch(mediaUrl, { signal: controller.signal });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    contentType = response.headers.get("content-type") || "application/octet-stream";
    contentDisposition = response.headers.get("content-disposition");
    const arrayBuffer = await response.arrayBuffer();
    encryptedBuffer = Buffer.from(arrayBuffer);
    log?.debug?.(`[wecom] \u4E0B\u8F7D\u5B8C\u6210: ${encryptedBuffer.length} \u5B57\u8282`);
  } catch (err) {
    if (err instanceof Error && err.name === "AbortError") {
      throw new Error(`\u5A92\u4F53\u4E0B\u8F7D\u8D85\u65F6\uFF08${MEDIA_DOWNLOAD_TIMEOUT}ms\uFF09`);
    }
    throw err;
  } finally {
    clearTimeout(timeoutId);
  }
  log?.debug?.(`[wecom] \u89E3\u5BC6\u5A92\u4F53\u6587\u4EF6...`);
  let decryptedBuffer;
  try {
    decryptedBuffer = decryptWecomMedia({
      encryptedBuffer,
      encodingAESKey
    });
    log?.debug?.(`[wecom] \u89E3\u5BC6\u5B8C\u6210: ${decryptedBuffer.length} \u5B57\u8282`);
  } catch (err) {
    throw new Error(`\u89E3\u5BC6\u5931\u8D25: ${err instanceof Error ? err.message : String(err)}`);
  }
  const sanitizeFileName = (input2) => {
    if (!input2) return void 0;
    const base = path3.basename(input2);
    const cleaned = base.replace(/[\\\/]+/g, "_").replace(/[\x00-\x1f\x7f]/g, "").trim();
    if (!cleaned || cleaned === "." || cleaned === "..") return void 0;
    return cleaned.length > 200 ? cleaned.slice(0, 200) : cleaned;
  };
  let originalFileName = sanitizeFileName(fileName);
  if (contentDisposition && !originalFileName) {
    const filenameMatch = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
    if (filenameMatch && filenameMatch[1]) {
      let headerFileName = filenameMatch[1].replace(/['"]/g, "");
      try {
        headerFileName = decodeURIComponent(headerFileName);
      } catch {
      }
      originalFileName = sanitizeFileName(headerFileName);
    }
  }
  let extension = "";
  if (originalFileName) {
    const lastDotIndex = originalFileName.lastIndexOf(".");
    if (lastDotIndex > 0) {
      extension = originalFileName.slice(lastDotIndex);
    }
  }
  if (!extension) {
    extension = resolveExtension(contentType);
  }
  const wecomDir = resolveWecomInboundMediaDir();
  await fsPromises.mkdir(wecomDir, { recursive: true });
  const baseFileName = originalFileName || `wecom-media`;
  const baseNameWithoutExt = baseFileName.replace(/\.[-.\w]+$/, "");
  const timestamp = Date.now();
  const safeFileName = `${baseNameWithoutExt}-${timestamp}${extension}`;
  const resolvedDir = path3.resolve(wecomDir);
  const resolvedPath = path3.resolve(wecomDir, safeFileName);
  if (!resolvedPath.startsWith(`${resolvedDir}${path3.sep}`) && resolvedPath !== resolvedDir) {
    throw new Error("Invalid media file path");
  }
  await fsPromises.writeFile(resolvedPath, decryptedBuffer);
  log?.debug?.(`[wecom] \u6587\u4EF6\u5DF2\u4FDD\u5B58: ${resolvedPath}`);
  return {
    path: resolvedPath,
    contentType,
    size: decryptedBuffer.length,
    fileName
  };
}
async function processMediaInMessage(params) {
  const { msg, encodingAESKey, log } = params;
  if (!encodingAESKey) {
    log?.debug?.(`[wecom] \u672A\u914D\u7F6E encodingAESKey\uFF0C\u8DF3\u8FC7\u5A92\u4F53\u89E3\u5BC6`);
    return { text: extractWecomContent(msg) };
  }
  const msgtype = String(msg.msgtype ?? "").toLowerCase();
  if (msgtype === "mixed") {
    const items = msg.mixed?.msg_item;
    if (Array.isArray(items)) {
      const processedParts = [];
      for (const item of items) {
        if (!item || typeof item !== "object") continue;
        const typed = item;
        const t = String(typed.msgtype ?? "").toLowerCase();
        if (t === "text") {
          const content = String(typed.text?.content ?? "");
          processedParts.push(content);
        } else if (t === "image") {
          const url = String(typed.image?.url ?? "").trim();
          if (url) {
            try {
              const mediaFile = await downloadAndDecryptMedia({
                mediaUrl: url,
                encodingAESKey,
                fileName: "image.jpg",
                log
              });
              processedParts.push(`[image] ${mediaFile.path}`);
            } catch (err) {
              log?.error?.(`[wecom] mixed\u6D88\u606F\u4E2D\u56FE\u7247\u4E0B\u8F7D\u89E3\u5BC6\u5931\u8D25: ${err}`);
              processedParts.push(`[image] ${url}`);
            }
          }
        } else if (t === "file") {
          const url = String(typed.file?.url ?? "").trim();
          const fileName = String(typed.file?.filename ?? "file.bin").trim();
          if (url) {
            try {
              const mediaFile = await downloadAndDecryptMedia({
                mediaUrl: url,
                encodingAESKey,
                fileName,
                log
              });
              processedParts.push(`[file] ${mediaFile.path}`);
            } catch (err) {
              log?.error?.(`[wecom] mixed\u6D88\u606F\u4E2D\u6587\u4EF6\u4E0B\u8F7D\u89E3\u5BC6\u5931\u8D25: ${err}`);
              processedParts.push(`[file] ${url}`);
            }
          }
        } else {
          processedParts.push(t ? `[${t}]` : "");
        }
      }
      return {
        text: processedParts.filter((p) => Boolean(p && p.trim())).join("\n")
      };
    }
    return { text: extractWecomContent(msg) };
  }
  if (msgtype === "image") {
    const url = String(msg.image?.url ?? "").trim();
    if (url) {
      try {
        const mediaFile = await downloadAndDecryptMedia({
          mediaUrl: url,
          encodingAESKey,
          fileName: "image.jpg",
          // 默认文件名
          log
        });
        return {
          text: `[image] ${mediaFile.path}`
        };
      } catch (err) {
        log?.error?.(`[wecom] \u56FE\u7247\u4E0B\u8F7D\u89E3\u5BC6\u5931\u8D25: ${err}`);
        return { text: extractWecomContent(msg) };
      }
    }
  }
  if (msgtype === "file") {
    const url = String(msg.file?.url ?? "").trim();
    const fileName = msg.file?.filename;
    if (url) {
      try {
        const mediaFile = await downloadAndDecryptMedia({
          mediaUrl: url,
          encodingAESKey,
          fileName,
          log
        });
        return {
          text: `[file] ${mediaFile.path}`
        };
      } catch (err) {
        log?.error?.(`[wecom] \u6587\u4EF6\u4E0B\u8F7D\u89E3\u5BC6\u5931\u8D25: ${err}`);
        return { text: extractWecomContent(msg) };
      }
    }
  }
  if (msgtype === "voice") {
    const url = String(msg.voice?.url ?? "").trim();
    if (url) {
      try {
        const mediaFile = await downloadAndDecryptMedia({
          mediaUrl: url,
          encodingAESKey,
          fileName: "voice.amr",
          // 默认文件名
          log
        });
        return {
          text: `[voice] ${mediaFile.path}`
        };
      } catch (err) {
        log?.error?.(`[wecom] \u8BED\u97F3\u4E0B\u8F7D\u89E3\u5BC6\u5931\u8D25: ${err}`);
        return { text: extractWecomContent(msg) };
      }
    }
  }
  return { text: extractWecomContent(msg) };
}

// src/runtime.ts
var runtime = null;
function setWecomRuntime(next) {
  runtime = next;
}
function getWecomRuntime() {
  if (!runtime) {
    throw new Error("WeCom runtime not initialized. Make sure the plugin is properly registered with Moltbot.");
  }
  return runtime;
}
function tryGetWecomRuntime() {
  return runtime;
}

// src/monitor.ts
var webhookTargets = /* @__PURE__ */ new Map();
var streams = /* @__PURE__ */ new Map();
var msgidToStreamId = /* @__PURE__ */ new Map();
var streamRouteBindings = /* @__PURE__ */ new Map();
var streamBySessionKey = /* @__PURE__ */ new Map();
var streamByRunId = /* @__PURE__ */ new Map();
var streamFinalizeTimers = /* @__PURE__ */ new Map();
var STREAM_TTL_MS = 10 * 60 * 1e3;
var STREAM_MAX_BYTES = 20480;
var INITIAL_STREAM_WAIT_MS = 800;
var STREAM_FINISH_GRACE_MS = 2500;
function normalizeWebhookPath(raw) {
  const trimmed = raw.trim();
  if (!trimmed) return "/";
  const withSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  if (withSlash.length > 1 && withSlash.endsWith("/")) return withSlash.slice(0, -1);
  return withSlash;
}
function normalizeToToken(raw) {
  const value = raw.trim();
  if (!value) return "";
  if (value.startsWith("user:")) {
    return `user:${value.slice("user:".length).trim().toLowerCase()}`;
  }
  if (value.startsWith("group:")) {
    return `group:${value.slice("group:".length).trim()}`;
  }
  return value;
}
function appendToStream(streamId, chunk) {
  const state = streams.get(streamId);
  if (!state || state.finished) return false;
  appendStreamContent(state, chunk);
  return true;
}
function pruneStreams() {
  const cutoff = Date.now() - STREAM_TTL_MS;
  for (const [id, state] of streams.entries()) {
    if (state.updatedAt < cutoff) {
      const timer = streamFinalizeTimers.get(id);
      if (timer) {
        clearTimeout(timer);
        streamFinalizeTimers.delete(id);
      }
      streams.delete(id);
      unbindActiveStream(id);
    }
  }
  for (const [msgid, id] of msgidToStreamId.entries()) {
    if (!streams.has(id)) {
      msgidToStreamId.delete(msgid);
    }
  }
}
function finalizeStreamNow(streamId) {
  const timer = streamFinalizeTimers.get(streamId);
  if (timer) {
    clearTimeout(timer);
    streamFinalizeTimers.delete(streamId);
  }
  const state = streams.get(streamId);
  if (!state) return;
  state.finished = true;
  state.updatedAt = Date.now();
  unbindActiveStream(streamId);
}
function scheduleStreamFinalize(streamId) {
  const existing = streamFinalizeTimers.get(streamId);
  if (existing) {
    clearTimeout(existing);
  }
  const timer = setTimeout(() => {
    finalizeStreamNow(streamId);
  }, STREAM_FINISH_GRACE_MS);
  streamFinalizeTimers.set(streamId, timer);
}
function truncateUtf8Bytes(text, maxBytes) {
  const buf = Buffer.from(text, "utf8");
  if (buf.length <= maxBytes) return text;
  const slice = buf.subarray(buf.length - maxBytes);
  return slice.toString("utf8");
}
function jsonOk(res, body) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end(JSON.stringify(body));
}
function extractXmlTag(xml, tag) {
  if (!xml || !tag) return void 0;
  const escapedTag = tag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`<${escapedTag}(?:\\s[^>]*)?>([\\s\\S]*?)</${escapedTag}>`, "i");
  const m = re.exec(xml);
  if (!m) return void 0;
  const body = m[1] ?? "";
  const cdata = /^<!\[CDATA\[([\s\S]*?)\]\]>$/i.exec(body.trim());
  if (cdata) return cdata[1] ?? "";
  return body;
}
function extractXmlTagAll(xml, tag) {
  if (!xml || !tag) return [];
  const escapedTag = tag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`<${escapedTag}(?:\\s[^>]*)?>([\\s\\S]*?)</${escapedTag}>`, "gi");
  const out = [];
  let m;
  while ((m = re.exec(xml)) !== null) {
    const body = m[1] ?? "";
    const cdata = /^<!\[CDATA\[([\s\S]*?)\]\]>$/i.exec(body.trim());
    out.push(cdata ? cdata[1] ?? "" : body);
  }
  return out;
}
function pickFirstNonEmpty(...values) {
  for (const value of values) {
    const trimmed = value?.trim();
    if (trimmed) return trimmed;
  }
  return "";
}
function parseXmlTextPayload(xml) {
  const textBlock = extractXmlTag(xml, "Text") ?? "";
  const content = pickFirstNonEmpty(
    extractXmlTag(textBlock, "Content"),
    extractXmlTag(xml, "Content")
  );
  if (!content) return void 0;
  return { content };
}
function parseXmlVoicePayload(xml) {
  const voiceBlock = extractXmlTag(xml, "Voice") ?? "";
  const content = pickFirstNonEmpty(
    extractXmlTag(voiceBlock, "Content"),
    extractXmlTag(voiceBlock, "Recognition"),
    extractXmlTag(xml, "Recognition"),
    extractXmlTag(xml, "Content")
  );
  const url = pickFirstNonEmpty(
    extractXmlTag(voiceBlock, "Url"),
    extractXmlTag(voiceBlock, "VoiceUrl"),
    extractXmlTag(xml, "VoiceUrl")
  );
  const mediaId = pickFirstNonEmpty(
    extractXmlTag(voiceBlock, "MediaId"),
    extractXmlTag(xml, "MediaId")
  );
  if (!content && !url && !mediaId) return void 0;
  const voice = {};
  if (content) voice.content = content;
  if (url) voice.url = url;
  if (mediaId) voice.media_id = mediaId;
  return voice;
}
function parseXmlImagePayload(xml) {
  const imageBlock = extractXmlTag(xml, "Image") ?? "";
  const url = pickFirstNonEmpty(
    extractXmlTag(imageBlock, "Url"),
    extractXmlTag(imageBlock, "PicUrl"),
    extractXmlTag(xml, "PicUrl"),
    extractXmlTag(xml, "Url")
  );
  const mediaId = pickFirstNonEmpty(
    extractXmlTag(imageBlock, "MediaId"),
    extractXmlTag(xml, "MediaId")
  );
  if (!url && !mediaId) return void 0;
  const image = {};
  if (url) image.url = url;
  if (mediaId) image.media_id = mediaId;
  return image;
}
function parseXmlFilePayload(xml) {
  const fileBlock = extractXmlTag(xml, "File") ?? "";
  const url = pickFirstNonEmpty(
    extractXmlTag(fileBlock, "Url"),
    extractXmlTag(fileBlock, "FileUrl"),
    extractXmlTag(xml, "FileUrl"),
    extractXmlTag(xml, "Url")
  );
  const fileName = pickFirstNonEmpty(
    extractXmlTag(fileBlock, "FileName"),
    extractXmlTag(fileBlock, "Name"),
    extractXmlTag(xml, "FileName")
  );
  const mediaId = pickFirstNonEmpty(
    extractXmlTag(fileBlock, "MediaId"),
    extractXmlTag(xml, "MediaId")
  );
  if (!url && !fileName && !mediaId) return void 0;
  const file = {};
  if (url) file.url = url;
  if (fileName) file.filename = fileName;
  if (mediaId) file.media_id = mediaId;
  return file;
}
function parseXmlMixedItems(xml) {
  const mixedBlock = extractXmlTag(xml, "Mixed");
  if (!mixedBlock) return [];
  const itemBlocks = [
    ...extractXmlTagAll(mixedBlock, "MsgItem"),
    ...extractXmlTagAll(mixedBlock, "msg_item")
  ];
  if (itemBlocks.length === 0) return [];
  const items = [];
  for (const itemBlock of itemBlocks) {
    const itemType = pickFirstNonEmpty(
      extractXmlTag(itemBlock, "MsgType"),
      extractXmlTag(itemBlock, "msgtype"),
      extractXmlTag(itemBlock, "Type")
    ).toLowerCase();
    if (!itemType) continue;
    if (itemType === "text") {
      const text = parseXmlTextPayload(itemBlock);
      items.push({ msgtype: "text", text: text ?? { content: "" } });
      continue;
    }
    if (itemType === "image") {
      const image = parseXmlImagePayload(itemBlock);
      if (image) items.push({ msgtype: "image", image });
      else items.push({ msgtype: "image" });
      continue;
    }
    if (itemType === "file") {
      const file = parseXmlFilePayload(itemBlock);
      if (file) items.push({ msgtype: "file", file });
      else items.push({ msgtype: "file" });
      continue;
    }
    if (itemType === "voice") {
      const voice = parseXmlVoicePayload(itemBlock);
      if (voice) items.push({ msgtype: "voice", voice });
      else items.push({ msgtype: "voice" });
      continue;
    }
    items.push({ msgtype: itemType });
  }
  return items;
}
async function readRequestBody(req, maxBytes) {
  const chunks = [];
  let total = 0;
  return await new Promise((resolve3) => {
    req.on("data", (chunk) => {
      total += chunk.length;
      if (total > maxBytes) {
        resolve3({ ok: false, error: "payload too large" });
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => {
      try {
        const raw = Buffer.concat(chunks).toString("utf8");
        if (!raw.trim()) {
          resolve3({ ok: false, error: "empty payload" });
          return;
        }
        const trimmed = raw.trim();
        if (trimmed.startsWith("<")) {
          const encrypt = pickFirstNonEmpty(extractXmlTag(trimmed, "Encrypt"));
          if (encrypt) {
            resolve3({ ok: true, value: { Encrypt: encrypt }, raw });
          } else {
            resolve3({ ok: false, raw, error: "xml body missing Encrypt tag" });
          }
          return;
        }
        resolve3({ ok: true, value: JSON.parse(raw), raw });
      } catch (err) {
        resolve3({ ok: false, error: err instanceof Error ? err.message : String(err) });
      }
    });
    req.on("error", (err) => {
      resolve3({ ok: false, error: err instanceof Error ? err.message : String(err) });
    });
  });
}
function buildEncryptedJsonReply(params) {
  const plaintext = JSON.stringify(params.plaintextJson ?? {});
  const encrypt = encryptWecomPlaintext({
    encodingAESKey: params.account.encodingAESKey ?? "",
    receiveId: params.account.receiveId ?? "",
    plaintext
  });
  const msgsignature = computeWecomMsgSignature({
    token: params.account.token ?? "",
    timestamp: params.timestamp,
    nonce: params.nonce,
    encrypt
  });
  return {
    encrypt,
    msgsignature,
    timestamp: params.timestamp,
    nonce: params.nonce
  };
}
function resolveQueryParams(req) {
  const url = new URL(req.url ?? "/", "http://localhost");
  return url.searchParams;
}
function resolvePath(req) {
  const url = new URL(req.url ?? "/", "http://localhost");
  return normalizeWebhookPath(url.pathname || "/");
}
function resolveSignatureParam(params) {
  return params.get("msg_signature") ?? params.get("msgsignature") ?? params.get("signature") ?? "";
}
function buildStreamPlaceholderReply(streamId) {
  return {
    msgtype: "stream",
    stream: {
      id: streamId,
      finish: false,
      content: "\u7A0D\u7B49~"
    }
  };
}
function buildStreamReplyFromState(state) {
  const content = truncateUtf8Bytes(state.content, STREAM_MAX_BYTES);
  const stream = {
    id: state.streamId,
    finish: state.finished
  };
  if (content.trim()) {
    stream.content = content;
  }
  return {
    msgtype: "stream",
    stream
  };
}
function createStreamId() {
  return crypto.randomBytes(16).toString("hex");
}
function parseWecomPlainMessage(raw) {
  const trimmed = raw.trim();
  if (trimmed.startsWith("<")) {
    return parseWecomXmlMessage(trimmed);
  }
  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") {
      return {};
    }
    return parsed;
  } catch {
    return parseWecomXmlMessage(trimmed);
  }
}
function parseWecomXmlMessage(xml) {
  const msgtype = pickFirstNonEmpty(
    extractXmlTag(xml, "MsgType"),
    extractXmlTag(xml, "msgtype")
  ).toLowerCase();
  const chattype = pickFirstNonEmpty(
    extractXmlTag(xml, "ChatType"),
    extractXmlTag(xml, "chattype")
  ).toLowerCase();
  const chatid = pickFirstNonEmpty(
    extractXmlTag(xml, "ChatId"),
    extractXmlTag(xml, "chatid")
  );
  const msgid = pickFirstNonEmpty(
    extractXmlTag(xml, "MsgId"),
    extractXmlTag(xml, "msgid")
  );
  const webhookUrl = pickFirstNonEmpty(
    extractXmlTag(xml, "WebhookUrl"),
    extractXmlTag(xml, "response_url")
  );
  const fromBlock = extractXmlTag(xml, "From") ?? "";
  const userid = pickFirstNonEmpty(
    extractXmlTag(fromBlock, "UserId"),
    extractXmlTag(xml, "FromUserName"),
    extractXmlTag(xml, "UserId")
  );
  const result = {
    msgtype,
    chattype: chattype === "group" ? "group" : "single",
    chatid,
    msgid,
    from: { userid }
  };
  if (webhookUrl) {
    result.response_url = webhookUrl;
  }
  if (msgtype === "text") {
    result.text = parseXmlTextPayload(xml) ?? { content: "" };
  } else if (msgtype === "voice") {
    result.voice = parseXmlVoicePayload(xml) ?? { content: "" };
  } else if (msgtype === "image") {
    const image = parseXmlImagePayload(xml);
    if (image) result.image = image;
  } else if (msgtype === "file") {
    const file = parseXmlFilePayload(xml);
    if (file) result.file = file;
  } else if (msgtype === "stream") {
    const streamBlock = extractXmlTag(xml, "Stream") ?? "";
    const id = pickFirstNonEmpty(
      extractXmlTag(streamBlock, "Id"),
      extractXmlTag(xml, "StreamId"),
      extractXmlTag(xml, "Id")
    );
    result.stream = { id };
  } else if (msgtype === "event") {
    const eventBlock = extractXmlTag(xml, "Event") ?? "";
    const eventtype = pickFirstNonEmpty(
      extractXmlTag(eventBlock, "EventType"),
      extractXmlTag(xml, "EventType"),
      extractXmlTag(xml, "Event")
    );
    result.event = { eventtype };
  } else if (msgtype === "mixed") {
    const mixedItems = parseXmlMixedItems(xml);
    if (mixedItems.length > 0) {
      result.mixed = { msg_item: mixedItems };
    }
    const text = parseXmlTextPayload(xml);
    if (text) {
      result.text = text;
    }
  }
  return result;
}
async function waitForStreamContent(streamId, maxWaitMs) {
  const startedAt = Date.now();
  await new Promise((resolve3) => {
    const tick = () => {
      const state = streams.get(streamId);
      if (!state) return resolve3();
      if (state.error || state.finished || state.content.trim()) return resolve3();
      if (Date.now() - startedAt >= maxWaitMs) return resolve3();
      setTimeout(tick, 25);
    };
    tick();
  });
}
function appendStreamContent(state, nextText) {
  const content = state.content ? `${state.content}

${nextText}`.trim() : nextText.trim();
  state.content = truncateUtf8Bytes(content, STREAM_MAX_BYTES);
  state.updatedAt = Date.now();
  if (streamFinalizeTimers.has(state.streamId)) {
    scheduleStreamFinalize(state.streamId);
  }
}
function listActiveStreamIdsByTo(to) {
  const normalized = normalizeToToken(to);
  if (!normalized) return [];
  const ids = [];
  for (const [id, state] of streams.entries()) {
    if (state.finished) continue;
    if (normalizeToToken(state.to ?? "") !== normalized) continue;
    ids.push(id);
  }
  return ids;
}
function pickNewestStreamId(streamIds) {
  let selected;
  for (const id of streamIds) {
    const state = streams.get(id);
    if (!state || state.finished) continue;
    if (!selected || state.updatedAt > selected.updatedAt || state.updatedAt === selected.updatedAt && state.createdAt > selected.createdAt) {
      selected = { id, updatedAt: state.updatedAt, createdAt: state.createdAt };
    }
  }
  return selected?.id;
}
function bindStreamRouteContext(params) {
  const streamId = params.streamId.trim();
  if (!streamId) return;
  const sessionKey = params.sessionKey?.trim();
  const runId = params.runId?.trim();
  const current = streamRouteBindings.get(streamId) ?? {};
  const next = {
    sessionKey: sessionKey || current.sessionKey,
    runId: runId || current.runId
  };
  streamRouteBindings.set(streamId, next);
  if (next.sessionKey) {
    streamBySessionKey.set(next.sessionKey, streamId);
  }
  if (next.runId) {
    streamByRunId.set(next.runId, streamId);
  }
}
function unbindActiveStream(streamId) {
  const timer = streamFinalizeTimers.get(streamId);
  if (timer) {
    clearTimeout(timer);
    streamFinalizeTimers.delete(streamId);
  }
  const routeBinding = streamRouteBindings.get(streamId);
  if (routeBinding?.sessionKey && streamBySessionKey.get(routeBinding.sessionKey) === streamId) {
    streamBySessionKey.delete(routeBinding.sessionKey);
  }
  if (routeBinding?.runId && streamByRunId.get(routeBinding.runId) === streamId) {
    streamByRunId.delete(routeBinding.runId);
  }
  streamRouteBindings.delete(streamId);
}
function appendWecomActiveStreamChunk(params) {
  const chunk = params.chunk.trim();
  if (!chunk) return false;
  const to = normalizeToToken(params.to);
  if (!to) return false;
  const runId = params.runId?.trim();
  const sessionKey = params.sessionKey?.trim();
  if (runId) {
    const streamId = streamByRunId.get(runId);
    if (streamId && appendToStream(streamId, chunk)) return true;
    if (sessionKey) {
      const sessionStreamId = streamBySessionKey.get(sessionKey);
      if (sessionStreamId && appendToStream(sessionStreamId, chunk)) {
        bindStreamRouteContext({
          streamId: sessionStreamId,
          sessionKey,
          runId
        });
        console.warn(
          `[wecom] append stream chunk recovered run binding by sessionKey: runId=${runId}, sessionKey=${sessionKey}`
        );
        return true;
      }
    }
    const toCandidates2 = listActiveStreamIdsByTo(to);
    if (toCandidates2.length === 1) {
      console.warn(`[wecom] append stream chunk fallback by to after runId miss: runId=${runId}, to=${to}`);
      return appendToStream(toCandidates2[0], chunk);
    }
    if (toCandidates2.length > 1) {
      const newest = pickNewestStreamId(toCandidates2);
      if (newest) {
        console.warn(
          `[wecom] append stream chunk fallback by newest to after runId miss: runId=${runId}, to=${to}, candidates=${toCandidates2.length}`
        );
        return appendToStream(newest, chunk);
      }
    }
    return false;
  }
  if (sessionKey) {
    const streamId = streamBySessionKey.get(sessionKey);
    if (streamId && appendToStream(streamId, chunk)) return true;
  }
  const toCandidates = listActiveStreamIdsByTo(to);
  if (toCandidates.length === 1) {
    console.warn(`[wecom] append stream chunk fallback by to without context: to=${to}`);
    return appendToStream(toCandidates[0], chunk);
  }
  if (toCandidates.length > 1) {
    const newest = pickNewestStreamId(toCandidates);
    if (newest) {
      console.warn(
        `[wecom] append stream chunk fallback by newest to without context: to=${to}, candidates=${toCandidates.length}`
      );
      return appendToStream(newest, chunk);
    }
  }
  return false;
}
function buildLogger(target) {
  return createLogger("wecom", {
    log: target.runtime.log,
    error: target.runtime.error
  });
}
function registerWecomWebhookTarget(target) {
  const key = normalizeWebhookPath(target.path);
  const normalizedTarget = { ...target, path: key };
  const existing = webhookTargets.get(key) ?? [];
  const next = [...existing, normalizedTarget];
  webhookTargets.set(key, next);
  return () => {
    const updated = (webhookTargets.get(key) ?? []).filter((entry) => entry !== normalizedTarget);
    if (updated.length > 0) webhookTargets.set(key, updated);
    else webhookTargets.delete(key);
  };
}
async function handleWecomWebhookRequest(req, res) {
  pruneStreams();
  if (await handleTempMediaRequest(req, res)) {
    return true;
  }
  const path5 = resolvePath(req);
  const targets = webhookTargets.get(path5);
  if (!targets || targets.length === 0) return false;
  const query = resolveQueryParams(req);
  const timestamp = query.get("timestamp") ?? "";
  const nonce = query.get("nonce") ?? "";
  const signature = resolveSignatureParam(query);
  const primary = targets[0];
  const logger = buildLogger(primary);
  logger.debug(`incoming ${req.method} request on ${path5} (timestamp=${timestamp}, nonce=${nonce})`);
  if (req.method === "GET") {
    const echostr = query.get("echostr") ?? "";
    if (!timestamp || !nonce || !signature || !echostr) {
      res.statusCode = 400;
      res.end("missing query params");
      return true;
    }
    const target2 = targets.find((candidate) => {
      if (!candidate.account.configured || !candidate.account.token) {
        return false;
      }
      const ok = verifyWecomSignature({
        token: candidate.account.token,
        timestamp,
        nonce,
        encrypt: echostr,
        signature
      });
      return ok;
    });
    if (!target2 || !target2.account.encodingAESKey) {
      res.statusCode = 401;
      res.end("unauthorized");
      return true;
    }
    try {
      const plain2 = decryptWecomEncrypted({
        encodingAESKey: target2.account.encodingAESKey,
        receiveId: target2.account.receiveId,
        encrypt: echostr
      });
      rememberAccountPublicBaseUrl(target2.account.accountId, req);
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.end(plain2);
      return true;
    } catch (err) {
      const msg2 = err instanceof Error ? err.message : String(err);
      res.statusCode = 400;
      res.end(msg2 || "decrypt failed");
      return true;
    }
  }
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Allow", "GET, POST");
    res.end("Method Not Allowed");
    return true;
  }
  if (!timestamp || !nonce || !signature) {
    res.statusCode = 400;
    res.end("missing query params");
    return true;
  }
  const body = await readRequestBody(req, 1024 * 1024);
  if (!body.ok) {
    res.statusCode = body.error === "payload too large" ? 413 : 400;
    res.end(body.error ?? "invalid payload");
    return true;
  }
  const record = body.value && typeof body.value === "object" ? body.value : null;
  const encrypt = record ? String(record.encrypt ?? record.Encrypt ?? "") : "";
  if (!encrypt) {
    res.statusCode = 400;
    res.end("missing encrypt");
    return true;
  }
  const target = targets.find((candidate) => {
    if (!candidate.account.token) {
      return false;
    }
    const ok = verifyWecomSignature({
      token: candidate.account.token,
      timestamp,
      nonce,
      encrypt,
      signature
    });
    return ok;
  });
  if (!target) {
    res.statusCode = 401;
    res.end("unauthorized");
    return true;
  }
  rememberAccountPublicBaseUrl(target.account.accountId, req);
  if (!target.account.configured || !target.account.token || !target.account.encodingAESKey) {
    res.statusCode = 500;
    res.end("wecom not configured");
    return true;
  }
  let plain;
  try {
    plain = decryptWecomEncrypted({
      encodingAESKey: target.account.encodingAESKey,
      receiveId: target.account.receiveId,
      encrypt
    });
  } catch (err) {
    const msg2 = err instanceof Error ? err.message : String(err);
    res.statusCode = 400;
    res.end(msg2 || "decrypt failed");
    return true;
  }
  const msg = parseWecomPlainMessage(plain);
  target.statusSink?.({ lastInboundAt: Date.now() });
  const msgtype = String(msg.msgtype ?? "").toLowerCase();
  const msgid = msg.msgid ? String(msg.msgid) : void 0;
  if (msgtype === "stream") {
    const streamId2 = String(msg.stream?.id ?? "").trim();
    const state2 = streamId2 ? streams.get(streamId2) : void 0;
    const reply = state2 ? buildStreamReplyFromState(state2) : buildStreamReplyFromState({
      streamId: streamId2 || "unknown",
      finished: true,
      content: ""
    });
    const encReply2 = buildEncryptedJsonReply({
      account: target.account,
      plaintextJson: reply,
      nonce,
      timestamp
    });
    jsonOk(res, encReply2);
    return true;
  }
  if (msgid && msgidToStreamId.has(msgid)) {
    const streamId2 = msgidToStreamId.get(msgid) ?? "";
    const reply = buildStreamPlaceholderReply(streamId2);
    jsonOk(
      res,
      buildEncryptedJsonReply({
        account: target.account,
        plaintextJson: reply,
        nonce,
        timestamp
      })
    );
    return true;
  }
  if (msgtype === "event") {
    const eventtype = String(msg.event?.eventtype ?? "").toLowerCase();
    if (eventtype === "enter_chat") {
      const welcome = target.account.config.welcomeText?.trim();
      const reply = welcome ? { msgtype: "text", text: { content: welcome } } : {};
      jsonOk(
        res,
        buildEncryptedJsonReply({
          account: target.account,
          plaintextJson: reply,
          nonce,
          timestamp
        })
      );
      return true;
    }
    const core2 = tryGetWecomRuntime();
    if (core2) {
      dispatchWecomMessage({
        cfg: target.config,
        account: target.account,
        msg,
        core: core2,
        hooks: {
          onChunk: () => {
          },
          onError: (err) => {
            logger.error(`wecom event dispatch failed: ${String(err)}`);
          }
        },
        log: target.runtime.log,
        error: target.runtime.error
      }).catch((err) => {
        logger.error(`wecom event dispatch failed: ${String(err)}`);
      });
    }
    jsonOk(
      res,
      buildEncryptedJsonReply({
        account: target.account,
        plaintextJson: {},
        nonce,
        timestamp
      })
    );
    return true;
  }
  const streamId = createStreamId();
  if (msgid) msgidToStreamId.set(msgid, streamId);
  const senderId = String(msg.from?.userid ?? "").trim() || "unknown";
  const chatType = String(msg.chattype ?? "").toLowerCase() === "group" ? "group" : "single";
  const to = chatType === "group" ? `group:${String(msg.chatid ?? "").trim() || "unknown"}` : `user:${senderId}`;
  streams.set(streamId, {
    streamId,
    msgid,
    to: normalizeToToken(to),
    createdAt: Date.now(),
    updatedAt: Date.now(),
    started: false,
    finished: false,
    content: ""
  });
  const core = tryGetWecomRuntime();
  if (core) {
    const state2 = streams.get(streamId);
    if (state2) state2.started = true;
    let chunkFlush = Promise.resolve();
    const markStreamFinished = async (err) => {
      await chunkFlush.catch(() => void 0);
      const current = streams.get(streamId);
      if (!current) return;
      if (err) {
        current.error = err instanceof Error ? err.message : String(err);
        current.content = current.content || `Error: ${current.error}`;
      }
      current.updatedAt = Date.now();
      scheduleStreamFinalize(streamId);
    };
    const hooks = {
      onRouteContext: (context) => {
        bindStreamRouteContext({
          streamId,
          sessionKey: context.sessionKey,
          runId: context.runId
        });
      },
      onChunk: (text) => {
        chunkFlush = chunkFlush.then(async () => {
          const current = streams.get(streamId);
          if (!current) return;
          appendStreamContent(current, text);
          target.statusSink?.({ lastOutboundAt: Date.now() });
        });
        return chunkFlush;
      },
      onError: (err) => {
        chunkFlush = chunkFlush.then(async () => {
          const current = streams.get(streamId);
          if (current) {
            current.error = err instanceof Error ? err.message : String(err);
            current.content = current.content || `Error: ${current.error}`;
            current.updatedAt = Date.now();
          }
        });
        logger.error(`wecom agent failed: ${String(err)}`);
      }
    };
    dispatchWecomMessage({
      cfg: target.config,
      account: target.account,
      msg,
      core,
      hooks,
      log: target.runtime.log,
      error: target.runtime.error
    }).then(() => {
      void markStreamFinished();
    }).catch((err) => {
      void markStreamFinished(err);
      logger.error(`wecom agent failed: ${String(err)}`);
    });
  } else {
    const state2 = streams.get(streamId);
    if (state2) {
      state2.updatedAt = Date.now();
    }
    scheduleStreamFinalize(streamId);
  }
  await waitForStreamContent(streamId, INITIAL_STREAM_WAIT_MS);
  const state = streams.get(streamId);
  const initialReply = state && (state.content.trim() || state.error) ? buildStreamReplyFromState(state) : buildStreamPlaceholderReply(streamId);
  const encReply = buildEncryptedJsonReply({
    account: target.account,
    plaintextJson: initialReply,
    nonce,
    timestamp
  });
  jsonOk(res, encReply);
  return true;
}

// src/channel.ts
var BARE_USER_ID_RE = /^[a-z0-9][a-z0-9._@-]{0,63}$/;
var EXPLICIT_USER_ID_RE = /^[A-Za-z0-9][A-Za-z0-9._@-]{0,63}$/;
var GROUP_ID_RE = /^[A-Za-z0-9][A-Za-z0-9._:@-]{0,127}$/;
function looksLikeEmail(raw) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw.trim());
}
function parseDirectTarget(rawTarget) {
  let raw = String(rawTarget ?? "").trim();
  if (!raw) return null;
  if (raw.startsWith("wecom:")) {
    raw = raw.slice("wecom:".length);
  }
  let accountId;
  if (!looksLikeEmail(raw)) {
    const atIdx = raw.lastIndexOf("@");
    if (atIdx > 0 && atIdx < raw.length - 1) {
      const candidate = raw.slice(atIdx + 1);
      if (!/[:/]/.test(candidate)) {
        accountId = candidate;
        raw = raw.slice(0, atIdx);
      }
    }
  }
  if (raw.startsWith("chat:")) {
    raw = `group:${raw.slice(5)}`;
  }
  if (raw.startsWith("group:")) {
    const id2 = raw.slice(6).trim();
    if (!id2 || /\s/.test(id2) || !GROUP_ID_RE.test(id2)) return null;
    return { accountId, kind: "group", id: id2 };
  }
  const explicitUserPrefix = raw.startsWith("user:");
  if (explicitUserPrefix) raw = raw.slice(5);
  const id = raw.trim();
  if (!id || /\s/.test(id)) return null;
  if (!explicitUserPrefix && !BARE_USER_ID_RE.test(id)) return null;
  if (explicitUserPrefix && !EXPLICIT_USER_ID_RE.test(id)) return null;
  return { accountId, kind: "user", id };
}
function isHttpUrl3(value) {
  return /^https?:\/\//i.test(value.trim());
}
function normalizeLocalPath2(raw) {
  const trimmed = raw.trim();
  if (trimmed.startsWith("file://")) {
    return decodeURIComponent(trimmed.slice("file://".length));
  }
  return trimmed;
}
async function ensureReadableFile(filePath) {
  await access(filePath);
}
function detectOutboundMediaType(mediaUrl, mimeType) {
  const mime = String(mimeType ?? "").split(";")[0].trim().toLowerCase();
  if (mime.startsWith("image/")) return "image";
  const ext = path3__default.extname(mediaUrl.split("?")[0] ?? "").toLowerCase();
  if ([".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp"].includes(ext)) {
    return "image";
  }
  return "file";
}
function buildMediaMarkdown(params) {
  const parts = [];
  const caption = params.caption?.trim();
  if (caption) {
    parts.push(caption);
  }
  if (params.mediaType === "image") {
    parts.push(`![](${params.mediaUrl})`);
  } else {
    parts.push(`[\u4E0B\u8F7D\u6587\u4EF6](${params.mediaUrl})`);
  }
  return parts.join("\n\n").trim();
}
function resolveReplyTargetToken(parsed) {
  return `${parsed.kind}:${parsed.id}`;
}
function resolveStreamContext(params) {
  if (!params || typeof params !== "object") return {};
  const maybe = params;
  const sessionKey = typeof maybe.sessionKey === "string" ? maybe.sessionKey.trim() : "";
  const runId = typeof maybe.runId === "string" ? maybe.runId.trim() : "";
  return {
    sessionKey: sessionKey || void 0,
    runId: runId || void 0
  };
}
async function postWecomResponse(responseUrl, payload) {
  const body = JSON.stringify(payload);
  const response = await fetch(responseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body
  });
  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`WeCom response_url send failed: HTTP ${response.status} ${text}`.trim());
  }
}
function formatError(err) {
  if (err instanceof Error) return err.message;
  return String(err);
}
var meta = {
  id: "wecom",
  label: "WeCom",
  selectionLabel: "WeCom (\u4F01\u4E1A\u5FAE\u4FE1)",
  docsPath: "/channels/wecom",
  docsLabel: "wecom",
  blurb: "\u4F01\u4E1A\u5FAE\u4FE1\u667A\u80FD\u673A\u5668\u4EBA\u56DE\u8C03",
  aliases: ["wechatwork", "wework", "qywx", "\u4F01\u5FAE", "\u4F01\u4E1A\u5FAE\u4FE1"],
  order: 85
};
var unregisterHooks = /* @__PURE__ */ new Map();
var wecomPlugin = {
  id: "wecom",
  meta: {
    ...meta
  },
  capabilities: {
    chatTypes: ["direct", "group"],
    media: true,
    reactions: false,
    threads: false,
    edit: false,
    reply: true,
    polls: false
  },
  messaging: {
    normalizeTarget: (raw) => {
      const parsed = parseDirectTarget(raw);
      if (!parsed) return void 0;
      return `${parsed.kind}:${parsed.id}${parsed.accountId ? `@${parsed.accountId}` : ""}`;
    },
    targetResolver: {
      looksLikeId: (raw, normalized) => {
        const candidate = (normalized ?? raw).trim();
        return Boolean(parseDirectTarget(candidate));
      },
      hint: "Use WeCom ids only: user:<userid> for DM, group:<chatid> for groups (optional @accountId)."
    },
    formatTargetDisplay: (params) => {
      const parsed = parseDirectTarget(params.target);
      if (!parsed) return params.display?.trim() || params.target;
      return `${parsed.kind}:${parsed.id}`;
    }
  },
  configSchema: WecomConfigJsonSchema,
  reload: { configPrefixes: ["channels.wecom"] },
  config: {
    listAccountIds: (cfg) => listWecomAccountIds(cfg),
    resolveAccount: (cfg, accountId) => resolveWecomAccount({ cfg, accountId }),
    defaultAccountId: (cfg) => resolveDefaultWecomAccountId(cfg),
    setAccountEnabled: (params) => {
      const accountId = params.accountId ?? DEFAULT_ACCOUNT_ID;
      const useAccount = Boolean(params.cfg.channels?.wecom?.accounts?.[accountId]);
      if (!useAccount) {
        return {
          ...params.cfg,
          channels: {
            ...params.cfg.channels,
            wecom: {
              ...params.cfg.channels?.wecom ?? {},
              enabled: params.enabled
            }
          }
        };
      }
      return {
        ...params.cfg,
        channels: {
          ...params.cfg.channels,
          wecom: {
            ...params.cfg.channels?.wecom ?? {},
            accounts: {
              ...params.cfg.channels?.wecom?.accounts ?? {},
              [accountId]: {
                ...params.cfg.channels?.wecom?.accounts?.[accountId] ?? {},
                enabled: params.enabled
              }
            }
          }
        }
      };
    },
    deleteAccount: (params) => {
      const accountId = params.accountId ?? DEFAULT_ACCOUNT_ID;
      const next = { ...params.cfg };
      const current = next.channels?.wecom;
      if (!current) return next;
      if (accountId === DEFAULT_ACCOUNT_ID) {
        const { accounts: _ignored, defaultAccount: _ignored2, ...rest } = current;
        next.channels = {
          ...next.channels,
          wecom: { ...rest, enabled: false }
        };
        return next;
      }
      const accounts = { ...current.accounts ?? {} };
      delete accounts[accountId];
      next.channels = {
        ...next.channels,
        wecom: {
          ...current,
          accounts: Object.keys(accounts).length > 0 ? accounts : void 0
        }
      };
      return next;
    },
    isConfigured: (account) => account.configured,
    describeAccount: (account) => ({
      accountId: account.accountId,
      name: account.name,
      enabled: account.enabled,
      configured: account.configured,
      webhookPath: account.config.webhookPath ?? "/wecom"
    }),
    resolveAllowFrom: (params) => {
      const account = resolveWecomAccount({ cfg: params.cfg, accountId: params.accountId });
      return resolveAllowFrom(account.config);
    },
    formatAllowFrom: (params) => params.allowFrom.map((entry) => String(entry).trim()).filter(Boolean).map((entry) => entry.toLowerCase())
  },
  groups: {
    resolveRequireMention: (params) => {
      const account = params.account ?? resolveWecomAccount({ cfg: params.cfg ?? {}, accountId: params.accountId });
      return resolveRequireMention(account.config);
    }
  },
  directory: {
    canResolve: (params) => Boolean(parseDirectTarget(params.target)),
    resolveTarget: (params) => {
      const parsed = parseDirectTarget(params.target);
      if (!parsed) return null;
      return { channel: "wecom", accountId: parsed.accountId, to: parsed.id };
    },
    resolveTargets: (params) => {
      const results = [];
      for (const target of params.targets) {
        const resolved = wecomPlugin.directory.resolveTarget({ cfg: params.cfg, target });
        if (resolved) results.push(resolved);
      }
      return results;
    },
    getTargetFormats: () => [
      "wecom:user:<userId>",
      "user:<userId>",
      "group:<chatId>",
      "<userid-lowercase>"
    ]
  },
  outbound: {
    deliveryMode: "direct",
    sendText: async (params) => {
      console.log(`[wecom] sendText called: to=${params.to}, textLen=${params.text.length}`);
      const account = resolveWecomAccount({ cfg: params.cfg, accountId: params.accountId });
      const parsed = parseDirectTarget(params.to);
      const streamContext = resolveStreamContext(params);
      if (!parsed) {
        const error2 = new Error(`Unsupported target for WeCom: ${params.to}`);
        console.error(`[wecom] sendText failed: ${error2.message}`);
        return {
          channel: "wecom",
          ok: false,
          messageId: "",
          error: error2
        };
      }
      console.log(
        `[wecom] sendText stream context: runId=${streamContext.runId ?? "-"}, sessionKey=${streamContext.sessionKey ?? "-"}`
      );
      const replyTarget = resolveReplyTargetToken(parsed);
      const streamAccepted = appendWecomActiveStreamChunk({
        accountId: account.accountId,
        to: replyTarget,
        chunk: params.text,
        sessionKey: streamContext.sessionKey,
        runId: streamContext.runId
      });
      if (streamAccepted) {
        return {
          channel: "wecom",
          ok: true,
          messageId: `stream:${Date.now()}`
        };
      }
      const error = new Error(
        `No active stream available for ${replyTarget}. WeCom message tool is stream-only in current mode.`
      );
      console.error(`[wecom] sendText failed: ${error.message}`);
      return {
        channel: "wecom",
        ok: false,
        messageId: "",
        error
      };
    },
    sendMedia: async (params) => {
      console.log(`[wecom] sendMedia called: to=${params.to}, mediaUrl=${params.mediaUrl}`);
      const account = resolveWecomAccount({ cfg: params.cfg, accountId: params.accountId });
      const parsed = parseDirectTarget(params.to);
      const streamContext = resolveStreamContext(params);
      if (!parsed) {
        const error = new Error(`Unsupported target for WeCom: ${params.to}`);
        console.error(`[wecom] sendMedia failed: ${error.message}`);
        return {
          channel: "wecom",
          ok: false,
          messageId: "",
          error
        };
      }
      console.log(
        `[wecom] sendMedia stream context: runId=${streamContext.runId ?? "-"}, sessionKey=${streamContext.sessionKey ?? "-"}`
      );
      try {
        let publicMediaUrl = params.mediaUrl.trim();
        if (!isHttpUrl3(publicMediaUrl)) {
          const localPath = normalizeLocalPath2(publicMediaUrl);
          await ensureReadableFile(localPath);
          const baseUrl = getAccountPublicBaseUrl(account.accountId);
          if (!baseUrl) {
            throw new Error(
              "No public base URL captured yet for this account. Send one inbound message first, then retry media reply."
            );
          }
          const temp = await registerTempLocalMedia({
            filePath: localPath,
            fileName: path3__default.basename(localPath)
          });
          publicMediaUrl = buildTempMediaUrl({
            baseUrl,
            id: temp.id,
            token: temp.token,
            fileName: temp.fileName
          });
        }
        const mediaType = detectOutboundMediaType(publicMediaUrl, params.mimeType);
        const markdown = buildMediaMarkdown({
          mediaUrl: publicMediaUrl,
          mediaType,
          caption: params.text
        });
        const replyTarget = resolveReplyTargetToken(parsed);
        const streamAccepted = appendWecomActiveStreamChunk({
          accountId: account.accountId,
          to: replyTarget,
          chunk: markdown,
          sessionKey: streamContext.sessionKey,
          runId: streamContext.runId
        });
        if (streamAccepted) {
          console.log(
            `[wecom] sendMedia success (stream append): type=${mediaType}, to=${replyTarget}`
          );
          return {
            channel: "wecom",
            ok: true,
            messageId: `stream:${Date.now()}`
          };
        }
        const error = new Error(
          `No active stream available for ${replyTarget}. WeCom message tool is stream-only in current mode.`
        );
        console.error(`[wecom] sendMedia failed: ${error.message}`);
        return {
          channel: "wecom",
          ok: false,
          messageId: "",
          error
        };
      } catch (err) {
        console.error(`[wecom] sendMedia failed: ${formatError(err)}`);
        return {
          channel: "wecom",
          ok: false,
          messageId: "",
          error: err instanceof Error ? err : new Error(String(err))
        };
      }
    },
    sendTemplateCard: async (params) => {
      console.log(`[wecom] sendTemplateCard called: to=${params.to}`);
      const account = resolveWecomAccount({ cfg: params.cfg, accountId: params.accountId });
      const parsed = parseDirectTarget(params.to);
      if (!parsed) {
        const error = new Error(`Unsupported target for WeCom: ${params.to}`);
        console.error(`[wecom] sendTemplateCard failed: ${error.message}`);
        return {
          channel: "wecom",
          ok: false,
          messageId: "",
          error
        };
      }
      if (parsed.kind !== "user") {
        const error = new Error("WeCom active template_card reply is only supported in single chat targets (user:<userid>).");
        console.error(`[wecom] sendTemplateCard failed: ${error.message}`);
        return {
          channel: "wecom",
          ok: false,
          messageId: "",
          error
        };
      }
      const responseUrl = consumeResponseUrl({
        accountId: account.accountId,
        to: resolveReplyTargetToken(parsed)
      });
      if (!responseUrl) {
        const error = new Error(
          `No response_url available for ${resolveReplyTargetToken(parsed)}. WeCom smart bot can only reply after inbound messages.`
        );
        console.error(`[wecom] sendTemplateCard failed: ${error.message}`);
        return {
          channel: "wecom",
          ok: false,
          messageId: "",
          error
        };
      }
      try {
        await postWecomResponse(responseUrl, {
          msgtype: "template_card",
          template_card: params.templateCard ?? {}
        });
        return {
          channel: "wecom",
          ok: true,
          messageId: `response:${Date.now()}`
        };
      } catch (err) {
        console.error(`[wecom] sendTemplateCard failed: ${formatError(err)}`);
        return {
          channel: "wecom",
          ok: false,
          messageId: "",
          error: err instanceof Error ? err : new Error(String(err))
        };
      }
    }
  },
  gateway: {
    startAccount: async (ctx) => {
      ctx.setStatus?.({ accountId: ctx.accountId });
      if (ctx.runtime) {
        const candidate = ctx.runtime;
        const hasRouting = Boolean(candidate.channel?.routing?.resolveAgentRoute);
        const hasReply = Boolean(candidate.channel?.reply?.dispatchReplyWithBufferedBlockDispatcher) || Boolean(candidate.channel?.reply?.dispatchReplyFromConfig);
        if (hasRouting && hasReply) {
          setWecomRuntime(ctx.runtime);
        }
      }
      const account = resolveWecomAccount({ cfg: ctx.cfg, accountId: ctx.accountId });
      if (!account.configured) {
        ctx.log?.info(`[wecom] account ${ctx.accountId} not configured; webhook not registered`);
        ctx.setStatus?.({ accountId: ctx.accountId, running: false, configured: false });
        return;
      }
      const path5 = (account.config.webhookPath ?? "/wecom").trim();
      const unregister = registerWecomWebhookTarget({
        account,
        config: ctx.cfg ?? {},
        runtime: {
          log: ctx.log?.info ?? console.log,
          error: ctx.log?.error ?? console.error
        },
        path: path5,
        statusSink: (patch) => ctx.setStatus?.({ accountId: ctx.accountId, ...patch })
      });
      const existing = unregisterHooks.get(ctx.accountId);
      if (existing) existing();
      unregisterHooks.set(ctx.accountId, unregister);
      ctx.log?.info(`[wecom] webhook registered at ${path5} for account ${ctx.accountId}`);
      ctx.setStatus?.({
        accountId: ctx.accountId,
        running: true,
        configured: true,
        webhookPath: path5,
        lastStartAt: Date.now()
      });
      try {
        await new Promise((resolve3) => {
          if (ctx.abortSignal?.aborted) {
            resolve3();
            return;
          }
          if (!ctx.abortSignal) {
            return;
          }
          ctx.abortSignal.addEventListener("abort", () => resolve3(), { once: true });
        });
      } finally {
        const current = unregisterHooks.get(ctx.accountId);
        if (current === unregister) {
          unregisterHooks.delete(ctx.accountId);
        }
        unregister();
        ctx.setStatus?.({ accountId: ctx.accountId, running: false, lastStopAt: Date.now() });
      }
    },
    stopAccount: async (ctx) => {
      const unregister = unregisterHooks.get(ctx.accountId);
      if (unregister) {
        unregister();
        unregisterHooks.delete(ctx.accountId);
      }
      ctx.setStatus?.({ accountId: ctx.accountId, running: false, lastStopAt: Date.now() });
    }
  }
};

// index.ts
function normalizeRoutePath(path5, fallback) {
  const trimmed = path5?.trim() ?? "";
  const candidate = trimmed || fallback;
  return candidate.startsWith("/") ? candidate : `/${candidate}`;
}
function collectWecomRoutePaths(config) {
  const routes = /* @__PURE__ */ new Set([normalizeRoutePath(config?.webhookPath, "/wecom"), "/wecom-media"]);
  for (const accountConfig of Object.values(config?.accounts ?? {})) {
    const customPath = accountConfig?.webhookPath?.trim();
    if (!customPath) continue;
    routes.add(normalizeRoutePath(customPath, "/wecom"));
  }
  return [...routes];
}
var plugin = {
  id: "wecom",
  name: "WeCom",
  description: "\u4F01\u4E1A\u5FAE\u4FE1\u667A\u80FD\u673A\u5668\u4EBA\u56DE\u8C03\u63D2\u4EF6",
  configSchema: {
    type: "object",
    additionalProperties: false,
    properties: {}
  },
  register(api) {
    registerChinaSetupCli(api, { channels: ["wecom"] });
    showChinaInstallHint(api);
    if (api.runtime) {
      setWecomRuntime(api.runtime);
    }
    api.registerChannel({ plugin: wecomPlugin });
    if (api.registerHttpRoute) {
      for (const path5 of collectWecomRoutePaths(api.config?.channels?.wecom)) {
        api.registerHttpRoute({
          path: path5,
          auth: "plugin",
          match: "prefix",
          handler: handleWecomWebhookRequest
        });
      }
    } else if (api.registerHttpHandler) {
      api.registerHttpHandler(handleWecomWebhookRequest);
    }
  }
};
var index_default = plugin;

export { DEFAULT_ACCOUNT_ID, index_default as default, getWecomRuntime, setWecomRuntime, wecomPlugin };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map