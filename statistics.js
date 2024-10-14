// الحصول على العنصر الذي يحتوي على مخطط نسبة النجاح وتحضير سياق الرسم
const successRateCtx = document.getElementById('successRateChart').getContext('2d');
// الحصول على العنصر الذي يحتوي على مخطط توزيع الجنسين وتحضير سياق الرسم
const genderDistributionCtx = document.getElementById('genderDistributionChart').getContext('2d');

// إنشاء مخطط نسبة النجاح باستخدام مكتبة Chart.js
const successRateChart = new Chart(successRateCtx, {
  // نوع المخطط هو "bar" (مخطط عمودي)
  type: 'bar',
  data: {
    // السنوات التي سيتم تمثيل البيانات بها على المحور X
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [{
      // تسمية البيانات "نسبة النجاح"
      label: 'نسبة النجاح',
      // القيم التي سيتم تمثيلها على المحور Y
      data: [85, 88, 90, 92, 94],
      // لون الأعمدة في المخطط
      backgroundColor: 'rgb(82, 33, 96)',
    }]
  },
  options: {
    // خاصية تجعل المخطط يستجيب لحجم الشاشة
    responsive: true,
    scales: {
      // إعدادات المحور Y
      y: {
        // يبدأ المحور Y من الصفر
        beginAtZero: true
      }
    }
  }
});

// إنشاء مخطط توزيع الجنسين باستخدام مكتبة Chart.js
const genderDistributionChart = new Chart(genderDistributionCtx, {
  // نوع المخطط هو "pie" (مخطط دائري)
  type: 'pie',
  data: {
    // التسميات التي سيتم عرضها في المخطط الدائري (ذكور وإناث)
    labels: ['ذكور', 'إناث'],
    datasets: [{
      // تسمية البيانات "نسبة الذكور والإناث"
      label: 'نسبة الذكور والإناث',
      // القيم التي تمثل النسبة المئوية لكل فئة
      data: [65, 35],
      // ألوان القطاعات في المخطط الدائري
      backgroundColor: ['#f2e000', 'rgb(82, 33, 96)'],
    }]
  },
  options: {
    // خاصية تجعل المخطط يستجيب لحجم الشاشة
    responsive: true,
  }
});
