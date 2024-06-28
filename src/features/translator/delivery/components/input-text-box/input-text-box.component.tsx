import { bind } from '@/core/styles/bind';
import styles from './input-text-box.module.css';
import { CloseIcon } from '@/core/icons';
import { Button } from '@/core/components/button/button.component';
const cx = bind(styles);

interface Props {
  id: string;
  type?: 'password' | 'email' | 'text';
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export const InputTextBox = (props: Props) => {
  const { id, label, value, onChange, type, placeholder } = props;
  const onDelete = () => onChange('');
  return (
    <div className={cx('wrapper')}>
      <label htmlFor={id} className={cx('label')}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cx('input')}
        placeholder={placeholder}
      />
      <div className={cx('bottom')}>
        <Button variant="icon" onClick={onDelete} disabled={value === ''}>
          <CloseIcon />
        </Button>
      </div>
    </div>
  );
};
