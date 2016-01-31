var run = function($rootScope){
    $rootScope.$on('$stateChangeSuccess',function(event,toState,toParams,fromState,fromParams){
        $rootScope.state = toState.name;
    });
}
run.$inject = ['$rootScope']
export default run;