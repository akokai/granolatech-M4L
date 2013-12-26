// inlets and outlets
inlets = 1;
outlets = 7;

function msg_int(a)
{
outlet(6,a % 10);
outlet(5,a / 10 % 10);
outlet(4,a / 100 % 10);

outlet(3,a / 1000 % 10);
outlet(2,a / 10000 % 6);

outlet(1,a / 60000 % 10);
outlet(0,a / 600000);

}