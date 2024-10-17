interface Heading2Props {
  children: React.ReactNode;
  className?: string;
}

export function Heading2({ children, className = '' }: Heading2Props) {
  return (
    <h2 className={`scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 ${className}`}>
      {children}
    </h2>
  );
}
