import React, { useState } from 'react';
import './createPlan.css';

const availableEquipment = [
  { id: 1, name: 'Treadmill' },
  { id: 2, name: 'Dumbbells' },
  { id: 3, name: 'Stationary Bike' },
  { id: 4, name: 'Rowing Machine' },
  { id: 5, name: 'Jump Rope' },
];

const CreatePlan = () => {
  const [currentWeight, setCurrentWeight] = useState('');
  const [targetWeight, setTargetWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., saving the plan data
    console.log(`Current Weight: ${currentWeight}, Target Weight: ${targetWeight}`);
  };

  return (
    <div className="create-plan-container">
      <div className="card">
        <h1>Create Your Fitness Plan</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="currentWeight">Current Weight:</label>
            <input
              type="number"
              id="currentWeight"
              value={currentWeight}
              onChange={(e) => setCurrentWeight(e.target.value)}
              placeholder="Enter your current weight"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="targetWeight">Target Weight:</label>
            <input
              type="number"
              id="targetWeight"
              value={targetWeight}
              onChange={(e) => setTargetWeight(e.target.value)}
              placeholder="Enter your target weight"
              required
            />
          </div>

          <button type="submit" className="submit-button">Create Plan</button>
        </form>
      </div>

      <div className="card">
        <h2>Available Equipment</h2>
        <ul className="equipment-list">
          {availableEquipment.map((equipment) => (
            <li key={equipment.id}>{equipment.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreatePlan;
