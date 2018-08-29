var wkoApp = angular.module('wkoApp', ['ui.router', 'ngAnimate', 'activates', 'sticky', 'showWhen']);

wkoApp.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "pages/home.php"
    })
    
    .state('ourStory', {
      url: "/ourStory",
      templateUrl: "pages/ourStory.php",
      controller: 'ourStoryController'
    })
    
    .state('approach', {
      url: "/approach",
      templateUrl: "pages/subpages/approach.php",
      controller: 'ourStoryController-approach'
    })
    
    .state('history', {
      url: "/history",
      templateUrl: "pages/subpages/history.php"
    })
    
    .state('team', {
      url: "/team",
      params: {
        scrollTo: null,
      },
      templateUrl: "pages/subpages/team.php",
      controller: 'teamController'
    })
    
    .state('children', {
      url: "/children",
      templateUrl: "pages/subpages/children.php"
    })
    
    .state('location', {
      url: "/location",
      templateUrl: "pages/subpages/location.php"
    })
    
    .state('programs', {
      url: "/programs",
      params: {
        scrollTo: null,
      },
      templateUrl: "pages/programs.php",
      controller: 'programsController'
    })
    
    .state('hfa', {
      url: "/hfa",
      templateUrl: "/pages/subpages/programs/hfa.php",
      controller: function($scope) {
        $scope.images = [
          'hfa1.jpg',
          'hfa2.jpg',
          'hfa3.jpg',
          'hfa4.jpg',
          'hfa5.jpg',
          'hfa6.jpg',
          'hfa7.jpg',
          'hfa8.jpg',
          'hfa9.jpg'
          ];
      }
    })

    .state('mcn', {
      url: "/mcn",
      templateUrl: "/pages/subpages/programs/mcn.php",
      controller: function($scope) {
        $scope.images = [
          'mcn1.jpg',
          'mcn2.jpg',
          'mcn3.jpg',
          'mcn4.jpg',
          'mcn5.jpg'
          ];
      }
    })
    
    .state('riding', {
      url: "/riding",
      templateUrl: "/pages/subpages/programs/riding.php",
      controller: function($scope) {
        $scope.images = [
          'riding1.jpg',
          'riding2.jpg',
          'riding3.jpg',
          'riding4.jpg',
          'riding5.jpg',
          'riding6.jpg',
          'riding7.jpg',
          'riding8.jpg',
          'riding9.jpg'
          ];
      }
    })
   
    .state('camp', {
      url: "/camp",
      templateUrl: "/pages/subpages/programs/camp.php",
      controller: function($scope) {
        $scope.name = "camp";
        
        $scope.images = [
          'camp1.jpg',
          'camp2.jpg',
          'camp3.jpg',
          'camp4.jpg',
          'camp5.jpg',
          'camp6.jpg',
          'camp7.jpg',
          'camp8.jpg',
          'camp9.jpg',
          'camp10.jpg',
          'camp11.jpg',
          'camp12.jpg',
          'camp13.jpg',
          'camp14.jpg',
          'camp15.jpg',
          'camp16.jpg',
          'camp17.jpg',
          'camp18.jpg',
          'camp19.jpg'
          ];
          
        $scope.title1 = "Camp Whole Kids";
        $scope.title2 = "Camp Whole Kids";
        
        $scope.paragraph1 = "Sed laoreet dolor nunc, at placerat nunc tincidunt eget. \
        Mauris condimentum non ipsum at scelerisque. Phasellus at odio tempus, pulvinar \
        ipsum eget, aliquam neque. Integer quis scelerisque nunc. Quisque accumsan purus \
        in euismod aliquet. Fusce sodales ornare. Cras mauris orci, ullamcorper vitae \
        ligula et, consectetur commodo odio.";
      }
    })
    
    .state('swim', {
      url: "/swim",
      templateUrl: "/pages/subpages/programs/swim.php",
      controller: function($scope) {
        $scope.images = [
          'swim1.jpg',
          'swim2.jpg',
          'swim3.jpg',
          'swim4.jpg',
          'swim5.jpg',
          'swim6.jpg',
          'swim7.jpg'
          ];
      }
    })
    
    .state('xmas', {
      url: "/xmas",
      templateUrl: "/pages/subpages/programs/xmas.php",
      controller: function($scope) {
        $scope.images = [
          'xmas1.jpg',
          'xmas2.jpg',
          'xmas3.jpg',
          'xmas4.jpg',
          'xmas5.jpg',
          'xmas6.jpg',
          'xmas7.jpg',
          'xmas8.jpg',
          'xmas9.jpg',
          'xmas10.jpg'
          ];
      }
    })
    
    .state('moms', {
      url: "/moms",
      templateUrl: "/pages/subpages/programs/moms.php",
      controller: function($scope) {
        $scope.images = [
          'moms1.jpg',
          'moms2.jpg',
          'moms3.jpg',
          'moms4.jpg',
          'moms5.jpg'
          ];
      }
    })
    
    .state('community', {
      url: "community",
      templateUrl: "/pages/subpages/programs/community.php",
      controller: function($scope) {
        $scope.images = [
          'community1.jpg',
          'community2.jpg',
          'community3.jpg',
          'community4.jpg',
          'community5.jpg',
          'community6.jpg',
          'community7.jpg',
          'community8.jpg'
          ];
      }
    })
    
    .state('visitprogram', {
      url: "/visitprogram",
      templateUrl: "pages/subpages/visitprogram.php",
    })
    
    .state('wsu-cs', {
      url: "/wsu-cs",
      templateUrl: "pages/subpages/wsu-cs.php",
    })
    
    .state('impact', {
      url: "/impact",
      templateUrl: "pages/impact.php"
    })
    
    .state('impact_details', {
      url: "/impact_details",
      templateUrl: "pages/subpages/impact_details.php"
    })
    
    .state("helpUs", {
      url: "/helpUs",
      templateUrl: "pages/helpUs.php"
    })
    
    .state('donate', {
      url: "/donate",
      params: {
        scrollTo: null,
      },
      templateUrl: "pages/subpages/donate.php",
      controller: 'donateController'
    })
    
    .state('toys', {
      url: "/toys",
      templateUrl: "pages/subpages/toys.php"
    })
    
    .state('volunteer', {
      url: "/volunteer",
      templateUrl: "pages/subpages/volunteer.php"
    })
    
    .state('wishlist', {
      url: "/wishlist",
      templateUrl: "pages/subpages/wishlist.php"
    })

    .state('thankyou', {
      url: "/thankyou",
      templateUrl: "pages/subpages/thankyou.php"
    })
        
    .state("contact", {
      url: "/contact",
      params: {
        scrollTo: null,
      },
      templateUrl: "pages/contact.php",
      controller: "contactController"
    })
    
    .state("testPage", {
      url: "/testPage",
      templateUrl: "pages/testpage.php",
      controller: 'testPageController'
    })
    
    .state("developer", {
      url: "/developer",
      templateUrl: "pages/developer.php"
    });
    
});

