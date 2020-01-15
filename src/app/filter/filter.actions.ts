import { Action } from "@ngrx/store";

export const SET_FILTER = "[FILTER] Set Filter";

export type FiltrosValidos = "todos" | "pendientes" | "completados";

export class SetFilterAction implements Action {
  readonly type = SET_FILTER;

  constructor(public filtro: FiltrosValidos) {}
}

export type Actions = SetFilterAction;
