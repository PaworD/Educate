<template>
  <div>
    <md-toolbar class="md-transparent" md-elevation="0">
      <h3 class="md-title" style="flex: 1">{{this.course.courseName}}</h3>
      <md-avatar>
        <img :src="this.course.icon" alt />
      </md-avatar>
      <md-button class="md-icon-button" to="/courses">
        <md-icon>keyboard_arrow_right</md-icon>
      </md-button>
    </md-toolbar>
    <div class="md-layout md-alignment-center-space-around" md-elevation="0">
      <div class="md-layout-item md-transparent md-size-40" md-elevation="0">
        <md-card md-elevation="0">
          <md-card-content>
            <md-field class>
              <label>Coursename</label>
              <md-input v-model="this.course.courseName" :disabled="check" class="inp"></md-input>
            </md-field>
            <md-field>
              <label>Description</label>
              <md-textarea v-model="this.course.description" :disabled="check"></md-textarea>
            </md-field>
          </md-card-content>
        </md-card>
      </div>

      <!-- Lessons , courses , quizes -->

      <div class="md-layout-item md-transparent md-size-40" md-elevation="0">
        <md-card md-elevation="0">
          <md-card-content class="md-scrollbar lessons">
            <div class="list">
              <md-list class="md-list " v-for="lesson in lessons" :key="lesson.name">
                <md-list-item md-expand :md-expanded.sync="expandLesson" class="md-primary">
                  {{lesson.name}}
                  <md-list slot="md-expand">
                    <md-list-item>
                      <video :src="lesson.lesson" controls="true" width="100%"></video>
                    </md-list-item>
                    <div class="md-layout md-alignment-center-space-around">
                      <div class="md-layout-item ">
                        <md-list-item>Delete</md-list-item>
                      </div>
                      <div class="md-layout-item ">
                        <md-list-item>Delete</md-list-item>
                      </div>
                    </div>
                  </md-list>
                </md-list-item>
              </md-list>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<script>
import PostsService from "../services/PostsService";
export default {
  data() {
    return {
      check: true,
      course: [],
      lessons: []
    };
  },
  methods: {
    async getCourse() {
      const response = await PostsService.getCourse({
        id: this.$route.params.id
      });
      this.course = response.data;
      this.lessons = response.data.lessons;
    },

    async removeCourse(id) {
      await PostsService.deleteCourse(id);
      this.$router.push({ name: "Courses" });
    }
  },

  mounted() {
    this.getCourse();
  }
};
</script>

<style lang="" scoped>
.inp {
  border: none;
  outline: none;
}
.lessons{
    max-width: 400px;
    max-height: 500px;
    overflow: auto;

}
</style>