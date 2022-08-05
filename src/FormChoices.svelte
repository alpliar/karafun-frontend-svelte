<script>
  import { createEventDispatcher } from "svelte";
  import Button from "./Button.svelte";
  const dispatch = createEventDispatcher();

  export let choices = [];
  export let buttonLabel = `Let's go`;

  let selection = "one";

  const handleClick = () => {
    dispatch("submit", { value: selection });
  };
</script>

<div>
  <ul>
    {#each choices as { label, value }}
      <li>
        <input
          type="radio"
          id={value}
          name="choices"
          {value}
          bind:group={selection}
        />
        <label for={value}>{label}</label>
      </li>
    {/each}
  </ul>
  <Button on:click={handleClick}>{buttonLabel}</Button>
</div>

<style>
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-left: 0;
  }

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }

  input[type="radio"] {
    height: 32px;
    width: 32px;
    color: var(--main-highlight-color);
    accent-color: var(--main-highlight-color);
    outline-color: var(--main-highlight-color);

    /* lighting-color: var(--main-highlight-color); */
    /* border: 1px solid var(--main-highlight-color); */
    /* border-color: var(--main-highlight-color); */
  }

  input:checked ~ label {
    color: var(--main-color);
  }

  label {
    font-size: var(--small-font-size);
  }
</style>
