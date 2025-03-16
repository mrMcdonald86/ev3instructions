import { useState } from 'react';
import RenderModel from './RenderModel';
import 'bootstrap/dist/css/bootstrap.min.css';

const StepViewer = ({ totalSteps }) => {
  const [step, setStep] = useState(1);
  const [inputValue, setInputValue] = useState(step); // Store the input temporarily

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1 && value <= totalSteps) {
      setInputValue(value); // Update the input value
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setStep(inputValue); // Submit the input when Enter is pressed
    }
  };

  return (
    <div
      className="d-flex flex-column vh-100"
    >
      <div className="d-flex flex-grow-1">
        <div className="col-8 d-flex justify-content-center align-items-center text-white">
          <img 
            src={`/images/steps_page-${step.toString().padStart(4, '0')}.jpg`} 
            alt={`Step ${step.toString().padStart(4, '0')}`} 
            className="img-fluid" 
            style={{ objectFit: 'contain', maxHeight: '80vh', maxWidth: '80vw' }} 
          />
        </div>
        <RenderModel s={step} />
      </div>
      
      

      {/* The bottom navbar */}
      <div
        className={`d-flex bg-secondary text-white text-center p-3 position-fixed bottom-0 w-100 transition-opacity opacity-100`}
        style={{
          backgroundColor: 'rgba(128, 128, 128, 0.5)', // Grey with transparency
          transition: 'opacity 0.3s ease', // Smooth opacity transition
        }}

      >
        <div className="d-flex justify-content-center align-items-center gap-3 w-100 opacity-100">
          <button onClick={handlePrevious} className="btn btn-light opacity-100">◀️</button>
          <div className='opacity-100'>
            <label className="me-2">Page Number:</label>
            <input
              type="number"
              min="1"
              max={totalSteps}
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}  // Listen for Enter key press
              className="form-control d-inline w-50"
            />
          </div>
          <button onClick={handleNext} className="btn btn-light">▶️</button>
        </div>
      </div>
    </div>
  );
};

const App = () => <StepViewer totalSteps={68} />;

export default App;
