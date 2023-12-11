document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "1. ¿Qué identifica el sufijo 'base' en las tablas de Odoo?",
            a: "Tablas de módulos externos",
            b: "Tablas 'core' de Odoo",
            c: "Tablas de usuarios",
            d: "Tablas de configuración",
            correct: "b",
            explanation: "El sufijo 'base' en las tablas de Odoo identifica las tablas 'core' del sistema, que son fundamentales para su funcionamiento."
        },
        {
            question: "2. ¿Para qué se activa el modo desarrollador en Odoo?",
            a: "Para acceder a ajustes técnicos",
            b: "Para mejorar la interfaz de usuario",
            c: "Para conectarse a bases de datos externas",
            d: "Para aumentar la seguridad",
            correct: "a",
            explanation: "El modo desarrollador en Odoo se activa para acceder a ajustes técnicos y opciones avanzadas no disponibles en el modo normal."
        },
        {
            question: "3. ¿Dónde se gestionan los modelos en Odoo?",
            a: "En la configuración general",
            b: "En los ajustes de usuario",
            c: "En el menú de ventas",
            d: "En modelos",
            correct: "d",
            explanation: "Los modelos en Odoo se gestionan en la sección 'Modelos', donde se pueden configurar y personalizar según las necesidades del negocio."
        },
        {
            question: "4. ¿Qué prefijo deben tener los nuevos campos en Odoo?",
            a: "od_",
            b: "oo_",
            c: "x_",
            d: "odoo_",
            correct: "c",
            explanation: "Los nuevos campos personalizados en Odoo deben tener el prefijo 'x_', lo que los diferencia de los campos predeterminados del sistema."
        },
        {
            question: "5. ¿Qué lenguaje utiliza Odoo para crear vistas?",
            a: "HTML",
            b: "QView",
            c: "XML",
            d: "JSON",
            correct: "b",
            explanation: "Odoo utiliza QWeb, un motor de plantillas basado en XML, para crear y personalizar las vistas de sus diferentes módulos."
        },
        {
            question: "6. ¿Qué sistema de monitorización se menciona en el documento?",
            a: "Zabbix",
            b: "Nagios",
            c: "Prometheus",
            d: "Grafana",
            correct: "b",
            explanation: "Nagios es el sistema de monitorización mencionado, conocido por su eficacia en el seguimiento y la alerta de problemas en sistemas y redes."
        },
        {
            question: "7. ¿Qué tipo de logs proporciona Odoo?",
            a: "Solo del servidor de aplicaciones",
            b: "Solo de base de datos",
            c: "De aplicaciones y base de datos",
            d: "De usuario y seguridad",
            correct: "c",
            explanation: "Odoo proporciona logs tanto del servidor de aplicaciones como de la base de datos, permitiendo un seguimiento detallado de las operaciones y posibles problemas."
        },
        {
            question: "8. ¿Qué tipo de acceso se gestiona con 'usuarios' y 'grupos' en Odoo?",
            a: "Acceso a la base de datos",
            b: "Acceso al servidor físico",
            c: "Acceso a nivel de aplicación",
            d: "Acceso a informes",
            correct: "c",
            explanation: "En Odoo, los 'usuarios' y 'grupos' se utilizan para gestionar el acceso a nivel de aplicación, controlando qué usuarios pueden ver y hacer dentro del sistema."
        },
        {
            question: "9. ¿Qué permite realizar los procedimientos almacenados en Odoo?",
            a: "Solo tareas de mantenimiento",
            b: "Solo programar backups",
            c: "Acciones programadas en el servidor",
            d: "Mejorar la interfaz de usuario",
            correct: "c",
            explanation: "Los procedimientos almacenados en Odoo permiten realizar acciones programadas en el servidor, como tareas automatizadas y rutinas de mantenimiento."
        },
        {
            question: "10. ¿Qué módulos se mencionan en el documento para Odoo?",
            a: "Compras, Ventas, Contabilidad, Inventario, CRM",
            b: "RRHH, Finanzas, Logística, Producción",
            c: "Marketing, Ventas, Soporte, Desarrollo",
            d: "Gestión de proyectos, Calidad, Mantenimiento",
            correct: "a",
            explanation: "Los módulos mencionados en el documento para Odoo incluyen Compras, Ventas, Contabilidad, Inventario y CRM, cubriendo áreas clave del negocio."
        },
        {
            question: "11. ¿Cuál es el propósito principal de las bases de datos en Odoo?",
            a: "Almacenar configuraciones de usuario",
            b: "Gestionar la seguridad del sistema",
            c: "Almacenar y gestionar los datos del negocio",
            d: "Realizar backups automáticos",
            correct: "c",
            explanation: "El propósito principal de las bases de datos en Odoo es almacenar y gestionar todos los datos del negocio, que son fundamentales para las operaciones diarias y la toma de decisiones."
        },
        {
            question: "12. ¿Qué tipo de base de datos utiliza Odoo?",
            a: "SQL",
            b: "NoSQL",
            c: "Relacional",
            d: "Basada en grafos",
            correct: "c",
            explanation: "Odoo utiliza bases de datos relacionales para almacenar y organizar datos, lo cual es esencial para mantener la integridad y la eficiencia en el manejo de la información."
        },
        {
            question: "13. ¿Qué es Odoo SH?",
            a: "Una versión especial de Odoo para la gestión de hardware",
            b: "Un módulo para la gestión de ventas",
            c: "Una plataforma de hosting de Odoo",
            d: "Un sistema de gestión de bases de datos",
            correct: "c",
            explanation: "Odoo SH es una plataforma de hosting proporcionada por Odoo, que ofrece servicios de alojamiento y gestión para las aplicaciones Odoo en la nube."
        },
        {
            question: "14. ¿Qué funcionalidad ofrece el módulo 'Website' en Odoo?",
            a: "Analítica web",
            b: "Gestión de contenidos web",
            c: "Monitoreo de red",
            d: "Seguridad web",
            correct: "b",
            explanation: "El módulo 'Website' en Odoo ofrece funcionalidades para la gestión de contenidos web, permitiendo a los usuarios crear y administrar su propia página web."
        },
        {
            question: "15. ¿Qué módulo de Odoo se enfoca en la gestión de proyectos?",
            a: "Project",
            b: "Sales",
            c: "CRM",
            d: "Inventory",
            correct: "a",
            explanation: "El módulo 'Project' en Odoo está diseñado específicamente para la gestión de proyectos, facilitando la planificación, seguimiento y análisis de proyectos."
        },
        {
            question: "16. ¿Qué permite la función 'Studio' en Odoo?",
            a: "Edición de código fuente",
            b: "Personalización de la interfaz de usuario",
            c: "Creación de informes personalizados",
            d: "Gestión de base de datos",
            correct: "b",
            explanation: "La función 'Studio' en Odoo permite a los usuarios personalizar la interfaz de usuario, adaptando el sistema a sus necesidades específicas sin necesidad de programación avanzada."
        },
        {
            question: "17. ¿Qué módulo se utiliza para la gestión de recursos humanos en Odoo?",
            a: "HR",
            b: "Employees",
            c: "Payroll",
            d: "Recruitment",
            correct: "b",
            explanation: "El módulo 'Employees' en Odoo se utiliza para la gestión integral de los recursos humanos, abarcando desde la información del empleado hasta la gestión del desempeño."
        },
        {
            question: "18. ¿Cuál es el propósito del módulo 'CRM' en Odoo?",
            a: "Gestión de relaciones con clientes",
            b: "Gestión de recursos humanos",
            c: "Planificación de recursos empresariales",
            d: "Gestión de inventario",
            correct: "a",
            explanation: "El módulo 'CRM' en Odoo se enfoca en la gestión de relaciones con clientes, proporcionando herramientas para el seguimiento de clientes potenciales, oportunidades y actividades de ventas."
        },
        {
            question: "19. ¿Qué representa el módulo 'Inventory' en Odoo?",
            a: "Gestión de activos fijos",
            b: "Gestión de inventario y logística",
            c: "Control financiero",
            d: "Gestión de proyectos",
            correct: "b",
            explanation: "El módulo 'Inventory' en Odoo está dedicado a la gestión del inventario y la logística, incluyendo el seguimiento del stock, la planificación de pedidos y la gestión de almacenes."
        },
        {
            question: "20. ¿Cómo se gestiona la seguridad en Odoo?",
            a: "A través de configuraciones de servidor",
            b: "Mediante el módulo de seguridad",
            c: "Utilizando grupos y roles de usuarios",
            d: "Con políticas de contraseña",
            correct: "c",
            explanation: "La seguridad en Odoo se gestiona a través de grupos y roles de usuarios, los cuales definen los niveles de acceso y permisos dentro del sistema."
        },
        {
            question: "21. ¿Qué herramienta utiliza Odoo para la creación de informes?",
            a: "QWeb",
            b: "XML",
            c: "Python",
            d: "JSON",
            correct: "a",
            explanation: "Odoo utiliza QWeb para la creación de informes. QWeb es un motor de plantillas basado en XML que facilita la personalización y generación de informes detallados."
        },
        {
            question: "22. ¿Qué ofrece el módulo 'Accounting' en Odoo?",
            a: "Gestión de clientes",
            b: "Planificación de recursos",
            c: "Gestión de contabilidad y finanzas",
            d: "Gestión de inventarios",
            correct: "c",
            explanation: "El módulo 'Accounting' en Odoo está diseñado para la gestión de contabilidad y finanzas, ofreciendo funcionalidades para llevar a cabo tareas financieras y contables de manera eficiente."
        },
        {
            question: "23. ¿Qué tipo de interfaz ofrece Odoo para la interacción con el usuario?",
            a: "Línea de comandos",
            b: "Interfaz gráfica de usuario",
            c: "Interfaz basada en texto",
            d: "Interfaz de programación de aplicaciones",
            correct: "b",
            explanation: "Odoo ofrece una Interfaz Gráfica de Usuario (GUI) para la interacción con el usuario, lo que facilita la navegación y el uso del sistema."
        },
        {
            question: "24. ¿Cómo se maneja la personalización en Odoo?",
            a: "Mediante la programación en Python",
            b: "A través del módulo 'Studio'",
            c: "Utilizando hojas de estilo CSS",
            d: "Modificando directamente el código fuente",
            correct: "b",
            explanation: "La personalización en Odoo se maneja principalmente a través del módulo 'Studio', que permite a los usuarios personalizar vistas, informes y flujos de trabajo sin necesidad de programación avanzada."
        },
        {
            question: "25. ¿Qué ofrece el módulo 'Manufacturing' en Odoo?",
            a: "Gestión de procesos de fabricación",
            b: "Control de calidad",
            c: "Gestión de inventario",
            d: "Planificación de recursos empresariales",
            correct: "a",
            explanation: "El módulo 'Manufacturing' en Odoo ofrece funcionalidades para la gestión de procesos de fabricación, incluyendo la planificación, seguimiento y optimización de la producción."
        },
        {
            question: "26. ¿Cómo se implementan los flujos de trabajo en Odoo?",
            a: "Mediante la programación en Java",
            b: "A través de la configuración de módulos",
            c: "Utilizando scripts de Python",
            d: "Mediante flujos de trabajo predefinidos",
            correct: "b",
            explanation: "Los flujos de trabajo en Odoo se implementan a través de la configuración de módulos, lo que permite a los usuarios definir y personalizar los procesos empresariales según sus necesidades."
        },
        {
            question: "27. ¿Qué facilita el módulo 'eCommerce' en Odoo?",
            a: "Gestión de compras",
            b: "Creación y gestión de tiendas en línea",
            c: "Planificación de recursos",
            d: "Gestión de relaciones con clientes",
            correct: "b",
            explanation: "El módulo 'eCommerce' en Odoo facilita la creación y gestión de tiendas en línea, proporcionando herramientas para el comercio electrónico integradas con otras funciones empresariales."
        },
        {
            question: "28. ¿Qué función cumple el módulo 'Point of Sale' en Odoo?",
            a: "Gestión de ventas al por menor",
            b: "Control de inventario",
            c: "Contabilidad y finanzas",
            d: "Gestión de clientes",
            correct: "a",
            explanation: "El módulo 'Point of Sale' (POS) en Odoo se utiliza para la gestión de ventas al por menor, ofreciendo una solución integrada para puntos de venta físicos y en línea."
        },
        {
            question: "29. ¿Qué tipo de base de datos utiliza Odoo para el almacenamiento de datos?",
            a: "MySQL",
            b: "Oracle",
            c: "PostgreSQL",
            d: "MongoDB",
            correct: "c",
            explanation: "Odoo utiliza PostgreSQL como su sistema de base de datos para el almacenamiento de datos, aprovechando sus capacidades robustas y confiables para la gestión de datos empresariales."
        },
        {
            question: "30. ¿Qué característica ofrece el módulo 'Discuss' en Odoo?",
            a: "Herramientas de comunicación interna",
            b: "Gestión de proyectos",
            c: "Análisis de datos",
            d: "Creación de informes",
            correct: "a",
            explanation: "El módulo 'Discuss' en Odoo ofrece herramientas de comunicación interna, como chat y correo electrónico, facilitando la colaboración y comunicación dentro de la empresa."
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
            resultsHTML += `<p><b>Pregunta ${index + 1}: Correcta.</b> ${quizData[index].explanation}</p>`;
        } else {
            resultsHTML += `<p><b>Pregunta ${index + 1}: Incorrecta.</b> La respuesta correcta era '${quizData[index].correct}'. ${quizData[index].explanation}</p>`;
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