import { 
  GetAllComponents, 
  AddLayers,
  ActiveSection, 
  AddSections,
  AddSetting
} from "../Actions/Constants";
import { findSection } from "../../Utils/FindSection"; 

const initialState = {
  components:[],
  pageBuilder:[],
  preview:[],
  activeSection:null,
};

// Reducers
const BuildReducer = (state = initialState, action) => {
    switch (action.type) {
      case GetAllComponents:
        return {
          ...state,
          components: action.payload,
        };
        case AddSections: // Add section into Page
        return {
          ...state,
          pageBuilder: [...state.pageBuilder, action.payload],
        };
        case ActiveSection: // Save current active session
          console.log('Active Section called -->', action.payload)
        return {
          ...state,
          activeSection:action.payload
        };
        case AddLayers: // Add layers/element into section
          let res = findSection(state.pageBuilder, state.activeSection, action.payload,)
        return {
          ...state,
          pageBuilder:res
        };
        case AddSetting: // Add Saved Setting into preview object
          console.log('AddSetting called', action.payload)
          return {
            ...state,
          };
      default:
        console.log('default -->', state)
        return state;
    }
  };
  
  export default BuildReducer;