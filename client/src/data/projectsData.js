// src/data/projectsData.js
import projectOneImage1 from '../assets/project-images/project-one-image1.png'; // First image for Project One
import projectOneImage2 from '../assets/project-images/project-one-image2.png'; // Second image for Project One
import projectTwoImage from '../assets/project-images/project-two.png'; // Image for Project Two
import projectThreeImage from '../assets/project-images/project-three.png'; // Image for Project Three
import projectFourImage from '../assets/project-images/project-four.png'; // Image for Project Four

const projectsData = [
    {
        id: 1,
        title: "Project One",
        description: "E-Commerce Product Page - This project simulates a dynamic e-commerce product page using HTML and CSS, showcasing a responsive layout inspired by popular online shopping websites. It features product images, descriptions, and Font Awesome icons for a user-friendly interface. Utilizing Flexbox for layout and customization options, the design adapts seamlessly to various screen sizes, enhancing the overall shopping experience.",
        images: [projectOneImage1, projectOneImage2], // Array of images for Project One
        
        github: "https://github.com/RiddhikaBansal/Amazon_frontend"
    },
    {
        id: 2,
        title: "Project Two",
        description: "Tic-Tac-Toe Game - This project showcases a two-player Tic-Tac-Toe game developed using HTML, CSS, and JavaScript. Players take turns placing their marks on a grid, with the option to reset the game at any time. The score is tracked throughout gameplay, ensuring a fun and competitive experience for both players.",
        image: projectTwoImage,
        
        github: "https://github.com/RiddhikaBansal/Tic_Tac_Toe_Game"
    },
    {
        id: 3,
        title: "Project Three",
        description: "Rock-Paper-Scissors Game - This project implements the classic Rock-Paper-Scissors game using HTML, CSS, and JavaScript. The game features a random computer choice, allowing users to compete against the computer. Players can reset the game and view their score, providing an engaging and interactive experience.",
        image: projectThreeImage,
        
        github: "https://github.com/RiddhikaBansal/Rock_Paper_Scissors_Game"
    },
    {
        id: 4,
        title: "Project Four",
        description: "Snake Game with AI Agent - This project features a classic Snake game developed in Python, enhanced with an AI agent that serves as a game helper. The AI model intelligently navigates the game environment to control the snake, optimizing its movements to collect food and avoid obstacles. The project demonstrates the integration of artificial intelligence in gaming, showcasing how AI can enhance gameplay and provide a challenging experience for users.",
        image: projectFourImage,
        
        github: "https://github.com/RiddhikaBansal/snake-game-ai"
    },

    {
        id: 5,
        title: "Project Five",
        description: "This classic Snake Game, developed in C++ - allows players to navigate a growing snake around the screen, collecting food while avoiding collisions with walls and itself. The game features smooth graphics, responsive controls, and a score tracker to enhance the gameplay experience.",
        
        
        github: "https://github.com/RiddhikaBansal/Snake_game"
    },
    {
        id: 6,
        title: "Project Six",
        description: "The project predicts product reviews' sentiments using Multinomial Naive Bayes (MNB), starting with data preprocessing and feature extraction. Initially, the model predicts detailed ratings (1 to 5), but due to low accuracy, the task is simplified by categorizing ratings into binary classes: poor (0) and good (1). This retraining focuses on distinguishing between positive and negative reviews, significantly improving the model's performance. The final model achieves around 70% accuracy, effectively classifying reviews as positive or negative. The binary classification task reduces complexity, leading to better performance metrics. Retraining with this simplified target improves accuracy and provides more reliable predictions for review sentiment.",
        
        
        github: "https://github.com/RiddhikaBansal/Women-Cloth-Reviews-Prediction-with-Multi-Nomial-Na-ve-Bayes/blob/main/project-ML.pdf"
    },
];

export default projectsData;
