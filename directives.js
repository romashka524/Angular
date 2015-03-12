angular
    .module("directivesModule", [])
    .directive("testcolor", function () {

        return {
            restrict: "A",
            require: "?ngModel",
            link: function ($scope, $element, attrs, ngModel) {
                if ($scope.i.priority == "High") {

                    $element.css({ "color": "orange" });

                }
                if ($scope.i.priority == "Medium") {

                    $element.css({ "color": "yellow" });

                }
                if ($scope.i.priority == "Low") {

                    $element.css({ "color": "white" });

                }
            }
        };
    });