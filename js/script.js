// HELPER FUNCTION
const $ = (id) => {
    return document.getElementById(id);
};

// FORM VALIDATION PART1 (USER INFO)
// ADD ADDITIONAL TEXT BOX IF 'OTHER' IS SELECTED FROM DROPDOWN
$('address-type').addEventListener('change', () => {
    let option = $('address-type').value;
    let toggleOther = $('toggle-other');
    if (option === 'Other') {
        toggleOther.style.display = 'block';
    } else {
        toggleOther.style.display = 'none';
    }
});

// VALIDATION FUNCTION FOR FORM ELEMENT ENTRIES
$('user-info').addEventListener('focusout', e => {
    e.preventDefault();
    //GET FORM ELEMENTS
    let name = $('name').value;
    let addressType = $('address-type').value;
    let other = $('other').value;
    let address = $('address').value;
    let city = $('city').value;
    let state = $('state').value;
    let zip = $('zip').value;
    let phone = $('phone').value;
    let email = $('email').value;

    let validateUserInfo = () => {
        //NAME VALIDATION
        let nameRegExp = /^[a-zA-Z ]{2,30}$/;
        let nameCheck = nameRegExp.test(name);
        let nameValidateTrue = $('name-valid');
        let nameValidateFalse = $('name-invalid');

        if (nameCheck === true) {
            nameValidateTrue.style.display = 'block';
            nameValidateFalse.style.display = 'none';
        } else if (nameCheck === false) {
            nameValidateFalse.style.display = 'block';
            nameValidateTrue.style.display = 'none';
        } else {
            nameValidateTrue.style.display = 'none';
            nameValidateFalse.style.display = 'none';
        };
        //ADDRESS TYPE VALIDATION
        let addressTypeValidateTrue = $('address-type-valid');
        let addressTypeValidateFalse = $('address-type-invalid');
        if (addressType !== '') {
            addressTypeValidateTrue.style.display = 'block';
        } else {
            addressTypeValidateFalse.style.display = 'block';
        };
        //ADDRESS 'OTHER' VALIDATION
        let addressOtherValidateTrue = $('address-other-valid');
        let addressOtherValidateFalse = $('address-other-invalid');
        if (other !== '' && isNaN(other) === true) {
            addressOtherValidateTrue.style.display = 'block';
            addressOtherValidateFalse.style.display = 'none';
        } else if (other === '' || isNaN(other) === false) {
            addressOtherValidateFalse.style.display = 'block';
            addressOtherValidateTrue.style.display = 'none';
        } else {
            addressOtherValidateTrue.style.display = 'none';
            addressOtherValidateFalse.style.display = 'none';
        };
        //ADDRESS VALIDATION
        let addressValidateTrue = $('address-valid');
        let addressValidateFalse = $('address-invalid');
        if (address !=='') {
            addressValidateTrue.style.display = 'block';
            addressValidateFalse.style.display = 'none';
        } else if (address === '') {
            addressValidateFalse.style.display = 'block';
            addressValidateTrue.style.display = 'none';
        } else {
            addressValidateTrue.style.display = 'none';
            addressValidateFalse.style.display = 'none';
        };
        //CITY VALIDATION
        let cityValidateTrue = $('city-valid');
        let cityValidateFalse = $('city-invalid');
        if (city !=='') {
            cityValidateTrue.style.display = 'block';
            cityValidateFalse.style.display = 'none';
        } else if (city === '') {
            cityValidateFalse.style.display = 'block';
            cityValidateTrue.style.display = 'none';
        } else {
            cityValidateTrue.style.display = 'none';
            cityValidateFalse.style.display = 'none';
        };
        //STATE VALIDATION
        let stateRegExp = /^[a-zA-Z ]{2,2}$/;
        let stateCheck = stateRegExp.test(state);
        let stateValidateTrue = $('state-valid');
        let stateValidateFalse = $('state-invalid');
        if (stateCheck === true) {
            stateValidateTrue.style.display = 'block';
            stateValidateFalse.style.display = 'none';
        } else if (stateCheck === false) {
            stateValidateFalse.style.display = 'block';
            stateValidateTrue.style.display = 'none';
        } else {
            stateValidateTrue.style.display = 'none';
            stateValidateFalse.style.display = 'none';
        };
        //ZIP CODE VALIDATION
        let zipRegExp = /^[0-9]{5}(?:-[0-9]{4})?$/;
        let zipCheck = zipRegExp.test(zip);
        let zipValidateTrue = $('zip-valid');
        let zipValidateFalse = $('zip-invalid');
        if (zipCheck === true) {
            zipValidateTrue.style.display = 'block';
            zipValidateFalse.style.display = 'none'
        } else if (zipCheck === false) {
            zipValidateFalse.style.display = 'block';
            zipValidateTrue.style.display = 'none';
        } else {
            zipValidateTrue.style.display = 'none';
            zipValidateFalse.style.display = 'none';
        };
        //PHONE NUMBER VALIDATION
        let phoneRegExp = /^[1-9]\d{2}-\d{3}-\d{4}/;
        let phoneCheck = phoneRegExp.test(phone);
        let phoneValidateTrue = $('phone-valid');
        let phoneValidateFalse = $('phone-invalid');
        if (phoneCheck === true) {
            phoneValidateTrue.style.display = 'block';
            phoneValidateFalse.style.display = 'none'
        } else if (phoneCheck === false) {
            phoneValidateFalse.style.display = 'block';
            phoneValidateTrue.style.display = 'none';
        } else {
            phoneValidateTrue.style.display = 'none';
            phoneValidateFalse.style.display = 'none';
        };
        //EMAIL VALIDATION
        let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let emailCheck = emailRegExp.test(email);
        let emailValidateTrue = $('email-valid');
        let emailValidateFalse = $('email-invalid');
        if (emailCheck === true) {
            emailValidateTrue.style.display = 'block';
            emailValidateFalse.style.display = 'none'
        } else if (emailCheck === false) {
            emailValidateFalse.style.display = 'block';
            emailValidateTrue.style.display = 'none';
        } else {
            emailValidateTrue.style.display = 'none';
            emailValidateFalse.style.display = 'none';
        };
    };
    validateUserInfo();
});

