import { deleteCategory, getCategory, insertCategory } from "../api/categoryApi";
import { updateFeeds } from "../api/feedApi";

const ADD_CATEGORY = 'category/ADD_CATEGORY' as const;
const REMOVE_CATEGORY = 'category/REMOVE_CATEGORY' as const;
const SAVE_CATEGORY = 'category/SAVE_CATEGORY' as const;

export const addCategory = (text: string) => ({
  type: ADD_CATEGORY,
  payload: {
    id: Math.ceil(new Date().getTime() + Math.random()),
    text
  }
});

export const removeCategory = (text: string) => ({
  type: REMOVE_CATEGORY,
  payload: text
});

export const saveCategory = () => ({
  type: SAVE_CATEGORY,
});

export type CategoryAction = 
  | ReturnType<typeof addCategory>
  | ReturnType<typeof removeCategory>
  | ReturnType<typeof saveCategory>;

export type CategoryState = {
  id: number;
  text: string;
}

export type CategoriesState = CategoryState[];

const initialState: CategoriesState = [];
(async () => {
  await getCategory()
    .then(categories => categories.forEach((category: CategoryState) => {
      initialState.push(category);
    }));
})();

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
      insertCategory(action.payload);
      break;
    case REMOVE_CATEGORY:
      state = state.filter(category => category.text !== action.payload);
      deleteCategory(action.payload);
      break;
    case SAVE_CATEGORY:
      state.forEach(category => {
        updateFeeds(category);
      })
      break;
    default:
      return state;
  }
  return state;
}

export default category;