import React, { useState } from 'react';

const RegistrationFormPopup = () => {
  // State for form fields and OTP
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [gmail, setGmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Function to handle OTP sending (simulate sending)
  const handleSendOtp = () => {
    setIsOtpSent(true);
    alert("OTP sent to your Gmail. Please check your inbox!");
  };

  // Function to handle OTP verification (simulate verification)
  const handleVerifyOtp = () => {
    if (otp === "123456") {  // Placeholder OTP
      setIsVerified(true);
      alert("OTP verified successfully!");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isVerified) {
      alert("Registration successful!");
      setShowPopup(false);  // Close the popup after registration
    } else {
      alert("Please verify the OTP before submitting.");
    }
  };

  return (
    <>
      {/* Button to open the popup */}
      <button 
        onClick={() => setShowPopup(true)} 
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Get More Updates
      </button>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold mb-4 text-center">Register for Updates</h2>

            <form onSubmit={handleSubmit}>
              <label className="block text-gray-700 mb-2">Name</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required 
              />

              <label className="block text-gray-700 mb-2">Mobile Number</label>
              <input 
                type="tel" 
                value={mobile} 
                onChange={(e) => setMobile(e.target.value)} 
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required 
              />

              <label className="block text-gray-700 mb-2">Gmail</label>
              <input 
                type="email" 
                value={gmail} 
                onChange={(e) => setGmail(e.target.value)} 
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required 
              />

              {/* OTP Section */}
              {isOtpSent && (
                <>
                  <label className="block text-gray-700 mb-2">Enter OTP</label>
                  <input 
                    type="text" 
                    value={otp} 
                    onChange={(e) => setOtp(e.target.value)} 
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    required 
                  />

                  <button 
                    type="button" 
                    onClick={handleVerifyOtp} 
                    className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 mb-4"
                  >
                    Verify OTP
                  </button>
                </>
              )}

              {/* Send OTP button if OTP hasn't been sent yet */}
              {!isOtpSent && (
                <button 
                  type="button" 
                  onClick={handleSendOtp} 
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 mb-4"
                >
                  Send OTP
                </button>
              )}

              {/* Submit button */}
              <button 
                type="submit" 
                className={`w-full py-2 rounded-lg ${isVerified ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
                disabled={!isVerified}
              >
                Register
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default RegistrationFormPopup;
