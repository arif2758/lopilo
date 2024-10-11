import React from 'react';

export function AnimatedSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={`bg-gray-300 animate-pulse rounded-lg ${className}`}
      style={{
        animation: 'pulseEffect 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }}
    />
  );
}
