import React from 'react';

// ─── Types ─────────────────────────────────────────────────────────────────────
export type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'ghost-plain';
export type ButtonSize    = 'xs' | 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:   ButtonVariant;
  size?:      ButtonSize;
  leftIcon?:  React.ReactNode;
  rightIcon?: React.ReactNode;
}

// ─── Design tokens (extracted from Figma node 2199-2655) ──────────────────────

/**
 * Variant → visual style
 *
 * primary     bg-white/90  dark text  Outfit uppercase  disabled opacity-20
 * outline     border-white/30  transparent  Outfit uppercase  disabled opacity-20
 * ghost       bg-white/10  white/80   Inter  disabled opacity-50
 * ghost-plain no bg  white/80  Inter  disabled opacity-50
 */
const VARIANT_BASE: Record<ButtonVariant, string> = {
  primary:
    'bg-white/90 text-[#0a0a0a] ' +
    'hover:bg-white ' +
    'active:bg-white/80 ' +
    'disabled:opacity-20',

  outline:
    'border-2 border-white/30 bg-transparent text-white/90 ' +
    'hover:border-white/60 hover:text-white ' +
    'active:border-white active:text-white ' +
    'disabled:opacity-20',

  ghost:
    'bg-white/10 text-white/80 ' +
    'hover:bg-white/20 ' +
    'active:bg-white/20 ' +
    'disabled:opacity-50',

  'ghost-plain':
    'bg-transparent text-white/80 ' +
    'hover:text-white/90 ' +
    'disabled:opacity-50',
};

/**
 * Size → height, outer padding, icon wrapper, text scale & tracking
 *
 * xs  h-6  px-1  icon-24  text-xs   tracking-tight
 * sm  h-8  px-3  icon-24  text-sm   tracking-wide
 * md  h-10 px-3  icon-32  text-base tracking-wide
 * lg  h-12 px-3  icon-32  text-lg   tracking-wide
 */
const SIZE_CONFIG: Record<ButtonSize, {
  btn:   string;   // height + outer horizontal padding
  icon:  string;   // icon wrapper size (square)
  label: string;   // label inner padding + text scale + tracking
}> = {
  xs: { btn: 'h-6 px-1',  icon: 'w-6 h-6', label: 'px-2 text-xs tracking-tight' },
  sm: { btn: 'h-8 px-3',  icon: 'w-6 h-6', label: 'px-2 text-sm tracking-wide'  },
  md: { btn: 'h-10 px-3', icon: 'w-8 h-8', label: 'px-2 text-base tracking-wide' },
  lg: { btn: 'h-12 px-3', icon: 'w-8 h-8', label: 'px-2 text-lg tracking-wide'  },
};

/**
 * Variant → font family + text-transform
 *
 * primary / outline → Outfit, uppercase
 * ghost / ghost-plain → Inter, no transform
 */
const VARIANT_FONT: Record<ButtonVariant, { family: string; transform?: string }> = {
  primary:      { family: "'Outfit', sans-serif", transform: 'uppercase' },
  outline:      { family: "'Outfit', sans-serif", transform: 'uppercase' },
  ghost:        { family: "'Inter', sans-serif" },
  'ghost-plain':{ family: "'Inter', sans-serif" },
};

// ─── Component ─────────────────────────────────────────────────────────────────
export function Button({
  variant  = 'primary',
  size     = 'md',
  leftIcon,
  rightIcon,
  children,
  className = '',
  disabled,
  style,
  ...rest
}: ButtonProps) {
  const vBase  = VARIANT_BASE[variant];
  const sConf  = SIZE_CONFIG[size];
  const fConf  = VARIANT_FONT[variant];

  const composedStyle: React.CSSProperties = {
    fontFamily:    fConf.family,
    fontWeight:    500,
    textTransform: fConf.transform as React.CSSProperties['textTransform'] | undefined,
    ...style,
  };

  return (
    <button
      disabled={disabled}
      style={composedStyle}
      className={[
        // layout
        'rounded-full inline-flex items-center justify-center',
        // interaction
        'transition-colors duration-150 cursor-pointer',
        // focus — CSS outline (no box-shadow ring, per DS rules)
        'outline-none',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60 focus-visible:outline-offset-[4px]',
        // disabled
        'disabled:cursor-not-allowed',
        // variant + size
        vBase,
        sConf.btn,
        className,
      ].join(' ')}
      {...rest}
    >
      {/* Left icon slot */}
      {leftIcon && (
        <span className={`${sConf.icon} flex items-center justify-center shrink-0`}>
          {leftIcon}
        </span>
      )}

      {/* Label */}
      <span className={sConf.label} style={{ lineHeight: 1 }}>
        {children}
      </span>

      {/* Right icon slot */}
      {rightIcon && (
        <span className={`${sConf.icon} flex items-center justify-center shrink-0`}>
          {rightIcon}
        </span>
      )}
    </button>
  );
}
