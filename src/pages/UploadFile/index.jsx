import React, { Component } from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined, StarOutlined } from '@ant-design/icons';

const Index = () => {
  const props = {
    maxCount: 1,
    action: '//jsonplaceholder.typicode.com/posts/',
    // listType: 'picture',
    // previewFile(file) {
    //   console.log('previewFile', file);

    //   // return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
    //   //   method: 'POST',
    //   //   body: file,
    //   // })
    //   //   .then(res => res.json())
    //   //   .then(({ thumbnail }) => thumbnail);
    // },
    // showUploadList: {
    //   showDownloadIcon: true,
    //   downloadIcon: 'download ',
    //   showRemoveIcon: true,
    //   removeIcon: <StarOutlined onClick={e => console.log(e, 'custom removeIcon event')} />,
    // },
    // showUploadList: false,
    listType: 'picture-card',
    onChange(file, fileList, event) {
      console.log('onChange', file.file);
    },
    accept: '.dwg,.cad',
    beforeUpload(file) {
      console.log('beforeUpload', file);
      return false;
    },
    onDownload(file) {
      console.log('onDownload', file);
    },
    onPreview(file) {
      console.log('onPreview', file);
    },
    onRemove(file) {
      console.log('onRemove  ', file);
    },
  };

  return (
    <div>
      <Upload {...props}>
        {/* <Button icon={<UploadOutlined />}>Upload</Button> */}
        上传CAD
      </Upload>
    </div>
  );
};

export default Index;

// const { Option } = Select;
// let moveFlag = false,
//   ctx = null,
//   isClick = false,
//   isDraw = false,
//   startX = 0,
//   startY = 0,
//   boxId = 0,
//   lastCanvasInfo = null,
//   pointList = [],
//   curPoint = [],
//   drawHistory = [],
//   hadPointList = [
//     {
//       boxId: 1,
//       x1: 64,
//       y1: 50,
//       x2: 185,
//       y2: 50,
//       x3: 185,
//       y3: 198,
//       x4: 64,
//       y4: 198,
//       textX: 124.5,
//       textY: 124,
//     },
//     {
//       boxId: 2,
//       x1: 267,
//       y1: 120,
//       x2: 568,
//       y2: 120,
//       x3: 568,
//       y3: 352,
//       x4: 267,
//       y4: 352,
//       textX: 417.5,
//       textY: 236,
//     },
//     {
//       boxId: 3,
//       x1: 601,
//       y1: 44,
//       x2: 773,
//       y2: 44,
//       x3: 773,
//       y3: 286,
//       x4: 601,
//       y4: 286,
//       textX: 687,
//       textY: 165,
//     },
//   ];
// function resolveDraw(curPointObj) {
//   const { x1, y1, x2, y2, x3, y3, x4, y4 } = curPointObj;
//   ctx.lineJoin = 'round';
//   ctx.beginPath();
//   ctx.moveTo(x1, y1);
//   ctx.lineTo(x2, y2);
//   ctx.lineTo(x3, y3);
//   ctx.lineTo(x4, y4);
//   ctx.closePath();
// }
// // 处理矩形的4个点
// function getPointList(e, textPoint) {
//   const { offsetX, offsetY } = e;
//   const { textX, textY } = textPoint;
//   let w = Math.abs(e.offsetX - startX),
//     h = Math.abs(e.offsetY - startY),
//     x1 = startX,
//     y1 = startY;
//   if (offsetX > startX && offsetY > startY) {
//     console.log('右下');
//     let x2 = x1 + w,
//       y2 = y1,
//       x3 = x1 + w,
//       y3 = y1 + h,
//       x4 = x1,
//       y4 = y1 + h;
//     pointList.push({ boxId, x1, y1, x2, y2, x3, y3, x4, y4, textX, textY });
//     console.log('pointList', pointList);
//     return;
//   }
//   if (offsetX > startX && offsetY < startY) {
//     console.log('右上');
//     let x2 = x1,
//       y2 = y1 - h,
//       x3 = x1 + w,
//       y3 = y1 - h,
//       x4 = x1 + w,
//       y4 = y1;
//     pointList.push({ boxId, x1, y1, x2, y2, x3, y3, x4, y4, textX, textY });
//     console.log('pointList', pointList);
//     return;
//   }
//   if (offsetX < startX && offsetY < startY) {
//     console.log('左上');
//     let x2 = x1 - w,
//       y2 = y1,
//       x3 = x1 - w,
//       y3 = y1 - h,
//       x4 = x1,
//       y4 = y1 - h;
//     pointList.push({ boxId, x1, y1, x2, y2, x3, y3, x4, y4, textX, textY });
//     console.log('pointList', pointList);
//     return;
//   }
//   if (offsetX < startX && offsetY > startY) {
//     console.log('左下');
//     let x2 = x1,
//       y2 = y1 + h,
//       x3 = x1 - w,
//       y3 = y1 + h,
//       x4 = x1 - w,
//       y4 = y1;
//     pointList.push({ boxId, x1, y1, x2, y2, x3, y3, x4, y4, textX, textY });
//     console.log('pointList', pointList);
//     return;
//   }
// }
// // 绘制文字
// function drawText(e) {
//   let w = e.offsetX - startX,
//     h = e.offsetY - startY;
//   ctx.save();
//   ctx.shadowColor = 'rgba(0,0,0,0.4)';
//   ctx.shadowOffsetX = 5;
//   ctx.shadowOffsetY = 5;
//   ctx.shadowBlur = 10;
//   ctx.textAlign = 'center';
//   // ctx.textAlign = 'end'
//   ctx.fillStyle = '#1890ff';
//   ctx.font = 'bold 24px sans-serif';
//   // ctx.fillText(`${boxId + 1}-号`, startX, startY);
//   ctx.fillText(`${boxId + 1}-号`, w / 2 + startX, h / 2 + startY);
//   ctx.restore();
//   return { textX: w / 2 + startX, textY: h / 2 + startY };
// }

