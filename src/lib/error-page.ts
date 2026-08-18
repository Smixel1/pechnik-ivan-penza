export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <title>Страница не загрузилась</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 "Manrope", system-ui, sans-serif; background: #151311; color: #E9E0D5; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.35rem; margin: 0 0 0.5rem; font-weight: 500; }
      p { color: #A69D93; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.75rem 1.15rem; min-height: 2.75rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid #5A2F22; background: transparent; color: #E9E0D5; letter-spacing: 0.08em; text-transform: uppercase; font-size: 0.75rem; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>Страница не загрузилась</h1>
      <p>Что-то пошло не так. Можно обновить страницу или вернуться на главную.</p>
      <div class="actions">
        <button type="button" onclick="location.reload()">Попробовать снова</button>
        <a href="/">На главную</a>
      </div>
    </div>
  </body>
</html>`;
}
