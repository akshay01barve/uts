import {StyleSheet, View} from 'react-native';

import React from 'react';
import Shorts from '../components/Shorts';

type Item = {
  id: string;
  url: string;
};

const items: Item[] = [
  {
    id: '001',
    url: "https://www.youtube.com/embed/lkIFF4maKMU?si=fa-BfZQb8rhm5A00",
  },
  {
    id: '002',
    url: 'https://www.youtube.com/embed/zdp0zrpKzIE?si=dRNBDxWdm1RKmXno',
  },
  {
    id: '003',
    url: 'https://www.youtube.com/embed/PdHbBZvPyxI?si=U8JFbK6gPymeCscr',
  },
  {
    id: '004',
    url: 'https://www.youtube.com/embed/Zl4-jPcWtwM?si=qhZdkjbi3wxRLDYU',
  },
  {
    id: '005',
    url: 'https://youtube.com/shorts/-IcYublDy7I',
  },
  {
    id: '006',
    url: 'https://youtube.com/shorts/6a1tmHi6d60',
  },
  {
    id: '007',
    url: 'https://youtube.com/shorts/8Lt1hJnEcq0',
  },
  {
    id: '008',
    url: 'https://youtube.com/shorts/266xNTZN5VI',
  },
  {
    id: '009',
    url: 'https://youtube.com/shorts/xZ48_razkME',
  },
  {
    id: '010',
    url: 'https://www.youtube.com/shorts/FcrdHbrBVgA',
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <Shorts items={items} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
});

export default App;