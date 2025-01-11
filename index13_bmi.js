function bmi(height,weight)
{
    let height_cm=(height*0.01);
     let result=weight/(height_cm*height_cm);
     
if(result<17)
{
    return("<u>"+"Result"+"</u>"+"<br>"+"<br>"+"Your BMI is:"+result+"<br>"+"add plenty of healthy unsaturated fats, including avocados,"+"<br>"+"peanut butter and fatty fish, such as salmon and trout, to your diet."+"<br>"+"<br>"+"Thanks for visiting!");

}
     else if(result>=17 &&  result <18.5)
     {
        return("<u>"+"Result"+"</u>"+"<br>"+"<br>"+"Your BMI is:"+result+"<br>"+"you are in Mild Thinness"+"<br>"+"Eat more Calories and build muscle."+"<br>"+"<br>"+"Thanks for visiting!");

     }
     else if(result>=18.5 &&  result <25)
     {
        return("<u>"+"Result"+"</u>"+"<br>"+"<br>"+"Your BMI is:"+result+"<br>"+"Your result is normal"+"<br>"+"Good fat control. keep maintain your body for healthy life."+"<br>"+"<br>"+"Thanks for visiting!");
    }
    else if(result>=25 &&  result <30)
        {
           return("<u>"+"Result"+"</u>"+"<br>"+"<br>"+"Your BMI is:"+result+"<br>"+"Over weight"+"<br>"+"Reduce your daily calorie and take more fibre."+"<br>"+"<br>"+"Thanks for visiting!");
   
        }
        else if(result>=30 &&  result <40)
            {
               return("<u>"+"Result"+"</u>"+"<br>"+"<br>"+"Your BMI is:"+result+"<br>"+"You are under Obese range"+"<br>"+"Eat a healthy, reduced-calorie diet and exercise regularly."+"<br>"+"<br>"+"Thanks for visiting!");
            }
        else{
                return("please check your input data!");
            }
            
    
}
var height=parseInt(prompt("Enter your height in cm"));
var weight=parseInt(prompt("Enter your weight in kg"));
document.write(bmi(height,weight));