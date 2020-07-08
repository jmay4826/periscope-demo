console.log('cleanup fired');
var loaded = false;
var buttonChanged = false;

for (var x = 0; x < 50; x++) {
  setTimeout(function () {
    var button = document.querySelector('.ReportsButton__reportsButtonWrapper');
    if (button && !buttonChanged) {
      // clear any react event listeners
      button.innerHTML = button.innerHTML;
      button.addEventListener('click', function () {
        window.location.href = '/reports';
      });
      buttonChanged = true;
    }

    if (
      document.getElementsByClassName(
        'ReportsPage__periscopeReportsContainer',
      )[0] !== undefined &&
      loaded == false
    ) {
      document.getElementsByClassName(
        'ReportsPage__periscopeReportsContainer',
      )[0].innerHTML =
        "<iframe src='https://app.periscopedata.com/shared/878c40b8-3fea-48ff-8e5b-9191b971fb76' height='1000px' width='100%'></iframe>";
      loaded = true;
      console.log('cleanup completed');
    }
  }, x * 100);
}
