<template>
  <div id="login">
    <div class="row justify-content-center">
      <div class="col-xl-4 col-md-6 col-sm-8">
        <div class="card mt-5">
          <div class="card-body">
            <form action="">
              <div class="form-group">
                <label for="username">Username</label>
                <input name="username" type="password" class="form-control">
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <div class="password-input">
                  <input name="password" :type="visiblePassword ? 'text' : 'password'" class="form-control">
                  <div class="password-visibility-toggle" @click="visiblePassword = !visiblePassword">
                    <eye-off-icon size="1x" v-if="!visiblePassword"/>
                    <eye-icon size="1x" v-if="visiblePassword"/>
                  </div>
                </div>
              </div>
              <button class="btn btn-primary btn-block mt-5">Log in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EyeOffIcon, EyeIcon } from 'vue-feather-icons'

export default {
  data() {
    return {
      visiblePassword: false
    }
  },
  components: { EyeOffIcon, EyeIcon }
}
</script>

<style lang="sass" scoped>
.password-input
  position: relative
  .password-visibility-toggle
    position: absolute
    top: 50%
    right: 1em
    transform: translateY(-50%)
</style>
