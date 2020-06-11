import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import AppRoutes from './src/Routes/App/AppRoute';

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle='light-content'
        translucent={true}
        backgroundColor={'#363A44'}
      />
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <AppRoutes />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
