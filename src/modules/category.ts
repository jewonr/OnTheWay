const ADD_CATEGORY = 'category/ADD_CATEGORY' as const;
const REMOVE_CATEGORY = 'category/REMOVE_CATEGORY' as const;

export const addCategory = (text: string) => ({
  type: ADD_CATEGORY,
  payload: {
    id: Math.ceil(new Date().getTime() + Math.random()),
    text
  }
});

export const removeCategory = (id: number) => ({
  type: REMOVE_CATEGORY,
  payload: id
});

export type CategoryAction = 
  | ReturnType<typeof addCategory>
  | ReturnType<typeof removeCategory>;

export type CategoryState = {
  id: number;
  text: string;
}

export type CategoriesState = CategoryState[];

const initialState: CategoriesState = [];

function category(
  state: CategoriesState = initialState,
  action: CategoryAction
): CategoriesState {
  switch(action.type) {
    case ADD_CATEGORY:
      const text = action.payload.text.replace(/\s/g, "");
      if(text === '') return state;
      state = state.concat({
        id: action.payload.id,
        text: action.payload.text,
      });
      break;
    case REMOVE_CATEGORY:
      state = state.filter(category => category.id !== action.payload);
      break;
    default:
      return state;
  }
  return state;
}

export default category;