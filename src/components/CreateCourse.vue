<template>
  <div>
    <md-dialog-alert
      :md-active.sync="first"
      md-content="Your course has been deleted!"
      md-confirm-text="Cool!" />
    <md-content md-elevation="0" class="md-layout md-alignment-center-center">
      <md-card class="md-layout-item md-size-50">
        <md-card-header class="md-layout md-alignment-center-center">
          <span class="md-display-1">Create Course</span>
        </md-card-header>
        <md-card-content>
        <md-field>
        <label>Title of the course</label>
        <md-input v-model="newCourse.courseName"></md-input>
        <span class="md-helper-text">Write name for your course</span>
      </md-field>
    <md-field>
        <label>URL to the course icon</label>
        <md-input v-model="newCourse.icon"></md-input>
        <span class="md-helper-text">Attach url to input</span>
      </md-field>
    <md-field>
      <label>Description of the course</label>
      <md-textarea v-model="newCourse.description"></md-textarea>
    </md-field>
    <div class="md-layout md-alignment-center-center">

    <md-button class="" @click="createCourse()">
      Create
    </md-button>
    <md-button @click="goBack()">
      Cancel
    </md-button>
    </div>
        </md-card-content>
      </md-card>
    </md-content>
  </div>
</template>

<script>

import PostsService from '../services/PostsService'

export default {
    name: 'CreateCourse',
  data() {
    return {
      first: false,
        newCourse: {
      icon: '',
      courseName: '',
      description: '',
      }
    };
  },
  methods: {
    async createCourse(){
      if (this.newCourse.icon !== '' && this.newCourse.courseName !== '' && this.newCourse.description !== ''){
        await PostsService.addNewCourse({
          icon: this.newCourse.icon,
          courseName: this.newCourse.courseName,
          description: this.newCourse.description
        })
        this.first = true;
        this.$router.push({name: 'Courses'})
        

      } else {
        alert('Empty Fields')
      }
    },
    goBack(){
       this.$router.push({ name: 'Courses' })
    }
  }
};
</script>

<style lang="" scoped>

.md-content {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>