const alertsContent=document.querySelector('.alerts-content');
const alerts=document.querySelector('.alerts');
const alertsContentWrapper=document.querySelector('.alerts-content-wrapper');
const alertsJSON = [
    {
        "content":"License for Introduction to Algebra has been assigned to your school",
        "unread":true,
        "time":"15-Sep-2018 at 07:21 pm"
    },
    {
        "content":"Lesson 3 Practice Worksheet overdue for Amy Santiago",
        "unread":false,
        "course":"Advanced Mathematics",
        "time":"15-Sep-2018 at 05:21 pm"
    },
    {
        "content":"23 new students created",
        "unread":true,
        "time":"14-Sep-2018 at 01:21 pm"
    },
    {
        "content":"15 submissions ready for evaluation",
        "unread":true,
        "className":"Basics of Algebra",
        "time":"13-Sep-2018 at 01:15 pm"
    },
    {
        "content":"License for Basic Concepts in Geometry has been assigned to your...",
        "unread":true,
        "time":"15-Sep-2018 at 07:21 pm"
    },
    {
        "content":"Lesson 3 Practice Worksheet overdue for Sam Diego",
        "unread":false,
        "course":"Advanced Mathematics",
        "time":"15-Sep-2018 at 06:21 pm"
    }
];
function alertComponent({
content,
unread,
course,
className,
time,
}){

    return `
    <div class="alert-component ${unread?"unread":"read"}">
        <img class= "read-logo" src="${unread?"icons/dnd.svg":"icons/tick.png"}" alt="">
        <p class="content">${content}</p>
        ${
            course?
            `
            <div class="sub-content"><span>Course: </span>${course}</div>`:""
        }

        ${
            className?
            `
            <div class="sub-content"><span>Class: </span>${className}</div>`:""
        }

        <p class="time"> ${time}</p>
    </div>
    `;
}
const alertsContentHTML= alertsJSON.map(alertComponent).join(' ');

alertsContent.insertAdjacentHTML('afterbegin',alertsContentHTML);

alerts.addEventListener('mouseover',(event)=>{
    alertsContentWrapper.classList.add('show');
});

alerts.addEventListener('mouseleave',(event)=>{
    alertsContentWrapper.classList.remove('show');
});