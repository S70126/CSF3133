let answeredQuestions = 0;

function updateProgress() {
    // Count how many questions have been answered (i.e., have a value other than "")
    const totalQuestions = 3;
    answeredQuestions = 0;

    const answers = document.querySelectorAll('select');
    answers.forEach((answer) => {
        if (answer.value !== "") {
            answeredQuestions++;
        }
    });

    // Calculate progress
    const progress = (answeredQuestions / totalQuestions) * 100;

    // Update progress bar
    const progressBar = document.getElementById("progressBar");
    progressBar.style.width = `${progress}%`;
    progressBar.setAttribute("aria-valuenow", progress);
}

function submitQuiz(courseName) {
    const totalQuestions = 3;  // Adjust to match your quiz
    let correctAnswers = 0;

    // Check answers
    const answers = document.querySelectorAll('select');
    answers.forEach((answer) => {
        if (answer.value === "correct") {
            correctAnswers++;
        }
    });

    // Redirect to certification page with course name and score
    window.location.href = `certification.html?course=${encodeURIComponent(courseName)}&score=${correctAnswers}/${totalQuestions}`;
}

