export function reducer(state: number, action: any) {
  switch (action.type) {
    case "CATEGORY_ALL":
      return (state = 0);

    case "CATEGORY_SOLO":
      return (state = 1);

    case "CATEGORY_TEAM":
      return (state = 2);

    case "CATEGORY_AWARD":
      return (state = 3);

    default:
      return state;
  }
}
