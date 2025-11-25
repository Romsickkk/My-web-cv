<h2>New Contact Form Submission</h2>

<p><strong>Name:</strong> {{ $data['username'] }}</p>
<p><strong>Email:</strong> {{ $data['email'] }}</p>
<p><strong>Phone:</strong> {{ $data['phone'] ?? 'N/A' }}</p>
<p><strong>Message:</strong></p>
<p>{{ $data['text'] }}</p>