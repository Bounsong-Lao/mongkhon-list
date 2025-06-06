document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Quiz Logic
    const questions = [
        {
            question: "ມຸງຄຸນໃນພຣະພຸດທະສາສະໜາມີຈັກປະການ?",
            options: [
                "18 ປະການ",
                "28 ປະການ",
                "38 ປະການ",
                "48 ປະການ"
            ],
            answer: "38 ປະການ",
            explanation: "ມຸງຄຸນທີ່ໄດ້ກ່າວໄວ້ໃນມຸງຄຸນສູດມີທັງໝົດ 38 ປະການ."
        },
        {
            question: "ມຸງຄຸນທຳອິດແມ່ນຫຍັງ?",
            options: [
                "ການບູຊາຄົນທີ່ຄວນບູຊາ",
                "ການຄົບຄົນດີ",
                "ການບໍ່ຄົບຄົນພານ",
                "ການຢູ່ໃນປະເທດທີ່ເໝາະສົມ"
            ],
            answer: "ການບໍ່ຄົບຄົນພານ",
            explanation: "ມຸງຄຸນປະການທຳອິດຄື 'ບໍ່ຄົບຄົນພານ'."
        },
        {
            question: "ການບຳລຸງບິດາມານດາ ເປັນມຸງຄຸນປະການທີເທົ່າໃດ?",
            options: [
                "ປະການທີ 9",
                "ປະການທີ 10",
                "ປະການທີ 11",
                "ປະການທີ 12"
            ],
            answer: "ປະການທີ 11",
            explanation: "ການບຳລຸງບິດາມານດາ ເປັນມຸງຄຸນປະການທີ 11."
        },
        {
            question: "ການລະເວັ້ນຈາກບາບ ເປັນມຸງຄຸນທີ່ກ່ຽວຂ້ອງກັບເລື່ອງໃດ?",
            options: [
                "ການຄົບຄົນ",
                "ການປະພຶດຕົນ",
                "ການໃຫ້ທານ",
                "ການມີປັນຍາ"
            ],
            answer: "ການປະພຶດຕົນ",
            explanation: "ການລະເວັ້ນຈາກບາບ ເປັນມຸງຄຸນທີ່ກ່ຽວຂ້ອງກັບການປະພຶດຕົນໃນທາງທີ່ຖືກຕ້ອງ."
        },
        {
            question: "ມຸງຄຸນກ່ຽວກັບການມີຄວາມອົດທົນແມ່ນຫຍັງ?",
            options: [
                "ຂັນຕີ",
                "ໂສຣັຈຈະ",
                "ວິຣິຍະ",
                "ສັດຈະ"
            ],
            answer: "ຂັນຕີ",
            explanation: "ຂັນຕີ (ຄວາມອົດທົນ) ເປັນໜຶ່ງໃນມຸງຄຸນ 38 ປະການ."
        },
        {
            question: "ມຸງຄຸນສຸດທ້າຍ (ປະການທີ 38) ແມ່ນຫຍັງ?",
            options: [
                "ມີຈິດໃຈເມດຕາ",
                "ມີປັນຍາເຫັນແຈ້ງ",
                "ມີຈິດບໍ່ຫວັ່ນໄຫວໃນໂລກກະທຳ",
                "ເຮັດໃຫ້ແຈ້ງເຊິ່ງນິພພານ"
            ],
            answer: "ມີຈິດເກษມສານ",
            explanation: "ມຸງຄຸນປະການທີ 38 ຄື 'ມີຈິດເກษມສານ' (ຈິດທີ່ປາສະຈາກຄວາມໂສກເສົ້າ)."
        },
        {
            question: "ການຕັ້ງຕົນໄວ້ຊອບ ເປັນມຸງຄຸນທີ່ເນັ້ນໜັກເຖິງເລື່ອງໃດ?",
            options: [
                "ການມີຖານະດີ",
                "ການມີຄຸນນະທຳ",
                "ການມີສຸຂະພາບດີ",
                "ການມີໝູ່ເພື່ອນຫຼາຍ"
            ],
            answer: "ການມີຄຸນນະທຳ",
            explanation: "ການຕັ້ງຕົນໄວ້ຊອບ ເປັນມຸງຄຸນທີ່ເນັ້ນໜັກເຖິງການປະພຶດຕົນໃນສິນໃນທຳ."
        },
        {
            question: "ມຸງຄຸນໃດທີ່ກ່າວເຖິງຄວາມສຳຄັນຂອງການຟັງທຳ?",
            options: [
                "ເຄົາລົບ",
                "ຖ່ອມຕົນ",
                "ຟັງທຳຕາມກາລະ",
                "ສົນທະນາທຳຕາມກາລະ"
            ],
            answer: "ຟັງທຳຕາມກາລະ",
            explanation: "ການຟັງທຳຕາມກາລະ ເປັນມຸງຄຸນທີ່ຊີ້ໃຫ້ເຫັນເຖິງຄວາມສຳຄັນຂອງການສຶກສາທຳມະ."
        },
        {
            question: "ມຸງຄຸນກ່ຽວກັບການໃຫ້ຄວາມຊ່ວຍເຫຼືອແກ່ຍາດພີ່ນ້ອງແມ່ນຫຍັງ?",
            options: [
                "ບຳລຸງບິດາມານດາ",
                "ບຳລຸງບຸດທິດາ",
                "ສົງເຄາະຍາດ",
                "ໃຫ້ທານ"
            ],
            answer: "ສົງເຄາະຍາດ",
            explanation: "ການສົງເຄາະຍາດ (ການຊ່ວຍເຫຼືອຍາດພີ່ນ້ອງ) ເປັນໜຶ່ງໃນມຸງຄຸນ."
        },
        {
            question: "ມຸງຄຸນເຫຼົ່ານີ້ມີຈຸດປະສົງຕົ້ນຕໍເພື່ອຫຍັງ?",
            options: [
                "ເພື່ອໃຫ້ມີອຳນາດ",
                "ເພື່ອໃຫ້ມີຄວາມຮັ່ງມີ",
                "ເພື່ອຄວາມສຸກ ແລະ ຄວາມຈະເລີນໃນຊີວິດ",
                "ເພື່ອໃຫ້ຄົນອື່ນຍ້ອງຍໍ"
            ],
            answer: "ເພື່ອຄວາມສຸກ ແລະ ຄວາມຈະເລີນໃນຊີວິດ",
            explanation: "ມຸງຄຸນ 38 ປະການ ເປັນຫລັກທຳທີ່ນຳໄປສູ່ຄວາມສຸກ ແລະ ຄວາມຈະເລີນໃນຊີວິດ."
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const quizContainer = document.getElementById('quiz-container');
    const quizResults = document.getElementById('quiz-results');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');
    const scoreSpan = document.getElementById('score');
    const totalQuestionsSpan = document.getElementById('total-questions');

    startQuizBtn.addEventListener('click', startQuiz);
    restartQuizBtn.addEventListener('click', startQuiz);

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        quizResults.style.display = 'none';
        quizContainer.style.display = 'block';
        totalQuestionsSpan.textContent = questions.length;
        displayQuestion();
    }

    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            const q = questions
            quizContainer.innerHTML = `
                <div class="quiz-question">
                    <h3>${q.question}</h3>
                    <ul class="quiz-options">
                        ${q.options.map(option => `<button>${option}</button>`).join('')}
                    </ul>
                    <div class="feedback"></div>
                    <button id="next-question-btn" style="display:none;">ຄຳຖາມຕໍ່ໄປ</button>
                </div>
            `;
            const optionButtons = quizContainer.querySelectorAll('.quiz-options button');
            optionButtons.forEach(button => {
                button.addEventListener('click', selectAnswer);
            });
        } else {
            showResults();
        }
    }

    function selectAnswer(event) {
        const selectedButton = event.target;
        const userAnswer = selectedButton.textContent;
        const currentQuestion = questions
        const feedbackDiv = quizContainer.querySelector('.feedback');
        const nextBtn = document.getElementById('next-question-btn');
        const optionButtons = quizContainer.querySelectorAll('.quiz-options button');

        optionButtons.forEach(button => {
            button.disabled = true;
            if (button.textContent === currentQuestion.answer) {
                button.classList.add('correct');
            } else {
                button.classList.add('wrong');
            }
        });

        if (userAnswer === currentQuestion.answer) {
            score++;
            feedbackDiv.textContent = "ຖືກຕ້ອງ! 👍";
            feedbackDiv.classList.remove('wrong');
            feedbackDiv.classList.add('correct');
        } else {
            feedbackDiv.textContent = `ຜິດ! ຄຳຕອບທີ່ຖືກຕ້ອງແມ່ນ: "${currentQuestion.answer}". ${currentQuestion.explanation}`;
            feedbackDiv.classList.remove('correct');
            feedbackDiv.classList.add('wrong');
        }
        nextBtn.style.display = 'block';
        nextBtn.addEventListener('click', nextQuestion);
    }

    function nextQuestion() {
        currentQuestionIndex++;
        displayQuestion();
    }

    function showResults() {
        quizContainer.style.display = 'none';
        quizResults.style.display = 'block';
        scoreSpan.textContent = score;
    }

    // Initial load: show start button
    quizContainer.innerHTML = `
        <p>ກົດປຸ່ມ "ເລີ່ມທົດສອບ" ເພື່ອເລີ່ມຕົ້ນ!</p>
        <button id="start-quiz-btn">ເລີ່ມທົດສອບ</button>
    `;
    document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
});
