abstract class Sign {
  static toText: () => string;
}

export class Dot implements Sign {
  static toText() {
    return '·';
  }
}

export class Dash implements Sign {
  static toText() {
    return '-';
  }
}

export class Space implements Sign {
  static toText() {
    return ' ';
  }
}