wkoApp.run(function($rootScope, $window,  $location, $stateParams) {
  $rootScope.$on('$locationChangeSuccess', function() {
    if($stateParams.scrollTo == null){
      $window.scrollTo(0,0);
    }
  }
)});


/*global angular*/
(function () {
  angular.module('activates', [])
  .controller('Controller', ['$scope', function($scope) {
  }])
  .directive('activates', ['$location', function ($location) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        scope.$watch('$last',function(v){
          if (v) {
            $('.image-slider').slippry({
              captions: false
            });
          }
        });
      }
    };
  }]);
}());
angular.module('sticky', [])
.directive('sticky', function($document) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      angular.element(document).ready(function() {
        var offset = element.offset(),
            topPadding = 85;
        $document.scroll(function() {
          if ($document.scrollTop() > offset.top) {
            element.stop().animate({
              marginTop: $document.scrollTop() - offset.top + topPadding
            });
          } else {
            element.stop().animate({
              marginTop: 0
            });
          }
        });
      });
    }
  };
});

angular.module('showWhen', [])
.directive('showWhen', ['$window', function($window) {
  return {
    restrict: 'A',
    link: function(scope, element, attr) {
      
      scope.onResize = function() {
        var mq = attr.showWhen == 'large' ? '(min-width:991px)' : attr.showWhen;
        if($window.matchMedia(mq).matches){
          element.removeClass('ng-hide');
        } else {
          element.addClass('ng-hide');		
        }
      };
      
      scope.onResize();
      
      angular.element($window).bind('resize', function() {
        scope.onResize();
      });
    }
  };
}]);