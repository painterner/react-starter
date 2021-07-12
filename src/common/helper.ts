export function delayPromise(data: any, time: number) {
    return new Promise(res => {
        setTimeout(() => {
            res(data)
        }, time);
    })
}