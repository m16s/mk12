import Post, {minutesToDate} from "@/model/Post"

const TWO_CHARS_NUM = 4899
const TWO_CHARS_STRING = '~~'

describe('Post', () => {

  it('creates w/o params', () => {
    const post = new Post()
    expect(post.value).toBe(0)
    expect(post.description).toBe('')
  })

  it('creates with another post values', () => {
    const originPost = new Post()
    const now = Date.now()
    const description = 'abc'
    const value = 1 
 
    originPost.date = new Date(now)
    originPost.value = value
    originPost.description = description

    const newPost = new Post({
      value,
      description,
      date: new Date(now),
    })

    expect(originPost.value).toBe(newPost.value)
    expect(originPost.description).toBe(newPost.description)
    expect(originPost.date.getTime()).toBe(newPost.date.getTime())
  })

  it('encodes with toString', () => {
    const description = 'desc-ript-ion-'
    const value = 1
    const post = new Post({
      description,
      value,
      date: minutesToDate(TWO_CHARS_NUM),
    }) 

    expect(post.toString()).toBe(`${TWO_CHARS_STRING}-${value}-${description}`)
  })

  it('decodes with fromString', () => {
    const description = 'desc-ript-ion-'
    const value = 1
    const encoded = `${TWO_CHARS_STRING}-${value}-${description}`
    const post = new Post()
    post.fromString(encoded)

    expect(post.value).toBe(value)
    expect(post.description).toBe(description)
    expect(post.date.getTime()).toBe(minutesToDate(TWO_CHARS_NUM).getTime())
  })

})
