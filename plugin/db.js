const relation = async ($content, articles) => {
  const tags = await $content()
    .where({ kind: 'tag' })
    .only(['id', 'link'])
    .fetch()

  for (const article of articles) {
    article.tags = tags.filter(({ id }) => article.tags.includes(id))
  }

  return articles
}

const articles = async ($content, search) => {
  // search = search ? { title: { '$contains': search } } : {}

  const values = await $content()
    .sortBy('date', 'desc')
    .where({ kind: 'article' })
    .only(['id', 'cover', 'title', 'summary', 'date', 'readtime', 'link', 'tags'])
    .search(search)
    .fetch()

  return await relation($content, values)
}

const article = async ($content, id) => {
  const values = await $content()
    .where({ kind: 'article', id })
    .only(['id', 'cover', 'title', 'summary', 'date', 'readtime', 'link', 'tags', 'body'])
    .fetch()

  return (await relation($content, values))[0]
}

const tag = async ($content, id) => {
  const values = await $content()
    .where({ kind: 'tag', id })
    .only(['id', 'desc'])
    .fetch()

  return values[0]
}

const plugin = ({ $content }, inject) => {
  const content = {
    tag: async x => await tag($content, x),
    article: async x => await article($content, x),
    articles: async x => await articles($content, x)
  }

  inject('db', content)
}

export default plugin
