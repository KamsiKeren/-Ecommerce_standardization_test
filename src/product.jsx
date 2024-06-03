import { useDispatch } from "react-redux"
import { addtoCart } from "./redux/cartSlice"

function product({title, image}){
const dispatch = useDispatch()


    return(
<div>
<h3>{title}</h3>
<img src="image/card-item.png" alt="homeimage"
className="image1"/>
<button className="btn" onClick={() =>dispatch(addtoCart({title, image}))}>Add to cart</button>
</div>

    )
}

export default product