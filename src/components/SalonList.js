import React, { Component } from 'react';
import SalonListItem from "./SalonListItem";
import SingleSalon from "./SingleSalon";
import SalonFilterSelect from "./SalonFilterSelect";
import Header from "./Header";



import data from '../data.json';

class SalonList extends Component {
    state = {
        salons: [],
        selectOptionValue: [200,300,400,500,600,700,800,900,1000,1100],
        currentSalon:null
    }

    fetchAllSalons = () => {
        this.setState({salons:data});
    }   

    componentWillMount(){
        this.fetchAllSalons();
    }
    
    salonOnClick = (x) => {
        let thisSalon = [...this.state.salons].filter((elem)=>{
            return elem.id === x;
        });
        this.setState({
            currentSalon:thisSalon[0]
        });
    }

    handleSelectOnChange = (e) => {
        this.setState({
            selectOptionValue: e.target.value
        });
    }

    render() {
        const { salons, selectOptionValue, currentSalon } = this.state;
        const renderListOfSalons = [...salons].map((elem, key)=>{
            if(selectOptionValue.includes(elem.price)){
                return <SalonListItem id={elem.id} 
                    onClick = {()=> this.salonOnClick(elem.id)} name={elem.name} rating={elem.rating} adress={elem.adress} price={elem.price} appointmentTime={elem.appointmentTime} key={key} />;
            }
        });

        return (
        <section className='salon-list-section'>
            {!currentSalon && <Header/>}
            <ul className='salon-list'>
                {!currentSalon &&
                <select onChange = {this.handleSelectOnChange}>
                    <option value = {[200,300,400,500,600,700,800,900,1000,1100]} >Alla prisklasser</option>
                    <option value = {[200,300]} >Pris 200 kr - 300kr</option>
                    <option value = {[400,500]} >Pris 400 kr - 500kr</option>
                    <option value = {[600,700]} >Pris 600 kr - 700kr</option>
                    <option value = {[800,900,1000,1100]} >Pris 800 kr och uppåt </option>
                </select>
                }
                {!currentSalon && renderListOfSalons}
                {currentSalon && <SingleSalon 
                    
                    name = {currentSalon.name}
                    adress = {currentSalon.adress}
                    openUntil = {currentSalon.openingHours[1]}
                    websiteUrl = {currentSalon.websiteUrl}
                    presentationText = {currentSalon.presentationText}
                    teleNumber = {currentSalon.teleNumber}
                    mapsUrl = {currentSalon.mapsUrl}
                    imageUrl = {currentSalon.imageUrl}

                />}
                
            </ul>
        </section>
        );
    }
}

export default SalonList;
