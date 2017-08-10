/**
 * Created by dell on 2017/7/29.
 */
var app = angular.module('app', []);
app.controller('ctrl.main', ['$scope', function ($scope) {
    var originCellStyle = {
        widthIsAuto:false,
        width: '200px',
        heightIsAuto:false,
        height: '200px',
        order:0,
        flexGrow:0,
        flexShrink:1,
        flexBasisIsAuto:true,
        flexBasis:'200px',
        alignSelf:'auto'
    };
    $scope.containerStyleOptions = {
        flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
        flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
        justifyContent:['normal','flex-start','flex-end','center','space-between','space-around'],
        alignItems:['normal','flex-start','flex-end','center','baseline','stretch'],
        alignContent:['normal','flex-start','flex-end','center','space-between','space-around','stretch']
    };
    $scope.containerStyle = {
        widthIsAuto: true,
        width: '100%',
        heightIsAuto: true,
        height: '100%',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent:'normal',
        alignItems:'normal',
        alignContent:'normal'
    };
    $scope.cellStyleOptions={
        alignSelf:['auto','flex-start','flex-end','center','baseline','stretch']
    };
    $scope.cells = [];
    $scope.eventHandle = {
        addCell: function () {
            var newCell = $scope.cells.length ? angular.copy($scope.cells[$scope.cells.length - 1]) : originCellStyle;
            $scope.cells.push(newCell);
        },
        removeCell:function (index) {
            console.log(index);
            $scope.cells.splice(index,1);
        }
    };
}]);

