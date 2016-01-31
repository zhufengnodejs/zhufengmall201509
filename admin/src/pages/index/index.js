import indexRoute from './index.routes'
import navigation from 'components/navigation'
import run from './index.run'
export default angular.module('index.index',[navigation])
    .config(indexRoute)
    .run(run)
    .name