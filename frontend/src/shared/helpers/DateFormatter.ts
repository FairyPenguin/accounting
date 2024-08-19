/**
 * 
 * @param date 
 * @returns 
 */
export default function DateFormatter(date: string | Date) {

    const preformattedDate = new Date(date)

    const year = preformattedDate.getFullYear()
    const month = String(preformattedDate.getMonth() + 1).padStart(2, "0")
    const day = String(preformattedDate.getDate()).padStart(2, "0")

    const formattedDate = `${year}-${month}-${day}`

    return formattedDate


}