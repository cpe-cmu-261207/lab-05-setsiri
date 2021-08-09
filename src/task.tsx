import React, { useState } from 'react';

type propsTask = {
    id: number;
    name: string;
    deleteFn: Function;
    doneFn: Function;
}

const Task =  ({id, name, deleteFn, doneFn} : propsTask) => {

  const [isShown, setIsShown] = useState(false);

    return (
        <div className='flex justify-between h-8 items-center py-6 border-b' onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
            {name}
        {isShown && (
          <div className="flex space-x-1 items-center px-2">
            <button onClick={ () => deleteFn(id) } className="bg-red-400 w-24 text-2xl" >Delete</button>
            <button onClick={ () => doneFn(id, name) } className="bg-green-400 w-24 text-2xl" >Done</button>
          </div>
      )}
      </div>
    )
}

export default Task