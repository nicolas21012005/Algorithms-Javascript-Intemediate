document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('#cont-global section');
    let currentSectionIndex = 0;

    // Mostrar la primera sección por defecto
    sections[currentSectionIndex].classList.add('active');

    // Función para actualizar la visibilidad de las secciones
    function showSection(index) {
        sections.forEach((section, i) => {
            section.classList.remove('active');
            if (i === index) {
                section.classList.add('active');
            }
        });
        // Desplazar la vista hacia la parte superior de la página
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Event listener para el botón "Siguiente"
    document.getElementById('next').addEventListener('click', function () {
        if (currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
            showSection(currentSectionIndex);
        }
    });

    // Event listener para el botón "Anterior"
    document.getElementById('prev').addEventListener('click', function () {
        if (currentSectionIndex > 0) {
            currentSectionIndex--;
            showSection(currentSectionIndex);
        }
    });

    // Menu toggle
    const botonMenu = document.getElementById('btn-active');
    const ulBotones = document.getElementById('ul-btns');

    botonMenu.addEventListener('click', function () {
        ulBotones.classList.toggle('active');
    });

    // Obtener una referencia a la lista de botones y a todas las secciones
    const botones = document.querySelectorAll('#ul-btns button');
    const secciones = document.querySelectorAll('section[id^="cont"]');

    // Agregar un event listener a cada botón del menú de capítulos
    botones.forEach((boton, index) => {
        boton.addEventListener('click', () => {
            // Remover la clase 'active' de todas las secciones
            secciones.forEach(seccion => {
                seccion.classList.remove('active');
            });

            // Obtener el número de capítulo del botón
            const numeroCapitulo = boton.id.replace('cap', '');

            // Actualizar el índice actual según el capítulo seleccionado
            currentSectionIndex = parseInt(numeroCapitulo) - 1;

            // Agregar la clase 'active' a la sección correspondiente
            const seccionActiva = document.getElementById('cont' + numeroCapitulo);
            seccionActiva.classList.add('active');
            ulBotones.classList.remove('active');

            // Actualizar la vista para el nuevo índice
            showSection(currentSectionIndex);
        });
    });

    // ALGORITMO PARA CALCULAR EL PROMEDIO DE UN ESTUDIANTE QUE TIENE 10 NOTAS

    function calculateAverage() {
        let suma = 0 // declaramos la variable que va a almacenar la suma de las notas
        let promedio = 0 // variable que va a guardar la division de las 10 notas, el promedio
        for (i = 1; i <= 10; i++) { // decimos que vamos a recorrer todos los inputs, desde el 1 hasta el 10
            let id = 'nota' + i; // declaramos una variable que almacena todos los inputs que tengan id nota uno por uno de acuerdo al id que le pusimos a cada uno en el html
            let input = document.getElementById(id); // En esta variable le decimos que busque en todos los elementos input que tengan el atributo id
            let valor = parseFloat(input.value) // Le decimos que el numero que nos pasen puede ser decimal
            if (valor < 1.0 || valor > 5.0) {
                return alert('Por favor asegurese de que todas las notas estén entre 1.0 y 5.0')
            } else {
                suma += valor
            }
            promedio = suma / 10
        }
        if (promedio > 4.4) { // Declaramos los rangos donde en de acuerdo al promedio que haya sacado
            alert('Felicitaciones, su promedio fue Excelente, su nota es ' + promedio)
        } else if (promedio > 3.9) {
            alert('Muy bien!, su promedio fue Sobresaliente, su nota es ' + promedio)
        } else if (promedio > 2.9) {
            alert('Hay que mejorar, su promedio fue Aceptable, su nota es ' + promedio)
        } else {
            alert('Hay que nivelar, su promedio fue Reprobado, su nota es ' + promedio)
        }
    }

    const button = document.getElementById('calculateTotal')


    // ALGORITMO QUE CALCULA LA ETAPA DE LA VIDA EDUCATIVA EN LA QUE ESTA UNA PERSONA EN BASE A SU EDAD


    function lifeStages() {
        let edad = document.getElementById('age').value
        if (edad < 13) {
            alert('Niño(a) - Enfocado en aprendizaje lúdico y exploración')
        } else if (edad > 12 && edad < 18) {
            alert('Adolescente - Etapa de desarrollo del pensamiento crítico y la identidad.')
        } else if (edad > 17 && edad < 26) {
            alert('Joven Adulto - Transición a la educación superior o al mundo laboral.')
        } else if (edad > 26 && edad < 60) {
            alert('Adulto - Posiblemente cursando estudios de posgrado o formación continua.')
        } else {
            alert('Adulto Mayor - Participación en programas de aprendizaje permanente o por interés personal')
        }
    }
    const buttonAction = document.getElementById('calculate')



    //ALGORITMO DE SWITCH CASE DE DIAS Y MESES DEL AÑO DE ACUERDO A LA OPCION QUE ELIJA EL USUARIO
    function daysAndMonths() {
        let dia = parseInt(document.getElementById('week').value)
        switch (dia) {
            case 1:
                alert('Lunes');
                break;
            case 2:
                alert('Martes');
                break;
            case 3:
                alert('Miércoles');
                break;
            case 4:
                alert('Jueves');
                break;
            case 5:
                alert('Viernes');
                break;
            case 6:
                alert('Sábado');
                break;
            case 7:
                alert('Domingo');
                break;
            default:
                alert("Por favor elija un número entre 1 y 7 ");
                break;
        }
    }
    function yearsAndMonths() {
        let months = parseInt(document.getElementById('month').value)
        switch (months) {
            case 1:
                alert('Enero');
                break;
            case 2:
                alert('Febrero');
                break;
            case 3:
                alert('Marzo');
                break;
            case 4:
                alert('Abril');
                break;
            case 5:
                alert('Mayo');
                break;
            case 6:
                alert('Junio');
                break;
            case 7:
                alert('Julio');
                break;
            case 8:
                alert('Agosto');
                break;
            case 9:
                alert('Septiembre');
                break;
            case 10:
                alert('Octubre');
                break;
            case 11:
                alert('Noviembre');
                break;
            case 12:
                alert('Diciembre');
                break;
            default:
                alert("Por favor elija un número entre 1 y 12 ");
                break;
        }
    }

    function activeFistInput() {
        const contenidos = document.getElementsByClassName('contenido')

        for (let i = 0; i < contenidos.length; i++) {
            console.log(contenidos)
            const divPrimero = contenidos[i]
            if (divPrimero.classList.contains('first')) {
                divPrimero.style.display = 'none'
            } else {
                divPrimero.style.display = 'block'
            }
        }
    }

    function activeSecondInput() {
        const contenidos = document.getElementsByClassName('contenido')

        for (let i = 0; i < contenidos.length; i++) {
            console.log(contenidos)
            const divPrimero = contenidos[i]
            if (divPrimero.classList.contains('second')) {
                divPrimero.style.display = 'none'
            } else {
                divPrimero.style.display = 'block'
            }
        }
    }
    const radios = document.querySelectorAll('input[name="opcion"]')
    const buttonDayAndWeek = document.getElementById('calculateDayAndWeek')
    const buttonDayAndMonth = document.getElementById('calculateDayAndMonth')

    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.id === 'option1' && radio.checked) {
                activeFistInput()
            } else if (radio.id === 'option2' && radio.checked) {
                activeSecondInput()
            }
        });
    })
    // ALGORITMO QUE LE DEJA ESCOGER AL USUARIO QUE OPERACION QUIERE QUE HAGA
    // 
    let operationSelected;
    function operationsUser() {
        operationSelected = parseInt(document.getElementById('operation').value)
        if (operationSelected >= 1 && operationSelected <= 4) {
            document.getElementById('inputsTotal').style.display = 'block';
        } else {
            alert('Por favor escoja un numero entre 1 y 4')
        }

    }
    function calculateTotalResult() {
        let result;
        let number1 = parseFloat(document.getElementById('numero1').value)
        let number2 = parseFloat(document.getElementById('numero2').value)
        switch (operationSelected) {
            case 1:
                result = number1 + number2
                break;
            case 2:
                result = number1 - number2
                break;
            case 3:
                result = number1 * number2
                break;
            case 4:
                if (number2 !== 0) {
                    result = number1 / number2
                } else {
                    alert('Por favor escoja un numero diferente a 0')
                    return;
                }
                break;
            default:
                alert('Operacion no valida')
                return;
        }
        document.getElementById('resultado').textContent = 'Resultado: ' + result;
    }
    const buttonResult = document.getElementById('calculateResult')
    const buttonResultTotal = document.getElementById('calculateResultNumbers')



    // ALGORITMO CALCULO DE TARIFA DE SERVICIOS CON CONTEXTO RESIDENCIAL
    let estrato;
    function calculateStratum() {
        let resultStratum;
        numberStratum = parseInt(document.getElementById('stratum').value)
        switch (numberStratum) {
            case 1:
                resultStratum = 10000
                break;
            case 2:
                resultStratum = 15000
                break;
            case 3:
                resultStratum = 20000
                break;
            case 4:
            case 5:
            case 6:
                resultStratum = 25000
                break;
            default:
                alert('Por favor ingrese un número válido entre 1 y 6')
                break;

        }
        document.getElementById('answerStratum').textContent = 'Lo que debe pagar por tener un estrato ' + numberStratum + ' es de: ' + resultStratum;
    }
    const buttonStratumResult = document.getElementById('buttonStratum')



    // ALGORITMO DEL ÍNDICE DE MASA CORPORAL (IMC)Y RECOMENDACIONES DE SALUD

    function imc() {
        weightPerson = parseInt(document.getElementById('weight').value)
        heightPerson = parseFloat(document.getElementById('height').value)
        let imcResult = weightPerson / heightPerson ** 2;
        let answerImc;
        if (imcResult < 18.5) {
            answerImc = 'Bajo peso - se recomienda consultar a un nutricionista'
        } else if (imcResult <= 18.5 && imcResult < 25) {
            answerImc = 'Normal - ¡Mantén un estilo de vida saludable!'
        } else if (imcResult <= 25 && imcResult < 30) {
            answerImc = 'Sobrepeso - Considera realizar más actividad fisica y mejorar tu dieta'
        } else {
            answerImc = 'Obesidad - Es importante buscar asesoramiento médico para un plan de salud integral'
        }
        document.getElementById('showImc').textContent = answerImc + ' ya que tu índice de masa corporal (IMC) es de: ' + imcResult.toFixed(2);

    }
    const buttonImc = document.getElementById('calculateImc')

    // ALGORITMO DE CALCULADORA DE SUELDO DE ACUERDO A LA CANTIDAD DE HIJOS

    function salaryBonification() {
        numberChilds = parseInt(document.getElementById('childs').value)
        salaryAmount = parseInt(document.getElementById('salary').value)
        let amountTotal;
        if (numberChilds > 0 && numberChilds <= 2) {
            amountTotal = ' ya que su bonificación fue del 5%, ' + (salaryAmount * 1.05).toFixed(2)
        } else if (numberChilds >= 3) {
            amountTotal = ' ya que su bonificación fue del 10%, ' + (salaryAmount * 1.1).toFixed(2)
        } else {
            amountTotal = ' Usted no aplica para bonificación, por lo tanto su sueldo es el mismo, '
        }
        document.getElementById('showSalary').textContent = salaryAmount + amountTotal + ' es su salario'
    }

    const buttonSalary = document.getElementById('calculateSalary')

    // ALGORITMO DE LOS TIPOS DE SANGRE

    function kindOfBlood() {
        let answerBlood;
        letterBloods = document.getElementById('letterBlood').value
        switch (letterBloods) {
            case 'A':
            case 'a':
                answerBlood = 'Puede donar a A y AB, puede recibir de A y O'
                break;
            case 'B':
            case 'b':
                answerBlood = 'Puede donar a B y AB, puede recibir de B y O'
                break;
            case 'AB':
            case 'ab':
                answerBlood = 'Puede donar a AB, puede recibir de A, B, AB, y O (receptor universal)'
                break;
            case 'O':
            case 'o':
                answerBlood = 'Puede donar a A, B, AB y O (donante universal). Puede recibir de O'
                break;
            default:
                answerBlood = 'Por favor indique un tipo de sangre válido'
                break;
        }
        console.log(answerBlood)
        document.getElementById('showKindOfBlood').textContent = answerBlood
    }
    const buttonCalculateBlood = document.getElementById('searchBlood')


    //ALGORITMO QUE INDICA EL PROMEDIO ENTRE 3 NOTAS

    function calculateAverageThree() {
        let suma = 0 // declaramos la variable que va a almacenar la suma de las notas
        let promedio = 0 // variable que va a guardar la division de las 10 notas, el promedio
        for (i = 1; i <= 3; i++) { // decimos que vamos a recorrer todos los inputs, desde el 1 hasta el 10
            let id = 'note' + i; // declaramos una variable que almacena todos los inputs que tengan id nota uno por uno de acuerdo al id que le pusimos a cada uno en el html
            let input = document.getElementById(id); // En esta variable le decimos que busque en todos los elementos input que tengan el atributo id
            let valor = parseFloat(input.value) // Le decimos que el numero que nos pasen puede ser decimal
            if (valor < 1.0 || valor > 5.0) {
                return alert('Por favor asegurese de que todas las notas estén entre 1.0 y 5.0')
            } else {
                suma += valor
            }
            promedio = suma / 3
            console.log(promedio)
        }
        if (promedio > 4.4 && promedio <= 5.0) { // Declaramos los rangos donde en de acuerdo al promedio que haya sacado
            alert('Nivel superior - Alcanza un desempeño sobresaliente con nota de: ' + (promedio).toFixed(2))
        } else if (promedio > 3.9 && promedio <= 4.4) {
            alert('Nivel alto - Demuestra un buen dominio de los contenidos con una nota de: ' + (promedio).toFixed(2))
        } else if (promedio > 2.9 && promedio <= 3.9) {
            alert('Nivel Básico - Cumple con los aprendizajes fundamentales con una nota de: ' + (promedio).toFixed(2))
        } else {
            alert('Nivel bajo - Requiere reforzar los conocimientos, con nota de: ' + (promedio).toFixed(2))
        }
    }
    const buttonAverage = document.getElementById('calculateTotalAverage')

    // ALGORITMO DE DESCUENTO POR TIPO DE CLIENTE

    function discountBasedOnClient() {
        let amountOfficial;
        let amount = parseInt(document.getElementById('amountToPay').value)
        const selections = document.getElementById('selectClients').value
        switch (selections) {
            case 'Cliente nuevo':
                amountOfficial = (amount - (amount * .05))
                break;
            case 'Cliente frecuente':
                amountOfficial = (amount - (amount * .1))
                break;
            case 'Cliente VIP':
                amountOfficial = (amount - (amount * .2))
                break;
            default:
                alert('Por favor indique un tipo de cliente valido')
                break;
        }
        console.log(amountOfficial)
        document.getElementById('clientResult').textContent = 'El valor que usted tendrá que pagar por ser ' + selections + ' es de: ' + amountOfficial
    }
    const buttonClient = document.getElementById('calculateDiscount')


    // EJERCICIOS CON BUCLE WHILE
    function counterPositiveAndNegative() {
        let number = parseInt(prompt('Ingrese el primer número'))
        let counterPositive = 0
        let counterNegative = 0
        while (number !== 0) {
            number = parseInt(prompt('Ingrese un número'))
            if (number < 0) {
                counterNegative++
            } else if (number > 0) {
                counterPositive++
            } console.log(counterPositive, counterNegative)
        }
        document.getElementById('negativeNumbers').textContent = counterNegative
        document.getElementById('positiveNumbers').textContent = counterPositive
    }
    const counterNumbers = document.getElementById('counter')


    // ALGORITMO DE INTENTOS DE CONTRASEÑA
    let attemps = 0;
    function attempsPassword() {
        let password = 's3cret0'
        while (attemps < 3) {
            let promptPas = prompt('Ingrese su contraseña')
            if (promptPas === password) {
                alert('La contraseña es correcta, bienvenido al sistema!')
                break;
            } else {
                attemps++
                alert('La contraseña ingresada es incorrecta, intento ' + attemps + ' de 3')
            }
        }
    }
    const buttonPassword = document.getElementById('confirmationPass')


    // WHILE DE ACUMULADOR DE COMPRAS HASTA LLEGAR A 100.000

    function totalProducts() {
        let counterAcumulate = 0;
        let productPrice = 0;
        let counterProduct = 0;
        while (counterAcumulate < 100000) {
            productPrice = parseInt(prompt('Ingrese valor de producto'))
            if (!isNaN(productPrice)) {
                counterAcumulate = productPrice + counterAcumulate;
                counterProduct++
            } else {
                alert('Por favor ingrese un numero valido')
            }
            console.log(counterAcumulate)
        }
        alert('El monto total de su compra es: ' + counterAcumulate + ' con un total de: ' + counterProduct + ' productos')
    }
    const buttonProducts = document.getElementById('calculateTotalPrices')


    // ALGORITMO DE REGISTRO DE ESTUDIANTES 

    function registerStudents() {
        let students = []
        let counter = 0;
        while (counter < 30 || nameStudent == 'fin') {
            let nameStudent = prompt('Ingrese el nombre del estudiante')
            if (nameStudent == 'fin') {
                alert('Fin del registro')
                break;
            }
            let lastNameStudent = prompt('Ingrese el apellido del estudiante')
            students.push(`${nameStudent} ${lastNameStudent}`)
            alert('Registro exitoso!')
            counter++
        } let studentsList = students.join('\n')
        alert(`La lista total de estudiantes fue de ${students.length} y el listado de ellos es \n ${studentsList}`)
    }
    buttonStudents = document.getElementById('studentsNames')

    // FOR DE LA TABLA DE MULTIPLICAR  
    function tableMultiply() {
        let textNumbers = '';
        let numberTyped = parseInt(document.getElementById('numberTable').value)
        for (let i = 1; i <= 20; i++) {
            numberTable = i * numberTyped
            textNumbers = textNumbers + `${numberTyped} x  ${i}  =  ${numberTable}<br>`
            let parrafo = document.getElementById('showTable');
            parrafo.innerHTML = textNumbers
        }
    }

    btnTable = document.getElementById('calculateTable')

    // FOR DE SUMA DE LOS PRIMEROS NUMEROS

    function plusFirstNumbers() {
        let numbers = [];
        let plus = 0;
        let numberSelected = parseInt(document.getElementById('numberPlus').value)
        for (i = 1; i <= numberSelected; i++) {
            plus += i
            numbers.push(i);
        }
        let showNumbers = document.getElementById('showNumbers')
        showNumbers.innerHTML = numbers.join(' + ') + ' = ' + plus
    }

    btnNumbers = document.getElementById('calculateNumbers')


    // ALGORITMO DE CONTADOR DE CARACTERES POR PALABRA

    function counterCharacters() {
        let words = []
        let mostrar = '';
        let word;
        let amount = parseInt(prompt('Ingrese el numero de palabras que desea pasar'))
        if (amount != 0 && amount > 0) {
            for (let i = 1; i <= amount; i++) {
                word = prompt(`Ingrese la palabra número ${i}`)
                words.push(word);
                let charCounter = []
                for (let i = 0; i < words.length; i++) {
                    charCounter.push(words[i].length)

                } let showWords = document.getElementById('showWords')
                mostrar = mostrar + 'La palabra numero: ' + i + ` "${word}" tiene : ${word.length} caracteres <br>`
                showWords.innerHTML = mostrar
            }
        } else {
            alert('Usted ingresó un numero invalido, por favor repita el proceso')
        }
    }

    btnCharacters = document.getElementById('callCharacters')
    // ALGORITMO DE LOS NÚMEROS PARES

    function evenNumbers() {
        let even = 0;
        let evenNumbersArray = []
        let number = parseInt(prompt('Ingrese la cantidad de numeros pares que quiere ver'))
        if (number > 0) {
            for (let i = 0; i < number; i++) {
                even = even + 2;
                evenNumbersArray.push(even)
                console.log(evenNumbersArray)
                let numbersAcumulated = document.getElementById('showEvenNumbers')
                numbersAcumulated.innerHTML = evenNumbersArray.join(' - ')
            }
        } else {
            alert('Por favor ingrese un número o caracter válido')
        }
    }
    btnEven = document.getElementById('buttonEvenNumbers')

    // ALGORITMO DE LAS 5 NOTAS CON CADA MATERIA USANDO ARRAYS

    function performanceStudent() {
        let showNotes = document.getElementById('showResultStudent')
        let dangerSubject = []
        let subjects = [
            'Matématicas', 'Física', 'Química', 'Geometría', 'Ciencias Sociales'
        ]
        let qualifications = [];
        let results = {};
        let summarySubjects = '';
        let total = 0;
        let messagePartial = '';
        let nameStudent = prompt('Ingrese el nombre del estudiante')
        if (nameStudent != '' && nameStudent != null) {
            console.log(nameStudent)
            for (let i = 0; i < subjects.length; i++) {
                let note = parseFloat(prompt('Ingrese la calificación de ' + subjects[i]))
                if (note >= 1 && note <= 5) {
                    qualifications.push(note)
                    results[subjects[i]] = qualifications[i];
                    summarySubjects += `${subjects[i]} : ${qualifications[i]} <br>`
                    console.log(summarySubjects)
                    total = total + qualifications[i]
                    let average = total / qualifications.length
                    console.log(results)
                    if (average > 4.4) { // Declaramos los rangos donde en de acuerdo al promedio que haya sacado
                        messagePartial = 'Felicitaciones, su desempeño fue Excelente, su promedio fue : ' + average
                    } else if (average > 3.9) {
                        messagePartial = 'Muy bien!, su desempeño fue Sobresaliente, su promedio fue : ' + average
                    } else if (average > 2.9) {
                        messagePartial = 'Hay que mejorar, su desempeño fue Aceptable, su promedio fue : ' + average
                    } else {
                        messagePartial = 'Hay que nivelar, su desempeño fue Insuficiente, su promedio fue : ' + average
                    }
                } else {
                    alert('Por favor Ingrese una nota entre 1.0 y 5.0')
                    break;
                }
                if (qualifications[i] < 3) {
                    dangerSubject.push(subjects[i])
                    showNotes.innerHTML = `Sus notas fueron: <br> ${summarySubjects} <br> ${messagePartial} y tiene estas materias con riesgo académico : <br> ${dangerSubject.join(' - ')}`
                } else {
                    showNotes.innerHTML = `Sus notas fueron: <br> ${summarySubjects} <br> ${messagePartial}`
                }
            }
        }
    }

    btnStudent = document.getElementById('buttonResultStudent')


    // INVENTARIO BÁSICO DE PRODUCTOS
    let productsOriginal = [
        { producto: 'Arroz', cantidad: 5 },
        { producto: 'Carne', cantidad: 6 },
        { producto: 'Huevos', cantidad: 12 },
        { producto: 'Pollo', cantidad: 25 },
        { producto: 'Pescado', cantidad: 40 }]
    let products = JSON.parse(JSON.stringify(productsOriginal))
    function inventory() {
        let divActive = document.getElementById('buttons')
        divActive.classList.remove('dark')
        function showInventory() {
            let message = '';
            for (let i = 0; i < products.length; i++) {
                message += `\n${products[i].producto} - ${products[i].cantidad} \n`
            } alert(message)
        }
        function sell() {
            let productSelected = prompt('Qué desea vender?')
            let finded = products.find(p => p.producto.toLowerCase() === productSelected.toLowerCase())
            if (finded) {
                let numberSelected = parseInt(prompt('Ingrese cuantos desea vender, tenemos ' + finded.cantidad))
                if (numberSelected <= finded.cantidad) {
                    finded.cantidad -= numberSelected
                    alert('Usted ha hecho una venta exitosa')
                    showInventory()
                    return
                } else {
                    alert('No tenemos esa cantidad')
                    return;
                }
            } else {
                alert('Ingrese un producto válido o que exista, recuerde que tenemos estos y en esta cantidad: ')
                showInventory()
                return;
            }
        }
        function makeInventory() {
            let productSelected = prompt('¿Qué producto desea surtir?')
            let finded = products.find(p => p.producto.toLowerCase() === productSelected.toLowerCase())
            if (finded) {
                let numberSelected = parseInt(prompt('Ingrese la cantidad que desea ingresar'))
                if (numberSelected > 0) {
                    finded.cantidad += numberSelected
                    alert('Usted ha surtido ' + finded.producto + ' de forma exitosa')
                    showInventory()
                } else {
                    alert('Por favor escriba un número válido')
                }
            } else {
                alert('Ingrese un producto válido o que exista, recuerde que tenemos estos y en esta cantidad: ')
                showInventory()
                return;
            }
        }
        function exit() {
            inventory()
            divActive.classList.add('dark')
        }
        let option1 = document.getElementById('buttonShowInventory')
        let option2 = document.getElementById('buttonSellProduct')
        let option3 = document.getElementById('buttonAssort')
        let option4 = document.getElementById('buttonExit')
        option1.addEventListener('click', showInventory)
        option2.addEventListener('click', sell)
        option3.addEventListener('click', makeInventory)
        option4.addEventListener('click', exit)
    }

    btnIngresar = document.getElementById('buttonFunctionMain')


    // ALGORITMO O FUNCION QUE HACE QUE USTED INGRESE DIEZ CALIFICACIONES Y LE CUENTE CUANTAS VECES SALE CADA UNA

    function surveyAnswer() {
        let answers = []
        let vote1 = 0;
        let vote2 = 0;
        let vote3 = 0;
        let vote4 = 0;
        let vote5 = 0;
        let suma = 0;
        for (let i = 0; i < 10; i++) {
            let calification = parseInt(prompt('Ingrese una calificacion de 1 a 5'))
            while (calification <= 0 || calification > 5 || isNaN(calification)) {
                calification = parseInt(prompt('Esa calificacion esta fuera de lo permitido, Ingrese una calificacion de 1 a 5'))
            }
            answers.push(calification)
            suma = suma + calification
            switch (calification) {
                case 1:
                    vote1++
                    break;
                case 2:
                    vote2++
                    break;
                case 3:
                    vote3++
                    break;
                case 4:
                    vote4++
                    break;
                case 5:
                    vote5++
                    break;
                default:
                    break;
            }

        } alert(`La cantidad de usuarios que votaron: \n 
         1 : ${vote1}\n
         2 : ${vote2}\n
         3 : ${vote3}\n
         4 : ${vote4}\n
         5 : ${vote5}\n      
         `)
        let average = suma / answers.length
        if (average < 4.1) {
            alert('El nivel de satisfacción general fue malo ya que el promedio de satisfacción fue de: ' + average.toFixed(2) + '/5')
        } else {
            alert('El nivel de satisfacción general fue muy bueno ya que el nivel de satisfacción fue de: ' + average.toFixed(2) + '/5')
        }
    }
    btnLogin = document.getElementById('ingresarUsuario')

    // ALGORITMO DE ANÁLISIS DE TEMPERATURAS SEMANALES
    let temperature = [22, 24, 21, 23, 25, 26, 22]

    function calculateTendencies() {
        let average = 0;
        let min = temperature[0]
        let max = temperature[0];
        let plus = 0;
        let overTwentyThree = 0;
        for (let i = 0; i < temperature.length; i++) {
            plus += temperature[i]
            average = plus / temperature.length
            overTwentyThree = temperature[i] > 23 ? overTwentyThree + 1 : overTwentyThree
            max = temperature[i] > max ? max = temperature[i] : max;
            min = temperature[i] < min ? temperature[i] : min;

        } alert(`El promedio del arreglo de temperaturas fue de ${average.toFixed(2)}, \n La cantidad de temperaturas mayores a 23° fue de ${overTwentyThree}, \n La temperatura más alta fue de ${max}, \n Y la temperatura más baja fue ${min}`)
    } btnTemperatures = document.getElementById('btnTemperatures')


    //Filtrado de estudiantes aprobados 

    function filterStudents() {
        let califications = [4.5, 2.9, 3.7, 1.8, 4.2, 3.0, 2.5, 5.0]
        let aproved = [];
        let failed = [];
        let averageAproved = 0;
        let averagePlus = 0;
        for (let i = 0; i < califications.length; i++) {
            if (califications[i] >= 3) {
                aproved.push(califications[i]);
            } else {
                failed.push(califications[i])
            }
        }
        for (let i = 0; i < aproved.length; i++) {
            averagePlus += aproved[i]
        }
        averageAproved = averagePlus / aproved.length
        alert(`La cantidad de notas aprobadas fue ${aproved.length}, y fueron ${aproved.join(' - ')}, \nel promedio de estas fue de ${averageAproved} \n La cantidad de notas no aprobadas fue de ${failed.length}`)
    }
    btnFilter = document.getElementById('filterStudents')

    // OBJETO #1 REGISTRO DE USUARIOS CON INICIO DE SESIÓN
    function iniciarSesionDinamico() {
        // paso 1, crear arreglo de usuarios vacio y solicitar la cantidad
        let usuarios = []
        let cantidadUsuarios = parseInt(prompt('Ingrese la cantidad de usuarios que quiere que tenga el sistema'))
        // paso 2: Solicitar los datos de los diferentes usuarios según la cantidad definida
        for (let i = 0; i < cantidadUsuarios; i++) {
            let variableNombre = prompt('Ingrese el nombre del usuario ' + i + 1)
            let variableEmail = prompt('Ingrese el email del usuario ' + i + 1)
            let variableClave = prompt('Ingrese la clave del usuario ' + i + 1)
            let variableRol = prompt('Ingrese el rol del usuario ' + i + 1)
            // paso 3 : creamos el objeto y lo agregamos al arreglo
            usuarios.push(
                {
                    nombre: variableNombre,
                    email: variableEmail,
                    contraseña: variableClave,
                    rol: variableRol
                }
            )
        } console.log(usuarios)
        // paso 4:  Solicitamos las credenciales de acceso para el Inicio de sesión, Email y clave
        for (let counter = 0; counter < 3; counter++) {
            let correoIngresado = prompt('Ingrese el correo con el que desea iniciar sesión')
            let claveIngresada = prompt('Ingrese la clave con la que desea iniciar sesión')
            let usuarioEncontrado = null;
            // paso 5: validamos los datos de los diferentes objetos almacenados en el arreglo usuarios
            for (let i = 0; i < usuarios.length; i++) {
                if (usuarios[i].email === correoIngresado && usuarios[i].contraseña === claveIngresada) {
                    usuarioEncontrado = usuarios[i]
                    break;
                }
            } if (usuarioEncontrado != null) {
                alert('Bienvenido ' + usuarioEncontrado.rol + ' ' + usuarioEncontrado.nombre)
            } else {
                alert(`Las credenciales ingresadas son incorrectas, le quedan ${2 - counter} intentos`)
            }
        }
    }
    let btnLoginUser = document.getElementById('registerUser')

    // OBJETO #2 AGENDA DE CONTACTOS

    let contacts = []
    function registerContact() {
        let numberContacts = parseInt(prompt('Ingrese cuantos contactos desea registrar'))
        if (numberContacts + contacts.length <= 5) {
            for (let i = 0; i < numberContacts; i++) {
                let nameContact = prompt('Ingrese el nombre del contacto');
                let contactNumber = parseInt(prompt('Ingrese el número del contacto'));
                if (isNaN(contactNumber) || contactNumber <= 0) {
                    alert('Por favor ingrese un número valido')
                    break;
                }
                let emailContact = prompt('Ingrese el email del contacto')
                contacts.push({
                    nombre: nameContact,
                    numero: contactNumber,
                    email: emailContact
                })
            }
        } else {
            alert('Solo se permite ingresar o registrar 5 contactos')
        }
        console.log(contacts)
    }
    function searchContact() {
        let nameFind = prompt('Ingrese el nombre del contacto que quiere buscar')
        let found = false;
        for (let i = 0; i < contacts.length; i++) {
            if (nameFind.toLowerCase() === contacts[i].nombre.toLowerCase()) {
                found = true;
                let answer = prompt(`Contacto encontrado: \n Nombre: ${contacts[i].nombre}\n Número: ${contacts[i].numero} \n Email: ${contacts[i].email} \n ¿Desea editar sus datos? (si/no) `)
                console.log(contacts)
                if (answer === 'si') {
                    let nameContact = prompt('Ingrese el nombre del contacto a editar');
                    let contactNumber = parseInt(prompt('Ingrese el número del contacto a editar'));
                    if (contactNumber === NaN) {
                        alert('Por favor ingrese un número valido')
                    }
                    let emailContact = prompt('Ingrese el email del contacto a editar')
                    contacts[i] = {
                        nombre: nameContact,
                        numero: contactNumber,
                        email: emailContact
                    };
                    alert('Los datos fueron actualizados')
                } break;
            }
        } if (!found) {
            alert('El contacto no existe')
        }
    }
    let btnSearch = document.getElementById('searchContact')
    let btnContacts = document.getElementById('contacts')

    // ALGORITMO DEL CARRITO 

    let carrito = [];
    function addProductToCart() {
        let seguir = true;

        while (seguir) {
            let name = prompt('Ingrese el nombre del producto que desea agregar al carrito');
            let price = parseFloat(prompt('Ingrese el precio del producto'));
            let cantidad = parseInt(prompt('Ingrese la cantidad de productos que desea agregar al carrito'));
            let product = {
                nombre: name,
                precio: price,
                cantidad: cantidad
            }
            carrito.push(product);
            let answer = prompt('¿Desea agregar otro producto al carrito? (si/no)').toLowerCase();
            if (answer !== 'si') {
                seguir = false;
            } showCart();
        }
    }
    function showCart() {
        let total = 0;
        let resum = 'Resumen del carrito:\n';
        for (let i = 0; i < carrito.length; i++) {
            let product = carrito[i];
            let subtotal = product.precio * product.cantidad;
            total += subtotal;

            resum += `${product.nombre} - Precio: $${product.precio.toFixed()}, Cantidad: ${product.cantidad}, Subtotal: $${subtotal.toFixed(2)}\n`;
        }
        resum += `Total: $${total.toFixed(2)}`;
        alert(resum);
    }

    let btnProducts = document.getElementById('addProducts');

    // ALGORITMO DE CATALOGO DE PELICULAS

    const peliculas = [
        { titulo: 'Inception', genero: 'Ciencia Ficción', año: 2010 },
        { titulo: 'Titanic', genero: 'Romance', año: 1997 },
        { titulo: 'Interstellar', genero: 'Ciencia Ficción', año: 2014 },
        { titulo: 'Coco', genero: 'Animacion', año: 2017 },
    ];
    function movies() {
        let search = prompt('Ingrese el genero de la película que desea buscar');
        for (let i = 0; i < peliculas.length; i++) {
            if (search.toLowerCase() === peliculas[i].genero.toLowerCase()) {
                alert(`Pelicula encontrada: ${peliculas[i].titulo},\n Género: ${peliculas[i].genero},\n Año: ${peliculas[i].año}`);
                return;
            } else {
                alert('Película no encontrada');
            }
        }
    }
    function showMoviesOver2000() {
        let peliculasFiltradas = peliculas.filter(p => p.año > 2000);
        if (peliculasFiltradas.length === 0) {
            alert('No hay películas hechas después del año 2000.');
        } else {
            let mensaje = 'Películas hechas después del año 2000:\n';
            peliculasFiltradas.forEach(p => {
                mensaje += `Película: ${p.titulo}, Género: ${p.genero}, Año: ${p.año}\n`;
            });
            alert(mensaje);
        }
    }
    let showMovies = document.getElementById('showMovies');
    let searchMovies = document.getElementById('searchMovies');


    // ALGORITMO PARA REGISTRO Y BUSQUEDA DE VEHICULOS POR PLACA

    const vehicles = [
        { placa: 'ABC123', marca: 'Toyota', modelo: '2020' },
        { placa: 'XYZ789', marca: 'Chevrolet', modelo: '2018' },
        { placa: 'LMN456', marca: 'Ford', modelo: '2022' },
    ];
    function searchVehicle() {
        let placa = prompt('Ingrese la placa del vehículo');
        for (let i = 0; i < vehicles.length; i++) {
            if (vehicles[i].placa.toUpperCase() === placa.toUpperCase()) {
                alert(`Vehículo encontrado: \n Placa: ${vehicles[i].placa}, \n Marca: ${vehicles[i].marca}, \n Modelo: ${vehicles[i].modelo}`);
                return;
            } else if (placa.toUpperCase() === '') {
                alert('Por favor ingrese una placa válida')
                return;
            } else if (placa.toUpperCase() !== vehicles[i].placa.toUpperCase()) {
                alert('Vehículo no encontrado');
                break
            }
        }
    }

    let btnVehicles = document.getElementById('searchVehicles');



    buttonAction.addEventListener('click', lifeStages)
    button.addEventListener('click', calculateAverage)
    buttonDayAndWeek.addEventListener('click', daysAndMonths)
    buttonDayAndMonth.addEventListener('click', yearsAndMonths)
    buttonResult.addEventListener('click', operationsUser)
    buttonResultTotal.addEventListener('click', calculateTotalResult)
    buttonStratumResult.addEventListener('click', calculateStratum)
    buttonImc.addEventListener('click', imc)
    buttonSalary.addEventListener('click', salaryBonification)
    buttonCalculateBlood.addEventListener('click', kindOfBlood)
    buttonAverage.addEventListener('click', calculateAverageThree)
    buttonClient.addEventListener('click', discountBasedOnClient)
    counterNumbers.addEventListener('click', counterPositiveAndNegative)
    buttonPassword.addEventListener('click', attempsPassword)
    buttonProducts.addEventListener('click', totalProducts)
    buttonStudents.addEventListener('click', registerStudents)
    btnTable.addEventListener('click', tableMultiply)
    btnNumbers.addEventListener('click', plusFirstNumbers)
    btnCharacters.addEventListener('click', counterCharacters)
    btnEven.addEventListener('click', evenNumbers)
    btnStudent.addEventListener('click', performanceStudent)
    btnIngresar.addEventListener('click', inventory)
    btnLogin.addEventListener('click', surveyAnswer)
    btnTemperatures.addEventListener('click', calculateTendencies)
    btnFilter.addEventListener('click', filterStudents)
    btnContacts.addEventListener('click', registerContact)
    btnSearch.addEventListener('click', searchContact)
    btnProducts.addEventListener('click', addProductToCart)
    showMovies.addEventListener('click', showMoviesOver2000)
    searchMovies.addEventListener('click', movies)
    btnVehicles.addEventListener('click', searchVehicle)
    btnLoginUser.addEventListener('click', iniciarSesionDinamico)
});
