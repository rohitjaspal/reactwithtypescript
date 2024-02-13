import { useState } from "react"

const Update = () => {
const [details , setDetails] = useState({
    name: 'Rohit jaspal',
    city: 'Panchkula',
    state: 'Haryana',
    address: {
        houseno: 222, 
        street: 'sector 23'
    }
})

const handleClick = () => {
  setDetails({...details , address: {...details.address , houseno : 221}}); 
}
// const keys = Object.keys(details).map((d) => {
//     return d;
// })
// console.log(keys);
// const values = Object.values(details).map((d) => {
//   return d;
// })
// console.log(values);

  return (
    <div>
        {/* Complete Details of Rohit : <ul><li>{keys}</li></ul> */}
        <button onClick={handleClick}>update details</button>
        <p>
        updated address is : {details.address.houseno}
        </p> 
    </div>
  )
}

export default Update