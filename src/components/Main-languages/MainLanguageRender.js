import React from 'react'
import languageInfo from "./MainLanguagesInfo";
import Mainlanguage from "./Mainlanguage";

function MainLanguageRender() {
    return(
        languageInfo.map((lang)=>{
            return(
                <Mainlanguage 
                name={lang.name}
                def={lang.def}
                key={lang.id}
                color={lang.color} 
                heading={lang.heading}
                colColor={lang.colColor}
                col={lang.col}
                ele={lang.ele}
                />
            );
        })
    );
}

export default MainLanguageRender;
