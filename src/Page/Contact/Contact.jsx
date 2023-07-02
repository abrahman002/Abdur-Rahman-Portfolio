import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Contact = () => {
    const sendMessage = async () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        try {
            await axios.post('/api/sendEmail', {
                name,
                email,
                subject,
                message,
            });
            Swal.fire({
                title: 'Email sent successfully!',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
        } catch (error) {
            console.error('Error sending email:', error);
            Swal.fire({
                title: 'Error sending email. Please try again later.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
        }
    };
    return (
        <div className="p-10">
            <div className="text-center p-7">
                <h1 className="lg:text-3xl text-sm font-semibold">Have any questions in mind?</h1>
                <p className="text-sm text-gray-400">Just send me a quick message, and I'll contact you ASAP</p>
            </div>
            <div className="max-w-md mx-auto">
                <div className="bg-white rounded shadow p-6">
                    <div className="mb-4">
                        <label htmlFor="name" className="text-sm font-semibold text-black">
                            Name
                        </label>
                        <input type="text" id="name" placeholder="Name" className="w-full border rounded py-2 px-3 mt-1" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-sm font-semibold text-black">
                            Email
                        </label>
                        <input type="email" id="email" placeholder="Email" className="w-full border rounded py-2 px-3 mt-1" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="subject" className="text-sm font-semibold text-black">
                            Subject
                        </label>
                        <input type="text" id="subject" placeholder="Subject" className="w-full border rounded py-2 px-3 mt-1" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="text-sm font-semibold text-black">
                            Message
                        </label>
                        <textarea id="message" className="w-full border rounded py-2 px-3 mt-1 resize-none" placeholder="Message"></textarea>
                    </div>
                    <div className="mt-6">
                        <button
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
                            onClick={sendMessage}
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
