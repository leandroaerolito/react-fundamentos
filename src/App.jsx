// Comentário de uma linha CTRL; //
/* Comentário de várias linhas ALT SHIFT A */

function App() {
  return (
    <>
      <header>
        <h1>Olá React!</h1>
        <hr />
        <nav>
          <a href="">Home</a>
          <a href="">Produtos</a>
          <a href="">Contato</a>
        </nav>
      </header>
      {/*Comentário no meio do JS. É normal ficar entre {} nesta situação. */}
      <main>
        <section>
          <h2>Conteúdo de aplicação</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            quisquam officia sit, cum modi labore voluptatibus quam, possimus
            illum iure ut dicta quo atque odit impedit quasi hic voluptates ex
            soluta! Distinctio deleniti aspernatur vel aperiam sunt? Odit
            perferendis similique nobis fugiat iusto nulla, qui incidunt
            voluptas hic, fuga eveniet.
          </p>

          <article>
            <h3>Artigo 1</h3>
            <p>Conteúdo do artigo 1...</p>
          </article>

          <article>
            <h3>Artigo 2</h3>
            <p>Conteúdo do artigo 2....</p>
          </article>

          <article>
            <h3>Artigo 3</h3>
            <p>Conteúdo do artigo 3...</p>
          </article>
        </section>
      </main>
      <footer>
        <h2>Rodapé do aplicativo</h2>
      </footer>
    </>
  );
}

export default App;
