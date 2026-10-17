import { Tabs } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { Role, useAuthStore } from '@/presentation/store/auth/useAuthStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from './Loader';

export default function TabLayout() {
  // Hook para obtener el esquema de color
  const colorScheme = useColorScheme();
  const {rol} = useAuthStore()
  
  // Hook para manejar el estado del rol del usuario
  const [userRole, setUserRole] = useState<string | null>(null);

  // Hook de efecto para obtener el rol del usuario al montar el componente
  useEffect(() => {
    const getUserRole = async () => {
      const role = await AsyncStorage.getItem('userRole');
      setUserRole(role);
    };
    getUserRole();
  }, []);

  if(userRole === null)
    return <Loader />

  return (
    <Tabs
      screenOptions={{
      tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      headerShown: false,
    }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
        redirect={userRole !== Role.STUDENT}
      />
    
      <Tabs.Screen
        name="Parents"
        options={{
          title: 'Inicio Padre',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'people' : 'people-outline'} color={color} />
          ),
        }}
        redirect={userRole !== Role.PARENT}
      />
    

      <Tabs.Screen
        name="teacher"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'school' : 'school-outline'} color={color} />
          ),
        }}
        redirect={userRole !== Role.TEACHER}
      />

      {/* Mis clases: estudiante y profesor */}
      <Tabs.Screen
        name="Classes"
        options={{
          title: 'Mis clases',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'book' : 'book-outline'}
              color={color}
            />
          ),
          href:
            userRole === Role.STUDENT || userRole === Role.TEACHER
              ? undefined
              : null,
        }}
      />

      {/* Notas: estudiante y profesor */}
      <Tabs.Screen
        name="Grades"
        options={{
          title: 'Notas',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'document-text' : 'document-text-outline'}
              color={color}
            />
          ),
          href:
            userRole === Role.STUDENT || userRole === Role.TEACHER
              ? undefined
              : null,
        }}
      />

      <Tabs.Screen
        name="Director"
        options={{
          title: 'Inicio Director',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'business' : 'business-outline'} color={color} />
          ),
        }}
        redirect={userRole !== Role.DIRECTOR}
      />

    <Tabs.Screen
        name="Loader"
        options={{
          href:null
        }}
    />

    <Tabs.Screen
      name="Profile"
      options={{
        title: 'Perfil',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Settings"
      options={{
        title: 'Configuración',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'settings' : 'settings-outline'} color={color} />
        ),
      }}
    />
  </Tabs>
  );
}
