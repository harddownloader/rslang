import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function AlignItemsList({word}) {
  const classes = useStyles();

  const hadlerAudio = () => {
    console.log('handlerAudio')
  }

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={'https://rs-lang-app.herokuapp.com/' + word.image} />
        </ListItemAvatar>
        <ListItemText
          primary={word.word + ' [' + word.transcription + '] ' + word.wordTranslate}
          secondary={
            <React.Fragment>
              <IconButton edge="end" aria-label="audio" onClick={e => hadlerAudio()}>
                <AudiotrackIcon />
              </IconButton>
              
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {word.textExample}
              </Typography>
              {word.textExampleTranslate}
            </React.Fragment>
          }
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
