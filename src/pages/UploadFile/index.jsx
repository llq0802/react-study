import React, { Component } from 'react'
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
    listType: "picture-card",
    onChange(file,
      fileList,
      event) {
      console.log('onChange', file.file);

    },
    accept: ".dwg,.cad",
    beforeUpload(file) {

      console.log('beforeUpload', file);
      return false
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
    <div >
      <Upload {...props}>
        {/* <Button icon={<UploadOutlined />}>Upload</Button> */}
        上传CAD
      </Upload>
    </div>
  )
}

export default Index
