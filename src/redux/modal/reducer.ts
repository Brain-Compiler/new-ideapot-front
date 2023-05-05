type UpdateState = {
  page: number;
};

type UpdateAction = {
  type: string;
  payload: {
    page: number;
  };
};

const initialState = {
  page: 0,
};

export const modalUpdateReducer = (
  state: UpdateState = initialState,
  action: UpdateAction
) => {
  switch (action.type) {
    case "MODAL_UPDATE_LOGIN":
      return {
        ...state,
        page: action.payload?.page || 0,
      };

    case "MODAL_UPDATE_REGIST":
      return {
        ...state,
        page: action.payload?.page || 1,
      };

    case "MODAL_UPDATE_PASSWORD_CHANGE":
      return {
        ...state,
        page: action.payload?.page || 2,
      };

    default:
      return state;
  }
};
