document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "1. ¿Cuál es una característica principal del software libre?",
            a: "Costo elevado",
            b: "Código fuente cerrado",
            c: "Disponible para modificaciones y redistribución",
            d: "Restricciones en su uso y distribución",
            correct: "c",
            explanation: "El software libre permite modificaciones y redistribución de su código, lo que promueve la colaboración y mejora continua."
        },
        {
            question: "2. ¿Qué no es cierto acerca del copyleft en el software?",
            a: "Permite modificaciones y redistribuciones",
            b: "Protege contra la apropiación del código",
            c: "Restringe las libertades de modificar y redistribuir el software",
            d: "Es una versión de copyright",
            correct: "c",
            explanation: "El copyleft no restringe las libertades de modificar y redistribuir el software; de hecho, garantiza estas libertades."
        },
        {
            question: "3. ¿Qué es el 'Freeware'?",
            a: "Software de código abierto",
            b: "Software gratuito pero no libre",
            c: "Software con licencia de pago",
            d: "Software con restricciones de tiempo",
            correct: "b",
            explanation: "El 'Freeware' es software que se ofrece de forma gratuita, pero no necesariamente permite la modificación o redistribución del código."
        },
        {
            question: "4. ¿Cuál es una característica del software propietario?",
            a: "Permite la libre distribución",
            b: "Es siempre software libre",
            c: "Restricciones en copia, redistribución o modificación",
            d: "Orientado a proyectos de código abierto",
            correct: "c",
            explanation: "El software propietario suele tener restricciones en cuanto a copia, redistribución o modificación, a diferencia del software libre o de código abierto."
        },
        {
            question: "5. ¿Qué define al IaaS en la clasificación de sistemas de gestión?",
            a: "Plataforma como servicio",
            b: "Software como servicio",
            c: "Infraestructura como servicio",
            d: "Instalación in-house",
            correct: "c",
            explanation: "IaaS, o Infraestructura como Servicio, proporciona recursos computacionales, como servidores y almacenamiento, a través de Internet."
        },
        {
            question: "6. ¿En qué se diferencia el PaaS del IaaS?",
            a: "Incluye solo la infraestructura del servidor",
            b: "Incluye tanto la infraestructura como las herramientas necesarias",
            c: "Es un software como servicio",
            d: "No proporciona control sobre las aplicaciones",
            correct: "b",
            explanation: "PaaS, o Plataforma como Servicio, no solo incluye la infraestructura (como IaaS), sino también las herramientas y plataformas necesarias para el desarrollo de aplicaciones."
        },
        {
            question: "7. ¿Qué representa SaaS en la clasificación de sistemas de gestión?",
            a: "Infraestructura, plataforma y aplicaciones en la nube",
            b: "Solo aplicaciones en la nube",
            c: "Solo infraestructura en la nube",
            d: "Solo plataforma en la nube",
            correct: "a",
            explanation: "SaaS, o Software como Servicio, representa un modelo donde los usuarios acceden a aplicaciones en la nube, infraestructura y plataforma incluidas."
        },
        {
            question: "8. ¿Qué tipo de software de gestión es parametrizable?",
            a: "Cerrado y no modificable",
            b: "Abierto pero con restricciones",
            c: "Adaptable a las necesidades de la empresa",
            d: "Exclusivo para grandes empresas",
            correct: "c",
            explanation: "El software de gestión parametrizable es aquel que se puede adaptar a las necesidades específicas de una empresa."
        },
        {
            question: "9. ¿Cuál es una ventaja de los sistemas de gestión cerrados?",
            a: "Bajo costo de adaptación",
            b: "Alta personalización",
            c: "No requieren expertos para su modificación",
            d: "Menor precio comparado con sistemas parametrizables",
            correct: "d",
            explanation: "Los sistemas de gestión cerrados suelen ser más económicos en comparación con sistemas parametrizables, aunque ofrecen menos flexibilidad."
        },
        {
            question: "10. ¿Qué sistema de gestión empresarial se centra en la extracción y visualización de datos?",
            a: "ERP",
            b: "CRM",
            c: "BI",
            d: "IaaS",
            correct: "c",
            explanation: "BI, o Business Intelligence, es el sistema enfocado en la extracción, análisis y visualización de datos para la toma de decisiones empresariales."
        },
        {
            question: "11. ¿Qué es un ERP modular?",
            a: "Un sistema con un solo módulo funcional",
            b: "Un sistema que no permite personalización",
            c: "Un sistema con diferentes módulos integrables",
            d: "Un sistema sin módulos diferenciados",
            correct: "c",
            explanation: "Un ERP modular se refiere a un sistema que ofrece diferentes módulos, cada uno enfocado en una función empresarial específica, que pueden integrarse según las necesidades de la empresa."
        },
        {
            question: "12. ¿Cuál es una característica del software de código abierto?",
            a: "Restricciones en la modificación del código",
            b: "Acceso público al código fuente",
            c: "Prohibición de redistribución",
            d: "Obligación de pago por uso",
            correct: "b",
            explanation: "Una característica distintiva del software de código abierto es el acceso público al código fuente, permitiendo a cualquier usuario estudiar, modificar y distribuir el software."
        },
        {
            question: "13. ¿Qué es una licencia GPL?",
            a: "General Private License",
            b: "General Public License",
            c: "Governmental Provisional License",
            d: "Global Protected License",
            correct: "b",
            explanation: "GPL, o General Public License, es una licencia de software libre que permite la modificación y redistribución del código, garantizando que el software y sus derivados permanezcan libres."
        },
        {
            question: "14. ¿Qué representa el acrónimo OSS?",
            a: "Open Source Software",
            b: "Organizational Support System",
            c: "Operational Security Software",
            d: "Online Service System",
            correct: "a",
            explanation: "OSS significa 'Open Source Software', que se refiere a software cuyo código fuente está disponible para ser modificado y compartido."
        },
        {
            question: "15. ¿Cuál es una ventaja del software de código abierto?",
            a: "Soporte técnico garantizado",
            b: "Menor necesidad de personalización",
            c: "Mayor control y flexibilidad",
            d: "Menor necesidad de actualizaciones",
            correct: "c",
            explanation: "El software de código abierto ofrece mayor control y flexibilidad, ya que los usuarios pueden modificar el software para satisfacer sus necesidades específicas."
        },
        {
            question: "16. ¿Qué implica la virtualización en el contexto de IaaS?",
            a: "Menor dependencia de hardware físico",
            b: "Uso exclusivo de software propietario",
            c: "Mayor costo operativo",
            d: "Menor flexibilidad y escalabilidad",
            correct: "a",
            explanation: "En el contexto de IaaS, la virtualización implica una menor dependencia de hardware físico, ya que los recursos se proporcionan y gestionan a través de la nube."
        },
        {
            question: "17. ¿Cuál es una característica de la computación en la nube?",
            a: "Almacenamiento de datos exclusivamente local",
            b: "Dependencia de una sola ubicación física",
            c: "Acceso y almacenamiento de datos a través de Internet",
            d: "Menor escalabilidad y flexibilidad",
            correct: "c",
            explanation: "Una característica clave de la computación en la nube es la capacidad de acceder y almacenar datos a través de Internet, lo que proporciona flexibilidad y escalabilidad."
        },
        {
            question: "18. ¿Qué es un software in-house?",
            a: "Desarrollado por una empresa externa",
            b: "Desarrollado y utilizado internamente por una empresa",
            c: "Siempre de código abierto",
            d: "No personalizable",
            correct: "b",
            explanation: "El software in-house se refiere a soluciones de software desarrolladas internamente por una empresa para su propio uso, en lugar de ser adquiridas de un proveedor externo."
        },
        {
            question: "19. ¿Cuál es una limitación del freeware?",
            a: "Alto costo",
            b: "Código fuente abierto para modificar",
            c: "No permite uso comercial",
            d: "Requiere conexión a Internet constante",
            correct: "c",
            explanation: "Una limitación común del freeware es que a menudo no permite el uso comercial, aunque sea gratuito para uso personal o no comercial."
        },
        {
            question: "20. ¿Qué ofrece un PaaS además de IaaS?",
            a: "Solo aplicaciones",
            b: "Solo infraestructura",
            c: "Herramientas de desarrollo además de infraestructura",
            d: "Menor control sobre los recursos",
            correct: "c",
            explanation: "PaaS ofrece no solo la infraestructura (como IaaS) sino también herramientas de desarrollo, entornos de ejecución y otros recursos necesarios para el desarrollo de aplicaciones."
        }
    ];
    



    const quizForm = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');

    function loadQuiz() {
        const quizQuestions = quizData.map((q, index) => {
            return `
            <div class="question">${q.question}</div>
            <ul class="options">
                <li><input type="radio" name="question${index}" value="a"> ${q.a}</li>
                <li><input type="radio" name="question${index}" value="b"> ${q.b}</li>
                <li><input type="radio" name="question${index}" value="c"> ${q.c}</li>
                <li><input type="radio" name="question${index}" value="d"> ${q.d}</li>
            </ul>
        `;
        }).join('');
        quizForm.innerHTML = quizQuestions;
    }

    function submitQuiz() {
        const answers = quizData.map((_, index) => {
            return document.querySelector(`input[name="question${index}"]:checked`)?.value;
        });

        let score = 0;
        let resultsHTML = '';

        answers.forEach((answer, index) => {
            if (answer === quizData[index].correct) {
                score++;
                resultsHTML += `<p><b>Pregunta ${index + 1}: correcta.</b> ${quizData[index].explanation}</p>`;
            } else {
                resultsHTML += `<p><b>Pregunta ${index + 1}: INCORRECTA.</b> La respuesta correcta era '${quizData[index].correct}'. ${quizData[index].explanation}</p>`;
            }
        });

        const finalScore = (score / quizData.length) * 10;
        resultsHTML = `<h2>Tu puntuación es: ${finalScore.toFixed(2)} / 10</h2>` + resultsHTML;

        resultDiv.innerHTML = resultsHTML;
    }

    // Asegúrate de eliminar la función submitQuiz() duplicada

    window.submitQuiz = submitQuiz; // Hacer la función accesible globalmente
    loadQuiz();
});