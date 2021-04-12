import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import index from '../index.css'



function Main(props) {
	const questions = [
		{
			questionText: 'There are stars and zigzags on the flag of America',
			answerOptions: [

				{ answerText: 'True', isCorrect: false },
				{ answerText: 'False', isCorrect: true },

			],
		},
		{
			questionText: 'The letter H is between letters G and J on a keyboard',
			answerOptions: [

				{ answerText: 'True', isCorrect: true },
				{ answerText: 'False', isCorrect: false },

			],
		},
		{
			questionText: 'Bananas grow upside down',
			answerOptions: [
				{ answerText: 'True', isCorrect: true },
				{ answerText: 'False', isCorrect: false },

			],
		},
		{
			questionText: 'Broome could make Harry Potter invisible for a day',
			answerOptions: [
				{ answerText: 'True', isCorrect: false },
				{ answerText: 'False', isCorrect: true },
			],
		},
		{
			questionText: 'A rhinoceros horn is made of hair.',
			answerOptions: [
				{ answerText: 'False', isCorrect: false },
				{ answerText: 'True', isCorrect: true },
			],
		},
		{
			questionText: 'You get a new top layer of skin (epidermis) every 7 days.',
			answerOptions: [
				{ answerText: 'True', isCorrect: false },
				{ answerText: 'False', isCorrect: true },
			],
		},
		{
			questionText: 'Bats always turn right when leaving a cave.',
			answerOptions: [
				{ answerText: 'True', isCorrect: false },
				{ answerText: 'False', isCorrect: true },
			],
		},
		{
			questionText: 'A double rainbow is a mirror image of the first rainbow.',
			answerOptions: [
				{ answerText: 'False', isCorrect: false },
				{ answerText: 'True', isCorrect: true },
			],
		},
		{
			questionText: 'Watching horror movies has no reaction to body',
			answerOptions: [
				{ answerText: 'True', isCorrect: false },
				{ answerText: 'False', isCorrect: true },
			],
		},

		{
			questionText: 'You can sneeze during sleep',
			answerOptions: [
				{ answerText: 'True', isCorrect: false },
				{ answerText: 'False', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [answers, setAnswers] = useState([])

	const handleAnswerOptionClick = (isCorrect) => {

		const temp = answers;
		temp.push(isCorrect);
		setAnswers(temp);

		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {

			console.log(answers);
			const currentUser = localStorage.getItem('currentUser');
			const users = JSON.parse(localStorage.getItem('users')) == null ? [] : JSON.parse(localStorage.getItem('users'));

			for (let i = 0; i < users.length; i++) {
				if (users[i].email === currentUser) {
					users[i].answers = answers;
				}
			}

			localStorage.removeItem('users');
			localStorage.setItem('users', JSON.stringify(users));
			setShowScore(true);
		}
	};
	const handleClick = () => {
		props.history.push('/check')
	}
	return (
		<div className='min-h-screen bg-grey-100 text-gray-900 flex justify-center '>

			<ToastContainer />
			<div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
				<div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
					<div className='app'>
						{showScore ? (
							<>
								<div className='score-section'>
									You scored {score} out of {questions.length}
								</div>
								<div class='check-similarity'>
									<button type="button" class="check-button" onClick={handleClick}>Check Similarity</button>


								</div>
							</>

						) : (
								<>
									<div className='question-section'>
										<div className='question-count'>
											<span>Question {currentQuestion + 1}</span>/{questions.length}
										</div>
										<div className='question-text'>{questions[currentQuestion].questionText}</div>
									</div>
									<div className='answer-section'>
										{questions[currentQuestion].answerOptions.map((answerOption) => (
											<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
										))}
									</div>
								</>
							)}
					</div>

				</div>

			</div>

		</div>
	)

}

export default Main
