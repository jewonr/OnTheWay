import { getTodos, updateTodos } from "../api/todoApi";

const ADD_TODO = 'todo/ADD_TODO' as const;
const REMOVE_TODO = 'todo/REMOVE_TODO' as const;
const TOGGLE_TODO = 'todo/TOGGLE_TODO' as const;

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {
    id: Math.ceil(new Date().getTime() + Math.random()),
    text
  }
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id
});

export type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof toggleTodo>

export type TodoState = {
  id: number;
  text: string;
  done: boolean;
};

export type TodosState = TodoState[];

const initialState: TodosState = [];
(async () => {
  await getTodos()
    .then(todos => todos.forEach((todo: TodoState) => {
      initialState.push(todo);
    }));
})();

function todo(
  state: TodosState = initialState,
  action: TodoAction
) {
  switch(action.type) {
    case ADD_TODO:
      const text = action.payload.text.replace(/\s/g, "");
      if(text === '') return state;
      state = state.concat({
        id: action.payload.id,
        text: action.payload.text,
        done: false
      });
      break;
    case REMOVE_TODO:
      state = state.filter(todo => todo.id !== action.payload);
      break;
    case TOGGLE_TODO:
      state = state.map(todo => 
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
      break;
    default:
      return state;
  }
  updateTodos(state);
  return state;
}

export default todo;
