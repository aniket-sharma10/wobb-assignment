const Badge = ({ children, variant = "default", className, ...props }) => {
    const variantClasses = {
      default: "bg-gray-100 text-gray-900",
      secondary: "bg-gray-100 text-gray-700",
    }
  
    return (
      <div
        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${variantClasses[variant]} ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }

  export {Badge}