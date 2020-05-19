import React from "react";
import Emoji from "./Emoji";
import {emojipedia} from "../emojipedia";

const emojiComponent = (emojipedia) => {

  return (
  <Emoji
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      heading={emojipedia.name}
      description={emojipedia.meaning}
    
  />
  );


}

const App = (props) => {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map(emojiComponent)};
      </dl>
    </div>
    );
}

export default App;
