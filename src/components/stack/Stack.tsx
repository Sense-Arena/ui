import { CSSProperties, forwardRef, PropsWithChildren } from 'react';
import { stackItem } from './stack.css';

type Props = PropsWithChildren<{
  direction: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  alignItems?: CSSProperties['alignItems'];
  justifyContent?: CSSProperties['justifyContent'];
  style?: CSSProperties;
  className?: string;
}>;

const getSideFromDirection = (direction: Props['direction']) => {
  return {
    row: 'Left',
    'row-reverse': 'Right',
    column: 'Top',
    'column-reverse': 'Bottom',
  }[direction];
};

export const Stack = forwardRef<HTMLDivElement, Props>(
  ({ style, children, className, direction, alignItems, justifyContent }, ref) => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: direction,
          alignItems,
          justifyContent,
          ...style,
        }}
        ref={ref}
        className={className}
      >
        {children}
      </div>
    );
  },
);

type StackItemProps = PropsWithChildren<{
  spacing?: number;
  direction: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}>;

export const StackItem = ({ direction, children, spacing }: StackItemProps) => {
  return (
    <span
      style={{
        [`margin${getSideFromDirection(direction)}`]: `${spacing}rem`,
      }}
      className={stackItem}
    >
      {children}
    </span>
  );
};
