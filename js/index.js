
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

                //functions for print names

                function FullNamesOnConsole(FullNameValueToConsole){
                    FullNameValueToConsole = "-----\nIntegrante 1: " + newInput1FirstNameValue + " " + newInput1SecondNameValue + " " + newInput1FirstLastNameValue + " " + newInput1SecondLastNameValue + "\n" + "Integrante 2: " + newInput2FirstNameValue + " " + newInput2SecondNameValue + " " + newInput2FirstLastNameValue + " " + newInput2SecondLastNameValue + "\n" + "-----";
                    console.log(FullNameValueToConsole);
                };

                function FullNamesOnConsoleNotSecondNameInput1(FullNameValueToConsole){
                    FullNameValueToConsole = "-----\nIntegrante 1: " + newInput1FirstNameValue + newInput1SecondNameValue + " " + newInput1FirstLastNameValue + " " + newInput1SecondLastNameValue + "\n" + "Integrante 2: " + newInput2FirstNameValue + " " + newInput2SecondNameValue + " " + newInput2FirstLastNameValue + " " + newInput2SecondLastNameValue + "\n" + "-----";
                    console.log(FullNameValueToConsole);
                };

                function FullNamesOnConsoleNotSecondNameInput2(FullNameValueToConsole){
                    FullNameValueToConsole = "-----\nIntegrante 1: " + newInput1FirstNameValue + " " + newInput1SecondNameValue + " " + newInput1FirstLastNameValue + " " + newInput1SecondLastNameValue + "\n" + "Integrante 2: " + newInput2FirstNameValue + newInput2SecondNameValue + " " + newInput2FirstLastNameValue + " " + newInput2SecondLastNameValue + "\n" + "-----";
                    console.log(FullNameValueToConsole); 
                };

                function FullNamesOnConsoleNotSecondName(FullNameValueToConsole){
                    FullNameValueToConsole = "-----\nIntegrante 1: " + newInput1FirstNameValue + newInput1SecondNameValue + " " + newInput1FirstLastNameValue + " " + newInput1SecondLastNameValue + "\n" + "Integrante 2: " + newInput2FirstNameValue + newInput2SecondNameValue + " " + newInput2FirstLastNameValue + " " + newInput2SecondLastNameValue + "\n" + "-----";
                    console.log(FullNameValueToConsole); 
                }


                //Validate second name empty and print without any spaces.

                if (newInput1SecondNameValue.length === 0 && newInput2SecondNameValue.length !== 0) {
                    if (newInput1FirstNameValue === newInput2FirstNameValue || newInput1FirstNameValue === newInput2SecondNameValue) {
                            console.log("Los nombres tienen coincidencias.");
                            //Prompt for color name.
                            const promptNameColor = prompt("Los nombres tienen coincidencias. Elige un color para diferenciar los nombres: rojo o azul.");

                            let promptNameText = promptNameColor.toLowerCase();
                            //console.log(promptNameText);

                            if(promptNameText === 'rojo') {
                                
                                const newInput2SecondNameValueProp = document.getElementById('input2-second-name');
                                const input2AtributteColor = document.createAttribute("class");

                                input2AtributteColor.value = "name-color-red";
                                newInput2SecondNameValueProp.setAttributeNode(input2AtributteColor);

                                const newInput1FirstNameValueProp = document.getElementById('input1-first-name');
                                const input1AtributteColor = document.createAttribute("class");

                                input1AtributteColor.value = "name-color-blue";
                                newInput1FirstNameValueProp.setAttributeNode(input1AtributteColor);
                                confirmAction();
                                
                            } else if (promptNameText === 'azul') {

                                const newInput2SecondNameValueProp = document.getElementById('input2-second-name');
                                const input2AtributteColor = document.createAttribute("class");

                                input2AtributteColor.value = "name-color-blue";
                                newInput2SecondNameValueProp.setAttributeNode(input2AtributteColor);

                                
                                newInput1FirstNameValue.innerHTML = newInput1FirstNameValue.fontcolor("red");
                                console.log(newInput1FirstNameValue);

                                const newInput1FirstNameValueProp = document.getElementById('input1-first-name');
                                const input1AtributteColor = document.createAttribute("class");

                                input1AtributteColor.value = "name-color-red";
                                newInput1FirstNameValueProp.setAttributeNode(input1AtributteColor);
                                confirmAction();
                            }
                            
                    } else if (newInput1SecondNameValue.length !== 0 && newInput2SecondNameValue.length === 0) {
                        if (newInput1FirstNameValue ===  newInput1SecondNameValue || newInput1SecondNameValue === newInput2FirstNameValue) {
                            console.log("Los nombres tienen coincidencias.");
                    //Prompt for color name.
                            const promptNameColor = prompt("Los nombres tienen coincidencias. Elige un color para diferenciar los nombres: rojo o azul.");

                            let promptNameText = promptNameColor.toLowerCase();
                            

                            if(promptNameText === 'rojo') {

                                const newInput2FirstNameValueProp = document.getElementById('input2-first-name');
                                const input1AtributteColor = document.createAttribute("class");

                                input1AtributteColor.value = "name-color-red";
                                newInput2FirstNameValueProp.setAttributeNode(input1AtributteColor);

                                const newInput1FirstNameValueProp = document.getElementById('input1-first-name');
                                const input1FirstAtributteColor = document.createAttribute("class");

                                input1FirstAtributteColor.value = "name-color-blue";
                                newInput1FirstNameValueProp.setAttributeNode(input1FirstAtributteColor);


                                confirmAction();
                                
                            } else if (promptNameText === 'azul') {

                                const newInput2FirstNameValueProp = document.getElementById('input2-first-name');
                                const input1AtributteColor = document.createAttribute("class");

                                input1AtributteColor.value = "name-color-red";
                                newInput2FirstNameValueProp.setAttributeNode(input1AtributteColor);

                                const newInput1FirstNameValueProp = document.getElementById('input1-first-name');
                                const input1FirstAtributteColor = document.createAttribute("class");

                                input1FirstAtributteColor.value = "name-color-red";
                                newInput1FirstNameValueProp.setAttributeNode(input1FirstAtributteColor);

                                confirmAction();
                            }
                        } else if (newInput1FirstNameValue === newInput2FirstNameValue) {
                    //Prompt for color name.
                    const promptNameColor = prompt("Los nombres tienen coincidencias. Elige un color para diferenciar los nombres: rojo o azul.");

                    let promptNameText = promptNameColor.toLowerCase();


                    if(promptNameText === 'rojo') {
                        
                        const newInput2FirstNameValueProp = document.getElementById('input2-first-name');
                        const input1AtributteColor = document.createAttribute("class");

                        input1AtributteColor.value = "name-color-blue";
                        newInput2FirstNameValueProp.setAttributeNode(input1AtributteColor);

                        const newInput1FirstNameValueProp = document.getElementById('input1-first-name');
                        const input1FirstAtributteColor = document.createAttribute("class");

                        input1FirstAtributteColor.value = "name-color-red";
                        newInput1FirstNameValueProp.setAttributeNode(input1FirstAtributteColor);


                        confirmAction();
                        
                    } else if (promptNameText === 'azul') {

                        const newInput2FirstNameValueProp = document.getElementById('input2-first-name');
                        const input1AtributteColor = document.createAttribute("class");

                        input1AtributteColor.value = "name-color-red";
                        newInput2FirstNameValueProp.setAttributeNode(input1AtributteColor);

                        const newInput1FirstNameValueProp = document.getElementById('input1-first-name');
                        const input1FirstAtributteColor = document.createAttribute("class");

                        input1FirstAtributteColor.value = "name-color-blue";
                        newInput1FirstNameValueProp.setAttributeNode(input1FirstAtributteColor);

                        confirmAction();
                            }
                        }
                        else {
                            FullNamesOnConsoleNotSecondNameInput2();
                            console.log("No hay coincidencias entre los nombres.");
                            confirmAction();
                        }
                    } else if (newInput1SecondNameValue.length === 0 && newInput2SecondNameValue.length === 0) {
                        if(newInput1FirstNameValue === newInput2FirstNameValue || newInput2FirstNameValue === newInput1FirstNameValue) {
                            console.log("Los nombres tienen coincidencias.");
                        //Prompt for color name.
                            const promptNameColor = prompt("Los nombres tienen coincidencias. Elige un color para diferenciar los nombres: rojo o azul.");

                            let promptNameText = promptNameColor.toLowerCase();

                            if(promptNameText === 'rojo') {
                                
                                const newInput1FirstNameValueProp = document.getElementById('input1-first-name');
                                const input2AtributteColor = document.createAttribute("class");

                                input2AtributteColor.value = "name-color-red";
                                newInput1FirstNameValueProp.setAttributeNode(input2AtributteColor);

                                const newInput2FirstNameValueProp = document.getElementById('input2-first-name');
                                const input1AtributteColor = document.createAttribute("class");

                                input1AtributteColor.value = "name-color-blue";
                                newInput2FirstNameValueProp.setAttributeNode(input1AtributteColor);
                                confirmAction();
                                
                            } else if (promptNameText === 'azul') {

                                const newInput1FirstNameValueProp = document.getElementById('input1-first-name');
                                const input2AtributteColor = document.createAttribute("class");

                                input2AtributteColor.value = "name-color-blue";
                                newInput1FirstNameValueProp.setAttributeNode(input2AtributteColor);

                                const newInput2FirstNameValueProp = document.getElementById('input2-first-name');
                                const input1AtributteColor = document.createAttribute("class");

                                input1AtributteColor.value = "name-color-red";
                                newInput2FirstNameValueProp.setAttributeNode(input1AtributteColor);
                                confirmAction();
                            }

                        } else {
                            FullNamesOnConsoleNotSecondName();
                            console.log("No hay coincidencias entre los nombres.");
                            confirmAction();
                        }

                    
                    } else if (newInput1SecondNameValue.length !== 0 && newInput2SecondNameValue.length !== 0){
                        if (newInput1FirstNameValue === newInput2FirstNameValue || newInput2FirstNameValue === newInput1FirstNameValue) {
                            console.log("Los nombres tienen coincidencias.");
                            //Prompt for color name.
                            const promptNameColor = prompt("Los nombres tienen coincidencias. Elige un color para diferenciar los nombres: rojo o azul.");

                            let promptNameText = promptNameColor.toLowerCase();

                            if(promptNameText === 'rojo') {
                                
                                const newInput1FirstNameValueProp = document.getElementById('input1-first-name');
                                const input1FirstAtributteColor = document.createAttribute("class");

                                input1FirstAtributteColor.value = "name-color-red";
                                newInput1FirstNameValueProp.setAttributeNode(input1FirstAtributteColor);

                                const newInput2FirstNameValueProp = document.getElementById('input2-first-name');
                                const input2FirstAtributteColor = document.createAttribute("class");

                                input2FirstAtributteColor.value = "name-color-blue";
                                newInput2FirstNameValueProp.setAttributeNode(input2FirstAtributteColor);
                                confirmAction();
                                
                            } else if (promptNameText === 'azul') {

                                const newInput1FirstNameValueProp = document.getElementById('input1-first-name');
                                const input1FirstAtributteColor = document.createAttribute("class");

                                input1FirstAtributteColor.value = "name-color-blue";
                                newInput1FirstNameValueProp.setAttributeNode(input1FirstAtributteColor);

                                const newInput2FirstNameValueProp = document.getElementById('input2-first-name');
                                const input2FirstAtributteColor = document.createAttribute("class");

                                input2FirstAtributteColor.value = "name-color-red";
                                newInput2FirstNameValueProp.setAttributeNode(input2FirstAtributteColor);
                                confirmAction();
                            }

                        } else if (newInput1FirstNameValue === newInput2SecondNameValue || newInput2SecondNameValue === newInput1FirstNameValue) {
                            console.log("Los nombres tienen coincidencias.");
                            //Prompt for color name.
                            const promptNameColor = prompt("Los nombres tienen coincidencias. Elige un color para diferenciar los nombres: rojo o azul.");

                            let promptNameText = promptNameColor.toLowerCase();

                            if(promptNameText === 'rojo') {
                                
                                const newInput1FirstNameValueProp = document.getElementById('input1-first-name');
                                const input1FirstAtributteColor = document.createAttribute("class");

                                input1FirstAtributteColor.value = "name-color-red";
                                newInput1FirstNameValueProp.setAttributeNode(input1FirstAtributteColor);

                                const newInput2SecondNameValueProp = document.getElementById('input2-second-name');
                                const input2SecondAtributteColor = document.createAttribute("class");

                                input2SecondAtributteColor.value = "name-color-blue";
                                newInput2SecondNameValueProp.setAttributeNode(input2SecondAtributteColor);
                                confirmAction();
                                
                            } else if (promptNameText === 'azul') {

                                const newInput1FirstNameValueProp = document.getElementById('input1-first-name');
                                const input1FirstAtributteColor = document.createAttribute("class");

                                input1FirstAtributteColor.value = "name-color-blue";
                                newInput1FirstNameValueProp.setAttributeNode(input1FirstAtributteColor);

                                const newInput2SecondNameValueProp = document.getElementById('input2-second-name');
                                const input2SecondAtributteColor = document.createAttribute("class");

                                input2SecondAtributteColor.value = "name-color-red";
                                newInput2SecondNameValueProp.setAttributeNode(input2SecondAtributteColor);
                                confirmAction();
                            }
                        } else if (newInput1SecondNameValue === newInput2FirstNameValue || newInput2FirstNameValue === newInput1SecondNameValue) {
                            console.log("Los nombres tienen coincidencias.");
                            //Prompt for color name.
                            const promptNameColor = prompt("Los nombres tienen coincidencias. Elige un color para diferenciar los nombres: rojo o azul.");

                            let promptNameText = promptNameColor.toLowerCase();

                            if(promptNameText === 'rojo') {
                                
                                const newInput1SecondNameValueProp = document.getElementById('input1-second-name');
                                const input1SecondAtributteColor = document.createAttribute("class");

                                input1SecondAtributteColor.value = "name-color-red";
                                newInput1SecondNameValueProp.setAttributeNode(input1SecondAtributteColor);

                                const newInput2FirstNameValueProp = document.getElementById('input2-first-name');
                                const input2FirstAtributteColor = document.createAttribute("class");

                                input2FirstAtributteColor.value = "name-color-blue";
                                newInput2FirstNameValueProp.setAttributeNode(input2FirstAtributteColor);
                                confirmAction();
                                
                            } else if (promptNameText === 'azul') {

                                const newInput1SecondNameValueProp = document.getElementById('input1-second-name');
                                const input1SecondAtributteColor = document.createAttribute("class");

                                input1SecondAtributteColor.value = "name-color-blue";
                                newInput1SecondNameValueProp.setAttributeNode(input1SecondAtributteColor);

                                const newInput2FirstNameValueProp = document.getElementById('input2-first-name');
                                const input2FirstAtributteColor = document.createAttribute("class");

                                input2FirstAtributteColor.value = "name-color-red";
                                newInput2FirstNameValueProp.setAttributeNode(input2FirstAtributteColor);
                                confirmAction();
                            }
                        } else if (newInput1SecondNameValue === newInput2SecondNameValue || newInput2SecondNameValue === newInput1SecondNameValue) {
                            console.log("Los nombres tienen coincidencias.");
                            //Prompt for color name.
                            const promptNameColor = prompt("Los nombres tienen coincidencias. Elige un color para diferenciar los nombres: rojo o azul.");

                            let promptNameText = promptNameColor.toLowerCase();

                            if(promptNameText === 'rojo') {
                                
                                const newInput1SecondNameValueProp = document.getElementById('input1-second-name');
                                const input1SecondAtributteColor = document.createAttribute("class");

                                input1SecondAtributteColor.value = "name-color-red";
                                newInput1SecondNameValueProp.setAttributeNode(input1SecondAtributteColor);

                                const newInput2SecondNameValueProp = document.getElementById('input2-second-name');
                                const input2SecondAtributteColor = document.createAttribute("class");

                                input2SecondAtributteColor.value = "name-color-blue";
                                newInput2SecondNameValueProp.setAttributeNode(input2SecondAtributteColor);
                                confirmAction();
                                
                            } else if (promptNameText === 'azul') {

                                const newInput1SecondNameValueProp = document.getElementById('input1-second-name');
                                const input1SecondAtributteColor = document.createAttribute("class");

                                input1SecondAtributteColor.value = "name-color-blue";
                                newInput1SecondNameValueProp.setAttributeNode(input1SecondAtributteColor);

                                const newInput2SecondNameValueProp = document.getElementById('input2-second-name');
                                const input2SecondAtributteColor = document.createAttribute("class");

                                input2SecondAtributteColor.value = "name-color-red";
                                newInput2SecondNameValueProp.setAttributeNode(input2SecondAtributteColor);
                                confirmAction();
                            }
                        }
                        
                        else {
                            FullNamesOnConsole();
                            console.log("No hay coincidencias entre los nombres.");
                            confirmAction();
                        }
                        
                    } else {
                        FullNamesOnConsoleNotSecondNameInput1();
                        console.log("No hay coincidencias entre los nombres.");
                        confirmAction();
                    }        
                }
            }   

    function confirmAction(messageConfirmText) {
        
        //Delete all spaces in the input values.
        
        const input1FirstLastNameValueNotSpace = input1FirstLastName.value.trim();
        const input1SecondLastNameValueNotSpace = input1SecondLastName.value.trim();

        const input2FirstLastNameValueNotSpace = input2FirstLastName.value.trim();
        const input2SecondLastNameValueNotSpace = input2SecondLastName.value.trim();

        //Initial string Uppercase and others strings lowercase.

        let newInput1FirstLastNameValue =  input1FirstLastNameValueNotSpace.toUpperCase();

        let newInput1SecondLastNameValue =  input1SecondLastNameValueNotSpace.toUpperCase();

        let newInput2FirstLastNameValue =  input2FirstLastNameValueNotSpace.toUpperCase();

        let newInput2SecondLastNameValue =  input2SecondLastNameValueNotSpace.toUpperCase();

                messageConfirmText = "¿Deseas evaluar los apellidos?";
                   if(confirm(messageConfirmText)) {
                        if(newInput1FirstLastNameValue === newInput2FirstLastNameValue || newInput2FirstLastNameValue === newInput1FirstLastNameValue) {
                            console.log("Los apellidos tienen coincidencias.");
                            //Prompt for color name.
                            const promptLastNameColor = prompt("Los apellidos tienen coincidencias. Elige un color para diferenciar los apellidos: rojo o azul.");

                            let promptLastNameText = promptLastNameColor.toLowerCase();

                            if(promptLastNameText === 'rojo') {
                                
                                const newInput1FirstLastNameValueProp = document.getElementById('input1-first-lastName');
                                const input1FirstAtributteColor = document.createAttribute("class");

                                input1FirstAtributteColor.value = "name-color-red";
                                newInput1FirstLastNameValueProp.setAttributeNode(input1FirstAtributteColor);

                                const newInput2FirstLastNameValueProp = document.getElementById('input2-first-lastName');
                                const input2FirstAtributteColor = document.createAttribute("class");

                                input2FirstAtributteColor.value = "name-color-blue";
                                newInput2FirstLastNameValueProp.setAttributeNode(input2FirstAtributteColor);
                                
                                
                            } else if (promptLastNameText === 'azul') {

                                const newInput1FirstLastNameValueProp = document.getElementById('input1-first-lastName');
                                const input1FirstAtributteColor = document.createAttribute("class");

                                input1FirstAtributteColor.value = "name-color-blue";
                                newInput1FirstLastNameValueProp.setAttributeNode(input1FirstAtributteColor);

                                const newInput2FirstLastNameValueProp = document.getElementById('input2-first-lastName');
                                const input2FirstAtributteColor = document.createAttribute("class");

                                input2FirstAtributteColor.value = "name-color-red";
                                newInput2FirstLastNameValueProp.setAttributeNode(input2FirstAtributteColor);
                            }

                        } else if (newInput1SecondLastNameValue === newInput2SecondLastNameValue || newInput2SecondLastNameValue === newInput1SecondLastNameValue) {
                            console.log("Los apellidos tienen coincidencias.");
                            //Prompt for color name.
                            const promptLastNameColor = prompt("Los apellidos tienen coincidencias. Elige un color para diferenciar los apellidos: rojo o azul.");

                            let promptLastNameText = promptLastNameColor.toLowerCase();

                            if(promptLastNameText === 'rojo') {
                                
                                const newInput1SecondLastNameValueProp = document.getElementById('input1-second-lastName');
                                const input1SecondAtributteColor = document.createAttribute("class");

                                input1SecondAtributteColor.value = "name-color-red";
                                newInput1SecondLastNameValueProp.setAttributeNode(input1SecondAtributteColor);

                                const newInput2SecondLastNameValueProp = document.getElementById('input2-second-lastName');
                                const input2SecondtAtributteColor = document.createAttribute("class");

                                input2SecondtAtributteColor.value = "name-color-blue";
                                newInput2SecondLastNameValueProp.setAttributeNode(input2SecondtAtributteColor);
                                
                                
                            } else if (promptLastNameText === 'azul') {

                                const newInput1SecondLastNameValueProp = document.getElementById('input1-second-lastName');
                                const input1SecondAtributteColor = document.createAttribute("class");

                                input1SecondAtributteColor.value = "name-color-blue";
                                newInput1SecondLastNameValueProp.setAttributeNode(input1SecondAtributteColor);

                                const newInput2SecondLastNameValueProp = document.getElementById('input2-second-lastName');
                                const input2SecondtAtributteColor = document.createAttribute("class");

                                input2SecondtAtributteColor.value = "name-color-red";
                                newInput2SecondLastNameValueProp.setAttributeNode(input2SecondtAtributteColor);
                            }

                        } else if (newInput1FirstLastNameValue === newInput2SecondLastNameValue || newInput2SecondLastNameValue === newInput1FirstLastNameValue) {
                            console.log("Los apellidos tienen coincidencias.");
                            //Prompt for color name.
                            const promptLastNameColor = prompt("Los apellidos tienen coincidencias. Elige un color para diferenciar los apellidos: rojo o azul.");

                            let promptLastNameText = promptLastNameColor.toLowerCase();

                            if(promptLastNameText === 'rojo') {
                                
                                const newInput1FirstLastNameValueProp = document.getElementById('input1-first-lastName');
                                const input1FirstAtributteColor = document.createAttribute("class");

                                input1FirstAtributteColor.value = "name-color-red";
                                newInput1FirstLastNameValueProp.setAttributeNode(input1FirstAtributteColor);

                                const newInput2SecondLastNameValueProp = document.getElementById('input2-second-lastName');
                                const input2SecondtAtributteColor = document.createAttribute("class");

                                input2SecondtAtributteColor.value = "name-color-blue";
                                newInput2SecondLastNameValueProp.setAttributeNode(input2SecondtAtributteColor);
                                
                                
                            } else if (promptLastNameText === 'azul') {

                                const newInput1FirstLastNameValueProp = document.getElementById('input1-first-lastName');
                                const input1FirstAtributteColor = document.createAttribute("class");

                                input1FirstAtributteColor.value = "name-color-blue";
                                newInput1FirstLastNameValueProp.setAttributeNode(input1FirstAtributteColor);

                                const newInput2SecondLastNameValueProp = document.getElementById('input2-second-lastName');
                                const input2SecondtAtributteColor = document.createAttribute("class");

                                input2SecondtAtributteColor.value = "name-color-red";
                                newInput2SecondLastNameValueProp.setAttributeNode(input2SecondtAtributteColor);
                            }

                        } else if (newInput1SecondLastNameValue === newInput2FirstLastNameValue || newInput2FirstLastNameValue === newInput1SecondLastNameValue) {
                            console.log("Los apellidos tienen coincidencias.");
                            //Prompt for color name.
                            const promptLastNameColor = prompt("Los apellidos tienen coincidencias. Elige un color para diferenciar los apellidos: rojo o azul.");

                            let promptLastNameText = promptLastNameColor.toLowerCase();

                            if(promptLastNameText === 'rojo') {
                                
                                const newInput1SecondLastNameValueProp = document.getElementById('input1-second-lastName');
                                const input1SecondAtributteColor = document.createAttribute("class");

                                input1SecondAtributteColor.value = "name-color-red";
                                newInput1SecondLastNameValueProp.setAttributeNode(input1SecondAtributteColor);

                                const newInput2FirstLastNameValueProp = document.getElementById('input2-first-lastName');
                                const input2FirstAtributteColor = document.createAttribute("class");

                                input2FirstAtributteColor.value = "name-color-blue";
                                newInput2FirstLastNameValueProp.setAttributeNode(input2FirstAtributteColor);
                                
                                
                            } else if (promptLastNameText === 'azul') {

                                const newInput1SecondLastNameValueProp = document.getElementById('input1-second-lastName');
                                const input1SecondAtributteColor = document.createAttribute("class");

                                input1SecondAtributteColor.value = "name-color-blue";
                                newInput1SecondLastNameValueProp.setAttributeNode(input1SecondAtributteColor);

                                const newInput2FirstLastNameValueProp = document.getElementById('input2-first-lastName');
                                const input2FirstAtributteColor = document.createAttribute("class");

                                input2FirstAtributteColor.value = "name-color-red";
                                newInput2FirstLastNameValueProp.setAttributeNode(input2FirstAtributteColor);
                            }

                        } else {
                            console.log("No hay coincidencias entre los apellidos.");
                        }
                   }      else {
                            console.log('No se evaluaron los apellidos.');
                   }
    }

    

    

 

            
 

        
    

            

    

        
        



















    
