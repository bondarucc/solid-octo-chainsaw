import type { Dayjs } from "dayjs";

export default function dateDisplayFormat(d: Dayjs) {
  const formatted =  d.format("D MMM, YYYY")
  const splitted = formatted.split(' ')
  const month = splitted[1]
  const capitalized = month.charAt(0).toUpperCase() + month.slice(1)
  const removeDot = capitalized.replaceAll('.', '')
  splitted[1] = removeDot
  return splitted.join(' ')
}