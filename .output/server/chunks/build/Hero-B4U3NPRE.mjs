import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { useSSRContext, mergeProps, ref } from 'vue';
import { b as useRouter, a as useRoute } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$1 = {
  __name: "SearchBar",
  __ssrInlineRender: true,
  setup(__props) {
    const city = ref("");
    const cityError = ref(false);
    useRouter();
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto"><input type="text" class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none" placeholder="Search by city..."${ssrRenderAttr("value", city.value)}><button class="${ssrRenderClass([cityError.value ? "border-2 border-rose-500" : "", "bg-sky-500 px-10 text-white"])}" style="${ssrRenderStyle([cityError.value ? "border-radius:0 26px 26px 0" : ""])}"> Search </button></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Car/SearchBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_CarSearchBar = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-screen w-100 bd-no-repeat bg-cover bg-bottom bg-[url('/splashpage.jpg')]" }, _attrs))}><div class="z-10 absolute w-full h-full flex justify-center items-center"><div class="text-center w-1/2"><h1 class="text-8xl font-serif mb-10 text-white">Find Your drive</h1>`);
  _push(ssrRenderComponent(_component_CarSearchBar, null, null, _parent));
  _push(`</div></div><div class="z-1 absolute w-full h-full bg-black opacity-50"></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Car/Hero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Hero-B4U3NPRE.mjs.map
