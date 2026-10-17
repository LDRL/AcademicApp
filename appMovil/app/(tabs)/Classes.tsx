import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Role, useAuthStore } from '@/presentation/store/auth/useAuthStore'
import MyClassesScreen from '@/components/teacher/TeacherClassesScreen';

import { router } from 'expo-router';
import TeacherClassesScreen from '@/components/teacher/TeacherClassesScreen';


const Classes = () => {
    const { rol  } = useAuthStore();

    const handleBack = () => {
        if (rol === Role.TEACHER) {
            router.replace('/(tabs)/teacher');
        } else if (rol === Role.STUDENT) {
            router.replace('/(tabs)');
        }
    };

    const [currentScreen, setCurrentScreen] = useState('Home');

    //Para profesor
    if (rol === Role.TEACHER) {
        return (
            <TeacherClassesScreen
                onBack={handleBack}
            />
        );
    }

    
  
}

export default Classes