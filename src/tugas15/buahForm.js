import React, {useContext} from "react"
import {BuahContext} from "./buahContext"
import axios from "axios"

const BuahForm = () =>{ 
  const [dataBuah, setDataBuah, input, setInput, idBuah, setIdBuah, status, setStatus] = useContext(BuahContext)
  
  const handleSubmit = (event) =>{ 
    event.preventDefault()

		if(input['name'].replace(/\s/g, '') !== "" && input['price'].toString().replace(/\s/g, '') !== "" && input['weight'].toString().replace(/\s/g, '') !== "" ){
			if(status === "create"){
				axios.post(`http://backendexample.sanbercloud.com/api/fruits`, input)
					.then(res => {
						console.log(res.data)
						setDataBuah([...dataBuah, {name: res.data.name, price: res.data.price, weight: res.data.weight}])
					})
			}else if(axios === "edit"){
				axios.put(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`, input)
					.then(res => {
						let buah = dataBuah.find(el => el.id === idBuah)
						buah['name'] = input.name
						buah['price'] = input.price
						buah['weight'] = input.weight
						setDataBuah([...dataBuah])
					})
			}

			setIdBuah(0)
			setInput({
				name: "",
				price: "",
        weight: ""
      })
      setStatus("create")
		}
	}
  
  const handleChange = (event) => {
    const { name, value } = event.target;
        setInput(prevState => ({
            ...prevState,
            [name]: value
    }))
	}


  return(
    <>
    <h1>Form Buah</h1>
		<div id="form-content">
      <form onSubmit={handleSubmit}>
        <label> Nama Buah : </label>          
        <input type="text" name='name' value={input.name} onChange={handleChange} placeholder="name" /><br/><br/>
        <label>Harga Buah : </label>
        <input type="text" name='price' value ={input.price} onChange={handleChange} placeholder="price" /><br/><br/>
        <label>Berat Buah : </label>
        <input type="text" name='weight' value={input.weight} onChange={handleChange} placeholder="in gram" /><br/><br/>
        <button>submit</button>
      </form>
		</div>
    </>
  )
}

export default BuahForm;

