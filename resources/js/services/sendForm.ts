type SendFormProps = {
    username: string;
    email: string;
    text: string;
    phone?: string;
};

async function sendForm(formData: SendFormProps) {
    const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

    const response = await fetch(`${import.meta.env.VITE_API_URL}/form`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': token || '',
        },
    });
    if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
    }
    return await response.json();
}

export default sendForm;
