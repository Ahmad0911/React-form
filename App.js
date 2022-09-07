
import React, { useReducer, useState } from 'react';
import './form.css'

const formReducer = (state, event) => {
  if(event.reset) {
    return {
      First: '',
      Second: '',
      Third: '',
      Phone: 0,
      mail: '',
     'cyber': false,
     'market': false,
     'script': false
    }
  }
  return {
    ...state,
    [event.name]: event.value
  }
 }
function App() {
  const [formData,  setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

   setTimeout(() => {
     setSubmitting(false);
     setFormData({
      reset: true
    })
   }, 3000)
  }

  const handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    })
  }

  return (
    <div className="wrapper" style={{ width: "50%",}}>
      <h1>Kindly Enter Your Details</h1>
      {submitting &&
       <div>
       You are submitting the following:
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>:{value.toString()}</li>
           ))}
         </ul>
         </div>
     }
      <form onSubmit={handleSubmit}>
      <fieldset>
         <label>
           <p>First Name</p>
           <input type="text" id="First" onChange={handleChange} />
         </label>
         <label>
           <p>Second Name</p>
           <input type="text" id="Second" onChange={handleChange} />
         </label>
         <label>
           <p>Other Name</p>
           <input name="name" id="Third" onChange={handleChange} />
         </label>
         <label>
           <p>Phone number</p>
           <input type="number" id="Phone" onChange={handleChange} />
         </label>
         <label>
           <p>E-mail</p>
           <input type="email" id="mail" onChange={handleChange} />
         </label>
       </fieldset>
       <fieldset>
       <div>
         <h3 style={{ display: "flex", float: "left",  width: "50%"}}>Courses</h3> 
         <h3 style={{ display: "flex", float: "right",  width: "50%"}}>Amount(#)</h3>
       </div>
       <div>
       <label>
        <input type="checkbox" id="market" onChange={handleChange}/>Digital Marketing </label>
      <h3 style={{ display: "inline-block", float: "right",  width: "50%"}}>150.00</h3>
       </div>
       <div>
       <label>
        <input type="checkbox" id="script" onChange={handleChange}/>Server Side Scripting </label>
      <h3 style={{ display: "inline-block", float: "right",  width: "0%"}}>300.00</h3>
       </div>
      <div>
      <label>
        <input type="checkbox" id="cyber" onChange={handleChange}/>Cyber Security</label>
      <h3 style={{ display: "inline-block", float: "right",  width: "0%"}}>900.00</h3>
      </div>
       </fieldset>
      <div>
      <button type="submit">Submit</button>
      </div>
      </form>
      </div>
  );
}

export default App;
