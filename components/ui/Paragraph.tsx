interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export function Paragraph({ children, className = '' }: ParagraphProps) {
  return (
    <p className={`leading-7${className}`}>
      {children}
    </p>
  );
}
