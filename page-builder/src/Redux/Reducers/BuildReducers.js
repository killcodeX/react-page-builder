import { GetAllComponents } from "../Actions/Constants";

const initialState = {
  components:[],
  pageBuilder:{},
  preview:{},
};

// Reducers
const BuildReducer = (state = initialState, action) => {
    switch (action.type) {
      case GetAllComponents:
        return {
          ...state,
          components: action.payload || [],
        };
      default:
        return state;
    }
  };
  
  export default BuildReducer;