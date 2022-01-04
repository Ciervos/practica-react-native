import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Image,Button} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

export function resetItems() {
    const dispatch = useDispatch();
    const ourItems = useSelector(state => state.items.items);
    
    console.log(ourItems)
} 