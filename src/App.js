import './App.css';


function App(props) {

  return (
  
    <div>
      <dl>
        <dt>
        <h1>{props.emoji}</h1>
        <h1> {props.name}</h1>
        </dt>
        <dd>{props.meaning}</dd>
         </dl>
   </div>
  )};


export default App;
