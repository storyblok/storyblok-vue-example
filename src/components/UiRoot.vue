<template>
  <div v-editable="content">
    <component v-for="blok in content.body" :content="blok" :is="blok.component"></component>
  </div>
</template>

<script>
export default {
  props: ['content']
}
</script>
