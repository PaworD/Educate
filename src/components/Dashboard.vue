<template>
  <div>
  <md-toolbar class="md-transparent md-dense" md-elevation="0">
    <h3 class="md-title" style="flex: 1">Dashboard</h3>
      <md-badge :md-content="this.messages">
        <md-button class="md-icon-button">
          <md-icon>mail</md-icon>
        </md-button>
      </md-badge>
      <md-badge :md-content="this.notifications">
        <md-button class="md-icon-button">
          <md-icon>notifications</md-icon>
        </md-button>
      </md-badge>
  </md-toolbar>
    <div class="md-layout md-alignment-center-space-around">
      <div class="md-layout-item">
        <md-card class="md-primary" md-with-hover>
          <md-ripple>
            <md-card-header>
              <div class="md-title">Students</div>
              <div class="md-subhead">Overall number of students</div>
            </md-card-header>
            <md-card-content>
              <span class="md-display-3">0</span>
            </md-card-content>
          </md-ripple>
        </md-card>
      </div>
            <div class="md-layout-item">
        <md-card class="md-accent" md-with-hover>
          <md-ripple>
            <md-card-header>
              <div class="md-title">Courses</div>
              <div class="md-subhead">Number of courses</div>
            </md-card-header>
            <md-card-content>
              <span class="md-display-3">{{this.courseLength}}</span>
            </md-card-content>
          </md-ripple>
        </md-card>
      </div>
            <div class="md-layout-item">
        <md-card class="md-default" md-with-hover>
          <md-ripple>
            <md-card-header>
              <div class="md-title">Messages</div>
              <div class="md-subhead">Messages from students</div>
            </md-card-header>
            <md-card-content>
              <span class="md-display-3">0</span>
            </md-card-content>
          </md-ripple>
        </md-card>
      </div>
      
      
    
      
      
    </div>
  </div>
</template>

<script>

import courseController from '../controllers/courseController'

export default {
  name: "Dashboard",
  data() {
    return {
      messages: 0,
      notifications: 0,
      courseLength: 0
    };
  },
  methods: {
    async getLength(){
      this.courseLength = await courseController.getLength()
    }
  },
  mounted() {
    this.getLength()
  },
};
</script>

<style lang="scss" scoped>

@import "~vue-material/dist/theme/engine";

@include md-register-theme("card", (
  primary: md-get-palette-color(cyan, A700), // This can be dark or light
  theme: dark,
));

@import "~vue-material/dist/theme/all";


.md-layout-item {
  height: 40px;
}

.md-card {
  margin: 4px;
  display: flex;
}
</style>