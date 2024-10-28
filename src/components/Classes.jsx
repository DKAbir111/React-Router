// Classes.js
const classesData = [
    { name: 'Yoga', description: 'Enhance flexibility and mindfulness.', schedule: 'Mon/Wed - 6 PM' },
    { name: 'HIIT', description: 'High-Intensity Interval Training for maximum burn.', schedule: 'Tue/Thu - 7 PM' },
    { name: 'Zumba', description: 'Dance your way to fitness!', schedule: 'Fri - 5 PM' },
];

export default function Classes() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold text-green-600 text-center">Our Classes</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {classesData.map((classInfo) => (
                    <div key={classInfo.name} className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold">{classInfo.name}</h3>
                        <p className="mt-2 text-gray-700">{classInfo.description}</p>
                        <p className="mt-4 font-bold">{classInfo.schedule}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
