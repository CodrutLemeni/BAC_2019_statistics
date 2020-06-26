import { combineReducers } from 'redux';
import globalStatistics from './globalStatistics';
import countyStatistics from './countyStatistics';
import genericStatistics from './genericStatistics';
import compareWidget from './compareWidget';

export const rootReducer = combineReducers({
  globalStatistics, countyStatistics, genericStatistics, compareWidget,
});

