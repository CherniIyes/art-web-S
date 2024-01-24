import React,{useState} from 'react'
import axios from 'axios';
import '../Components/add.css'

function AddCard() {
    const [name, setName] = useState("");
    const [artistname, setartistname] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setimage] = useState("");
    // const [data, setData] = useState([]);
const handleAdd = ()=>{
const obj = {
    "name": name,
    "price": price,
    "artistname": artistname,
    "image": image
  }
axios
.post("http://localhost:8080/api/art/add",obj)
.then(()=>{
    setName ("")
    setartistname("")
    setPrice(0)
    setimage("")
})

}

return (
    <div className="containerr">
      <form className="form">
        <input placeholder="Name" value={name} type="text" onChange={(e) => setName(e.target.value)} />
        <input placeholder="Price" value={price} type="tewt" onChange={(e) => setPrice(e.target.value)} />
        <input placeholder="image" value={image} type="text" onChange={(e) => setimage(e.target.value)} />
        <input placeholder="artistname" value={artistname} type="text" onChange={(e) => setartistname(e.target.value)} />

        <button onClick={handleAdd}>Submit</button>
      </form>
    </div>
  );
}


export default AddCard
