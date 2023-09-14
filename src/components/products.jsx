import './products.css';
import axios from "axios";
import { useEffect ,useState } from "react";
export function Ass() {
  const [user, setUser] = useState([]);

const FetchData = async ()=>{
  // console.log('Helo');
  const response = await axios.get("https://fakestoreapi.com/products")
  .then((response)=>{
    setUser(response.data);
  })
}

useEffect(()=>{
  FetchData();
},[]);

return (
  <div>
    {user.map((data)=>{
      return(
        <div className='prod'>
        {/* <div key={data.id}> */}
        <div className='prod_1'>
          <h2 className='prod_2'>{data.title}</h2>
          <img className='prod_3' src={data.image}/>
          <p className='prod_4'> {data.description}</p>
          {/* </div> */}
          </div>
          </div>
      )
    })}
  </div>
)
}
export default Ass