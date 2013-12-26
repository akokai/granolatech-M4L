inlets = 1;
outlets = 2;

var i;
var v;
var b;
var a;
var c;
var cycle = 513;
var step = 1./cycle;
var pi = 3.1415926;

// Sin Fwd Bwd Tri Rect Rnd Rnd(S&H) Bin


function msg_int(v)
{
    if (v == 0) // Sin
    {
         for (i = 0; i < cycle; i++)
        {
            b = i * step;
            b = b * 2 *pi +pi;
            b = Math.cos(b);
            b =(b +1) * .5;
            outlet(0,i,b);
        }
    }
    if (v == 1) // Ramp Up
    {
         for (i = 0; i < cycle; i++)
        {
            b = i * step;
            outlet(0,i,b);
        }
    }
    if (v == 2) // Ramp Down
    {
         for (i = 0; i < cycle; i++)
        {
            b = i * step;
            b = 1-b;
            outlet(0,i,b);
        }
    }
    if (v == 3) // Tri
    {
         for (i = 0; i < cycle; i++)
        {
        b = i * step *2;
        if (b >1.)
             {
            b =2-b;
            }
            outlet(0,i,b);
        }
    }
    if (v == 4) // Rect
    {
         for (i = 0; i < cycle; i++)
        {
       b = 0;
       if (i >cycle/2)
             {
            b =1;
            }
            outlet(0,i,b);
        }
    }
     if (v == 5) // Rnd
    {
         for (i = 0; i < cycle; i++)
        {
       b = Math.random(1);      
       outlet(0,i,b);
        }
    }
   if (v == 6) // Rnd(S&H)
    {
         for (i = 0; i < cycle; i++)
        {
       b = Math.random(1);      
       outlet(0,i,b);
        }
    }
   if (v == 7) // Rnd Binary
    {
         for (i = 0; i < cycle; i++)
        {
        b = 0;
        a = Math.random(1);   
         if (a > c) 
            {
            b = 1;
           }
            c = a;
         outlet(0,i,b);
        }
    }

outlet(1,"bang"); // done message
}
