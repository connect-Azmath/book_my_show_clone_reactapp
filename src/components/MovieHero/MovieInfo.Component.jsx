import React, { useState } from 'react'

function MovieInfo() {
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);

    const rentMovie = () => {
        setIsOpen(true);
        setPrice(149);
    }

    const buyMovie = () => {
        setIsOpen(true);
        setPrice(599);
    }

  return (
    <>
        {/* <paymentModel setIsOpen(setIsOpen) isOpen={isOpen} price={price}>   </paymentModel> */}
    </>
  )
}

export default MovieInfo