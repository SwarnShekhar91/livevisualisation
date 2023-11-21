function redirectToPage2() {
    // Get values from the input fields
    var row1col1 = document.getElementById("row1col1").value;
    var row1col2 = document.getElementById("row1col2").value;
    var row1col3 = document.getElementById("row1col3").value;
    var row1col4 = document.getElementById("row1col4").value;
    var row1col5 = document.getElementById("row1col5").value;

    var row2col1 = document.getElementById("row2col1").value;
    var row2col2 = document.getElementById("row2col2").value;
    var row2col3 = document.getElementById("row2col3").value;
    var row2col4 = document.getElementById("row2col4").value;
    var row2col5 = document.getElementById("row2col5").value;

    // Construct the URL for page2.html with parameters
    var url = "page2.html?" +
              "row1col1=" + encodeURIComponent(row1col1) +
              "&row1col2=" + encodeURIComponent(row1col2) +
              "&row1col3=" + encodeURIComponent(row1col3) +
              "&row1col4=" + encodeURIComponent(row1col4) +
              "&row1col5=" + encodeURIComponent(row1col5) +
              "&row2col1=" + encodeURIComponent(row2col1) +
              "&row2col2=" + encodeURIComponent(row2col2) +
              "&row2col3=" + encodeURIComponent(row2col3) +
              "&row2col4=" + encodeURIComponent(row2col4) +
              "&row2col5=" + encodeURIComponent(row2col5);

    // Redirect to page2.html
    window.location.href = url;
}