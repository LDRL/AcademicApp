import { View, Text } from 'react-native'
import React from 'react'
import { Control, Controller, FieldValues, Path, RegisterOptions } from 'react-hook-form';
import { SelectList } from 'react-native-dropdown-select-list';

interface Option {
  label: string;
  value: number | string;
}

interface FormInputProps<T extends FieldValues> {
  name: Path<T>;
  placeholder: string;
  control: Control<T>;
  rules?: RegisterOptions<T, Path<T>>;
  options: Option[];
}

const FormInputDropdown  = <T extends FieldValues>({name, placeholder, control, rules, options}:FormInputProps<T>) => { 
  return (
     <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const selectedOption = options.find(
          (option) => option.value === value,
        );

        return (
          <View>
            <SelectList
              setSelected={onChange}
              data={options}
              defaultOption={
                selectedOption
                  ? {
                      key: selectedOption.label,
                      value: selectedOption.value,
                    }
                  : undefined
              }
              placeholder={placeholder}
              boxStyles={{
                borderColor: error ? 'red' : '#ccc',
              }}
            />

            {error && (
              <Text style={{ color: 'red' }}>
                {error.message}
              </Text>
            )}
          </View>
        );
      }}
    />
  )
}

export default FormInputDropdown