import './App.css';
import './index.css'; 
// import Weather from './weather.js'

function App() {
  let preuseText = 'No Location Set'

  return (
    
    <div id='mainCont' className='h-[100vh] w-[100vw] bg-gray-900 grid grid-cols-1 justify-center'>
      <div id='headerCont' className='h-[5em] w-[100%] bg-gray-700 text-center grid content-center'>
        <h1 id='headerText' className='text-3xl font-bold text-orange-500'>MySimplistic Weather</h1>
      </div>
      <div className='flex w-[100%] h-[5em] justify-center content-center gap-10'> 
        <input id='locationInput' className='w-[40%] h-[100%] text-2xl text-orange-500 font-bold p-2 rounded-md flex justify-center'></input>
        <button id='locationInputSubmit' className='p-2 rounded-md bg-orange-500 font-bold text-white'>Submit Location</button>
      </div>
      <div className='h-[70vh] w-[100vw] flex justify-center '> 
        <div id='weatherCardCont' className='h-[100%] w-[70%] bg-gray-700 rounded-md grid content-between text-center'>
          <h1 id='weatherCardLocationText' className='text-3xl font-bold text-orange-500 p-2'>{preuseText}</h1>
          <h1 id='weatherCardTempText' className='text-3xl font-bold text-orange-500 p-2'>{preuseText}</h1>
          <h1 id='weatherCardFeelsText' className='text-3xl font-bold text-orange-500 p-2'>{preuseText}</h1>
          <h1 id='weatherCardWindText' className='text-3xl font-bold text-orange-500 p-2'>{preuseText}</h1>
        </div>
      </div>
    </div>
  )
}

export default App;
