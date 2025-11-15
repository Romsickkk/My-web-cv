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
    const inputStyles = ' shadow-md focus:outline-none font-montserrat font-bold p-2 w-full max-w-md ';
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
        <form onSubmit={handleSubmit} className="fade-in-up flex w-150 flex-col items-center gap-10 px-5 duration-300 max-sm:w-100">
            {/* Username */}

            <div className="w-full max-w-md">
                <div className="animation-delay-100 fade-in-up relative w-full max-w-md overflow-hidden">
                    <input
                        type="text"
                        name="username"
                        placeholder="ENTER YOUR NAME*"
                        className={`${inputStyles} fade-in-up`}
                        value={formData.username}
                        onChange={handleChange}
                    />

                    <span className="absolute bottom-0 left-0 h-[4px] w-0 animate-[growWidth_1s_ease-out_forwards] bg-black" />
                    <span className="absolute bottom-0 left-0 h-0 w-[4px] animate-[growHeight_1s_ease-out_forwards] bg-black" />
                </div>

                {errors.username && <p className={errorStyles}>{errors.username}</p>}
            </div>
            {/* Email */}
            <div className="w-full max-w-md">
                <div className="animation-delay-200 fade-in-up relative w-full max-w-md overflow-hidden">
                    <input
                        type="text"
                        name="email"
                        placeholder="ENTER YOUR EMAIL*"
                        className={`${inputStyles} fade-in-up animation-delay-300`}
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <span className="absolute bottom-0 left-0 h-[4px] w-0 animate-[growWidth_1.3s_ease-out_forwards] bg-black" />
                    <span className="absolute bottom-0 left-0 h-0 w-[4px] animate-[growHeight_1.3s_ease-out_forwards] bg-black" />
                </div>

                {errors.email && <p className={errorStyles}>{errors.email}</p>}
            </div>
            {/* Phone */}
            <div className="w-full max-w-md delay-250">
                <div className="animation-delay-300 fade-in-up relative w-full max-w-md overflow-hidden">
                    <input
                        type="text"
                        name="phone"
                        placeholder="PHONE NUMBER"
                        className={`${inputStyles} fade-in-up animation-delay-500`}
                        value={formData.phone}
                        onChange={handleChange}
                    />

                    <span className="absolute bottom-0 left-0 h-[4px] w-0 animate-[growWidth_1.7s_ease-out_forwards] bg-black" />
                    <span className="absolute bottom-0 left-0 h-0 w-[4px] animate-[growHeight_1.7s_ease-out_forwards] bg-black" />
                </div>

                {errors.phone && <p className={errorStyles}>{errors.phone}</p>}
            </div>
            {/* Message */}
            <div className="w-full max-w-md">
                <div className="animation-delay-400 fade-in-up relative w-full max-w-md overflow-hidden">
                    <textarea
                        name="text"
                        placeholder="YOUR MESSAGE*"
                        className={`${inputStyles} animation-delay-700 fade-in-up h-40 resize-none delay-300 [clip-path:polygon(0%_10px,10px_0%,100%_0%,100%_100%,0%_100%)]`}
                        value={formData.text}
                        onChange={handleChange}
                    />
                    <span className="absolute bottom-0 left-0 h-[4px] w-0 animate-[growWidth_2s_ease-out_forwards] bg-black" />
                    <span className="absolute bottom-0 left-0 h-0 w-[4px] animate-[growHeight_2s_ease-out_forwards] bg-black [clip-path:polygon(0%_10px,10px_0%,100%_0%,100%_100%,0%_100%)]" />
                </div>

                {errors.text && <p className={errorStyles}>{errors.text}</p>}
            </div>

            <Button text="SUBMIT" onClick={handleSubmit} color="black" />
        </form>
    );
}

export default CustomForm;
