import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

export interface IndexModelState {
  name: string;
}

export interface IndexModelType {
  namespace: 'table';
  state: IndexModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<IndexModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
}

const table: IndexModelType = {
  state: {
    name: '牛逼',
  },
  namespace: 'table',
  effects: {
    *query({ payload }, { call, put, select }) {
      yield put({
        type: 'save',
        payload,
      });
      console.log(payload);
    },
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};

export default table;
