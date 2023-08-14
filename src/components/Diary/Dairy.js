import React from 'react';
import '../Diary/Dairy.css';
import FoodAdder from '../FoodAdder/FoodAdder';

function Diary() {
  return (
    <div className="diary">
      <div className="calories">
        <h2>Calories</h2>
        <ul className="calories__list">
          <li>360</li>
          <li>120</li>
        </ul>
      </div>
      <FoodAdder />
    </div>
  );
}

export default Diary;