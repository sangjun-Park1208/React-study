import { createContext } from "react";
type Props = {
    isDark: boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const contextState = {
    isDark: true,
    setIsDark: () => {}
}

const ThemeContext = createContext<Props>(contextState);

export default ThemeContext;