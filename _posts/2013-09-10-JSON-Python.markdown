Minor JSON + Python issue

I've been working on a small project to provide a webservice for Andre Tieman's DraftPrint3D -- Andre is basically working as a service bureau for 3D printing, allowing you to send in a 3D file for printing. Currently Andre is doing his quoting by hand, but soon you'll be able to upload a file and receive an automatic quote from the site. 

As part of this process we need a way for admins to define printers and options available to users. We have a data structure on the server that lists which printers are available and what their options and costs are. For this to be editable we then transfer it to the  user for local editing. For this to happen the the client starts an AJAX call as soon as $(document).ready() fires. The python server opens the file, reads the contents, runs it through json.dumps() and sends it to the client where it gets parsed. Here's where I ran into a small road block which I haven't seen documented before. The file is received as a string like so:

"[{'baz': [{'aaaa': '352'}, {'aagg': '45'}, {'zz': '2'}]}, {'foo': [{'aaa': '2'}, {'c': '24'}, {'zzz': '222'}]}, {'bar': [{'zzz': '22'}, {'z': '11'}, {'h': '444'}]}, {'zc': [{'zzzz': '121'}, {'aa': '0.00'}]}, {'fhfh': [{'zzzz': '2342'}, {'x': '2'}]}]"

Running that through JSON.parse raises a SyntaxError. The problem is all the "'" chars. It took me a few minutes to craft the correct regex to fix this: string.replace(/'/g, '"'). Everything works as expected following that.