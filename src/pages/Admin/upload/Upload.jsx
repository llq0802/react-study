import React, { useRef, useState } from 'react'
import styles from './upload.module.scss'
export default function Upload() {
  let _canvas = null
  const c = useRef(null)
  const choosePicture = (e) => {
    c.current.click()
  }
  const handleChange = (e) => {
    const file = c.current.files[0]
    const fr = new FileReader()//readAsArrayBuffer()Buffer数组   readAsBinaryString()二进制   readAsDataURL()BASE64
    fr.readAsDataURL(file)
    fr.onload = (e) => {
      let img = new Image()
      img.src = e.target.result
      // console.log(img);
      img.onload = () => {

        // if (img.width >= _canvas.width) {
        //   let n = img.width / _canvas.width
        //   img.width = _canvas.width
        //   img.height = img.height / n
        // } else {
        //   let n = img.height / _canvas.height
        //   img.height = _canvas.height
        //   img.width = img.width / n
        // }

        _canvas.height = 300
        let scale = img.height / _canvas.height
        _canvas.width = img.width / scale
        const ctx = _canvas.getContext("2d")
        ctx.clearRect(0, 0, img.width, img.height)
        ctx.drawImage(img, 0, 0, _canvas.width, _canvas.height)

        // console.log(ctx);
        // console.log(ctx.getImageData);
        // console.log(ctx.putImageData);
        // console.log(_canvas.toDataURL);
        // const can2 = document.createElement('canvas');
        // _canvas.toDataURL()

      }
    }
  }
  const savePicture = () => {
    let canvas = document.createElement('canvas')
    canvas.width = 200
    canvas.height = 200
    console.dir(canvas.width);
    const ctx = canvas.getContext('2d')

    // canvas.onload = () => {

    // }
    // console.log(ctx.getImageData);
    // console.log(ctx.putImageData);
    // console.log(canvas.toDataURL);
  }

  const handleCanvasClick = (e) => {
    console.log(e.nativeEvent.offsetX);
    console.log(e.nativeEvent.offsetY);
  }

  return (
    <div className="container">

      <canvas width="300" height="300" ref={v => (_canvas = v)} style={{ border: '1px solid red' }}
        onClick={handleCanvasClick}
      >
      </canvas>


      <hr />
      <input type="file" style={{ display: 'none' }} ref={c} onChange={handleChange} />
      <button onClick={choosePicture}>选择图片</button>

      <button onClick={savePicture}>保存图片</button>
    </div>
  )
}