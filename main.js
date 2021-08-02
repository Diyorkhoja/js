var user__name = prompt('Ismingiz nima ?');

if (user__name == "Diyorxoja"){
    console.log("Hello boss");
    alert("Hello boss");
}
else {
    console.log("Hello guest");
    alert("Hello guest");
}



var age = +prompt('Nechi yoshdasiz ?');

if (age <= 18) {
    console.log("Hali yoshsiz, o'qing");
    alert("Hali yoshsiz, o'qing");
}
else if (age <= 50) {
    console.log("Ishlashingiz kerak");
    alert("Ishlashingiz kerak");
}
else if (age < 59) {
    console.log("Yaqinda pensiyaga chiqasiz");
    alert("Yaqinda pensiyaga chiqasiz");
}
else if ( age <= 150){
    console.log('Pensionerga oxshaysiz hali tirik bolsangiz');
    alert('Pensionerga oxshaysiz hali tirik bolsangiz');
}
else {
    alert("Nimadur noto'g'ri bo'ldi. Iltimos qaytadan urunib koring");
    if ( age > 150){
        var age = +prompt('Nechi yoshdasiz ?');
        if (age <= 18) {
            console.log("Hali yoshsiz, o'qing");
            alert("Hali yoshsiz, o'qing");
        }
        else if (age <= 50) {
            console.log("Ishlashingiz kerak");
            alert("Ishlashingiz kerak");
        }
        else if (age < 59) {
            console.log("Yaqinda pensiyaga chiqasiz");
            alert("Yaqinda pensiyaga chiqasiz");
        }
        else if ( age <= 150){
            console.log('Pensionerga oxshaysiz hali tirik bolsangiz');
            alert('Pensionerga oxshaysiz hali tirik bolsangiz');
        }
        else {
            alert("Nimadur noto'g'ri bo'ldi. Iltimos qaytadan urunib koring");
            if ( age > 150){
                var age = +prompt('Nechi yoshdasiz ?');
                if (age <= 18) {
                    console.log("Hali yoshsiz, o'qing");
                    alert("Hali yoshsiz, o'qing");
                }
                else if (age <= 50) {
                    console.log("Ishlashingiz kerak");
                    alert("Ishlashingiz kerak");
                }
                else if (age < 59) {
                    console.log("Yaqinda pensiyaga chiqasiz");
                    alert("Yaqinda pensiyaga chiqasiz");
                }
                else if ( age <= 150){
                    console.log('Pensionerga oxshaysiz hali tirik bolsangiz');
                    alert('Pensionerga oxshaysiz hali tirik bolsangiz');
                }
                else {
                    alert("Nimadur noto'g'ri bo'ldi. Iltimos qaytadan urunib koring");
                    if ( age > 150){
                        var age = +prompt('Nechi yoshdasiz ?');
                        if (age <= 18) {
                            console.log("Hali yoshsiz, o'qing");
                            alert("Hali yoshsiz, o'qing");
                        }
                        else if (age <= 50) {
                            console.log("Ishlashingiz kerak");
                            alert("Ishlashingiz kerak");
                        }
                        else if (age < 59) {
                            console.log("Yaqinda pensiyaga chiqasiz");
                            alert("Yaqinda pensiyaga chiqasiz");
                        }
                        else if ( age <= 150){
                            console.log('Pensionerga oxshaysiz hali tirik bolsangiz');
                            alert('Pensionerga oxshaysiz hali tirik bolsangiz');
                        }
                        else {
                            alert("Nimadur noto'g'ri bo'ldi. Iltimos qaytadan urunib koring");
                            if ( age > 150){
                                var age = +prompt('Nechi yoshdasiz ?');
                                if (age <= 18) {
                                    console.log("Hali yoshsiz, o'qing");
                                    alert("Hali yoshsiz, o'qing");
                                }
                                else if (age <= 50) {
                                    console.log("Ishlashingiz kerak");
                                    alert("Ishlashingiz kerak");
                                }
                                else if (age < 59) {
                                    console.log("Yaqinda pensiyaga chiqasiz");
                                    alert("Yaqinda pensiyaga chiqasiz");
                                }
                                else if ( age <= 150){
                                    console.log('Pensionerga oxshaysiz hali tirik bolsangiz');
                                    alert('Pensionerga oxshaysiz hali tirik bolsangiz');
                                }
                            }
                            else {
                                alert("Nimadur noto'g'ri bo'ldi. Iltimos qaytadan urunib koring");
                                if ( age > 150){
                                    var age = +prompt('Nechi yoshdasiz ?');
                                    if (age <= 18) {
                                        console.log("Hali yoshsiz, o'qing");
                                        alert("Hali yoshsiz, o'qing");
                                    }
                                    else if (age <= 50) {
                                        console.log("Ishlashingiz kerak");
                                        alert("Ishlashingiz kerak");
                                    }
                                    else if (age < 59) {
                                        console.log("Yaqinda pensiyaga chiqasiz");
                                        alert("Yaqinda pensiyaga chiqasiz");
                                    }
                                    else if ( age <= 150){
                                        console.log('Pensionerga oxshaysiz hali tirik bolsangiz');
                                        alert('Pensionerga oxshaysiz hali tirik bolsangiz');
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}




var number__one = +prompt('Son Kiriting');
var number__two = +prompt('Yana bitta Kiriting');
var number__three = +prompt('Yana Son Kiriting');

if (number__one > number__two && number__two > number__three) {
    alert("O'rtacha son: " + number__two);
}
else if (number__one > number__three &&  number__three > number__two) {
    alert("O'rtacha son: " + number__three);
}
else if (number__three > number__one &&  number__one > number__two) {
    alert("O'rtacha son: " + number__one);
}
else if (number__one < number__two && number__two < number__three) {
    alert("O'rtacha son: " + number__two);
}
else if (number__one < number__three &&  number__three < number__two) {
    alert("O'rtacha son: " + number__three);
}
else if (number__three < number__one &&  number__one < number__two) {
    alert("O'rtacha son: " + number__one);
}






























































