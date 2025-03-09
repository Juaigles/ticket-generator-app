const Button = ({ children, onClick, variant = "primary", type = "button" }) => {
  const baseStyles =
    "px-6 py-3 font-bold rounded-[var(--radius-16)] transition-colors";

  const variants = {
    primary:
      "bg-[#F57463] text-white hover:bg-[#E1604F]",
    secondary:
      "bg-[var(--color-neutral-200)] text-[var(--color-text)] hover:bg-[var(--color-neutral-300)]",
    outline:
      "border border-[var(--color-orange-500)] text-[var(--color-orange-500)] hover:bg-[var(--color-orange-50)]",
  };

  return (
    <button
      type={type}
      className={`
          ${baseStyles} 

          ${variants[variant]} 
          flex
          items-center
          justify-center

          w-full h-[54px]
          px-4
          py-6

          text-[#0D082D]
          text-[20px]
          font-extrabold

          hover:shadow-[0_4px_0_0_#F57463] 
        
          focus:outline-none  
          focus:shadow-[0_0_0_3px_#0D082D,0_0_0_4px_#FFFFFF] 

          `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
