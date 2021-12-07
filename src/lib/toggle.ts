export const printLen = (name: string) => {
    const val = name.substring(1, name.length)
    return name[0].toUpperCase() + val
}
export const editTime = (time: number) => {
    const minute = Math.floor(time/60)
    const second = Math.floor(time % 60)+1

    const threeNum = minute > 99 ? Math.floor((minute)/60) : minute

    const setMin = threeNum < 10 ? "0" : ""
    const setSec = second < 10 ? "0" : ""

    return `${setMin}${threeNum}:${setSec}${second}`
}
export const editBarWidth = (time: number, time1: number) => {
    const timer = time / time1 * 100 + '%'
    // console.log(time + " " + time1)
    return timer
}