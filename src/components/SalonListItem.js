import React, { Component } from 'react';
import RatingStars from './RatingStars';

class SalonListItem extends Component {

    calcAvarageRatinFromPropsRatingList = () => {
        let totalRatings = [...this.props.rating].reduce((elem,prevVal)=>{
            return elem+prevVal;
        },0);
        return totalRatings/this.props.rating.length;       
    }

    render() {
        return (
        <li id={this.props.id} onClick={this.props.onClick}className = "salon-list-item">
            <p className="salon-time-p">12.00</p>  
            <div className="salon-list-item-content-center">
                <h4>{this.props.name}</h4>
                <RatingStars rating={this.props.rating}/>
                <p className="adress-p">{this.props.adress}</p>
            </div> 
            <div className="salon-list-item-content-right">
                <p>{this.props.price} kr</p>
                <p>{this.props.appointmentTime} min</p>
            </div> 
            <svg width="8px" height="11px" viewBox="0 0 8 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"> <desc>Created with Sketch.</desc> <defs></defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Lista" transform="translate(-353.000000, -273.000000)" stroke="#B69F58"> <polyline id="Path-2-Copy-2" points="354.446027 273 359.67887 278.232843 354 283.911713"></polyline> </g> </g> </svg>
            <hr/>
        </li>
        );
    }
}

export default SalonListItem;

