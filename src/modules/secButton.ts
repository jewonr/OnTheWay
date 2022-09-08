const TOGGLE = 'secButton/TOGGLE' as const;

export function toggleSecButton() {
  return ({
    type: TOGGLE
  });
}

type secButtonAction = ReturnType<typeof toggleSecButton>

type secButtonState = {
  toggle: boolean
}

const initialState: secButtonState = {
  toggle: false
}

function secButton(
  state: secButtonState = initialState,
  action: secButtonAction
): secButtonState {
  switch(action.type) {
    case TOGGLE:
      return { toggle: !state.toggle };
    default:
      return state;
  }
}

export default secButton;