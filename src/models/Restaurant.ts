class Restaurant {
  id: number
  title: string
  description: string
  imgurl: string
  rate: number
  tag: string[]
  url: string

  constructor(
    id: number,
    title: string,
    description: string,
    imgurl: string,
    rate: number,
    tag: string[],
    url: string
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.imgurl = imgurl
    this.rate = rate
    this.tag = tag
    this.url = url
  }
}

export default Restaurant
