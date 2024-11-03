import { _ as _sfc_main$2 } from './NavBar-BcArtCqF.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { a as useRoute, u as useHead, _ as __nuxt_component_2 } from './server.mjs';
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

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "shadow border w-64 mr-10 z-30 h-[190px] p-2" }, _attrs))}><div class="pt-5 flex justify-between relative cursor-pointer border-b"><h3>Location</h3><h3 class="text-blue-400 capitalize">Toronto</h3></div><div class="pt-5 flex justify-between relative cursor-pointer border-b"><h3>Make</h3><h3 class="text-blue-400 capitalize">Toyota</h3></div><div class="pt-5 flex justify-between relative cursor-pointer border-b"><h3>Make</h3><h3 class="text-blue-400 capitalize"></h3></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Car/SideBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "car",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useHead({
      title: `car in ${route.params.make}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = _sfc_main$2;
      const _component_CarSideBar = __nuxt_component_1;
      const _component_NuxtPage = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NavBar, { title: "cartrader" }, null, _parent));
      _push(`<div><div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-8lg:px-16 pb-16 w-3/5"><div class="mt-32 flex"><div class="shadow border w-64 mr-10 z-30 h-full">`);
      _push(ssrRenderComponent(_component_CarSideBar, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/city/[city]/car.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=car-aHrs2Xe3.mjs.map
