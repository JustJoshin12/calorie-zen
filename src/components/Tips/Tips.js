import React, { useState, useEffect } from 'react';
import './Tips.css';

function Tips() {
  useEffect(() => {
    fetch('https://api.nomoreparties.co/todays-tips-ens').then((res) => {
      return res.json();
    }).then((res) => {
      setList(Object.values(res));  
    })
  }, []);
  const [list, setList] = useState();
  console.log(list);
  return (
    <div className="tips">
      <ul className="tips__list">
      {list &&  list.map((item)=> {
       return <li className='tips__item' key={item.id}>{item.tip}</li>
      })
      }
      </ul>
    </div>
  );
}

export default Tips;