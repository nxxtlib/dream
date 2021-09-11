import { resolve } from 'path'
import { readFileSync as read } from 'fs'

const date = string => {
  return new Date(string).toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const parse = file => {
  if (!file.path.includes('article')) return

  file.data += read(resolve('content', 'template.md'), 'utf-8')
}

export const insert = md => {
  md.text = md.text.replace(/<style>[\s\S]+<\/style>/g, '')

  const [kind, id] = md.slug.split('.')
  if (!kind && !id) return

  md.id = id
  md.kind = kind
  md.link = `/${kind}/${id}`
  md.cover = `${kind}.${md.id}.jpg`

  if (!md.slug.includes('article')) return

  md.date = date(md.date)
  md.readtime = `${~~(md.text.match(/\w+/g).length / 200)} min read`
}

export const config = {
  liveEdit: false,
  apiPrefix: 'content',
  markdown: { prism: { theme: false } },
  fullTextSearchFields: ['title', 'summary', 'text']
}
