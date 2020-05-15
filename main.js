
// Create ACTIONS
const addAction = {
  type: 'ADD',
};

const removeAction = {
  type: 'REMOVE',
}

// Create REDUCER to pass action
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'REMOVE':
      return state - 1;
    default:
      return state;
  }
}


// Create STORE
const { createStore } = Redux;
const store = createStore(counterReducer);

// MAIN
const renderStore = document.getElementById('render-store');
const render = () => {
   renderStore.innerHTML = store.getState();
}

store.subscribe(render);
render();

const add = document.getElementById('add');
add.addEventListener('click', () => {
   store.dispatch(addAction)
});

const remove = document.getElementById('remove');
remove.addEventListener('click', () => {
   store.dispatch(removeAction)
});
