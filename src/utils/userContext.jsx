import { createContext } from "react";

const userContext = createContext({
    user: {
    name: "Dummy Name",
    email: "dummy@email.com",
    },
});

userContext.displayName = "UserContext";//This is just for debugging purpose in React Dev TOOLs

export default userContext;
