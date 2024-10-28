// About.js
export default function About() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
            <h2 className="text-4xl font-bold text-green-600">About FitZone</h2>
            <p className="mt-4 text-xl text-gray-700">
                At FitZone, we believe in a holistic approach to fitness. Our mission is to create a welcoming environment where everyone can thrive and reach their potential.
            </p>
            <h3 className="mt-8 text-2xl font-semibold">Our Values</h3>
            <ul className="mt-4 text-left space-y-2 mx-auto max-w-xl">
                <li>🏋️ Community: Together, we achieve more.</li>
                <li>🌱 Growth: Every step is a step forward.</li>
                <li>💪 Empowerment: Your goals are our goals.</li>
            </ul>
        </div>
    );
}
