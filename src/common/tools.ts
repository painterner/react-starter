
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

/**
 * format date, example: 3 March 2012
 * @param dateStr date string
 * @returns 
 */
export function formateDate(dateStr: string) {
 const date = new Date(dateStr)
  const m = MONTHS[date.getMonth() + 1]
  const d = date.getDay()
  const y = date.getFullYear()
  return `${d} ${m} ${y}`
}

export class Tools {
  static formateDate(dateStr: string) {
    const date = new Date(dateStr)
    const m = MONTHS[date.getMonth() + 1]
    const d = date.getDay()
    const y = date.getFullYear()
    return `${d} ${m} ${y}`
  }
}