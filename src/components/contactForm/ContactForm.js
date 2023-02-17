import React from 'react';

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  alert
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nameInput">Name</label>
      <input type='text' 
             value={name} 
             onChange={(e) => setName(e.target.value)} 
             id='nameInput' 
             required />
      <label htmlFor="phoneInput">Phone</label>
      <input type='tel' 
             value={phone} 
             onChange={(e) => setPhone(e.target.value)}
             pattern="^\s*\(?(020[7,8]{1}\)?[ ]?[1-9]{1}[0-9{2}[ ]?[0-9]{4})|(0[1-8]{1}[0-9]{3}\)?[ ]?[1-9]{1}[0-9]{2}[ ]?[0-9]{3})\s*$"
             id='phoneInput'
             required />
      <label htmlFor="emailInput">Email</label>
      <input type='email' 
             value={email} 
             onChange={(e) => setEmail(e.target.value)}
             id='emailInput'
             required />
      <input type='submit' 
             value='Add Contact' 
             disabled={alert ? true : false}
             id='addContactButton' />
      <h2 className="alert">{alert}</h2>
    </form>
  );
};
