import template from './navigation.jade'
var navigation = [
    () => {
        return {
            restrict:'E',
            template:template
        }
    }
]
export default angular.module('navigation',[])
.directive('zfNavigation',navigation)
.name