import Link from 'next/link';

const FeaturesSection = () => {
  const features = [
    {
      name: 'Image Compression',
      link: '/compress',
      description: 'Shrink image sizes quickly without losing quality.'
    },
    {
      name: 'PNG to JPG',
      link: '/convert/png-to-jpg',
      description: 'Convert your PNG images to JPG effortlessly.'
    },
    {
      name: 'JPG to PNG',
      link: '/convert/jpg-to-png',
      description: 'Easily switch your JPG images to PNG format.'
    },
    // Add more feature boxes as needed
  ];

  return (
    <section className="py-16 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-[40px] font-bold text-orange-400 text-center mb-12">
          <span className='text-orange-400'>Feat</span><span className='text-orange-500'>ures</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Link key={feature.name} legacyBehavior href={feature.link}>
              <a className="block h-full">
                <div className="h-full p-[2px] bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 hover:shadow-[0_0_15px_3px_rgba(251,146,60,0.5)]">
                  <div className="h-full flex flex-col p-6 bg-zinc-800 rounded-xl hover:bg-zinc-700 transition-colors duration-300 shadow-xl">
                    <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                      {feature.name}
                    </h3>
                    <p className="text-base text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
