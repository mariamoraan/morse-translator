import { useState } from 'react';
import styles from './examples.module.css';
import { bind } from '@/core/styles/bind';
import { Button } from '@/core/components/button/button.component';
import { TextBox } from '../text-box/text-box.component';
import { TextToMorseTranslator } from '@/features/translator/domain/international-alphabet';
import { ArrowLeftIcon, ArrowRightIcon } from '@/core/icons';
const cx = bind(styles);

export const Examples = () => {
  const [examplesIndex, setExamplesIndex] = useState(0);
  const examples = ['Hola', 'Te amo'];
  return (
    <>
      <h2 className={cx('subtitle')}>Ejemplos</h2>

      <ul
        className={cx('examples')}
        style={
          examplesIndex > 0
            ? { transform: `translateX(calc((${examplesIndex} * 250px * -1) - (${examplesIndex} * 24px)))` }
            : {}
        }
      >
        {examples.map((example) => (
          <li key={example} className={cx('example')}>
            <TextBox label={example} value={TextToMorseTranslator.translate(example)} />
          </li>
        ))}
      </ul>
      <div className={cx('buttons')}>
        <Button
          variant="icon"
          onClick={() => setExamplesIndex((prev) => Math.max(0, prev - 1))}
          disabled={examplesIndex === 0}
        >
          <ArrowLeftIcon />
        </Button>
        <Button
          variant="icon"
          onClick={() => setExamplesIndex((prev) => prev + 1)}
          disabled={examples.length <= examplesIndex + 1}
        >
          <ArrowRightIcon />
        </Button>
      </div>
    </>
  );
};
