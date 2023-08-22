import { defineConfig } from "vite";
import type { PluginOption } from 'vite'

const erudaInjector: PluginOption = {
  name: 'erudaInjector',
  transformIndexHtml: html => {
    return {
      html,
      tags: [
        {
          tag: 'script',
          attrs: {
            src: '/node_modules/eruda/eruda'
          },
          injectTo: 'body'
        }, {
          tag: 'script',
          injectTo: 'body',
          children: 'eruda.init()'
        }
      ]
    }
  }
}

export default defineConfig(({ command }) => {
  return {
    plugins: command === 'serve' ? [erudaInjector] : []
  }
});