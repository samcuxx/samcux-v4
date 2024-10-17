interface Heading3Props {
  children: React.ReactNode;
  className?: string;
}

export function Heading3({ children, className = '' }: Heading3Props) {
  return (
    <h3 className={`scroll-m-20 text-md font-semibold tracking-tight ${className}`}>
      {children}
    </h3>
  );
}
