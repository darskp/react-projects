import { selectionDetails } from './data';
import { useState } from 'react';
import './style.css'
function Accordian() {
  const [selectedSeletion, setSelectedSeletion] = useState([]);
  const [enableMultiSelection, SetEnableMultiSelection] = useState(false);

  const handleSlection = (id) => {
    setSelectedSeletion(prevSelection =>
      !enableMultiSelection ?
        prevSelection.includes(id) ? [] : [id] :
        prevSelection.includes(id) ? prevSelection.filter(pre => pre !== id) : [...selectedSeletion, id]
    )
  }

  const handleChoice = () => {
    SetEnableMultiSelection(pre => !pre);
    setSelectedSeletion([])
  }

  return (
    <div className="mainselection">
      <div>
        <h3 className='heading'> Multi Selection</h3>
      </div>
      <div>
        <button className='btn' onClick={handleChoice}>{!enableMultiSelection ? "Enable Multi Selection" : "Enable Single Selction"}</button>
      </div>
      <div>

      </div>
      <div className='selection'>
        {
          selectionDetails ? selectionDetails?.map((item, index) => (
            <div key={item.id}>
              <div className='card'>
                <div className='cardBody'>
                  <div>{item?.title}</div>
                  <div className='expandBtn' onClick={() => handleSlection(item?.id)} >{
                    selectedSeletion.includes(item.id) ? '-' : '+'
                  }</div>
                </div>
                {
                  selectedSeletion.includes(item.id) &&
                  <div className='cardBody1'>
                    <p>{item?.description}</p>
                  </div>
                }
              </div>
            </div>
          )) : null}
      </div>
    </div>
  );
}

export default Accordian;