// PIZZA DOUGH STYLE - PROGRAMMATICALLY ADD SELECT BOXES WITH SIZE AND PRICE

for (let i=0; i<document.getElementsByName('crust').length; i++){
    document.getElementsByName('crust')[i].addEventListener('click', e => {
        let toggleHandTossed = $('handtossed-toggle');
        let toggleThin = $('thin-toggle');
        let toggleNewYork = $('newyork-toggle');
        let toggleGluten = $('gluten-toggle');

        if (e.target.id === 'handtossed') {
            toggleHandTossed.style.display = 'block';
            toggleThin.style.display = 'none';
            toggleNewYork.style.display = 'none';
            toggleGluten.style.display = 'none';
        } else if (e.target.id === 'thin') {
            toggleHandTossed.style.display = 'none';
            toggleThin.style.display = 'block';
            toggleNewYork.style.display = 'none';
            toggleGluten.style.display = 'none';
        } else if (e.target.id === 'newyork') {
            toggleHandTossed.style.display = 'none';
            toggleThin.style.display = 'none';
            toggleNewYork.style.display = 'block';
            toggleGluten.style.display = 'none';
        } else if (e.target.id === 'gluten') {
            toggleHandTossed.style.display = 'none';
            toggleThin.style.display = 'none';
            toggleNewYork.style.display = 'none';
            toggleGluten.style.display = 'block';
        } else {
            toggleHandTossed.style.display = 'none';
            toggleThin.style.display = 'none';
            toggleNewYork.style.display = 'none';
            toggleGluten.style.display = 'none';
        }
    });
};




// Attempted creating objects and injecting select lists
// for (let i=0; i<document.getElementsByName('crust').length; i++){
//     document.getElementsByName('crust')[i].addEventListener('click', e => {

