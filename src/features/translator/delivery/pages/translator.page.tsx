import { bind } from '@/core/styles/bind';
import { InputTextBox } from '../components/input-text-box/input-text-box.component';
import { TextBox } from '../components/text-box/text-box.component';
import styles from './translator.module.css';
import { useState } from 'react';
import { TextToMorseTranslator } from '../../domain/international-alphabet';
import { ArrowRightIcon, ChatIcon, HorizontalDotsIcon } from '@/core/icons';
import { useTranslate } from '@/core/i18n/hooks/use-translate.hook';
const cx = bind(styles);

export const TranslatorPage = () => {
  const { t } = useTranslate();
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
      <p className={cx('subtitle')}>{t('common.based-in-international-morse-alphabet')}</p>
      <div className={cx('translator')}>
        <div className={cx('translator-indicator')}>
          <div className={cx('indicator')}>
            <ChatIcon />
            <p>{t('common.text')}</p>
          </div>
          <ArrowRightIcon />
          <div className={cx('indicator')}>
            <HorizontalDotsIcon />
            <p>{t('common.morse')}</p>
          </div>
        </div>
        <InputTextBox
          id="morse-text-box"
          label={t('common.text')}
          value={text}
          onChange={onTextChange}
          placeholder={t('common.introduce-text')}
        />
        <TextBox label={t('common.morse')} value={morse} />
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
