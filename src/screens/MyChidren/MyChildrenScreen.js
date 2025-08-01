import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import MyChildrenCard from './../../components/Cards/MyChildrenCard';
import useAuth from './../../auth/useAuth';
import apiClient from './../../api/client';

const MyChildrenScreen = () => {
  const { user } = useAuth();
  const [myChildrens, setMyChildrens] = useState([
    {
      id: '1',
      name: 'Ayaan Khan',
      age: 6,
      gender: 'Male',
    },
  ]);

  useEffect(() => {
    const getMyChildrens = async () => {
      const response = await apiClient.get('/parents/get-student-by-parents', {
        parentId: user.id,
      });

      if (response.ok) {
        setMyChildrens(response.data.students);
      }
    };

    getMyChildrens();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Children</Text>
      <FlatList
        data={myChildrens}
        keyExtractor={item => item.id}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item }) => <MyChildrenCard child={item} />}
      />
    </View>
  );
};

export default MyChildrenScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F6F7',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#00204D',
  },
});
