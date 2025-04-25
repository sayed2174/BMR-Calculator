# 🧮 BMR & Protein Intake Calculator (HTML | CSS | JavaScript)

This project is a **responsive web-based calculator** that allows users to compute their **Basal Metabolic Rate (BMR)** and **daily protein intake** based on personal data and fitness goals. It's a simple and interactive tool built using only HTML, CSS, and JavaScript – no frameworks or libraries required!

---

## 📘 What is BMR?

**Basal Metabolic Rate (BMR)** is the number of calories your body burns at rest to maintain essential bodily functions like breathing and digestion.

### 📐 Mifflin-St Jeor Formula:

```
For men:    BMR = 10 × weight(kg) + 6.25 × height(cm) − 5 × age + 5  
For women:  BMR = 10 × weight(kg) + 6.25 × height(cm) − 5 × age − 161
```

---

## 🍗 Protein Intake Guide

Protein requirements vary based on activity level and fitness goals:

| Goal               | Recommended Intake (grams per kg) |
|--------------------|-----------------------------------|
| Sedentary          | 0.8 g/kg                          |
| Active Lifestyle   | 1.2 – 1.6 g/kg                    |
| Muscle Building    | 1.6 – 2.2 g/kg                    |
| Fat Loss           | 1.6 – 2.4 g/kg                    |

The app multiplies your weight (in kg) with your selected goal multiplier to give the daily protein intake recommendation.

---

## 🖼️ Preview

![bmr](https://github.com/user-attachments/assets/06498bd1-1bde-4003-b8ed-013641683dce)


---

## 🚀 Features

- 🔢 BMR calculation based on gender, age, weight, and height
- 🎯 Protein intake calculation based on fitness goal
- 💡 Clean, responsive UI with basic form validation
- ⚙️ Lightweight – no external libraries or dependencies

---

## 🛠️ Tech Stack

- HTML5
- CSS3 (Flexbox/Grid for layout)
- Vanilla JavaScript (ES6)

---

## 📂 Project Structure

```
bmr-protein-calculator/
│
├── index.html         # Main HTML structure
├── style.css          # Custom styles
├── script.js          # JavaScript logic
└── README.md          # Project documentation
```

---

## 💻 How to Use

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/bmr-protein-calculator.git
   cd bmr-protein-calculator
   ```

2. **Open `index.html`** in your preferred browser:
   ```bash
   open index.html
   ```

3. **Fill in your details** and select your goal to see results instantly!

---

## 📈 Example Output

```
Your BMR: 1585.25 kcal/day
Recommended Protein Intake: 110g – 145g/day (based on selected goal)
```

---

## 📌 To Do / Future Improvements

- Add input units toggle (kg/lbs, cm/inches)
- Add theme toggle (dark/light)
- Add activity level multipliers for TDEE (Total Daily Energy Expenditure)
- Save user data using localStorage

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Contribute

Feel free to fork this repo, improve the design, optimize the code, or add features. Pull requests are always welcome!

---

Thanks for checking out this project! 🧠💪