// //绘制矩形
// const drawRect = (e) => {
//   if (moveFlag) {
//     ctx.putImageData(lastCanvasInfo, 0, 0);
//     let w = e.offsetX - startX,
//       h = e.offsetY - startY;
//     ctx.beginPath();
//     ctx.save();
//     ctx.lineJoin = 'round';
//     ctx.strokeStyle = 'red';
//     ctx.lineWidth = 3;
//     ctx.rect(startX, startY, w, h);
//     ctx.stroke();
//     ctx.restore();
//     // drawText()
//   }
// };

// /**
//  *组件
//  * @return {*}
//  */
// const Index = () => {
//   const ref = useRef(null);
//   const [cursorType, setCursorType] = useState('default');
//   // 初始化
//   useEffect(() => {
//     const canvas = ref.current;
//     ctx = canvas.getContext('2d');
//     ctx.globalAlpha = 0.9;
//     canvasInit();
//     return () => {
//       moveFlag = false;
//       ctx = null;
//       isClick = false;
//       isDraw = false;
//       startX = 0;
//       startY = 0;
//       boxId = 0;
//       lastCanvasInfo = null;
//       pointList = [];
//       curPoint = [];
//       hadPointList = [];
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // 创建img标签
//   const imgLoaded = () => {
//     const img = new Image();
//     img.src = '/img.png';
//     return new Promise((resolve, reject) => {
//       img.onload = function () {
//         resolve(img);
//       };
//     });
//   };
//   // 图片映射在画布
//   const canvasInit = async (isReset) => {
//     const canvas = ref.current;
//     const img = await imgLoaded();
//     ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

//     // 初始化时
//     if (!isReset) {
//       if (hadPointList.length) {
//         boxId = hadPointList.length;
//         for (let i = 0; i < hadPointList.length; i++) {
//           const items = hadPointList[i];
//           pointList.push(items);
//           resolveDraw(items);
//           ctx.save();
//           ctx.lineWidth = 3;
//           ctx.lineJoin = 'round';
//           ctx.strokeStyle = 'red';
//           ctx.fillStyle = '#1890ff';
//           ctx.font = 'bold 24px sans-serif';
//           ctx.textAlign = 'center';
//           ctx.fillText(`${i + 1}-号`, items.textX, items.textY);
//           ctx.stroke();
//           ctx.restore();
//         }
//       } else {
//         pointList = [];
//         boxId = 0;
//       }
//       lastCanvasInfo = ctx.getImageData(0, 0, canvas.width, canvas.height);
//     } else {
//       // 重置时
//       pointList = [];
//       boxId = 0;
//       lastCanvasInfo = ctx.getImageData(0, 0, canvas.width, canvas.height);
//     }
//   };

