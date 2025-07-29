import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Banner1 from '../../assets/Images/Banners/BannerImage.png';
import Banner2 from '../../assets/Images/Banners/BannerImage.png';
import Banner3 from '../../assets/Images/Banners/BannerImage.png';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.85;
const SPACER_WIDTH = (width - ITEM_WIDTH) / 2;

const images = [Banner1, Banner2, Banner3];

const HomeBanner = () => {
  const scrollRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollX(prev => {
        const next = (prev + 1) % images.length;
        scrollRef.current?.scrollTo({
          x: next * ITEM_WIDTH,
          animated: true,
        });
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled={false}
        scrollEnabled={false}
        ref={scrollRef}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: SPACER_WIDTH }}
      >
        {images.map((img, index) => (
          <View key={index} style={styles.bannerWrapper}>
            <Image source={img} style={styles.bannerImage} resizeMode="cover" />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeBanner;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 128,
    marginVertical: 8,
  },
  bannerWrapper: {
    width: ITEM_WIDTH,
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 10,
    backgroundColor: '#fff',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
});
