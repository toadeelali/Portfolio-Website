import React, {useState, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import styles from './Header.module.css';
import {HeaderData} from './HeaderData';
import * as actions from './redux/HeaderActions';
import Personality from 'shared/components/personality/Personality';
import {HeaderEnum} from './models/HeaderEnum';

const Header = () => {
  const headerData = HeaderData();
  const dispatch = useDispatch();
  const [stateRef, setStateRef]: any = useState({count: 0, active: '', launched: false});
  const languageState = useSelector((state: any) => state.language);
  const personalityState = useSelector((state: any) => state.personality);

  const onClickPicture = useCallback(() => {
    setStateRef({active: 'active', count: stateRef.count})

    setTimeout(() => {
      setStateRef({active: undefined, count: stateRef.count < headerData.length - 1 ? stateRef.count + 1 : 0})
    }, HeaderEnum.animationDelay)
  }, [stateRef.count, headerData]);

  const togglePersonality = useCallback(
    (personality: any) => {
      dispatch(actions.setPersonality(personality))
      document.body.className = document.body.className.replace(/primary-color-\w+/g, '')
      document.body.classList.add(`primary-color-${personality.color}`)
    },
    [dispatch]
  );

  useEffect(() => {
    if (!stateRef.launched) {
      dispatch(actions.getPersonality());
      togglePersonality({...headerData[stateRef.count]});
      setStateRef({...stateRef, launched: true});
    }
  }, [stateRef, languageState, dispatch, togglePersonality, headerData]);

  return (
    <section className={`section ${styles['section-header']}`}>
      <div className="section-content">
        <header className={styles.header}>
          <div className={styles['header-picture']}>
            <span className={styles['picture-hint']}>Click me!</span>
            <Personality
              active={stateRef.active}
              events={{
                onClick: onClickPicture
              }}
              image={{
                src: personalityState?.data?.picture,
                alt: 'Adeel Ali'
              }}
            />
          </div>

          <h1 className={styles.heading}>
            <div className={styles.greeting}>Hi, my name is</div>
            <div className={styles.name}>Adeel Ali</div>
            <div className={styles.position}>{personalityState?.data?.position}</div>
          </h1>
        </header>

        <div className={styles['bio-wrapper']}>
          <p className={styles['punch-line']}>{personalityState?.data?.tagLine}</p>
          <p className={styles.bio}>
            <span dangerouslySetInnerHTML={{__html: personalityState?.data?.description}} />
            <strong>
              <em className={styles['personality-bio']}> {personalityState?.data?.bio}</em>
            </strong>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Header;
