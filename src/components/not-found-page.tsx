import { Link } from "@tanstack/react-router";

export function NotFoundPage() {
  return (
    <div id="main" className="flex min-h-screen items-center justify-center bg-background px-5">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="display mt-4 text-3xl text-foreground">Страница не найдена</h1>
        <p className="mt-3 prose-copy-sm text-muted-foreground">
          Такой страницы нет или она была перемещена.
        </p>
        <div className="mt-8">
          <Link to="/" className="cta-primary">
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
}
