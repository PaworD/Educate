<template>
    <div>
    <md-toolbar class="md-transparent md-dense" md-elevation="0">
      <h3 class="md-title" style="flex: 1">Courses</h3>
      <md-button class=" md-dense">Refresh</md-button>
      <md-button class="md-accent" to="courses/create">Create</md-button>
    </md-toolbar>
      <div class="md-layout md-alignment-center-center">
        <div class="md-layout-item md-size-10"  v-if="!this.courses.length">
        <div class="md-display-1" >
          Empty
        </div>
        </div>
        <div v-for="course in courses" :key="course._id" class="md-layout-item" >
                <md-dialog-alert
      :md-active.sync="isDelete"
      md-content="Are you sure to delete this course?"
      md-confirm-text="Confirm" @click="removeCourse(course._id)"/>
      <md-card class="md-primary" md-with-hover >
      <md-card-header>
        <md-card-header-text>

        <div class="md-title">{{course.courseName}}</div>
        </md-card-header-text>
 
          <md-avatar>
          <img :src="course.icon" alt="People">
          </md-avatar>
      </md-card-header>

      <md-card-content>
        {{course.description}}
      
      <div class="md-layout md-alignment-center-right" >
        <md-button :to="'/courses/'+course._id">
          View
        </md-button>
        <md-button class="md-secondary md-raised" @click="isDelete = true">
          Delete
        </md-button>
      </div>

      </md-card-content>

    </md-card>
        </div>
      </div>

    </div>
</template>

<script>

import PostsService from '../services/PostsService'

export default {
    name: 'Courses',
    data(){
        return{
            isDelete: false,
            courses : []
        }
    },
    methods: {
        async getCourses(){
            const response = await PostsService.fetchCourses()
            this.courses = response.data.courses
            console.log(response.data.courses)
        },
        async removeCourse(id){
        await PostsService.deleteCourse(id)
        this.getCourses()
    }
    },
    mounted() {
        this.getCourses()
    },
}
</script>

<style lang="scss" scoped>
  @import "~vue-material/dist/theme/engine";


.md-layout-item {
    height: 0px;
  }
  .md-card {
  margin: 4px;
  display: block;
}
</style>