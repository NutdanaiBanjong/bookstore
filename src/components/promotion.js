
const Promotion =({cartToChild,priceToChild})=>{
  // console.log(test,'test')
    return (
    <div>
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
          <div className="px-4 py-2 ">
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
        </div>
    </div>
    )
}

export default Promotion;