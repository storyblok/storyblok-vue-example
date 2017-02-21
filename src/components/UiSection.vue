<template>
  <div class="uk-section uk-section-muted" v-editable="content">
    <div class="uk-container">

      <h3>{{ content.title }}</h3>

      <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ['content']
}
</script>
