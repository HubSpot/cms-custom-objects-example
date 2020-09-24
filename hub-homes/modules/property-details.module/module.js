var initPropertyInterestForm = function (formContainer) {
  var submissionForm = formContainer.querySelector(".property-interest__form");
  var messageContainer = formContainer.querySelector(
    ".property-interest__message"
  );
  var requestModal = formContainer.querySelector(".property-interest__modal");
  var requestButton = formContainer.querySelector(
    ".property-interest__request"
  );
  var requestCloseButton = formContainer.querySelector(
    ".property-interest__close-modal"
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
    .querySelector(".property-interest__submit")
    .addEventListener("click", function () {
      processSubmission();
    });
};

var propertyInterestForms = document.querySelectorAll(
  '.property-interest'
);

Array.prototype.forEach.call(propertyInterestForms, function (el) {
  initPropertyInterestForm(el);
});
