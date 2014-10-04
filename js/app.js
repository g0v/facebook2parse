Parse.initialize(
  "QDCw1Ntq4E9PmPpcuwKbO2H0B1H0y77Vj1ScO9Zx",
  "6jaJvf46pYub6Ej9IjhhIXNtZjTqRY0P4IqAJFhH"
);

var TestObject = Parse.Object.extend("TestObject");

window.fbAsyncInit = function() {
  FB.init({
    appId      : '729105557142181',
    xfbml      : true,
    version    : 'v2.1'
  });
  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      FB.api('/me', function(response) {
        console.log(response.id);

        var testObject = new TestObject();
        testObject
          .save({fbid: response.id})
          .then(function(object) {
            alert("yay! it worked");
          }
        );
      });
    }
    else {
      FB.login();
    }
  });
};


(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));