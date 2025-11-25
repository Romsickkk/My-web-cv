import { useT } from '@/context/LangContext';

import sendForm from '@/services/sendForm';
import { useState } from 'react';
import { z } from 'zod';
import Button from './Button';
type CustomFormProps = {
    setSended: React.Dispatch<React.SetStateAction<boolean>>;
    isLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

function CustomForm({ setSended, isLoading }: CustomFormProps) {
    //
    type FormData = z.infer<typeof formSchema>;
    const t = useT();
    const formSchema = z.object({
        username: z.string().min(1, t.contact.nameError1).max(50, t.contact.nameError2),
        email: z.email(t.contact.emailError1).max(50, t.contact.emailError2),
        phone: z
            .string()
            .optional()
            .refine((val) => !val || val.replace(/\D/g, '').length >= 3, {
                message: t.contact.phoneError1,
            })
            .refine((val) => !val || /^[\d+]+$/.test(val), {
                message: t.contact.phoneError2,
            })
            .refine((val) => !val || val.replace(/\D/g, '').length <= 20, {
                message: t.contact.phoneError3,
            }),
        text: z.string().min(1, t.contact.messageError1).max(250, t.contact.messageError2),
    });

    //
    const inputStyles = ' shadow-md focus:outline-none font-montserrat font-bold p-2 w-full max-w-md ';
    const errorStyles = 'font-montserrat mt-1 text-sm font-bold text-red-500';

    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
    const [isError, setIsError] = useState(false);

    const [formData, setFormData] = useState<FormData>({
        username: '',
        email: '',
        phone: '',
        text: '',
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;

        setFormData((prev) => {
            let newValue = value;

            if (name === 'username') {
                newValue = value.replace(/[^\p{L}\s]/gu, '');
            }

            if (name === 'phone') {
                newValue = value.replace(/[^\d+]/g, '').replace(/(?!^)\+/g, '');
            }

            return { ...prev, [name]: newValue };
        });
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        setTimeout(() => {
            setIsError(false);
        }, 3000);
        setErrors({});

        const result = formSchema.safeParse(formData);
        if (!result.success) {
            const fieldErrors: Partial<Record<keyof FormData, string>> = {};

            result.error.issues.forEach((issue) => {
                const field = issue.path[0] as keyof FormData;
                if (!fieldErrors[field]) {
                    fieldErrors[field] = issue.message;
                }
            });

            setErrors(fieldErrors);
            return;
        }

        try {
            isLoading(true);
            await sendForm(formData);

            // console.log(response);
            isLoading(false);
            setSended(true);
        } catch (error) {
            isLoading(false);
            // console.log(error);
            setIsError(true);

            setTimeout(() => {
                setIsError(false);
            }, 2000);
        }
    }
    return (
        <form onSubmit={handleSubmit} className="fade-in-up flex w-150 flex-col items-center gap-10 px-5 duration-300 max-sm:w-100">
            {/* Username */}
            <div className="w-full max-w-md">
                <div className="animation-delay-100 fade-in-up relative w-full max-w-md overflow-hidden">
                    <input
                        type="text"
                        name="username"
                        placeholder={`${t.contact.name}*`}
                        className={`${inputStyles} no-drag-scroll fade-in-up`}
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
                        placeholder={`${t.contact.email}*`}
                        className={`${inputStyles} no-drag-scroll fade-in-up animation-delay-300`}
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
                        placeholder={`${t.contact.phone}`}
                        className={`${inputStyles} no-drag-scroll fade-in-up animation-delay-500`}
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
                        placeholder={`${t.contact.message}*`}
                        className={`${inputStyles} no-drag-scroll animation-delay-700 fade-in-up h-40 resize-none overflow-hidden delay-300 [clip-path:polygon(0%_10px,10px_0%,100%_0%,100%_100%,0%_100%)]`}
                        value={formData.text}
                        onChange={handleChange}
                    />
                    <span className="absolute bottom-0 left-0 h-[4px] w-0 animate-[growWidth_2s_ease-out_forwards] bg-black" />
                    <span className="absolute bottom-0 left-0 h-0 w-[4px] animate-[growHeight_2s_ease-out_forwards] bg-black [clip-path:polygon(0%_10px,10px_0%,100%_0%,100%_100%,0%_100%)]" />
                </div>

                {errors.text && <p className={errorStyles}>{errors.text}</p>}
            </div>
            <Button text={t.contact.button} onClick={handleSubmit} color="black" />
            {isError && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=roman.babayan1133@gmail.com"
                        className="animate-fadeInOut text-bold rounded-lg bg-black/70 px-6 py-3 text-xl font-bold text-white underline"
                    >
                        {t.contact.formErrorMessage}
                    </a>
                </div>
            )}
        </form>
    );
}

export default CustomForm;
