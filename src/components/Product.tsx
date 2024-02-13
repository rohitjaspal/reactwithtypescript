// import { IoMdAdd } from "react-icons/io";
// import { GrFormSubtract } from "react-icons/gr";
import  shirt  from '../assets/shirt.jpg';

// interface Product {
//   addProduct: any; 
//   removeProduct: any;
// }

const Product = () => {

// const handleAdd = (props: Props) => {
//     props.count = 
// } 

// const handleSubtract = (props: Props) => {
//     props.count = ref.current?.id;
// }


  

  return (
    <div className="card">
        <img src={shirt} alt="shirt"/>
        <h1>POLO Full Size Men's Formal Shirt - Winter Collection</h1>
        <p className="price"> $15.00</p>
        <p> Medium size shirt for casual wear only for men.</p>
        {/* <p>
            <button className="add" onClick={() => addProduct()}><IoMdAdd /></button>
            Add to Cart
            <button className="remove" onClick={() => removeProduct()}><GrFormSubtract /></button>
        </p> */}
    </div>
  )
}

export default Product