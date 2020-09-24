var initRealEstateInterestForm = function (formContainer) {
  var submissionForm = formContainer.querySelector(".real-estate-interest__form");
  var messageContainer = formContainer.querySelector(
    ".real-estate-interest__message"
  );
  var requestModal = formContainer.querySelector(".real-estate-interest__modal");
  var requestButton = formContainer.querySelector(
    ".real-estate-interest__request"
  );
  var requestCloseButton = formContainer.querySelector(
    ".real-estate-interest__close-modal"
  );

  requestButton.addEventListener("click", function () {
    requestModal.style.display = "block";
  });
  requestCloseButton.addEventListener("click", function () {
    requestModal.style.display = "none";
  });

  var processSubmission = function () {
    var SUBMISSION_ENDPOINT = "/_hcms/api/submit";

    var serializeForm = function (form) {
      var obj = {};
      var formData = new FormData(form);
      for (var key of formData.keys()) {
        obj[key] = formData.get(key);
      }
      return obj;
    };

    var handleFormSuccess = function () {
      submissionForm.style.display = "none";
      messageContainer.style.display = "block";
    };

    axios
      .post(SUBMISSION_ENDPOINT, serializeForm(submissionForm))
      .then(function (response) {
        if (response.data.statusCode === 200) {
          handleFormSuccess();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  submissionForm
    .querySelector(".real-estate-interest__submit")
    .addEventListener("click", function () {
      processSubmission();
    });
};

var realEstateInterestForms = document.querySelectorAll(
  '.real-estate-interest'
);

Array.prototype.forEach.call(realEstateInterestForms, function (el) {
  initRealEstateInterestForm(el);
});
