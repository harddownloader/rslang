import React, {useState, useEffect} from 'react';
import NavPills from '@/components/NavPills/NavPills'
import { List, ListItem, makeStyles, Divider, Box } from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';
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
  avatar: { marginRight: theme.spacing(5) },
  paginator: {
    justifyContent: "center",
    padding: "10px"
  }
}));

function Vocabulary(props) {
  const classes = useStyles();


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
    setNoOfPages(Math.ceil(userWords[0].paginatedResults.length / itemsPerPage))
  }, [])

  const itemsPerPage = 10;
  const [page, setPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState(
    // Math.ceil(words.length / itemsPerPage)
  );

  const handleChange = (event, value) => {
    setPage(value);
  };

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
                <>
                  <List className={classes.root}>
                      {/* {wordItem} */}
                      
                      {words.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((word) => {
                        const labelId = `list-secondary-label-${word._id}`;
                        return (
                          <AlignItemsList word={word} key={word._id} />
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
                <span>
                  <p>
                     тут нет пока слов
                  </p>
                </span>
              )
            },
            {
              tabButton: "Удалённые слова",
              tabContent: (
                <span>
                  <p>
                    тут нет пока слов
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
