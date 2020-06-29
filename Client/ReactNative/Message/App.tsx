import React from 'react';
import GlobalStyles from './src/Global/Styles/GlobalStyles';
import AppRoutes from './src/Routes/App/AppRoute';
import {SafeAreaView, View, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import myStore from './src/Redux/store';

const App: React.FC = () => {
  return (
    <>
      <Provider store={myStore}>
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
      </Provider>
    </>
  );
};

export default App;
