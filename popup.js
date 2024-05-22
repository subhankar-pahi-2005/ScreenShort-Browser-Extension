document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('takeScreenshot').addEventListener('click', function () {
      chrome.tabs.captureVisibleTab(null, {}, function (img) {
        var link = document.createElement('a');
        link.href = img;
        link.download = 'screenshot.png';
        link.click();
      });
    });
  });
  