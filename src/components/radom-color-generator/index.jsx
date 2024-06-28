import React, { useState } from 'react'
import { ColorCodeOptions, constants, generateColorCode } from './util'
import Generate from './components/Generate';
import './style.css';

const RandomColor = () => {
  const [colorModel, setColorModel] = useState(ColorCodeOptions[0]?.value);
  const [generatedCode, setGeneratedCode] = useState({
    HEX: '#2C3A47',
    RGB: 'rgb(44, 58, 71)'
  })

  const handleGenerate = () => {
    const codeValue = generateColorCode(colorModel);
    setGeneratedCode(pre => {
      return colorModel == ColorCodeOptions[0].value ? { ...pre, HEX: codeValue } : { ...pre, RGB: codeValue }
    });
  }

  return (
    <div style={{ backgroundColor: colorModel == ColorCodeOptions[0]?.value ? generatedCode.HEX : generatedCode.RGB }} className='main'>
      <div className='maincodeSelection'>
        <div>
          <h3 className='heading'> Multi Selection</h3>
        </div>
        <div className='selectionContainer'>
          <select className='codeSelection' onChange={(e) => setColorModel(e.target.value)} value={colorModel}>
            {
              ColorCodeOptions && ColorCodeOptions?.map((colorcode) => (
                <option value={colorcode.value} key={colorcode.id} className='codeSelectionoption'>
                  {colorcode.label}
                </option>
              ))
            }
          </select>
          <button className='generateBtn' onClick={handleGenerate}>
            {constants.GENERATEBUTTONNAME}
          </button>
        </div>
      </div>
      <div>
        <Generate colorModel={colorModel} generatedCode={generatedCode} />
      </div>
    </div>
  )
}

export default RandomColor;