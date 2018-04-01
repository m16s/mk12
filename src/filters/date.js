import Vue from 'vue'
import moment from 'moment'

Vue.filter('date', function (value) {
  if (!value) return ''
  return moment(value).format('DD.MM.YYYY')
})