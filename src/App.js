import './App.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeaherData } from './store/weatherSlice';

function App() {
  const dispatch = useDispatch();
  const {status} = useSelector(state => state.weather)

  useEffect(() => {
    dispatch(fetchWeaherData());
  }, [dispatch]);

  return (
    <div className="App">
      {status === 'Loading' && <h1>Loading</h1>}
    </div>
  );
}

export default App;
