const announcementContent = document.querySelector('.announcements-content');

const announcementContentJSON=[
    {
        "unread":false,
        "pa":"Wilson Kumar",
        "content":"No classes will be held on 21st Nov",
        "attached":2,
        "time":"15-Sep-2018 at 07:21 pm"

    },
    {
        "unread":true,
        "pa":"Samson White",
        "content":"Guest lecture on Geometry on 20th September",
        "attached":2,
        "time":"15-Sep-2018 at 07:21 pm"

    },
    {
        "unread":false,
        "pa":"Wilson Kumar",
        "content":"Additional course materials available on request",
        "course":"Mathematics 101",
        "attached":"",
        "time":"15-Sep-2018 at 07:21 pm"

    },
    {
        "unread":true,
        "pa":"Wilson Kumar",
        "content":"No classes will be held on 25th Dec",
        "attached":"",
        "time":"15-Sep-2018 at 07:21 pm"

    },
    {
        "unread":false,
        "pa":"Wilson Kumar",
        "content":"Additional course materials available on request",
        "course":"Mathematics 101",
        "attached":"",
        "time":"15-Sep-2018 at 05:30 pm"

    },
];
function announcementContentComponent({
    unread,
    pa,
    content,
    course,
    className,
    attached,
    time
}){

    return `
        <div class="announcement-component ${unread?"unread":"read"}">
            <img class="read-logo" src="${unread?"icons/dnd.svg":"icons/tick.png"}" alt="">

            <p class="pa"><span class="gray">PA: </span>${pa}</p>
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

            <div class="sub-content">

                ${attached?`<span class="attachment">${attached} files are attached</span>`:""}
                
                <span class="time">${time}</span>
            </div>
        </div>
    `;
}

announcementContent.innerHTML=announcementContentJSON.map(announcementContentComponent).join(' ');