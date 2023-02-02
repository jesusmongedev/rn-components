import React, {useState} from 'react';
import {RefreshControl, ScrollView} from 'react-native';
import {ScreenHeader} from '../components/ScreenHeader';
import {colors} from '../constants/colors';
import {styles} from '../theme/appTheme';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setData('Hello world!');
      setRefreshing(false);
    }, 3500);
  };

  return (
    <ScrollView
      style={styles.globalContainer}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={20}
          //   progressBackgroundColor={colors.primary}
          colors={[colors.secondary, colors.primary, colors.switch]}
        />
      }>
      <ScreenHeader title="Pull to refresh" />
      {data ? <ScreenHeader title={data} /> : null}
    </ScrollView>
  );
};
