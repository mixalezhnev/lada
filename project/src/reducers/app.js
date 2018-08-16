const initialState = {
  isIframeShown: false,
};

export const types = {
  SHOW_IFRAME: "SHOW_IFRAME",
  HIDE_IFRAME: "HIDE_IFRAME"
};

export const actions = {
  showIframe: () => ({
    type: types.SHOW_IFRAME,
  }),
  hideframe: () => ({
    type: types.HIDE_IFRAME,
  })
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SHOW_IFRAME:
      return {
        ...state,
        isIframeShown: true,
      };
    case types.HIDE_IFRAME:
      return {
        ...state,
        isIframeShown: false,
      };
    default:
      return state;
  }
};
