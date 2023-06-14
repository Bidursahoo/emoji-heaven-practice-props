import React from "react";
import Emoji from "./Emoji";
import EmojiDetails from "./EmojiDetails";
function Term(props){
    return<div className="term">
    <Emoji name={props.name} emoji={props.emoji}/>
    <EmojiDetails detail={props.detail}/>.
  </div>
}
export default Term;