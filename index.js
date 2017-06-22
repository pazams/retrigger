module.exports = (reduxStore, triggers) => {
  let currentState;
  reduxStore.subscribe(() => {
    const previousState = currentState;
    currentState = reduxStore.getState();
    triggers.forEach(trigger => trigger(reduxStore.dispatch, previousState, currentState));
  });
};
