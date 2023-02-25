import React, {useState} from 'react';
import {
  TextInput,
  View,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {styles} from '../Input/styles';
import EyeIcon from '../../assets/eye.png';
import EyeIconClose from '../../assets/eye_closed.png';
import Arrow from '../../assets/Frame.png';

const Input = ({
  lable,
  type,
  options,
  placeholder,
  isPassword,
  value,
  onChangeText,
  style,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [pickerModalVisible, setPickerModalVisible] = useState(false);
  const toggleEyeIcon = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const onSelect = opt => {
    onChangeText(opt);
    setPickerModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.lable}>{lable}</Text>
      {type === 'picker' ? (
        <Pressable
          onPress={() => setPickerModalVisible(true)}
          style={styles.input_container}>
          {value ? (
            <Text style={[styles.input, style]}>{value?.title}</Text>
          ) : (
            <Text style={[styles.placeholder, style]}>{placeholder}</Text>
          )}
          <Image style={styles.arrow} source={Arrow} />
        </Pressable>
      ) : (
        <View style={styles.input_container}>
          <TextInput
            style={[styles.input, style]}
            onChangeText={onChangeText}
            secureTextEntry={isPassword && !isPasswordVisible}
            placeholder={placeholder}
            placeholderTextColor="black"
            {...props}
          />
          {isPassword ? (
            <Pressable onPress={toggleEyeIcon}>
              <Image
                style={styles.eyeIcon}
                source={isPasswordVisible ? EyeIcon : EyeIconClose}
              />
            </Pressable>
          ) : null}
        </View>
      )}
      <Modal transparent visible={pickerModalVisible}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setPickerModalVisible(false)}
          style={styles.modalWrapper}>
          <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
            <Text style={styles.headerTitle}>Select options</Text>

            {options?.map(opt => {
              if (!opt?.id) {
                return null;
              }
              const selected = value?.id === opt?.id;

              return (
                <Text
                  onPress={() => onSelect(opt)}
                  style={[
                    styles.optionText,
                    selected ? styles.selectedOption : {},
                  ]}
                  key={opt?.title}>
                  {opt?.title}
                </Text>
              );
            })}
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default React.memo(Input);
