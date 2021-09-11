import { config, parse, insert } from './nuxt.content'

const base = {
  target: 'static',

  plugins: ['~/plugin/db.js'],

  components: ['~/component/'],

  generate: { fallback: true, dir: 'build' },

  buildModules: ['nuxt-windicss', '@nuxt/content'],

  dir: { assets: 'asset', layouts: 'layout', pages: 'page', static: 'static' }
}

const head = {
  title: 'Dream',

  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
}

export default {
  ...base,

  head,

  content: config,

  hooks: { 'content:file:beforeParse': parse, 'content:file:beforeInsert': insert }
}
