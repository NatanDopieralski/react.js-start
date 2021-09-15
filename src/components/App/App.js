import React from 'react';
import styles from './App.scss';
import {pageContents, listData} from '../../data/dataStore';
import List from '../List/List';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List {...listData} />
        {/* <List title={['Things to do ', <sup key='1'>soon!</sup>]} img={"http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"} >
          <p>Interesting things I want to check out!</p>
        </List> */}
      </main>
    )
  }
}

export default App;
