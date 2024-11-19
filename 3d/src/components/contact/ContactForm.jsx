import React, { useState } from 'react';
import Swal from 'sweetalert2';
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
    const [recaptchaToken, setRecaptchaToken] = useState(null);

    const onSubmit = async (event) => {
        event.preventDefault();

        // Check if reCAPTCHA is completed
        if (!recaptchaToken) {
            Swal.fire({
                icon: "warning",
                title: "Please complete the reCAPTCHA",
            });
            return; // Stop form submission if reCAPTCHA is not completed
        }

        const formData = new FormData(event.target);
        formData.append("access_key", "05176a54-0a32-44a1-b11e-42dc0b892079");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            if (res.success) {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
                event.target.reset();
                setRecaptchaToken(null); // Reset reCAPTCHA token after successful submission
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            }
        } catch (error) {
            console.error("Error submitting form", error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Network error. Please try again later.",
            });
        }
    };

    const onChange = (value) => {
        setRecaptchaToken(value); // Store the token in state when reCAPTCHA is completed
    };

    return (
        <section className="flex justify-center items-center min-h-screen bg-purple-500">
            <form 
                className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg space-y-6" 
                onSubmit={onSubmit}
            >
                <h2 className="text-3xl text-center font-semibold">Contact Form</h2>
                
                <div className="space-y-2">
                    <label className="block text-gray-700">Full name</label>
                    <input 
                        type="text" 
                        name="name"
                        className="w-full h-12 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500" 
                        placeholder="Enter your name" 
                        required 
                    />
                </div>
                
                <div className="space-y-2">
                    <label className="block text-gray-700">Email</label>
                    <input 
                        type="email" 
                        name="email"
                        className="w-full h-12 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500" 
                        placeholder="Enter your email" 
                        required 
                    />
                </div>
                
                <div className="space-y-2">
                    <label className="block text-gray-700">Your message</label>
                    <textarea 
                        name="message"
                        className="w-full h-48 px-4 py-2 border-2 border-gray-300 rounded-lg resize-none focus:outline-none focus:border-purple-500" 
                        placeholder="Enter your message" 
                        required 
                    ></textarea>
                </div>
                
                {/* reCAPTCHA Component */}
                <ReCAPTCHA
                    sitekey="6LfKZYEqAAAAALp_MZEioD5PKbeOGb--km21dueT"
                    onChange={onChange}
                />

                <button 
                    type="submit"
                    className="w-full h-14 bg-purple-500 text-white font-medium rounded-lg shadow-md hover:bg-purple-600 transition duration-300"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
}

export default ContactForm;
