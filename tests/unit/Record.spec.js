import Record, {minutesToDate} from "@/model/Record"

const TWO_CHARS_NUM = 4899
const TWO_CHARS_STRING = '~~'

describe('Record', () => {

  it('creates w/o params', () => {
    const rec = new Record()
    expect(rec.value).toBe(0)
    expect(rec.description).toBe('')
  })

  it('creates with another record values', () => {
    const originRec = new Record()
    const now = Date.now()
    const description = 'abc'
    const value = 1 
 
    originRec.date = new Date(now)
    originRec.value = value
    originRec.description = description

    const newRec = new Record({
      value,
      description,
      date: new Date(now),
    })

    expect(originRec.value).toBe(newRec.value)
    expect(originRec.description).toBe(newRec.description)
    expect(originRec.date.getTime()).toBe(newRec.date.getTime())
  })

  it('encodes with toString', () => {
    const description = 'desc-ript-ion-'
    const value = 1
    const rec = new Record({
      description,
      value,
      date: minutesToDate(TWO_CHARS_NUM),
    }) 

    expect(rec.toString()).toBe(`${TWO_CHARS_STRING}-${value}-${description}`)
  })

  it('decodes with fromString', () => {
    const description = 'desc-ript-ion-'
    const value = 1
    const encoded = `${TWO_CHARS_STRING}-${value}-${description}`
    const rec = new Record()
    rec.fromString(encoded)

    expect(rec.value).toBe(value)
    expect(rec.description).toBe(description)
    expect(rec.date.getTime()).toBe(minutesToDate(TWO_CHARS_NUM).getTime())
  })

})
