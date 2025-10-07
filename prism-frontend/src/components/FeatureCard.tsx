export const FeatureCard: React.FC<Feature> = ({ icon: Icon, title, description }) => (
    <div className="p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
        <div className="flex items-center space-x-4 mb-3">
            {/* FIX: Render the icon component dynamically (using a capital letter 'Icon' convention) */}
            <Icon className="w-8 h-8 text-red-500" />
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);

interface Feature {
    // FIX: Using React.ElementType is the correct type for passing a component reference
    icon: React.ElementType; 
    title: string;
    description: string;
}