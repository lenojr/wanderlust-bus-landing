
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

const BlurImage = ({ 
  src, 
  alt, 
  className,
  containerClassName,
  ...props
}: BlurImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState('');

  useEffect(() => {
    // Reset loading state when src changes
    setIsLoading(true);
    
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoading(false);
    };
    
    return () => {
      img.onload = null;
    };
  }, [src]);

  return (
    <div className={cn('relative overflow-hidden', containerClassName)}>
      <div
        className={cn(
          'transition-all duration-500 ease-out-expo',
          isLoading ? 'image-loading scale-[1.02] blur-sm' : 'scale-100 blur-0'
        )}
      >
        <img 
          src={currentSrc || src} 
          alt={alt}
          className={cn(
            'w-full h-full object-cover transition-opacity duration-500 ease-out-expo',
            isLoading ? 'opacity-70' : 'opacity-100',
            className
          )}
          {...props}
        />
      </div>
    </div>
  );
};

export default BlurImage;
