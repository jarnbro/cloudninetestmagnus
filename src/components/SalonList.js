import React, { Component } from 'react';
import SalonListItem from "./SalonListItem";
import SingleSalon from "./SingleSalon";
import Header from "./Header";
import data from '../data.json';

class SalonList extends Component {
    state = {
        salons: [],
        selectOptionValue: [200,300,400,500,600,700,800,900,1000,1100],
        currentSalon:null
    }

    fetchAllSalonsFromDataFile = () => {
        this.setState({salons:data});
    }   

    openSingleSalonOnClick = (x) => {
        let thisSalon = [...this.state.salons].filter((elem)=>{
            return elem.id === x;
        });
        this.setState({
            currentSalon:thisSalon[0]
        });
    }

    closeSingleSalonAndOpenListOnClick = () => {
        this.setState({
            currentSalon:null,
            selectOptionValue: [200,300,400,500,600,700,800,900,1000,1100]
        });
    }

    handleSelectOnChange = (e) => {
        this.setState({
            selectOptionValue: e.target.value
        });
    }

    componentWillMount(){
        this.fetchAllSalonsFromDataFile();
    }

    render() {
        const { salons, selectOptionValue, currentSalon } = this.state;
        const renderListOfSalons = [...salons].map((elem, key)=>{
            if(selectOptionValue.includes(elem.price)){
                return <SalonListItem id={elem.id} 
                    onClick = {()=> this.openSingleSalonOnClick(elem.id)} name={elem.name} rating={elem.rating} adress={elem.adress} price={elem.price} appointmentTime={elem.appointmentTime} key={key} />;
            }
        });

        return (
        <section className='salon-list-section'>
            {!currentSalon && <Header/>}
            <ul className='salon-list'>
                {!currentSalon &&
                <div className="select-wrapper">
                    <select onChange = {this.handleSelectOnChange}>
                        <option value = {[200,300,400,500,600,700,800,900,1000,1100]} >Alla prisklasser</option>
                        <option value = {[200,300]} >Pris 200 kr - 300kr</option>
                        <option value = {[400,500]} >Pris 400 kr - 500kr</option>
                        <option value = {[600,700]} >Pris 600 kr - 700kr</option>
                        <option value = {[800,900,1000,1100]} >Pris 800 kr och uppåt </option>
                    </select>
                    <svg width="12px" height="7px" viewBox="0 0 12 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"> <desc>Created with Sketch.</desc> <defs></defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Lista" transform="translate(-348.000000, -87.000000)" stroke="#B69F58"> <polyline id="Path-2-Copy-4" transform="translate(353.839435, 90.455857) rotate(90.000000) translate(-353.839435, -90.455857) " points="351.446027 85 356.67887 90.2328434 351 95.9117134"></polyline> </g> </g> </svg>
                </div>    
                }
                {!currentSalon && renderListOfSalons}
                {currentSalon && <SingleSalon 
                    onClick = {this.closeSingleSalonAndOpenListOnClick}
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
