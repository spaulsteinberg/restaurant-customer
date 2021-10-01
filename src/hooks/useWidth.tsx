import { useEffect, useState } from "react"


const useWidth = (width:number) => {
    const [wideView, setWideView] = useState(false);

    useEffect(() => {
        if (window.matchMedia(`(min-width: ${width}px)`).matches) {
            setWideView(true)
        }
    
        let widthCheck = window.matchMedia(`(min-width: ${width}px)`)
        widthCheck.addEventListener("change", shouldChangeInputAlignment, true);
        return () => {
            widthCheck.removeEventListener("change", shouldChangeInputAlignment, true)
          }
    }, [width])

    const shouldChangeInputAlignment = (e:any) => e.matches ? setWideView(true) : setWideView(false)
    return {wideView}
}

export default useWidth;