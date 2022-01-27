function handleData() {
  var form_data = new FormData(document.querySelector('form'));

  if (!form_data.has('Medical[]')) {
    document.getElementById('chk_option_error').style.visibility = 'visible';
    return false;
  } else {
    document.getElementById('chk_option_error').style.visibility = 'hidden';
    return true;
  }
}
function hide() {
  document.getElementById('myTextarea').style.display = 'none';
}
function show() {
  document.getElementById('myTextarea').style.display = 'block';
}
function display() {
  const firstnameinput = document.getElementById('firstname').value;
  const lastnameinput = document.getElementById('lastname').value;
  const genderfemale = document.getElementById('female').value;
  const gendermale = document.getElementById('male').value;
  const addressinput = document.getElementById('Address').value;
  const nationalitylist = document.getElementById('Cannadian').value;
  const medicationinput = document.getElementById('myTextarea').value;
  var itemForm = document.getElementById('form'); // getting the parent container of all the checkbox inputs
  var checkBoxes = itemForm.querySelectorAll('input[type="checkbox"]'); // get all the check box
  let result = [];
  checkBoxes.forEach((item) => {
    // loop all the checkbox item
    if (item.checked) {
      //if the check box is checked

      result.push(item.value); //stored the objects to result array
    }
  });
  console.log(result.toString());
  // var a = document.details.fname.value;
  // var b = document.details.lname.value;
  // var c = document.details.gender.value;
  // var d = document.details.mmale.value;
  // var e = document.details.nCannadian.value;
  // var f = document.details.address.value;
  // var g = document.details.nCannadian.value;
  // var h = document.details.textareas.value;
  alert(
    'FIRST NAME:' +
      firstnameinput +
      '     ' +
      'Lastname:' +
      lastnameinput +
      '     ' +
      'Gender:' +
      genderfemale +
      '     ' +
      'Gender:' +
      gendermale +
      '     ' +
      'Address:' +
      addressinput +
      '     ' +
      'Nationality:' +
      nationalitylist +
      '     ' +
      'Medical:' +
      result.toString() +
      '     ' +
      'Medication:' +
      medicationinput
  );
}

// const run = () => {
//   formElem.addEventListener('submit');
// };
function reset() {
  document.getElementById('form').reset();
}
