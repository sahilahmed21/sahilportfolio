"use client";
import { useState, useRef, FormEvent, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";

interface AlertProps {
    show: boolean;
    text: string;
    type: 'success' | 'danger';
}

interface AlertState {
    show: boolean;
    text: string;
    type: 'success' | 'danger';
}

interface FormData {
    name: string;
    email: string;
    message: string;
}

// Simplified Alert Component
const Alert = ({ show, text, type }: AlertProps) => {
    if (!show) return null;
    return (
        <div
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-md text-white ${type === "success" ? "bg-green-500" : "bg-red-500"
                }`}
        >
            {text}
        </div>
    );
};

// Simplified useAlert Hook
const useAlert = () => {
    const [alert, setAlert] = useState<AlertState>({ show: false, text: "", type: "success" });

    const showAlert = ({ text, type }: Omit<AlertState, 'show'>) => {
        setAlert({ show: true, text, type });
    };

    const hideAlert = () => {
        setAlert({ show: false, text: "", type: "success" });
    };

    return { alert, showAlert, hideAlert };
};

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const { alert, showAlert, hideAlert } = useAlert();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });

    const handleChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
                {
                    from_name: form.name,
                    to_name: "Sahil Ahmed Khan", // Replace with your name
                    from_email: form.email,
                    to_email: "sahilahmedpbuh@gmail.com", // Replace with your email
                    message: form.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
            )
            .then(
                () => {
                    setLoading(false);
                    showAlert({
                        text: "Thank you for your message 😃",
                        type: "success",
                    });

                    setTimeout(() => {
                        hideAlert();
                        setForm({
                            name: "",
                            email: "",
                            message: "",
                        });
                    }, 3000);
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    showAlert({
                        text: "I didn't receive your message 😢",
                        type: "danger",
                    });
                }
            );
    };

    return (
        <section id="contact" className="py-16 px-4 sm:px-8 md:px-24 max-w-6xl mx-auto">
            {alert.show && <Alert {...alert} />}

            <h2 className="text-3xl font-bold mb-8 sm:mb-10" style={{ color: "#373A40" }}>
                <span style={{ color: "#021526" }}>Contact me</span>
            </h2>
            <div className="max-w-lg mx-auto bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-gray-800">
                <p className="text-lg sm:text-xl mb-4 sm:mb-6" style={{ color: "#F5F5F5" }}>
                    If you're interested in working together or have any questions, feel free to reach out.
                </p>
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4" style={{ color: "#F5F5F5" }}>
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium" style={{ color: "#F5F5F5" }}>
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full p-3 bg-gray-900/60 border border-gray-700 rounded-md focus:border-[#021526] focus:outline-none"
                            style={{ color: "#F5F5F5" }}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium" style={{ color: "#F5F5F5" }}>
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full p-3 bg-gray-900/60 border border-gray-700 rounded-md focus:border-[#021526] focus:outline-none"
                            style={{ color: "#F5F5F5" }}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium" style={{ color: "#F5F5F5" }}>
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full p-3 bg-gray-900/60 border border-gray-700 rounded-md focus:border-[#021526] focus:outline-none"
                            style={{ color: "#F5F5F5" }}
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-6 py-3 bg-transparent border rounded-md hover:bg-[#A6AEBF]/10 transition-all duration-300"
                        style={{ borderColor: "#021526", color: "#A6AEBF" }}
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
}