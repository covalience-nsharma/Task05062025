import Css from "./LanguagesCode/Css";
import Html from "./LanguagesCode/Html";
import JS from "./LanguagesCode/JS";
import PY from "./LanguagesCode/PY";
import SQL from "./LanguagesCode/SQL";

const languageInfo = [
    {
        id:1,
        name: "HTML",
        def: "The language for building web pages",
        color: "#d9eee1",
        ele: <Html/>
    },
    {
        id:2,
        name: "CSS",
        def: "The language for styling web pages",
        color: "#fff4a3",
        ele: <Css/>
    },
    {
        id:3,
        name: "JavaScript",
        def: "The language for programming web pages",
        color: "#282a35",
        heading: "white",
        colColor: "black",
        col: "white",
        ele: <JS/>
    },
    {
        id:4,
        name: "Python",
        def: "A popular programming language",
        color: "#f3ecea",
        ele: <PY/>
    },
    {
        id:5,
        name: "SQL",
        def: "A language for accessing databases",
        color: "#96d4d4",
        ele: <SQL/>
    }
]

export default languageInfo;