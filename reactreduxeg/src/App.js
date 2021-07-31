import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { incNumber, decNumber } from "./actions/index";

import "./App.css"
export default function App() {
  const state = useSelector(state => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <>
        <div className="main-div">


          <div className="container">

            <h1>Increment/Decrement counter</h1>
            <h4>using React and Redux</h4>

            <div className="quantity">
              <a className="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber())}><span>-</span></a>
              <input name="quantity" type="text" className="quantity__input" value={state} />
              <a className="quantity__plus" title="Increment" onClick={() => dispatch(incNumber())}><span>+</span></a>
            </div>

          </div>
        </div>
      </>
    </div>
  )
}
