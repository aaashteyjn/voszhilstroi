/* =========================================
   PROCESS STEPS
========================================= */

const processSteps = [

    {
        number: "01",
        label: "Первый этап",
        title: "Знакомство и проект",

        description:
            "Обсуждаем будущий дом, участок, ваши пожелания и бюджет. Подбираем подходящий проект или адаптируем решение под вашу семью.",

        feature:
            "До начала строительства вы понимаете, каким будет будущий дом.",

        image: "images/process/process-1.jpg"
    },


    {
        number: "02",
        label: "Второй этап",
        title: "Смета и договор",

        description:
            "Формируем понятную смету, согласовываем комплектацию дома, сроки и этапы работ. Все ключевые условия фиксируются до начала строительства.",

        feature:
            "Стоимость и объём работ заранее закреплены в договоре.",

        image: "images/process/process-2.jpg"
    },


    {
        number: "03",
        label: "Третий этап",
        title: "Начинаем строительство",

        description:
            "Бригада выходит на объект и последовательно выполняет строительные работы — от основания и каркаса до кровли и закрытия контура.",

        feature:
            "Работы идут по согласованному проекту и последовательности этапов.",

        image: "images/process/process-3.jpg"
    },


    {
        number: "04",
        label: "Четвёртый этап",
        title: "Контролируем каждый этап",

        description:
            "Вы можете следить за ходом строительства и видеть, как меняется объект. По ключевым этапам предоставляем фотографии с площадки.",

        feature:
            "Вы остаётесь в курсе происходящего, даже если не можете приехать на объект.",

        image: "images/process/process-4.jpg"
    },


    {
        number: "05",
        label: "Финальный этап",
        title: "Передаём готовый дом",

        description:
            "Завершаем работы, проверяем результат и передаём вам готовый дом — пространство, в котором уже можно начинать новую главу.",

        feature:
            "Финальный результат соответствует согласованному проекту и комплектации.",

        image: "images/process/process-5.jpg"
    }

];


/* =========================================
   ELEMENTS
========================================= */

const stepButtons =
    document.querySelectorAll(".process-step");

const processImage =
    document.getElementById("processImage");

const processCurrent =
    document.getElementById("processCurrent");

const processNumber =
    document.getElementById("processNumber");

const processLabel =
    document.getElementById("processLabel");

const processTitle =
    document.getElementById("processTitle");

const processDescription =
    document.getElementById("processDescription");

const processFeature =
    document.getElementById("processFeature");


/* =========================================
   CHANGE STEP
========================================= */

function changeProcessStep(index) {

    const step = processSteps[index];


    /* Сначала немного скрываем фото */

    processImage.style.opacity = "0";


    /*
       Ждём 180ms и только потом
       меняем изображение.

       Так смена выглядит мягче.
    */

    setTimeout(() => {

        processImage.src = step.image;

        processImage.alt = step.title;

        processImage.style.opacity = "1";

    }, 180);


    /* Меняем текст */

    processCurrent.textContent =
        step.number;

    processNumber.textContent =
        step.number;

    processLabel.textContent =
        step.label;

    processTitle.textContent =
        step.title;

    processDescription.textContent =
        step.description;

    processFeature.textContent =
        step.feature;


    /* Меняем активную кнопку */

    stepButtons.forEach(button => {

        button.classList.remove(
            "process-step--active"
        );

    });


    stepButtons[index].classList.add(
        "process-step--active"
    );

}


/* =========================================
   CLICK EVENTS
========================================= */

stepButtons.forEach(button => {

    button.addEventListener("click", () => {

        const index =
            Number(button.dataset.step);

        changeProcessStep(index);

    });

});