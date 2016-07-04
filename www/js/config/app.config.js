
function AppConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tabs', {
        url: "/tab",
        abstract: true,
        template: require('../views/tabs.html')
    })
    .state('tabs.first', {
        url: "/first",
        views: {
            'home-tab': {
                template: require('../views/first.html')
            }
        }
    });
    $urlRouterProvider.otherwise('/tab/first');
}

export default AppConfig;
