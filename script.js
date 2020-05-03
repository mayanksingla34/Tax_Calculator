/*Made by Mayank Singla*/
var inp= document.getElementsByTagName("input");
var oldb= document.getElementById("oldb");
var newb= document.getElementById("newb");
var newinp= document.getElementsByClassName("newinp");
var i;
for (i = 0; i < inp.length; i++) {
  inp[i].onfocus = function() {if(this.value=="0"){this.value=''}}; /* Removing value on focus*/
  inp[i].onblur = function() {if(!this.value){this.value='0'}};     /* Reset to 0 if no value*/
  inp[i].onchange = function() {everything()};                      /*All other calculations */
}

var tot1_1= document.getElementById("tot1_1");        //Id element of total values
var tot1_2= document.getElementById("tot1_2");        //Id element of total values
var tot1_3= document.getElementById("tot1_3");        //Id element of total values
var tot1_4= document.getElementById("tot1_4");        //Id element of total values
var tot3= document.getElementById("tot3");        //Id element of total values
var tot4= document.getElementById("tot4");        //Id element of total values
var tot5_1= document.getElementById("tot5_1");        //Id element of total values
var tot5_2= document.getElementById("tot5_2");        //Id element of total values
var tot6= document.getElementById("tot6");        //Id element of total values
var tot7= document.getElementById("tot7");        //Id element of total values
var tot8= document.getElementById("tot8");        //Id element of total values
var tot9= document.getElementById("tot9");        //Id element of total values
var tot10= document.getElementById("tot10");        //Id element of total values
var tot11= document.getElementById("tot11");        //Id element of total values
var tot12_1= document.getElementById("tot12_1");        //Id element of total values
var tot12_2= document.getElementById("tot12_2");        //Id element of total values
var tot12_3= document.getElementById("tot12_3");        //Id element of total values
var tot12_4= document.getElementById("tot12_4");        //Id element of total values
var tot15= document.getElementById("tot15");        //Id element of total values

var taxcal1= document.getElementById("tacal1");
var taxcal2= document.getElementById("tacal2");
var taxcal3= document.getElementById("tacal3");
var taxcal4= document.getElementById("tacal4");

var flag=0;

oldb.onclick = function() {oldbu()};
newb.onclick = function() {newbu()};

function oldbu(){
var para1= document.getElementById("para");
para.innerHTML= "All deductions are allowed";
taxcal1.innerHTML='Upto Rs.2,50,000/- Nil';
taxcal2.innerHTML='Rs.2,50,001/- to Rs.5,00,000/- 5%';
taxcal3.innerHTML='Rs.5,00,001/- to Rs.10,00,000/- 20%';
taxcal4.innerHTML='Above Rs.10,00,000/- 30%';
flag=0;
everything();
}

function newbu() {
var para2= document.getElementById("para");
para.innerHTML= "No deduction except NPS is allowed";
taxcal1.innerHTML='Upto Rs.2,50,000/- Nil';
taxcal2.innerHTML='Rs.2,50,001/- to Rs.5,00,000/- 5%	&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp	Rs.10,00,001/- to Rs.12,50,000/- 20%';
taxcal3.innerHTML='Rs.5,00.001/- to Rs.7,50,000/- 10%	&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp	Rs.12,50,001/- to Rs.15,00,000/- 25%';
taxcal4.innerHTML='Rs.7,50,001/- to Rs.10,00,000/- 15%	&nbsp&nbsp&nbsp&nbsp&nbsp	Above Rs.15,00,000/-  30%';
flag=1;
everything();
}

