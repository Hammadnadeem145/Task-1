
import React, {useState, useEffect
} from 'react';


export default function Home() {


  const [data, setData] = useState('');

  useEffect(() => {
    const savedData = localStorage.getItem('myData');
    if (savedData) {
      setData(savedData);
      console.log(savedData)
      
    }
  }, []);

  const handleSaveClick = (): void => {
    localStorage.setItem('myData', data);
  };
  return (
    <>
      
     
       <label htmlFor="input">Enter Data:</label>
       <input type="text" value={data} onChange={e => setData(e.target.value)} />
       <button onClick={handleSaveClick}>Save</button>
     
    </>
  )
}




  

