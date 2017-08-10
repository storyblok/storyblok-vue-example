<template>
  <div>
    <div class="uk-section-primary tm-section">

      <navbar class="uk-navbar-transparent"></navbar>

      <div class="uk-section uk-section-small uk-flex uk-flex-middle uk-text-center">
        <div class="uk-width-1-1">
          <div class="uk-container">

            <p>
              <img src="../assets/logo.png">
            </p>

            <p class="uk-margin-medium uk-text-lead">
              A lightweight and modular front-end framework<br class="uk-visible@s">
              for developing fast and powerful web interfaces.
            </p>

            <div class="uk-child-width-auto uk-grid-medium uk-flex-inline uk-flex-center" uk-grid>
              <div>
                <a class="uk-button uk-button-primary tm-button-primary" href="./docs">Get Started</a>
              </div>
              <div>
                <a class="uk-button uk-button-default tm-button-default" href="https://github.com/uikit/uikit">Github</a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="uk-section-small">
        <div class="uk-container uk-container-expand uk-text-center uk-position-relative">

          <ul class="uk-subnav tm-subnav uk-flex-inline uk-flex-center uk-margin-remove-bottom" uk-margin>
            <li>
              <span>Version <span uikit-version></span></span>
            </li>
            <li>
              <a href="https://github.com/uikit/uikit/stargazers"><span class="uk-margin-small-right" uk-icon="icon: star"></span><span uikit-stargazers>8100</span> Stargazers</a>
            </li>
            <li>
              <a class="uk-text-lowercase" href="https://twitter.com/getuikit"><span class="uk-margin-small-right" uk-icon="icon: twitter"></span>@getuikit</a>
            </li>
            <li>
              <a href="https://gitter.im/uikit/uikit"><span class="uk-margin-small-right" uk-icon="icon: commenting"></span>Community</a>
            </li>
          </ul>

          <a class="uk-button uk-button-default tm-button-default uk-position-center-right uk-position-medium uk-visible@m" href="./v2">UIkit 2 <span uk-icon="icon: arrow-right"></span></a>

        </div>
      </div>

    </div>
    <root :content="story.content"></root>
  </div>
</template>

<script>

export default {
  data () {
    return {
      story: {content: {body: []}}
    }
  },
  created () {
    this.$storyblok.init({
      accessToken: 'SG2TzS5TANp3YaiCefLY3Qtt'
    })

    this.$storyblok.on('change', () => {
      this.getStory('draft')
    })

    this.$storyblok.pingEditor(() => {
      if (this.$storyblok.isInEditor()) {
        this.getStory('draft')
      } else {
        this.getStory('published')
      }
    })
  },
  methods: {
    getStory (version) {
      this.$storyblok.get({slug: 'demo', version: version}, (data) => {
        this.story = {content: {body: []}}
        this.$nextTick(() => {
          this.story = data.story
        })
      })
    }
  }
}
</script>

