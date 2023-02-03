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
            keyExtractor={ (item, index) => item + index }
            ListHeaderComponent={() => <ScreenHeader title="Section List Screen" />}
            ListFooterComponent={() => <ScreenHeader title='Footer' />}

            renderSectionHeader={({section: {casa}}) => (
              <View style={{ backgroundColor: 'white' }}>
                <ScreenHeader title={casa} />
              </View>
            )}
            renderItem={({ item }) => <Text>{item}</Text>}
            renderSectionFooter={({section: {casa}}) => (
              <ScreenHeader title={`Total: ${casa.length}`} />
            )}

            stickySectionHeadersEnabled
          />
    </View>
  );
};
