import { motion } from "framer-motion";
import React, { useState } from "react";
import Select from "react-select";

const CURRENCY_OPTIONS = [
  { value: 'USD', label: '$' },
  { value: 'EUR', label: '€' },
  { value: 'GBP', label: '£' },
];

const CheckoutPage = () => {
  const [currency, setCurrency] = useState(CURRENCY_OPTIONS[0]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const handleCurrencyChange = (selectedCurrency) => {
    setCurrency(selectedCurrency);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleZipChange = (event) => {
    setZip(event.target.value);
  };

  return (
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center justify-center bg-white" 
    >
     <div className="w-60 px-5 text-1xl font-bold">
        <h4>This is a webpage that demonstrates a wholesale application form for a company called Seward Clothing.</h4>
     </div>
      <div className="bg-white rounded-lg shadow-lg p-8 justify-center">
        <img src="/Users/FuriousTyper/Developer/checkout/src/images/S.svg" alt="Seward Clothing"></img>
        <h2 className="text-2xl font-bold mb-4">Wholesale Application Seward Clothing</h2>
        <h4 className="text-1xl font-normal mb-4">Thank you for considering putting Seward Clothing items in your store! We'll need to know a bit more about you before we proceed.</h4>
        <div className="mb-4">
          <label className="block font-bold mb-2">
             Business Name:
          </label>  
          <input 
          id="business-name"
          type="text"
          className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />

          <label className="block font-bold mb-2">
             Phone Number:
          </label>  
          <input 
          id="phone-number"
          type="tel"
          className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          /> 

          <label className="block font-bold mb-2">
             Email:
          </label>  
          <input 
          id="email"
          type="email"
          className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />

          <label className="block font-bold mb-2" htmlFor="shipping-address">
            Shipping Address:
          </label>
          <input
            id="shipping-address"
            type="text"
            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={address}
            onChange={handleAddressChange}
          />

          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <label className="block font-bold mb-2" htmlFor="city">
              City:
              </label>
             <input
             id="city"
             type="text"
             className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             value={city}
             onChange={handleCityChange}
           />
        </div>
        <div className="w-1/2 pl-2">
         <label className="block font-bold mb-2" htmlFor="state">
         State:
        </label>
       <input
             id="state"
             type="text"
             className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             value={state}
             onChange={handleStateChange}
           />
      </div>
      </div>
      <div className="flex mb-4">
        <div className="w-1/2 pr-2">
          <label className="block font-bold mb-2" htmlFor="zip">
            Zip:
          </label>
          <input
            id="zip"
            type="text"
            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={zip}
            onChange={handleZipChange}
          />
        </div>
        <div className="w-1/2 pl-2">
          <label className="block font-bold mb-2" htmlFor="country">
            Country:
          </label>
          <input
            id="country"
            type="text"
            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">
          Currency:
        </label>
        <Select
          value={currency}
          onChange={handleCurrencyChange}
          options={CURRENCY_OPTIONS}
        />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">
          First Name:
        </label>
        <input
          type="text"
          className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">
          Last Name:
        </label>
        <input
          type="text"
          className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">
          Unit Order Amount:
        </label>
        <input
         type="number"
         className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
         min={12}
         />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">
          How do you sell products? Online? In-store? Both?
        </label>
        <input
         type="check"
         className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
         />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">
          What industry are you in?
        </label>
        <input
         type="text"
         className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
         />
      </div>

      <button className="bg-slate-500 hover:bg-black text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </div>
  </div>
</motion.div>
);
};

export default CheckoutPage;