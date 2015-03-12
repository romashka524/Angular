angular
    .module("app", ["filtersModule", "directivesModule"])
    .controller("Contorller1", ["$scope",
        function ($scope) {

            $scope.name = "Zap";

            $scope.filterName = "";

            $scope.items = [];
            $scope.items2 = [];
            $scope.newItem = {
                name: "",
                priority: "",
                ispoln: ""
            };
            $scope.add = function () {
                if (($scope.newItem.name != "") && ($scope.newItem.ispoln != "") && (($scope.newItem.priority == "High") || ($scope.newItem.priority == "Medium") || ($scope.newItem.priority == "Low"))) {
                    $scope.items.push({
                        name: $scope.newItem.name,
                        priority: $scope.newItem.priority,
                        ispoln: $scope.newItem.ispoln
                    });
                    $scope.newItem.name = "";
                    $scope.newItem.priority = "";
                    $scope.newItem.ispoln = "";
                } else {
                    alert("Заполните все поля!\nПриоритет нужно выбрать!!!");
                }
            };


            $scope.del = function (item) {
                var index = $scope.items.indexOf(item);
                $scope.items.splice(index, 1);

            }
            $scope.replace = function (mname, mpr, misp, i) {
                $scope.items2.push({
                    name: mname,
                    priority: mpr,
                    ispoln: misp
                });
                $scope.del(i);
            };

        }]);