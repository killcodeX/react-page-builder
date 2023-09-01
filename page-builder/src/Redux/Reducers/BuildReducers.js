import { GetAllComponents, AddLayers } from "../Actions/Constants";

const initialState = {
  components:[],
  pageBuilder:[],
  preview:[],
};

// Reducers
const BuildReducer = (state = initialState, action) => {
    switch (action.type) {
      case GetAllComponents:
        return {
          ...state,
          components: action.payload,
        };
        case AddLayers:
        return {
          ...state,
          pageBuilder: [...state.pageBuilder, action.payload],
        };
      default:
        console.log('default -->', state)
        return state;
    }
  };
  
  export default BuildReducer;