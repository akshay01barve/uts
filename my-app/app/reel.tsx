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
    url: 'https://www.youtube.com/embed/Bi2A180vAVQ?si=ZUQxicTnq_YHoUM4',
  },
  {
    id: '006',
    url: 'https://www.youtube.com/embed/1oU_YGhT7ck?si=xfA2EUC1sJxy6Kvj',
  },
  {
    id: '007',
    url: 'https://www.youtube.com/embed/dOkkHHuFxjM?si=KFCWpEhlnWxMGkfA',
  },
  {
    id: '008',
    url: 'https://www.youtube.com/embed/pBgQhZcQxMw?si=B_sez1_m5EEBYv2o',
  },
  {
    id: '009',
    url: 'https://www.youtube.com/embed/2JBx_06dD1k?si=YR1zWznpmtQV3qwW',
  },
  {
    id: '010',
    url: 'https://www.youtube.com/embed/xrj3zzaqODw?si=T_Ctb5wklsHg5Qvm',
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