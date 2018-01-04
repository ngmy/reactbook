import {List} from 'immutable';
import schema from '../../schema';

let _preSearchData;

const crud = (state, action) => {
  switch (action.type) {
    case 'SEARCH': {
      const target = ((action.event.target: any): HTMLInputElement);
      const needle: string = target.value.toLowerCase();
      if (!needle) {
        return Object.assign({}, state, {
          data: _preSearchData,
        });
      }
      const fields = state.schema.map(item => item.id);
      if (!_preSearchData) {
        return state;
      }
      const searchdata = _preSearchData.filter(row => {
        for (let f = 0; f < fields.length; f++) {
          if (row[fields[f]].toString().toLowerCase().indexOf(needle) > -1) {
            return true;
          }
        }
        return false;
      });
      return Object.assign({}, state, {
        data: searchdata,
      });
    }
    case 'START_SEARCHING':
      _preSearchData = state.data;
      return state;
    case 'DONE_SEARCHING': {
      return Object.assign({}, state, {
        data: _preSearchData,
      });
    }
    case 'SORT': {
      const _sortCallback = (a: (string|number), b: (string|number), descending: boolean): number => {
        let res: number = 0;
        if (typeof a === 'number' && typeof b === 'number') {
          res = a - b;
        } else {
          res = String(a).localeCompare(String(b));
        }
        return descending ? -1 * res : res;
      };
      const newData = state.data.sort(
        (a, b) => _sortCallback(a[action.key], b[action.key], action.descending)
      );
      return Object.assign({}, state, {
        data: newData,
      });
    }
    case 'CREATE_RECORD': {
      const newData = state.data.unshift(action.newRecord);
      return Object.assign({}, state, {
        data: newData,
      });
    }
    case 'DELETE_RECORD': {
      const newData = state.data.remove(action.recordId);
      return Object.assign({}, state, {
        data: newData,
      });
    }
    case 'UPDATE_RECORD': {
      const newData = state.data.set(action.recordId, action.newRecord)
      return Object.assign({}, state, {
        data: newData,
      });
    }
    case 'UPDATE_FIELD': {
      let record = state.data.get(action.recordId);
      record[action.key] = action.value;
      const newData = state.data.set(action.recordId, record);
      return Object.assign({}, state, {
        data: newData,
      });
    }
    case 'DONE_SAVE_DATA': {
      return Object.assign({}, state, {
        data: action.newData,
      });
    }
    default: {
      let data: List<Object>;
      const storage = 'localStorage' in window
        ? localStorage.getItem('data')
        : null;
      if (!storage) {
        let initialRecord = {};
        schema.forEach(item => initialRecord[item.id] = item.sample);
        data = List([initialRecord]);
      } else {
        data = List(JSON.parse(storage));
      }
      const state = {
        data: data,
        schema: schema,
      };
      return state;
    }
  }
}

export default crud
