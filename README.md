# DataTables2

Server-side processing - where filtering, paging and sorting calculations are all performed by a server.

There are times when reading data from the DOM is simply too slow or unwieldy, particularly when dealing with many thousands or millions of data rows. To address this DataTables' server-side processing feature provides a method to let all the "heavy lifting" be done by a database engine on the server-side (they are after all highly optimised for exactly this use case!), and then have that information drawn in the user's web-browser. Consequently, you can display tables consisting of millions of rows with ease.

When using server-side processing, DataTables will make an Ajax request to the server for each draw of the information on the page (i.e. when paging, ordering, searching, etc.). DataTables will send a number of variables to the server to allow it to perform the required processing and then return the data in the format required by DataTables.

By default DataTables operates in client-side processing mode, but can be switched to server-side processing mode using this option. Server-side processing is useful when working with large data sets (typically >50'000 records) as it means a database engine can be used to perform the sorting etc calculations - operations that modern database engines are highly optimised for, allowing use of DataTables with massive data sets (millions of rows).

When operating in server-side processing mode, DataTables will send parameters to the server indicating what data it needs (what page, what filters are applied etc), and also expects certain parameters back in order that it has all the information required to display the table. 