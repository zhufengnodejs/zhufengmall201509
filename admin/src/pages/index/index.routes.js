import template from './index.jade'
import controller from './index.controller'
export default function routesConfig($stateProvider){
    console.log('$stateProvider');
    $stateProvider.state('index',{
        url:'/',
        template:template,
        controller:controller
    })
}
routesConfig.$inject = ['$stateProvider'];