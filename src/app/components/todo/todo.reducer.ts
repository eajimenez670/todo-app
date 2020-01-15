import { Todo } from "./models/todo.model";
import * as fromTodo from "./todo.actions";

const todo1 = new Todo("Comprar el Manifiesto");
const todo2 = new Todo("Leer el Manifiesto");
const todo3 = new Todo("La conquista del pan");

const estadoInicial: Todo[] = [todo1, todo2, todo3];

export function todoReducer(
  state = estadoInicial,
  action: fromTodo.Acciones
): Todo[] {
  switch (action.type) {
    case fromTodo.AGREGAR_TODO:
      const todo = new Todo(action.texto);
      return [...state, todo];

    case fromTodo.TOGGLE_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            completado: !todoEdit.completado
          };
        } else {
          return todoEdit;
        }
      });

    case fromTodo.TOGGLE_ALL_TODO:
      return state.map(todoEdit => {
        return {
          ...todoEdit,
          completado: action.completado
        };
      });

    case fromTodo.EDITAR_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            texto: action.texto
          };
        } else {
          return todoEdit;
        }
      });

    case fromTodo.BORRAR_TODO:
      return state.filter(todoDelete => todoDelete.id !== action.id);

    case fromTodo.LIMPIAR_COMPLETADOS:
      return state.filter(todo => !todo.completado);

    default:
      return state;
  }
}
