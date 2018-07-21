// let state = 0;

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
    this._updateState = updateState;
    this._state = state;
  }
  ubdate(action){
    this._state= this._updateState(this.state,action);

  }
}
const store = new Store(updateState,0);
const incrementAtion = {type: 'INCREMENT', amount: 5};
const decrementAtion = {type: 'DECREMENT', amount: 3};
state = ubdatestate(state, incrementAtion);
console.log(state);
state = ubdatestate(state, decrementAtion);
console.log(state);
state = ubdatestate(state, 'NOTHING');
console.log(state);
