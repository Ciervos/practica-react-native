import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableHighlight
} from 'react-native';
import colors from '../../constants/colors';


function ItemList({inventory,handleSelected}) {

    const styles = StyleSheet.create({
    
        itemcont: {
          
            paddingLeft: 2,
            paddingRight: 2,
            marginTop: 2,
            width: '90%',
            flexDirection: 'row',
            flexWrap: 'wrap',
          },
          item: {
            
            padding: 2,
            marginTop: 2,
            marginBottom: 2,
            //borderColor: colors.color6,
            //borderWidth: 1,
            width: 110,
          },
          selecteditem:{
            backgroundColor: colors.color6,
          },
          unselecteditem:{
            backgroundColor: colors.color1,
          },
          image:{
           width: 100,
           height: 100,    
          }
    })

   

  return (
    <View style={styles.itemcont}>
    <FlatList
    data={inventory}
    keyExtractor={item => item.id}
    horizontal={true}
    renderItem={({item}) =>(
        <TouchableHighlight  onPress={() => handleSelected(item)}>
            <View style={[styles.item,item.selected? styles.selecteditem : styles.unselecteditem]} key={item.id}>
            <Image
                style={styles.image}
                source={item.image}
                
                /> 
            
            </View>
       </TouchableHighlight>
    )}
    /> 
 
  </View>

  )

  
}



export default ItemList;