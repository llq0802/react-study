import { useState, useEffect, useRef, MouseEvent, FC } from 'react';
import { Space, Button, Select, Spin, message, Popconfirm } from 'antd';
import type { ModeType, Point, RectType, TextPoint } from './data.d';
import MyRadio from './Radio';

const { Option } = Select;

const PI: number = 2 * Math.PI;
let moveFlag = false,
  ctx: CanvasRenderingContext2D,
  lastCanvasInfo: ImageData,
  isClick: boolean = false,
  isDraw: boolean = false,
  startX: number = 0,
  startY: number = 0,
  boxId: number = 0,
  pointCount: number = 1,
  mode: ModeType = 'rect',
  pointList: RectType[] = [],
  pointStack: Point[] = [],
  // curPoint: RectType[] = [],
  canvasInfoHistory = [],
  hadPointList: RectType[] = [
    {
      boxId: 1,
      x1: 64,
      y1: 50,
      x2: 185,
      y2: 50,
      x3: 185,
      y3: 198,
      x4: 64,
      y4: 198,
      textX: 124.5,
      textY: 124,
      // "gearType":
    },
    {
      boxId: 2,
      x1: 267,
      y1: 120,
      x2: 568,
      y2: 120,
      x3: 568,
      y3: 352,
      x4: 267,
      y4: 352,
      textX: 417.5,
      textY: 236,
    },
    {
      boxId: 3,
      x1: 601,
      y1: 44,
      x2: 773,
      y2: 44,
      x3: 773,
      y3: 286,
      x4: 601,
      y4: 286,
      textX: 687,
      textY: 165,
    },
  ];

// 回显绘制
function resolveDraw(curPointObj: RectType): void {
  const { x1, y1, x2, y2, x3, y3, x4, y4 } = curPointObj;
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.lineTo(x4, y4);
  ctx.closePath();
}
// 处理描点模式的4个点
const pointArr2PointObj = (): RectType => {
  let x1 = pointStack[0].x,
    y1 = pointStack[0].y,
    x2 = pointStack[1].x,
    y2 = pointStack[1].y,
    x3 = pointStack[2].x,
    y3 = pointStack[2].y,
    x4 = pointStack[3].x,
    y4 = pointStack[3].y;
  return { boxId, x1, y1, x2, y2, x3, y3, x4, y4, textX: x1, textY: y1 };
};
// 处理矩形模式的4个点
function getPointList(e: globalThis.MouseEvent, textPoint: TextPoint): void {
  const { offsetX, offsetY } = e;
  const { textX, textY } = textPoint;
  let w = Math.abs(e.offsetX - startX),
    h = Math.abs(e.offsetY - startY),
    x1 = startX,
    y1 = startY;
  if (offsetX > startX && offsetY > startY) {
    console.log('右下');
    let x2 = x1 + w,
      y2 = y1,
      x3 = x1 + w,
      y3 = y1 + h,
      x4 = x1,
      y4 = y1 + h;
    pointList.push({ boxId, x1, y1, x2, y2, x3, y3, x4, y4, textX, textY });
    console.log('pointList', pointList);
    return;
  }
  if (offsetX > startX && offsetY < startY) {
    console.log('右上');
    let x2 = x1,
      y2 = y1 - h,
      x3 = x1 + w,
      y3 = y1 - h,
      x4 = x1 + w,
      y4 = y1;
    pointList.push({ boxId, x1, y1, x2, y2, x3, y3, x4, y4, textX, textY });
    console.log('pointList', pointList);
    return;
  }
  if (offsetX < startX && offsetY < startY) {
    console.log('左上');
    let x2 = x1 - w,
      y2 = y1,
      x3 = x1 - w,
      y3 = y1 - h,
      x4 = x1,
      y4 = y1 - h;
    pointList.push({ boxId, x1, y1, x2, y2, x3, y3, x4, y4, textX, textY });
    console.log('pointList', pointList);
    return;
  }
  if (offsetX < startX && offsetY > startY) {
    console.log('左下');
    let x2 = x1,
      y2 = y1 + h,
      x3 = x1 - w,
      y3 = y1 + h,
      x4 = x1 - w,
      y4 = y1;
    pointList.push({ boxId, x1, y1, x2, y2, x3, y3, x4, y4, textX, textY });
    console.log('pointList', pointList);
    return;
  }
}
// 绘制文字
function drawText(e: globalThis.MouseEvent): TextPoint {
  let w = e.offsetX - startX,
    h = e.offsetY - startY;
  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,0.4)';
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 5;
  ctx.shadowBlur = 10;
  ctx.textAlign = 'center';
  // ctx.textAlign = 'end'
  ctx.fillStyle = '#1890ff';
  ctx.font = 'bold 24px sans-serif';
  // ctx.fillText(`${boxId + 1}-号`, startX, startY);
  ctx.fillText(`${boxId + 1}-号`, w / 2 + startX, h / 2 + startY);
  ctx.restore();
  return { textX: w / 2 + startX, textY: h / 2 + startY };
}

