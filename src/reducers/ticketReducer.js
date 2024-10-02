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
        editingTicket: null,
      };

    case "DELETE_TICKET":
      /*
        Case that we delete the ticket that we are editing.
       */
      if (state.editingTicket && state.editingTicket.id === action.payload.id){
        return {
          ...state,
          tickets: state.tickets.filter(
            (ticket) => ticket.id !== action.payload.id
          ),
          editingTicket: null,
        };
      } else {
        /*
          Case that we delete a ticket and not editing any ticket
         */
        return {
          ...state,
          tickets: state.tickets.filter(
            (ticket) => ticket.id !== action.payload.id
          )
        };
      }
    case "SET_EDITING_TICKET":
      return {
        ...state,
        editingTicket: action.payload,
      };

    case "CLEAR_EDITING_TICKET":
      return {
        ...state,
        editingTicket: null,
      };

    default:
      return state;
  }
}
