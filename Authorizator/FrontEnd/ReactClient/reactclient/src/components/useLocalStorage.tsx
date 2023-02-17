﻿import { useEffect, useState } from "react"

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
    const [value, setValue] = useState<T>(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue == null || jsonValue == 'undefined') {
            console.log(jsonValue);
            if (typeof initialValue === "function") {
                return (initialValue as () => T)()
            } else {
                return initialValue
            }
        } else {
            console.log('else'+jsonValue);

            var a = JSON.parse(jsonValue)
            console.log('elseeee' + a);

            return JSON.parse(jsonValue)
        }
    })
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key])
    return [value, setValue] as [T, typeof setValue]
}
export default useLocalStorage;    