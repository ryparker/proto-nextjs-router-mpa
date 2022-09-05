import React from 'react';
import styled, { CSSProperties } from 'styled-components';
import {
  Arrow,
  Content,
  Root,
  TooltipContentProps,
  TooltipProps as RadixTooltipProps,
  Trigger,
} from '@radix-ui/react-tooltip';

export type TooltipProps = {
  tip: string;
  children: React.ReactNode;
  tooltipContent?: TooltipContentProps;
} & RadixTooltipProps;

const Tooltip = (props: TooltipProps) => {
  const { tip, children, tooltipContent, ...delegated } = props;
  return (
    <TooltipRoot {...delegated}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent sideOffset={5} {...tooltipContent}>
        {tip}
        <TooltipArrow offset={3} width={10} height={5} />
      </TooltipContent>
    </TooltipRoot>
  );
};

const TooltipRoot = styled(Root)``;
const TooltipTrigger = styled(Trigger)``;
const TooltipContent = styled(Content)`
  --background-color: var(--color-gray1000);
  background: var(--background-color);
  box-shadow: var(--shadow-twitter);
  padding: ${4 / 16}rem ${8 / 16}rem;
  border-radius: ${4 / 16}rem;
  color: var(--color-gray50);
  font-size: ${14 / 16}rem;
  font-family: century_supra_t3;
`;
const TooltipArrow = styled(Arrow)`
  fill: var(--background-color);
`;

export default Tooltip;
