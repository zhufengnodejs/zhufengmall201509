export default function IndexController($scope){
    $scope.login = () => {
        alert('login');
    }
}
IndexController.$inject = ['$scope'];