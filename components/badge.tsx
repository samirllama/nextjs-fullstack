import React, { ReactNode } from "react";

enum Variant {
  GRAY,
  RED,
  ORANGE,
  YELLOW,
  GREEN,
  TEAL,
  BLUE,
  INDIGO,
  PURPLE,
  PINK,
  BABYBLUE
}

type Props = {
  variant: Variant;
  children?: ReactNode;
};

const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.GRAY]: "bg-gray-100 text-gray-800",
  [Variant.RED]: "bg-red-100 text-red-800",
  [Variant.ORANGE]: "bg-orange-100 text-orange-800",
  [Variant.YELLOW]: "bg-yellow-100 text-yellow-800",
  [Variant.GREEN]: "bg-green-100 text-green-800",
  [Variant.TEAL]: "bg-teal-100 text-teal-800",
  [Variant.BLUE]: "bg-blue-100 text-blue-800",
  [Variant.INDIGO]: "bg-indigo-100 text-indigo-800",
  [Variant.PURPLE]: "bg-purple-100 text-purple-800",
  [Variant.PINK]: "bg-pink-100 text-pink-800",
  [Variant.BABYBLUE]: "bg-gradient-to-r from-blue-500 to-blue-400 text-white"
};

const classNames = (...args: string[]) => args.filter(Boolean).join(' ');

export function Badge( { children, variant }: Props) {

  return (
    <span
      className={classNames(
        "inline-flex items-center absolute",
        "pl-1.5 py-1 rounded-full",
        "text-xs font-medium leading-4 whitespace-no-wrap tracking-normal",
        '-top-5',
        'animate-bounce',
        ' h-9 w-9',
        '[font-family:LP_Bambus_W00_Light]',
        VARIANT_MAPS[variant]
      )}
    >
      {children}
    </span>
  );
}

Badge.defaultProps = {
  variant: Variant.GRAY
};
Badge.variant = Variant;