import api from './api'

export default {
  fetchCourses () {
    return api().get('courses').catch( (e) => {return e})
  },
  addNewCourse (params) {
    return api().post('courses', params)
  },
  getCourse(params){
    return api().get(`courses/${params.id}`)
  },
  deleteCourse(id){
    return api().delete(`courses/${id}`)
  }
}