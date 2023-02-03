import React from 'react';
import {SectionList, Text, View} from 'react-native';
import {ScreenHeader} from '../components/ScreenHeader';
import {casas} from '../data/sectionList';
import {styles} from '../theme/appTheme';

{
  /* <ScreenHeader title="Section List Screen" /> */
}
export const SectionListScreen = () => {
  return (
    <View style={{flex: 1, ...styles.globalContainer}}>
      <SectionList
        sections={casas}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({section: {casa}}) => (
          <ScreenHeader title={casa} />
        )}
        renderItem={({section: {data}}) => <Text>{data}</Text>}
      />
    </View>
  );
};
