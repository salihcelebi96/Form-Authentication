import React, { useState, useEffect  } from 'react';
import Video from "./VideoComponent"

const Form = () => {
 
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('New Mexico');
  const [zip, setZip] = useState('');
  const [emailError, setEmailError] = useState('');
  


  useEffect(() => {
    const savedState = localStorage.getItem('formState');
    if (savedState) {
      const { firstName, email, password, city, state, zip } = JSON.parse(savedState);
      setFirstName(firstName);
      setEmail(email);
      setPassword(password);
      setCity(city);
      setState(state);
      setZip(zip);
    }
  }, []);

  

  
  useEffect(() => {
    const savedState = localStorage.getItem('formState');
    if (savedState) {
      const { firstName, email, password, city, state, zip } = JSON.parse(savedState);
      setFirstName(firstName);
      setEmail(email);
      setPassword(password);
      setCity(city);
      setState(state);
      setZip(zip);
    }
  }, []);

  

  useEffect(() => {
    const formState = JSON.stringify({ firstName, email, password, city, state, zip });
    localStorage.setItem('formState', formState);
  }, [firstName, email, password, city, state, zip]);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (isValidEmail(newEmail)) {
      setEmailError('');
    } else {
      setEmailError('Invalid email format');
    }
  };

  return (
    <div className='flex justify-center  h-screen  relative'>
      <Video/>
      <form className="w-full max-w-lg mt-10 z-0">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              First Name
            </label>
            <input
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder=""
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          
          
          </div>
          <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Email
            </label>
            <input
              required
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                emailError ? 'border-red-500' : ''
              }`}
              id="grid-last-name"
              type="text"
              placeholder=""
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <p className="text-red-500 text-xs italic">{emailError}</p>}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase  text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              Password
            </label>
            <input
            required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
              City
            </label>
            <input
            required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder=""
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
              State
            </label>
            <div className="relative">
              <select
              required
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option value="">Select a state</option>
                <option value="Marmara">Marmara</option>
                <option value="Ege">Ege</option>
                <option value="Akdeniz">Akdeniz</option>
                <option value="Karadeniz">Karadeniz</option>
                <option value="İç Anadolu">İç Anadolu</option>
                <option value="Doğu Anadolu">Doğu Anadolu</option>
                <option value="Güney Doğu Anadolu">Güney Doğu Anadolu</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
              Zip
            </label>
            <input
            required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="90210"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
          
          
        </div>
        
        
      </form>
      
    </div>
  );
};

export default Form;
