const articles=document.querySelector('.articles') as HTMLElement;


interface subjectDetails{
    units?:number;
    lessons?:number;
    topics?:number;
}

interface studentduration{
    students:string;
    duration:string;
}

interface opacity40{
    views?:boolean;
    calendar?:boolean;
    grade?:boolean;
    reports?:boolean;
}

interface cardComponentInterface{
    expired?:boolean;
    imgSrc:string;
    imgAlt:string;
    title:string;
    subject:string;
    grade:string;
    gradeGreen:string;
    subjectDetails?:subjectDetails | null;
    classes: string[];
    studentduration?:studentduration | null;
    gray:boolean;
    opacity40:opacity40;

}




function cardComponent({
    expired,
    imgSrc,
    imgAlt,
    title,
    subject,
    grade,
    gradeGreen,
    subjectDetails,
    classes,
    studentduration,
    gray,
    opacity40


}:cardComponentInterface): string{
    return `
    <div class="card">
                <div class="star"><img ${gray?`class="gray-icon"`:""}src="icons/favourite.svg" alt="favicon"></div>
                ${expired?'<div class="expired">EXPIRED</div>':''}

                <div class="card-main">
                    <div class="card-img">
                        <img src="${imgSrc}" alt="${imgAlt}">
                    </div>
                    <div class="card-details">
                        <p class="card-title">${title}</p>
                        <div class="card-detail1 small-mid-font">
                            <div class="subject">${subject}</div> <div class="seperator"></div> <div class="grade">${grade}<span class="grade-green">${gradeGreen}</span></div> 
                        </div>
                        ${subjectDetails?`
                        <div class="card-detail2 small-mid-font">
                            ${subjectDetails.units?`<div class="units"><span>${subjectDetails.units}</span> Units </div>`:""}
                            ${subjectDetails.lessons?`<div class="lessons"> <span>${subjectDetails.lessons}</span> Lessons </div>`:""}
                            ${subjectDetails.topics?`<div class="topics"><span>${subjectDetails.topics}</span> Topics</div>`:""}
                        </div>
                            `:""}

                        <div class="select-class ${classes.length>0?"":"gray-font"}">
                            <select name="select-class" id="select-class">
                                ${classes.length>0?classes.map(cls=>`<option value="${cls}">${cls}</option>`).join(' '):`<option value="" disabled selected>No Classes</option>`}
                            </select>
                        </div>
                        ${studentduration?`<div class="card-detail1 small-mid-font">
                            <div>${studentduration.students}</div> ${(studentduration.students && studentduration.duration)?`<div class="seperator"></div>`:""} <div>${studentduration.duration}</div>
                        </div>`:""}
                    </div>
                </div>
                <div class="card-options">
                    <div class="views ${opacity40?.views?"opacity-40":""}"><img src="icons/preview.svg" alt="preview"></div>
                    <div class="calendar ${opacity40?.calendar?"opacity-40":""}"><img src="icons/manage course.svg" alt="calendar"></div>
                    <div class="grade-icon ${opacity40?.grade?"opacity-40":""}"><img src="icons/grade submissions.svg" alt="grade submissions"></div>
                    <div class="reports ${opacity40?.reports?"opacity-40":""}"><img src="icons/reports.svg" alt="reports"></div>
                </div>
            </div>
`
};

const cardData = [
  {
    expired: false,
    imgSrc: "images/imageMask-1.svg",
    imgAlt: "Acceleration Image",
    title: "Accelerations",
    subject: "Physics",
    grade: "Grade 7",
    gradeGreen: "+2",
    subjectDetails: {
      units: 4,
      lessons: 18,
      topics: 24
    },
    classes: ["Mr Frank's Class B"],
    studentduration: {
      students: "50 Students",
      duration: "21-Jan-2020 - 21-Aug-2020"
    },
    gray: false,
    opacity40: {}
  },
  {
    expired: false,
    imgSrc: "images/imageMask-2.svg",
    imgAlt: "Velocity Image",
    title: "Displacement, Velocity and Speed",
    subject: "Physics 2",
    grade: "Grade 6",
    gradeGreen: "+3",
    subjectDetails: {
      units: 2,
      lessons: 15,
      topics: 20
    },
    classes: [],
    studentduration: null,
    gray: false,
    opacity40: {
      calendar: true,
      grade: true
    }
  },
  {
    expired: false,
    imgSrc: "images/imageMask.svg",
    imgAlt: "Biology Image",
    title: "Introduction to Biology: Micro organisms and how they affec...",
    subject: "Biology",
    grade: "Grade 4",
    gradeGreen: "+1",
    subjectDetails: {
      units: 5,
      lessons: 16,
      topics: 22
    },
    classes: ["All Classes"],
    studentduration: {
      students: "300 Students",
      duration: ""
    },
    gray: false,
    opacity40: {
      calendar: true,
      grade: true
    }
  },
  {
    expired: true,
    imgSrc: "images/imageMask-3.svg",
    imgAlt: "Math Image",
    title: "Introduction to High School Mathematics",
    subject: "Mathematics",
    grade: "Grade 8",
    gradeGreen: "+3",
    subjectDetails: null,
    classes: ["Mr Frank's Class A"],
    studentduration: {
      students: "44 Students",
      duration: "14-Oct-2019 - 20-Oct-2020"
    },
    gray: true,
    opacity40: {}
  }
];



articles.innerHTML= cardData.map(cardComponent).join(' ');
