import type { ReactNode } from "react";

type EditorialFrameProps = {
  id?: string;
  marker?: string;
  subtleMarker?: boolean;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
};

export function EditorialFrame({
  id,
  marker,
  subtleMarker,
  className = "",
  innerClassName = "",
  children,
}: EditorialFrameProps) {
  return (
    <section id={id} className={`editorial-section ${className}`.trim()}>
      {marker ? (
        <span
          aria-hidden
          className={`editorial-marker${subtleMarker ? " editorial-marker-subtle" : ""}`}
        >
          {marker}
        </span>
      ) : null}
      <div
        className={`editorial-inner mx-auto max-w-content px-5 sm:px-8 ${innerClassName}`.trim()}
      >
        {children}
      </div>
    </section>
  );
}
