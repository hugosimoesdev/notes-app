export function NoteCard() {
  return (
    <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-200">há 2 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam animi
        esse officiis ad reiciendis sed facere molestiae sequi, perferendis,
        placeat distinctio repellendus laboriosam alias eius aspernatur qui sint
        numquam accusamus.
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to to-black/0 pointer-events-none" />
    </div>
  );
}
