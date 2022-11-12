
import React ,{ useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  let color = count > 0 ? "green" : count < 0 ? "red" : "black"
  const incr = ()=> setCount(count + 1 )
  const decr = ()=> setCount(count - 1 )
  const resetNum = () => setCount(0)

  return (
    <div className='container'>
    <h1>counter</h1>
    <span style={{color}} id='value'>{count}</span>
    <div className='btn-group'>
      <button onClick={decr} className='btn btn-decrease'>Decrease</button>
      <button onClick={resetNum} className='btn btn-reset'>Reset</button>
      <button onClick={incr} className='btn btn-increase'>Increase</button>
    </div>
  </div>
  );
}

export default App;
