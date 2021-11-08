

public class Temperatures {

public static void main(String[] args) {



Scanner sc=new Scanner(System.in);

float[][] fahrenheit=new float[10][3];

float fahren;

for(int i=0;i<10;i++){

System.out.print("Enter Temperatures "+(i+1)+":" );

fahren=sc.nextFloat();

fahrenheit[i][0]=fahren;

}

int choice=0;

do{

showMenu();

System.out.print("Enter Choice: ");

choice=sc.nextInt();

switch(choice){

case 1:

for(int i=0;i<10;i++){

fahrenheit[i][1]=showCelsius(fahrenheit[i][0]);

}

for(int i=0;i<10;i++){

System.out.println(fahrenheit[i][0]+" Celcius = "+ fahrenheit[i][1] +" Fahrenheit");

}

break;

case 2:

for(int i=0;i<10;i++){

fahrenheit[i][2]=showKelvin(fahrenheit[i][0]);

}

for(int i=0;i<10;i++){

System.out.println(fahrenheit[i][0]+" Celcius = "+ fahrenheit[i][2] +" Kelvin");

}

break;

case 3:

for(int i=0;i<10;i++){

System.out.println("Temperature "+(i+1)+": "+fahrenheit[i][0]);

}

break;

case 4:

return;

default:

System.out.println("Wrong Input...");

}

}while(choice>=0 || choice<=4);

}



public static float showCelsius(double Fahrenheit){

float cel=(float)((5/9.0)*(Fahrenheit-32));

return cel;

}

public static float showKelvin(double Fahrenheit){

float Kel=(float)((5/9.0)*(Fahrenheit-32)+273.15);

return Kel;

}

}