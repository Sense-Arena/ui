import { CSSProperties, memo, PropsWithChildren, ReactElement } from 'react';
import { skeletonStyles } from './skeleton.css';

type Props = PropsWithChildren<{
  loading: boolean;
  style?: CSSProperties;
  count?: number;
}>;

export const Skeleton = memo<Props>(({ children, loading, style, count = 1 }) => {
  if (loading) {
    const elements: ReactElement[] = [];

    for (let i = 0; i < count; i++) {
      elements.push(<div key={i} className={skeletonStyles.skeletonContainer} style={style} />);
    }
    return <>{elements}</>;
  }

  return <>{children}</>;
});
