<script>
  import { createEventDispatcher } from "svelte/internal";
  import arrow from "./assets/arrow_right.svg";
  const dispatch = createEventDispatcher();

  export let type = undefined;

  const handleClick = () => {
    dispatch("click");
  };
</script>

<button {type} on:click={handleClick}>
  <slot />
  <img class="button-icon" src={arrow} alt="right arrow" />
</button>

<style>
  .button-icon {
    width: 20px;
    height: 20px;
  }
</style>
