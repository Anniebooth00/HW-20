function showContent(sectionNumber) {
  // Hide all content sections
  for (let i = 1; i <= 5; i++) {
    var content = document.getElementById("content" + i);
    if (content) {
      content.style.display = "none";
    }
  }

  // Show the selected content section
  var currentContent = document.getElementById("content" + sectionNumber);
  if (currentContent) {
    currentContent.style.display = "block";
  }
}

function showInitialContent() {
  var initialContent = document.getElementById("initial-content");
  var content1 = document.getElementById("content1");

  if (content1.style.display !== "none") {
    content1.style.display = "none";
    initialContent.style.display = "block";
  }
}

// For the Back button in content2
function showContent1() {
  showContent(1);
}

// For the Next button in content2
function showContent3() {
  showContent(3);
}

// For the Next and Back buttons in content3
function showContent2() {
  showContent(2);
}

function showContent2Back() {
  showContent(2);
}

// For the Next button in content4
function showContent2From4() {
  showContent(2);
}

// For the Back button in content5
function showContent4From5() {
  showContent(4);
}

