import React from 'react';
import './tugas13.css'

class Row extends React.Component{
	render(){
		return <td>{this.props.x}</td>;
	}
}

class Header extends React.Component{
	render(){
	return <th>{this.props.y}</th>
	}
}


class Tugas11 extends React.Component {
	constructor(props){
		super(props)
		this.state ={
			dataHargaBuah : [
				{nama: "Semangka", harga: 10000, berat: 1000},
				{nama: "Anggur", harga: 40000, berat: 500},
				{nama: "Strawberry", harga: 30000, berat: 400},
				{nama: "Jeruk", harga: 30000, berat: 1000},
				{nama: "Mangga", harga: 30000, berat: 500}],
			input :{
				nama: "",
				harga: "",
				berat: ""
			}
		
		}
	
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	  }
	
	  handleChange(event){
		  let input = {...this.state.input}
		  input[event.target.name] = event.target.value
		this.setState({
			input
		});
	  }
	
	  handleSubmit(event){
		event.preventDefault()
		this.setState({
		  dataHargaBuah: [...this.state.dataHargaBuah, this.state.input],
		  input :{
			nama:"",
		  	harga: "",
		  	berat: ""
		  }
		})
	  }
	render() { 
			return ( 
				<>
				<h1>Table Harga Buah</h1>
				<table>
					<tr>
    				<Header y = {'Nama'} />
    				<Header y = {'Harga'} />
    				<Header y ={'Berat'} />
  				</tr>
					{this.state.dataHargaBuah.map(el =>{
						return(
							<tr>
								<Row x = {el.nama} />
								<Row x = {el.harga} />
								<Row x = {el.berat/1000 + ' kg'} />
							</tr>
						)
					})}
				</table>
				<h1>Form Buah</h1>
				<div id="form-content">
				<form onSubmit={this.handleSubmit}>
					<label> Nama Buah : </label>          
					<input type="text" name='nama' value={this.state.input.nama} onChange={this.handleChange} placeholder="nama" /><br/><br/>
					<label>Harga Buah : </label>
					<input type="text" name='harga' value ={this.state.input.harga} onChange={this.handleChange} placeholder="harga" /><br/><br/>
					<label>Berat Buah : </label>
					<input type="text" name='berat' value={this.state.input.berat} onChange={this.handleChange} placeholder="dalam gram" /><br/><br/>
					<button>submit</button>
				</form>
				</div>
				</>
			);
  }
}
 
export default Tugas11;