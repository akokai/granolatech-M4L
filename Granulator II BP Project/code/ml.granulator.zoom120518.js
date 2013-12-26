inlets = 1;
outlets = 3;

function list()
    {
    var zoom_factor = arguments[0];
    var file_size = arguments[1];
    var relpos = arguments[2];

    var pos = relpos *file_size;
    
    var view_length = file_size * zoom_factor;  

// -------- zoom ----------------
    
    
    if (view_length > 3.)  // 3ms  is minium zoom in our fashist zoom word.
        {
        outlet(2,"in active 1"); // turn zoom_in button on
        }
	else
		{
    outlet(2,"in active 0"); // // turn zoom_in button off
		}
		   
    if (zoom_factor < 1.)
        {
		outlet(2,"out active 1"); // turn zoom_out button on
		outlet(2,"all active 1"); // turn show all button on
		}
	else
		{
		outlet(2,"out active 0"); // turn zoom_out button off
		outlet(2,"all active 0"); // turn show all button off
		}
   


var left_boundry = pos-view_length*.5;
var right_boundry = pos + view_length *.5;

view_start=0;

if (left_boundry >= 0 && right_boundry<= file_size)
    {
view_start=pos-view_length*.5;
    }

if (left_boundry < 0 )
    {
view_start=0;
    }

if (right_boundry > file_size )
    {
view_start=file_size-view_length;;
    }

outlet(0,view_start); // result of  view_start calculation

outlet(1,view_length); // result of  view_length. we need to send this AFTER view_start for some obscure reason...

    var end =(view_start + view_length);

 }

