import { Slider } from 'antd';
import { useEffect } from 'react';
import HomeBkgImageManager from './homeBkgImageManager';


function App() {
  useEffect(() => {
    //默认加载全部
    // HomeBkgImageManager.shared.loadImages()
    //显示图片
    HomeBkgImageManager.shared.loadImageWithoutIndex(0)
    //加载剩余图片，避免重复加载，可以改进
    HomeBkgImageManager.shared.showImageWithIndex(0)
  }, [])

  return (
    <div
      id="home_bkg"
      style={{ width: '100%', height: '100%' }}>
      
      <Slider 
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          backgroundColor: 'white',
          width: 100,
          zIndex: 1000
        }}
        onChange={e => {
          HomeBkgImageManager.shared.showImageWithIndex(e)
        }}
        min={0}
        max={10}
        />
    </div>
  );
}

export default App;
