import { loadComponentsFromFunctionComponent } from "./loadComponentsFromFunctionComponent.js";

export async function loadFunctionComponents(componentes = [], isPage = false) {
  let functionComponents = [];
  let paramsForFunctions = [];
  for (let index = 0; index < componentes.length; index++) {
    const component = componentes[index];
    const { functionComponentCode, functionComponentParams } = await loadComponentsFromFunctionComponent(component, isPage);
    functionComponents.push(functionComponentCode);
    paramsForFunctions.push(functionComponentParams);
  }
  return { functionComponents, paramsForFunctions };
}