// dataLair = dataLayer #worstEasterEgg
$(document).ready(function(){
  var pageName = $('.nav-tabs .active')[0].innerHTML;

  window.digitalData = {
    page: {
      pageName: pageName,
      siteSection: "we only have 1"
    },
    customer: {
      loginStatus: "Logged Out"
    }
  }
});
