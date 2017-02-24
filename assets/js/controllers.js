gtApp

  .controller('mainCtrl', ['$scope', '$state', '$stateParams', '$http', '$q', 'htmlDir',
    function ($scope, $state, $stateParams, $http, $q, htmlDir) {

      var vm = this;
      vm.currentPage = parseInt($stateParams.page);
      vm.pageSize = 4;

      // $http.get('articles/').then(function(data) {
      //   var requests = htmlDir.getRequests(data);
      //   $q.all(requests).then(function(allFiles) {
      //     var result = [];
      //     allFiles.forEach(function(fileData) {
      //       // add full article to JSONs and append to DOM to send as state param
      //       result.push(fileData.data);
      //     });
      //     vm.articles = result;
      //   });
      // });

      // TODO automate listing.json creation via Jenkins
      $http.get('listing.json').then(function(listing) {
        vm.articles = listing.data.articles;
      })

      vm.nextPage = function() {
        $state.go('.', {page: parseInt(vm.currentPage) + 1}, {notify: true});
      };

      vm.prevPage = function() {
        $state.go('.', {page: parseInt(vm.currentPage) - 1}, {notify: true});
      };

      $scope.$on('$locationChangeSuccess', function(e, toState, toParams, fromState, fromParams) {
        //console.info('arriving at home');
        if (!jQuery('#main #intro')[0] && !jQuery('#sidebar #intro')[0]) {
          //console.log('add it to main');
          jQuery('#main #intro').show();
        }
        vm.currentPage = $stateParams.page;
      });

      $scope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
        //console.info('leaving home');
        if (jQuery('#main #intro')[0] && !jQuery('#sidebar #intro')[0]) {
          //console.log('remove it');
          jQuery('#main #intro').hide();
        }
        vm.currentPage = $stateParams.page;
      });

    }])

  .controller('courseCtrl', ['$scope', '$stateParams',
    function ($scope, $stateParams) {

    }])

  .controller('projectCtrl', ['$scope', '$stateParams',
    function ($scope, $stateParams) {
      
    }])

  .controller('bioCtrl', ['$scope', '$stateParams',
    function ($scope, $stateParams) {

    }])

  .controller('resumeCtrl', ['$scope', '$stateParams',
    function ($scope, $stateParams) {

    }])

  .controller('articleCtrl', ['$scope', '$state', '$stateParams', 'articleService',
    function ($scope, $state, $stateParams, articleService) {

      var vm = this;
      vm.title = $state.params.title;
      articleService.getArticle($state.params.link).then(function(html) {
        jQuery('#content').html(html.data.replace(/\n/g, "<br>").replace(/  /g, "&nbsp;&nbsp;")); // chained replace statement?
      });

      iFrameResize({log:true, autoResize:true});

    }])
