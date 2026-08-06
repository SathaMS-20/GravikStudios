export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-10 lg:px-8">
        <div className="min-w-0 truncate text-xs tracking-[0.22em] text-muted-foreground uppercase">
          Gravik Studios
        </div>
        <p className="shrink-0 text-xs text-muted-foreground">
          © Gravik Studios. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
