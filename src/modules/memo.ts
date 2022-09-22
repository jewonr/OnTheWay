import { getMemos, updateMemos } from "../api/memoApi";

const NEW_MEMO = 'memo/NEW_MEMO' as const;
const ADD_MEMO = 'memo/ADD_MEMO' as const;
const CLICK_MEMO = 'memo/CLICK_MEMO' as const;
const REMOVE_MEMO = 'memo/REMOVE_MEMO' as const;

export const newMemo = () => ({
  type: NEW_MEMO,
  payload: Math.ceil(new Date().getTime() + Math.random())
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

export type MemoAction = 
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
(async () => {
  await getMemos()
    .then(memos => memos.forEach((memo: MemoState) => {
      initialState.push(memo);
    }));
})();

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
      state = state.concat({
        id: action.payload,
        text: '',
        view: true,
        date
      });
      break;
    case ADD_MEMO:
      state = state.map(memo => 
          memo.id === action.payload.id ?  { ...memo, text: action.payload.text, date } : memo 
      );
      state = state.filter(memo => memo.text !== '');
      break;
    case CLICK_MEMO:
      state =  state.map(memo => 
        memo.view ? 
          { ...memo, view: !memo.view } : 
          memo.id === action.payload ? { ...memo, view: !memo.view  } : memo
      );
      break;
    case REMOVE_MEMO:
      state = state.filter(memo => memo.id !== action.payload);
      break;
    default:
      return state;
  }
  updateMemos(state);
  return state;
}

export default memo;