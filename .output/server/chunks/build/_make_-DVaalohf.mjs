import { _ as __nuxt_component_0$2 } from './nuxt-link-eFkspvlL.mjs';
import { useSSRContext, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './splashpage-6Q2y1yMR.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/car/car-1" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]"${_scopeId}><div class="flex h-full"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="car" class="w-300px h-full"${_scopeId}><div class="p-4 flex flex-col"${_scopeId}><div${_scopeId}><h1 class="text-2xl text-blue-700 capitalize"${_scopeId}>volvo XC0</h1><p class="text-gray-700"${_scopeId}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, a. Qui amet architecto tenetur, porro ad </p></div><h1 class="mt-auto text-xl"${_scopeId}>$39,555</h1></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]" }, [
            createVNode("div", { class: "flex h-full" }, [
              createVNode("img", {
                src: _imports_0,
                alt: "car",
                class: "w-300px h-full"
              }),
              createVNode("div", { class: "p-4 flex flex-col" }, [
                createVNode("div", null, [
                  createVNode("h1", { class: "text-2xl text-blue-700 capitalize" }, "volvo XC0"),
                  createVNode("p", { class: "text-gray-700" }, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, a. Qui amet architecto tenetur, porro ad ")
                ]),
                createVNode("h1", { class: "mt-auto text-xl" }, "$39,555")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Car/Card.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_CarCard = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="w-full"><!--[-->`);
  ssrRenderList(5, (item, index) => {
    _push(ssrRenderComponent(_component_CarCard, {
      key: index + Math.random()
    }, null, _parent));
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Car/Cards.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_CarCards = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_CarCards, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/city/[city]/car/[[make]].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __make__ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __make__ as default };
//# sourceMappingURL=_make_-DVaalohf.mjs.map
