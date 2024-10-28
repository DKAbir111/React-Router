// Trainers.js
const trainersData = [
    { name: 'John Doe', specialty: 'Strength Training', bio: 'Passionate about helping clients build strength and confidence.' },
    { name: 'Jane Smith', specialty: 'Yoga & Mindfulness', bio: 'Dedicated to promoting mental wellness through yoga.' },
];

export default function Trainers() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold text-green-600 text-center">Meet Our Trainers</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {trainersData.map((trainer) => (
                    <div key={trainer.name} className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold">{trainer.name}</h3>
                        <p className="mt-2 text-gray-700"><strong>Specialty:</strong> {trainer.specialty}</p>
                        <p className="mt-4">{trainer.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
