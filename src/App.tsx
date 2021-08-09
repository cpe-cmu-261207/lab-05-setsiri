  
import React from 'react';
import Headerr from './header';
import Todoo from './todo';
import Footerr from './footer';


function App() {

  return (
    <div>

      {/* header section */}
        <Headerr title={"Minimal Todo List!"} name={"Setsiri Matewin 630610766"}></Headerr>

      {/* todo section */}
      <Todoo></Todoo>

      {/* footer section */}
      <Footerr copyright ={"copyright © 2021 by 630610766"}></Footerr>

    </div>
  );
}

export default App;