import { bind } from '@/core/styles/bind';
import styles from './text-box.module.css';
import { CopyIcon, PauseIcon, SoundIcon } from '@/core/icons';
import { Button } from '@/core/components/button/button.component';
import { Dash, Dot } from '@/features/translator/domain/symbols';
import { useEffect, useRef, useState } from 'react';
const cx = bind(styles);

interface Props {
  label: string;
  value: string;
}

const SHORT_TIME = 100;
const LARGE_TIME = 500;

const sleep = async (duration: number) => await new Promise((r) => setTimeout(r, duration));

export const TextBox = (props: Props) => {
  const { label, value } = props;
  const oscillatorRef = useRef<OscillatorNode>();
  const [state, setState] = useState<'playing' | 'waiting' | 'no-text'>('no-text');
  const isActiveRef = useRef(true);

  const copyValue = () => navigator.clipboard.writeText(value);
  const beep = async (duration: number, frequency: number = 300) => {
    const context = new AudioContext();
    const oscillator = context.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.value = frequency;
    oscillator.connect(context.destination);
    oscillator.start();
    oscillatorRef.current = oscillator;
    await new Promise((resolve) => setTimeout(resolve, duration));
    oscillator.stop();
    await new Promise((resolve) => setTimeout(resolve, SHORT_TIME));
  };

  const shortBeep = async () => await beep(SHORT_TIME);
  const largeBeep = async () => await beep(LARGE_TIME);

  const onSound = async () => {
    setState('playing');
    isActiveRef.current = true;
    const signs = value.split('');
    for (let i = 0; i < signs.length; i++) {
      if (!isActiveRef.current) return;
      if (signs[i] === Dot.toText()) await shortBeep();
      if (signs[i] === Dash.toText()) await largeBeep();
      else await sleep(LARGE_TIME);
    }
    setState('waiting');
  };

  const onStop = () => {
    isActiveRef.current = false;
    oscillatorRef.current?.stop();
    setState('waiting');
  };

  useEffect(() => {
    if (value === '') setState('no-text');
    else setState('waiting');
  }, [value]);

  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      <p className={cx('value')}>{value}</p>
      <div className={cx('bottom')}>
        <Button variant="icon" onClick={copyValue} className={cx('copy')} disabled={state === 'no-text'}>
          <CopyIcon />
        </Button>
        <Button variant="icon" disabled={state !== 'waiting'}>
          <SoundIcon onClick={onSound} />
        </Button>
        <Button variant="icon" disabled={state !== 'playing'}>
          <PauseIcon onClick={onStop} />
        </Button>
      </div>
    </div>
  );
};
