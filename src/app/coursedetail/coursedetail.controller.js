(function() {
  'use strict';

  angular
    .module('javabrains')
    .controller('CourseDetailController', CourseDetailController);

  /** @ngInject */
  function CourseDetailController(courseData, courseDataService) {
     this.info = courseData.data;
     console.log(this.info);
     var vm = this;
     // vm.info={"code":"javaee_jaxws","desc":"This course introduces you to RESTful Web Services using the JAX-RS standard specification. You will learn what RESTful web services are and how to write them. You will write a sample RESTful web service from scratch, design the APIs, implement it using Jersey and run it on Tomcat. ","img":"https://i.ytimg.com/vi/xkKcdK1u95s/mqdefault.jpg","level":"Beginner","name":"Developing REST APIs with JAX-RS","objectives":["Understanding REST","Learning how to design a REST API","Building a sample social media API","Writing code using Jersey and deploying using Tomcat"],"slNo":1,"tags":["Java","Java EE"],"topic":"struts2","units":[{"courseCode":"javaee_jaxrs","firstLesson":"introduction","lessons":[{"description":"Welcome to this course. This tutorial introduces you to REST APIs and explains some basic concepts.","permalinkName":"introduction","title":"Introduction","unitNumber":1},{"description":"In this tutorial, we will learn some HTTP concepts that have influenced REST.","permalinkName":"REST-and-HTTP","title":"REST and HTTP","unitNumber":1},{"description":"In this tutorial, we’ll start designing a sample RESTful API for our sample social media application. And through the process, we’ll understand how RESTful URIs are designed.","permalinkName":"Designing-Resource-URIs","title":"Designing Resource URIs","unitNumber":1},{"description":"You can think of RESTful URIs as belonging to two types: instance resource URIs and collection resource URIs. Let's understand what they mean.","permalinkName":"RESTful-URI-types","title":"RESTful URI types","unitNumber":1},{"description":"Now that we've identified some important resource URIs, let's work on the operations that can be performed and the data that's exchanged.","permalinkName":"HTTP-Methods","title":"HTTP Methods","unitNumber":1},{"description":"Idempotence. Yes, that's a word. And it's an important property of HTTP methods according to the specifications.","permalinkName":"Idempotence-In-HTTP-Methods","title":"Idempotence In HTTP Methods","unitNumber":1},{"description":"We've looked at requests so far, and understood resource URIs and HTTP methods. Let's switch to responses now.","permalinkName":"Rest-Response","title":"REST Response","unitNumber":1},{"description":"In this tutorial, we'll learn about an important concept relating to REST APIs: HATEOAS\n","permalinkName":"HATEOAS","title":"HATEOAS","unitNumber":1},{"description":"In this tutorial, we'll learn about the Richardson Maturity Model, a way for REST APIs to be classified, and the \"RESTfulness\" of an API determined.","permalinkName":"The-Richardson-Maturity-Model","title":"The Richardson Maturity Model","unitNumber":1}],"totalLessons":9,"unitDescription":"This unit introduces you to the concept of REST. You'll understand what RESTful web services are and how to design a good REST API.","unitName":"REST API Design","unitNumber":1},{"courseCode":"javaee_jaxrs","firstLesson":"What-Is-JAXRS","lessons":[{"description":"In this tutorial, we understand what JAX-RS is and how it relates to Jersey, the implementation library.","permalinkName":"What-Is-JAXRS","title":"What Is JAX-RS?","unitNumber":2},{"description":"We will now setup a new project in our development environment to start writing a REST API application.","permalinkName":"Setting-Up","title":"Setting Up","unitNumber":2},{"description":"Let's now look under the hood and understand how the REST API application works. We'll understand some of the components that handle the API requests and how they fit together.","permalinkName":"Understanding-The-Application-Structure","title":"Understanding The Application Structure","unitNumber":2},{"description":"In this tutorial, we'll create our first JAX-RS resource that handles a GET request to an API URL.","permalinkName":"Creating-A-Resource","title":"Creating A Resource","unitNumber":2},{"description":"Let's return some data in XML format from the resource. We'll update the MessageResource to return a list of Messages in XML.","permalinkName":"Returning-Xml-Response","title":"Returning XML Response","unitNumber":2},{"description":"Now I'll introduce you to a REST API client that will be useful for the rest of the course, for making REST API calls. The example client I demonstrate, called Postman, is a Chrome add-on.","permalinkName":"Installing-A-Rest-Api-Client","title":"Installing A REST API Client","unitNumber":2},{"description":"In this tutorial, we'll build and stub business and data services that we can call from the Message resource class.","permalinkName":"Building-Service-Stubs","title":"Building Service Stubs","unitNumber":2},{"description":"In this tutorial, you'll learn how to access and map to URL with path parameters, using the @PathParam annotation.","permalinkName":"Accessing-Path-Params","title":"Accessing Path Params","unitNumber":2},{"description":"We'll now switch the response format of the APIs from XML to JSON.","permalinkName":"Returning-JSON-Response","title":"Returning JSON Response","unitNumber":2},{"description":"In this tutorial, we'll implement the POST method API to create new instances of Message resource.","permalinkName":"Implementing-POST-Method","title":"Implementing POST Method","unitNumber":2},{"description":"We'll now implement update and delete APIs with the PUT and DELETE methods respectively.","permalinkName":"Implementing-Update-And-Delete","title":"Implementing Update and Delete","unitNumber":2},{"description":"Now, we'll implement another resource, the ProfileResource class.","permalinkName":"Implementing-ProfileResource","title":"Implementing ProfileResource","unitNumber":2},{"description":"In this tutorial, we'll learn how to implement pagination and filtering features in REST APIs.","permalinkName":"Pagination-And-Filtering","title":"Pagination And Filtering","unitNumber":2},{"description":"In this tutorial, you'll learn about a few more Param annotations that inject request values into resource methods.","permalinkName":"The-Param-Annotations","title":"The Param Annotations","unitNumber":2},{"description":"In this tutorial, we'll cover a few more ways to have request information injected into resource methods. We'll look at Context and BeanParam annotations.","permalinkName":"Using-Context-And-BeanParam-Annotations","title":"Using Context And BeanParam Annotations","unitNumber":2},{"description":"We'll now implement nested resources using the \"sub-resources\" feature in JAX-RS. ","permalinkName":"Implementing-Subresources","title":"Implementing Subresources","unitNumber":2},{"description":"Learn how to send status codes and location headers from REST APIs. We'll update the create API to send the 201 status code and the Location header.","permalinkName":"Sending-Status-Codes-and-Location-Headers","title":"Sending Status Codes and Location Headers","unitNumber":2},{"description":"Learn how to handle exceptions in a REST API application using Jersey's ExceptionMapper.","permalinkName":"Handling-Exceptions","title":"Handling Exceptions","unitNumber":2},{"description":"Here's another way to handle exception scenarios in JAX-RS, using WebApplicationException.","permalinkName":"Using-WebApplicationException","title":"Using WebApplicationException","unitNumber":2},{"description":"In Part 1 of this 2-part tutorial, we'll implement HATEOAS links in the Message response for the \"self\" rel attribute.","permalinkName":"HATEOAS-Part-1","title":"HATEOAS (Part 1)","unitNumber":2},{"description":"In Part 2 of this 2-part tutorial, we'll implement HATEOAS links in the Message response for the \"profile\" and \"comment\" rel attributes.","permalinkName":"HATEOAS-Part-2","title":"HATEOAS (Part 2)","unitNumber":2},{"description":"I'll now introduce you to an interesting concept called Content Negotiation, and how different content types can be handled in JAX-RS.","permalinkName":"Content-Negotiation","title":"Content Negotiation","unitNumber":2}],"totalLessons":22,"unitDescription":"In this unit, we learn about writing REST APIs in Java with JAX-RS. We will build the Messenger API with JAX-RS and Jersey.","unitName":"Implementation with JAX-RS","unitNumber":2}]};
     
     // this.info.topicName = _.findWhere(courseDataService.topics, {'id': this.info.topic}).name;
     vm.info.topic = courseDataService.topicMap[vm.info.topic];
     vm.info.imageUrl = '/assets/images/' + vm.info.code + '.jpg'
     vm.info.courseBaseUrl = '/courses/' + vm.info.code + '/lessons/';
     vm.info.startCourseUrl =  vm.info.courseBaseUrl + vm.info.units[0].firstLesson;
     angular.forEach(vm.info.units, function(unit) {
       unit.unitNumber = '0' + unit.unitNumber; // Not planning to *ever* have > 10 units per course. Change this if that isn't true.
       unit.topic = vm.info.topic.code;
     })
  }
})();