//   // 鼠标按下
//   const onMouseDown = (e) => {
//     if (!isDraw) return;
//     e.preventDefault();
//     e = e.nativeEvent;
//     moveFlag = true;
//     startX = e.offsetX; // 鼠标落下时的X
//     startY = e.offsetY; // 鼠标落下时的Y
//     // console.log('onMouseDown', e.offsetX, e.offsetY);
//   };
//   // 鼠标移动
//   const onMouseMove = (e) => {
//     if (!isDraw) return;
//     e.preventDefault();
//     e = e.nativeEvent;
//     if (Math.abs(e.offsetX - startX) < 10 || Math.abs(e.offsetY - startY) < 10) return; //处理误差
//     if (!moveFlag) return;
//     drawRect(e);
//     // console.log('onMouseMove', e);
//   };
//   // 鼠标松开
//   const onMouseUp = (e) => {
//     if (!isDraw) return;
//     e.preventDefault();
//     e = e.nativeEvent;
//     moveFlag = false;
//     if (Math.abs(e.offsetX - startX) < 10 || Math.abs(e.offsetY - startY) < 10) return; //处理误差
//     const canvas = ref.current;
//     const textPoint = drawText(e);
//     lastCanvasInfo = ctx.getImageData(0, 0, canvas.width, canvas.height);
//     boxId++;
//     getPointList(e, textPoint);
//     // console.log('onMouseUp', e.offsetX, e.offsetY);
//   };

//   // 鼠标点击
//   const onClick = (e) => {
//     e = e.nativeEvent;
//     let x = e.offsetX,
//       y = e.offsetY;
//     if (!isClick) return;
//     if (!pointList.length) return;
//     curPoint = [];
//     ctx.putImageData(lastCanvasInfo, 0, 0); // 每次绘制都要回到初始状态
//     for (let i = 0; i < pointList.length; i++) {
//       const items = pointList[i];
//       resolveDraw(items);
//       if (ctx.isPointInPath(x, y)) {
//         ctx.save();
//         ctx.lineWidth = 8;
//         ctx.shadowColor = 'rgba(0,0,0,0.5)';
//         ctx.shadowOffsetX = 4;
//         ctx.shadowOffsetY = 4;
//         ctx.shadowBlur = 10;
//         ctx.strokeStyle = 'pink';
//         ctx.fillStyle = 'rgba(250,200,200,0.8)';
//         ctx.font = 'bold 26px sans-serif';
//         ctx.textAlign = 'center';
//         ctx.fillText(`${i + 1}-号`, items.textX, items.textY);
//         curPoint.push(items);
//       } else {
//         ctx.save();
//         ctx.strokeStyle = 'red';
//         ctx.lineWidth = 3;
//       }
//       // ctx.fill()
//       ctx.stroke();
//       ctx.restore();
//     }
//   };

//   // 重置画布
//   const handleClear = () => {
//     const canvas = ref.current;
//     canvas.width = canvas?.width;
//     canvas.height = canvas?.height;
//     // ctx.clearRect(0, 0, canvas.width, canvas.height);
//     setCursorType('pointer');
//     isClick = false;
//     isDraw = false;
//     canvasInit(true);
//   };
//   return (
//     <>
//       <div style={{ marginBottom: 8 }}>
//         <Space size={16}>
//           <Button type="primary" onClick={handleClear}>
//             重置画布
//           </Button>
//           <span>
//             <span>绘制模式：</span>
//             <Select defaultValue="juxing" style={{ width: 120 }}>
//               <Option value="juxing">矩形模式</Option>
//               <Option value="miaodian">描点模式</Option>
//             </Select>
//           </span>

//           <Button
//             type="primary"
//             onClick={() => {
//               isDraw = true;
//               isClick = false;
//               setCursorType('crosshair');
//             }}
//           >
//             绘制
//           </Button>
//           <Button
//             type="primary"
//             onClick={() => {
//               isClick = true;
//               isDraw = false;
//               setCursorType('pointer');
//             }}
//           >
//             选择
//           </Button>
//         </Space>
//       </div>

//       <canvas
//         ref={ref}
//         width={800}
//         height={500}
//         style={{
//           border: '1px solid',
//           cursor: cursorType,
//         }}
//         onClick={onClick}
//         onMouseUp={onMouseUp}
//         onMouseDown={onMouseDown}
//         onMouseMove={onMouseMove}
//       />
//     </>
//   );
// };

// export default Index;
