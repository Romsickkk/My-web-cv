import { useState } from 'react';
import { z } from 'zod';
import Button from './Button';

const formSchema = z.object({
    username: z.string().min(1, 'Enter your name'),
    email: z.email('Invalid email address'),
    phone: z
        .string()
        .optional()
        .refine((val) => !val || val.replace(/\D/g, '').length >= 3, {
            message: 'Phone must contain at least 3 digits',
        })
        .refine((val) => !val || /^[\d+]+$/.test(val), {
            message: 'Only numbers and + are allowed',
        })
        .refine((val) => !val || val.replace(/\D/g, '').length <= 20, {
            message: 'Phone must contain no more than 20 digits',
        }),
    text: z.string().min(1, 'Write your message').max(250, 'Maximum 250 characters allowed'),
});

type FormData = z.infer<typeof formSchema>;

function CustomForm() {
    const inputStyles = 'border-b-4 border-l-4 border-black shadow-md focus:outline-none font-montserrat font-bold p-2  w-full max-w-md';
    const errorStyles = 'font-montserrat mt-1 text-sm font-bold text-red-500';

    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

    const [formData, setFormData] = useState<FormData>({
        username: '',
        email: '',
        phone: '',
        text: '',
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: name === 'phone' ? value.replace(/[^0-9+]/g, '') : value,
        }));
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setErrors({});
        console.log('click');
        const result = formSchema.safeParse(formData);
        if (!result.success) {
            const fieldErrors: Partial<Record<keyof FormData, string>> = {};
            console.log('Не валидна:', formData);
            result.error.issues.forEach((issue) => {
                const field = issue.path[0] as keyof FormData;
                if (!fieldErrors[field]) {
                    fieldErrors[field] = issue.message;
                }
            });

            setErrors(fieldErrors);
            return;
        }

        console.log('Форма валидна:', formData);
    }
    return (
        <form onSubmit={handleSubmit} className="flex w-full flex-col items-center gap-10">
            {/* Username */}
            <div className="w-full max-w-md">
                <input
                    type="text"
                    name="username"
                    placeholder="ENTER YOUR NAME*"
                    className={inputStyles}
                    value={formData.username}
                    onChange={handleChange}
                />
                {errors.username && <p className={errorStyles}>{errors.username}</p>}
            </div>

            {/* Email */}
            <div className="w-full max-w-md">
                <input
                    type="text"
                    name="email"
                    placeholder="ENTER YOUR EMAIL*"
                    className={inputStyles}
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p className={errorStyles}>{errors.email}</p>}
            </div>

            {/* Phone */}
            <div className="w-full max-w-md">
                <input type="text" name="phone" placeholder="PHONE NUMBER" className={inputStyles} value={formData.phone} onChange={handleChange} />
                {errors.phone && <p className={errorStyles}>{errors.phone}</p>}
            </div>

            {/* Message */}
            <div className="w-full max-w-md">
                <textarea
                    name="text"
                    placeholder="YOUR MESSAGE*"
                    className={`${inputStyles} h-40 resize-none`}
                    value={formData.text}
                    onChange={handleChange}
                />
                {errors.text && <p className={errorStyles}>{errors.text}</p>}
            </div>

            <Button text="SUBMIT" onClick={handleSubmit} color="black" />
        </form>
    );
}

export default CustomForm;
