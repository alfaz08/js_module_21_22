 function woodCalculator(chairQuantity,tableQuantity,bedQuantity){
     const perChairWood = 3;
     const perTableWood = 10;
     const PerBedWood = 50;

     const chairWood = chairQuantity * perChairWood;
     const tableWood = tableQuantity *perTableWood;
     const bedWood = bedQuantity * PerBedWood;
       
     
     console.log(chairWood,tableWood,bedWood)
 }

 const totalWood = woodCalculator(2,2,5)