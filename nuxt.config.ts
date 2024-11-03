// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate:"2024-04-03",

  future: {
    compatibilityVersion: 4,
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  dir: {
    app: "app",
  },

  app: {
    head: {
      title: "موقعي",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "وصف موقعي الافتراضي",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  css: ["~/assets/css/main.css", "~/assets/scss/main.scss"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  //  experimental: {
  //   scanPageMeta: 'after-resolve',
  //   sharedPrerenderData: false,
  //   compileTemplate: true,
  //   resetAsyncDataToUndefined: true,
  //   templateUtils: true,
  //   relativeWatchPaths: true,
  //   normalizeComponentNames: false
  //   defaults: {
  //     useAsyncData: {
  //       deep: true
  //     }
  //   }
  // },
  image:{
    domains:['https://dummyjson.com']
  },
  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false
    }
  },

  modules: ["@nuxtjs/google-fonts", "nuxt-icon-tw", "@nuxt/image", "@nuxtjs/tailwindcss"],
  families: {
    Roboto: true,
    Inter: [400, 700],
    'Josefin+Sans': true,
    Lato: [100, 300],
    Raleway: {
      wght: [100, 400],
      ital: [100]
    },
    Inter: '200..700',
    'Crimson Pro': {
      wght: '200..900',
      ital: '200..700',
    }
  }
});