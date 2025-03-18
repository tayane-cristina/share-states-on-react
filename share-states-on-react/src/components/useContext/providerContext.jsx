import { useState } from "react";
import { ThemeContext } from "./createContextTest";

export const ThemeProvider = ({childrens}) => {
    //O ThemeProvider tem a função de compartilhar os estados que vão valer para todos os componentes e as 
    // funções que vão estar ativas em todos os componentes que utilizarmos

    //Estado do tema light ou dark
    const [theme, setTheme] = useState("light");

    const togglerTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    };

    return (
        //O ThemeContext precisa ser chamado pq é ele quem cria o contexto que vai envolver todo o código
        //Nos estamos passando como valores do nosso contexto, o nosso estado e a nossa função, logo onde quer que essa função,
        //ou esse estado seja acionado, ele será válido.
        <ThemeContext.Provider value={{theme, togglerTheme}}>
            {childrens}
        </ThemeContext.Provider>
    )
}