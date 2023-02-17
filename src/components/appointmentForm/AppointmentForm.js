import React from 'react';
import { ContactPicker } from '../../components/contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
  alert,
  defaultListValue
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString('en-US')
      .split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='titleInput'>Title</label>
      <input type='text' 
             value={title} 
             onChange={(e) => setTitle(e.target.value)} 
             id='titleInput' 
             required />
      <ContactPicker contacts={contacts}
                     contact={contact}
                     onChange={(e) => setContact(e.target.value)}
                     defaultListValue={defaultListValue} />
      <label htmlFor='dateInput'>Date</label>
      <input type='date' 
             value={date} 
             min={getTodayString}
             onChange={(e) => setDate(e.target.value)}
             id='dateInput'
             required />
      <label htmlFor='timeInput'>Time</label>
      <input type='time' 
             value={time} 
             onChange={(e) => setTime(e.target.value)}
             id='timeInput'
             required />
      <input type='submit' 
             value='Create Appointment' 
             disabled={alert ? true : false}
             id='createAppointmentButton' />
      <h2 className='alert'>{alert}</h2>
    </form>
  );
};
