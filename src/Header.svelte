<script>
  import logo from "./assets/logo.svg";
</script>

<header>
  <a href="https://svelte.dev" target="_blank">
    <img src={logo} class="logo" alt="KaraFun Business Logo" />
  </a>
  <slot />
</header>

<style>
  header {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  .logo {
    width: 132px;
    height: "auto";
  }
</style>
