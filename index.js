console.log('Hello script!');
var loadingAnim = document.getElementById('loading__animation');
defaultLoadingClassName =
  loadingAnim.classList[0] + ' ' + loadingAnim.classList[1];
currentLoadingType = loadingAnim.classList[2];

console.log(defaultLoadingClassName);
console.log(currentLoadingType);

// This part of the script for testing the DOM Attributes change event

function changeLoadingType(t) {
  var loadingAnim = document.getElementById('loading__animation');
  console.log(loadingAnim);

  if (t == 'circle') {
    console.log('Circle loading');
    loadingAnim.style.borderRadius = '50%';
  } else if (t == 'square') {
    console.log('Square loading');
    loadingAnim.style.borderRadius = '0%';
  } else if (t == 'triangle') {
    console.log('Triangle loading');
    loadingAnim.style.borderRadius = '25%';
  } else if (t == 'hexagon') {
    console.log('Hexagon loading');
    loadingAnim.style.borderRadius = '1%';
  } else {
    console.log('Invalid loading type. Keep the current loading.');
  }
}

// End of testing

// Change the element class name to change loading type

function changeLoadingClass(t) {
  if (t == 'circle') {
    console.log('Class change to circle');
    currentLoadingType = 'loading__anim--type-circle';
    loadingAnim.className = defaultLoadingClassName + ' ' + currentLoadingType;
  } else if (t == 'square') {
    console.log('Class change to square');
    currentLoadingType = 'loading__anim--type-square';
    loadingAnim.className = defaultLoadingClassName + ' ' + currentLoadingType;
  } else if (t == 'triangle') {
    console.log('Class change to triangle');
    currentLoadingType = 'loading__anim--type-triangle';
    loadingAnim.className = defaultLoadingClassName + ' ' + currentLoadingType;
  } else if (t == 'hexagon') {
    console.log('Class change to hexagon');
    currentLoadingType = 'loading__anim--type-hexagon';
    loadingAnim.className = defaultLoadingClassName + ' ' + currentLoadingType;
  } else {
    console.log('Invalid loading type. Keep the current loading.');
  }
}
