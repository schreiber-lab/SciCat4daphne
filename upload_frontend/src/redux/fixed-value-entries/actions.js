import * as types from './types';

export const addFixedValueEntries = (payload) => ({ type: types.ADD_FIXED_VALUE_ENTRIES, payload });
export const loadFixedValueEntriesRequest = () => ({ type: types.LOAD_FIXED_VALUE_ENTRIES_REQUEST });
export const loadFixedValueEntriesSuccess = (payload) => ({ type: types.LOAD_FIXED_VALUE_ENTRIES_SUCCESS, payload });
export const loadFixedValueEntriesError = () => ({ type: types.LOAD_FIXED_VALUE_ENTRIES_ERROR }); 

