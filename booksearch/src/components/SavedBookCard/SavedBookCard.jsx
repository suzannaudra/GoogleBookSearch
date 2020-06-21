 import React from 'react'
import SaveButton from '../SaveButton/SaveButton'


const SavedBookCard = (props) => {
  console.log(props)
  return (
  <div className="card-container">
<img src={props.info.thumbnail} alt=""/>
<div className="desc">
  <h2>{props.info.title}</h2>
  {props.info.authors && <h3>{props.info.authors.join(', ')}</h3>}
  <p>{props.info.description.slice(0, 197) + '...'}</p>
  
 
</div>
    </div>
  
  )}
  // var BookSchema = new Schema({
  //   title: { type: String, required: true },
  //   subtitle: { type: String },
  //   authors: { type: [String], required: true },
  //   description: { type: String, required: true },
  //   thumbnail: { type: String, required: true },
  // });
  export default SavedBookCard