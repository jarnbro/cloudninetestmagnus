import React from 'react';

const SalonListItem = (props) => {
    let ratingImg = 'hihi';
    if(props.rating === 1){
        ratingImg = "1";
    }
    else if(props.rating === 2){
        ratingImg = "2";
    }
    else if(props.rating === 3){
        ratingImg = "3";
    }
    else if(props.rating === 4){
        ratingImg = "4";
    }
    else if(props.rating === 5){
        ratingImg = "5";
    }

    
    return (
        <li id={props.id} onClick={props.onClick}className = "salon-list-item">
            <p>12.00</p>  
            <div className="salon-list-item-content-center">
                <h4>{props.name}</h4>
                {ratingImg}
                <p>{props.adress}</p>
            </div> 
            <div className="salon-list-item-content-right">
                <p>{props.price} kr</p>
                <p>{props.appointmentTime} min</p>
            </div> 
            <hr/>
        </li>
    );
}

export default SalonListItem;
