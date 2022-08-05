<script>
  import { navigate } from "svelte-routing";
  import Button from "./Button.svelte";
  import Layout from "./Layout.svelte";
  import Link from "./Link.svelte";
  import Text from "./Text.svelte";
  import Title from "./Title.svelte";

  const handleVisitKaraFunPro = () => {
    navigate("https://www.karafun.fr/pro/", { replace: true });
  };
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
    <Button on:click={handleVisitKaraFunPro}>Visit KaraFun Pro</Button>
    <Link to="/">Read more</Link>
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
