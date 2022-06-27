import React, { useRef, useState } from 'react';
import Popover from './Popover';

const User = ({ id, name }) => {
  const [isOpen, setOpen] = useState(false);

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
        <Popover
          open={isOpen}
          anchorEl={ref}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          <div>Hello</div>
        </Popover>
      )}
    </div>
  );
};

export default User;
