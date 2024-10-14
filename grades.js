// البيانات مباشرة في ملف الـ JS
const students = [
  { id: 1, name: "أحمد علي", class: "الصف الأول", arabic: 85, english: 78, math: 92, physics: 88, chemistry: 91, generalScience: 83 },
  { id: 2, name: "سارة محمد", class: "الصف الثاني", arabic: 91, english: 85, math: 88, physics: 80, chemistry: 90, generalScience: 89 },
  { id: 3, name: "خالد أحمد", class: "الصف الأول", arabic: 82, english: 88, math: 85, physics: 84, chemistry: 88, generalScience: 79 },
  { id: 4, name: "ليلى محمود", class: "الصف الثالث", arabic: 88, english: 82, math: 86, physics: 91, chemistry: 89, generalScience: 87 },
  { id: 5, name: "يوسف حسن", class: "الصف الثاني", arabic: 93, english: 84, math: 90, physics: 85, chemistry: 88, generalScience: 90 },
];

// دالة لإضافة البيانات إلى الجدول
function populateGrades(studentData) {
  const gradesBody = document.getElementById('grades-body');
  gradesBody.innerHTML = ''; // مسح محتوى الجدول الحالي

  const row = document.createElement('tr');
  row.innerHTML = `
      <td>${studentData.id}</td>
      <td>${studentData.name}</td>
      <td>${studentData.class}</td>
      <td>${studentData.arabic}</td>
      <td>${studentData.english}</td>
      <td>${studentData.math}</td>
      <td>${studentData.physics}</td>
      <td>${studentData.chemistry}</td>
      <td>${studentData.generalScience}</td>
  `;
  gradesBody.appendChild(row);
}

// دالة لتصفية العلامات بناءً على الـ id المدخل من المستخدم
function fetchGrades() {
  const studentId = document.getElementById('student-id').value;
  const student = students.find(s => s.id === parseInt(studentId));

  if (student) {
      populateGrades(student); // عرض معلومات الطالب
  } else {
      alert('لم يتم العثور على الطالب.');
  }
}

// إضافة حدث عند الضغط على زر "عرض العلامات"
document.getElementById('show-grades').addEventListener('click', fetchGrades);
