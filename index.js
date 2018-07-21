

function updateState(state, action) {
  if (action.type === "INCREMENT") {
    return state + action.amount;
  } else if (action.type === "DECREMENT") {
    return state - action.amount;
  } else {
    return state;
  }
}
class Store{
  constructor(updateState,state){
    this._state = state;
    this._updateState = updateState;
  }
  get state(){
    return this._state
  }
  update(action){
    this._state= this._updateState(this.state,action);
  }
}
const store = new Store(updateState,0);

const incrementAtion = {type: 'INCREMENT', amount: 5};
const decrementAtion = {type: 'DECREMENT', amount: 3};

store.update(incrementAtion);

console.log(store.state);
store.update(decrementAtion);
console.log(store.state);
store.update= updateState({});
console.log(store.state);
