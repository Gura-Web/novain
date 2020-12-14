  <template id="main-page">
    <v-ons-page>
      <v-ons-toolbar>
        <div class="center">Title</div>
      </v-ons-toolbar>
      <router-link to="/swiping">swiping</router-link>
      <p style="text-align: center">
        <v-ons-button @click="$ons.notification.alert('Hello World!')">
          Click me!
        </v-ons-button>
      </p>
    </v-ons-page>
  </template>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
