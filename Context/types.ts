export interface Author {
    sys: {
      id: string
      createdAt: string
      updatedAt: string
    }
    fields: {
      name: string
      email: string
      articles: Article[]
    }
  }
  //article
  export interface Article {
    sys: {
      id: string
      createdAt: string
      updatedAt: string
      metaData: {
        tags: string[]
      }
    }
    fields: {
      author: Author
      body: object
      category: string
      celebrities: object[]
      headline: string
      images: ArticleImage[]
      featureImage: ArticleImage
    }
  }
  export interface ArticleImage {
    fields: {
      file: {
        url: string
      }
    }
  }
  //blog

  export interface Blog {
    sys: {
      id: string
      createdAt: string
      updatedAt: string
      metaData: {
        tags: string[]
      }
    }
    fields: {
      author: Author
      paragraph: string
      title: string
    images: BlogImage[]
      
    }
  }
  export interface BlogImage {
    fields: {
      file: {
        url: string
      }
    }
  }
  export interface ContentContextInterface {
    articles: any[]
   
  }