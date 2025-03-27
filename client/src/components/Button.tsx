export const Button = ({onClick}: {onClick : () => void}) => {
  return (
    <div className="mt-8">
      <button 
      onClick={onClick}
      className="px-8 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(255,223,0,0.5)] transition-transform duration-300">
        Get Started
      </button>
    </div>
  );
};
