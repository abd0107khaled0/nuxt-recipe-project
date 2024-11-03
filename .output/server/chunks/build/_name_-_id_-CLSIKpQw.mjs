import { _ as _sfc_main$5 } from './NavBar-BcArtCqF.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './splashpage-6Q2y1yMR.mjs';
import { inject, useSSRContext } from 'vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { u as useHead } from './server.mjs';
import './nuxt-link-eFkspvlL.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="mt-10"><img${ssrRenderAttr("src", _imports_0)} alt="splashpage" class="w-full"><h1 class="mt-10 text-4xl">Volvo 3xt</h1><div class="text-slate-500 flex text-lg border-b pb-5 justify-between"><div class="flex"><p class="mr-2">seats</p><p class="mr-2">|</p><p class="mr-2">67,444 miles</p></div><div><p class="font-bold text-2xl">$25,555</p></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Car/Details.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="mr-10 mt-5 border-b pb-5"><div class="flex text-lg mt-2"><p class="rounded text-lime-800 mr-3">true</p><p>Leather Interior</p></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Car/Attributes.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="mt-5"><p class="mb-10"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quis totam inventore culpa error, porro voluptate labore saepe necessitatibus reprehenderit in tempore veniam voluptates quam optio vitae, temporibus earum laboriosam! </p></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Car/Description.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="mt-10"><div class="flex w-full justify-between"><input type="text" name="" id="" class="border p-1" placeholder="Name"><input type="text" name="" id="" class="border p-1" placeholder="Email"><input type="text" name="" id="" class="border p-1" placeholder="Phone"></div><div class="flex mt-4 w-full"><textarea name="" id="" cols="30" rows="10" class="border p-1 w-full" placeholder="message"></textarea></div><button type="submit" class="bg-blue-400 text-white px-10 py-3 rounded mt-4"> Submit </button></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Car/Contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "[name]-[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const injectApp = inject("route");
    useHead({
      title: injectApp.name.split("-").join(" ").toUpperCase()
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = _sfc_main$5;
      const _component_CarDetails = __nuxt_component_1;
      const _component_CarAttributes = __nuxt_component_2;
      const _component_CarDescription = __nuxt_component_3;
      const _component_CarContact = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NavBar, { title: "careader" }, null, _parent));
      _push(`<div><div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-1">`);
      _push(ssrRenderComponent(_component_CarDetails, null, null, _parent));
      _push(ssrRenderComponent(_component_CarAttributes, null, null, _parent));
      _push(ssrRenderComponent(_component_CarDescription, null, null, _parent));
      _push(ssrRenderComponent(_component_CarContact, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/car/[name]-[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_name_-_id_-CLSIKpQw.mjs.map
