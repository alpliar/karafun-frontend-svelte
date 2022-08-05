<script>
  import Layout from "./Layout.svelte";
  import Progress from "./Progress.svelte";
  import Title from "./Title.svelte";
  import FormChoices from "./FormChoices.svelte";
  import formSteps from "./data/formSteps";

  let currentStepIndex = 1;
  let currentStep = formSteps[0];

  const incrementStep = (event) => {
    const { value } = event.detail;

    console.log("step", currentStep, ", choosen value", value);

    const nextId = currentStepIndex + 1;

    if (formSteps.some((step) => step.id === nextId)) {
      currentStepIndex = nextId;
      currentStep = formSteps.find((step) => step.id === nextId);
    }
  };
</script>

<Layout>
  <Progress progress={currentStep.progression} slot="header" />
  <Title>{@html currentStep.title}</Title>
  <FormChoices on:submit={incrementStep} choices={currentStep.choices} />
</Layout>
