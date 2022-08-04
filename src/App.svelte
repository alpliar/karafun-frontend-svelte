<script>
  import logo from "./assets/logo.svg";
  import Counter from "./lib/Counter.svelte";
</script>

<main>
  <div>
    <a href="https://svelte.dev" target="_blank">
      <img src={logo} class="logo" alt="KaraFun Business Logo" />
    </a>
  </div>
  <h1 class="title">
    <span class="secondary">Get Started</span>
    <span style="display: block">with KaraFun Business</span>
  </h1>

  <hr class="divider" />

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank"
      >SvelteKit</a
    >, the official Svelte app framework powered by Vite!
  </p>

  <p class="info">Click on the Vite and Svelte logos to learn more</p>
</main>

<style>
  .logo {
    width: 132px;
    height: "auto";
  }
  .info {
    color: #888;
  }

  .divider {
    width: 200px;
    height: 4px;
    margin-left: 0;
    border-color: var(--main-highlight-color);
    background-color: var(--main-highlight-color);
    border-style: none;
  }
</style>
