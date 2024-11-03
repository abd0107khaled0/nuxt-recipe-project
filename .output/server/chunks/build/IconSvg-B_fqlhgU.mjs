import { useSSRContext, defineComponent, watch, ref, computed, withAsyncContext, mergeProps, unref, createVNode, resolveDynamicComponent, toRef, isRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { Icon } from '@iconify/vue/dist/offline';
import { addAPIProvider, loadIcon } from '@iconify/vue';
import { b as useNuxtApp, e as useAppConfig } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IconSvg",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ""
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const nuxtApp = useNuxtApp();
    const appConfig = useAppConfig();
    const props = __props;
    watch(
      () => {
        var _a;
        return (_a = appConfig.iconTw) == null ? void 0 : _a.iconifyApiOptions;
      },
      () => {
        var _a, _b, _c, _d, _e, _f;
        if (!((_b = (_a = appConfig.iconTw) == null ? void 0 : _a.iconifyApiOptions) == null ? void 0 : _b.url)) return;
        try {
          new URL(appConfig.iconTw.iconifyApiOptions.url);
        } catch (e) {
          console.warn("Nuxt Icon: Invalid custom Iconify API URL");
          return;
        }
        if ((_d = (_c = appConfig.iconTw) == null ? void 0 : _c.iconifyApiOptions) == null ? void 0 : _d.publicApiFallback) {
          addAPIProvider("custom", {
            resources: [(_e = appConfig.iconTw) == null ? void 0 : _e.iconifyApiOptions.url],
            index: 0
          });
          return;
        }
        addAPIProvider("", {
          resources: [(_f = appConfig.iconTw) == null ? void 0 : _f.iconifyApiOptions.url]
        });
      },
      { immediate: true }
    );
    const state = useState(
      "icons",
      () => ({})
    );
    const isFetching = ref(false);
    const iconName = computed(() => {
      var _a;
      if (((_a = appConfig.iconTw) == null ? void 0 : _a.aliases) && appConfig.iconTw.aliases[props.name]) {
        return appConfig.iconTw.aliases[props.name].replace(/^i-/, "");
      }
      return props.name.replace(/^i-/, "");
    });
    const icon = computed(
      () => {
        var _a;
        return (_a = state.value) == null ? void 0 : _a[iconName.value];
      }
    );
    const component = computed(
      () => nuxtApp.vueApp.component(iconName.value)
    );
    const sSize = computed(() => {
      var _a, _b, _c;
      if (!props.size && typeof ((_a = appConfig.iconTw) == null ? void 0 : _a.size) === "boolean" && !((_b = appConfig.iconTw) == null ? void 0 : _b.size)) {
        return void 0;
      }
      const size = props.size || ((_c = appConfig.iconTw) == null ? void 0 : _c.size) || "1em";
      return String(Number(size)) === size ? `${size}px` : size;
    });
    const className = computed(() => {
      var _a;
      return ((_a = appConfig == null ? void 0 : appConfig.iconTw) == null ? void 0 : _a.class) ?? "icon";
    });
    async function loadIconComponent() {
      var _a;
      if (component.value) {
        return;
      }
      if (!((_a = state.value) == null ? void 0 : _a[iconName.value])) {
        isFetching.value = true;
        state.value[iconName.value] = await loadIcon(
          iconName.value
        ).catch(() => void 0);
        isFetching.value = false;
      }
    }
    watch(() => iconName.value, loadIconComponent);
    !component.value && ([__temp, __restore] = withAsyncContext(() => loadIconComponent()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      if (isFetching.value) {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: className.value,
          style: { width: sSize.value, height: sSize.value }
        }, _attrs))} data-v-458076bc></span>`);
      } else if (icon.value) {
        _push(ssrRenderComponent(unref(Icon), mergeProps({
          icon: icon.value,
          class: className.value,
          width: sSize.value,
          height: sSize.value
        }, _attrs), null, _parent));
      } else if (component.value) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(component.value), mergeProps({
          class: className.value,
          width: sSize.value,
          height: sSize.value
        }, _attrs), null), _parent);
      } else {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: className.value,
          style: { fontSize: sSize.value, lineHeight: sSize.value, width: sSize.value, height: sSize.value }
        }, _attrs))} data-v-458076bc>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`${ssrInterpolate(__props.name)}`);
        }, _push, _parent);
        _push(`</span>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt-icon-tw/dist/runtime/IconSvg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-458076bc"]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=IconSvg-B_fqlhgU.mjs.map
