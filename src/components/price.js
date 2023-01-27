const Price =(props)=>{
    const {title,price}=props 
    return(
        <div className="pt-2 px-2">
        <p className="text-center text-sm ">{title}</p> <hr/>
        <p className="text-end mr-3 text-sm">{price}</p>
        </div>
    )
}

export default Price;