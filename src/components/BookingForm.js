import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'update', date: selectedDate });
  };

  const handleTimeChange = (e) => setTime(e.target.value);
  const handleGuestsChange = (e) => setGuests(e.target.value);
  const handleOccasionChange = (e) => setOccasion(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    console.log("Form data being submitted:", formData); // Debugging: log form data

    
    try {
      const result = submitForm(formData);
      if (result) {
        alert("Reservation successfully submitted!");
        setError(""); 
        // Ensure data is saved before navigation
        setTimeout(() => {
          navigate("/confirmed"); // Redirect to booking confirmed page
        }, 100);
      } else {
        setError("Failed to submit reservation.");
      }
    } catch (error) {
      setError("An error occurred while submitting the reservation.");
      console.error(error);
    }
  };

  return (
    <div className="form">
      <form
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
        aria-labelledby="form-title"
        onSubmit={handleSubmit}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
        />

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={handleTimeChange}>
          {(Array.isArray(availableTimes) ? availableTimes : []).map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={handleGuestsChange}
        />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={handleOccasionChange}>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <input className="res-button" type="submit" value="Make Your Reservation" />
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default BookingForm;
