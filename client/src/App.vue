<template>
  <div id="app">
    <nav class="navbar navbar-dark navbar-expand-sm bg-primary text-light">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">
          <img src="@/assets/logo.svg" alt="clord" class="logo" height="40px">
        </router-link>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-0 ml-auto justify-content-between">
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Log In</router-link>
            </li>
            <li class="nav-item">
              <a target="_blank" href="https://github.com/tonyjaimep/clord" class="nav-link">
                <github-icon size="1x"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { GithubIcon } from 'vue-feather-icons'

export default {
  components: { GithubIcon }
}
</script>

<style lang="sass">
@import "@/assets/sass/app.sass"
</style>