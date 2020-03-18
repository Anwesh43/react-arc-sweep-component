import React from 'react';
import SweepArc from './SweepArc'
import './App.css';
import {useDimension, useAnimatedScale} from './hooks'
import Button from './Button'

function App() {
  const {w, h, resize, disableResizing} = useDimension()
  const {start, scale} = useAnimatedScale(0.005 / 4, 30)
  return (
    <div className="App">
      <SweepArc scale = {scale} w = {w} h = {h}/>
      <Button w = {w} h = {h} onClick = {start}></Button>
    </div>
  );
}

export default App;
