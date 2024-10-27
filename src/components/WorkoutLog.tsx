// src/components/WorkoutLog.tsx
import React, { useState } from "react";
import "./WorkoutLog.css"; // Style the component

const WorkoutLog = () => {
  const [workoutType, setWorkoutType] = useState("");
  const [duration, setDuration] = useState(0);
  const [intensity, setIntensity] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newWorkoutRef = doc(db, "workouts", "uniqueID"); // Replace 'uniqueID' with a unique ID generator function
      await setDoc(newWorkoutRef, {
        workoutType,
        duration,
        intensity,
        createdAt: new Date().toISOString(),
      });
      setMessage("Workout logged successfully!");
    } catch (error) {
      console.error("Error logging workout:", error);
      setMessage("Failed to log workout. Please try again.");
    }
  };

  return (
    <div className="workout-log-container">
      <form onSubmit={handleSubmit} className="workout-log-form">
        <h3>Log Your Workout</h3>
        {message && <p className="message">{message}</p>}
        <input
          type="text"
          placeholder="Workout Type"
          value={workoutType}
          onChange={(e) => setWorkoutType(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Duration (mins)"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          required
        />
        <input
          type="text"
          placeholder="Intensity (e.g., light, moderate, hard)"
          value={intensity}
          onChange={(e) => setIntensity(e.target.value)}
          required
        />
        <button type="submit">Log Workout</button>
      </form>
    </div>
  );
};

export default WorkoutLog;
