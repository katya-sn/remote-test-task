- [DEMO LINK](https://katya-sn.github.io/remote-test-task/)

## Реалізація тестового завдання 
Саме завдання : https://docs.google.com/document/d/1v5gAhYiJQ7YCQ3zFNMbRPUJB9N7DviPfBvwnF5boWNw/edit

Визначену частину сайту побудовано на React, MUI library зі стилізаціє CSS in JS.
Код розбито на **компоненти**, всі дані беруться з локального json-файла.
**Основна сітка** на десктопі побудовано за допомогою Grid, додавши gridColumns до компонентів. 
**Aside** меню складається з двох клікабельних акордеонів.
**Invoices** додані посилання example до pdf.
**Billing information** картки містять кнопки delete та edit, однак наскільки я зрозуміла - це має вести вже на окрему стерінку редагування, тому вони тут без обробників подій
**TransictionsЖ:** реалізована можливість обирати стартову та кінцеві дати, на основі цього працює функція-фільтрація, яка і розділяє контент на групи, визначені у макеті. 
**Header && Footer** містять навігаційні айтеми, які роутером будуть опрацьовані як * - тобто покажуть 404 заголовок.

Якщо якісь елементи таки вимагають обробників/реалізацій на вибір - прошу повідомити мені, я з радістю це зроблю :)
Робила завдання, спираючись на файл.

## Як запустити локально
1. Clone the repository to your local machine using the command **`git clone https://github.com/katya-sn/remote-test-task.git`**.
2. Then, navigate to the project directory using **cd remote-test-task**.
3. Make sure you have Node.js and npm installed, and install the project dependencies by running **`npm install`**.
4. After the dependencies are installed, start the development server with **`npm start`**.
5. Finally, open your browser and go to **http://localhost:3000** to see the Landing running locally.

