import template from './category.jade'
import controller from './category.controller'
export default function routesConfig($stateProvider){
    console.log('$stateProvider');
    $stateProvider.state('category',{
        url:'/category',
        template:template,
        controller:controller
    })
}
routesConfig.$inject = ['$stateProvider'];