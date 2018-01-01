import { combineReducers } from 'redux';
import ReducerWeather from './reducer_weather';

const rootReducer = combineReducers({
  weathers: ReducerWeather
});

export default rootReducer;
