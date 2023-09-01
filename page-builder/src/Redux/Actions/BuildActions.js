import { GetAllComponents, AddLayers } from "./Constants";


export const getAllComponents = (components) => {
  return {
    type: GetAllComponents,
    payload: components,
  };
};

export const addLayers = (layer) => {
  return {
    type: AddLayers,
    payload: layer,
  }
}