export declare type ModeType = 'rect' | 'point';

export declare type RectType = {
  boxId: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  x3: number;
  y3: number;
  x4: number;
  y4: number;
  textX: number;
  textY: number;
};
export declare type Point = {
  x: number;
  y: number;
};

export declare type TextPoint = Pick<RectType, 'textX' | 'textY'>;
