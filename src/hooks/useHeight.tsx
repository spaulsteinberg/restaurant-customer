import { useState, useEffect } from "react";

const useHeight = (height:number) => {
    const [heightView, setHeightView] = useState(false);
    useEffect(() => {

        if (window.matchMedia(`(min-height: ${height}px)`).matches) {
            setHeightView(true)
        }
    
        let heightCheck = window.matchMedia(`(min-height: ${height}px)`)
        heightCheck.addEventListener("change", shouldChangeInputAlignment, true);
        return () => {
            heightCheck.removeEventListener("change", shouldChangeInputAlignment, true)
          }
    }, [height])
    const shouldChangeInputAlignment = (e:any) => e.matches ? setHeightView(true) : setHeightView(false)
    return heightView;
}

export default useHeight;