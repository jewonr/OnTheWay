const NEW_MEMO = 'memo/NEW_MEMO' as const;
const ADD_MEMO = 'memo/ADD_MEMO' as const;
const CLICK_MEMO = 'memo/CLICK_MEMO' as const;
const REMOVE_MEMO = 'memo/REMOVE_MEMO' as const;

let nextId = 1;

export const newMemo = () => ({
  type: NEW_MEMO,
  payload: nextId++
});

export const addMemo = (id: number, text: string) => ({
  type: ADD_MEMO,
  payload: {
    id: id,
    text
  }
});

export const clickMemo = (id: number) => ({
  type: CLICK_MEMO,
  payload: id
});

export const removeMemo = (id: number) => ({
  type: REMOVE_MEMO,
  payload: id
})

type MemoAction = 
  | ReturnType<typeof newMemo>
  | ReturnType<typeof addMemo>
  | ReturnType<typeof clickMemo>
  | ReturnType<typeof removeMemo>;

export type MemoState = {
  id: number;
  text: string;
  view: boolean;
  date: string;
}

export type MemosState = MemoState[];

const initialState: MemosState = [];

function memo(
  state: MemosState = initialState,
  action: MemoAction
): MemosState {
  const date = new Date().toLocaleDateString('ko-KR', {
    month: 'long',
    day: 'numeric'
  });
  switch(action.type) {
    case NEW_MEMO:
      state.map(memo => memo.view = false);
      return state.concat({
        id: action.payload,
        text: '',
        view: true,
        date
      });
    case ADD_MEMO:
      return state.map(memo => 
          memo.id === action.payload.id ? { ...memo, text: action.payload.text, date } : memo
      );
    case CLICK_MEMO:
      return state.map(memo => 
        memo.view ? 
          { ...memo, view: !memo.view } : 
          memo.id === action.payload ? { ...memo, view: !memo.view  } : 
          memo
      );
    case REMOVE_MEMO:
      return state.filter(memo => memo.id !== action.payload);
    default:
      return state;
  }
}

export default memo;