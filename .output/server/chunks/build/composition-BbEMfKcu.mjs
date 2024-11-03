import { ssrRenderAttrs } from 'vue/server-renderer';
import { ref, reactive, useSSRContext } from 'vue';

const _sfc_main = {
  __name: "composition",
  __ssrInlineRender: true,
  setup(__props) {
    const count = ref(0);
    ref(1);
    reactive({
      count
    });
    const books = reactive([ref("Vue 3 Guide")]);
    console.log(books[0].value);
    const map = reactive(/* @__PURE__ */ new Map([["count", ref(22)]]));
    console.log(map.get("count").value);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/composition.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=composition-BbEMfKcu.mjs.map
