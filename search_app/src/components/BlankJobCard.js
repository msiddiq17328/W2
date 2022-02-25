import React from 'react';
import './css/blank-card.css';

class BlankCard extends React.Component{

  constructor(props){
    super(props);
    this.addThisCard = this.addThisCard.bind(this);
    this.state = {
      clicked: false
    };
    this.newCard = { };
    
  }

  addThisCard(){
    this.setState({
      clicked: false
    });
    this.props.addCard(this.newCard);
  }

  render(){

    this.newCard = {
      "company": this.props.company,
      "job_title" : this.props.job_title,
      "location" : this.props.location
    };
  
    if(!this.state.clicked){
      return(
        <div className="blank-card" 
              onClick={ (e) => {
                this.setState({
                  clicked: true
                });
              }}>
        </div>
      );
    } else {
      return(
        <div className='card'
              onKeyUp={ (e) => {
                if(e.keyCode === 13){
                  this.addThisCard();
                }
              }
             }>
          <div className="card-top">
            <div className="category">
              <input type="text" 
                     maxLength="3" 
                     placeholder="CAT"
                     onChange={ (e) => this.newCard.category = e.target.value}
              />
              <input type="submit" 
                     value="ADD"
                     onClick={(e) => {
                       console.log(this.newCard);
                       this.addThisCard();
                     }}
                       />
            </div>
            <div className="headline">
              <textarea maxLength="48" 
                        rows="2" 
                        placeholder="Catchy Headline"
                        onChange={ (e) => this.newCard.headline = e.target.value}
                        />
            </div>
          </div>
          <div className="card-bottom">
            <div className="btm-headline">
              <span></span>
            </div>
            <div className="btm-desc">
              <textarea maxLength='80' 
                        columns='30' 
                        rows="2" 
                        placeholder='Eyecatching description'
                        onChange={ (e) => this.newCard.desc = e.target.value}>
              </textarea>
            </div>
            <div className="link">
              <input type="url"
                      maxLength="48" 
                      placeholder="Url"
                      onChange={ (e) => this.newCard.link = e.target.value} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default BlankCard;