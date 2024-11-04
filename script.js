let currentQuestion = 0; // 현재 문제 번호
const totalQuestions = 3; // 총 문제 수

// 문제 데이터: 각 문제의 그림자 이미지, 정답 이미지, 정답 인덱스, 정답 옵션, 힌트
const questions = [
    { 
        shadowImage: "shadow-image1.jpg", 
        answerImage: "answer-image1.jpg",
        correctAnswer: 0, 
        options: ["사과", "바나나", "포도"],
        hint: "이 과일은 빨간색이며 가을에 많이 수확됩니다." 
    },
    { 
        shadowImage: "shadow-image2.jpg", 
        answerImage: "answer-image2.jpg",
        correctAnswer: 1, 
        options: ["강아지", "고양이", "토끼"],
        hint: "이 동물은 야옹야옹 울며 독립적인 성격이 많습니다." 
    },
    { 
        shadowImage: "shadow-image3.jpg", 
        answerImage: "answer-image3.jpg",
        correctAnswer: 2, 
        options: ["자동차", "비행기", "기차"],
        hint: "이것은 궤도를 따라 이동하며 많은 사람들을 태울 수 있습니다." 
    },
];

// 게임 시작 함수
function startGame() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";
    currentQuestion = 0; // 첫 번째 문제부터 시작
    loadQuestion();
}

// 문제 로드 함수
function loadQuestion() {
    const question = questions[currentQuestion];
    
    // 그림자 이미지 설정
    document.getElementById("shadow-image").src = question.shadowImage;
    
    // 정답 옵션 버튼 텍스트 설정
    for (let i = 0; i < question.options.length; i++) {
        document.getElementById(`option-${i}`).textContent = question.options[i];
    }

    // 힌트 텍스트 설정
    document.getElementById("hint-text").textContent = question.hint;
}

// 정답 확인 함수
function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestion].correctAnswer) {
        // 정답일 때 정답 화면으로 전환하여 정답 이미지 표시
        showAnswerScreen();
    } else {
        // 오답일 때 처음 화면으로 돌아감
        alert("틀렸습니다! 처음부터 다시 시작합니다.");
        resetGame();
    }
}

// 정답 화면 표시 함수
function showAnswerScreen() {
    const question = questions[currentQuestion];
    
    document.getElementById("game-screen").style.display = "none";
    document.getElementById("answer-screen").style.display = "block";
    
    // 정답 이미지 설정
    document.getElementById("answer-image").src = question.answerImage;
}

// 다음 문제로 이동 함수
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < totalQuestions) {
        // 다음 문제 로드
        document.getElementById("answer-screen").style.display = "none";
        document.getElementById("game-screen").style.display = "block";
        loadQuestion();
    } else {
        // 모든 문제를 맞췄을 때 최종 화면 표시
        showEndScreen();
    }
}

// 게임 초기화 함수
function resetGame() {
    document.getElementById("answer-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "none";
    document.getElementById("start-screen").style.display = "block";
}

// 최종 화면 표시 함수
function showEndScreen() {
    document.getElementById("answer-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "none";
    document.getElementById("end-screen").style.display = "block";
}
