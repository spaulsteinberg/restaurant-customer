import { useEffect, useState } from "react"


const useMessageTimeout = (message:string, duration:number) => {

    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        if (!message) {
            return setVisible(false)
        }
        setVisible(true)
        const timer = setTimeout(() => {
            setVisible(false)
        }, duration)
        return () => clearTimeout(timer)
    }, [message, duration])

    return visible
}

export default useMessageTimeout