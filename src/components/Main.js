import Promotion from "./promotion";
import Header from "./Header";
import Card from "./Card";
import Sidebar from "./Cart";

const Main =()=>{
    return(
        <div className="">
            <Header/>
            <Promotion/>
            <div className="grid grid-cols-3 gap-2">
                <div>
                    <Sidebar/>
                </div>
                <div className="col-span-2 space-y-5">
                    <h1 className="text-5xl italic">All Harry Potter Novels</h1> <hr className="border border-black"/>
                    <Card/>
                </div>
            </div>
        </div>
    )
}

export default Main;