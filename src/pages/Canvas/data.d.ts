export type ModeType = 'rect' | 'point';

export interface RectType {
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
}
export interface Point {
  x: number;
  y: number;
}
export interface TextPoint {
  textX: number;
  textY: number;
}
