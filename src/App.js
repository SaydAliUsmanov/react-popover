import React from 'react';
import User from './User';

const App = () => {
  const data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'John' },
    { id: 3, name: 'John' },
    { id: 4, name: 'John' },
    { id: 5, name: 'John' },
    { id: 6, name: 'John' },
  ];

  return (
    <div
      style={{
        padding: '20px',
        width: '65%',
        margin: '0 auto',
      }}
    >
      {data.map((item) => {
        return <User key={item.id} id={item.id} name={item.name} />;
      })}
    </div>
  );
};

export default App;
