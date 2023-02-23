const Card = ({bookData, addCart}) => {
  return (
    <div>
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
      {
        bookData.map((bookFromCart) => {
            return (
              <div key={bookFromCart.id}>
                <div className="bg-white rounded-lg flex flex-col">
                  <img src={bookFromCart.image} className="w-full h-full" alt=""/>
                  <div className='text-base'>
                    <p className='text-center'>{bookFromCart.name}</p> <hr/>
                    <p className='text-end mr-3'>{bookFromCart.value} THB</p>
                  </div>
                  <div className="flex justify-center">
                    <button onClick={() => addCart(bookFromCart)} className="bg-orange-500 rounded-lg px-2">Add to cart</button>
                  </div>  
                </div> 
              </div>
            )
        })
      }
      </div>
    </div>
  )
}

export default Card