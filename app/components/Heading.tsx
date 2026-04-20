import type { HTMLAttributes } from "react";

const levelToTag = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
} as const;

export type HeadingTag = (typeof levelToTag)[keyof typeof levelToTag];

export type HeadingProps = {
  /**
   * Semantic level; picks `h1`–`h6` when `as` is omitted.
   * @default 2
   */
  level?: keyof typeof levelToTag;
  /** Render a specific heading tag (overrides `level`). */
  as?: HeadingTag;
} & HTMLAttributes<HTMLHeadingElement>;

/**
 * Reusable heading with Aileron (`font-heading` from theme).
 * Prefer semantic `<h1>`–`<h6>` in markup; use this when you want the same
 * typography token explicitly or a single import for heading styles.
 */
export function Heading({
  level = 2,
  as,
  className,
  ...props
}: HeadingProps) {
  const Tag = (as ?? levelToTag[level]) as HeadingTag;
  const merged = ["font-heading", className].filter(Boolean).join(" ");
  return <Tag className={merged} {...props} />;
}
