import PostsServices from '../services/PostsService'

export default {
    async getLength(){
       const courses = await PostsServices.fetchCourses()
       let len = courses.data.courses.length 
       return len
    },
}