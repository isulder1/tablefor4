'use strict';

reviewApp.controller('reviewController',
    function reviewController ($scope) {

        $scope.reviews = [
            {
                name: "Roat Osha"
            }
        ];

        $scope.showReviewDetails = function (review) {
            console.log('In showReviewDetails for: ' + review.name);
        };
    }
);