import _sfc_main$1 from './Icon-CGwGMsD6.mjs';
import { _ as _sfc_main$2 } from './NuxtImg-Bb2qehHd.mjs';
import { defineComponent, withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { u as useRoute, c as createError, a as useSeoMeta } from './server.mjs';
import { u as useFetch } from './fetch-D2bDtdK-.mjs';
import './IconTw-BOMmHCey.mjs';
import './IconSvg-B_fqlhgU.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g;
    let __temp, __restore;
    const route = useRoute();
    const { data, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `https://dummyjson.com/recipes/${route.params.id}`,
      "$OcE659Czwb"
    )), __temp = await __temp, __restore(), __temp);
    if (error.value) {
      throw createError({
        statusCode: (_a = error.value) == null ? void 0 : _a.statusCode,
        statusMessage: (_b = error.value) == null ? void 0 : _b.statusMessage
      });
    }
    useSeoMeta({
      title: (_c = data.value) == null ? void 0 : _c.name,
      ogTitle: (_d = data.value) == null ? void 0 : _d.name,
      description: "This is my amazing site, let me tell you all about it.",
      ogDescription: "This is my amazing site, let me tell you all about it.",
      ogImage: (_e = data.value) == null ? void 0 : _e.image,
      twitterCard: "summary_large_image",
      twitterTitle: (_f = data.value) == null ? void 0 : _f.name,
      twitterImage: (_g = data.value) == null ? void 0 : _g.image
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2, _d2, _e2, _f2, _g2;
      const _component_Icon = _sfc_main$1;
      const _component_NuxtImg = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-col max-w-screen-lg container py-20"><div class="flex flex-col mb-6"><h2 class="text-5xl mb-4 font-semibold">${ssrInterpolate((_a2 = unref(data)) == null ? void 0 : _a2.name)}</h2><div class="flex gap-4 text-xl mb-6"><div class="flex items-center gap-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:clock-time-eight-outline",
        style: { "color": "#f79f1a" }
      }, null, _parent));
      _push(`<span>${ssrInterpolate((_b2 = unref(data)) == null ? void 0 : _b2.cookTimeMinutes)}</span></div><div class="flex items-center gap-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:clock-time-eight-outline",
        style: { "color": "#f79f1a" }
      }, null, _parent));
      _push(`<span>${ssrInterpolate((_c2 = unref(data)) == null ? void 0 : _c2.caloriesPerServing)}</span></div><div class="flex items-center gap-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:clock-time-eight-outline",
        style: { "color": "#f79f1a" }
      }, null, _parent));
      _push(`<span>${ssrInterpolate((_d2 = unref(data)) == null ? void 0 : _d2.rating)}(${ssrInterpolate((_e2 = unref(data)) == null ? void 0 : _e2.reviewCount)})</span></div></div><hr></div>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: (_f2 = unref(data)) == null ? void 0 : _f2.image,
        sizes: "100vw",
        class: "",
        format: "webp"
      }, null, _parent));
      _push(`<h3 class="mb-1 mt-6 text-xl font-semibold">Information</h3><ul><!--[-->`);
      ssrRenderList((_g2 = unref(data)) == null ? void 0 : _g2.instructions, (item, index) => {
        _push(`<li class="border-b py-2 transition duration-150 ease-in-out cursor-pointer hover:text-red-400 hover:skew-y-4">${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/recipes/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-BOpiIlsW.mjs.map
