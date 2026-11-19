// ===== ฟังก์ชันคำนวณค่า BMI =====
function calculateBMI() {

  // 1) รับค่าจากช่องกรอก แล้วแปลงเป็นตัวเลข
  let weight = Number(document.getElementById("weight").value);
  let heightCm = Number(document.getElementById("height").value);

  // ดึงกล่องแสดงผลมาเก็บไว้ในตัวแปร
  let resultBox = document.getElementById("result");

  // 2) ตรวจสอบว่ากรอกข้อมูลครบและอยู่ในช่วงที่เป็นไปได้จริงของผู้ใหญ่
  //    (ปรับตัวเลขช่วงได้ที่ตัวแปร 4 ตัวนี้)
  let minWeight = 20;    // น้ำหนักต่ำสุด (กิโลกรัม)
  let maxWeight = 300;   // น้ำหนักสูงสุด (กิโลกรัม)
  let minHeight = 100;   // ส่วนสูงต่ำสุด (เซนติเมตร)
  let maxHeight = 250;   // ส่วนสูงสูงสุด (เซนติเมตร)

  if (weight < minWeight || weight > maxWeight) {
    alert("กรุณากรอกน้ำหนักระหว่าง " + minWeight + " - " + maxWeight + " กิโลกรัม");
    return;   // หยุดการทำงาน ไม่คำนวณต่อ
  }

  if (heightCm < minHeight || heightCm > maxHeight) {
    alert("กรุณากรอกส่วนสูงระหว่าง " + minHeight + " - " + maxHeight + " เซนติเมตร");
    return;
  }

  // 3) แปลงส่วนสูงจากเซนติเมตรเป็นเมตร
  let heightM = heightCm / 100;

  // 4) คำนวณ BMI = น้ำหนัก ÷ (ส่วนสูง × ส่วนสูง)
  let bmi = weight / (heightM * heightM);

  // ปัดทศนิยมให้เหลือ 1 ตำแหน่ง แล้วแปลงกลับเป็นตัวเลข
  // (ใช้ค่าที่ปัดแล้วไปแปลผล เพื่อให้ตัวเลขที่เห็นตรงกับระดับที่แสดง)
  bmi = Number(bmi.toFixed(1));

  // 5) แปลผลตามเกณฑ์มาตรฐานคนเอเชีย
  let message = "";
  let level = "";

  if (bmi < 18.5) {
    message = "น้ำหนักน้อย / ผอม";
    level = "level1";
  } else if (bmi < 23) {
    message = "ปกติ (สุขภาพดี)";
    level = "level2";
  } else if (bmi < 25) {
    message = "น้ำหนักเกิน / ท้วม";
    level = "level3";
  } else if (bmi < 30) {
    message = "อ้วนระดับ 1";
    level = "level4";
  } else {
    message = "อ้วนระดับ 2 (อันตราย)";
    level = "level5";
  }

  // 6) แสดงผลลัพธ์บนหน้าเว็บ
  resultBox.innerHTML =
    "<p class='bmi-number'>" + bmi + "</p>" +
    "<p class='bmi-text'>" + message + "</p>" +
    "<p class='bmi-warn'>* ผลนี้ใช้คัดกรองเบื้องต้นเท่านั้น ไม่ใช่การวินิจฉัยโรค</p>";

  resultBox.className = "result " + level;   // เปลี่ยนสีกล่องตามระดับ
  resultBox.style.display = "block";         // แสดงกล่องผลลัพธ์
}


// ===== ฟังก์ชันล้างค่า =====
function resetForm() {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("result").style.display = "none";
}
