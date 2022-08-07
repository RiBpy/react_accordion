import React, { useState } from 'react';
import logo from './asset/logo.png';
import data from './data';
import SingleQuestion from './Question';
function App() {
    const imgStyle={
        width:'70px',
        height:'70px'
    }
  const [questions,setQuestions] = useState(data);
  return <main>
    <div className="container">
     <div>
     <h3>Questions and answers</h3>
      <img src={logo} alt="logo" style={imgStyle} />
     </div>
      <section className="info">
        {questions.map(question=>{
          return <SingleQuestion key={question.id} {...question} />;
        })}
      </section>
    </div>
  </main>;
}

export default App;
