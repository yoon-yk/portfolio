import React, { useEffect, useState } from "react";
import axios from "axios";

const Items = () => {
  const [endorsements, setEndorsements] = useState('');

  useEffect(() => {
    renderEndorsment();
  },[endorsements]); 

  const renderEndorsment = async() =>{

      await axios.get("/api/endorsements")
      .then((res) => {
        setEndorsements(
          res.data.map(r => {
            return getItem(r);
          }))
        console.log(endorsements);
      })
      .catch((err) => console.log(err));
  }

  const getItem = endorsement => {
      console.log(endorsement);
    return (
      <div class='endorsement endorsement__grid' key={endorsement._id}>
        <div class='endorsement__description'>
          <h3>"{endorsement.content}"</h3>
          <h4>{endorsement.name}, {endorsement.title}</h4>
          <div>{endorsement.regdate}</div>
        </div>
      </div>
    );
  }

  
  return (
    <div>{endorsements}</div>
  );
  
}

export default Items;
