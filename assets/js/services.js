gtApp

	.factory('htmlDir', function ($http, $q) {
		return {
			getRequests: function (response) {
				var fileRequests = [];
				var filenames = this.getFileList(response);
				var filesRetrieved = 0;
				for (var idx = 0; idx < filenames.length; idx++) {
					fileRequests.push($http.get('articles/' + filenames[idx]));
				}
				return $q.all(fileRequests);
			},
			getFileList: function (response) {
				var filenames = [];
				var parsedHtml = jQuery(response.data);
				var rows = jQuery(parsedHtml[5])[0].rows; // TODO traverse better, try harder
				for (var i = 0, r; r = rows[i]; i++) {
					for (var j = 0, c; c = r.cells[j]; j++) {
						cellVal = jQuery(c)[0].innerText;
						if (cellVal.match(/.json$/)) {
							filenames.push(cellVal);
						}
					}
				}
				return filenames;
			}
		}
	})

	.factory('courseService', function($http) {
		return {
			getProject: function (projectUrl) {
				return $http.get('projects/' + projectUrl);
			}
		}
	})

	.factory('projectService', function($http) {
		return {
			getProject: function (projectUrl) {
				return $http.get('projects/' + projectUrl);
			}
		}
	})

	.factory('articleService', function($http) {
		return {
			getArticle: function (articleUrl) {
				return $http.get('articles/' + articleUrl);
			}
		}
	})

