angular.module('crudApp').factory('CrudAppServices', CrudAppServices);
CrudAppServices.$inject = ['$http'];
    function CrudAppServices($http) {
        var api = 'http://127.0.0.1:3000',
        route = "/studentinfo",
        service = {
            getInfo,
            addStudent,
            editStudentInfo,
            deleteStudent
        };
    return service;

    
    //displays/read studentInfo using http get funtion
    function getInfo() {
        var url = api + route + '/info';

        return $http.get(url)
            .then(result => {
                console.log(result);
                return result;
            });
            
        }

    //add/create student using http post function
    function addStudent(data) {
        console.log(data);
        return $http.post(api + route + '/studentpost', data)
            //.body (data)
            .then(result => {       
                console.log(result);
                return result;
            })
        } 
    
    //edit student using http patch function
    function editStudentInfo(data) {
        console.log(data);

        return $http.patch(api + route + '/editstudent', data)
        .then(result => {       
            console.log(result);    
            return result;
        })
    }

    //delete function
    //when using 'delete', the query was not able to run, however when changed to post it runs smoothly.
    function deleteStudent(data) {

        return $http.post(api + route, data)
        .then(result => {       
            console.log(result);
            return result;
        })
    }

}