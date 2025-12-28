import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  if (variant === 'primary') {
    return (
      <button
        className={`group relative px-8 py-4 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_40px_rgba(220,38,38,0.5)] ${className}`}
        {...props}
      >
        {/* Subtle Border Beam Effect - Active on Hover */}
        <span className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-full">
            <span className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] animate-spin-slow" />
        </span>
        
        {/* Button Background - Slightly smaller to show the beam as a border */}
        <span className="absolute inset-[1.5px] z-1 rounded-full bg-red-600 group-hover:bg-red-700 transition-colors duration-300" />

        {/* Content */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </button>
    );
  }

  return (
    <button
      className={`px-8 py-4 border border-white/20 text-white font-bold rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/40 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;