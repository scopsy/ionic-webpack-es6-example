import tabView      from './views/tabs.html';
import firstTabView from './views/first.html';

function AppRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
        url: "/app",
        abstract: true,
        template: tabView
    })
    .state('app.home', {
        url: "/home",
        views: {
            'home-tab': {
                template: firstTabView
            }
        }
    });
    
    $urlRouterProvider.otherwise('/app/home');
}

export default AppRouter;
