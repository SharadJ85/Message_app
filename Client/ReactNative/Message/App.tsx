import React from 'react';
import GlobalStyles from './src/Global/Styles/GlobalStyles';
import AppRoutes from './src/Routes/App/AppRoute';
import {SafeAreaView, View, StatusBar} from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle='light-content'
        translucent={true}
        backgroundColor={GlobalStyles.statusBar.backgroundColor}
      />
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, marginTop: StatusBar.currentHeight}}>
          <AppRoutes />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
