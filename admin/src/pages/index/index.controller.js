export default function IndexController($rootScope,$http,$scope,$state){
    $scope.login = () => {
        $http.post('http://localhost:3000/users/login',
            {username:$scope.username}).then((result)=>{
               $rootScope.user = result.data;
               $state.go('category');
        });
    }
}
IndexController.$inject = ['$rootScope','$http','$scope','$state'];