import { readFileSync as read } from 'fs'
import { resolve } from 'path'

export default {
  target: 'static',

  components: ['~/component/'],

  generate: { fallback: true, dir: 'build' },

  buildModules: ['nuxt-windicss', '@nuxt/content'],

  dir: { assets: 'asset', layouts: 'layout', pages: 'page', static: 'static' },

  content: {
    liveEdit: false,
    apiPrefix: 'content',
    markdown: { prism: { theme: false } },
    fullTextSearchFields: ['title', 'summary', 'text']
  },

  head: {
    title: 'Dream',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },

  hooks: {
    'content:file:beforeParse': file => {
      if (file.path.includes('article')) {
        file.data += read(resolve('content', 'template.md'), 'utf-8')
      }
    },

    'content:file:beforeInsert': md => {
      md.body.children.pop()
      md.text = md.text.replace(/<style>[\s\S]+<\/style>/g, '')

      const [kind, id] = md.slug.split('.')

      if (!kind && !id) return

      md.id = id
      md.kind = kind
      md.link = `/${kind}/${id}`
      md.cover = `${kind}.${md.id}.jpg`

      if (!md.slug.includes('article')) return

      md.readtime = `${~~(md.text.match(/\w+/g).length / 200)} min read`

      md.date = new Date(md.date).toLocaleDateString('en', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
