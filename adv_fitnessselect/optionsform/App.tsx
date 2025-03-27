import { useState } from 'react';
import Checkbox from './Checkbox.tsx';
import './App.css'

interface Option {
  name: string,
  checked: boolean,
}

function App() {
  const [options, setOptions] = useState<Option[]>([
    {name: "Kosher", checked: false},
    {name: "No Celery (inc celeriac)", checked: false},
    {name: "No Egg", checked: false},
  ]);

  const selectAll = () => {
    setOptions(
      options.map((item) => ({
        ...item,
        checked: true,
      }))
    );
  };

  const check = (name: string) => {
    setOptions(
      options.map((item) => {
        return (item.name === name) 
        ? {
          ...item,
          checked: !item.checked,
        }
        : item;
      })
    );
  };

  const clearAll = () => {
    setOptions(
      options.map((item) => ({
        ...item,
        checked: false,
      }))
    );
  };

  return (
    <>
      <div id="selectedValue">
        Selected Value: {}
      </div>

      <div>
        <input type="checkbox" onChange={selectAll} />
        <label>Select All</label><br />

        {
          options.map((item) => {
            return <>
              <Checkbox name={item.name} checked={item.checked} onChange={() => check(item.name)}/>
            </>;
          })
        }
      </div>

      <hr />
      <input type="button" value="Clear All" onClick={clearAll}/>
    </>
  )
}

export default App
