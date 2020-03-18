gtApp

  .controller('mainCtrl', ['$scope', '$state', '$stateParams', '$http', '$q', 'htmlDir',
    function ($scope, $state, $stateParams, $http, $q, htmlDir) {

      var vm = this;
      vm.currentPage = parseInt($stateParams.page);

    }])

  .controller('courseCtrl', ['$scope', '$stateParams', '$http',
    function ($scope, $stateParams, $http) {

      var vm = this;
      $http.get('course-list.json').then(function(list) {
        vm.courses = list.data.courses;
        console.info(vm.courses);
      });

    }])

  .controller('projectsCtrl', ['$scope', '$stateParams', '$http',
    function ($scope, $stateParams, $http) {

      var vm = this;
      $http.get('project-list.json').then(function(list) {
        vm.projects = list.data.projects;
      });

    }])

  .controller('projectCtrl', ['$scope', '$state', '$http', 'projectService',
    function ($scope, $state, $http, projectService) {

      var vm = this;
      vm.name = $state.params.name;
      projectService.getProject($state.params.link).then(function(html) {
        jQuery('#content').html(html.data.replace(/  /g, "&nbsp;&nbsp;")); // chained replace statement?
      });

      iFrameResize({log:true, autoResize:true});

      // vm.speedlogs = null;
      // q
      //   .defer($http.get('/api/20170301.json'))
      //   .defer($http.get('/api/20170302.json'))
      //   .defer($http.get('/api/20170303.json'))
      //   .await(function(error, f1, f2, f3) {
      //     console.log(f1,f2,f3);
      //   });

    }])

  .controller('articlesCtrl', ['$scope', '$state', '$stateParams', '$http', '$q', 'htmlDir',
    function ($scope, $state, $stateParams, $http, $q, htmlDir) {

      var vm = this;

      $http.get('article-list.json').then(function(list) {
        vm.articles = list.data.articles;
      });

    }])

  .controller('articleCtrl', ['$scope', '$state', '$stateParams', 'articleService',
    function ($scope, $state, $stateParams, articleService) {

      var vm = this;
      vm.title = $state.params.title;
      articleService.getArticle($state.params.link).then(function(html) {
        jQuery('#content').html(html.data.replace(/  /g, "&nbsp;&nbsp;")); // chained replace statement?
      });

      iFrameResize({log:true, autoResize:true});

    }])

    .controller('mediaCtrl', ['$scope', '$stateParams',
    function ($scope, $stateParams) {

    }])

  .controller('contactCtrl', ['$scope', '$state', '$stateParams', '$http', '$q', 'htmlDir',
    function ($scope, $state, $stateParams, $http, $q, htmlDir) {

      var vm = this;
      var username = 'dpfrakes';

      vm.email = username + '@gmail.com';
      vm.linkedInUrl = 'https://www.linkedin.com/in/' + username

    }])

  .controller('resumeCtrl', ['$scope', '$stateParams',
    function ($scope, $stateParams) {

    }])

