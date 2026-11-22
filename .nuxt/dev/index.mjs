import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestURL, getRequestHeader as getRequestHeader$1, getResponseHeader, getRequestHeaders as getRequestHeaders$1, setResponseHeaders as setResponseHeaders$1, setResponseStatus as setResponseStatus$1, send as send$1, setResponseHeader as setResponseHeader$1, getResponseStatus, createError, removeResponseHeader, appendResponseHeader as appendResponseHeader$1, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getRouterParam as getRouterParam$1, readBody as readBody$1, getQuery as getQuery$3 } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/nitropack/node_modules/h3/dist/index.mjs';
import { Server } from 'node:http';
import { resolve, dirname, join } from 'node:path';
import nodeCrypto from 'node:crypto';
import { parentPort, threadId } from 'node:worker_threads';
import { escapeHtml } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/@vue/shared/dist/shared.cjs.js';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, appendResponseHeader, defineEventHandler as defineEventHandler$1, createError as createError$1, getQuery as getQuery$2, readBody, getResponseStatusText, getResponseStatus as getResponseStatus$1 } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/@nuxt/nitro-server/node_modules/h3/dist/index.mjs';
import { withoutBase as withoutBase$1, withQuery as withQuery$1, joinURL as joinURL$1, joinRelativeURL, withTrailingSlash, getQuery as getQuery$1 } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/@nuxt/nitro-server/node_modules/ufo/dist/index.mjs';
import destr$2, { destr as destr$1 } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/@nuxt/nitro-server/node_modules/destr/dist/index.mjs';
import destr from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/nitropack/node_modules/destr/dist/index.mjs';
import { createHooks } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/nitropack/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/node-mock-http/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash as withLeadingSlash$1, withoutTrailingSlash as withoutTrailingSlash$1 } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/nitropack/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/unstorage/drivers/fs.mjs';
import { digest } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/ohash/dist/index.mjs';
import { klona } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/klona/dist/index.mjs';
import { defuFn } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/scule/dist/index.mjs';
import { getContext } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/nitropack/node_modules/unctx/dist/index.mjs';
import defu from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/nitropack/node_modules/defu/dist/defu.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/radix3/dist/index.mjs';
import { readFile } from 'node:fs/promises';
import consola from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/nitropack/node_modules/consola/dist/index.mjs';
import { ErrorParser } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/youch-core/build/index.js';
import { Youch } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/nitropack/node_modules/source-map/source-map.js';
import { getRequestURL as getRequestURL$1, getRequestHeader as getRequestHeader$2, getCookie, setCookie, sanitizeStatusCode, defineEventHandler as defineEventHandler$2, getRouterParam, createError as createError$2 } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/@nuxtjs/i18n/node_modules/h3/dist/index.mjs';
import { createDefu } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/@nuxtjs/i18n/node_modules/defu/dist/defu.mjs';
import { parsePath, withLeadingSlash, joinURL as joinURL$2, withoutTrailingSlash } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/@nuxtjs/i18n/node_modules/ufo/dist/index.mjs';
import { createRouterMatcher } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/@nuxtjs/i18n/node_modules/vue-router/vue-router.node.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { consola as consola$1 } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/@nuxt/nitro-server/node_modules/consola/dist/index.mjs';
import { stringify, uneval } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/devalue/index.js';
import { getContext as getContext$1 } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/@nuxt/nitro-server/node_modules/unctx/dist/index.mjs';
import { captureRawStackTrace, parseRawStackTrace } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/errx/dist/index.js';
import { isVNode, isRef, toValue } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/@nuxt/nitro-server/node_modules/vue/index.mjs';
import _wH6JrtIxmaSoA8lCPWFnE9z4lQeXW6H5z3l5aymEQw from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/@nuxt/vite-builder/dist/fix-stacktrace.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname as dirname$1, resolve as resolve$1 } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/pathe/dist/index.mjs';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/unhead/dist/server.mjs';
import { renderToString } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/@nuxt/nitro-server/node_modules/vue/server-renderer/index.mjs';
import { walkResolver } from 'file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/node_modules/unhead/dist/utils.mjs';

