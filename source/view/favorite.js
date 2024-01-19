import { useState } from 'react';
import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    TextInput,
    Dimensions,
    Image,
    FlatList,

} from 'react-native';

const movieData = [
    { 
        id: 1, 
        value: 'Reply1988', 
        describtion : 'Reply 1988 (Korean: 응답하라 1988) is a South Korean television series starring Lee Hye-ri, Ryu Jun-yeol, Go Kyung-pyo, Park Bo-gum, and Lee Dong-hwi. Beginning in the year 1988, it revolves around five friends and their families living in the same neighborhood of Ssangmun-dong, Dobong District, Northern Seoul. It aired every Friday and Saturday from November 6, 2015, to January 16, 2016, on tvN for 20 episodes.',
        image: require('../image/reply1988.jpg'),
        
    },

    { 
        id: 2, 
        value: 'Fast and Furious X', 
        image: require('../image/fastx.jpg'),
        describtion : 'Fast X (also known as Fast & Furious 10) is a 2023 American action film directed by Louis Leterrier from a screenplay written by Dan Mazeau and Justin Lin, who also co-wrote the story with Zach Dean. It is the sequel to F9 (2021), the tenth main installment, and the eleventh installment overall in the Fast & Furious franchise.'
    },

    { 
        id: 3, 
        value: 'The End of The Fucking World', 
        image: require('../image/fuckingworld.jpg') ,
        describtion : 'The programme follows James (Alex Lawther), a 17-year-old who believes himself to be a psychopath, and Alyssa (Jessica Barden), an angry classmate who sees in James a chance to escape from her tumultuous home life. Gemma Whelan, Wunmi Mosaku, Steve Oram, Christine Bottomley, Navin Chowdhry, Barry Ward and Naomi Ackie appear in supporting roles.'
    },

    { 
        id: 4, 
        value: 'The Glory', 
        image: require('../image/theglory.jpg') ,
        describtion : 'The Glory (Korean: 더 글로리) is a South Korean streaming television series written by Kim Eun-sook and directed by Ahn Gil-ho for Netflix. Song Hye-kyo, Lee Do-hyun, Lim Ji-yeon, Yeom Hye-ran, Park Sung-hoon, and Jung Sung-il round out the ensemble cast.'
    },

    { 
        id: 5, 
        value: 'La La Land', 
        image: require('../image/lalala.jpg') ,
        describtion : 'La La Land is a 2016 American romantic musical film written and directed by Damien Chazelle. The film stars Ryan Gosling and Emma Stone as a struggling jazz pianist and an aspiring actress, respectively, who meet and fall in love while pursuing their dreams in Los Angeles. John Legend, Rosemarie DeWitt, Finn Wittrock, and J. K. Simmons appear in supporting roles.'
    },

    
]


export default Home = ({navigation}) => {

    const itemView = ({item}) => {
        return (
            <TouchableOpacity style={styles.item} activeOpacity={0.9}>
                <View style={styles.imgContainer}>
                    <Image source={item.image} style={styles.img} />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.textItem}>{item.value}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    
    ItemSeparatorView = () => {
        return (
            <View style={{height:0.5, width:"100%", backgroundColor:'white'}} />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={movieData}
                renderItem={itemView}
                keyExtractor={(item,index) => index.toString() }
                ItemSeparatorComponent={ItemSeparatorView}
            />
        </View>
    );
}


const styles = StyleSheet.create ({
   container : {
    flex:1,
   }

   ,imgContainer: {
    width: '35%',
    height:'100%',
    padding:10,
    // backgroundColor: '#F0EDD4',
    backgroundColor: '#1D1D1A',
    alignItems: 'center',
    justifyContent: 'center'
   }

   ,textContainer : {
    width: 268,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#494943'
   }

   ,img : {
    width: '100%',
    height: '100%',
   }

   ,item : {
    height: 200,
    width: "100%",
    flexDirection: 'row',
   }

   ,textItem : {
    fontSize: 18,
    color: 'white',
    flexWrap: 'wrap',
    fontWeight: '500',
   }
});