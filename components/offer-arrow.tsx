/** Punane nooleikoon — optiliselt keskel (Emil: väikesed detailid loevad) */
export function OfferArrow() {
  return (
    <span
      aria-hidden
      className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-white"
    >
      <svg
        viewBox="0 0 16 16"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3.5 8h9M8.5 4l4 4-4 4" />
      </svg>
    </span>
  );
}
