import { Todo } from "./components/todo/models/todo.model";
import * as fromTodo from "./components/todo/todo.reducer";
import * as fromFilter from "./filter/filter.reducer";
import * as fromFilterActions from "./filter/filter.actions";
import { ActionReducerMap } from "@ngrx/store";

export interface AppState {
  todos: Todo[];
  filter: fromFilterActions.FiltrosValidos;
}

export const appReducer: ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
  filter: fromFilter.filterReducer
};
