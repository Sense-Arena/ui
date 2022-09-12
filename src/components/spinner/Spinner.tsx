import { clsx } from '../../utils';
import { spinnerStyle } from './spinner.css';

type Props = {
  size?: 's' | 'm' | 'l';
  className?: string;
};

export const Spinner = ({ size, className }: Props) => <div className={clsx(className, spinnerStyle({ size }))} />;
