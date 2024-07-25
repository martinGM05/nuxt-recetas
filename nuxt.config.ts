// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  modules: ["nuxt-vuefire", "@nuxt/ui", "@nuxt/icon"],
  vuefire: {
    auth: {
      enabled: true,
      sessionCookie: false
    },
    config: {
      apiKey: "AIzaSyCSsgTcJBCk72yrPgdCeIKIGy9aX1Le4GE",
      authDomain: "nuxt-auth-a55bb.firebaseapp.com",
      projectId: "nuxt-auth-a55bb",
      storageBucket: "nuxt-auth-a55bb.appspot.com",
      messagingSenderId: "289646177408",
      appId: "1:289646177408:web:ee5aa069ec0585dcdeca65",
      measurementId: "G-8VG4XXP7MC"
    }
  },

})
