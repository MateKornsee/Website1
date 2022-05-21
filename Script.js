var test = document.getElementById('test');
        test.onclick = function() {
        console.log("Hello");
        }
var test2 = document.getElementById('test2');
        test2.onclick = function(){
            let fruits = ['Alma','Banán', 'Eper'];
            console.log(fruits.length);
            for (let i = 0; i < fruits.length; i++) {
                console.log(fruits[i]);               
            }
            fruits.forEach(element => {
                console.log(element);
            });
        }
