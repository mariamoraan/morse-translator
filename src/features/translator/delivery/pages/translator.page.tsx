import { bind } from '@/core/styles/bind';
import { InputTextBox } from '../components/input-text-box/input-text-box.component';
import { TextBox } from '../components/text-box/text-box.component';
import styles from './translator.module.css';
import { useState } from 'react';
import { TextToMorseTranslator } from '../../domain/international-alphabet';
import { ArrowRightIcon, ChatIcon, HorizontalDotsIcon } from '@/core/icons';
const cx = bind(styles);

export const TranslatorPage = () => {
  const [text, setText] = useState('');
  const [morse, setMorse] = useState('');

  const onTextChange = (value: string) => {
    setText(value);
    setMorse(TextToMorseTranslator.translate(value));
  };

  return (
    <div className={cx('wrapper')}>
      <h1 className={cx('title')}>
        <strong>Morse</strong>Translator
      </h1>
      <p className={cx('subtitle')}>Basado en el alfabeto morse internacional</p>
      <div className={cx('translator')}>
        <div className={cx('translator-indicator')}>
          <div className={cx('indicator')}>
            <ChatIcon />
            <p>Texto</p>
          </div>
          <ArrowRightIcon />
          <div className={cx('indicator')}>
            <HorizontalDotsIcon />
            <p>Morse</p>
          </div>
        </div>
        <InputTextBox
          id="morse-text-box"
          label="Text"
          value={text}
          onChange={onTextChange}
          placeholder="Introducir texto..."
        />
        <TextBox label="Morse" value={morse} />
      </div>
      <div className={cx('footer')}>
        <p className={cx('footer-title')}>
          <strong>Morse</strong>Translator
        </p>
        <p className={cx('dev-by')}>
          Developed by{' '}
          <a target="_blank" href="https://www.mariamoran.es/">
            Maria Moran
          </a>
        </p>
      </div>
    </div>
  );
};
