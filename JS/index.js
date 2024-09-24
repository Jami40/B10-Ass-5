document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href='/Home.html';
})

document.getElementById('btn-1').addEventListener('click',function(event){
    const inputFielll=chechNumber('input-field-1')
    if(isNaN(inputFielll) || inputFielll<1){
         alert('Write the proper amount')

    }
    else{
        my_modal_1.showModal();
        const addmoney1=document.getElementById('N-money').innerText;

        const addmoney1Float =parseFloat(addmoney1);
        
        const totalladdmoney = inputFielll+addmoney1Float;

        document.getElementById('N-money').innerText=totalladdmoney;


        const myMoney=document.getElementById('my-money').innerText;

        const moneyfloatt=parseFloat(myMoney);

        const leftMoney=moneyfloatt-inputFielll;

        document.getElementById('my-money').innerText=leftMoney;
        


    }

    
    
})
document.getElementById('btn-2').addEventListener('click',function(event){
    event.preventDefault();
    const inputFielll=chechNumber('input-field-2')
    if(isNaN(inputFielll) || inputFielll<1){
         alert('Write the proper amount')

    }
    else{
        my_modal_2.showModal();
        const addmoney1=document.getElementById('F-money').innerText;

        const addmoney1Float =parseFloat(addmoney1);
        
        const totalladdmoney = inputFielll+addmoney1Float;

        document.getElementById('F-money').innerText=totalladdmoney;


        const myMoney=document.getElementById('my-money').innerText;

        const moneyfloatt=parseFloat(myMoney);

        const leftMoney=moneyfloatt-inputFielll;

        document.getElementById('my-money').innerText=leftMoney;
        


    }

    
    
})
document.getElementById('btn-3').addEventListener('click',function(event){
    const inputFielll=chechNumber('input-field-3')
    if(isNaN(inputFielll) || inputFielll<1){
         alert('Write the proper amount')

    }
    else{
        my_modal_3.showModal();
        const addmoney1=document.getElementById('A-money').innerText;

        const addmoney1Float =parseFloat(addmoney1);
        
        const totalladdmoney = inputFielll+addmoney1Float;

        document.getElementById('A-money').innerText=totalladdmoney;


        const myMoney=document.getElementById('my-money').innerText;

        const moneyfloatt=parseFloat(myMoney);

        const leftMoney=moneyfloatt-inputFielll;

        document.getElementById('my-money').innerText=leftMoney;
        


    }

    
    
})
