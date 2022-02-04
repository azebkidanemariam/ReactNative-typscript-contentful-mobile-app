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
      author: string
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
    blogs: any[]
   
  }