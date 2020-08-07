import React from 'react';

let dataHargaBuah = [
	{nama: "Semangka", harga: 10000, berat: 1000},
	{nama: "Anggur", harga: 40000, berat: 500},
	{nama: "Strawberry", harga: 30000, berat: 400},
	{nama: "Jeruk", harga: 30000, berat: 1000},
	{nama: "Mangga", harga: 30000, berat: 500}
	]

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
	state = {  }
	render() { 
			return ( 
				<>
				<h1 style={{textAlign:"center", marginTop: '25px', marginBottom: '25px'}}>Table Harga Buah</h1>
				<table class="table table-striped" style={{width:'75%', marginLeft: 'auto', marginRight: 'auto'}}>
					<thead class = "thead-dark">
						<tr>
						<Header y = {'Nama'} />
						<Header y = {'Harga'} />
						<Header y ={'Berat'} />
						</tr>
					</thead>
					{dataHargaBuah.map(el =>{
						return(
							<tr>
								<Row x = {el.nama} />
								<Row x = {el.harga} />
								<Row x = {el.berat/1000 + ' kg'} />
							</tr>
						)
					})}
				</table>
				</>
			);
  }
}
 
export default Tugas11;