const serverAssets = [{"baseName":"server","dir":"/Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage$1 = createStorage({});

storage$1.mount('/assets', assets$1);

storage$1.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web","watchOptions":{"ignored":[null]}}));
storage$1.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/server","watchOptions":{"ignored":[null]}}));
storage$1.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/.nuxt"}));
storage$1.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/.nuxt/cache"}));
storage$1.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage$1, base) : storage$1;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/": {
        "prerender": true
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "i18n": {
      "baseUrl": "",
      "defaultLocale": "en",
      "rootRedirect": "",
      "redirectStatusCode": 302,
      "skipSettingLocaleOnNavigate": false,
      "locales": [
        {
          "code": "en",
          "language": ""
        },
        {
          "code": "fr",
          "language": ""
        },
        {
          "code": "ar",
          "language": ""
        }
      ],
      "detectBrowserLanguage": {
        "alwaysRedirect": false,
        "cookieCrossOrigin": false,
        "cookieDomain": "",
        "cookieKey": "i18n_redirected",
        "cookieSecure": false,
        "fallbackLocale": "",
        "redirectOn": "root",
        "useCookie": true
      },
      "experimental": {
        "localeDetector": "",
        "typedPages": true,
        "typedOptionsAndMessages": false,
        "alternateLinkCanonicalQueries": true,
        "devCache": false,
        "cacheLifetime": "",
        "stripMessagesPayload": false,
        "preload": false,
        "strictSeo": false,
        "nitroContextDetection": true,
        "httpCacheDuration": 10
      },
      "domainLocales": {
        "en": {
          "domain": ""
        },
        "fr": {
          "domain": ""
        },
        "ar": {
          "domain": ""
        }
      }
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

getContext("nitro-app", {
  asyncContext: false,
  AsyncLocalStorage: void 0
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

/**
* Nitro internal functions extracted from https://github.com/nitrojs/nitro/blob/v2/src/runtime/internal/utils.ts
*/
function isJsonRequest(event) {
	// If the client specifically requests HTML, then avoid classifying as JSON.
	if (hasReqHeader(event, "accept", "text/html")) {
		return false;
	}
	return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
	const value = getRequestHeader(event, name);
	return !!(value && typeof value === "string" && value.toLowerCase().includes(includes));
}

const iframeStorageBridge = (nonce) => `
(function () {
  const NONCE = ${JSON.stringify(nonce)};
  const memoryStore = Object.create(null);

  const post = (type, payload) => {
    window.parent.postMessage({ type, nonce: NONCE, ...payload }, '*');
  };

  const isValid = (data) => data && data.nonce === NONCE;

  const mockStorage = {
    getItem(key) {
      return Object.hasOwn(memoryStore, key)
        ? memoryStore[key]
        : null;
    },
    setItem(key, value) {
      const v = String(value);
      memoryStore[key] = v;
      post('storage-set', { key, value: v });
    },
    removeItem(key) {
      delete memoryStore[key];
      post('storage-remove', { key });
    },
    clear() {
      for (const key of Object.keys(memoryStore))
        delete memoryStore[key];
      post('storage-clear', {});
    },
    key(index) {
      const keys = Object.keys(memoryStore);
      return keys[index] ?? null;
    },
    get length() {
      return Object.keys(memoryStore).length;
    }
  };

  const defineLocalStorage = () => {
    try {
      Object.defineProperty(window, 'localStorage', {
        value: mockStorage,
        writable: false,
        configurable: true
      });
    } catch {
      window.localStorage = mockStorage;
    }
  };

  defineLocalStorage();

  window.addEventListener('message', (event) => {
    const data = event.data;
    if (!isValid(data) || data.type !== 'storage-sync-data') return;

    const incoming = data.data || {};
    for (const key of Object.keys(incoming))
      memoryStore[key] = incoming[key];

    if (typeof window.initTheme === 'function')
      window.initTheme();
    window.dispatchEvent(new Event('storage-ready'));
  });

  // Clipboard API is unavailable in data: URL iframe, so we use postMessage
  document.addEventListener('DOMContentLoaded', function() {
    window.copyErrorMessage = function(button) {
      post('clipboard-copy', { text: button.dataset.errorText });
      button.classList.add('copied');
      setTimeout(function() { button.classList.remove('copied'); }, 2000);
    };
  });

  post('storage-sync-request', {});
})();
`;
const parentStorageBridge = (nonce) => `
(function () {
  const host = document.querySelector('nuxt-error-overlay');
  if (!host) return;

  const NONCE = ${JSON.stringify(nonce)};
  const isValid = (data) => data && data.nonce === NONCE;

  // Handle clipboard copy from iframe
  window.addEventListener('message', function(e) {
    if (isValid(e) && e.data.type === 'clipboard-copy') {
      navigator.clipboard.writeText(e.data.text).catch(function() {});
    }
  });

  const collectLocalStorage = () => {
    const all = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k != null) all[k] = localStorage.getItem(k);
    }
    return all;
  };

  const attachWhenReady = () => {
    const root = host.shadowRoot;
    if (!root)
      return false;
    const iframe = root.getElementById('frame');
    if (!iframe || !iframe.contentWindow)
      return false;

    const handlers = {
      'storage-set': (d) => localStorage.setItem(d.key, d.value),
      'storage-remove': (d) => localStorage.removeItem(d.key),
      'storage-clear': () => localStorage.clear(),
      'storage-sync-request': () => {
        iframe.contentWindow.postMessage({
          type: 'storage-sync-data',
          data: collectLocalStorage(),
          nonce: NONCE
        }, '*');
      }
    };

    window.addEventListener('message', (event) => {
      const data = event.data;
      if (!isValid(data)) return;
      const fn = handlers[data.type];
      if (fn) fn(data);
    });

    return true;
  };

  if (attachWhenReady())
    return;

  const obs = new MutationObserver(() => {
    if (attachWhenReady())
      obs.disconnect();
  });

  obs.observe(host, { childList: true, subtree: true });
})();
`;
const errorCSS = `
:host {
  --preview-width: 240px;
  --preview-height: 180px;
  --base-width: 1200px;
  --base-height: 900px;
  --z-base: 999999998;
  --error-pip-left: auto;
  --error-pip-top: auto;
  --error-pip-right: 5px;
  --error-pip-bottom: 5px;
  --error-pip-origin: bottom right;
  --app-preview-left: auto;
  --app-preview-top: auto;
  --app-preview-right: 5px;
  --app-preview-bottom: 5px;
  all: initial;
  display: contents;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
#frame {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  border: none;
  z-index: var(--z-base);
}
#frame[inert] {
  left: var(--error-pip-left);
  top: var(--error-pip-top);
  right: var(--error-pip-right);
  bottom: var(--error-pip-bottom);
  width: var(--base-width);
  height: var(--base-height);
  transform: scale(calc(240 / 1200));
  transform-origin: var(--error-pip-origin);
  overflow: hidden;
  border-radius: calc(1200 * 8px / 240);
}
#preview {
  position: fixed;
  left: var(--app-preview-left);
  top: var(--app-preview-top);
  right: var(--app-preview-right);
  bottom: var(--app-preview-bottom);
  width: var(--preview-width);
  height: var(--preview-height);
  overflow: hidden;
  border-radius: 6px;
  pointer-events: none;
  z-index: var(--z-base);
  background: white;
  display: none;
}
#preview iframe {
  transform-origin: var(--error-pip-origin);
}
#frame:not([inert]) + #preview {
  display: block;
}
#toggle {
  position: fixed;
  left: var(--app-preview-left);
  top: var(--app-preview-top);
  right: calc(var(--app-preview-right) - 3px);
  bottom: calc(var(--app-preview-bottom) - 3px);
  width: var(--preview-width);
  height: var(--preview-height);
  background: none;
  border: 3px solid #00DC82;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s, box-shadow 0.2s;
  z-index: calc(var(--z-base) + 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
#toggle:hover,
#toggle:focus {
  opacity: 1;
  box-shadow: 0 0 20px rgba(0, 220, 130, 0.6);
}
#toggle:focus-visible {
  outline: 3px solid #00DC82;
  outline-offset: 0;
  box-shadow: 0 0 24px rgba(0, 220, 130, 0.8);
}
#frame[inert] ~ #toggle {
  left: var(--error-pip-left);
  top: var(--error-pip-top);
  right: calc(var(--error-pip-right) - 3px);
  bottom: calc(var(--error-pip-bottom) - 3px);
  cursor: grab;
}
:host(.dragging) #frame[inert] ~ #toggle {
  cursor: grabbing;
}
#frame:not([inert]) ~ #toggle,
#frame:not([inert]) + #preview {
  cursor: grab;
}
:host(.dragging-preview) #frame:not([inert]) ~ #toggle,
:host(.dragging-preview) #frame:not([inert]) + #preview {
  cursor: grabbing;
}

#pip-close {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  font-size: 16px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  pointer-events: auto;
}
#pip-close:focus-visible {
  outline: 2px solid #00DC82;
  outline-offset: 2px;
}

#pip-restore {
  position: fixed;
  right: 16px;
  bottom: 16px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 2px solid #00DC82;
  background: #111;
  color: #fff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  z-index: calc(var(--z-base) + 2);
  cursor: grab;
}
#pip-restore:focus-visible {
  outline: 2px solid #00DC82;
  outline-offset: 2px;
}
:host(.dragging-restore) #pip-restore {
  cursor: grabbing;
}

#frame[hidden],
#toggle[hidden],
#preview[hidden],
#pip-restore[hidden],
#pip-close[hidden] {
  display: none !important;
}

@media (prefers-reduced-motion: reduce) {
  #toggle {
    transition: none;
  }
}
`;
function webComponentScript(base64HTML, startMinimized) {
	return `
(function () {
  try {
    // =========================
    // Host + Shadow
    // =========================
    const host = document.querySelector('nuxt-error-overlay');
    if (!host)
      return;
    const shadow = host.attachShadow({ mode: 'open' });

    // =========================
    // DOM helpers
    // =========================
    const el = (tag) => document.createElement(tag);
    const on = (node, type, fn, opts) => node.addEventListener(type, fn, opts);
    const hide = (node, v) => node.toggleAttribute('hidden', !!v);
    const setVar = (name, value) => host.style.setProperty(name, value);
    const unsetVar = (name) => host.style.removeProperty(name);

    // =========================
    // Create DOM
    // =========================
    const style = el('style');
    style.textContent = ${JSON.stringify(errorCSS)};

    const iframe = el('iframe');
    iframe.id = 'frame';
    iframe.src = 'data:text/html;base64,${base64HTML}';
    iframe.title = 'Detailed error stack trace';
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-top-navigation-by-user-activation');

    const preview = el('div');
    preview.id = 'preview';

    const toggle = el('div');
    toggle.id = 'toggle';
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('role', 'button');
    toggle.setAttribute('tabindex', '0');
    toggle.innerHTML = '<span class="sr-only">Toggle detailed error view</span>';

    const liveRegion = el('div');
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.className = 'sr-only';

    const pipCloseButton = el('button');
    pipCloseButton.id = 'pip-close';
    pipCloseButton.setAttribute('type', 'button');
    pipCloseButton.setAttribute('aria-label', 'Hide error preview overlay');
    pipCloseButton.innerHTML = '&times;';
    pipCloseButton.hidden = true;
    toggle.appendChild(pipCloseButton);

    const pipRestoreButton = el('button');
    pipRestoreButton.id = 'pip-restore';
    pipRestoreButton.setAttribute('type', 'button');
    pipRestoreButton.setAttribute('aria-label', 'Show error overlay');
    pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error overlay</span>';
    pipRestoreButton.hidden = true;

    // Order matters: #frame + #preview adjacency
    shadow.appendChild(style);
    shadow.appendChild(liveRegion);
    shadow.appendChild(iframe);
    shadow.appendChild(preview);
    shadow.appendChild(toggle);
    shadow.appendChild(pipRestoreButton);

    // =========================
    // Constants / keys
    // =========================
    const POS_KEYS = {
      position: 'nuxt-error-overlay:position',
      hiddenPretty: 'nuxt-error-overlay:error-pip:hidden',
      hiddenPreview: 'nuxt-error-overlay:app-preview:hidden'
    };

    const CSS_VARS = {
      pip: {
        left: '--error-pip-left',
        top: '--error-pip-top',
        right: '--error-pip-right',
        bottom: '--error-pip-bottom'
      },
      preview: {
        left: '--app-preview-left',
        top: '--app-preview-top',
        right: '--app-preview-right',
        bottom: '--app-preview-bottom'
      }
    };

    const MIN_GAP = 5;
    const DRAG_THRESHOLD = 2;

    // =========================
    // Local storage safe access + state
    // =========================
    let storageReady = true;
    let isPrettyHidden = false;
    let isPreviewHidden = false;

    const safeGet = (k) => {
      try {
        return localStorage.getItem(k);
      } catch {
        return null;
      }
    };

    const safeSet = (k, v) => {
      if (!storageReady) 
        return;
      try {
        localStorage.setItem(k, v);
      } catch {}
    };

    // =========================
    // Sizing helpers
    // =========================
    const vvSize = () => {
      const v = window.visualViewport;
      return v ? { w: v.width, h: v.height } : { w: window.innerWidth, h: window.innerHeight };
    };

    const previewSize = () => {
      const styles = getComputedStyle(host);
      const w = parseFloat(styles.getPropertyValue('--preview-width')) || 240;
      const h = parseFloat(styles.getPropertyValue('--preview-height')) || 180;
      return { w, h };
    };

    const sizeForTarget = (target) => {
      if (!target)
        return previewSize();
      const rect = target.getBoundingClientRect();
      if (rect.width && rect.height)
        return { w: rect.width, h: rect.height };
      return previewSize();
    };

    // =========================
    // Dock model + offset/alignment calculations
    // =========================
    const dock = { edge: null, offset: null, align: null, gap: null };

    const maxOffsetFor = (edge, size) => {
      const vv = vvSize();
      if (edge === 'left' || edge === 'right')
        return Math.max(MIN_GAP, vv.h - size.h - MIN_GAP);
      return Math.max(MIN_GAP, vv.w - size.w - MIN_GAP);
    };

    const clampOffset = (edge, value, size) => {
      const max = maxOffsetFor(edge, size);
      return Math.min(Math.max(value, MIN_GAP), max);
    };

    const updateDockAlignment = (size) => {
      if (!dock.edge || dock.offset == null)
        return;
      const max = maxOffsetFor(dock.edge, size);
      if (dock.offset <= max / 2) {
        dock.align = 'start';
        dock.gap = dock.offset;
      } else {
        dock.align = 'end';
        dock.gap = Math.max(0, max - dock.offset);
      }
    };

    const appliedOffsetFor = (size) => {
      if (!dock.edge || dock.offset == null)
        return null;
      const max = maxOffsetFor(dock.edge, size);

      if (dock.align === 'end' && typeof dock.gap === 'number') {
        return clampOffset(dock.edge, max - dock.gap, size);
      }
      if (dock.align === 'start' && typeof dock.gap === 'number') {
        return clampOffset(dock.edge, dock.gap, size);
      }
      return clampOffset(dock.edge, dock.offset, size);
    };

    const nearestEdgeAt = (x, y) => {
      const { w, h } = vvSize();
      const d = { left: x, right: w - x, top: y, bottom: h - y };
      return Object.keys(d).reduce((a, b) => (d[a] < d[b] ? a : b));
    };

    const cornerDefaultDock = () => {
      const vv = vvSize();
      const size = previewSize();
      const offset = Math.max(MIN_GAP, vv.w - size.w - MIN_GAP);
      return { edge: 'bottom', offset };
    };

    const currentTransformOrigin = () => {
      if (!dock.edge) return null;
      if (dock.edge === 'left' || dock.edge === 'top')
        return 'top left';
      if (dock.edge === 'right')
        return 'top right';
      return 'bottom left';
    };

    // =========================
    // Persist / load dock
    // =========================
    const loadDock = () => {
      const raw = safeGet(POS_KEYS.position);
      if (!raw)
        return;
      try {
        const parsed = JSON.parse(raw);
        const { edge, offset, align, gap } = parsed || {};
        if (!['left', 'right', 'top', 'bottom'].includes(edge))
          return;
        if (typeof offset !== 'number')
          return;

        dock.edge = edge;
        dock.offset = clampOffset(edge, offset, previewSize());
        dock.align = align === 'start' || align === 'end' ? align : null;
        dock.gap = typeof gap === 'number' ? gap : null;

        if (!dock.align || dock.gap == null)
          updateDockAlignment(previewSize());
      } catch {}
    };

    const persistDock = () => {
      if (!dock.edge || dock.offset == null)
        return; 
      safeSet(POS_KEYS.position, JSON.stringify({
        edge: dock.edge,
        offset: dock.offset,
        align: dock.align,
        gap: dock.gap
      }));
    };

    // =========================
    // Apply dock
    // =========================
    const dockToVars = (vars) => ({
      set: (side, v) => host.style.setProperty(vars[side], v),
      clear: (side) => host.style.removeProperty(vars[side])
    });

    const dockToEl = (node) => ({
      set: (side, v) => { node.style[side] = v; },
      clear: (side) => { node.style[side] = ''; }
    });

    const applyDock = (target, size, opts) => {
      if (!dock.edge || dock.offset == null) {
        target.clear('left');
        target.clear('top');
        target.clear('right');
        target.clear('bottom');
        return;
      }

      target.set('left', 'auto');
      target.set('top', 'auto');
      target.set('right', 'auto');
      target.set('bottom', 'auto');

      const applied = appliedOffsetFor(size);

      if (dock.edge === 'left') {
        target.set('left', MIN_GAP + 'px');
        target.set('top', applied + 'px');
      } else if (dock.edge === 'right') {
        target.set('right', MIN_GAP + 'px');
        target.set('top', applied + 'px');
      } else if (dock.edge === 'top') {
        target.set('top', MIN_GAP + 'px');
        target.set('left', applied + 'px');
      } else {
        target.set('bottom', MIN_GAP + 'px');
        target.set('left', applied + 'px');
      }

      if (!opts || opts.persist !== false)
        persistDock();
    };

    const applyDockAll = (opts) => {
      applyDock(dockToVars(CSS_VARS.pip), previewSize(), opts);
      applyDock(dockToVars(CSS_VARS.preview), previewSize(), opts);
      applyDock(dockToEl(pipRestoreButton), sizeForTarget(pipRestoreButton), opts);
    };

    const repaintToDock = () => {
      if (!dock.edge || dock.offset == null)
        return;
      const origin = currentTransformOrigin();
      if (origin)
        setVar('--error-pip-origin', origin);
      else 
        unsetVar('--error-pip-origin');
      applyDockAll({ persist: false });
    };

    // =========================
    // Hidden state + UI
    // =========================
    const loadHidden = () => {
      const rawPretty = safeGet(POS_KEYS.hiddenPretty);
      if (rawPretty != null)
        isPrettyHidden = rawPretty === '1' || rawPretty === 'true';
      const rawPreview = safeGet(POS_KEYS.hiddenPreview);
      if (rawPreview != null)
        isPreviewHidden = rawPreview === '1' || rawPreview === 'true';
    };

    const setPrettyHidden = (v) => {
      isPrettyHidden = !!v;
      safeSet(POS_KEYS.hiddenPretty, isPrettyHidden ? '1' : '0');
      updateUI();
    };

    const setPreviewHidden = (v) => {
      isPreviewHidden = !!v;
      safeSet(POS_KEYS.hiddenPreview, isPreviewHidden ? '1' : '0');
      updateUI();
    };

    const isMinimized = () => iframe.hasAttribute('inert');

    const setMinimized = (v) => {
      if (v) {
        iframe.setAttribute('inert', '');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        iframe.removeAttribute('inert');
        toggle.setAttribute('aria-expanded', 'true');
      }
    };

    const setRestoreLabel = (kind) => {
      if (kind === 'pretty') {
        pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error overlay</span>';
        pipRestoreButton.setAttribute('aria-label', 'Show error overlay');
      } else {
        pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error page</span>';
        pipRestoreButton.setAttribute('aria-label', 'Show error page');
      }
    };

    const updateUI = () => {
      const minimized = isMinimized();
      const showPiP = minimized && !isPrettyHidden;
      const showPreview = !minimized && !isPreviewHidden;
      const pipHiddenByUser = minimized && isPrettyHidden;
      const previewHiddenByUser = !minimized && isPreviewHidden;
      const showToggle = minimized ? showPiP : showPreview;
      const showRestore = pipHiddenByUser || previewHiddenByUser;

      hide(iframe, pipHiddenByUser);
      hide(preview, !showPreview);
      hide(toggle, !showToggle);
      hide(pipCloseButton, !showToggle);
      hide(pipRestoreButton, !showRestore);

      pipCloseButton.setAttribute('aria-label', minimized ? 'Hide error overlay' : 'Hide error page preview');

      if (pipHiddenByUser)
        setRestoreLabel('pretty');
      else if (previewHiddenByUser)
        setRestoreLabel('preview');

      host.classList.toggle('pip-hidden', isPrettyHidden);
      host.classList.toggle('preview-hidden', isPreviewHidden);
    };

    // =========================
    // Preview snapshot
    // =========================
    const updatePreview = () => {
      try {
        let previewIframe = preview.querySelector('iframe');
        if (!previewIframe) {
          previewIframe = el('iframe');
          previewIframe.style.cssText = 'width: 1200px; height: 900px; transform: scale(0.2); transform-origin: top left; border: none;';
          previewIframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
          preview.appendChild(previewIframe);
        }

        const doctype = document.doctype ? '<!DOCTYPE ' + document.doctype.name + '>' : '';
        const cleanedHTML = document.documentElement.outerHTML
          .replace(/<nuxt-error-overlay[^>]*>.*?<\\/nuxt-error-overlay>/gs, '')
          .replace(/<script[^>]*>.*?<\\/script>/gs, '');

        const iframeDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(doctype + cleanedHTML);
        iframeDoc.close();
      } catch (err) {
        console.error('Failed to update preview:', err);
      }
    };

    // =========================
    // View toggling
    // =========================
    const toggleView = () => {
      if (isMinimized()) {
        updatePreview();
        setMinimized(false);
        liveRegion.textContent = 'Showing detailed error view';
        setTimeout(() => { 
          try { 
            iframe.contentWindow.focus();
          } catch {}
        }, 100);
      } else {
        setMinimized(true);
        liveRegion.textContent = 'Showing error page';
        repaintToDock();
        void iframe.offsetWidth;
      }
      updateUI();
    };

    // =========================
    // Dragging (unified, rAF throttled)
    // =========================
    let drag = null;
    let rafId = null;
    let suppressToggleClick = false;
    let suppressRestoreClick = false;

    const beginDrag = (e) => {
      if (drag) 
        return;

      if (!dock.edge || dock.offset == null) {
        const def = cornerDefaultDock();
        dock.edge = def.edge;
        dock.offset = def.offset;
        updateDockAlignment(previewSize());
      }

      const isRestoreTarget = e.currentTarget === pipRestoreButton;

      drag = {
        kind: isRestoreTarget ? 'restore' : (isMinimized() ? 'pip' : 'preview'),
        pointerId: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        lastX: e.clientX,
        lastY: e.clientY,
        moved: false,
        target: e.currentTarget
      };

      drag.target.setPointerCapture(e.pointerId);

      if (drag.kind === 'restore')
        host.classList.add('dragging-restore');
      else 
        host.classList.add(drag.kind === 'pip' ? 'dragging' : 'dragging-preview');

      e.preventDefault();
    };

    const moveDrag = (e) => {
      if (!drag || drag.pointerId !== e.pointerId)
        return;

      drag.lastX = e.clientX;
      drag.lastY = e.clientY;
      
      const dx = drag.lastX - drag.startX;
      const dy = drag.lastY - drag.startY;

      if (!drag.moved && (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD)) {
        drag.moved = true;
      }

      if (!drag.moved)
        return;
      if (rafId)
        return;

      rafId = requestAnimationFrame(() => {
        rafId = null;

        const edge = nearestEdgeAt(drag.lastX, drag.lastY);
        const size = sizeForTarget(drag.target);

        let offset;
        if (edge === 'left' || edge === 'right') {
          const top = drag.lastY - (size.h / 2);
          offset = clampOffset(edge, Math.round(top), size);
        } else {
          const left = drag.lastX - (size.w / 2);
          offset = clampOffset(edge, Math.round(left), size);
        }

        dock.edge = edge;
        dock.offset = offset;
        updateDockAlignment(size);

        const origin = currentTransformOrigin();
        setVar('--error-pip-origin', origin || 'bottom right');

        applyDockAll({ persist: false });
      });
    };

    const endDrag = (e) => {
      if (!drag || drag.pointerId !== e.pointerId)
        return;

      const endedKind = drag.kind;
      drag.target.releasePointerCapture(e.pointerId);

      if (endedKind === 'restore')
        host.classList.remove('dragging-restore');
      else 
        host.classList.remove(endedKind === 'pip' ? 'dragging' : 'dragging-preview');

      const didMove = drag.moved;
      drag = null;

      if (didMove) {
        persistDock();
        if (endedKind === 'restore')
          suppressRestoreClick = true;
        else 
          suppressToggleClick = true;
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const bindDragTarget = (node) => {
      on(node, 'pointerdown', beginDrag);
      on(node, 'pointermove', moveDrag);
      on(node, 'pointerup', endDrag);
      on(node, 'pointercancel', endDrag);
    };

    bindDragTarget(toggle);
    bindDragTarget(pipRestoreButton);

    // =========================
    // Events (toggle / close / restore)
    // =========================
    on(toggle, 'click', (e) => {
      if (suppressToggleClick) {
        e.preventDefault();
        suppressToggleClick = false;
        return;
      }
      toggleView();
    });

    on(toggle, 'keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleView();
      }
    });

    on(pipCloseButton, 'click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isMinimized())
        setPrettyHidden(true);
      else
        setPreviewHidden(true);
    });

    on(pipCloseButton, 'pointerdown', (e) => {
      e.stopPropagation();
    });

    on(pipRestoreButton, 'click', (e) => {
      if (suppressRestoreClick) {
        e.preventDefault();
        suppressRestoreClick = false;
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      if (isMinimized()) 
        setPrettyHidden(false);
      else 
        setPreviewHidden(false);
    });

    // =========================
    // Lifecycle: load / sync / repaint
    // =========================
    const loadState = () => {
      loadDock();
      loadHidden();

      if (isPrettyHidden && !isMinimized())
        setMinimized(true);

      updateUI();
      repaintToDock();
    };

    loadState();

    on(window, 'storage-ready', () => {
      storageReady = true;
      loadState();
    });

    const onViewportChange = () => repaintToDock();

    on(window, 'resize', onViewportChange);

    if (window.visualViewport) {
      on(window.visualViewport, 'resize', onViewportChange);
      on(window.visualViewport, 'scroll', onViewportChange);
    }

    // initial preview
    setTimeout(updatePreview, 100);

    // initial minimized option
    if (${startMinimized}) {
      setMinimized(true);
      repaintToDock();
      void iframe.offsetWidth;
      updateUI();
    }
  } catch (err) {
    console.error('Failed to initialize Nuxt error overlay:', err);
  }
})();
`;
}
function generateErrorOverlayHTML(html, options) {
	const nonce = Array.from(crypto.getRandomValues(new Uint8Array(16)), (b) => b.toString(16).padStart(2, "0")).join("");
	const errorPage = html.replace("<head>", `<head><script>${iframeStorageBridge(nonce)}<\/script>`);
	const base64HTML = Buffer.from(errorPage, "utf8").toString("base64");
	return `
    <script>${parentStorageBridge(nonce)}<\/script>
    <nuxt-error-overlay></nuxt-error-overlay>
    <script>${webComponentScript(base64HTML, options?.startMinimized ?? false)}<\/script>
  `;
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
	if (event.handled || isJsonRequest(event)) {
		// let Nitro handle JSON errors
		return;
	}
	// invoke default Nitro error handler (which will log appropriately if required)
	const defaultRes = await defaultHandler(error, event, { json: true });
	// let Nitro handle redirect if appropriate
	const status = error.status || error.statusCode || 500;
	if (status === 404 && defaultRes.status === 302) {
		setResponseHeaders(event, defaultRes.headers);
		setResponseStatus(event, defaultRes.status, defaultRes.statusText);
		return send(event, JSON.stringify(defaultRes.body, null, 2));
	}
	if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) {
		// normalize to string format expected by nuxt `error.vue`
		defaultRes.body.stack = defaultRes.body.stack.join("\n");
	}
	const errorObject = defaultRes.body;
	// remove proto/hostname/port from URL
	const url = new URL(errorObject.url);
	errorObject.url = withoutBase$1(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
	// add default server message (keep sanitized for unhandled errors)
	errorObject.message = error.unhandled ? errorObject.message || "Server Error" : error.message || errorObject.message || "Server Error";
	// we will be rendering this error internally so we can pass along the error.data safely
	errorObject.data ||= error.data;
	errorObject.statusText ||= error.statusText || error.statusMessage;
	delete defaultRes.headers["content-type"];
	delete defaultRes.headers["content-security-policy"];
	setResponseHeaders(event, defaultRes.headers);
	// Access request headers
	const reqHeaders = getRequestHeaders(event);
	// Detect to avoid recursion in SSR rendering of errors
	const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
	// HTML response (via SSR)
	const res = isRenderingError ? null : await useNitroApp().localFetch(withQuery$1(joinURL$1(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject), {
		headers: {
			...reqHeaders,
			"x-nuxt-error": "true"
		},
		redirect: "manual"
	}).catch(() => null);
	if (event.handled) {
		return;
	}
	// Fallback to static rendered error page
	if (!res) {
		const { template } = await Promise.resolve().then(function () { return error500; });
		{
			// TODO: Support `message` in template
			errorObject.description = errorObject.message;
		}
		setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
		return send(event, template(errorObject));
	}
	const html = await res.text();
	for (const [header, value] of res.headers.entries()) {
		if (header === "set-cookie") {
			appendResponseHeader(event, header, value);
			continue;
		}
		setResponseHeader(event, header, value);
	}
	setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
	if (!globalThis._importMeta_.test && typeof html === "string") {
		const prettyResponse = await defaultHandler(error, event, { json: false });
		if (typeof prettyResponse.body === "string") {
			return send(event, html.replace("</body>", `${generateErrorOverlayHTML(prettyResponse.body, { startMinimized: 300 <= status && status < 500 })}</body>`));
		}
	}
	return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    if (!event.node?.res.headersSent) {
      setResponseHeaders$1(event, res.headers);
    }
    setResponseStatus$1(event, res.status, res.statusText);
    return send$1(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json ?? !getRequestHeader$1(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders$1(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const parsed = await new ErrorParser().defineSourceLoader(sourceLoader).parse(error);
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
async function sourceLoader(frame) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const rawSourceMap = await readFile(`${frame.fileName}.map`, "utf8").catch(() => {
    });
    if (rawSourceMap) {
      const consumer = await new SourceMapConsumer(rawSourceMap);
      const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
      if (originalPosition.source && originalPosition.line) {
        frame.fileName = resolve(dirname(frame.fileName), originalPosition.source);
        frame.lineNumber = originalPosition.line;
        frame.columnNumber = originalPosition.column || 0;
      }
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const script = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _iZsu9XrWAnDBOQ9D7aeZwLuZel5waTX1HupZTMndoY = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

/*!
  * shared v11.3.2
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */
const _create = Object.create;
const create = (obj = null) => _create(obj);
/* eslint-enable */
/**
 * Useful Utilities By Evan you
 * Modified by kazuya kawaguchi
 * MIT License
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/index.ts
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/codeframe.ts
 */
const isArray = Array.isArray;
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isObject = (val) => val !== null && typeof val === 'object';
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);

const isNotObjectOrIsArray = (val) => !isObject(val) || isArray(val);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deepCopy(src, des) {
    // src and des should both be objects, and none of them can be a array
    if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
        throw new Error('Invalid value');
    }
    const stack = [{ src, des }];
    while (stack.length) {
        const { src, des } = stack.pop();
        // using `Object.keys` which skips prototype properties
        Object.keys(src).forEach(key => {
            if (key === '__proto__') {
                return;
            }
            // if src[key] is an object/array, set des[key]
            // to empty object/array to prevent setting by reference
            if (isObject(src[key]) && !isObject(des[key])) {
                des[key] = Array.isArray(src[key]) ? [] : create();
            }
            if (isNotObjectOrIsArray(des[key]) || isNotObjectOrIsArray(src[key])) {
                // replace with src[key] when:
                // src[key] or des[key] is not an object, or
                // src[key] or des[key] is an array
                des[key] = src[key];
            }
            else {
                // src[key] and des[key] are both objects, merge them
                stack.push({ src: src[key], des: des[key] });
            }
        });
    }
}

const __nuxtMock = { runWithContext: async (fn) => await fn() };
const merger = createDefu((obj, key, value) => {
  if (key === "messages" || key === "datetimeFormats" || key === "numberFormats") {
    obj[key] ??= create(null);
    deepCopy(value, obj[key]);
    return true;
  }
});
async function loadVueI18nOptions(vueI18nConfigs) {
  const nuxtApp = __nuxtMock;
  let vueI18nOptions = { messages: create(null) };
  for (const configFile of vueI18nConfigs) {
    const resolver = await configFile().then((x) => isModule(x) ? x.default : x);
    const resolved = isFunction(resolver) ? await nuxtApp.runWithContext(() => resolver()) : resolver;
    vueI18nOptions = merger(create(null), resolved, vueI18nOptions);
  }
  vueI18nOptions.fallbackLocale ??= false;
  return vueI18nOptions;
}
const isModule = (val) => toTypeString(val) === "[object Module]";
async function getLocaleMessages(locale, loader) {
  const nuxtApp = __nuxtMock;
  try {
    const getter = await nuxtApp.runWithContext(loader.load).then((x) => isModule(x) ? x.default : x);
    return isFunction(getter) ? await nuxtApp.runWithContext(() => getter(locale)) : getter;
  } catch (e) {
    throw new Error(`Failed loading locale (${locale}): ` + e.message);
  }
}
async function getLocaleMessagesMerged(locale, loaders = []) {
  const nuxtApp = __nuxtMock;
  const messages = await Promise.all(
    loaders.map((loader) => nuxtApp.runWithContext(() => getLocaleMessages(locale, loader)))
  );
  const merged = {};
  for (const message of messages) {
    deepCopy(message, merged);
  }
  return merged;
}

var seo$2 = {
	title: "Easy Inventory and Invoicing Management",
	description: "Manage your clients and products easily, generate quotes, orders and invoices with Mahalli - your all-in-one business solution."
};
var search$2 = "Search";
var routes$2 = {
	home: "Home",
	clients: "Clients",
	products: "Products",
	orders: "Orders",
	"delivery-notes": "Delivery notes",
	invoices: "Invoices",
	"credit-notes": "Credit notes",
	inventory: "Inventory",
	dashboard: "Dashboard",
	settings: "Settings",
	quotes: "Quotes",
	notifications: "Notifications"
};
var buttons$2 = {
	cancel: "Cancel",
	save: "Save",
	add: "Add",
	confirme: "Confirme",
	update: "Update {name}",
	"add-product": "Add a product",
	"toggle-create-client": "Add new client",
	"toggle-create-product": "Add new product",
	"toggle-create-order": "Add new order",
	"toggle-create-quote": "Add new quote",
	"toggle-create-invoice": "Add new invoice",
	"toggle-create-org": "Create an organisation",
	edit: "Edit",
	finalize: "Finalize",
	"add-payment": "Add payment",
	"delete": "Delete",
	print: "Print",
	"to-order": "Create order",
	"to-delivery-note": "Create delivery note",
	"to-invoice": "Create invoice",
	"go-to-order": "Go to order",
	"go-to-delivery-note": "Go to delivery note",
	"go-to-invoice": "Go to invoice",
	"create-invoice": "Create invoice",
	"create-credit-note": "Create credit note",
	"inventory-update": "Update inventory",
	"generate-invoice": "Generate invoice",
	"generate-order": "Generate order",
	"generate-quote": "Generate quote",
	"generate-delivery-note": "Generate delivery note",
	"generate-credit-note": "Generate credit note",
	create: "Create",
	creating: "Creating...",
	view: "View",
	close: "Close"
};
var translationTitle$2 = "Change Language";
var translationDescription$2 = "Choose the language you want to use across Mahalli.";
var filters$2 = {
	more: "More filters",
	"clear-all": "Clear all",
	from: "From",
	to: "To",
	min: "Min",
	max: "Max",
	required: "Required",
	"credit-only": "Clients with outstanding credit",
	"has-email": "Has email",
	"has-phone": "Has phone",
	"stock-status": "Stock status",
	"out-of-stock": "Out of stock",
	"low-stock": "Low stock",
	"healthy-stock": "Healthy stock",
	"search-by-field": "Search by field"
};
var columns$2 = {
	"show-hide": "Show/Hide Columns",
	all: "All"
};
var dropZone$2 = "Drag and drop or select";
var plrz$2 = {
	i: "no items |  item |  items",
	p: "no products |  product |  products"
};
var fields$2 = {
	"full-name": "Full name",
	name: "Name",
	email: "E-mail",
	phone: "Phoner number",
	address: "Address",
	actions: "Actions",
	identifier: "Identifier",
	columns: "Columns",
	description: "Description",
	amount: "Amount",
	status: "Status",
	price: "Price",
	"purchase-price": "Purchase Price",
	"selling-price": "Selling Price",
	date: "Date",
	paid: "Paid",
	rest: "Rest",
	items: "Items",
	total: "Total",
	inventory: "Inventory",
	"init-quantity": "Initiale Quantity",
	"min-quantity": "Minimum Quantity",
	quantity: "Quantity",
	credit: "Credit",
	threshold: "Threshold",
	item: "Item",
	product: "Product",
	"sub-total": "sub-total",
	"vat-rate": "VAT rate",
	"vat-amount": "VAT amount",
	"grand-total": "grand total",
	template: "Template",
	configuration: "Configuration",
	"top-margin": "Top margin",
	"bottom-margin": "Bottom margin",
	"bill-to": "Bill to :",
	invoice: "Invoice",
	order: "Order",
	quote: "Quote",
	"no-match": "no match found",
	subtotal: "Subtotal",
	balance: "Balance",
	payments: "Payments",
	currency: "MAD",
	ice: "ICE",
	"if-number": "IF",
	rc: "RC",
	patente: "Patente / TP",
	reason: "Reason",
	contact: "Contact",
	"legal-identifiers": "Legal Identifiers",
	"credit-note": "Credit note",
	"delivery-note": "Delivery note",
	client: "Client",
	"paid-amount": "Paid amount"
};
var placeholders$2 = {
	"select-client": "Select a client",
	"no-client-selected": "No client selected yet",
	"no-email": "No email",
	"no-address": "No address",
	"no-phone": "No phone",
	"payment-description": "Optional payment note",
	"no-payments": "No payments recorded yet",
	reason: "Enter reason for credit note"
};
var settings$2 = {
	title: "Settings",
	description: "Manage your application settings and configurations.",
	tabs: {
		databases: "Databases",
		"seller-profile": "Seller Profile"
	}
};
var clients$2 = {
	title: "Clients",
	description: "Manage your clients and their contact information."
};
var products$2 = {
	title: "Products",
	description: "Manage your product catalog and inventory."
};
var invoices$2 = {
	title: "Invoices",
	description: "View and manage your invoices and payments."
};
var orders$2 = {
	title: "Orders",
	description: "Create and manage your sales orders."
};
var inventory$2 = {
	title: "Inventory",
	description: "Track your stock movements and inventory transactions."
};
var quotes$2 = {
	title: "Quotes",
	description: "Create and manage your sales quotes."
};
var status$2 = {
	pending: "Pending",
	accepted: "Accepted",
	invoiced: "Invoiced",
	processing: "Processing",
	shipped: "Shipped",
	delivered: "Delivered",
	cancelled: "Cancelled",
	completed: "Completed",
	draft: "Draft",
	sent: "Sent",
	paid: "Paid",
	partially_paid: "Partially Paid",
	finalized: "Finalized",
	overdue: "Overdue",
	"in": "Bought",
	out: "Sold"
};
var dashboard$2 = {
	title: "Financial Overview",
	labels: [
		"BOUGHT",
		"SOLD"
	],
	revenue: "Total revenue",
	expenses: "Total expenses",
	profit: "Total profit",
	growth: " {n} from last month",
	b3c: "Best clients based on expenses",
	bp: "Best Selling Products (quantity)"
};
var tables$2 = {
	empty: {
		title: "No results found",
		description: "Try adjusting your search or filters."
	}
};
var database$2 = {
	common: {
		none: "None",
		empty: "Empty",
		"start-empty": "Start empty"
	},
	actions: {
		refresh: "Refresh",
		"new": "New Database",
		create: "Create",
		creating: "Creating...",
		"switch": "Switch",
		seed: "Seed Data",
		seeding: "Seeding..."
	},
	fields: {
		slug: "Slug",
		source: "Source",
		"clone-from": "Clone From",
		"database-name": "Database name",
		"start-from": "Start from"
	},
	status: {
		active: "Active",
		idle: "Idle",
		current: "Current",
		"switch-title": "Switch Database"
	},
	placeholders: {
		name: "Casablanca Store",
		"initial-name": "Mahalli Main Workspace"
	},
	settings: {
		title: "Database Settings",
		description: "Manage the catalog database and switch the active business database.",
		"active-title": "Active Database",
		"no-active-description": "No database selected.",
		"catalog-title": "Catalog",
		"catalog-count": "{count} databases",
		"catalog-description": "New databases can start empty or clone any existing tenant file.",
		"create-card-description": "Open a modal to create a clean database or clone an existing one.",
		"create-card-note": "New databases can start empty or copy data from any previously registered database.",
		"registered-title": "Registered Databases",
		"registered-description": "These entries come from the system catalog database.",
		"empty-state": "No databases are registered yet.",
		"seed-title": "Seed Database",
		"seed-description": "Populate the database with sample data for testing and development.",
		"seed-card-note": "This will add 200 clients, 400 products, 100 orders, 100 invoices, and 150 quotes with sample data."
	},
	create: {
		title: "Create Database",
		description: "Create a clean database or copy a previous one before switching to it.",
		"make-active-title": "Make active immediately",
		"make-active-description": "Business commands will use the new active tenant connection."
	},
	selector: {
		title: "Choose Database",
		description: "Databases exist, but none is currently active. Pick one to continue.",
		opening: "Opening",
		"use-database": "Use this database",
		manage: "Manage Databases"
	},
	onboarding: {
		badge: "First-time setup",
		title: "Set up your first workspace database before you start managing clients and inventory.",
		description: "Mahalli keeps one system database for database management, and separate tenant databases for your business data. This setup screen creates the first tenant database and activates it immediately.",
		"initial-tenant": "Initial Tenant",
		"form-title": "Create Your First Database",
		"form-description": "Use an empty database or copy data from a previous tenant if one is already registered.",
		"active-note": "The new database will be marked active immediately so the rest of the app can open normally.",
		creating: "Creating database...",
		"create-and-continue": "Create and Continue"
	},
	notifications: {
		"name-required": "Database name is required.",
		"create-error": "Unable to create database.",
		"create-success": "Database created.",
		"switch-error": "Unable to switch database.",
		"switch-success": "Active database changed.",
		"open-error": "Unable to open database.",
		"choose-another": "Please choose another database or create a new one.",
		"initial-create-error": "Unable to create your first database.",
		"try-another-name": "Try another name or choose a different source database.",
		ready: "Database ready.",
		"seed-success": "Database seeded successfully",
		"seed-error": "Unable to seed database"
	}
};
var notifications$2 = {
	product: {
		created: "Product {name} has been added",
		updated: "Product {name} has been updated",
		deleted: "Product {name} has been deleted"
	},
	client: {
		created: "Client {name} has been added",
		updated: "Client {name} has been updated",
		deleted: "Client {name} has been deleted"
	},
	order: {
		created: "An Order has been created",
		updated: "The Order has been updated",
		deleted: "The Order has been deleted"
	},
	"delivery-note": {
		created: "A delivery note has been created"
	},
	"credit-note": {
		created: "A credit note has been created"
	},
	"seller-profile": {
		updated: "Seller profile has been updated"
	},
	invoice: {
		created: "An Invoice has been created",
		updated: "The Invoice has been updated",
		deleted: "The Invoice has been deleted",
		"payment-added": "Payment added to the invoice",
		"payment-too-high": "Payment amount is too high",
		"payment-too-high-description": "The remaining unpaid amount is {amount}"
	},
	quote: {
		created: "A Quote has been created",
		updated: "The Quote has been updated",
		deleted: "The Quote has been deleted"
	},
	organization: {
		created: "Organization {name} has been created",
		updated: "Organization {name} has been updated",
		deleted: "Organization {name} has been deleted",
		"no-org-alert": {
			title: "There's no selected organization",
			description: "Select or create an new organization"
		}
	},
	error: {
		title: "Oops! Something went wrong on our end.",
		description: "You can try again"
	},
	errors: {
		"database-required": "Select a database before using the app.",
		"database-not-found": "The selected database could not be found.",
		"database-source-not-found": "The source database could not be found.",
		"database-source-file-missing": "The source database file is missing.",
		"database-file-already-exists": "A database file with the same name already exists.",
		"database-open-failed": "The database file could not be opened.",
		"database-create-incomplete": "The database was created, but it could not be loaded afterwards.",
		"client-not-found": "The client could not be found.",
		"quote-not-found": "The quote could not be found.",
		"order-not-found": "The order could not be found.",
		"delivery-note-not-found": "The delivery note could not be found.",
		"delivery-note-order-not-found": "The source order for this delivery note could not be found.",
		"delivery-note-inventory-missing": "A linked stock movement for this delivery note could not be found.",
		"credit-note-not-found": "The credit note could not be found.",
		"credit-note-invoice-not-found": "The invoice for this credit note could not be found.",
		"invoice-not-found": "The invoice could not be found.",
		"invoice-payment-date-invalid": "The payment date is invalid.",
		"invoice-payment-amount-invalid": "The payment amount must be greater than zero.",
		"invoice-payment-deleted": "Payments cannot be added to a deleted invoice.",
		"invoice-payment-exceeds-remaining": "The payment amount exceeds the remaining unpaid amount.",
		"invoice-finalize-requires-paid": "Only fully paid invoices can be finalized.",
		"invoice-finalized-edit-blocked": "Finalized invoices cannot be edited.",
		"invoice-finalized-delete-blocked": "Finalized invoices cannot be deleted.",
		"credit-note-requires-finalized-invoice": "Credit notes can only be created for finalized invoices.",
		"credit-note-empty": "A credit note must contain at least one item.",
		"credit-note-quantity-invalid": "Credit note quantities must be greater than zero.",
		"credit-note-price-invalid": "Credit note prices cannot be negative.",
		"credit-note-item-not-on-invoice": "One credit note item is not part of the source invoice.",
		"credit-note-quantity-exceeds-invoice": "A credit note quantity exceeds the invoiced quantity.",
		"credit-note-price-exceeds-invoice": "A credit note price exceeds the invoiced price.",
		"order-status-invalid": "The order status is invalid.",
		"invoice-status-invalid": "The invoice status is invalid.",
		"status-transition-invalid": "That status change is not allowed.",
		"inventory-transaction-missing": "A linked inventory transaction could not be found.",
		"data-unavailable": "No data is available for this view yet.",
		conflict: "This action conflicts with existing data."
	}
};
var titles$2 = {
	clients: {
		create: "Add a client",
		update: "Update client",
		"delete": "Delete client"
	},
	products: {
		create: "Add a product",
		update: "Update product",
		"update-inventory": "Update product inventory",
		"delete": "Delete product"
	},
	orders: {
		create: "Add new order",
		view: "View order",
		update: "Update order",
		"delete": "Delete order"
	},
	quotes: {
		create: "Add new quote",
		view: "View quote",
		update: "Update quote",
		"delete": "Delete quote"
	},
	invoices: {
		create: "Add new invoice",
		view: "View invoice",
		update: "Update invoice",
		"delete": "Delete invoice",
		"add-payment": "Add payment"
	},
	"credit-notes": {
		view: "View credit note"
	},
	"delivery-notes": {
		view: "View delivery note"
	},
	organizations: {
		create: "Add new organization",
		update: "Update organization",
		"delete": "Are you sure you want to delete the organization?"
	}
};
var modalDescriptions$2 = {
	clients: {
		create: "Add contact details and billing information for a new client.",
		update: "Review the client profile and save any contact changes.",
		"delete": "This will permanently remove the client from your workspace."
	},
	products: {
		create: "Set pricing, stock thresholds, and opening quantity for this product.",
		update: "Adjust pricing, thresholds, and product details before saving.",
		"update-inventory": "Record the quantity you want to add back into stock.",
		"delete": "This will permanently remove the product from your catalog."
	},
	orders: {
		"delete": "This will permanently remove the order and its linked line items."
	},
	quotes: {
		"delete": "This will permanently remove the quote and its linked line items."
	},
	invoices: {
		"delete": "This will permanently remove the invoice and its linked line items."
	}
};
const locale_en_45US_46json_21889c40 = {
	seo: seo$2,
	search: search$2,
	"pick-date": "Pick a date",
	"select-status": "Select a status",
	routes: routes$2,
	buttons: buttons$2,
	translationTitle: translationTitle$2,
	translationDescription: translationDescription$2,
	filters: filters$2,
	columns: columns$2,
	dropZone: dropZone$2,
	plrz: plrz$2,
	fields: fields$2,
	placeholders: placeholders$2,
	"seller-profile": {
	title: "Seller profile",
	description: "Company information used on B2B documents and invoices.",
	fields: {
		"legal-name": "Legal name",
		"commercial-name": "Commercial name",
		city: "City",
		currency: "Default currency",
		"payment-terms": "Payment terms in days",
		"invoice-footer": "Invoice footer"
	}
},
	settings: settings$2,
	clients: clients$2,
	products: products$2,
	invoices: invoices$2,
	orders: orders$2,
	inventory: inventory$2,
	quotes: quotes$2,
	"delivery-notes": {
	title: "Delivery Notes",
	description: "Manage your delivery documentation and shipments."
},
	"credit-notes": {
	title: "Credit Notes",
	description: "Create and manage credit notes for your invoices."
},
	status: status$2,
	dashboard: dashboard$2,
	tables: tables$2,
	database: database$2,
	notifications: notifications$2,
	titles: titles$2,
	modalDescriptions: modalDescriptions$2
};

var seo$1 = {
	title: "Gestion facile des stocks et de la facturation",
	description: "Gérez facilement vos clients et vos produits, générez des devis, des commandes et des factures avec Mahalli - votre solution d'entreprise tout-en-un."
};
var search$1 = "Recherche";
var routes$1 = {
	home: "Accueil",
	clients: "Clients",
	products: "Produits",
	orders: "Commandes",
	"delivery-notes": "Bons de livraison",
	invoices: "Factures",
	"credit-notes": "Avoirs",
	inventory: "Inventaire",
	dashboard: "Tableau de bord",
	settings: "Paramètres",
	quotes: "Devis",
	notifications: "Notifications"
};
var buttons$1 = {
	cancel: "Annuler",
	save: "Sauvegarder",
	add: "Ajouter",
	confirme: "Confirmer",
	update: "Mettre à jour {name}",
	"add-product": "Ajouter un produit",
	"toggle-create-client": "Ajouter un nouveau client",
	"toggle-create-product": "Ajouter un nouveau produit",
	"toggle-create-order": "Ajouter une nouvelle commande",
	"toggle-create-quote": "Ajouter un nouveau devis",
	"toggle-create-invoice": "Ajouter une nouvelle facture",
	"toggle-create-org": "Créer une organisation",
	edit: "Modifier",
	finalize: "Finaliser",
	"add-payment": "Ajouter un paiement",
	"delete": "Supprimer",
	print: "Imprimer",
	"to-order": "Créer une commande",
	"to-delivery-note": "Créer un bon de livraison",
	"to-invoice": "Créer une facture",
	"go-to-order": "Aller à la commande",
	"go-to-delivery-note": "Aller au bon de livraison",
	"go-to-invoice": "Aller à la facture",
	"create-invoice": "Créer une facture",
	"create-credit-note": "Créer un avoir",
	"inventory-update": "Mettre à jour l'inventaire",
	"generate-invoice": "Générer la facture",
	"generate-order": "Générer la commande",
	"generate-quote": "Générer le devis",
	"generate-delivery-note": "Générer le bon de livraison",
	"generate-credit-note": "Générer l'avoir",
	create: "Créer",
	creating: "Création...",
	view: "Afficher",
	close: "Fermer"
};
var translationTitle$1 = "Changer de langue";
var translationDescription$1 = "Choisissez la langue à utiliser dans Mahalli.";
var filters$1 = {
	more: "Plus de filtres",
	"clear-all": "Tout effacer",
	from: "Du",
	to: "Au",
	min: "Min",
	max: "Max",
	required: "Requis",
	"credit-only": "Clients avec un crédit impayé",
	"has-email": "Avec e-mail",
	"has-phone": "Avec téléphone",
	"stock-status": "État du stock",
	"out-of-stock": "Rupture de stock",
	"low-stock": "Stock faible",
	"healthy-stock": "Stock sain",
	"search-by-field": "Rechercher par champ"
};
var columns$1 = {
	"show-hide": "Afficher/Masquer les colonnes",
	all: "Tous"
};
var dropZone$1 = "Glissez-déposez ou sélectionnez";
var plrz$1 = {
	i: "aucun élément | élément | éléments",
	p: "aucun produit | produit | produits"
};
var fields$1 = {
	"full-name": "Nom complet",
	name: "Nom",
	email: "E-mail",
	phone: "Numéro de téléphone",
	address: "Adresse",
	actions: "Actions",
	identifier: "Identifiant",
	columns: "Colonnes",
	description: "Description",
	amount: "Montant",
	status: "Statut",
	price: "Prix",
	"purchase-price": "Prix d'achat",
	"selling-price": "Prix de vente",
	date: "Date",
	paid: "Payé",
	rest: "Reste",
	items: "Articles",
	total: "Total",
	inventory: "Inventaire",
	"init-quantity": "Quantité initiale",
	"min-quantity": "Quantité minimale",
	quantity: "Quantité",
	credit: "Crédit",
	threshold: "Seuil",
	item: "Article",
	product: "Produit",
	"sub-total": "Sous-total",
	"vat-rate": "Taux de TVA",
	"vat-amount": "Montant de la TVA",
	"grand-total": "Grand total",
	template: "Modèle",
	configuration: "Configuration",
	"top-margin": "Marge supérieure",
	"bottom-margin": "Marge inférieure",
	"bill-to": "Facturer à :",
	invoice: "Facture",
	order: "Commande",
	quote: "Devis",
	"no-match": "aucune correspondance trouvée",
	subtotal: "Sous-total",
	balance: "Solde",
	payments: "Paiements",
	currency: "MAD",
	ice: "ICE",
	"if-number": "IF",
	rc: "RC",
	patente: "Patente / TP",
	reason: "Motif",
	contact: "Contact",
	"legal-identifiers": "Identifiants légaux",
	"credit-note": "Note de crédit",
	"delivery-note": "Bordereau de livraison",
	client: "Client",
	"paid-amount": "Montant payé"
};
var placeholders$1 = {
	"select-client": "Sélectionnez un client",
	"no-client-selected": "Aucun client sélectionné",
	"no-email": "Pas d'email",
	"no-address": "Pas d'adresse",
	"no-phone": "Pas de téléphone",
	"payment-description": "Note de paiement facultative",
	"no-payments": "Aucun paiement enregistré",
	reason: "Entrez la raison du note de crédit"
};
var settings$1 = {
	title: "Paramètres",
	description: "Gérez les paramètres et les configurations de votre application.",
	tabs: {
		databases: "Bases de données",
		"seller-profile": "Profil vendeur"
	}
};
var clients$1 = {
	title: "Clients",
	description: "Gérez vos clients et leurs informations de contact."
};
var products$1 = {
	title: "Produits",
	description: "Gérez votre catalogue de produits et vos stocks."
};
var invoices$1 = {
	title: "Factures",
	description: "Consultez et gérez vos factures et paiements."
};
var orders$1 = {
	title: "Commandes",
	description: "Créez et gérez vos commandes de vente."
};
var inventory$1 = {
	title: "Inventaire",
	description: "Suivez vos mouvements de stock et transactions d'inventaire."
};
var quotes$1 = {
	title: "Devis",
	description: "Créez et gérez vos devis de vente."
};
var status$1 = {
	pending: "En attente",
	accepted: "Accepté",
	invoiced: "Facturé",
	processing: "En cours de traitement",
	shipped: "Expédié",
	delivered: "Livré",
	cancelled: "Annulé",
	completed: "Complété",
	draft: "Brouillon",
	sent: "Envoyé",
	paid: "Payé",
	partially_paid: "Partiellement payé",
	finalized: "Finalisé",
	overdue: "En retard",
	"in": "Acheté",
	out: "Vendu"
};
var dashboard$1 = {
	title: "Aperçu financier",
	labels: [
		"ACHETÉ",
		"VENDU"
	],
	revenue: "Revenu total",
	expenses: "Dépenses totales",
	profit: "Bénéfice total",
	growth: " {n} par rapport au mois dernier",
	b3c: "Meilleurs clients en fonction des dépenses",
	bp: "Meilleurs produits vendus (quantité)"
};
var tables$1 = {
	empty: {
		title: "Aucun résultat trouvé",
		description: "Essayez d'ajuster votre recherche ou vos filtres."
	}
};
var database$1 = {
	common: {
		none: "Aucune",
		empty: "Vide",
		"start-empty": "Commencer vide"
	},
	actions: {
		refresh: "Actualiser",
		"new": "Nouvelle base",
		create: "Créer",
		creating: "Création...",
		"switch": "Basculer",
		seed: "Données d'exemple",
		seeding: "Remplissage..."
	},
	fields: {
		slug: "Slug",
		source: "Source",
		"clone-from": "Cloner depuis",
		"database-name": "Nom de la base",
		"start-from": "Démarrer à partir de"
	},
	status: {
		active: "Active",
		idle: "Inactive",
		current: "Actuelle",
		"switch-title": "Changer de base"
	},
	placeholders: {
		name: "Magasin Casablanca",
		"initial-name": "Espace principal Mahalli"
	},
	settings: {
		title: "Paramètres des bases",
		description: "Gérez la base catalogue et changez la base métier active.",
		"active-title": "Base active",
		"no-active-description": "Aucune base sélectionnée.",
		"catalog-title": "Catalogue",
		"catalog-count": "{count} bases",
		"catalog-description": "Les nouvelles bases peuvent démarrer vides ou cloner un fichier tenant existant.",
		"create-card-description": "Ouvrez une fenêtre pour créer une base propre ou cloner une base existante.",
		"create-card-note": "Les nouvelles bases peuvent démarrer vides ou copier les données d'une base déjà enregistrée.",
		"registered-title": "Bases enregistrées",
		"registered-description": "Ces entrées proviennent de la base catalogue système.",
		"empty-state": "Aucune base n'est encore enregistrée.",
		"seed-title": "Remplir la base avec des données d'exemple",
		"seed-description": "Remplissez la base avec des données d'exemple pour tester et développer.",
		"seed-card-note": "Cela ajoutera 200 clients, 400 produits, 100 commandes, 100 factures et 150 devis avec des données d'exemple."
	},
	create: {
		title: "Créer une base",
		description: "Créez une base propre ou copiez une base précédente avant de l'activer.",
		"make-active-title": "Rendre active immédiatement",
		"make-active-description": "Les commandes métier utiliseront la nouvelle connexion tenant active."
	},
	selector: {
		title: "Choisir une base",
		description: "Des bases existent, mais aucune n'est active actuellement. Choisissez-en une pour continuer.",
		opening: "Ouverture",
		"use-database": "Utiliser cette base",
		manage: "Gérer les bases"
	},
	onboarding: {
		badge: "Première configuration",
		title: "Configurez votre première base d'espace de travail avant de gérer clients et stock.",
		description: "Mahalli conserve une base système pour la gestion des bases, et des bases tenant séparées pour vos données métier. Cet écran crée la première base tenant et l'active immédiatement.",
		"initial-tenant": "Tenant initial",
		"form-title": "Créez votre première base",
		"form-description": "Utilisez une base vide ou copiez les données d'un tenant précédent s'il en existe déjà un.",
		"active-note": "La nouvelle base sera marquée active immédiatement afin que le reste de l'application puisse s'ouvrir normalement.",
		creating: "Création de la base...",
		"create-and-continue": "Créer et continuer"
	},
	notifications: {
		"name-required": "Le nom de la base est requis.",
		"create-error": "Impossible de créer la base.",
		"create-success": "Base créée.",
		"switch-error": "Impossible de basculer la base.",
		"switch-success": "La base active a changé.",
		"open-error": "Impossible d'ouvrir la base.",
		"choose-another": "Choisissez une autre base ou créez-en une nouvelle.",
		"initial-create-error": "Impossible de créer votre première base.",
		"try-another-name": "Essayez un autre nom ou choisissez une autre base source.",
		ready: "Base prête.",
		"seed-success": "La base a été remplie avec succès",
		"seed-error": "Impossible de remplir la base"
	}
};
var notifications$1 = {
	product: {
		created: "Le produit {name} a été ajouté",
		updated: "Le produit {name} a été mis à jour",
		deleted: "Le produit {name} a été supprimé"
	},
	client: {
		created: "Le client {name} a été ajouté",
		updated: "Le client {name} a été mis à jour",
		deleted: "Le client {name} a été supprimé"
	},
	order: {
		created: "Une commande a été créée",
		updated: "La commande a été mise à jour",
		deleted: "La commande a été supprimée"
	},
	"delivery-note": {
		created: "Un bon de livraison a été créé"
	},
	"credit-note": {
		created: "Un avoir a été créé"
	},
	"seller-profile": {
		updated: "Le profil vendeur a été mis à jour"
	},
	invoice: {
		created: "Une facture a été créée",
		updated: "La facture a été mise à jour",
		deleted: "La facture a été supprimée",
		"payment-added": "Le paiement a été ajouté à la facture",
		"payment-too-high": "Le montant du paiement est trop élevé",
		"payment-too-high-description": "Le montant impayé restant est de {amount}"
	},
	quote: {
		created: "Un devis a été créé",
		updated: "Le devis a été mis à jour",
		deleted: "Le devis a été supprimé"
	},
	organization: {
		created: "L'organisation {name} a été créée",
		updated: "L'organisation {name} a été mise à jour",
		deleted: "L'organisation {name} a été supprimée",
		"no-org-alert": {
			title: "Aucune organisation sélectionnée",
			description: "Sélectionnez ou créez une nouvelle organisation"
		}
	},
	error: {
		title: "Oups ! Quelque chose s'est mal passé de notre côté.",
		description: "Vous pouvez réessayer"
	},
	errors: {
		"database-required": "Sélectionnez une base de données avant d'utiliser l'application.",
		"database-not-found": "La base de données sélectionnée est introuvable.",
		"database-source-not-found": "La base de données source est introuvable.",
		"database-source-file-missing": "Le fichier de la base de données source est manquant.",
		"database-file-already-exists": "Un fichier de base de données avec le même nom existe déjà.",
		"database-open-failed": "Impossible d'ouvrir le fichier de base de données.",
		"database-create-incomplete": "La base de données a été créée, mais elle n'a pas pu être chargée ensuite.",
		"client-not-found": "Le client est introuvable.",
		"quote-not-found": "Le devis est introuvable.",
		"order-not-found": "La commande est introuvable.",
		"delivery-note-not-found": "Le bon de livraison est introuvable.",
		"delivery-note-order-not-found": "La commande source de ce bon de livraison est introuvable.",
		"delivery-note-inventory-missing": "Un mouvement de stock lié à ce bon de livraison est introuvable.",
		"credit-note-not-found": "L'avoir est introuvable.",
		"credit-note-invoice-not-found": "La facture de cet avoir est introuvable.",
		"invoice-not-found": "La facture est introuvable.",
		"invoice-payment-date-invalid": "La date du paiement est invalide.",
		"invoice-payment-amount-invalid": "Le montant du paiement doit être supérieur à zéro.",
		"invoice-payment-deleted": "Impossible d'ajouter un paiement à une facture supprimée.",
		"invoice-payment-exceeds-remaining": "Le montant du paiement dépasse le reste à payer.",
		"invoice-finalize-requires-paid": "Seules les factures entièrement payées peuvent être finalisées.",
		"invoice-finalized-edit-blocked": "Les factures finalisées ne peuvent pas être modifiées.",
		"invoice-finalized-delete-blocked": "Les factures finalisées ne peuvent pas être supprimées.",
		"credit-note-requires-finalized-invoice": "Les avoirs ne peuvent être créés que pour des factures finalisées.",
		"credit-note-empty": "Un avoir doit contenir au moins un article.",
		"credit-note-quantity-invalid": "Les quantités de l'avoir doivent être supérieures à zéro.",
		"credit-note-price-invalid": "Les prix de l'avoir ne peuvent pas être négatifs.",
		"credit-note-item-not-on-invoice": "Un article de l'avoir ne fait pas partie de la facture source.",
		"credit-note-quantity-exceeds-invoice": "Une quantité de l'avoir dépasse la quantité facturée.",
		"credit-note-price-exceeds-invoice": "Un prix de l'avoir dépasse le prix facturé.",
		"order-status-invalid": "Le statut de la commande est invalide.",
		"invoice-status-invalid": "Le statut de la facture est invalide.",
		"status-transition-invalid": "Ce changement de statut n'est pas autorisé.",
		"inventory-transaction-missing": "Une transaction de stock liée est introuvable.",
		"data-unavailable": "Aucune donnée n'est disponible pour cette vue pour le moment.",
		conflict: "Cette action entre en conflit avec des données existantes."
	}
};
var titles$1 = {
	clients: {
		create: "Ajouter un client",
		update: "Mettre à jour le client",
		"delete": "Supprimer le client"
	},
	products: {
		create: "Ajouter un produit",
		update: "Mettre à jour le produit",
		"update-inventory": "Mettre à jour l'inventaire du produit",
		"delete": "Supprimer le produit"
	},
	orders: {
		create: "Ajouter une nouvelle commande",
		view: "Afficher la commande",
		update: "Mettre à jour la commande",
		"delete": "Supprimer la commande"
	},
	quotes: {
		create: "Ajouter un nouveau devis",
		view: "Afficher le devis",
		update: "Mettre à jour le devis",
		"delete": "Supprimer le devis"
	},
	invoices: {
		create: "Ajouter une nouvelle facture",
		view: "Afficher la facture",
		update: "Mettre à jour la facture",
		"delete": "Supprimer la facture",
		"add-payment": "Ajouter un paiement"
	},
	"credit-notes": {
		view: "Afficher la note de crédit"
	},
	"delivery-notes": {
		view: "Afficher le bordereau de livraison"
	},
	organizations: {
		create: "Ajouter une nouvelle organisation",
		update: "Mettre à jour l'organisation",
		"delete": "Êtes-vous sûr de vouloir supprimer l'organisation ?"
	}
};
var modalDescriptions$1 = {
	clients: {
		create: "Ajoutez les coordonnées et les informations de facturation d’un nouveau client.",
		update: "Vérifiez la fiche client et enregistrez les dernières modifications.",
		"delete": "Cette action supprimera définitivement le client de votre espace de travail."
	},
	products: {
		create: "Définissez les prix, le seuil de stock et la quantité initiale du produit.",
		update: "Ajustez les prix, les seuils et les détails du produit avant d’enregistrer.",
		"update-inventory": "Indiquez la quantité que vous souhaitez ajouter au stock.",
		"delete": "Cette action supprimera définitivement le produit de votre catalogue."
	},
	orders: {
		"delete": "Cette action supprimera définitivement la commande et ses lignes associées."
	},
	quotes: {
		"delete": "Cette action supprimera définitivement le devis et ses lignes associées."
	},
	invoices: {
		"delete": "Cette action supprimera définitivement la facture et ses lignes associées."
	}
};
const locale_fr_45FR_46json_1dae35c3 = {
	seo: seo$1,
	search: search$1,
	"pick-date": "Choisissez une date",
	"select-status": "Sélectionnez un statut",
	routes: routes$1,
	buttons: buttons$1,
	translationTitle: translationTitle$1,
	translationDescription: translationDescription$1,
	filters: filters$1,
	columns: columns$1,
	dropZone: dropZone$1,
	plrz: plrz$1,
	fields: fields$1,
	placeholders: placeholders$1,
	"seller-profile": {
	title: "Profil vendeur",
	description: "Informations de l'entreprise utilisées sur les documents B2B et les factures.",
	fields: {
		"legal-name": "Raison sociale",
		"commercial-name": "Nom commercial",
		city: "Ville",
		currency: "Devise par défaut",
		"payment-terms": "Délai de paiement en jours",
		"invoice-footer": "Pied de facture"
	}
},
	settings: settings$1,
	clients: clients$1,
	products: products$1,
	invoices: invoices$1,
	orders: orders$1,
	inventory: inventory$1,
	quotes: quotes$1,
	"delivery-notes": {
	title: "Bons de livraison",
	description: "Gérez votre documentation de livraison et vos expéditions."
},
	"credit-notes": {
	title: "Avoirs",
	description: "Créez et gérez les avoirs pour vos factures."
},
	status: status$1,
	dashboard: dashboard$1,
	tables: tables$1,
	database: database$1,
	notifications: notifications$1,
	titles: titles$1,
	modalDescriptions: modalDescriptions$1
};

var seo = {
	title: "إدارة سهلة للمخزون والفواتير",
	description: "أدر عملاءك ومنتجاتك بسهولة، وقم بإنشاء عروض الأسعار والطلبات والفواتير مع محلي - حلك الشامل للأعمال."
};
var search = "البحث";
var routes = {
	home: "الصفحة الرئيسية",
	clients: "العملاء",
	products: "المنتجات",
	orders: "الطلبات",
	"delivery-notes": "سندات التسليم",
	invoices: "الفواتير",
	"credit-notes": "إشعارات الخصم",
	inventory: "المخزون",
	dashboard: "لوحة التحكم",
	settings: "الإعدادات",
	quotes: "العروض",
	notifications: "الإشعارات"
};
var buttons = {
	cancel: "إلغاء",
	save: "حفظ",
	add: "إضافة",
	confirme: "تأكيد",
	update: "تحديث {name}",
	"add-product": "إضافة منتج",
	"toggle-create-client": "إضافة عميل جديد",
	"toggle-create-product": "إضافة منتج جديد",
	"toggle-create-order": "إضافة طلب جديد",
	"toggle-create-quote": "إضافة عرض جديد",
	"toggle-create-invoice": "إضافة فاتورة جديدة",
	"toggle-create-org": "إنشاء منظمة",
	edit: "تحرير",
	finalize: "إنهاء",
	"add-payment": "إضافة دفعة",
	"delete": "حذف",
	print: "طباعة",
	"to-order": "إنشاء طلب",
	"to-delivery-note": "إنشاء سند تسليم",
	"to-invoice": "إنشاء فاتورة",
	"go-to-order": "الانتقال إلى الطلب",
	"go-to-delivery-note": "الانتقال إلى سند التسليم",
	"go-to-invoice": "الانتقال إلى الفاتورة",
	"create-invoice": "إنشاء فاتورة",
	"create-credit-note": "إنشاء إشعار خصم",
	"inventory-update": "تحديث المخزون",
	"generate-invoice": "إنشاء الفاتورة",
	"generate-order": "إنشاء الطلب",
	"generate-quote": "إنشاء عرض السعر",
	"generate-delivery-note": "إنشاء سند التسليم",
	"generate-credit-note": "إنشاء إشعار الخصم",
	create: "إنشاء",
	creating: "جاري الإنشاء...",
	view: "عرض",
	close: "إغلاق"
};
var translationTitle = "تغيير اللغة";
var translationDescription = "اختر اللغة التي تريد استخدامها في Mahalli.";
var filters = {
	more: "مزيد من الفلاتر",
	"clear-all": "مسح الكل",
	from: "من",
	to: "إلى",
	min: "الحد الأدنى",
	max: "الحد الأقصى",
	required: "مطلوب",
	"credit-only": "العملاء ذوو الرصيد المستحق",
	"has-email": "لديه بريد إلكتروني",
	"has-phone": "لديه هاتف",
	"stock-status": "حالة المخزون",
	"out-of-stock": "نفد المخزون",
	"low-stock": "مخزون منخفض",
	"healthy-stock": "مخزون جيد",
	"search-by-field": "البحث حسب الحقل"
};
var columns = {
	"show-hide": "إظهار/إخفاء الأعمدة",
	all: "الكل"
};
var dropZone = "اسحب وأفلت أو اختر";
var plrz = {
	i: "لا يوجد عنصر | عنصر | عناصر",
	p: "لا يوجد منتج | منتج | منتجات"
};
var fields = {
	"full-name": "الاسم الكامل",
	name: "الاسم",
	email: "البريد الإلكتروني",
	phone: "رقم الهاتف",
	address: "العنوان",
	actions: "الإجراءات",
	identifier: "المعرف",
	columns: "الأعمدة",
	description: "الوصف",
	amount: "المبلغ",
	status: "الحالة",
	price: "السعر",
	"purchase-price": "سعر الشراء",
	"selling-price": "سعر البيع",
	date: "التاريخ",
	paid: "مدفوع",
	rest: "الباقي",
	items: "العناصر",
	total: "المجموع",
	inventory: "المخزون",
	"init-quantity": "الكمية الأولية",
	"min-quantity": "الكمية الدنيا",
	quantity: "الكمية",
	credit: "الائتمان",
	threshold: "العتبة",
	item: "العنصر",
	product: "المنتج",
	"sub-total": "المجموع الفرعي",
	"vat-rate": "نسبة ضريبة القيمة المضافة",
	"vat-amount": "مبلغ ضريبة القيمة المضافة",
	"grand-total": "الإجمالي الكلي",
	template: "القالب",
	configuration: "التكوين",
	"top-margin": "الهوامش العلوية",
	"bottom-margin": "الهوامش السفلية",
	"bill-to": "فاتورة إلى :",
	invoice: "فاتورة",
	order: "طلب",
	quote: "عرض أسعار",
	"no-match": "لم يتم العثور على تطابق",
	subtotal: "المجموع الفرعي",
	balance: "الرصيد",
	payments: "الدفعات",
	currency: "درهم",
	ice: "ICE",
	"if-number": "IF",
	rc: "RC",
	patente: "Patente / TP",
	reason: "السبب",
	contact: "جهات الاتصال",
	"legal-identifiers": "المعرفات القانونية",
	"credit-note": "إشعار خصم",
	"delivery-note": "ملاحظة التسليم",
	client: "العميل",
	"paid-amount": "المبلغ المدفوع"
};
var placeholders = {
	"select-client": "اختر عميلاً",
	"no-client-selected": "لم يتم اختيار عميل بعد",
	"no-email": "لا يوجد بريد إلكتروني",
	"no-address": "لا يوجد عنوان",
	"no-phone": "لا يوجد هاتف",
	"payment-description": "ملاحظة دفع اختيارية",
	"no-payments": "لا توجد دفعات مسجلة بعد",
	reason: "أدخل سبب إشعار الخصم"
};
var settings = {
	title: "الإعدادات",
	description: "إدارة إعدادات وتكوينات التطبيق الخاص بك.",
	tabs: {
		databases: "قواعد البيانات",
		"seller-profile": "ملف البائع"
	}
};
var clients = {
	title: "العملاء",
	description: "إدارة عملائك ومعلومات الاتصال بهم."
};
var products = {
	title: "المنتجات",
	description: "إدارة الكتالوج والمخزون الخاص بك."
};
var invoices = {
	title: "الفواتير",
	description: "عرض وإدارة الفواتير والدفعات الخاصة بك."
};
var orders = {
	title: "الطلبات",
	description: "إنشاء وإدارة طلبات البيع الخاصة بك."
};
var inventory = {
	title: "المخزون",
	description: "تتبع حركات المخزون وعمليات المخزون."
};
var quotes = {
	title: "العروض",
	description: "إنشاء وإدارة عروض الأسعار الخاصة بك."
};
var status = {
	pending: "قيد الانتظار",
	accepted: "مقبول",
	invoiced: "تمت الفوترة",
	processing: "قيد المعالجة",
	shipped: "شحنت",
	delivered: "تم التسليم",
	cancelled: "ملغى",
	completed: "مكتمل",
	draft: "مسودة",
	sent: "تم الإرسال",
	paid: "مدفوع",
	partially_paid: "مدفوع جزئيًا",
	finalized: "نهائي",
	overdue: "متأخر",
	"in": "مشتراة",
	out: "مبيعة"
};
var dashboard = {
	title: "ملخص مالي",
	labels: [
		"مشتراة",
		"مبيعة"
	],
	revenue: "الإيرادات الإجمالية",
	expenses: "المصاريف الإجمالية",
	profit: "إجمالي الربح",
	growth: " {n} من الشهر الماضي",
	b3c: "أفضل العملاء بناءً على النفقات",
	bp: "أفضل المنتجات مبيعًا (الكمية)"
};
var tables = {
	empty: {
		title: "لم يتم العثور على نتائج",
		description: "حاول تعديل البحث أو الفلاتر."
	}
};
var database = {
	common: {
		none: "لا يوجد",
		empty: "فارغ",
		"start-empty": "ابدأ فارغًا"
	},
	actions: {
		refresh: "تحديث",
		"new": "قاعدة بيانات جديدة",
		create: "إنشاء",
		creating: "جارٍ الإنشاء...",
		"switch": "تبديل",
		seed: "إضافة بيانات تجريبية",
		seeding: "جارٍ الإضافة..."
	},
	fields: {
		slug: "المعرّف",
		source: "المصدر",
		"clone-from": "نسخ من",
		"database-name": "اسم قاعدة البيانات",
		"start-from": "ابدأ من"
	},
	status: {
		active: "نشطة",
		idle: "غير نشطة",
		current: "الحالية",
		"switch-title": "تبديل قاعدة البيانات"
	},
	placeholders: {
		name: "متجر الدار البيضاء",
		"initial-name": "مساحة عمل محلي الرئيسية"
	},
	settings: {
		title: "إعدادات قواعد البيانات",
		description: "أدر قاعدة الفهرس وبدّل قاعدة الأعمال النشطة.",
		"active-title": "قاعدة البيانات النشطة",
		"no-active-description": "لم يتم اختيار أي قاعدة بيانات.",
		"catalog-title": "الفهرس",
		"catalog-count": "{count} قواعد بيانات",
		"catalog-description": "يمكن أن تبدأ القواعد الجديدة فارغة أو تستنسخ أي ملف tenant موجود.",
		"create-card-description": "افتح نافذة لإنشاء قاعدة نظيفة أو استنساخ قاعدة موجودة.",
		"create-card-note": "يمكن أن تبدأ القواعد الجديدة فارغة أو تنسخ البيانات من أي قاعدة مسجلة سابقًا.",
		"registered-title": "قواعد البيانات المسجلة",
		"registered-description": "تأتي هذه السجلات من قاعدة الفهرس النظامية.",
		"empty-state": "لا توجد قواعد بيانات مسجلة بعد.",
		"seed-title": "إضافة بيانات تجريبية",
		"seed-description": "املأ قاعدة البيانات ببيانات نموذجية للاختبار والتطوير.",
		"seed-card-note": "سيؤدي هذا إلى إضافة 200 عميل و400 منتج و100 طلب و100 فاتورة و150 عرض سعر مع بيانات نموذجية."
	},
	create: {
		title: "إنشاء قاعدة بيانات",
		description: "أنشئ قاعدة نظيفة أو انسخ قاعدة سابقة قبل التبديل إليها.",
		"make-active-title": "اجعلها نشطة فورًا",
		"make-active-description": "ستستخدم أوامر الأعمال اتصال tenant النشط الجديد."
	},
	selector: {
		title: "اختر قاعدة بيانات",
		description: "توجد قواعد بيانات لكن لا توجد قاعدة نشطة حاليًا. اختر واحدة للمتابعة.",
		opening: "جارٍ الفتح",
		"use-database": "استخدم هذه القاعدة",
		manage: "إدارة قواعد البيانات"
	},
	onboarding: {
		badge: "الإعداد الأولي",
		title: "قم بإعداد أول قاعدة بيانات لمساحة العمل قبل البدء في إدارة العملاء والمخزون.",
		description: "يحتفظ Mahalli بقاعدة نظام لإدارة قواعد البيانات، وقواعد tenant منفصلة لبيانات أعمالك. تنشئ هذه الشاشة أول قاعدة tenant وتفعّلها فورًا.",
		"initial-tenant": "الـ tenant الأولي",
		"form-title": "أنشئ أول قاعدة بيانات",
		"form-description": "استخدم قاعدة فارغة أو انسخ البيانات من tenant سابق إذا كان موجودًا.",
		"active-note": "سيتم تعيين القاعدة الجديدة كنشطة فورًا حتى يتمكن باقي التطبيق من الفتح بشكل طبيعي.",
		creating: "جارٍ إنشاء قاعدة البيانات...",
		"create-and-continue": "إنشاء والمتابعة"
	},
	notifications: {
		"name-required": "اسم قاعدة البيانات مطلوب.",
		"create-error": "تعذر إنشاء قاعدة البيانات.",
		"create-success": "تم إنشاء قاعدة البيانات.",
		"switch-error": "تعذر تبديل قاعدة البيانات.",
		"switch-success": "تم تغيير قاعدة البيانات النشطة.",
		"open-error": "تعذر فتح قاعدة البيانات.",
		"choose-another": "يرجى اختيار قاعدة أخرى أو إنشاء قاعدة جديدة.",
		"initial-create-error": "تعذر إنشاء قاعدة البيانات الأولى.",
		"try-another-name": "جرّب اسمًا آخر أو اختر قاعدة مصدر مختلفة.",
		ready: "قاعدة البيانات جاهزة.",
		"seed-success": "تم إضافة البيانات التجريبية بنجاح",
		"seed-error": "تعذر إضافة البيانات التجريبية"
	}
};
var notifications = {
	product: {
		created: "تم إضافة المنتج {name}",
		updated: "تم تحديث المنتج {name}",
		deleted: "تم حذف المنتج {name}"
	},
	client: {
		created: "تم إضافة العميل {name}",
		updated: "تم تحديث العميل {name}",
		deleted: "تم حذف العميل {name}"
	},
	order: {
		created: "تم إنشاء طلب",
		updated: "تم تحديث الطلب",
		deleted: "تم حذف الطلب"
	},
	"delivery-note": {
		created: "تم إنشاء سند التسليم"
	},
	"credit-note": {
		created: "تم إنشاء إشعار الخصم"
	},
	"seller-profile": {
		updated: "تم تحديث ملف البائع"
	},
	invoice: {
		created: "تم إنشاء فاتورة",
		updated: "تم تحديث الفاتورة",
		deleted: "تم حذف الفاتورة",
		"payment-added": "تمت إضافة الدفعة إلى الفاتورة",
		"payment-too-high": "قيمة الدفعة أكبر من المسموح",
		"payment-too-high-description": "المبلغ غير المدفوع المتبقي هو {amount}"
	},
	quote: {
		created: "تم إنشاء عرض",
		updated: "تم تحديث العرض",
		deleted: "تم حذف العرض"
	},
	organization: {
		created: "تم إنشاء المنظمة {name}",
		updated: "تم تحديث المنظمة {name}",
		deleted: "تم حذف المنظمة {name}",
		"no-org-alert": {
			title: "لا توجد منظمة محددة",
			description: "اختر أو أنشئ منظمة جديدة"
		}
	},
	error: {
		title: "عفواً! حدث خطأ ما من جانبنا.",
		description: "يمكنك المحاولة مرة أخرى"
	},
	errors: {
		"database-required": "اختر قاعدة بيانات قبل استخدام التطبيق.",
		"database-not-found": "تعذر العثور على قاعدة البيانات المحددة.",
		"database-source-not-found": "تعذر العثور على قاعدة البيانات المصدر.",
		"database-source-file-missing": "ملف قاعدة البيانات المصدر مفقود.",
		"database-file-already-exists": "يوجد بالفعل ملف قاعدة بيانات بالاسم نفسه.",
		"database-open-failed": "تعذر فتح ملف قاعدة البيانات.",
		"database-create-incomplete": "تم إنشاء قاعدة البيانات ولكن تعذر تحميلها بعد ذلك.",
		"client-not-found": "تعذر العثور على العميل.",
		"quote-not-found": "تعذر العثور على عرض السعر.",
		"order-not-found": "تعذر العثور على الطلب.",
		"delivery-note-not-found": "تعذر العثور على سند التسليم.",
		"delivery-note-order-not-found": "تعذر العثور على الطلب المرتبط بسند التسليم هذا.",
		"delivery-note-inventory-missing": "تعذر العثور على حركة المخزون المرتبطة بسند التسليم هذا.",
		"credit-note-not-found": "تعذر العثور على إشعار الخصم.",
		"credit-note-invoice-not-found": "تعذر العثور على الفاتورة المرتبطة بإشعار الخصم هذا.",
		"invoice-not-found": "تعذر العثور على الفاتورة.",
		"invoice-payment-date-invalid": "تاريخ الدفعة غير صالح.",
		"invoice-payment-amount-invalid": "يجب أن يكون مبلغ الدفعة أكبر من صفر.",
		"invoice-payment-deleted": "لا يمكن إضافة دفعة إلى فاتورة محذوفة.",
		"invoice-payment-exceeds-remaining": "مبلغ الدفعة يتجاوز المبلغ المتبقي غير المدفوع.",
		"invoice-finalize-requires-paid": "يمكن إنهاء الفواتير المدفوعة بالكامل فقط.",
		"invoice-finalized-edit-blocked": "لا يمكن تعديل الفواتير النهائية.",
		"invoice-finalized-delete-blocked": "لا يمكن حذف الفواتير النهائية.",
		"credit-note-requires-finalized-invoice": "يمكن إنشاء إشعارات الخصم للفواتير النهائية فقط.",
		"credit-note-empty": "يجب أن يحتوي إشعار الخصم على عنصر واحد على الأقل.",
		"credit-note-quantity-invalid": "يجب أن تكون كميات إشعار الخصم أكبر من صفر.",
		"credit-note-price-invalid": "لا يمكن أن تكون أسعار إشعار الخصم سالبة.",
		"credit-note-item-not-on-invoice": "أحد عناصر إشعار الخصم غير موجود في الفاتورة الأصلية.",
		"credit-note-quantity-exceeds-invoice": "كمية في إشعار الخصم تتجاوز الكمية المفوترة.",
		"credit-note-price-exceeds-invoice": "سعر في إشعار الخصم يتجاوز السعر المفوتر.",
		"order-status-invalid": "حالة الطلب غير صالحة.",
		"invoice-status-invalid": "حالة الفاتورة غير صالحة.",
		"status-transition-invalid": "لا يُسمح بهذا التغيير في الحالة.",
		"inventory-transaction-missing": "تعذر العثور على حركة المخزون المرتبطة.",
		"data-unavailable": "لا توجد بيانات متاحة لهذا العرض حتى الآن.",
		conflict: "هذا الإجراء يتعارض مع بيانات موجودة."
	}
};
var titles = {
	clients: {
		create: "إضافة عميل",
		update: "تحديث العميل",
		"delete": "حذف العميل"
	},
	products: {
		create: "إضافة منتج",
		update: "تحديث المنتج",
		"update-inventory": "تحديث مخزون المنتج",
		"delete": "حذف المنتج"
	},
	orders: {
		create: "إضافة طلب جديد",
		view: "عرض الطلب",
		update: "تحديث الطلب",
		"delete": "حذف الطلب"
	},
	quotes: {
		create: "إضافة عرض جديد",
		view: "عرض العرض",
		update: "تحديث العرض",
		"delete": "حذف العرض"
	},
	invoices: {
		create: "إضافة فاتورة جديدة",
		view: "عرض الفاتورة",
		update: "تحديث الفاتورة",
		"delete": "حذف الفاتورة",
		"add-payment": "إضافة دفعة"
	},
	"credit-notes": {
		view: "عرض إشعار الخصم"
	},
	"delivery-notes": {
		view: "عرض ملاحظة التسليم"
	},
	organizations: {
		create: "إضافة منظمة جديدة",
		update: "تحديث المنظمة",
		"delete": "هل أنت متأكد أنك تريد حذف المنظمة؟"
	}
};
var modalDescriptions = {
	clients: {
		create: "أضف بيانات التواصل ومعلومات الفوترة لعميل جديد.",
		update: "راجع ملف العميل واحفظ أي تغييرات على بيانات التواصل.",
		"delete": "سيؤدي هذا الإجراء إلى حذف العميل نهائيًا من مساحة العمل."
	},
	products: {
		create: "حدّد الأسعار وحدود المخزون والكمية الافتتاحية لهذا المنتج.",
		update: "عدّل الأسعار والحدود وتفاصيل المنتج قبل الحفظ.",
		"update-inventory": "سجّل الكمية التي تريد إضافتها مرة أخرى إلى المخزون.",
		"delete": "سيؤدي هذا الإجراء إلى حذف المنتج نهائيًا من الكتالوج."
	},
	orders: {
		"delete": "سيؤدي هذا الإجراء إلى حذف الطلب وبنوده المرتبطة نهائيًا."
	},
	quotes: {
		"delete": "سيؤدي هذا الإجراء إلى حذف العرض وبنوده المرتبطة نهائيًا."
	},
	invoices: {
		"delete": "سيؤدي هذا الإجراء إلى حذف الفاتورة وبنودها المرتبطة نهائيًا."
	}
};
const locale_ar_45AE_46json_15abfd43 = {
	seo: seo,
	search: search,
	"pick-date": "اختر تاريخًا",
	"select-status": "اختر حالة",
	routes: routes,
	buttons: buttons,
	translationTitle: translationTitle,
	translationDescription: translationDescription,
	filters: filters,
	columns: columns,
	dropZone: dropZone,
	plrz: plrz,
	fields: fields,
	placeholders: placeholders,
	"seller-profile": {
	title: "ملف البائع",
	description: "معلومات الشركة المستخدمة في مستندات B2B والفواتير.",
	fields: {
		"legal-name": "الاسم القانوني",
		"commercial-name": "الاسم التجاري",
		city: "المدينة",
		currency: "العملة الافتراضية",
		"payment-terms": "مدة الدفع بالأيام",
		"invoice-footer": "تذييل الفاتورة"
	}
},
	settings: settings,
	clients: clients,
	products: products,
	invoices: invoices,
	orders: orders,
	inventory: inventory,
	quotes: quotes,
	"delivery-notes": {
	title: "سندات التسليم",
	description: "إدارة وثائق التسليم والشحنات الخاصة بك."
},
	"credit-notes": {
	title: "إشعارات الخصم",
	description: "إنشاء وإدارة إشعارات الخصم للفواتير الخاصة بك."
},
	status: status,
	dashboard: dashboard,
	tables: tables,
	database: database,
	notifications: notifications,
	titles: titles,
	modalDescriptions: modalDescriptions
};

const DEFAULT_DATE_TIME_FORMAT = {
  short: {
    year: "numeric",
    month: "short",
    day: "numeric"
  },
  monthOnly: { month: "long" },
  long: {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "short",
    hour: "numeric",
    minute: "numeric"
  }
};
const DEFAULT_NUMBER_FORMATS = { AR: {
  currency: {
    style: "currency",
    currency: "MAD",
    notation: "standard"
  },
  decimal: {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  },
  percent: {
    style: "percent",
    useGrouping: false,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }
} };
const datetimeFormats = {
  en: DEFAULT_DATE_TIME_FORMAT,
  fr: DEFAULT_DATE_TIME_FORMAT,
  ar: DEFAULT_DATE_TIME_FORMAT
};
const numberFormats = {
  en: DEFAULT_NUMBER_FORMATS.AR,
  fr: DEFAULT_NUMBER_FORMATS.AR,
  ar: DEFAULT_NUMBER_FORMATS.AR
};
const config_i18n_46config_46ts_c6259a83 = () => ({
  legacy: false,
  availableLocales: [
    "en",
    "fr",
    "ar"
  ],
  datetimeFormats,
  numberFormats
});

// @ts-nocheck
const localeCodes =  [
  "en",
  "fr",
  "ar"
];
const localeLoaders = {
  en: [
    {
      key: "locale_en_45US_46json_21889c40",
      load: () => Promise.resolve(locale_en_45US_46json_21889c40),
      cache: true
    }
  ],
  fr: [
    {
      key: "locale_fr_45FR_46json_1dae35c3",
      load: () => Promise.resolve(locale_fr_45FR_46json_1dae35c3),
      cache: true
    }
  ],
  ar: [
    {
      key: "locale_ar_45AE_46json_15abfd43",
      load: () => Promise.resolve(locale_ar_45AE_46json_15abfd43),
      cache: true
    }
  ]
};
const vueI18nConfigs = [
  () => Promise.resolve(config_i18n_46config_46ts_c6259a83)
];
const normalizedLocales = [
  {
    code: "en",
    language: undefined
  },
  {
    code: "fr",
    language: undefined
  },
  {
    code: "ar",
    language: undefined
  }
];

const setupVueI18nOptions = async (defaultLocale) => {
  const options = await loadVueI18nOptions(vueI18nConfigs);
  options.locale = defaultLocale || options.locale || "en-US";
  options.defaultLocale = defaultLocale;
  options.fallbackLocale ??= false;
  options.messages ??= {};
  for (const locale of localeCodes) {
    options.messages[locale] ??= {};
  }
  return options;
};

function defineNitroPlugin(def) {
  return def;
}

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader$1(event, "Content-Type", "image/x-icon");
        return send$1(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus$1(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send$1(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders$1(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus$1(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

function buildAssetsDir() {
	// TODO: support passing event to `useRuntimeConfig`
	return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
	return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
	// TODO: support passing event to `useRuntimeConfig`
	const app = useRuntimeConfig().app;
	const publicBase = app.cdnURL || app.baseURL;
	return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

function parseAcceptLanguage(value) {
  return value.split(",").map((tag) => tag.split(";")[0]).filter(
    (tag) => !(tag === "*" || tag === "")
  );
}
function createPathIndexLanguageParser(index = 0) {
  return (path) => {
    const rawPath = typeof path === "string" ? path : path.pathname;
    const normalizedPath = rawPath.split("?")[0];
    const parts = normalizedPath.split("/");
    if (parts[0] === "") {
      parts.shift();
    }
    return parts.length > index ? parts[index] || "" : "";
  };
}

function useRuntimeI18n(nuxtApp, event) {
  {
    return useRuntimeConfig(event).public.i18n;
  }
}
function useI18nDetection(nuxtApp) {
  const detectBrowserLanguage = useRuntimeI18n().detectBrowserLanguage;
  const detect = detectBrowserLanguage || {};
  return {
    ...detect,
    enabled: !!detectBrowserLanguage,
    cookieKey: detect.cookieKey || "i18n_redirected"
  };
}
function resolveRootRedirect(config) {
  if (!config) {
    return void 0;
  }
  return {
    path: "/" + (isString(config) ? config : config.path).replace(/^\//, ""),
    code: !isString(config) && config.statusCode || 302
  };
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}

function createLocaleConfigs(fallbackLocale) {
  const localeConfigs = {};
  for (const locale of localeCodes) {
    const fallbacks = getFallbackLocaleCodes(fallbackLocale, [locale]);
    const cacheable = isLocaleWithFallbacksCacheable(locale, fallbacks);
    localeConfigs[locale] = { fallbacks, cacheable };
  }
  return localeConfigs;
}
function getFallbackLocaleCodes(fallback, locales) {
  if (fallback === false) {
    return [];
  }
  if (isArray(fallback)) {
    return fallback;
  }
  let fallbackLocales = [];
  if (isString(fallback)) {
    if (locales.every((locale) => locale !== fallback)) {
      fallbackLocales.push(fallback);
    }
    return fallbackLocales;
  }
  const targets = [...locales, "default"];
  for (const locale of targets) {
    if (locale in fallback == false) {
      continue;
    }
    fallbackLocales = [...fallbackLocales, ...fallback[locale].filter(Boolean)];
  }
  return fallbackLocales;
}
function isLocaleCacheable(locale) {
  return localeLoaders[locale] != null && localeLoaders[locale].every((loader) => loader.cache !== false);
}
function isLocaleWithFallbacksCacheable(locale, fallbackLocales) {
  return isLocaleCacheable(locale) && fallbackLocales.every((fallbackLocale) => isLocaleCacheable(fallbackLocale));
}
function getDefaultLocaleForDomain(host) {
  return normalizedLocales.find((l) => !!l.defaultForDomains?.includes(host))?.code;
}
const isSupportedLocale = (locale) => localeCodes.includes(locale || "");

function useI18nContext(event) {
  if (event.context.nuxtI18n == null) {
    throw new Error("Nuxt I18n server context has not been set up yet.");
  }
  return event.context.nuxtI18n;
}
function tryUseI18nContext(event) {
  return event.context.nuxtI18n;
}
const getHost = (event) => getRequestURL$1(event, { xForwardedHost: true }).host;
async function initializeI18nContext(event) {
  const runtimeI18n = useRuntimeI18n(void 0, event);
  const defaultLocale = runtimeI18n.defaultLocale || "";
  const options = await setupVueI18nOptions(getDefaultLocaleForDomain(getHost(event)) || defaultLocale);
  const localeConfigs = createLocaleConfigs(options.fallbackLocale);
  const ctx = createI18nContext();
  ctx.vueI18nOptions = options;
  ctx.localeConfigs = localeConfigs;
  event.context.nuxtI18n = ctx;
  return ctx;
}
function createI18nContext() {
  return {
    messages: {},
    slp: {},
    localeConfigs: {},
    trackMap: {},
    vueI18nOptions: void 0,
    trackKey(key, locale) {
      this.trackMap[locale] ??= /* @__PURE__ */ new Set();
      this.trackMap[locale].add(key);
    }
  };
}

function matchBrowserLocale(locales, browserLocales) {
  const matchedLocales = [];
  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = locales.find((l) => l.language?.toLowerCase() === browserCode.toLowerCase());
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 1 - index / browserLocales.length });
      break;
    }
  }
  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split("-")[0].toLowerCase();
    const matchedLocale = locales.find((l) => l.language?.split("-")[0].toLowerCase() === languageCode);
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 0.999 - index / browserLocales.length });
      break;
    }
  }
  return matchedLocales;
}
function compareBrowserLocale(a, b) {
  if (a.score === b.score) {
    return b.code.length - a.code.length;
  }
  return b.score - a.score;
}
function findBrowserLocale(locales, browserLocales) {
  const matchedLocales = matchBrowserLocale(
    locales.map((l) => ({ code: l.code, language: l.language || l.code })),
    browserLocales
  );
  return matchedLocales.sort(compareBrowserLocale).at(0)?.code ?? "";
}

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[],"style":[],"script":[],"noscript":[]};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appSpaLoaderTag = "div";

const appSpaLoaderAttrs = {"id":"__nuxt-loader"};

const appId = "nuxt-app";

const separator = "___";
const pathLanguageParser = createPathIndexLanguageParser(0);
const getLocaleFromRoutePath = (path) => pathLanguageParser(path);
const getLocaleFromRouteName = (name) => name.split(separator).at(1) ?? "";
function normalizeInput(input) {
  return typeof input !== "object" ? String(input) : String(input?.name || input?.path || "");
}
function getLocaleFromRoute(route) {
  const input = normalizeInput(route);
  return input[0] === "/" ? getLocaleFromRoutePath(input) : getLocaleFromRouteName(input);
}

function matchDomainLocale(locales, host, pathLocale) {
  const normalizeDomain = (domain = "") => domain.replace(/https?:\/\//, "");
  const matches = locales.filter(
    (locale) => normalizeDomain(locale.domain) === host || toArray(locale.domains).includes(host)
  );
  if (matches.length <= 1) {
    return matches[0]?.code;
  }
  return (
    // match by current path locale
    matches.find((l) => l.code === pathLocale)?.code || matches.find((l) => l.defaultForDomains?.includes(host) ?? l.domainDefault)?.code
  );
}

const getCookieLocale = (event, cookieName) => (getCookie(event, cookieName)) || void 0;
const getRouteLocale = (event, route) => getLocaleFromRoute(route);
const getHeaderLocale = (event) => findBrowserLocale(normalizedLocales, parseAcceptLanguage(getRequestHeader$2(event, "accept-language") || ""));
const getHostLocale = (event, path, domainLocales) => {
  const host = getRequestURL$1(event, { xForwardedHost: true }).host;
  const locales = normalizedLocales.map((l) => ({
    ...l,
    domain: domainLocales[l.code]?.domain ?? l.domain
  }));
  return matchDomainLocale(locales, host, getLocaleFromRoutePath(path));
};
const useDetectors = (event, config, nuxtApp) => {
  if (!event) {
    throw new Error("H3Event is required for server-side locale detection");
  }
  const runtimeI18n = useRuntimeI18n();
  return {
    cookie: () => getCookieLocale(event, config.cookieKey),
    header: () => getHeaderLocale(event) ,
    navigator: () => void 0,
    host: (path) => getHostLocale(event, path, runtimeI18n.domainLocales),
    route: (path) => getRouteLocale(event, path)
  };
};

// Generated by @nuxtjs/i18n
const pathToI18nConfig = {
  "/credit-notes/:id()": {
    "en": "/credit-notes/:id()",
    "fr": "/credit-notes/:id()",
    "ar": "/credit-notes/:id()"
  },
  "/delivery-notes/:id()": {
    "en": "/delivery-notes/:id()",
    "fr": "/delivery-notes/:id()",
    "ar": "/delivery-notes/:id()"
  },
  "/invoices/:id()": {
    "en": "/invoices/:id()",
    "fr": "/invoices/:id()",
    "ar": "/invoices/:id()"
  },
  "/orders/:id()": {
    "en": "/orders/:id()",
    "fr": "/orders/:id()",
    "ar": "/orders/:id()"
  },
  "/quotes/:id()": {
    "en": "/quotes/:id()",
    "fr": "/quotes/:id()",
    "ar": "/quotes/:id()"
  },
  "/clients": {
    "en": "/clients",
    "fr": "/clients",
    "ar": "/clients"
  },
  "/credit-notes": {
    "en": "/credit-notes",
    "fr": "/credit-notes",
    "ar": "/credit-notes"
  },
  "/delivery-notes": {
    "en": "/delivery-notes",
    "fr": "/delivery-notes",
    "ar": "/delivery-notes"
  },
  "/inventory": {
    "en": "/inventory",
    "fr": "/inventory",
    "ar": "/inventory"
  },
  "/invoices": {
    "en": "/invoices",
    "fr": "/invoices",
    "ar": "/invoices"
  },
  "/onboarding": {
    "en": "/onboarding",
    "fr": "/onboarding",
    "ar": "/onboarding"
  },
  "/orders": {
    "en": "/orders",
    "fr": "/orders",
    "ar": "/orders"
  },
  "/products": {
    "en": "/products",
    "fr": "/products",
    "ar": "/products"
  },
  "/quotes": {
    "en": "/quotes",
    "fr": "/quotes",
    "ar": "/quotes"
  },
  "/settings": {
    "en": "/settings",
    "fr": "/settings",
    "ar": "/settings"
  },
  "/": {
    "en": "/",
    "fr": "/",
    "ar": "/"
  }
};
const i18nPathToPath = {
  "/credit-notes/:id()": "/credit-notes/:id()",
  "/delivery-notes/:id()": "/delivery-notes/:id()",
  "/invoices/:id()": "/invoices/:id()",
  "/orders/:id()": "/orders/:id()",
  "/quotes/:id()": "/quotes/:id()",
  "/clients": "/clients",
  "/credit-notes": "/credit-notes",
  "/delivery-notes": "/delivery-notes",
  "/inventory": "/inventory",
  "/invoices": "/invoices",
  "/onboarding": "/onboarding",
  "/orders": "/orders",
  "/products": "/products",
  "/quotes": "/quotes",
  "/settings": "/settings",
  "/": "/"
};

const formatTrailingSlash = withoutTrailingSlash;
const matcher = createRouterMatcher([], {});
for (const path of Object.keys(i18nPathToPath)) {
  matcher.addRoute({ path, component: () => "", meta: {} });
}
const getI18nPathToI18nPath = (path, locale) => {
  if (!path || !locale) {
    return;
  }
  const plainPath = i18nPathToPath[path];
  const i18nConfig = pathToI18nConfig[plainPath];
  if (i18nConfig && i18nConfig[locale]) {
    return i18nConfig[locale] === true ? plainPath : i18nConfig[locale];
  }
};
function isExistingNuxtRoute(path) {
  if (path === "") {
    return;
  }
  if (path.endsWith("/__nuxt_error")) {
    return;
  }
  const resolvedMatch = matcher.resolve({ path }, { path: "/", name: "", matched: [], params: {}, meta: {} });
  return resolvedMatch.matched.length > 0 ? resolvedMatch : void 0;
}
function matchLocalized(path, locale, defaultLocale) {
  if (path === "") {
    return;
  }
  const parsed = parsePath(path);
  const resolvedMatch = matcher.resolve(
    { path: parsed.pathname || "/" },
    { path: "/", name: "", matched: [], params: {}, meta: {} }
  );
  if (resolvedMatch.matched.length > 0) {
    const alternate = getI18nPathToI18nPath(resolvedMatch.matched[0].path, locale);
    const match = matcher.resolve(
      { params: resolvedMatch.params },
      { path: alternate || "/", name: "", matched: [], params: {}, meta: {} }
    );
    const isPrefixable = prefixable(locale, defaultLocale);
    return formatTrailingSlash(withLeadingSlash(joinURL$2(isPrefixable ? locale : "", match.path)), true);
  }
}
function prefixable(currentLocale, defaultLocale) {
  return (currentLocale !== defaultLocale || "prefix_except_default" === "prefix");
}

function* detect(detectors, detection, path) {
  if (detection.enabled) {
    yield { locale: detectors.cookie(), source: "cookie" };
    yield { locale: detectors.header(), source: "header" };
  }
  {
    yield { locale: detectors.route(path), source: "route" };
  }
  yield { locale: detection.fallbackLocale, source: "fallback" };
}
function createRedirectResponse(event, dest, code) {
  event.node.res.setHeader("location", dest);
  event.node.res.statusCode = sanitizeStatusCode(code, event.node.res.statusCode);
  return {
    headers: event.node.res.getHeaders(),
    statusCode: event.node.res.statusCode,
    body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${dest.replace(/"/g, "%22")}"></head></html>`
  };
}
const _jUPdNkXii_7K3vp5RJ6unVNIF3P61keApNAZeZFRE7w = defineNitroPlugin(async (nitro) => {
  const runtimeI18n = useRuntimeI18n();
  const rootRedirect = resolveRootRedirect(runtimeI18n.rootRedirect);
  runtimeI18n.defaultLocale || "";
  try {
    const cacheStorage = useStorage("cache");
    const cachedKeys = await cacheStorage.getKeys("nitro:handlers:i18n");
    await Promise.all(cachedKeys.map((key) => cacheStorage.removeItem(key)));
  } catch {
  }
  const detection = useI18nDetection();
  const cookieOptions = {
    path: "/",
    domain: detection.cookieDomain || void 0,
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: detection.cookieSecure
  };
  const createBaseUrlGetter = () => {
    isFunction(runtimeI18n.baseUrl) ? "" : runtimeI18n.baseUrl || "";
    if (isFunction(runtimeI18n.baseUrl)) {
      console.warn("[nuxt-i18n] Configuring baseUrl as a function is deprecated and will be removed in v11.");
      return () => "";
    }
    return (event, defaultLocale) => {
      return "";
    };
  };
  function resolveRedirectPath(event, path, pathLocale, defaultLocale, detector) {
    let locale = "";
    for (const detected of detect(detector, detection, event.path)) {
      if (detected.locale && isSupportedLocale(detected.locale)) {
        locale = detected.locale;
        break;
      }
    }
    locale ||= defaultLocale;
    function getLocalizedMatch(locale2) {
      const res = matchLocalized(path || "/", locale2, defaultLocale);
      if (res && res !== event.path) {
        return res;
      }
    }
    let resolvedPath = void 0;
    let redirectCode = 302;
    const requestURL = getRequestURL$1(event);
    if (rootRedirect && requestURL.pathname === "/") {
      locale = detection.enabled && locale || defaultLocale;
      resolvedPath = isSupportedLocale(detector.route(rootRedirect.path)) && rootRedirect.path || matchLocalized(rootRedirect.path, locale, defaultLocale);
      redirectCode = rootRedirect.code;
    } else if (runtimeI18n.redirectStatusCode) {
      redirectCode = runtimeI18n.redirectStatusCode;
    }
    switch (detection.redirectOn) {
      case "root":
        if (requestURL.pathname !== "/") {
          break;
        }
      // fallthrough (root has no prefix)
      case "no prefix":
        if (pathLocale) {
          break;
        }
      // fallthrough to resolve
      case "all":
        resolvedPath ??= getLocalizedMatch(locale);
        break;
    }
    if (requestURL.pathname === "/" && "prefix_except_default" === "prefix") ;
    return { path: resolvedPath, code: redirectCode, locale };
  }
  const baseUrlGetter = createBaseUrlGetter();
  nitro.hooks.hook("request", async (event) => {
    await initializeI18nContext(event);
  });
  nitro.hooks.hook("render:before", async (context) => {
    const { event } = context;
    const ctx = useI18nContext(event);
    const url = getRequestURL$1(event);
    const detector = useDetectors(event, detection);
    const localeSegment = detector.route(event.path);
    const pathLocale = isSupportedLocale(localeSegment) && localeSegment || void 0;
    const path = (pathLocale && url.pathname.slice(pathLocale.length + 1)) ?? url.pathname;
    if (!url.pathname.includes("/_i18n/KQzufZMo") && !isExistingNuxtRoute(path)) {
      return;
    }
    const resolved = resolveRedirectPath(event, path, pathLocale, ctx.vueI18nOptions.defaultLocale, detector);
    if (resolved.path && resolved.path !== url.pathname) {
      ctx.detectLocale = resolved.locale;
      detection.useCookie && setCookie(event, detection.cookieKey, resolved.locale, cookieOptions);
      context.response = createRedirectResponse(
        event,
        joinURL$2(baseUrlGetter(event, ctx.vueI18nOptions.defaultLocale), resolved.path + url.search),
        resolved.code
      );
      return;
    }
  });
  nitro.hooks.hook("render:html", (htmlContext, { event }) => {
    tryUseI18nContext(event);
  });
});

const rootDir = "/Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web";

const devReducers = {
	VNode: (data) => isVNode(data) ? {
		type: data.type,
		props: data.props
	} : undefined,
	URL: (data) => data instanceof URL ? data.toString() : undefined
};
const asyncContext = getContext$1("nuxt-dev", {
	asyncContext: true,
	AsyncLocalStorage
});
const _zEiAyzyHmrsI_stiraqe9NPhGnaRgQnQ74ajcAp1QM = (nitroApp) => {
	const handler = nitroApp.h3App.handler;
	nitroApp.h3App.handler = (event) => {
		return asyncContext.callAsync({
			logs: [],
			event
		}, () => handler(event));
	};
	onConsoleLog((_log) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		const rawStack = captureRawStackTrace();
		if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
			return;
		}
		const trace = [];
		let filename = "";
		for (const entry of parseRawStackTrace(rawStack)) {
			if (entry.source === globalThis._importMeta_.url) {
				continue;
			}
			if (EXCLUDE_TRACE_RE.test(entry.source)) {
				continue;
			}
			filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
			trace.push({
				...entry,
				source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
			});
		}
		const log = {
			..._log,
			filename,
			stack: trace
		};
		// retain log to be include in the next render
		ctx.logs.push(log);
	});
	nitroApp.hooks.hook("afterResponse", () => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		return nitroApp.hooks.callHook("dev:ssr-logs", {
			logs: ctx.logs,
			path: ctx.event.path
		});
	});
	// Pass any logs to the client
	nitroApp.hooks.hook("render:html", (htmlContext) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		try {
			const reducers = Object.assign(Object.create(null), devReducers, ctx.event.context["~payloadReducers"]);
			htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
		} catch (e) {
			const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
			console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/4.x/api/composables/use-nuxt-app#payload.`);
		}
	});
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
	consola$1.addReporter({ log(logObj) {
		callback(logObj);
	} });
	consola$1.wrapConsole();
}

const plugins = [
  _iZsu9XrWAnDBOQ9D7aeZwLuZel5waTX1HupZTMndoY,
_jUPdNkXii_7K3vp5RJ6unVNIF3P61keApNAZeZFRE7w,
_zEiAyzyHmrsI_stiraqe9NPhGnaRgQnQ74ajcAp1QM,
_wH6JrtIxmaSoA8lCPWFnE9z4lQeXW6H5z3l5aymEQw
];

const assets = {};

function readAsset (id) {
  const serverDir = dirname$1(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve$1(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _57Wvd5 = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash$1(withoutTrailingSlash$1(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader$1(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({ statusCode: 404 });
    }
    return;
  }
  if (asset.encoding !== void 0) {
    appendResponseHeader$1(event, "Vary", "Accept-Encoding");
  }
  const ifNotMatch = getRequestHeader$1(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus$1(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader$1(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus$1(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader$1(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader$1(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader$1(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader$1(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader$1(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const VueResolver = (_, value) => {
  return isRef(value) ? toValue(value) : value;
};

const headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

// @__NO_SIDE_EFFECTS__
function resolveUnrefHeadInput(input) {
  return walkResolver(input, VueResolver);
}

const NUXT_PAYLOAD_INLINE = true;
const NUXT_RUNTIME_PAYLOAD_EXTRACTION = false;

// @__NO_SIDE_EFFECTS__
function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

const unheadOptions = {
  disableDefaults: true,
};

function createSSRContext(event) {
	const ssrContext = {
		url: event.path,
		event,
		runtimeConfig: useRuntimeConfig(event),
		noSSR: true,
		head: createHead(unheadOptions),
		error: false,
		nuxt: undefined,
		payload: {},
		["~payloadReducers"]: Object.create(null),
		modules: new Set()
	};
	return ssrContext;
}
function setSSRError(ssrContext, error) {
	ssrContext.error = true;
	ssrContext.payload = { error };
	ssrContext.url = error.url;
}

const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
// @ts-expect-error file will be produced after app build
const getServerEntry = () => Promise.resolve().then(function () { return server$1; }).then((r) => r.default || r);
// @ts-expect-error file will be produced after app build
const getClientManifest = () => import('file:///Users/lijiapeng/Project/beautyLevel/QueryLabelRlScaling-7193-public/public-74-Mahalli-web/environment/Mahalli-web/.nuxt//dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
// -- SSR Renderer --
const getSSRRenderer = lazyCachedFunction(async () => {
	// Load server bundle
	const createSSRApp = await getServerEntry();
	if (!createSSRApp) {
		throw new Error("Server bundle is not available");
	}
	// Load precomputed dependencies
	const precomputed = undefined ;
	// Create renderer
	const renderer = createRenderer(createSSRApp, {
		precomputed,
		manifest: await getClientManifest() ,
		renderToString: renderToString$1,
		buildAssetsURL
	});
	async function renderToString$1(input, context) {
		const html = await renderToString(input, context);
		// In development with vite-node, the manifest is on-demand and will be available after rendering
		// eslint-disable-next-line no-restricted-globals
		if (process.env.NUXT_VITE_NODE_OPTIONS) {
			renderer.rendererContext.updateManifest(await getClientManifest());
		}
		return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
	}
	return renderer;
});
// -- SPA Renderer --
const getSPARenderer = lazyCachedFunction(async () => {
	const precomputed = undefined ;
	// @ts-expect-error virtual file
	const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => {
		{
			const APP_SPA_LOADER_OPEN_TAG = `<${appSpaLoaderTag}${propsToString(appSpaLoaderAttrs)}>`;
			const APP_SPA_LOADER_CLOSE_TAG = `</${appSpaLoaderTag}>`;
			const appTemplate = APP_ROOT_OPEN_TAG + APP_ROOT_CLOSE_TAG;
			const loaderTemplate = r ? APP_SPA_LOADER_OPEN_TAG + r + APP_SPA_LOADER_CLOSE_TAG : "";
			return appTemplate + loaderTemplate;
		}
	});
	// Create SPA renderer and cache the result for all requests
	const renderer = createRenderer(() => () => {}, {
		precomputed,
		manifest: await getClientManifest() ,
		renderToString: () => spaTemplate,
		buildAssetsURL
	});
	const result = await renderer.renderToString({});
	const renderToString = (ssrContext) => {
		const config = useRuntimeConfig(ssrContext.event);
		ssrContext.modules ||= new Set();
		ssrContext.payload.serverRendered = false;
		ssrContext.config = {
			public: config.public,
			app: config.app
		};
		return Promise.resolve(result);
	};
	return {
		rendererContext: renderer.rendererContext,
		renderToString
	};
});
function lazyCachedFunction(fn) {
	let res = null;
	return () => {
		if (res === null) {
			res = fn().catch((err) => {
				res = null;
				throw err;
			});
		}
		return res;
	};
}
function getRenderer(ssrContext) {
	return getSPARenderer() ;
}
// @ts-expect-error file will be produced after app build
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));

async function renderInlineStyles(usedModules) {
	const styleMap = await getSSRStyles();
	const inlinedStyles = new Set();
	for (const mod of usedModules) {
		if (mod in styleMap && styleMap[mod]) {
			for (const style of await styleMap[mod]()) {
				inlinedStyles.add(style);
			}
		}
	}
	return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}

// @ts-expect-error virtual file
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
/**
* remove the root node from the html body
*/
function getServerComponentHTML(body) {
	const match = body.match(ROOT_NODE_REGEX);
	return match?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
		return undefined;
	}
	const response = {};
	for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) {
		response[name] = {
			...slot,
			fallback: ssrContext.teleports?.[`island-fallback=${name}`]
		};
	}
	return response;
}
function getClientIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
		return undefined;
	}
	const response = {};
	for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
		// remove teleport anchor to avoid hydration issues
		const html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
		response[clientUid] = {
			...component,
			html,
			slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
		};
	}
	return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
	const entries = Object.entries(teleports);
	const slots = {};
	for (const [key, value] of entries) {
		const match = key.match(SSR_CLIENT_SLOT_MARKER);
		if (match) {
			const [, id, slot] = match;
			if (!slot || clientUid !== id) {
				continue;
			}
			slots[slot] = value;
		}
	}
	return slots;
}
function replaceIslandTeleports(ssrContext, html) {
	const { teleports, islandContext } = ssrContext;
	if (islandContext || !teleports) {
		return html;
	}
	for (const key in teleports) {
		const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
		if (matchClientComp) {
			const [, uid, clientId] = matchClientComp;
			if (!uid || !clientId) {
				continue;
			}
			html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
				return full + teleports[key];
			});
			continue;
		}
		const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
		if (matchSlot) {
			const [, uid, slot] = matchSlot;
			if (!uid || !slot) {
				continue;
			}
			html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
				return full + teleports[key];
			});
		}
	}
	return html;
}

const ISLAND_SUFFIX_RE = /\.json(?:\?.*)?$/;
const handler$1 = defineEventHandler$1(async (event) => {
	const nitroApp = useNitroApp();
	setResponseHeaders(event, {
		"content-type": "application/json;charset=utf-8",
		"x-powered-by": "Nuxt"
	});
	const islandContext = await getIslandContext(event);
	const ssrContext = {
		...createSSRContext(event),
		islandContext,
		noSSR: false,
		url: islandContext.url
	};
	// Render app
	const renderer = await getSSRRenderer();
	const renderResult = await renderer.renderToString(ssrContext).catch(async (err) => {
		await ssrContext.nuxt?.hooks.callHook("app:error", err);
		throw err;
	});
	// Handle errors
	if (ssrContext.payload?.error) {
		throw ssrContext.payload.error;
	}
	const inlinedStyles = await renderInlineStyles(ssrContext.modules ?? []);
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult
	});
	if (inlinedStyles.length) {
		ssrContext.head.push({ style: inlinedStyles });
	}
	{
		const { styles } = getRequestDependencies(ssrContext, renderer.rendererContext);
		const link = [];
		for (const resource of Object.values(styles)) {
			// Do not add links to resources that are inlined (vite v5+)
			if ("inline" in getQuery$1(resource.file)) {
				continue;
			}
			// Add CSS links in <head> for CSS files
			// - in dev mode when rendering an island and the file has scoped styles and is not a page
			if (resource.file.includes("scoped") && !resource.file.includes("pages/")) {
				link.push({
					rel: "stylesheet",
					href: renderer.rendererContext.buildAssetsURL(resource.file),
					crossorigin: ""
				});
			}
		}
		if (link.length) {
			ssrContext.head.push({ link }, { mode: "server" });
		}
	}
	const islandHead = {};
	for (const entry of ssrContext.head.entries.values()) {
		// eslint-disable-next-line @typescript-eslint/no-deprecated
		for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
			const currentValue = islandHead[key];
			if (Array.isArray(currentValue)) {
				currentValue.push(...value);
			} else {
				islandHead[key] = value;
			}
		}
	}
	const islandResponse = {
		id: islandContext.id,
		head: islandHead,
		html: getServerComponentHTML(renderResult.html),
		components: getClientIslandResponse(ssrContext),
		slots: getSlotIslandResponse(ssrContext)
	};
	await nitroApp.hooks.callHook("render:island", islandResponse, {
		event,
		islandContext
	});
	return islandResponse;
});
const ISLAND_PATH_PREFIX = "/__nuxt_island/";
const VALID_COMPONENT_NAME_RE = /^[a-z][\w.-]*$/i;
async function getIslandContext(event) {
	let url = event.path || "";
	if (!url.startsWith(ISLAND_PATH_PREFIX)) {
		throw createError$1({
			statusCode: 400,
			statusMessage: "Invalid island request path"
		});
	}
	const componentParts = url.substring(ISLAND_PATH_PREFIX.length).replace(ISLAND_SUFFIX_RE, "").split("_");
	const hashId = componentParts.length > 1 ? componentParts.pop() : undefined;
	const componentName = componentParts.join("_");
	if (!componentName || !VALID_COMPONENT_NAME_RE.test(componentName)) {
		throw createError$1({
			statusCode: 400,
			statusMessage: "Invalid island component name"
		});
	}
	const context = event.method === "GET" ? getQuery$2(event) : await readBody(event);
	// Only extract known context fields to prevent arbitrary data injection
	return {
		url: typeof context?.url === "string" ? context.url : "/",
		id: hashId,
		name: componentName,
		props: destr$1(context.props) || {},
		slots: {},
		components: {}
	};
}

const storage = prefixStorage(useStorage(), "i18n");
function cachedFunctionI18n(fn, opts) {
  opts = { maxAge: 1, ...opts };
  const pending = {};
  async function get(key, resolver) {
    const isPending = pending[key];
    if (!isPending) {
      pending[key] = Promise.resolve(resolver());
    }
    try {
      return await pending[key];
    } finally {
      delete pending[key];
    }
  }
  return async (...args) => {
    const key = [opts.name, opts.getKey(...args)].join(":").replace(/:\/$/, ":index");
    const maxAge = opts.maxAge ?? 1;
    const isCacheable = !opts.shouldBypassCache(...args) && maxAge >= 0;
    const cache = isCacheable && await storage.getItemRaw(key);
    if (!cache || cache.ttl < Date.now()) {
      pending[key] = Promise.resolve(fn(...args));
      const value = await get(key, () => fn(...args));
      if (isCacheable) {
        await storage.setItemRaw(key, { ttl: Date.now() + maxAge * 1e3, value, mtime: Date.now() });
      }
      return value;
    }
    return cache.value;
  };
}

const _getMessages = async (locale) => {
  return { [locale]: await getLocaleMessagesMerged(locale, localeLoaders[locale]) };
};
cachedFunctionI18n(_getMessages, {
  name: "messages",
  maxAge: -1 ,
  getKey: (locale) => locale,
  shouldBypassCache: (locale) => !isLocaleCacheable(locale)
});
const getMessages = _getMessages ;
const _getMergedMessages = async (locale, fallbackLocales) => {
  const merged = {};
  try {
    if (fallbackLocales.length > 0) {
      const messages = await Promise.all(fallbackLocales.map(getMessages));
      for (const message2 of messages) {
        deepCopy(message2, merged);
      }
    }
    const message = await getMessages(locale);
    deepCopy(message, merged);
    return merged;
  } catch (e) {
    throw new Error("Failed to merge messages: " + e.message);
  }
};
const getMergedMessages = cachedFunctionI18n(_getMergedMessages, {
  name: "merged-single",
  maxAge: -1 ,
  getKey: (locale, fallbackLocales) => `${locale}-[${[...new Set(fallbackLocales)].sort().join("-")}]`,
  shouldBypassCache: (locale, fallbackLocales) => !isLocaleWithFallbacksCacheable(locale, fallbackLocales)
});
const _getAllMergedMessages = async (locales) => {
  const merged = {};
  try {
    const messages = await Promise.all(locales.map(getMessages));
    for (const message of messages) {
      deepCopy(message, merged);
    }
    return merged;
  } catch (e) {
    throw new Error("Failed to merge messages: " + e.message);
  }
};
cachedFunctionI18n(_getAllMergedMessages, {
  name: "merged-all",
  maxAge: -1 ,
  getKey: (locales) => locales.join("-"),
  shouldBypassCache: (locales) => !locales.every((locale) => isLocaleCacheable(locale))
});

const _messagesHandler = defineEventHandler$2(async (event) => {
  const locale = getRouterParam(event, "locale");
  if (!locale) {
    throw createError$2({ status: 400, message: "Locale not specified." });
  }
  const ctx = useI18nContext(event);
  if (ctx.localeConfigs && locale in ctx.localeConfigs === false) {
    throw createError$2({ status: 404, message: `Locale '${locale}' not found.` });
  }
  const messages = await getMergedMessages(locale, ctx.localeConfigs?.[locale]?.fallbacks ?? []);
  deepCopy(messages, ctx.messages);
  return ctx.messages;
});
const _cachedMessageLoader = defineCachedFunction(_messagesHandler, {
  name: "i18n:messages-internal",
  maxAge: -1 ,
  getKey: (event) => [getRouterParam(event, "locale") ?? "null", getRouterParam(event, "hash") ?? "null"].join("-"),
  async shouldBypassCache(event) {
    const locale = getRouterParam(event, "locale");
    if (locale == null) {
      return false;
    }
    const ctx = tryUseI18nContext(event) || await initializeI18nContext(event);
    return !ctx.localeConfigs?.[locale]?.cacheable;
  }
});
defineCachedEventHandler(_cachedMessageLoader, {
  name: "i18n:messages",
  maxAge: -1 ,
  swr: false,
  getKey: (event) => [getRouterParam(event, "locale") ?? "null", getRouterParam(event, "hash") ?? "null"].join("-")
});
const _wmeQRY = _messagesHandler ;

const _lazy_HlQd6K = () => Promise.resolve().then(function () { return renderer; });

const handlers = [
  { route: '', handler: _57Wvd5, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_HlQd6K, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: handler$1, lazy: false, middleware: false, method: undefined },
  { route: '/_i18n/:hash/:locale/messages.json', handler: _wmeQRY, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_HlQd6K, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

if (!globalThis.crypto) {
  globalThis.crypto = nodeCrypto.webcrypto;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server$2 = new Server(toNodeListener(nitroApp.h3App));
let listener;
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam$1(event, "name");
    const payload = {
      ...getQuery$3(event),
      ...await readBody$1(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server$2.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server$2.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join(tmpdir(), socketName);
}
async function shutdown() {
  server$2.closeAllConnections?.();
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const _messages = {
	"appName": "Nuxt",
	"status": 500,
	"statusText": "Internal server error",
	"description": "This page is temporarily unavailable.",
	"refresh": "Refresh this page"
};
const template$1 = (messages) => {
	messages = {
		..._messages,
		...messages
	};
	return "<!DOCTYPE html><html lang=\"en\"><head><title>" + escapeHtml(messages.status) + " - " + escapeHtml(messages.statusText) + " | " + escapeHtml(messages.appName) + "</title><meta charset=\"utf-8\"><meta content=\"width=device-width,initial-scale=1.0,minimum-scale=1.0\" name=\"viewport\"><script>!function(){const e=document.createElement(\"link\").relList;if(!(e&&e.supports&&e.supports(\"modulepreload\"))){for(const e of document.querySelectorAll('link[rel=\"modulepreload\"]'))r(e);new MutationObserver(e=>{for(const o of e)if(\"childList\"===o.type)for(const e of o.addedNodes)\"LINK\"===e.tagName&&\"modulepreload\"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),\"use-credentials\"===e.crossOrigin?r.credentials=\"include\":\"anonymous\"===e.crossOrigin?r.credentials=\"omit\":r.credentials=\"same-origin\",r}(e);fetch(e.href,r)}}();<\/script><style>*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:\"\"}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1,h2{font-size:inherit;font-weight:inherit}h1,h2,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.grid{display:grid}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-2{padding-left:.5rem;padding-right:.5rem}.text-center{text-align:center}.text-\\[80px\\]{font-size:80px}.text-2xl{font-size:1.5rem;line-height:2rem}.text-\\[\\#020420\\]{--un-text-opacity:1;color:rgb(2 4 32/var(--un-text-opacity))}.text-\\[\\#64748B\\]{--un-text-opacity:1;color:rgb(100 116 139/var(--un-text-opacity))}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-wide{letter-spacing:.025em}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.tabular-nums{--un-numeric-spacing:tabular-nums;font-variant-numeric:var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media(prefers-color-scheme:dark){.dark\\:bg-\\[\\#020420\\]{--un-bg-opacity:1;background-color:rgb(2 4 32/var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media(min-width:640px){.sm\\:text-\\[110px\\]{font-size:110px}.sm\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}</style></head><body class=\"antialiased bg-white dark:bg-[#020420] dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-[#020420] tracking-wide\"><div class=\"max-w-520px text-center\"><h1 class=\"font-semibold leading-none mb-4 sm:text-[110px] tabular-nums text-[80px]\">" + escapeHtml(messages.status) + "</h1><h2 class=\"font-semibold mb-2 sm:text-3xl text-2xl\">" + escapeHtml(messages.statusText) + "</h2><p class=\"mb-4 px-2 text-[#64748B] text-md\">" + escapeHtml(messages.description) + "</p></div></body></html>";
};

const error500 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template$1
}, Symbol.toStringTag, { value: 'Module' }));

const server = () => {};

const server$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: server
}, Symbol.toStringTag, { value: 'Module' }));

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template
}, Symbol.toStringTag, { value: 'Module' }));

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: styles
}, Symbol.toStringTag, { value: 'Module' }));

