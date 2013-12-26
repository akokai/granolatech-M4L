inlets = 1;
outlets = 1;

function list()
{

var mode = 0;

var pos = arguments[0];
var start = arguments[1];
var length = arguments[2];

var end =(start + length);



if ((pos>=start && pos<= end) == 0)
{
var mode = 1;
}

outlet(0,"active",mode);
}



