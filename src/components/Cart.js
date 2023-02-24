function Cart ({cartToChild,priceToChild}){
return(
  <div className="sm:px-52 bg-blue-200 h-screen pt-5">
  <div className="bg-white p-2 rounded-lg">
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
          <p className="flex justify-end">ราคา {priceToChild} THB</p> 
  </div>
  </div>
)
}

export default Cart;