import * as fromFilter from "./filter.actions";
import { Pipe, PipeTransform } from "@angular/core";
import { Todo } from "../components/todo/models/todo.model";

@Pipe({
  name: "todoFilter"
})
export class TodoFilterPipe implements PipeTransform {
  transform(todos: Todo[], filtro: fromFilter.FiltrosValidos): Todo[] {
    switch (filtro) {
      case "completados":
        return todos.filter(todo => todo.completado);

      case "pendientes":
        return todos.filter(todo => !todo.completado);

      default:
        return todos;
    }
  }
}
