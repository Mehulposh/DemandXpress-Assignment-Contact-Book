const Button = ({ children, className = "", disabled, ...props }) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
};


export default Button