import * as fromFilter from "./../../../filter/filter.actions";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducers";
import { Todo } from "../models/todo.model";
import { LimpiarCompletadosAction } from "../todo.actions";

@Component({
  selector: "app-todo-footer",
  templateUrl: "./todo-footer.component.html",
  styleUrls: ["./todo-footer.component.css"]
})
export class TodoFooterComponent implements OnInit {
  filtrosValidos: fromFilter.FiltrosValidos[] = [
    "todos",
    "completados",
    "pendientes"
  ];
  filtroActual: fromFilter.FiltrosValidos;
  tareasPendientes: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe(state => {
      this.conteoTareasPendientes(state.todos);
      this.filtroActual = state.filter;
    });
  }

  cambiarFiltro(filtro: fromFilter.FiltrosValidos) {
    const accion = new fromFilter.SetFilterAction(filtro);
    this.store.dispatch(accion);
  }

  conteoTareasPendientes(todos: Todo[]) {
    this.tareasPendientes = todos.filter(todo => !todo.completado).length;
  }

  limpiarCompletados() {
    const accion = new LimpiarCompletadosAction();
    this.store.dispatch(accion);
  }
}
