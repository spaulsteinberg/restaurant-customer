import React from "react"

type CartImageProps = {
    imgAddress: string | null
}

const CartImage = ({ imgAddress }: CartImageProps) => {
    return (
        <React.Fragment>
            {
                imgAddress ?
                    <div className="cart-image-container">
                        <img src={imgAddress} alt="item" />
                    </div>
                    : <div className="noshow-div-cart">No photo available.</div>
            }
        </React.Fragment>
    )
}

export default CartImage
