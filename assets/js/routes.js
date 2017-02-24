gtApp

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'mainCtrl as main',
        params: {
          page: {
            value: '0',
            squash: false
          }
        },
        reloadOnSearch: false
      })

      .state('courses', {
        url: '/courses',
        templateUrl: 'templates/courses.html',
        controller: 'courseCtrl'
      })

      .state('projects', {
        url: '/projects',
        templateUrl: 'templates/projects.html',
        controller: 'projectCtrl'
      })

      .state('bio', {
        url: '/bio',
        templateUrl: 'templates/bio.html',
        controller: 'bioCtrl'
      })

      .state('resume', {
        url: '/resume',
        templateUrl: 'templates/resume.html',
        controller: 'resumeCtrl'
      })

      .state('articles', {
        url: '/articles/:aname',
        // abstract: true,
        templateUrl: 'templates/article.html',
        controller: 'articleCtrl as ac',
        params: {
          link: null,
          title: null
        }
      })

      // .state('articles.image-blending', {
      //   url: '/image-blending',
      //   templateUrl: 'templates/article.html',
      //   controller: 'articleCtrl as ac',
      //   params: {
      //     title: 'Image Blending'
      //   }
      // })

      // .state('articles.room-obscura', {
      //   url: '/room-obscura',
      //   templateUrl: 'templates/article.html',
      //   controller: 'articleCtrl as ac',
      //   params: {
      //     title: 'Room Obscura'
      //   }
      // })

      // .state('articles.api-hacking', {
      //   url: '/api-hacking',
      //   templateUrl: 'templates/article.html',
      //   controller: 'articleCtrl as ac',
      //   params: {
      //     title: 'API Hacking',
      //     articleUrl: 'personal-apihacking.json '
      //   }
      // })

      // .state('articles.automated-speedtest', {
      //   url: '/automated-speedtest',
      //   templateUrl: 'templates/article.html',
      //   controller: 'articleCtrl as ac',
      //   params: {
      //     title: 'Automated Speedtest'
      //   }
      // })

      // .state('articles.grade-calculator', {
      //   url: '/grade-calculator',
      //   templateUrl: 'templates/article.html',
      //   controller: 'articleCtrl as ac',
      //   params: {
      //     title: 'Grade Calculator',
      //     articleUrl: 'omscs-gradecalculator.json'
      //   }
      // })

    $urlRouterProvider.otherwise('/')

  });
