// Testimonials.js
const testimonialsData = [
    { name: 'Emily R.', feedback: 'FitZone changed my life! The community is so supportive.' },
    { name: 'Michael B.', feedback: 'The trainers are amazing, and I’ve seen great results.' },
];

export default function Testimonials() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold text-green-600 text-center">What Our Members Say</h2>
            <div className="mt-8 space-y-6">
                {testimonialsData.map((testimonial) => (
                    <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-700 italic">{testimonial.feedback}</p>
                        <p className="mt-4 font-bold">- {testimonial.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
