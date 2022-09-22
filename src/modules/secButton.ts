const FEED_CLICK = 'secButton/FEED_CLICK' as const;
const SCRAP_CLICK = 'secButton/SCRAP_CLICK' as const;
const TODO_CLICK = 'secButton/TODO_CLICK' as const;
const MEMO_CLICK = 'secButton/MEMO_CLICK' as const;

export function clickSecButton(pageName: string) {
  return ({
    type: eval(pageName+'_CLICK')
  });
}

export type SecButtonAction = ReturnType<typeof clickSecButton>

export type SecButtonState = {
  feedClicked: boolean
  scrapClicked: boolean
  todoClicked: boolean
  memoClicked: boolean
}

const initialState: SecButtonState = {
  feedClicked: false,
  scrapClicked: false,
  todoClicked: false,
  memoClicked: false
}

function secButton(
  state: SecButtonState = initialState,
  action: SecButtonAction
): SecButtonState {
  switch(action.type) {
    case FEED_CLICK:
      return { ...state, feedClicked: !state.feedClicked };
    case SCRAP_CLICK:
      return { ...state, scrapClicked: !state.scrapClicked };
    case TODO_CLICK:
      return { ...state, todoClicked: !state.todoClicked };
    case MEMO_CLICK:
      return { ...state, memoClicked: !state.memoClicked };
    default:
      return state;
  }
}

export default secButton;