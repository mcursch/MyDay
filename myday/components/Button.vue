<script lang="ts" setup>
const props = defineProps(['color'])
console.log(props.color)
const test = "bg-" + props.color + "-400"
console.log(test)

const colors = {
  red: 'bg-red-700',
  purple: 'bg-purple-700',

}
</script>

<template>
  <span>
    <button class="rounded-lg py-2 px-5 mx-2" :class="`${colors[props.color]}`">
      <slot/>
    </button>
  </span>
</template>

<style scoped></style>
