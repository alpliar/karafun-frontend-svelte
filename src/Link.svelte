<script>
  import { Link } from "svelte-routing";
  import arrow from "./assets/arrow_right_orange.svg";
  export let to = undefined;
</script>

<Link {to}>
  <span class="link">
    <slot />
    <img class="link-icon" src={arrow} alt="right arrow" />
  </span>
</Link>

<style>
  .link {
    color: var(--main-highlight-color);
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    font-size: 20px;
  }
  .link-icon {
    width: 20px;
    height: 20px;
  }
</style>
