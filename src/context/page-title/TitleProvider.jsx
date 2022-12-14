
import { useState } from "react";
import TitleContext from "./TitleContext";

const TitleProvider = ({children}) => {
    const [title, setTitle] = useState("")

    const context = {
        title: title,
        setTitle: setTitle
    }

    return (
        <TitleContext.Provider value={context}>
            {children}
        </TitleContext.Provider>
    )
};

export default TitleProvider;