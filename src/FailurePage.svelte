<script>
  import Button from "./Button.svelte";
  import Layout from "./Layout.svelte";
  import Link from "./Link.svelte";
  import Text from "./Text.svelte";
  import Title from "./Title.svelte";
</script>

<Layout>
  <div class="header" slot="header" />
  <Title prefix="Oops!">
    KaraFun Business is not suitable <br />for your business. But...
  </Title>
  <Text>
    ... we have other plans designed for KJs, restaurants, camping sites and
    bars like yours. See our KaraFun Pro plans below.
  </Text>
  <div class="flex">
    <Button>Visit KaraFun Pro</Button>
    <Link>Read more</Link>
  </div>
</Layout>

<style>
  .flex {
    display: flex;
    flex-direction: row;
    gap: 60px;
    align-items: center;
  }
  .header {
    height: calc(90px-32px);
  }
</style>
