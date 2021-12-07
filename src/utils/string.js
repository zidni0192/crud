export function splitText(text, max = 20) {
    if (text.length > max) {
        let textSplit = text.substr(0, max)
        return `${textSplit} ...`
    } else {
        let textSplit = text
        return `${textSplit}`
    }
}

export function convertDate(date) {
    let data = Date.parse(date)
    let newDate = new Date(data)
    let day = newDate.getDate()
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let month = months[newDate.getMonth()]
    var year = newDate.getFullYear();
    return `${day} ${month} ${year}`
}