//         class Crust {
//             constructor(size, price) {
//                 this.size = size;
//                 this.price = price;
//             }
//             displayHandTossed = function() {
//                 return $('handtossed-size').innerHTML(
//                 `<option value="${handTossedSm(price)}">${handTossedSm(size, price)}</option>
//                  <option value="${handTossedMd(price)}">${handTossedMd(size, price)}</option>
//                  <option value="${handTossedLg(price)}">${handTossedLg(size, price)}</option>`
//                 );
//             }
//             displayThin = function() {
//                 return 
//             }
//             displayNewYork = function() {
//                 return 
//             }
//             displayGluten = function() {
//                 return 
//             }
//         }
        
//         const handTossedSm = new Crust('Small', '($9.99)');
//         const handTossedMd = new Crust('Medium', '($12.99)');
//         const handTossedLg = new Crust('Large', '($14.99)');
//         const thinMd = new Crust('Medium', '$11.99');
//         const thinLg = new Crust('Large', '$13.99');
//         const newYorkLg = new Crust('Large', '$16.99');
//         const newYorkXl = new Crust('Extra Large', '$19.99');
//         const glutenSm = new Crust('Small', '$10.99');

//         let toggleHandTossed = $('handtossed-toggle');
//         let toggleThin = $('thin-toggle');
//         let toggleNewYork = $('newyork-toggle');
//         let toggleGluten = $('gluten-toggle');

//         if (e.target.id === 'handtossed') {
//             Crust.displayHandTossed();
//         } else if (e.target.id === 'thin') {
//             toggleHandTossed.style.display = 'none';
//             toggleThin.style.display = 'block';
//             toggleNewYork.style.display = 'none';
//             toggleGluten.style.display = 'none';
//         } else if (e.target.id === 'newyork') {
//             toggleHandTossed.style.display = 'none';
//             toggleThin.style.display = 'none';
//             toggleNewYork.style.display = 'block';
//             toggleGluten.style.display = 'none';
//         } else if (e.target.id === 'gluten') {
//             toggleHandTossed.style.display = 'none';
//             toggleThin.style.display = 'none';
//             toggleNewYork.style.display = 'none';
//             toggleGluten.style.display = 'block';
//         } else {
//             toggleHandTossed.style.display = 'none';
//             toggleThin.style.display = 'none';
//             toggleNewYork.style.display = 'none';
//             toggleGluten.style.display = 'none';
//         }
//     });
// };

// Failed attempt calTotal..
// ADD ALL OPTIONS FUNCTION WITH CALCULATION
// $('pizza-order').addEventListener('change', e => {
//     e.preventDefault();
//     let calcTotal = () => {
//         for (let i=0; i<document.getElementsByName('crust').length; i++) {
//             document.getElementsByName('crust')[i].addEventListener('click', e => {
//                 let handTossedVal = $('handtossed-size');
//                 let thinVal = $('thin-size');
//                 let newYorkVal = $('newyork-size');
//                 let glutenVal = $('gluten-size');
//                 if (e.target.id === 'handtossed') {
//                     let handTossedPrice = parseFloat(handTossedVal.value);
//                     total = parseFloat(handTossedPrice);
//                     console.log(handTossedPrice);
//                     }
//                 else if (e.target.id === 'thin') {
//                     console.log(thinVal);
//                 } else if (e.target.id === 'newyork') {
//                     console.log(newYorkVal);
//                 } else if (e.target.id === 'gluten') {
//                     console.log(glutenVal);
//                 } else {
//                     console.log('no');
//                 }
//                 })
//         }
//         $('total').innerHTML = `$${total}`;
//     };
//     calcTotal();
// });


