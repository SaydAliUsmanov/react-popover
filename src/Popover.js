import React, { useLayoutEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

const StyledPopover = styled.div`
  position: absolute;
  ${(props) => {
    return css`
      top: ${props.top}px;
      left: ${props.left}px;
    `;
  }}
`;

const Popover = ({ anchorEl, open, children }) => {
  const [widthContent, setWidthContent] = useState(null);
  const [offsetTop, setOffsetTop] = useState(null);
  const [offsetLeft, setOffsetLeft] = useState(null);

  const ref = useRef(null);

  useLayoutEffect(() => {
    setWidthContent(ref.current.offsetWidth);

    if (widthContent) {
      const calcOffsetTop =
        anchorEl.current?.offsetTop + anchorEl.current?.offsetHeight;
      const calcOffsetLeft =
        anchorEl.current?.offsetLeft -
        (widthContent - anchorEl.current?.offsetWidth) / 2;

      setOffsetTop(calcOffsetTop);
      setOffsetLeft(calcOffsetLeft);
    }
  }, [anchorEl, widthContent]);

  if (open) {
    return (
      <StyledPopover ref={ref} top={offsetTop} left={offsetLeft}>
        {children}
      </StyledPopover>
    );
  }
};

export default Popover;