function renderPayloadResponse(ssrContext) {
	return {
		body: encodeForwardSlashes(stringify(splitPayload(ssrContext).payload, ssrContext["~payloadReducers"])) ,
		statusCode: getResponseStatus$1(ssrContext.event),
		statusMessage: getResponseStatusText(ssrContext.event),
		headers: {
			"content-type": "application/json;charset=utf-8" ,
			"x-powered-by": "Nuxt"
		}
	};
}
function renderPayloadJsonScript(opts) {
	const contents = opts.data ? encodeForwardSlashes(stringify(opts.data, opts.ssrContext["~payloadReducers"])) : "";
	const payload = {
		"type": "application/json",
		"innerHTML": contents,
		"data-nuxt-data": appId,
		"data-ssr": false
	};
	{
		payload.id = "__NUXT_DATA__";
	}
	if (opts.src) {
		payload["data-src"] = opts.src;
	}
	const config = uneval(opts.ssrContext.config);
	return [payload, { innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}` }];
}
/**
* Encode forward slashes as unicode escape sequences to prevent
* Google from treating them as internal links and trying to crawl them.
* @see https://github.com/nuxt/nuxt/issues/24175
*/
function encodeForwardSlashes(str) {
	return str.replaceAll("/", "\\u002F");
}
function splitPayload(ssrContext) {
	const { data, prerenderedAt, ...initial } = ssrContext.payload;
	return {
		initial: {
			...initial,
			prerenderedAt
		},
		payload: {
			data,
			prerenderedAt
		}
	};
}

const renderSSRHeadOptions = {"omitLineBreaks":true};

// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__buildAssetsURL = buildAssetsURL;
// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__publicAssetsURL = publicAssetsURL;
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const PAYLOAD_FILENAME = "_payload.json" ;
const handler = defineRenderHandler(async (event) => {
	const nitroApp = useNitroApp();
	// Whether we're rendering an error page
	const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$2(event) : null;
	if (ssrError && !("__unenv__" in event.node.req)) {
		throw createError$1({
			status: 404,
			statusText: "Page Not Found: /__nuxt_error",
			message: "Page Not Found: /__nuxt_error"
		});
	}
	// Initialize ssr context
	const ssrContext = createSSRContext(event);
	// needed for hash hydration plugin to work
	const headEntryOptions = { mode: "server" };
	ssrContext.head.push(appHead, headEntryOptions);
	if (ssrError) {
		// eslint-disable-next-line @typescript-eslint/no-deprecated
		const status = ssrError.status || ssrError.statusCode;
		if (status) {
			// eslint-disable-next-line @typescript-eslint/no-deprecated
			ssrError.status = ssrError.statusCode = Number.parseInt(status);
		}
		if (typeof ssrError.data === "string") {
			try {
				ssrError.data = destr$2(ssrError.data);
			} catch {}
		}
		setSSRError(ssrContext, ssrError);
	}
	// Get route options (for `ssr: false`, `isr`, `cache` and `noScripts`)
	const routeOptions = getRouteRules(event);
	// Whether we are prerendering route or using ISR/SWR caching
	const _PAYLOAD_EXTRACTION = !ssrContext.noSSR && (NUXT_RUNTIME_PAYLOAD_EXTRACTION);
	// When NUXT_PAYLOAD_INLINE is true (payloadExtraction: 'client'), we inline the full payload
	// in the HTML to avoid a separate _payload.json fetch on initial load (which would trigger a
	// second render or lambda invocation). The _payload.json endpoint still works for client-side nav.
	const _PAYLOAD_INLINE = !_PAYLOAD_EXTRACTION || NUXT_PAYLOAD_INLINE;
	const isRenderingPayload = (_PAYLOAD_EXTRACTION || routeOptions.prerender) && PAYLOAD_URL_RE.test(ssrContext.url);
	if (isRenderingPayload) {
		const url = ssrContext.url.substring(0, ssrContext.url.lastIndexOf("/")) || "/";
		ssrContext.url = url;
		event._path = event.node.req.url = url;
	}
	if (routeOptions.ssr === false) {
		ssrContext.noSSR = true;
	}
	const payloadURL = _PAYLOAD_EXTRACTION ? joinURL$1(ssrContext.runtimeConfig.app.cdnURL || ssrContext.runtimeConfig.app.baseURL, ssrContext.url.replace(/\?.*$/, ""), PAYLOAD_FILENAME) + "?" + ssrContext.runtimeConfig.app.buildId : undefined;
	// Render app
	const renderer = await getRenderer();
	const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
		// We use error to bypass full render if we have an early response we can make
		// TODO: remove _renderResponse in nuxt v5
		if ((ssrContext["~renderResponse"] || ssrContext._renderResponse) && error.message === "skipping render") {
			return {};
		}
		// Use explicitly thrown error in preference to subsequent rendering errors
		const _err = !ssrError && ssrContext.payload?.error || error;
		await ssrContext.nuxt?.hooks.callHook("app:error", _err);
		throw _err;
	});
	// Render inline styles
	// TODO: remove _renderResponse in nuxt v5
	const inlinedStyles = [];
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult: _rendered
	});
	if (ssrContext["~renderResponse"] || ssrContext._renderResponse) {
		// TODO: remove _renderResponse in nuxt v5
		return ssrContext["~renderResponse"] || ssrContext._renderResponse;
	}
	// Handle errors
	if (ssrContext.payload?.error && !ssrError) {
		throw ssrContext.payload.error;
	}
	// Directly render payload routes
	if (isRenderingPayload) {
		const response = renderPayloadResponse(ssrContext);
		return response;
	}
	const NO_SCRIPTS = routeOptions.noScripts;
	// Setup head
	const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
	// 1. Preload payloads and app manifest
	// Skip preload when inlining full payload in HTML (no separate fetch needed for initial load)
	if (_PAYLOAD_EXTRACTION && !_PAYLOAD_INLINE && !NO_SCRIPTS) {
		ssrContext.head.push({ link: [{
			rel: "preload",
			as: "fetch",
			crossorigin: "anonymous",
			href: payloadURL
		} ] }, headEntryOptions);
	}
	// 2. Styles
	if (inlinedStyles.length) {
		ssrContext.head.push({ style: inlinedStyles });
	}
	const link = [];
	for (const resource of Object.values(styles)) {
		// Do not add links to resources that are inlined (vite v5+)
		if ("inline" in getQuery$1(resource.file)) {
			continue;
		}
		// Add CSS links in <head> for CSS files
		// - in production
		// - in dev mode when not rendering an island
		link.push({
			rel: "stylesheet",
			href: renderer.rendererContext.buildAssetsURL(resource.file),
			crossorigin: ""
		});
	}
	if (link.length) {
		ssrContext.head.push({ link }, headEntryOptions);
	}
	if (!NO_SCRIPTS) {
		// 4. Resource Hints
		// Remove lazy hydrated modules from ssrContext.modules so they don't get preloaded
		// (CSS links are already added above, this only affects JS preloads)
		if (ssrContext["~lazyHydratedModules"]) {
			for (const id of ssrContext["~lazyHydratedModules"]) {
				ssrContext.modules?.delete(id);
			}
		}
		ssrContext.head.push({ link: getPreloadLinks(ssrContext, renderer.rendererContext) }, headEntryOptions);
		ssrContext.head.push({ link: getPrefetchLinks(ssrContext, renderer.rendererContext) }, headEntryOptions);
		// 5. Payloads
		ssrContext.head.push({ script: _PAYLOAD_INLINE ? renderPayloadJsonScript({
			ssrContext,
			data: ssrContext.payload
		})  : renderPayloadJsonScript({
			ssrContext,
			data: splitPayload(ssrContext).initial,
			src: payloadURL
		})  }, {
			...headEntryOptions,
			tagPosition: "bodyClose",
			tagPriority: "high"
		});
	}
	// 6. Scripts
	if (!routeOptions.noScripts) {
		const tagPosition = "head";
		ssrContext.head.push({ script: Object.values(scripts).map((resource) => ({
			type: resource.module ? "module" : null,
			src: renderer.rendererContext.buildAssetsURL(resource.file),
			defer: resource.module ? null : true,
			tagPosition,
			crossorigin: ""
		})) }, headEntryOptions);
	}
	const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(ssrContext.head, renderSSRHeadOptions);
	// Create render context
	const htmlContext = {
		htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
		head: normalizeChunks([headTags]),
		bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
		bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
		body: [replaceIslandTeleports(ssrContext, _rendered.html) , APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG],
		bodyAppend: [bodyTags]
	};
	// Allow hooking into the rendered result
	await nitroApp.hooks.callHook("render:html", htmlContext, { event });
	// Construct HTML response
	return {
		body: renderHTMLDocument(htmlContext),
		statusCode: getResponseStatus$1(event),
		statusMessage: getResponseStatusText(event),
		headers: {
			"content-type": "text/html;charset=utf-8",
			"x-powered-by": "Nuxt"
		}
	};
});
function normalizeChunks(chunks) {
	const result = [];
	for (const _chunk of chunks) {
		const chunk = _chunk?.trim();
		if (chunk) {
			result.push(chunk);
		}
	}
	return result;
}
function joinTags(tags) {
	return tags.join("");
}
function joinAttrs(chunks) {
	if (chunks.length === 0) {
		return "";
	}
	return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
	return "<!DOCTYPE html>" + `<html${joinAttrs(html.htmlAttrs)}>` + `<head>${joinTags(html.head)}</head>` + `<body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>` + "</html>";
}

const renderer = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: handler
}, Symbol.toStringTag, { value: 'Module' }));
//# sourceMappingURL=index.mjs.map
