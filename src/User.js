import React, { useRef } from 'react';
import Popover from './Popover';

const User = ({ id, name }) => {
  const [isOpen, setOpen] = React.useState(false);

  const ref = useRef(null);

  return (
    <div style={{ marginBottom: '20px' }}>
      <span>{id}</span>
      <span>{name}</span>
      <button
        style={{ width: '100px' }}
        ref={ref}
        onClick={() => setOpen(!isOpen)}
      >
        Click
      </button>
      {isOpen && (
        <Popover open={isOpen} anchorEl={ref}>
          lol
        </Popover>
      )}
    </div>
  );
};

export default User;
