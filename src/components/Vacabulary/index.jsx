import React, {useState, useEffect} from 'react'
import NavPills from '@/components/NavPills/NavPills'
import { List, ListItem, makeStyles, Divider, Box } from "@material-ui/core"
import Pagination from '@material-ui/lab/Pagination'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
// import {getUserWords} from '@/utils/apiRequests/userWords'
import {getAggregatedWords} from '@/utils/apiRequests/aggregatedWords'
import AlignItemsList from '@/components/Vacabulary/WordItem'

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  item: {
    padding: theme.spacing(1.2)
  },
  avatar: {
    marginRight: theme.spacing(5)
  },
  paginator: {
    justifyContent: "center",
    padding: "10px"
  },
  section: {
		margin: theme.spacing(1),
		width: '100%'
	},
}))

function Vocabulary(props) {
  const classes = useStyles()

  const [words, setWords] = useState([])

  useEffect(async () => {
    // const userWords = await getUserWords(props.userAuth.userId, props.userAuth.token)
    const userWords = await getAggregatedWords(
      props.userAuth.userId,
      props.userAuth.token,
      0,
      false,
      60,
      // '{"userWord.difficulty":"easy"}'
      false
    )
    console.log('userWords', userWords[0].paginatedResults)
    setWords(userWords[0].paginatedResults)
    setNoOfPages(Math.ceil(userWords[0].paginatedResults.length / itemsPerPage))
  }, [])

  const itemsPerPage = 20
  const [page, setPage] = useState(1)
  const [noOfPages, setNoOfPages] = useState()

  const [diffWords, setDiffWords] = useState([])
  const [delWords, setDelWords] = useState([])

  const handleChange = (event, value) => {
    setPage(value)
  }

  const handlerChangeSection = async (num) => {
    console.log('handlerChangeSection', num)
    const needWords = await getAggregatedWords(
      props.userAuth.userId,
      props.userAuth.token,
      num,
      false,
      60,
      false
    )
    console.log('needWords', needWords[0].paginatedResults)
    await setWords(needWords[0].paginatedResults)
    await setNoOfPages(Math.ceil(needWords[0].paginatedResults.length / itemsPerPage))
  }


  const handleAddToDiffWords = (word) => {
    console.log('handleAddToDiffWords id', word)
    console.log('diffWords = ', diffWords)
    const diffWordsTmp = diffWords
    diffWordsTmp.push(word)
    console.log('new diffWordsTmp', diffWordsTmp)
    setDiffWords(diffWordsTmp)
  }
  
  // разделы учебника
  const sections = []
	for(let i=0; i<6; i++) {
		sections.push(
			<Grid item xs={4} md={4} lg={4} key={i}>
				{/* <Paper className={classes.paper}>{i+1}</Paper> */}
				<Button variant="contained" size="large" color="primary" className={classes.section} onClick={e => handlerChangeSection(i)}>
					{i+1}
        </Button>
			</Grid>
		)
	}

  const emptyMainWords = words.length === 0 ? <p>тут нет пока слов</p> : null
  const emptyDiffWords = diffWords.length === 0 ? <p>сложные слова не добавлены</p> : null
  const emptyDelWords = delWords.length === 0 ? <p>нет удаленных слов</p> : null

  return(
    <>
      <Grid container spacing={1}>
        {sections}
      </Grid>
      <div className="vocabulary">
        <h3>Словарь</h3>
        <NavPills
          color="primary"
          tabs={[
            {
              tabButton: "Изучаемые слова",
              tabContent: (
                <>
                  {emptyMainWords}
                  <List className={classes.root}>
                      {words.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((word) => {
                        const labelId = `list-secondary-label-${word._id}`
                        return (
                          <AlignItemsList word={word} key={word._id} handleAddToDiffWords={handleAddToDiffWords}/>
                        )
                      })}
                    </List>
                    <Box component="span">
                      <Pagination
                        count={noOfPages}
                        page={page}
                        onChange={handleChange}
                        defaultPage={1}
                        color="primary"
                        size="large"
                        showFirstButton
                        showLastButton
                        classes={{ ul: classes.paginator }}
                        variant="outlined"
                        shape="rounded"
                      />
                    </Box>
                </>
              )
            },
            {
              tabButton: "Сложные слова",
              tabContent: (
                <>
                  <List className={classes.root}>
                    {emptyDiffWords}
                    {diffWords.map((word) => {
                      return (
                        <AlignItemsList word={word} key={word._id}/>
                      )})
                    }
                  </List>
                </>
              )
            },
            {
              tabButton: "Удалённые слова",
              tabContent: (
                <>
                <List className={classes.root}>
                  {emptyDelWords}
                  {delWords.map((word) => {
                    return (
                      <AlignItemsList word={word} key={word._id}/>
                    )})
                  }
                  </List>
                </>
              )
            }
          ]}
        />
      </div>
    </>
  )
}

export default Vocabulary
