import React, { useState, useRef, useEffect } from 'react';
import Slider from './components/ui/slider';
import Button from './components/ui/button';

const DotImageConverter = () => {
  const [image, setImage] = useState(null);
  const [resolution, setResolution] = useState(64);
  const [dotSize, setDotSize] = useState(1);
  const canvasRef = useRef(null);
  const canvasSize = 512;

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        setImage(img);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (image && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      canvas.width = canvasSize;
      canvas.height = canvasSize;
      
      ctx.imageSmoothingEnabled = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = resolution;
      tempCanvas.height = resolution;
      const tempCtx = tempCanvas.getContext('2d');
      tempCtx.drawImage(image, 0, 0, resolution, resolution);
      
      const imageData = tempCtx.getImageData(0, 0, resolution, resolution);
      
      const pixelSize = canvasSize / resolution;
      
      for (let y = 0; y < resolution; y++) {
        for (let x = 0; x < resolution; x++) {
          const i = (y * resolution + x) * 4;
          ctx.fillStyle = `rgb(${imageData.data[i]},${imageData.data[i+1]},${imageData.data[i+2]})`;
          
          const drawSize = pixelSize * dotSize;
          const offsetX = (pixelSize - drawSize) / 2;
          const offsetY = (pixelSize - drawSize) / 2;
          ctx.fillRect(x * pixelSize + offsetX, y * pixelSize + offsetY, drawSize, drawSize);
        }
      }
    }
  }, [image, resolution, dotSize]);

  const handleExport = () => {
    if (canvasRef.current) {
      const link = document.createElement('a');
      link.download = 'dot-image.png';
      link.href = canvasRef.current.toDataURL();
      link.click();
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-4" />
      <div className="slider-container">
        <label>解像度: {resolution}x{resolution}</label>
        <Slider
          min={16}
          max={256}
          step={16}
          value={resolution}
          onChange={(e) => setResolution(parseInt(e.target.value))}
        />
      </div>
      <div className="slider-container">
        <label>ドットサイズ: {dotSize.toFixed(2)}</label>
        <Slider
          min={0.1}
          max={1}
          step={0.05}
          value={dotSize}
          onChange={(e) => setDotSize(parseFloat(e.target.value))}
        />
      </div>
      <canvas 
        ref={canvasRef} 
        className="border border-gray-300 mb-4" 
        width={canvasSize} 
        height={canvasSize} 
        style={{ width: '100%', height: 'auto' }}
      />
      <Button onClick={handleExport}>画像を出力</Button>
    </div>
  );
};

export default DotImageConverter;
