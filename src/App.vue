<template>
  <div class="page-container">
    <md-app>
      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
            <span id="logo">Educate.</span>
        </md-toolbar>

        <md-list>
          <md-list-item to="/dashboard" exact>
            <md-icon>dashboard</md-icon>
            <span class="md-list-item-text">Dashboard</span>
          </md-list-item>

          <md-list-item to="/courses" exact>
            <md-icon>ballot</md-icon>
            <span class="md-list-item-text">My Courses</span>
          </md-list-item>

          <md-list-item class="md-appbar">
            <md-icon>inbox</md-icon>
            <span class="md-list-item-text">Messages</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
       <router-view></router-view>
      </md-app-content>

    </md-app>
  </div>
</template>

<script>
export default {
  name: 'Normal',
  data(){
    return {
      title: "Hello"
    }
  },
}
</script>
<style lang="scss" scoped>

@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme("appbar", (
  primary: md-get-palette-color(white, A200), // This can be dark or light
));

@import "~vue-material/dist/theme/all";
@import url('https://fonts.googleapis.com/css?family=Varela+Round&display=swap');

  .md-app {
    min-height: 100vh;
    border: .5px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  #logo{
    padding: 0 30px 0;
    text-align: center;
    font-size: 32px;
    font-family: 'Varela Round', sans-serif;
  }  
</style>
