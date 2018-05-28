import { StackActions, NavigationActions } from 'react-navigation'

export function navigateToDeckDetail = (item, navigation) => {
  const { navigate, dispatch } = navigation;
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Home' })],
  });

  dispatch(resetAction);
  navigate('DeckDetail', { item });
};