import React from 'react';
import PropTypes from 'prop-types';
import { FormFieldWrapper, Label, Input } from './style';

function FormField({
  label, type, name, value, onChange, suggestions,
}) {
  const fieldId = `id_${name}`;
  const isTypeTextArea = type === 'textarea';
  const tag = isTypeTextArea ? 'textarea' : 'input';
  const hasSuggestions = Boolean(suggestions.length);

  return (
    <FormFieldWrapper>
      <Label>
        <Input
          as={tag}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          id={fieldId}
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
        {hasSuggestions && (
        <datalist id={`suggestionFor_${fieldId}_${value}`}>
          {
            suggestions.map((suggestion, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <option key={`suggestionFor_${index}_${fieldId}_option`} value={suggestion}>
                {suggestion}
              </option>
            ))
          }
        </datalist>
        )}
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
