import React, { Component } from 'react';
import SalonListItem from "./SalonListItem";
import SalonFilterSelect from "./SalonFilterSelect";


import data from '../data.json';

class SalonList extends Component {
    state = {
        salons: [],
        selectOptionValue:'hihi'
    }

    fetchAllSalons = () => {
        this.setState({salons:data});
    }   

    componentWillMount(){
        this.fetchAllSalons();
    }
    
    onClickSalon = () => {

    }

    handleSelectOnChange = (e) => {
        this.setState({
            selectOptionValue: e.target.value
        });
    }

    render() {
        const { salons, selectOptionValue } = this.state;
        const renderListOfSalons = [...salons].map((elem, key)=>{
            return <SalonListItem key={key} />
        });

        return (
        <section className='salon-list'>
            <ul>
                <select onChange = {this.handleSelectOnChange}>
                    <option value = "200-300" >Pris 200 kr - 300kr</option>
                    <option value = "400-500" >Pris 400 kr - 500kr</option>
                    <option value = "600-700" >Pris 600 kr - 700kr</option>
                    <option value = "600-up" >Pris 200 kr - 300kr</option>
                </select>
                {renderListOfSalons}
                <h1>{selectOptionValue}</h1>
            </ul>
        </section>
        );
    }
}

export default SalonList;
