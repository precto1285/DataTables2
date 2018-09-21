$(document).ready(function () {
  $('#myTable').DataTable({
    "processing": true,
    "serverSide": true,
    "axios": {
      "url": "https://beta.ripemetrics.com/api/fake/customers/list",
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