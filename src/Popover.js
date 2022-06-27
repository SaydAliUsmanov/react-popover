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

const Popover = ({ anchorEl, open, children, anchorOrigin }) => {
  const [widthContent, setWidthContent] = useState(null);
  const [offsetTop, setOffsetTop] = useState(null);
  const [offsetLeft, setOffsetLeft] = useState(null);

  const ref = useRef(null);

  useLayoutEffect(() => {
    setWidthContent(ref.current.offsetWidth);

    if (widthContent && anchorEl.current) {
      let calcOffsetTop;
      let calcOffsetLeft;

      const positionHorizontalTop =
        anchorEl.current.offsetTop - anchorEl.current.offsetHeight;
      const positionHorizontalBottom =
        anchorEl.current.offsetTop + anchorEl.current.offsetHeight;

      const positionVerticalLeft = anchorEl.current.offsetLeft;
      const positionVerticalRight =
        anchorEl.current.offsetLeft +
        anchorEl.current.offsetWidth -
        widthContent;
      const positionVerticalCenter =
        anchorEl.current.offsetLeft -
        (widthContent - anchorEl.current.offsetWidth) / 2;

      if (anchorOrigin.vertical === 'top') {
        if (anchorOrigin.horizontal === 'center') {
          calcOffsetTop = positionHorizontalTop;
          calcOffsetLeft = positionVerticalCenter;
        }
        if (anchorOrigin.horizontal === 'left') {
          calcOffsetTop = positionHorizontalTop;
          calcOffsetLeft = positionVerticalLeft;
        }
        if (anchorOrigin.horizontal === 'right') {
          calcOffsetTop = positionHorizontalTop;
          calcOffsetLeft = positionVerticalRight;
        }
      }

      if (anchorOrigin.vertical === 'bottom') {
        if (anchorOrigin.horizontal === 'center') {
          calcOffsetTop = positionHorizontalBottom;
          calcOffsetLeft = positionVerticalCenter;
        }
        if (anchorOrigin.horizontal === 'left') {
          calcOffsetTop = positionHorizontalBottom;
          calcOffsetLeft = positionVerticalLeft;
        }
        if (anchorOrigin.horizontal === 'right') {
          calcOffsetTop = positionHorizontalBottom;
          calcOffsetLeft = positionVerticalRight;
        }
      }

      setOffsetTop(calcOffsetTop);
      setOffsetLeft(calcOffsetLeft);
    }
  }, [anchorEl, widthContent]);

  if (!open) {
    return null;
  }

  return (
    <StyledPopover ref={ref} top={offsetTop} left={offsetLeft}>
      {children}
    </StyledPopover>
  );
};

export default Popover;