function everything() {

var total1_1=0;     //value of total values
var total1_2=0;     //value of total values
var total1_3=0;     //value of total values
var total1_4=0;     //value of total values
var total3=0;     //value of total values
var total4=0;      //value of total values
var total5_1=0;     //value of total values
var total5_2=0;     //value of total values
var total6=0;     //value of total values
var total7=0;      //value of total values
var total8=0;      //value of total values
var total9= 0;     //value of total values
var total10=0;     //value of total values
var total11=0;     //value of total values
var total12_1=0;     //value of total values
var total12_2=0;     //value of total values
var total12_3=0;     //value of total values
var total12_4=0;     //value of total values
var total15=0;     //value of total values

var int1_1 = parseInt(inp[0].value);  //value of all inputs
var int1_2 = parseInt(inp[1].value);  //value of all inputs
var int1_3 = parseInt(inp[2].value);  //value of all inputs
var int1_4 = parseInt(inp[3].value);  //value of all inputs
var int1_5 = parseInt(inp[4].value);  //value of all inputs
var int1_7 = parseInt(inp[5].value);  //value of all inputs
var int1_7_1 = parseInt(inp[6].value);  //value of all inputs
var int1_7_2 = parseInt(inp[7].value);  //value of all inputs
var int1_7_3 = parseInt(inp[8].value);  //value of all inputs
var int1_7_4 = parseInt(inp[9].value);  //value of all inputs
var int1_8 = parseInt(inp[10].value);  //value of all inputs
var int1_9 = parseInt(inp[11].value);  //value of all inputs
var int1_10 = parseInt(inp[12].value);  //value of all inputs
var int1_11 = parseInt(inp[13].value);  //value of all inputs

var int2_1 = parseInt(inp[14].value);  //value of all inputs
var int2_2 = parseInt(inp[15].value);  //value of all inputs

var int3_1 = parseInt(inp[16].value);  //value of all inputs
var int3_2 = parseInt(inp[17].value);  //value of all inputs
var int3_3 = parseInt(inp[18].value);  //value of all inputs
var int3_4 = parseInt(inp[19].value);  //value of all inputs
var int3_5 = parseInt(inp[20].value);  //value of all inputs

var int5_1 = parseInt(inp[21].value);  //value of all inputs
var int5_2 = parseInt(inp[22].value);  //value of all inputs
var int5_3 = parseInt(inp[23].value);  //value of all inputs
var int5_4 = parseInt(inp[24].value);  //value of all inputs
var int5_5 = parseInt(inp[25].value);  //value of all inputs
var int5_6 = parseInt(inp[26].value);  //value of all inputs
var int5_7 = parseInt(inp[27].value);  //value of all inputs
var int5_8 = parseInt(inp[28].value);  //value of all inputs
var int5_9 = parseInt(inp[29].value);  //value of all inputs
var int5_10 = parseInt(inp[30].value);  //value of all inputs
var int5_11 = parseInt(inp[31].value);  //value of all inputs
var int5_12 = parseInt(inp[32].value);  //value of all inputs
var int5_13 = parseInt(inp[33].value);  //value of all inputs
var int5_14 = parseInt(inp[34].value);  //value of all inputs
var int5_15 = parseInt(inp[35].value);  //value of all inputs

var int7 = parseInt(inp[36].value);  //value of all inputs
var int7_a_1 = parseInt(inp[37].value);  //value of all inputs
var int7_a_2 = parseInt(inp[38].value);  //value of all inputs
var int7_a_3 = parseInt(inp[39].value);  //value of all inputs
var int7_a_4 = parseInt(inp[40].value);  //value of all inputs
var int7_b_1 = parseInt(inp[41].value);  //value of all inputs
var int7_b_2 = parseInt(inp[42].value);  //value of all inputs
var int7_c = parseInt(inp[43].value);  //value of all inputs
var int7_d = parseInt(inp[44].value);  //value of all inputs
var int7_e = parseInt(inp[45].value);  //value of all inputs
var int7_f = parseInt(inp[46].value);  //value of all inputs
var int7_g = parseInt(inp[47].value);  //value of all inputs
var int7_h = parseInt(inp[48].value);  //value of all inputs

var int13_1 = parseInt(inp[49].value);  //value of all inputs
var int13_2 = parseInt(inp[50].value);  //value of all inputs

var int14 = parseInt(inp[51].value);  //value of all inputs

if(int1_2> 50000 ){inp[1].value='0';int1_2=0;alert("Maximum limit for this field is 50000");};                    
if(int1_4> 800 ){inp[3].value='0';int1_4=0;alert("Maximum limit for this field is 800")};                    
if(int1_5> 1300 ){inp[4].value='0';int1_5=0;alert("Maximum limit for this field is 1300")};                    
total1_1= int1_1 - (int1_2+int1_3+int1_4+int1_5);                    
tot1_1.innerHTML= total1_1;                    

total1_2= int1_7_2 - ((int1_7_3+int1_7_4)/10);                    
if(total1_2<0){total1_2=0};                    
tot1_2.innerHTML= total1_2;                    
tot1_3.innerHTML= total1_3                    
if(total1_2>0){                    
	if(int1_7_1<total1_2){                    
		total1_3=int1_7_1;                    
	}                    
	else{                    
		total1_3=total1_2;                    
	}                    
	tot1_3.innerHTML= total1_3;                    
}                    
total1_4=total1_1 - total1_3 + int1_9+int1_10+int1_11;                    
tot1_4.innerHTML= total1_4;                    

total3=total1_4 - int2_1-int2_2;
tot3.innerHTML= total3;

total4=total3+int3_1+int3_2+int3_3+int3_4-int3_5;
tot4.innerHTML= total4;

total5_1=int5_1+int5_2+int5_3+int5_4+int5_5+int5_6+int5_7+int5_8+int5_9+int5_10+int5_11+int5_12+int5_13+int5_14;
if(total5_1>150000){total5_1=150000};
tot5_1.innerHTML= total5_1;

if(int5_15> 50000){inp[35].value='0';int5_15=0;alert("Maximum limit for this field is 50000")};

total5_2=total5_1+int5_15;
if(total5_2>200000){total5_1=200000};
tot5_2.innerHTML= total5_2;

total6=total4-total5_2;
tot6.innerHTML= total6;

total7=int7_a_1+int7_a_2+int7_a_3+int7_a_4+int7_b_1+int7_b_2+int7_c+int7_d+int7_e+int7_f+int7_g+int7_h;
tot7.innerHTML= total7;

total8=total6-total7;
tot8.innerHTML= total8;

total9=Math.ceil(total8 / 10) * 10;
tot9.innerHTML= total9;

total10=total9;
if(flag==0){
if(total10<=250000){
	total10=0;
}
else if(total10<=500000)
{
	total10=total10-250000;
	total10=((5*total10)/100);
}
else if(total10<=1000000)
{
	var temp =12500;
	total10=total10-500000;
	total10=temp+ ((20*total10)/100);
}
else
{
	var temp =112500;
	total10=total10-1000000;
	total10=temp+((30*total10)/100);
}
}
if(flag==1){
if(total10<=250000){
	total10=0;
}
else if(total10<=500000)
{
	total10=total10-250000;
	total10=((5*total10)/100);
}
else if(total10<=750000)
{
	var temp =12500;
	total10=total10-500000;
	total10=temp+ ((10*total10)/100);
}
else if(total10<=1000000)
{
	var temp =37500;
	total10=total10-750000;
	total10=temp+ ((15*total10)/100);
}
else if(total10<=1250000)
{
	var temp =50000;
	total10=total10-1000000;
	total10=temp+ ((20*total10)/100);
}
else if(total10<=1500000)
{
	var temp =62500;
	total10=total10-1250000;
	total10=temp+ ((25*total10)/100);
}
else
{
	var temp =125000;
	total10=total10-1500000;
	total10=temp+((30*total10)/100);
}
}
tot10.innerHTML= total10;

if(total9<=500000){
	total11=total10;
}
tot11.innerHTML= total11;

total12_1=total10-total11;
tot12_1.innerHTML= total12_1;
total12_2=((3*total12_1)/100);
tot12_2.innerHTML= total12_2;
total12_3=((1*total12_1)/100);
tot12_3.innerHTML= total12_3;
total12_4=total12_1+total12_2+total12_3;
tot12_4.innerHTML= total12_4;

total15=total12_4-int13_1-int13_2-int14;
tot15.innerHTML= total15;

}
