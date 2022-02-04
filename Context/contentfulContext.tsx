import React, { useState, useEffect } from 'react'
const { createClient } = require('contentful/dist/contentful.browser.min.js')
import { ContentContextInterface, Article,Blog } from './types'
 //import { CF_SPACE_ID, CF_ACCESS_KEY } from '@env'
 //console.log(CF_SPACE_ID)


const client = createClient({
  space:  'z6btip2d3f8h',
  accessToken: 't9BgcbBNsh4OJNJ5_WdJaBqGcAV1j_6AGd3HgWvvfWY'
})

export const ContentContext =
  React.createContext<ContentContextInterface | null>(null)

const ContentContextProvider: React.FC = (props) => {
  const [articles, setArticles] = useState<Article[]>()
  const [blogs, setBlogs] = useState<Blog[]>()

  useEffect(() => {
    client
      .getEntries({
        content_type: 'article',
      })
      .then((entries: { items: Article[] }) => {
        setArticles(entries.items)
      })
  }, [])
  useEffect(() => {
    client
      .getEntries({
        content_type: 'blog',
      })
      .then((entries: { items: Blog[] }) => {
        setBlogs(entries.items)
      })
  }, [])

  const contentContext: ContentContextInterface = {
    articles: articles!,
    blogs: blogs!,
  }

  return (
    <ContentContext.Provider value={contentContext}>
      {props.children}
    </ContentContext.Provider>
  )
}

export default ContentContextProvider