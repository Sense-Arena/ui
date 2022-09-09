import { progressStyles } from './progress.css';
import { clsx } from '../../utils';

type Props = {
  className?: string;
  value: number;
};

export const Progress = ({ className, value }: Props) => {
  return (
    <div className={clsx(progressStyles.progressContainer, className)}>
      <div style={{ width: `${value}%` }} className={progressStyles.progressLine} />
    </div>
  );
};
