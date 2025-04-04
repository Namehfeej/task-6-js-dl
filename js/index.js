
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

            

            const buttonAddUser = document.getElementById('submit-button');
            buttonAddUser.addEventListener('click', buttonAddUserConsole);

            function buttonAddUserConsole(event) {
                event.preventDefault();
                const input1FirstNameValue =  input1FirstName.value.charAt(0).toUpperCase() + input1FirstName.value.slice(1).toLowerCase();
                const input1SecondNameValue =  input1SecondName.value.charAt(0).toUpperCase() + input1SecondName.value.slice(1).toLowerCase();
                const input1FirstLastNameValue =  input1FirstLastName.value.toUpperCase();
                const input1SecondLastNameValue =  input1SecondLastName.value.toUpperCase();

                const input2FirstNameValue =  input2FirstName.value.charAt(0).toUpperCase() + input2FirstName.value.slice(1).toLowerCase();;
                const input2SecondNameValue =  input2SecondName.value.charAt(0).toUpperCase() + input2SecondName.value.slice(1).toLowerCase();
                const input2FirstLastNameValue =  input2FirstLastName.value.toUpperCase();
                const input2SecondLastNameValue =  input2SecondLastName.value.toUpperCase();

                


                FullNameValueToConsole = `-----\nIntegrante 1: ${input1FirstNameValue} ${input1SecondNameValue} ${input1FirstLastNameValue} ${input1SecondLastNameValue} 
                \nIntegrante 2: ${input2FirstNameValue} ${input2SecondNameValue} ${input2FirstLastNameValue} ${input2SecondLastNameValue}\n-----`;

                console.log(FullNameValueToConsole);
            }

 

        
    

            

    

        
        



















    
