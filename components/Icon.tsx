'use client';

type IconName =
  | 'arrow-path'
  | 'arrow-trending-up'
  | 'chart-pie'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'chevron-up-solid'
  | 'cog-8-tooth'
  | 'cube-16-solid'
  | 'link'
  | 'link-solid'
  | 'search'
  | 'x-mark';

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  alt?: string;
}

export default function Icon({
  name,
  size = 24,
  className = '',
  alt = '',
}: IconProps) {
  return (
    <img
      src={`/icons/${name}.svg`}
      width={size}
      height={size}
      alt={alt}
      aria-hidden={!alt ? true : undefined}
      className={className}
      style={{ display: 'inline-block' }}
    />
  );
}
