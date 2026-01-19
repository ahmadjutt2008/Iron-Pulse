document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
            navbar.style.background = 'rgba(10, 10, 10, 1)';
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });

    // BMI Calculator
    const btnBMI = document.getElementById('calculate-bmi');
    if (btnBMI) {
        btnBMI.addEventListener('click', () => {
            const height = parseFloat(document.getElementById('height').value);
            const weight = parseFloat(document.getElementById('weight').value);
            const resultDiv = document.getElementById('bmi-result');

            if (height && weight) {
                let heightDisplay = height;
                let heightInMeters = height / 100;

                const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

                let category = '';
                let colorClass = '';

                if (bmi < 18.5) {
                    category = 'Low (Underweight)';
                    colorClass = 'text-warning';
                } else if (bmi >= 18.5 && bmi < 24.9) {
                    category = 'Normal';
                    colorClass = 'text-success';
                } else if (bmi >= 25 && bmi < 29.9) {
                    category = 'High (Overweight)';
                    colorClass = 'text-warning';
                } else {
                    category = 'High (Obese)';
                    colorClass = 'text-danger';
                }

                resultDiv.innerHTML = `Your BMI is <span class="fw-bold ${colorClass}">${bmi}</span> - <span class="${colorClass}">${category}</span>`;
            } else {
                resultDiv.innerHTML = '<span class="text-danger">Please enter valid height and weight.</span>';
            }
        });
    }
});
