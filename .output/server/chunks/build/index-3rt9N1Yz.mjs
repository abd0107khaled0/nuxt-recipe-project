import { _ as _sfc_main$1 } from './NuxtImg-Bb2qehHd.mjs';
import _sfc_main$2 from './Icon-CGwGMsD6.mjs';
import { u as useRoute, a as useSeoMeta, _ as __nuxt_component_0$1 } from './server.mjs';
import { withAsyncContext, watchEffect, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useFetch } from './fetch-D2bDtdK-.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';
import './IconTw-BOMmHCey.mjs';
import './IconSvg-B_fqlhgU.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: recipes, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "https://dummyjson.com/recipes?limit=12",
      "$KJK4rR7Cxt"
    )), __temp = await __temp, __restore(), __temp);
    useRoute();
    useSeoMeta({
      title: "My Home Recive",
      ogTitle: "My Amazing Site",
      description: "This is my amazing site, let me tell you all about it.",
      ogDescription: "This is my amazing site, let me tell you all about it.",
      ogImage: "https://example.com/image.png",
      twitterCard: "summary_large_image"
    });
    watchEffect(() => {
      console.log("any");
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtImg = _sfc_main$1;
      const _component_Icon = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-2fb50ece><div class="pages" data-v-2fb50ece><main data-v-2fb50ece><section class="bg-[#f1f1f1]" data-v-2fb50ece><div class="container flex flex-col lg:flex-row items-center py-20 gap-10" data-v-2fb50ece><div class="flex-1 order-2 lg:order-1 text-center lg:text-left" data-v-2fb50ece><h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance" data-v-2fb50ece>Master the ketchen with ease: unleash your inner chef today~!</h1><p class="text-xl lg:text-2xl mb-8 text-balance" data-v-2fb50ece> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum consequuntur aspernatur! </p><button class="px-4 py-4 text-white self-start bg-dodgeroll-gold rounded-md text-lg cursor-pointer" type="button" data-v-2fb50ece>Browser Recipes</button></div><div class="flex-1 order-1 lg:order-2" data-v-2fb50ece>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: ((_a = unref(recipes).recipes[0]) == null ? void 0 : _a.image) || "/splashpage.jpg",
        width: "",
        height: "",
        format: "webp",
        densities: "x1",
        sizes: "xs:100vw sm:667px"
      }, null, _parent));
      _push(`</div></div></section><section class="py-20 container" data-v-2fb50ece><h2 class="text-3xl lg:text-5xl mb-2" data-v-2fb50ece>Discover, Create, share</h2><p class="text-lg lh:text-xl mb-8" data-v-2fb50ece>check out our most popular!</p><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8" data-v-2fb50ece><!--[-->`);
      ssrRenderList(unref(recipes).recipes, (item, index2) => {
        _push(`<div data-v-2fb50ece><div class="flex flex-col shadow rounded-md p-2" data-v-2fb50ece>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: item.image || "/splashpage.jpg",
          sizes: "500px",
          format: "webp",
          ref_for: true,
          ref: "image",
          class: "image-transition"
        }, null, _parent));
        _push(`<p class="text-bold text-2xl" data-v-2fb50ece>${ssrInterpolate(item.name)}</p><div class="font-normal justify-between flex-1 w-full bg-white/80 flex gap-8 text-lg lg:text-xl mb-4 mt-4" data-v-2fb50ece><div class="flex flex-col items-center gap-1" data-v-2fb50ece>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:clock-time-eight-outline",
          style: { "color": "#f79f1a" }
        }, null, _parent));
        _push(`<span data-v-2fb50ece>${ssrInterpolate(item == null ? void 0 : item.cookTimeMinutes)}</span></div><div class="flex flex-col items-center gap-1" data-v-2fb50ece>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:fire",
          style: { "color": "#f79f1a" }
        }, null, _parent));
        _push(`<span data-v-2fb50ece>${ssrInterpolate(item == null ? void 0 : item.caloriesPerServing)}</span></div><div class="flex flex-col items-center gap-1" data-v-2fb50ece>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:fire",
          style: { "color": "#f79f1a" }
        }, null, _parent));
        _push(`<span data-v-2fb50ece>${ssrInterpolate(item == null ? void 0 : item.prepTimeMinutes)}</span></div></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: { name: "recipes-id", params: { id: item == null ? void 0 : item.id } },
          class: "bg-[#f79f1a] w-[100px] text-white p-2 rounded-md font-semibold m-auto mt-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`View`);
            } else {
              return [
                createTextVNode("View")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></section></main></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2fb50ece"]]);

export { index as default };
//# sourceMappingURL=index-3rt9N1Yz.mjs.map
