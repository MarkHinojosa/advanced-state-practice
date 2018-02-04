import React from 'react';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
  }

  render(){
    const displayReviews = (reviews) => {
      if(this.state.visible === true){
        return (
          reviews.map((cur) => {
            return <p>"{cur.description}"</p>
          }
        )) 
      }
    }
    const displayState = (showEm) => {
      if(this.state.visible === false){
      this.setState({visible: true})        
      } else {
        this.setState({visible: false})
      }
    }

    const wording = (review) => {
      const howManyReviews = review.reviews.length;
      if(howManyReviews > 1){
        return  <a onClick={() => displayState(review.reviews)} >{howManyReviews} Reviews</a>
      }else {
        return <a onClick={() => displayState(review.reviews)} >{howManyReviews} Review</a>
      }
    }
    
    return (
      <div>
        <p className="pull-right">{wording(this.props)}</p>
        <div> {displayReviews(this.props.reviews)} </div>        
      </div>
    )
  }

}

export default Reviews;