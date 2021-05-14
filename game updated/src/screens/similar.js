import React, { useEffect, useState } from 'react'


const questions = [
    {
        questionText: 'There are stars and zigzags on the flag of America',
    },
    {
        questionText: 'The letter H is between letters G and J on a keyboard',

    },
    {
        questionText: 'Bananas grow upside down',

    },
    {
        questionText: 'Broome could make Harry Potter invisible for a day',

    },
    {
        questionText: 'A rhinoceros horn is made of hair.',

    },
    {
        questionText: 'You get a new top layer of skin (epidermis) every 7 days.',

    },
    {
        questionText: 'Bats always turn right when leaving a cave.',

    },
    {
        questionText: 'A double rainbow is a mirror image of the first rainbow.',

    },
    {
        questionText: 'Watching horror movies has no reaction to body',

    },

    {
        questionText: 'You can sneeze during sleep',
    },
];

function Similarity() {



    const [q, setQ] = useState([])

    useEffect(() => {
        const Selectedusers = JSON.parse(localStorage.getItem('selectedUser')) == null ? [] : JSON.parse(localStorage.getItem('selectedUser'));
        const users = JSON.parse(localStorage.getItem('users')) == null ? [] : JSON.parse(localStorage.getItem('users'));
        console.log(users);

        console.log(questions);
        var person1 = [];
        var person2 = [];

        let j = 0;
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === Selectedusers[j]) {
                if (j == 0) {

                    person1 = users[i].answers
                    j++;
                } else {

                    person2 = users[i].answers;
                    console.log('persons', person1);
                    console.log('peosns', person2)

                    var finalArray = [];
                    for (let i = 0; i < questions.length; i++) {
                        if (person1[i] == person2[i]) {
                            finalArray.push(questions[i]);
                        }
                    }
                    console.log(finalArray)
                    setQ(finalArray)
                    return;
                }
            }
        }






    }, []);



    return (
        <div className='min-h-screen bg-grey-100 text-gray-900 flex justify-center '>
            <div className='max-w-kscreen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
                <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
                    {q.length === 0 ? <h3>Both doesn't have similarities</h3> :
                        <div>
                            <h3>Similarly Answered Questions</h3>
                            <div> {q.map((q, index) => <div key={index}>

                                <p style={{ padding: '10px' }} key={index}>{q.questionText}</p>

                            </div>
                            )}</div>
                        </div>}
                </div></div></div>

    )
}

export default Similarity
