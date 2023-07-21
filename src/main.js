/* eslint-disable import/order */
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import layoutsPlugin from '@/plugins/layouts'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import '@core/scss/template/index.scss'
import '@styles/styles.scss'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import {DiagramPlugin, SymbolPalettePlugin} from "@syncfusion/ej2-vue-diagrams";
import { UploaderPlugin } from "@syncfusion/ej2-vue-inputs";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

loadFonts()
// Create vue app
const app = createApp(App)

// Use plugins
app.use(vuetify)
app.use(createPinia())
app.use(router)
app.use(layoutsPlugin)
app.use(DiagramPlugin);
app.use(SymbolPalettePlugin);
app.use(UploaderPlugin);
app.use(ButtonPlugin);
// Mount vue app
app.mount('#app')
