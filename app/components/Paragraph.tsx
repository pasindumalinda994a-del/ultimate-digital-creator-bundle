import type { HTMLAttributes } from "react";

export type ParagraphProps = HTMLAttributes<HTMLParagraphElement>;

/**
 * Body copy with Onest (`font-body` from theme).
 * All native `<p>` elements also use Onest via `@layer base` in `globals.css`.
 */
export function Paragraph({ className, ...props }: ParagraphProps) {
  return (
    <p
      className={["font-body", className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}
