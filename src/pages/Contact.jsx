import { useState } from 'react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        if (!e.target.value) {
            setErrors({ ...errors, [e.target.name]: `${e.target.name} is required` });
        } else {
            setErrors({ ...errors, [e.target.name]: '' });
        }
        if (e.target.name === 'email' && !validateEmail(e.target.value)) {
            setErrors({ ...errors, email: 'Invalid email address' });
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div className="contact">
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formState.name} onChange={handleChange} />
                    {errors.name && <span className="error">{errors.name}</span>}
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formState.email} onChange={handleChange} />
                    {errors.email && <span className="error">{errors.email}</span>}
                </label>
                <label>
                    Message:
                    <textarea name="message" value={formState.message} onChange={handleChange}></textarea>
                    {errors.message && <span className="error">{errors.message}</span>}
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;