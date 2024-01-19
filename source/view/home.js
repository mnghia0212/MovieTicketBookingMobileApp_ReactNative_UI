import { useState } from 'react';
import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
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

    { 
        id: 6, 
        value: 'Prison Break', 
        image: require('../image/prisonbreak.jpg') ,
        describtion : 'Prison Break is an American serial drama television series created by Paul Scheuring for Fox. The series revolves around two brothers, Lincoln Burrows (Dominic Purcell) and Michael Scofield (Wentworth Miller); Burrows has been sentenced to death for a crime he did not commit, while Scofield devises an elaborate plan to help his brother escape prison and clear his name. '
    },

    { 
        id: 7, 
        value: 'Money Heist', 
        image: require('../image/moneyheist.jpg') ,
        describtion : 'Money Heist (Spanish: La casa de papel) is a Spanish heist crime drama television series created by Álex Pina. The series traces two long-prepared heists led by the Professor (Álvaro Morte), one on the Royal Mint of Spain, and one on the Bank of Spain, told from the perspective of one of the robbers, Tokyo (Úrsula Corberó). '
    },

    { 
        id: 8, 
        value: 'Stranger Things', 
        image: require('../image/stranger.jpg') ,
        describtion : 'Stranger Things is an American science fiction horror drama television series created by the Duffer Brothers, who also serve as showrunners and are executive producers along with Shawn Levy and Dan Cohen. Produced by Monkey Massacre Productions and Levys 21 Laps Entertainment, the first season was released on Netflix on July 15, 2016. '
    },

    { 
        id: 9, 
        value: 'Peaky Blinders', 
        image: require('../image/peaky.jpg') ,
        describtion : 'Peaky Blinders is a British period crime drama television series created by Steven Knight. Set in Birmingham, it follows the exploits of the Peaky Blinders crime gang in the direct aftermath of the First World War. The fictional gang is loosely based on a real urban youth gang of the same name who were active in the city from the 1880s to the 1910s.'
    },
    
    { 
        id: 10, 
        value: 'Breaking Bad', 
        image: require('../image/bd.jpg') ,
        describtion : 'Breaking Bad is an American crime drama television series created and produced by Vince Gilligan for AMC. Set and filmed in Albuquerque, New Mexico, the series follows Walter White (Bryan Cranston), an underpaid, overqualified, and dispirited high-school chemistry teacher who is struggling with a recent diagnosis of stage-three lung cancer. '
    },
]


export default Home = ({navigation}) => {

    const [value, setValue] = useState(" ");
    const [image, setImage] = useState(" ");
    const [describtion, setDescribtion] = useState(" ");

    const itemView = ({item}) => {
        return (
            <TouchableOpacity style={styles.item} 
                activeOpacity={0.9}
                onPress={() => {
                    navigation.navigate('Detail',{
                        value: item.value,
                        image: item.image,
                        describtion: item.describtion,
                    })
                }}
            >
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