import { Dash, Dot, Space } from './symbols';

export const TextToMorseInternationalAlphabet: { [key: string]: string } = {
  A: Dot.toText() + Dash.toText(),
  B: Dash.toText() + Dot.toText() + Dot.toText() + Dot.toText(),
  C: Dash.toText() + Dot.toText() + Dash.toText() + Dot.toText(),
  D: Dash.toText() + Dot.toText() + Dot.toText(),
  E: Dot.toText(),
  F: Dot.toText() + Dot.toText() + Dash.toText() + Dot.toText(),
  G: Dash.toText() + Dash.toText() + Dot.toText(),
  H: Dot.toText() + Dot.toText() + Dot.toText() + Dot.toText(),
  I: Dot.toText() + Dot.toText(),
  J: Dot.toText() + Dash.toText() + Dash.toText() + Dash.toText(),
  K: Dash.toText() + Dot.toText() + Dash.toText(),
  L: Dot.toText() + Dash.toText() + Dot.toText() + Dot.toText(),
  M: Dash.toText() + Dash.toText(),
  N: Dash.toText() + Dot.toText(),
  O: Dash.toText() + Dash.toText() + Dash.toText(),
  P: Dot.toText() + Dash.toText() + Dash.toText() + Dot.toText(),
  Q: Dash.toText() + Dash.toText() + Dot.toText() + Dash.toText(),
  R: Dot.toText() + Dash.toText() + Dot.toText(),
  S: Dot.toText() + Dot.toText() + Dot.toText(),
  T: Dash.toText(),
  U: Dot.toText() + Dot.toText() + Dash.toText(),
  V: Dot.toText() + Dot.toText() + Dot.toText() + Dash.toText(),
  W: Dot.toText() + Dash.toText() + Dash.toText(),
  X: Dash.toText() + Dot.toText() + Dot.toText() + Dash.toText(),
  Y: Dash.toText() + Dot.toText() + Dash.toText() + Dash.toText(),
  Z: Dash.toText() + Dash.toText() + Dot.toText() + Dot.toText(),
};

export class TextToMorseTranslator {
  static translate(text: string): string {
    const signs: string[] = text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toUpperCase()
      .split('')
      .map((sign) => {
        if (Object.keys(TextToMorseInternationalAlphabet).includes(sign)) return TextToMorseInternationalAlphabet[sign];
        if (sign === ' ') return Space.toText();
        return '';
      });
    return signs.join('');
  }
}
