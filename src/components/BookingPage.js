import React, { useReducer, useEffect } from "react";
import BookingForm from "./BookingForm.js";
import "../css/BookingForm.css";

const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = s * a % m) / m;
  };
};

const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
    if(random() < 0.5) {
      result.push(i + ':00');
    }
    if(random() < 0.5) {
      result.push(i + ':30');
    }
  }
  return result;
};

const submitAPI = function(formData) {
  console.log("Submitting form data to API:", formData);
  return true;
};
const initializeTimes = () => {
  return fetchAPI(new Date());
};


// Reducer function to handle state updates
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'update':
      return {
        ...state,
        availableTimes: fetchAPI(new Date(action.date))
      };
    case 'add_booking':
      const updatedBookings = [...state.bookings, action.payload];
      localStorage.setItem('bookings', JSON.stringify(updatedBookings)); // Save to local storage
      console.log('Local storage updated:', localStorage.getItem('bookings')); // Log local storage
      return {
        ...state,
        bookings: updatedBookings,
      };
    default:
      return state;
  }
};

function BookingPage() {
  const initialState = {
    bookings: JSON.parse(localStorage.getItem('bookings')) || [], // Load from local storage
    availableTimes: initializeTimes(),
  };

  const [state, dispatch] = useReducer(updateTimes, initialState);

  useEffect(() => {
    // Fetch times for today's date on component mount
    const today = new Date().toISOString().split('T')[0];
    dispatch({ type: 'update', date: today });
  }, []);

  // Debugging: log state changes
  useEffect(() => {
    console.log("State updated:", state);
  }, [state]);

  const submitForm = (formData) => {
    const result = submitAPI(formData);
    if (result) {
      dispatch({ type: 'add_booking', payload: formData }); // Add booking and save to local storage
      console.log("Form submitted:", formData); // Debugging: log submitted form data
    }
    return result;
  };

  return (
    <>
      <div id="booking-page">
        <h1 className="booking-title">Book a Table</h1>
      </div>
      <BookingForm availableTimes={state.availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </>
  );
}

export default BookingPage;
