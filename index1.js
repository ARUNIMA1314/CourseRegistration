var n1 = document.getElementById('nm');
var n2 = document.getElementById('stimulate');
var n3 = document.getElementById('dur');
var n4 = document.getElementById('cT');
var table = document.getElementById('myTable');
var cid;
var arr=[];
//Gets executed when user gives an input for the Course Name field
n1.addEventListener("input", function(){
  validateCourseName();
});


// Validates Course Name
function validateCourseName(){
  for (var i = 0; i < n1.value.length; i++) {
    var ch = n1.value.charCodeAt(i);
    if(!((ch>=65&&ch<=90)||(ch>=97&&ch<=122)||ch==32)){
      alert("Course Name can only contain alphabets and whitespaces");
      return false;
    }
  }
  if(n1.value.length>50){
    alert("Course Name can't exceed 50 characters");
    return false;
  }
}

//Gets executed when the user clicks the Add button
n2.addEventListener("click",function(){
  fillCourseId();
  validateCourseName();
  addRow();
  document.getElementById('cid').value="";
  n1.value="";
  n3.value="Choose any one...";
  n4.value="Choose any one...";
});

n4.addEventListener("input", function(){
  fillCourseId();
});

//Autogenerates Course ID depending on the Course Name
function fillCourseId(){

  var a;
  if(n1.value!=""){
    a=n1.value+n4.value;
    if (arr.includes(a)==true){
        var n=arr.indexOf(a);
        n+=1;
        if(n<10)
          cid = "C0"+n;
        else
          cid = "C"+n;
        document.getElementById('cid').value=cid;
    }
    else{
      arr.push(a);
      if(arr.length<10)
        cid = "C0"+arr.length;
      else
        cid = "C"+arr.length;
      document.getElementById('cid').value=cid;
    }
  }
}

//Adds rows into the Course details table
function addRow(){
  var rowCount = myTable.rows.length;
  var row = myTable.insertRow(rowCount);
  document.getElementById('cid').value=cid;
  row.insertCell(0).innerHTML = document.getElementById('cid').value;
  row.insertCell(1).innerHTML = n1.value;
  row.insertCell(2).innerHTML = n3.value;
  row.insertCell(3).innerHTML = n4.value;
}
