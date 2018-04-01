import { toBase70, fromBase70 } from 'base70'
import uuidv4 from 'uuid/v4'
export const dateToMinutes = date => Math.floor(date.getTime() / (1000 * 60))
export const minutesToDate = minutes => new Date(minutes * 1000 * 60)

export default class Post {
  /**
   * Create new Post using params from options
   * @param {Post|SerializedPost|Object} options - any param of Post 
   */
  constructor(options = {}) {
    this.id = options.id || uuidv4()
    this.value = options.value || 1
    this.date = options.date
      ? (
        // serialized version
        (Number.isInteger(options.date) && minutesToDate(options.date)) 
        || options.date
      ) : minutesToDate(dateToMinutes(new Date()))
    this.description = options.description || ''
  }

  /**
   * Duck typed version
   * @param {Object} param0 
   */
  static isPost({id, value, date, description} = {}) {
    return (
      id !== undefined
      && value !== undefined
      && date !== undefined
      && description !== undefined
    )
  }

  static isSerializedPost(data = {}) {
    return (
      Post.isPost(data)
      && Number.isInteger(data.date)
    )
  }

  /**
   * Update date to rounded to minutes version
   * @param {Date} date
   * @returns {Date} 
   */
  setDate(date) {
    this.date = minutesToDate(dateToMinutes(date))
    return this.date
  }

  serialize() {
    return {
      id: this.id,
      value: this.value,
      date: dateToMinutes(this.date),
      description: this.description,
    }
  }

  /**
   * @param {SerializedPost} raw - see this.serialize
   */
  deserialize(raw) {
    this.id = raw.id
    this.date = minutesToDate(raw.date)
    this.value = raw.value
    this.description = raw.description
    return this
  }

  toString() {
    const minutes = dateToMinutes(this.date)
    return `${toBase70(minutes)}-${this.value}-${this.description}`
  }

  fromString(value) {
    try {
      const parts = value.split('-')      
      this.date = minutesToDate(fromBase70(parts[0]))
      this.value = parseInt(parts[1], 10)
      this.description = parts.slice(2).join('-')
      return this
    } catch(err) {
      console.error('Post parsing error', value)
      console.error(err)
      throw err
    }
  }
}
