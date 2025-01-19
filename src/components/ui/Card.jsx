
const Card = ({ className, children, ...props }) => (
    <div
      className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  )
  
  const CardContent = ({ className, children, ...props }) => (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  )
  export {Card, CardContent}