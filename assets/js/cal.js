new Vue({   
  el: '#loan',  
  data:{
    amountoutput:"500",
    periodoutput:"2",
    amountToPay:"625",
    InterestAmount:"125"
  },
  watch:{
amountoutput:function(amount){
this.amountoutput=amount;
if(this.periodoutput==1){
  this.amountToPay=Math.round(0.15*amount) + Math.round(amount);
  this.InterestAmount=Math.round(0.15*amount);
}

if(this.periodoutput==2){
  this.amountToPay=Math.round(0.25*amount) + Math.round(amount);
  this.InterestAmount=Math.round(0.25*amount);
}



if(this.periodoutput==3){
  this.amountToPay=Math.round(0.35*amount) + Math.round(amount);
  this.InterestAmount=Math.round(0.35*amount);
}



if(this.periodoutput==4){
  this.amountToPay=Math.round(0.45*amount) + Math.round(amount);
  this.InterestAmount=Math.round(0.45*amount);
}

    },



    periodoutput:function(period){
      this.periodoutput=period;
      if(period==1){
        this.amountToPay=Math.round(0.15*this.amountoutput) + Math.round(this.amountoutput);
        this.InterestAmount=Math.round(0.15*this.amountoutput);
      }
      
      if(period==2){
        this.amountToPay=Math.round(0.25*this.amountoutput) + Math.round(this.amountoutput);
        this.InterestAmount=Math.round(0.25*this.amountoutput);
      }
      
      
      
      if(period==3){
        this.amountToPay=Math.round(0.35*this.amountoutput) + Math.round(this.amountoutput);
        this.InterestAmount=Math.round(0.35*this.amountoutput);
      }
      
      
      
      if(period==4){
        this.amountToPay=Math.round(0.45*this.amountoutput) + Math.round(this.amountoutput);
        this.InterestAmount=Math.round(0.45*this.amountoutput);
      }
}
}
  })