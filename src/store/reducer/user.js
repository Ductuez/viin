import { LIST_USER_CHAT, USER } from "../action/user";

const initState = {
  
};

const user = (state = initState, action) => {
  switch (action.type) {
    case USER:
      return {
        ...state,
        user: action.user,
      }
  }
  return state;
};

export default user;
