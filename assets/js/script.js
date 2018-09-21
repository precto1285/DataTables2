$(document).ready(function () {
  $('#myTable').DataTable({
    "processing": true,
    "serverSide": true,
    "ajax": {
      "url": "post.php",
      "type": "POST"
    },
    "columns": [
      { "data": "Name" },
      { "data": "Phone" },
      { "data": "Sentiment" },
      { "data": "Last Interaction" },
      { "data": "Status" },
      { "data": "Action" }
    ]
  });

});