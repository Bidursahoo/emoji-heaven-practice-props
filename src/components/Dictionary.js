import React from "react";
import Term from "./Term";
import emojipedia from "../emojipedia";

function term(term){
    return <Term id={term.id} name = {term.name} emoji={term.emoji} detail={term.meaning}/>
}

function Dictionary(props){
    return<dl className="dictionary">
        {emojipedia.map(term)}
    </dl>
}
export default Dictionary;