import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: { marginLeft: 15, fontSize: 18, color: '#372052' },
  categories: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    marginHorizontal: 15,
  },
  category: {
    borderRadius: 100,
    width: 110,
    height: 110,
    backgroundColor: '#886aad57',
  },
  image: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 100,
    height: 100,
  },
});
export default styles;
