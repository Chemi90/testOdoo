document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "1. ¿Qué acrónimo se utiliza para el Sistema de Planificación de Recursos Empresariales?",
            a: "CRM",
            b: "ERP",
            c: "SGE",
            d: "KPI",
            correct: "b",
            explanation: "ERP significa Enterprise Resource Planning, que se refiere a sistemas que ayudan a las empresas a gestionar y automatizar procesos de negocio."
        },
        {
            question: "2. ¿Qué representa CRM en la gestión empresarial?",
            a: "Customer Relationship Management",
            b: "Corporate Resource Management",
            c: "Customer Retention Mechanism",
            d: "Corporate Relationship Management",
            correct: "a",
            explanation: "CRM se refiere a 'Customer Relationship Management', esencial para la gestión de las relaciones y la interacción con los clientes."
        },
        {
            question: "3. ¿Cuál es un objetivo clave de un SGE?",
            a: "Reducción de personal",
            b: "Incremento de ventas físicas",
            c: "Planificación estratégica y ejecución táctica",
            d: "Reducción de la tecnología en la empresa",
            correct: "c",
            explanation: "Un Sistema de Gestión Empresarial (SGE) busca la planificación estratégica y la ejecución táctica para mejorar la eficiencia organizativa."
        },
        {
            question: "4. ¿Qué área empresarial se enfoca en la relación con los clientes?",
            a: "Finanzas",
            b: "Logística",
            c: "Marketing",
            d: "Producción",
            correct: "c",
            explanation: "El marketing se enfoca en la relación con los clientes, esencial para entender y satisfacer sus necesidades."
        },
        {
            question: "5. ¿Qué es un KPI?",
            a: "Key Performance Indicator",
            b: "Key Process Initiative",
            c: "Key Product Idea",
            d: "Key Personnel Identity",
            correct: "a",
            explanation: "KPI significa 'Key Performance Indicator', utilizado para medir el rendimiento y el éxito en objetivos clave."
        },
        {
            question: "6. ¿Qué estrategia de producción se basa en la demanda real?",
            a: "Push",
            b: "Pull",
            c: "Just-in-Time",
            d: "Outsourcing",
            correct: "b",
            explanation: "La estrategia 'Pull' se basa en la demanda real, produciendo en respuesta a la demanda específica del mercado."
        },
        {
            question: "7. ¿Qué sistema ayuda a almacenar y gestionar datos de clientes?",
            a: "ERP",
            b: "CRM",
            c: "KPI",
            d: "SGE",
            correct: "b",
            explanation: "Un sistema CRM almacena y gestiona datos de clientes, fundamental para mejorar la relación con ellos."
        },
        {
            question: "8. ¿Cuál de los siguientes no es un componente de un ERP?",
            a: "Gestión de personal",
            b: "Control financiero",
            c: "Producción",
            d: "Estrategia publicitaria",
            correct: "d",
            explanation: "La estrategia publicitaria no es un componente típico de un ERP, que se enfoca más en la gestión interna de la empresa."
        },
        {
            question: "9. ¿Qué área se encarga de la gestión del flujo de capital?",
            a: "Operaciones",
            b: "Marketing",
            c: "Finanzas",
            d: "Innovación",
            correct: "c",
            explanation: "El área de finanzas se encarga de gestionar el flujo de capital y los recursos financieros de la empresa."
        },
        {
            question: "10. ¿Cuál de los siguientes es un beneficio de los sistemas ERP?",
            a: "Aumento en el uso de papel",
            b: "Reducción de la eficiencia operativa",
            c: "Integración de diferentes sistemas de la organización",
            d: "Limitación en la toma de decisiones",
            correct: "c",
            explanation: "Los sistemas ERP integran diferentes sistemas de la organización, mejorando la eficiencia y la gestión."
        },
        {
            question: "11. ¿Qué sistema se centra en la automatización de las ventas?",
            a: "ERP",
            b: "CRM",
            c: "SGE",
            d: "KPI",
            correct: "b",
            explanation: "El sistema CRM se centra en la automatización de las ventas, mejorando la eficiencia en la gestión de clientes."
        },
        {
            question: "12. ¿Cuál es un beneficio principal de un sistema CRM?",
            a: "Optimización de la cadena de suministro",
            b: "Gestión eficiente de inventarios",
            c: "Mejora en la relación con los clientes",
            d: "Reducción de costos de marketing",
            correct: "c",
            explanation: "Un sistema CRM mejora significativamente la relación con los clientes, siendo clave para el éxito empresarial."
        },
        {
            question: "13. ¿Qué implica la gestión de la cadena de suministro en un ERP?",
            a: "Gestión de recursos humanos",
            b: "Optimización de procesos de producción",
            c: "Gestión financiera",
            d: "Control y planificación de inventarios",
            correct: "d",
            explanation: "La gestión de la cadena de suministro en un ERP implica el control y la planificación de inventarios, crucial para la eficiencia operativa."
        },
        {
            question: "14. ¿En qué área de negocio es esencial un sistema ERP?",
            a: "Publicidad",
            b: "Ventas al detalle",
            c: "Producción y operaciones",
            d: "Relaciones públicas",
            correct: "c",
            explanation: "Un sistema ERP es esencial en producción y operaciones para integrar y automatizar los procesos empresariales."
        },
        {
            question: "15. ¿Qué permite un buen sistema de ERP en términos de datos?",
            a: "Limitar el acceso a la información",
            b: "Aumentar la redundancia de datos",
            c: "Centralización y consistencia de datos",
            d: "Disminuir la transparencia en la gestión",
            correct: "c",
            explanation: "Un sistema ERP eficiente permite la centralización y consistencia de datos, mejorando la toma de decisiones."
        },
        {
            question: "16. ¿Cuál es un reto común en la implementación de un sistema ERP?",
            a: "Costo bajo y fácil implementación",
            b: "Integración con sistemas existentes",
            c: "Falta de opciones en el mercado",
            d: "Soporte técnico innecesario",
            correct: "b",
            explanation: "Un reto común en la implementación de un sistema ERP es la integración con sistemas existentes en la empresa."
        },
        {
            question: "17. ¿Qué aspecto no es usualmente cubierto por un CRM?",
            a: "Gestión de relaciones con los clientes",
            b: "Automatización del marketing",
            c: "Control de calidad de productos",
            d: "Servicio al cliente y soporte",
            correct: "c",
            explanation: "El control de calidad de productos no es usualmente cubierto por un CRM, que se enfoca más en la gestión de clientes."
        },
        {
            question: "18. ¿Qué se busca mejorar con los sistemas de ERP en el área de finanzas?",
            a: "Publicidad y promociones",
            b: "Reportes financieros y análisis",
            c: "Gestión de personal",
            d: "Desarrollo de nuevos productos",
            correct: "b",
            explanation: "Los sistemas ERP buscan mejorar los reportes financieros y análisis, esenciales para la gestión financiera eficaz."
        },
        {
            question: "19. ¿Qué es esencial para el éxito de un sistema CRM?",
            a: "Enfoque exclusivo en la tecnología",
            b: "Alto costo de implementación",
            c: "Comprensión y uso efectivo de datos de clientes",
            d: "Limitar la interacción con los clientes",
            correct: "c",
            explanation: "Para el éxito de un sistema CRM, es esencial la comprensión y uso efectivo de datos de clientes."
        },
        {
            question: "20. ¿Cuál es un resultado clave de implementar un sistema ERP eficaz?",
            a: "Disminución en la toma de decisiones",
            b: "Aumento en el uso de recursos",
            c: "Mejora en la eficiencia operacional",
            d: "Reducción de la interacción con el cliente",
            correct: "c",
            explanation: "Un resultado clave de un sistema ERP eficaz es la mejora en la eficiencia operacional de la empresa."
        }
    ];


const quizForm = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');

function loadQuiz() {
    const quizQuestions = quizData.map((q, index) => {
        return `
            <div class="question" id="question-${index}">${q.question}</div>
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
        const questionElement = document.getElementById(`question-${index}`);
        if (answer === quizData[index].correct) {
            score++;
            resultsHTML += `<p><a href="#question-${index}"><b>Pregunta ${index + 1}: correcta.</b></a> ${quizData[index].explanation}</p>`;
            questionElement.classList.remove('incorrect');
        } else {
            resultsHTML += `<p><a href="#question-${index}" class="incorrect"><b>Pregunta ${index + 1}: INCORRECTA.</b></a> La respuesta correcta era '${quizData[index].correct}'. ${quizData[index].explanation}</p>`;
            questionElement.classList.add('incorrect');
        }
    });

    const finalScore = (score / quizData.length) * 10;
    resultsHTML = `<h2>Tu puntuación es: ${finalScore.toFixed(2)} / 10</h2>` + resultsHTML;

    resultDiv.innerHTML = resultsHTML;
}

window.submitQuiz = submitQuiz; // Hacer la función accesible globalmente
loadQuiz();
});
