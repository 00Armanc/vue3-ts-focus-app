export const printLen = (name: string) => {
    const val = name.substring(1, name.length)
    return name[0].toUpperCase() + val
}
export const editTime = (time: number) => {
    const minute = Math.floor(time/60)
    const second = Math.floor(time % 60)+1

    const setMin = minute < 10 ? "0" : ""
    const setSec = second < 10 ? "0" : ""

    return `${setMin}${minute}:${setSec}${second}`
}
export const editBarWidth = (time: number, time1: number) => {
    const timer = time / time1 * 100 + '%'
    console.log(time + " " + time1)
    return timer
}