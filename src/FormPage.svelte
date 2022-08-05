<script>
  import Layout from "./Layout.svelte";
  import Progress from "./Progress.svelte";
  import Title from "./Title.svelte";
  import FormChoices from "./FormChoices.svelte";
  import formSteps from "./data/formSteps";
  import Button from "./Button.svelte";
  import FormInputs from "./FormInputs.svelte";

  let currentStepIndex = 1;
  let currentStep = formSteps[0];
  let hasSubmittedForm = false;

  const handleNextStep = (event) => {
    const { value } = event.detail;

    console.log("step", currentStep, ", choosen value", value);

    const nextId = currentStepIndex + 1;

    if (formSteps.some((step) => step.id === nextId)) {
      currentStepIndex = nextId;
      currentStep = formSteps.find((step) => step.id === nextId);
    }
  };

  const handleSubmit = (data) => {
    hasSubmittedForm = true;
    alert(
      `Thanks ${data.firstName}, we'll be back asap with a detailed estimate`
    );
  };
</script>

<Layout>
  <Progress
    progress={hasSubmittedForm ? 100 : currentStep.progression}
    slot="header"
  />
  <Title prefix={currentStep.titlePrefix}>{@html currentStep.title}</Title>
  {#if currentStep.choices.length > 0}
    <FormChoices on:submit={handleNextStep} choices={currentStep.choices} />
  {:else}
    <FormInputs on:submit={handleSubmit} />
  {/if}
</Layout>
