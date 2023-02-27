
function Card ({bookData, addCart , cartToChild , priceToChild}){
  return (
    <div className="sm:px-52 bg-blue-200 pt-3">
      <div className="rounded-lg shadow-md bg-white">
        <div className="grid grid-cols-3 ">
          <div className=" px-4 py-2 col-span-2">
            <h1 className="text-2xl">Promotion</h1> <hr className="border border-black my-2"/>
            <p> โปรโมชั่นซื้อหนังสือHarry Potterที่ร้าน BookStore ทุกภาคทั้ง7เล่ม</p>
            <ul className="list-disc list-inside space-y-1">
              <li>ซื้อเล่มไม่ซํ้ากัน2เล่ม ลด 10% ของทั้ง2เล่ม</li>
              <li>ซื้อเล่มไม่ซํ้ากัน3เล่ม ลด 20% ของทั้ง3เล่ม</li>
              <li>ซื้อเล่มไม่ซํ้ากัน4เล่ม ลด 30% ของทั้ง4เล่ม</li>
              <li>ซื้อเล่มไม่ซํ้ากัน5เล่ม ลด 40% ของทั้ง5เล่ม</li>
              <li>ซื้อเล่มไม่ซํ้ากัน6เล่ม ลด 50% ของทั้ง6เล่ม</li>
              <li>ซื้อเล่มไม่ซํ้ากัน7เล่ม ลด 60% ของทั้ง7เล่ม</li>
            </ul>
          </div>
          <div className="px-4 py-2 relative">
            <h1 className="text-2xl">Cart</h1> <hr className="border border-black my-2"/>
            {cartToChild.map(cartToChild => {
              return (
                <div key={cartToChild.id}>
                  <div className="flex justify-between"> 
                    <h1>{cartToChild.name}</h1>
                    <h1>x {cartToChild.amount} เล่ม </h1>
                  </div>
                </div>
              );
              })}
                <p className="flex justify-end absolute bottom-2 right-5">ราคา {priceToChild} THB</p> 
                </div>
            </div>    
        </div>
    <div>
      <h1 className="text-5xl mt-5 mb-1">All Harry Potter Novels</h1> <hr className="border border-black mb-5"/>
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
      {
        bookData.map((bookFromCart) => {
          return (
            <div key={bookFromCart.id}>
              <div className="bg-white rounded-lg flex flex-col pb-2">
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
    </div>
  )
}

export default Card;