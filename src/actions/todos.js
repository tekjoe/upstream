import uuid from "uuid";

// the addTodo action generator tells Redux how the state should change
// the action.type defines what should happen - in this case ADD_TODO tells the reducer that it should add the data provided as the payload
// The action.payload is the associated data that Redux will need to make the desired change

export const addTodo = todo => {
  return {
    type: "ADD_TODO",
    payload: {
      id: uuid(),
      todo
    }
  };
};
