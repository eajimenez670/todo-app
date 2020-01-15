import * as fromActions from "./filter.actions";

const initialState: fromActions.FiltrosValidos = "todos";

export function filterReducer(
  state = initialState,
  action: fromActions.Actions
) {
  switch (action.type) {
    case fromActions.SET_FILTER:
      return action.filtro;

    default:
      return state;
  }
}
