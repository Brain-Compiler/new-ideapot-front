export function reducer(state: boolean, action: any) {
  switch (action.type) {
    case "MODAL_OPEN":
      return (state = true);

    case "MODAL_CLOSE":
      return (state = false);

    default:
      return state;
  }
}
