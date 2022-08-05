<script>
  import { createEventDispatcher } from "svelte";

  import Button from "./Button.svelte";
  const dispatch = createEventDispatcher();

  let data = {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
  };

  const handleSubmit = (event) => {
    dispatch("submit", { ...data });
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-container">
    <input
      type="text"
      name="firstName"
      placeholder="First name"
      required
      bind:value={data.firstName}
    />
    <input
      type="text"
      name="lastName"
      placeholder="Last name"
      required
      bind:value={data.lastName}
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      required
      bind:value={data.email}
    />
  </div>
  <Button type="submit">Finish</Button>
</form>

<style>
  .form-container {
    display: flex;
    flex-direction: row;
    gap: 20px 48px;
    flex-wrap: wrap;
  }
  input {
    border: 2px solid #351791;
    border-radius: 75px;
    width: calc(350px - 24px * 2);
    padding: 16px 24px;
  }

  input:placeholder-shown {
    border: 2px solid #d7d1e9;
    border-radius: 75px;
  }

  input,
  input::placeholder {
    font-size: var(--small-font-size);
    color: var(--main-color);
  }
</style>
