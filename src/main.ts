import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './assets/global.css';
const _ = require("lodash");

loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')

// Example vulnerable code (Prototype Pollution)
const payload = JSON.parse('{"__proto__": {"polluted": "yes"}}');
_.merge({}, payload);
