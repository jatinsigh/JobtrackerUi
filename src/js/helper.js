function setValue(id, new_value) {
    document.getElementById(id).value = new_value;
  }
  function getValue(id) {
    document.getElementById(id);
  }
  function setInnerHtml(id, newInnerHtml) {
    document.getElementById(id).innerHTML = newInnerHtml;
  }
  export { setValue, getValue,setInnerHtml };
  