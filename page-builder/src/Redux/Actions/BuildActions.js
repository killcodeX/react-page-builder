import { GetAllComponents } from "./Constants";


export const getAllComponents = (components) => {
  return {
    type: GetAllComponents,
    payload: components,
  };
};
