import React, {useState, useEffect} from 'react';
import NavPills from '@/components/NavPills/NavPills'
// import {getUserWords} from '@/utils/apiRequests/userWords'
import {getAggregatedWords} from '@/utils/apiRequests/aggregatedWords'

import AlignItemsList from '@/components/Vacabulary/WordItem'

function Vocabulary(props) {

  const [words, setWords] = useState([])
  useEffect(async () => {
    // const userWords = await getUserWords(props.userAuth.userId, props.userAuth.token)
    const userWords = await getAggregatedWords(
      props.userAuth.userId,
      props.userAuth.token,
      0,
      false,
      60,
      '{"userWord.difficulty":"easy"}'
    )
    console.log('userWords', userWords[0].paginatedResults)
    setWords(userWords[0].paginatedResults)
  }, [])

  // const wordItem = <AlignItemsList />

  return(
    <>
      <div className="vocabulary">
        <h3>Словарь</h3>
        <NavPills
          color="primary"
          tabs={[
            {
              tabButton: "Изучаемые слова",
              tabContent: (
                <span>
                  {/* {wordItem} */}
                  <AlignItemsList />
                  {words.map((word) => {
                    return (
                      
                      <p key={word._id}>
                        <img src={'https://rs-lang-app.herokuapp.com/' + word.image} alt={'english word' + word.word} width="50px"/>
                        <span>{word.word}</span>
                        <span>&nbsp;{word.transcription}</span>
                        <span>&nbsp;{word.wordTranslate}</span>
                        {/* иконкуа аудио - слово, предлдожение, предложения с примером его использования */}
                        {/* кнопки для "Сложные слова" и "Удалённые слова" */}
                        {/* результат в мини-играх */}
                        {/* индификатор, если слово принадлежит к "Сложные слова" */}
                      </p>
                    )
                  })}
                </span>
              )
            },
            {
              tabButton: "Сложные слова",
              tabContent: (
                <span>
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely
                    deliverables for real-time schemas.
                  </p>
                  <br />
                  <p>
                    Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </span>
              )
            },
            {
              tabButton: "Удалённые слова",
              tabContent: (
                <span>
                  <p>
                    Completely synergize resource taxing relationships
                    via premier niche markets. Professionally cultivate
                    one-to-one customer service with robust ideas.{" "}
                  </p>
                  <br />
                  <p>
                    Dynamically innovate resource-leveling customer
                    service for state of the art customer service.
                  </p>
                </span>
              )
            }
          ]}
        />
      </div>
    </>
  )
}

export default Vocabulary
