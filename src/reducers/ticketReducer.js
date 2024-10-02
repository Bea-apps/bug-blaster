// Action contains the type (Add, Delete, Update) and payload
export default function ticketReducer(state, action) {
  switch (action.type) {
    case "ADD_TICKET":
      // state in react is inmutable that´s why we copy it
      // by using the spread operator to create a copy.
      //
      // tickets: contains the change that we wanna make.
      return { ...state, tickets: [...state.tickets, action.payload] };
    case "UPDATE_TICKET":
      return {
        ...state,
        tickets: state.tickets.map((ticket) =>
          ticket.id === action.payload.id ? action.payload : ticket
        ),
      };
    case "DELETE_TICKET":
      return {
        ...state,
        tickets: state.tickets.filter(
          (ticket) => ticket.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
