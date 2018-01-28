import React, { Component } from 'react';

class SingleSalon extends Component {
    state = {
        sheduleIsVisible:false,
        infoIsVisible:true
    }

    setStateToShowCorrectElementOnClick = (x) => {
        x === "info" ? this.setState({
            sheduleIsVisible:false,
            infoIsVisible:true
        }):this.setState({
            sheduleIsVisible:true,
            infoIsVisible:false
        }) 
    }

    render() {

        return (
            <section className = "single-salon-section">
                <section className = "single-salon-hero" style={{backgroundImage: 'url('+this.props.imageUrl+')'}}>
                    <h2>{this.props.name}</h2>
                </section>
                <section className="info-shedule-switcher">
                    <div id="info" className="is-active" onClick={() => this.setStateToShowCorrectElementOnClick("info")}>
                        <h3>Info</h3>
                    </div>
                    <div id="shedule" className ="" onClick={() => this.setStateToShowCorrectElementOnClick("schedule")} >
                        <h3>Schema</h3>
                    </div>
                </section>
               {this.state.infoIsVisible && 
               <section className="salon-info-section">
                    <div> 
                        <a target="_blank" href={this.props.mapsUrl}>{this.props.adress}</a>
                        <hr/>
                    </div>
                    <div>
                        <p>Öppet till {this.props.openUntil} idag.</p>
                        <hr/>
                    </div>    
                    <div>
                        <p>{this.props.teleNumber}</p>
                        <hr/>
                    </div>
                    <div>
                        <a target="_blank" href={this.props.websiteUrl}>{this.props.websiteUrl}</a>
                        <hr/>
                    </div>
                    <div>
                        <p>{this.props.presentationText}</p>
                        <hr/>
                    </div>
                   
                </section>
               }
               {
                <section className="salon-shedule-section">

                </section>
               }
            </section>
        );
    }
}

export default SingleSalon;