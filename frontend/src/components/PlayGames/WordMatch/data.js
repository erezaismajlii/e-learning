import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PlayIcon from '@material-ui/icons/PlayCircleFilledWhite';
import gameApi from 'apis/gameApi';
import GlobalLoading from 'components/UI/GlobalLoading';
import InputCustom from 'components/UI/InputCustom';
import WordPack from 'components/UI/WordPack';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setMessage } from 'redux/actions/messageAction';
import WordMatchGame from '.';
const MAX_LEN_WORD_PACK = 500;

function WordMatchGameData() {
  // 0 - choose word pack, 1 - get pack, 2 - done
  const [state, setState] = useState(0);
  const [wordPack, setWordPack] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const nQuestion = useRef(20);

  const getWordPackage = async ({ type, topics, level, specialty }) => {
    try {
      setState(1);
      const n =
        nQuestion.current < 0 || nQuestion.current > MAX_LEN_WORD_PACK
          ? 100
          : nQuestion.current;

      const apiRes = await gameApi.getWordPackWordMatch(
        type,
        level,
        specialty,
        topics,
        n,
      );
      if (apiRes.status === 200) {
        const { wordPack = [] } = apiRes.data;
        if (wordPack.length === 0) {
          dispatch(
            setMessage('Sorry, the current vocabulary pack is not enough. Please try again', 'warning'));
          setState(0);
          return;
        }

        console.log(wordPack)
        setWordPack(wordPack);
        setState(2);
        return;
      }

      dispatch(
        setMessage('Get the vocabulary pack failed, try again!','warning'));
      setState(0);
    } catch (error) {
      const message =
        error.response?.data?.message || 'Get the vocabulary pack failed, try again!';
      dispatch(setMessage(message,'error'));
      setState(0);
    }
  };

  return (
    <>
      {state === 0 ? (
        <WordPack
          open={true}
          onChoose={getWordPackage}
          onCancel={() => history.goBack()}
          topicMultiples={true}
          title="Choose from a vocabulary pack"
          okBtnText="Begin"
          cancelBtnText="Come back"
          cancelBtnProps={{ startIcon: <ArrowBackIcon /> }}
          okBtnProps={{ startIcon: <PlayIcon /> }}>
          <InputCustom
            type="number"
            inputProps={{
              min: 5,
              max: MAX_LEN_WORD_PACK,
              defaultValue: 20,
            }}
            placeholder="Enter the number of sentences"
            label="Number of sentences"
            className="w-100"
            onChange={(e) => (nQuestion.current = e.target.value)}
          />
        </WordPack>
      ) : state === 1 ? (
        <GlobalLoading title="Loading question pack..." />
      ) : (
        <WordMatchGame list={wordPack} />
      )}
    </>
  );
}

export default WordMatchGameData;
