import React from 'react';
import {SectionList, Text, View} from 'react-native';
import { ItemSeparator } from '../components/ItemSeparator';
import {ScreenHeader} from '../components/ScreenHeader';
import {casas} from '../data/sectionList';
import {styles} from '../theme/appTheme';


{/* Total de data en cada seccion */}
const totalCasa = casas.map((casa) => casa.data.length).reduce((a, b) => a + b);

export const SectionListScreen = () => {
  return (
    <View style={{flex: 1, ...styles.globalContainer}}>

      
          <SectionList
            sections={casas}
            keyExtractor={ (item, index) => item + index }
            ListHeaderComponent={() => <ScreenHeader title="Section List Screen" />}
            ListFooterComponent={() => <ScreenHeader title={`Total Characters: ${totalCasa}`} />}

            renderSectionHeader={({section: {casa}}) => (
              <View style={{ backgroundColor: 'white' }}>
                <ScreenHeader title={casa} />
              </View>
            )}
            renderItem={({ item }) => <Text>{item}</Text>}
            renderSectionFooter={({section: { data }}) => (
              <ScreenHeader title={`Characters: ${data.length}`} />
            )}

            ItemSeparatorComponent={() => <ItemSeparator />}

            stickySectionHeadersEnabled
          />
    </View>
  );
};
