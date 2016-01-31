export default function routesConfig($urlRouterProvider){
    $urlRouterProvider.otherwise('/');
}
routesConfig.$inject = ['$urlRouterProvider'];