import indexRoute from './index.routes'
import navigation from 'components/navigation'
export default angular.module('index.index',[navigation])
.config(indexRoute)
.name