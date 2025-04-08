
//Code for prints the names for each user.   

    //Item 1.

            const titleTask6 = console.log(document.getElementById('title-task6').innerHTML);

    //Item 2.
            const input1FirstName = document.getElementById('input1-first-name');
            const input1SecondName = document.getElementById('input1-second-name');
            const input1FirstLastName = document.getElementById('input1-first-lastName');
            const input1SecondLastName = document.getElementById('input1-second-lastName');

            const input2FirstName = document.getElementById('input2-first-name');
            const input2SecondName = document.getElementById('input2-second-name');
            const input2FirstLastName = document.getElementById('input2-first-lastName');
            const input2SecondLastName = document.getElementById('input2-second-lastName');

            
//Item 3.
            const buttonAddUser = document.getElementById('submit-button');
            buttonAddUser.addEventListener('click', buttonAddUserConsole);

            function buttonAddUserConsole(event) {
                event.preventDefault();
                //Delete all spaces in the input values.
                const input1FirstNameValueNotSpace = input1FirstName.value.trim();
                const input1SecondNameValueNotSpace = input1SecondName.value.trim();
                const input1FirstLastNameValueNotSpace = input1FirstLastName.value.trim();
                const input1SecondLastNameValueNotSpace = input1SecondLastName.value.trim();
                const input2FirstNameValueNotSpace = input2FirstName.value.trim();
                const input2SecondNameValueNotSpace = input2SecondName.value.trim();
                const input2FirstLastNameValueNotSpace = input2FirstLastName.value.trim();
                const input2SecondLastNameValueNotSpace = input2SecondLastName.value.trim();

                //Initial string Uppercase and others strings lowercase.

                let newInput1FirstNameValue =  input1FirstNameValueNotSpace.charAt(0).toUpperCase() + input1FirstNameValueNotSpace.slice(1).toLowerCase();
                
                let newInput1SecondNameValue =  input1SecondNameValueNotSpace.charAt(0).toUpperCase() + input1SecondNameValueNotSpace.slice(1).toLowerCase();

                let newInput1FirstLastNameValue =  input1FirstLastNameValueNotSpace.toUpperCase();

                let newInput1SecondLastNameValue =  input1SecondLastNameValueNotSpace.toUpperCase();

                let newInput2FirstNameValue =  input2FirstNameValueNotSpace.charAt(0).toUpperCase() + input2FirstNameValueNotSpace.slice(1).toLowerCase();

                let newInput2SecondNameValue =  input2SecondNameValueNotSpace.charAt(0).toUpperCase() + input2SecondNameValueNotSpace.slice(1).toLowerCase();

                let newInput2FirstLastNameValue =  input2FirstLastNameValueNotSpace.toUpperCase();

                let newInput2SecondLastNameValue =  input2SecondLastNameValueNotSpace.toUpperCase();

                //Validate second name empty and print without any spaces.

                if (newInput1SecondNameValue.length === 0 && newInput2SecondNameValue.length !== 0) {
                        if (newInput1FirstNameValue === newInput2FirstNameValue || newInput1FirstNameValue === newInput2SecondNameValue) {
                            console.log("Los nombres tienen coincidencias.");
                            //Prompt for color name.
                            const promptNameColor = prompt("Los nombres tienen coincidencias. Elige un color para diferenciar los nombres: rojo o azul.");

                            let promptNameText = promptNameColor.toLowerCase();
                            console.log(promptNameText);

                            if(promptNameText === 'rojo') {
                                
                                const newInput2SecondNameValueProp = document.getElementById('input2-second-name');
                                const input2AtributteColor = document.createAttribute("class");

                                input2AtributteColor.value = "name-color-red";
                                newInput2SecondNameValueProp.setAttributeNode(input2AtributteColor);

                                //console.log(newInput2SecondNameValueProp.getAttribute("class"));

                                
                                newInput1FirstNameValue.innerHTML = newInput1FirstNameValue.fontcolor("azul");
                                console.log(newInput1FirstNameValue);

                                const newInput1FirstNameValueProp = document.getElementById('input1-first-name');
                                const input1AtributteColor = document.createAttribute("class");

                                input1AtributteColor.value = "name-color-blue";
                                newInput1FirstNameValueProp.setAttributeNode(input1AtributteColor);

                                //console.log(newInput1FirstNameValueProp.getAttribute("class"));
                                
                                
                            } else if (promptNameText === 'azul') {
                                const newInput1FirstNameValueColor = newInput1FirstNameValue.fontcolor("azul");
                                console.log(newInput1FirstNameValueColor);
                                newInput1FirstNameValue.innerHTML = newInput1FirstNameValueColor;
                                

                                const newInput2SecondNameValueColor = newInput2SecondNameValue.fontcolor("red");
                                console.log(newInput2SecondNameValueColor);
                                newInput2SecondNameValue.innerHTML = newInput2SecondNameValueColor;
                            }
                            
                        } else {
                            FullNameValueToConsole = "-----\nIntegrante 1: " + newInput1FirstNameValue + newInput1SecondNameValue + " " + newInput1FirstLastNameValue + " " + newInput1SecondLastNameValue + "\n" + "Integrante 2: " + newInput2FirstNameValue + " " + newInput2SecondNameValue + " " + newInput2FirstLastNameValue + " " + newInput2SecondLastNameValue + "\n" + "-----";
                            console.log(FullNameValueToConsole);
                        }

                    
                     
                } else if (newInput1SecondNameValue.length !== 0 && newInput2SecondNameValue.length === 0) {
                        if (newInput1FirstNameValue ===  newInput1SecondNameValue || newInput1SecondNameValue === newInput2SecondNameValue) {
                            console.log("Los nombres tienen coincidencias.");
                        }
                        else {
                            FullNameValueToConsole = "-----\nIntegrante 1: " + newInput1FirstNameValue + " " + newInput1SecondNameValue + " " + newInput1FirstLastNameValue + " " + newInput1SecondLastNameValue + "\n" + "Integrante 2: " + newInput2FirstNameValue + newInput2SecondNameValue + " " + newInput2FirstLastNameValue + " " + newInput2SecondLastNameValue + "\n" + "-----";
                            console.log(FullNameValueToConsole); 
                        }

                    
                }
                
                else if (newInput1SecondNameValue.length === 0 && newInput2SecondNameValue.length === 0) {
                        if(newInput1FirstNameValue === newInput2FirstNameValue || newInput2FirstNameValue === newInput1FirstNameValue) {
                            console.log("Los nombres tienen coincidencias.");

                        } else {
                            FullNameValueToConsole = "-----\nIntegrante 1: " + newInput1FirstNameValue + newInput1SecondNameValue + " " + newInput1FirstLastNameValue + " " + newInput1SecondLastNameValue + "\n" + "Integrante 2: " + newInput2FirstNameValue + newInput2SecondNameValue + " " + newInput2FirstLastNameValue + " " + newInput2SecondLastNameValue + "\n" + "-----";
                            console.log(FullNameValueToConsole); 
                        }

                    
                } 
                
                else if (newInput1SecondNameValue.length !== 0 && newInput2SecondNameValue.length !== 0){
                        if (newInput1FirstNameValue === newInput2FirstNameValue || newInput1FirstNameValue ===      newInput2SecondNameValue || newInput2FirstNameValue === newInput1FirstNameValue || newInput2FirstNameValue ===  newInput1SecondNameValue || newInput1SecondNameValue === newInput2SecondNameValue) {
                            console.log("Los nombres tienen coincidencias.");
                        } else {
                            FullNameValueToConsole = "-----\nIntegrante 1: " + newInput1FirstNameValue + " " + newInput1SecondNameValue + " " + newInput1FirstLastNameValue + " " + newInput1SecondLastNameValue + "\n" + "Integrante 2: " + newInput2FirstNameValue + " " + newInput2SecondNameValue + " " + newInput2FirstLastNameValue + " " + newInput2SecondLastNameValue + "\n" + "-----";
                            console.log(FullNameValueToConsole);
                        }

                        
                    }

                
            }

            /**
             * 
             * else {
                    FullNameValueToConsole = "-----\nIntegrante 1: " + newInput1FirstNameValue + " " + newInput1SecondNameValue + " " + newInput1FirstLastNameValue + " " + newInput1SecondLastNameValue + "\n" + "Integrante 2: " + newInput2FirstNameValue + " " + newInput2SecondNameValue + " " + newInput2FirstLastNameValue + " " + newInput2SecondLastNameValue + "\n" + "-----";
                    console.log(FullNameValueToConsole);
                }

                                else {
                    FullNameValueToConsole = "-----\nIntegrante 1: " + newInput1FirstNameValue + " " + newInput1SecondNameValue + " " + newInput1FirstLastNameValue + " " + newInput1SecondLastNameValue + "\n" + "Integrante 2: " + newInput2FirstNameValue + " " + newInput2SecondNameValue + " " + newInput2FirstLastNameValue + " " + newInput2SecondLastNameValue + "\n" + "-----";
                    console.log(FullNameValueToConsole);;
                }
             * 
             * 
             FullNameValueToConsole = `-----\nIntegrante 1: ${newInput1FirstNameValue} ${newInput1SecondNameValue} ${newInput1FirstLastNameValue} ${newInput1SecondLastNameValue} 
                    \nIntegrante 2: ${newInput2FirstNameValue} ${newInput2SecondNameValue} ${newInput2FirstLastNameValue} ${newInput2SecondLastNameValue}\n-----`;
             
             const validateInput2String = (input1SecondNameValue, input2SecondNameValue) => {
                if (input1SecondNameValue == "" && input2SecondNameValue == "") {
                    const inputSecondNameSpace = input1SecondNameValue.trim();
                } else {
                    return false;
                }
            }


                            if (newInput1SecondNameValue.length === 0 || newInput2SecondNameValue.length === 0) {
                    console.log(newInput1SecondNameValue, newInput2SecondNameValue);
                    const newInput1SecondNameValue = newInput2SecondNameValue.replace('',);
                    const newInput2SecondNameValue = newInput2SecondNameValue.replace('',);

                    FullNameValueToConsole = `-----\nIntegrante 1: ${newInput1FirstNameValue} ${newInput1SecondNameValue} ${newInput1FirstLastNameValue} ${newInput1SecondLastNameValue} 
                    \nIntegrante 2: ${newInput2FirstNameValue} ${newInput2SecondNameValue} ${newInput2FirstLastNameValue} ${newInput2SecondLastNameValue}\n-----`;
                    console.log(FullNameValueToConsole);
                     
                } else {
                    FullNameValueToConsole = `-----\nIntegrante 1: ${newInput1FirstNameValue} ${newInput1SecondNameValue} ${newInput1FirstLastNameValue} ${newInput1SecondLastNameValue} 
                    \nIntegrante 2: ${newInput2FirstNameValue} ${newInput2SecondNameValue} ${newInput2FirstLastNameValue} ${newInput2SecondLastNameValue}\n-----`;
                    console.log(FullNameValueToConsole);
                }
 
             */
            
 

        
    

            

    

        
        



















    
