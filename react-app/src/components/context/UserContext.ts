import { createContext } from "react";

type Props = {
    name: string
}

const contextState = {
    name: '사용자'
}

const UserContext = createContext<Props>(contextState)

export default UserContext;