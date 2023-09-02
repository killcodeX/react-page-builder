import { 
  GetAllComponents, 
  AddLayers,
  ActiveSection, 
  AddSections
} from "../Actions/Constants";


export const getAllComponents = (components) => {
  return {
    type: GetAllComponents,
    payload: components,
  };
};

export const addSection = (section) => {
  return {
    type: AddSections,
    payload: section,
  }
}

export const activeSection = (id) => {
  return {
    type: ActiveSection, 
    payload: id,
  }
}

export const addLayers = (layer) => {
  return {
    type: AddLayers,
    payload: layer,
  }
}