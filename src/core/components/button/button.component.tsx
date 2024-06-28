import { bind } from '@/core/styles/bind';
import styles from './button.module.css';
const cx = bind(styles);

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'icon';
  className?: string;
  disabled?: boolean;
}

export const Button = (props: Props) => {
  const { variant, className } = props;
  const style = cx('button', variant, className);
  return <button {...props} className={style}></button>;
};
