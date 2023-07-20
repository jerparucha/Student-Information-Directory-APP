var app = angular.module('crudApp', ['ui.bootstrap']);
    
app.controller('CrudAppController', ['CrudAppServices', '$scope', '$http', '$uibModal', function (CrudAppServices, $scope, $http, $uibModal){

        $scope.studInfo = [];
        
        $scope.studentDetails = {};
        $scope.addStudent = addStudent;
        $scope.editStudent = editStudent;
        $scope.deleteStudent = deleteStudent;
        
        getStudentsInfo();

        function getStudentsInfo(){
            CrudAppServices.getInfo().then((result) => {

                $scope.studInfo = result.data;
                console.log($scope.studInfo);
            });
        }

    
        function addStudent() {
            console.log($scope.studentDetails);
            var data = {
                studentId: $scope.studentDetails.studentId,
                studentName: $scope.studentDetails.studentName,
                studentYear: $scope.studentDetails.studentYear,
                studentSect: $scope.studentDetails.studentSect,
                studentEmail: $scope.studentDetails.studentEmail
            }

            console.log(data);

            CrudAppServices.addStudent((data)).then(result =>{
                console.log(result);
                alert("Student Data Sucessfully Created!");
            })
        }

        function editStudent() {
            console.log($scope.studentDetails);
            var data = {
                studentId: $scope.studentDetails.studentId,
                studentName: $scope.studentDetails.studentName,
                studentYear: $scope.studentDetails.studentYear,
                studentSect: $scope.studentDetails.studentSect,
                studentEmail: $scope.studentDetails.studentEmail
            }
    
            console.log(data);
    
                CrudAppServices.editStudentInfo((data)).then(result =>{
                    console.log(result);
                    alert("Successfully Updated!");
                })
        }

        function deleteStudent(){
            console.log($scope.studentDetails);

            var data = {
                studentId: $scope.studentDetails.studentId,
                studentName: $scope.studentDetails.studentName,
                studentYear: $scope.studentDetails.studentYear,
                studentSect: $scope.studentDetails.studentSect,
                studentEmail: $scope.studentDetails.studentEmail
            }


            CrudAppServices.deleteStudent(JSON.stringify(data)).then(result =>{
                console.log(result);
                alert("Successfully deleted!");
            });

        }
    }]);

