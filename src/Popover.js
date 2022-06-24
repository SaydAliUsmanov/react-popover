import React from 'react';

const Popover = ({ anchorEl, open, children }) => {
  const styleData = {
    position: 'absolute',
    left: `${
      anchorEl.current?.offsetLeft + anchorEl.current?.offsetWidth / 2 - 10
    }px`,
    top: `${anchorEl.current?.offsetTop} + ${anchorEl.current?.offsetHeight}px`,
  };

  console.log(anchorEl);

  if (open) {
    return <div style={styleData}>{children}</div>;
  }
};

export default Popover;