// CALCLULATE TOTAL AND INSERT INTO TOTAL CARD
$('pizza-order').addEventListener('change', e => {
    e.preventDefault();
    let calcTotal = () => {
        let total = 0;
        let handTossedVal = $('handtossed-size').value;
        let thinVal = $('thin-size').value;
        let newYorkVal = $('newyork-size').value;
        let glutenVal = $('gluten-size').value;
        let cheeseVal = $('cheese').value;
        let sauceVal = $('sauce').value;
        // GET CRUST AND SIZE PRICE
        $('handtossed-size').addEventListener('click', () => {
            if ($('handtossed').checked) {
                if (handTossedVal === '9.99') {
                    total = parseFloat('9.99');
                    $('total').innerHTML = `$${total}`;
                } else if (handTossedVal === '12.99') {
                    total = parseFloat('12.99');
                    $('total').innerHTML = `$${total}`;
                } else if (handTossedVal === '14.99') {
                    total = parseFloat('14.99');
                    $('total').innerHTML = `$${total}`;
                }
            };
        });

        $('thin-size').addEventListener('click', () => {
            if ($('thin').checked) {
                if (thinVal === '11.99') {
                    total = parseFloat('11.99');
                    $('total').innerHTML = `$${total}`;
                } else if (thinVal === '13.99') {
                    total = parseFloat('13.99');
                    $('total').innerHTML = `$${total}`;
                }
            };
        }); 

        $('newyork-size').addEventListener('click', () => {
            if ($('newyork').checked) {
                if (newYorkVal === '16.99') {
                    total = parseFloat('16.99');
                    $('total').innerHTML = `$${total}`;
                } else if (newYorkVal === '19.99') {
                    total = parseFloat('19.99');
                    $('total').innerHTML = `$${total}`;
                }
            };
        });

        $('gluten-size').addEventListener('click', () => {
            if ($('gluten').checked) {
                if (glutenVal === '10.99') {
                total = parseFloat('10.99');
                $('total').innerHTML = `$${total}`;
                }
            };
        });

        // USER MUST CHOOSE CRUST AND SIZE BEFORE CHEESE AND SAUCE
        $('cheese').addEventListener('click', () => {
            if ($('handtossed').checked){ 
                addCheese();
                addSauce();
                calcToppings();
            }
            else if ($('thin').checked) {
                addCheese();
                addSauce();
                calcToppings();
            }
            else if ($('newyork').checked) {
                addCheese();
                addSauce();
                calcToppings();
            }
            else if ($('gluten').checked) {
                addCheese();
                addSauce();
                calcToppings();
            }
            else {
                alert('You need to select a crust type and size before adding cheese and sauce!')
            }
        });
        // CALCULATE CHEESE
        let addCheese = () => {
            if (cheeseVal === '2.99') {
                total = total + parseFloat('2.99');
                $('total').innerHTML = `$${total}`;
            } else if (cheeseVal === '3.99') {
                total = total + parseFloat('3.99');
                $('total').innerHTML = `$${total}`;
                return;
            } else {
                total = total;
                $('total').innerHTML = `$${total}`;
            }
        };
        // CALCULATE SAUCE
        let addSauce = () => {
            if (sauceVal === '0.99') {
                total + parseFloat('0.99');
                $('total').innerHTML = `$${total}`;
            } else if (sauceVal === '1.99') {
                total + parseFloat('1.99');
                $('total').innerHTML = `$${total}`; 
            } else {
                total = total;
                $('total').innerHTML = `$${total}`;
            }
        }
        // CALCULATE TOPPINGS ADDED OR REMOVED
        let calcToppings = () => {
            for (let i=0; i<document.getElementsByName('toppings').length; i++){
                document.getElementsByName('toppings')[i].addEventListener('click', e => {
                    let markedCheckbox = document.getElementsByName('toppings')[i].value;
                    if (e.currentTarget.checked) {
                        total = parseFloat((markedCheckbox)[i]) + total;
                        console.log(total);
                        console.log(markedCheckbox);
                        $('total').innerHTML = `$${total}`;
                    } else {
                        total = parseFloat((markedCheckbox)[i]) - total;
                        console.log(total);
                        console.log(markedCheckbox);
                        $('total').innerHTML = `$${total}`;
                    }
                });
            };
        };
    };
    calcTotal();
});