//矩形模式绘制矩形
const drawRectByMove = (e: globalThis.MouseEvent): void => {
  if (moveFlag) {
    ctx.putImageData(lastCanvasInfo, 0, 0);
    let w = e.offsetX - startX,
      h = e.offsetY - startY;
    ctx.beginPath();
    ctx.save();
    ctx.lineJoin = 'round';
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 3;
    ctx.rect(startX, startY, w, h);
    ctx.stroke();
    ctx.restore();
  }
};

interface PropsType {
  imgUrl: string;
}
/**
 *组件
 * @return {*}
 */
const Index: FC<PropsType> = ({ imgUrl }) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const myRadioRef = useRef<any>(null);
  const [cursorType, setCursorType] = useState<string>('default');
  const [curPoint, setCurPoint] = useState<RectType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // 初始化
  useEffect(() => {
    setLoading(true);
    const canvas = ref.current;
    ctx = canvas!.getContext('2d') as CanvasRenderingContext2D;
    // ctx.globalAlpha = 0.9;
    canvasInit();
    setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => {
      moveFlag = false;
      ctx = null as unknown as CanvasRenderingContext2D;
      isClick = false;
      isDraw = false;
      startX = 0;
      startY = 0;
      boxId = 0;
      pointCount = 1;
      lastCanvasInfo = null as unknown as ImageData;
      pointList = [];
      // curPoint = [];
      // hadPointList = [];
    };
  }, [imgUrl]);

  // 图片映射画布
  const canvasInit = async (isReset: boolean = false): Promise<void> => {
    const canvas = ref.current;
    const img: HTMLImageElement = await createImage();
    ctx.drawImage(img, 0, 0, canvas!.width, canvas!.height);
    // 初始化时
    if (!isReset) {
      // 有数据时回显
      if (hadPointList.length) {
        boxId = hadPointList.length;
        for (let i = 0; i < hadPointList.length; i++) {
          const items: RectType = hadPointList[i];
          pointList.push(items);
          resolveDraw(items);
          ctx.save();
          ctx.lineWidth = 3;
          ctx.lineJoin = 'round';
          ctx.strokeStyle = 'red';
          ctx.fillStyle = '#1890ff';
          ctx.font = 'bold 24px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(`${i + 1}-号`, items.textX, items.textY);
          ctx.stroke();
          ctx.restore();
        }
      } else {
        pointList = [];
        boxId = 0;
      }
      lastCanvasInfo = ctx.getImageData(0, 0, canvas!.width, canvas!.height);
    } else {
      // 重置时
      pointList = [];
      boxId = 0;
      lastCanvasInfo = ctx.getImageData(0, 0, canvas!.width, canvas!.height);
    }
  };
  // 创建img标签
  const createImage = (): Promise<HTMLImageElement> => {
    const img: HTMLImageElement = new Image();
    img.src = imgUrl;
    return new Promise((resolve) => {
      img.onload = function () {
        resolve(img);
      };
    });
  };
  // 鼠标按下
  const handleCanvasMouseDown = (ev: MouseEvent<HTMLCanvasElement>): void => {
    if (mode === 'rect' && isDraw) {
      ev.preventDefault();
      const e = ev.nativeEvent;
      moveFlag = true;
      startX = e.offsetX; // 鼠标落下时的X
      startY = e.offsetY; // 鼠标落下时的Y
    }
  };
  // 鼠标移动
  const handleCanvasMouseMove = (ev: MouseEvent<HTMLCanvasElement>): void => {
    if (mode === 'rect' && isDraw) {
      ev.preventDefault();
      const e = ev.nativeEvent;
      if (Math.abs(e.offsetX - startX) < 10 || Math.abs(e.offsetY - startY) < 10) return; //处理误差
      if (!moveFlag) return;
      drawRectByMove(e);
    }
  };
  // 鼠标松开
  const handleCanvasMouseUp = (ev: MouseEvent<HTMLCanvasElement>): void => {
    if (mode === 'rect' && isDraw) {
      ev.preventDefault();
      const e: globalThis.MouseEvent = ev.nativeEvent;
      moveFlag = false;
      if (Math.abs(e.offsetX - startX) < 10 || Math.abs(e.offsetY - startY) < 10) return; //处理误差
      const canvas = ref.current;
      const textPoint = drawText(e);
      lastCanvasInfo = ctx.getImageData(0, 0, canvas!.width, canvas!.height);
      boxId++;
      getPointList(e, textPoint);
    }
  };
  // 鼠标点击
  const handleCanvasClick = (ev: MouseEvent<HTMLCanvasElement>): void => {
    const e = ev.nativeEvent;
    let x = e.offsetX,
      y = e.offsetY;
    // 描点模式
    if (mode === 'point' && isDraw) {
      drawRectByClick(x, y);
      return;
    }
    // 选择围栏
    if (!isClick) return;
    if (!pointList.length) return;
    // curPoint = [];
    const curPoint: RectType[] = [];
    ctx.putImageData(lastCanvasInfo, 0, 0); // 每次绘制都要回到初始状态
    // const canvas = ref.current;
    // ctx.clearRect(0, 0, canvas!.width, canvas!.height);

    for (let i = 0; i < pointList.length; i++) {
      const items = pointList[i];
      resolveDraw(items);
      if (ctx!.isPointInPath(x, y)) {
        ctx!.save();
        ctx.lineWidth = 8;
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowOffsetX = 4;
        ctx.shadowOffsetY = 4;
        ctx.shadowBlur = 10;
        ctx.strokeStyle = 'pink';
        ctx.fillStyle = 'rgba(250,200,200,0.8)';
        ctx.font = 'bold 26px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${i + 1}-号`, items.textX, items.textY);
        curPoint.push(items);
      } else {
        ctx.save();
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 3;
      }
      ctx.stroke();
      ctx.restore();
    }
    setCurPoint([...curPoint]);
    // console.log('curPoint', curPoint);
  };

  // 重置画布
  const handleCanvasClear = async (): Promise<void> => {
    myRadioRef.current?.setHadPointList();
    const canvas = ref.current;
    canvas!.width = canvas?.width as number;
    canvas!.height = canvas?.height as number;
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    setCursorType('default');
    isClick = false;
    isDraw = false;
    // 重置初始化
    await canvasInit(true);
    message.success('重置画布成功');
  };
  // 描点模式绘制矩形
  const drawRectByClick = (x: number, y: number): void => {
    ctx.lineJoin = 'round';
    ctx.save();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 3;
    if (pointCount === 1) {
      ctx.putImageData(lastCanvasInfo, 0, 0);
      //   起点
      ctx?.beginPath();
      ctx?.arc(x, y, 2, 0, PI);
      ctx?.moveTo(x, y);
      ctx?.stroke();
      pointStack.push({ x, y });
      pointCount++;
      return;
    }
    if (pointCount === 4) {
      //   终点
      ctx?.arc(x, y, 2, 0, PI);
      ctx?.closePath();
      ctx?.stroke();
      ctx.fillStyle = '#1890ff';
      ctx.font = 'bold 24px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`${boxId + 1}-号`, pointStack[0].x, pointStack[0].y);
      ctx.restore();
      pointStack.push({ x, y });
      boxId++;
      pointList.push(pointArr2PointObj());
      pointCount = 1;
      pointStack = [];
      const canvas = ref.current;
      lastCanvasInfo = ctx.getImageData(0, 0, canvas!.width, canvas!.height);
      return;
    }
    // 第2,3个点
    ctx?.arc(x, y, 2, 0, PI);
    ctx?.lineTo(x, y);
    ctx?.stroke();
    pointStack.push({ x, y });
    pointCount++;
  };

  return (
    <Spin spinning={loading}>
      <div style={{ marginBottom: 8 }}>
        <Space size={16}>
          <span>
            <Select
              defaultValue={mode}
              style={{ width: 120 }}
              onChange={(val: ModeType) => {
                mode = val;
                if (isClick) return;
                if (mode === 'point') {
                  setCursorType('default');
                  return;
                }
                setCursorType('crosshair');
              }}
            >
              <Option value="rect">矩形模式</Option>
              <Option value="point">描点模式</Option>
            </Select>
          </span>

          <Popconfirm
            title="围栏及关联数据将被清空,确认吗?"
            okText="确定"
            cancelText="取消"
            onConfirm={handleCanvasClear}
          >
            <Button type="primary">重置画布</Button>
          </Popconfirm>

          <Button
            type="primary"
            onClick={() => {
              if (isDraw) {
                message.error('当前已是绘制围栏状态');
                return;
              }
              if (!isDraw) message.info('当前可绘制围栏');
              ctx.putImageData(lastCanvasInfo, 0, 0); // 恢复画布信息
              isDraw = true;
              isClick = false;
              console.log(mode);
              if (mode === 'point') {
                setCursorType('default');
                return;
              }
              setCursorType('crosshair');
            }}
          >
            开始绘制
          </Button>
          <Button
            type="primary"
            onClick={() => {
              if (!pointList.length) {
                message.error('当前没有围栏可选择');
                return;
              }
              if (isClick) {
                message.error('当前已是选择围栏状态');
                return;
              }
              if (!isClick) message.info('当前可选择围栏');
              isClick = true;
              isDraw = false;
              setCursorType('pointer');
            }}
          >
            选择围栏
          </Button>
        </Space>
      </div>
      <canvas
        ref={ref}
        width={800}
        height={500}
        style={{
          border: '1px solid',
          cursor: cursorType,
          // background: "url('/img.png')",
        }}
        draggable={false}
        onClick={handleCanvasClick}
        onMouseUp={handleCanvasMouseUp}
        onMouseDown={handleCanvasMouseDown}
        onMouseMove={handleCanvasMouseMove}
      >
        你的浏览器不支持Canvas
      </canvas>

      <MyRadio
        ref={myRadioRef}
        curPoint={curPoint}
        putImageData={() => {
          ctx.putImageData(lastCanvasInfo, 0, 0);
          setCurPoint([]);
        }}
      />
    </Spin>
  );
};

export default Index;
