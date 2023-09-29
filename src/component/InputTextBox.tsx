import React, { useState } from 'react';
import Button from '@mui/material/Button';
import styled from "styled-components";
import {useTeamDataContext} from "../context/TeamDataProvider";

const InputTextBox = () => {
    const [inputText, setInputText] = useState<string>('');
    const {  setSelectedTeam } = useTeamDataContext();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const handleTeamSelection = (event: React.FormEvent) => {
        event.preventDefault()
        setSelectedTeam(inputText);
        setInputText('');
    }

    return (
        <InputContainer>
            <form onSubmit={handleTeamSelection}>
                <input
                    type="text"
                    placeholder="Enter team name"
                    value={inputText}
                    onChange={handleInputChange}
                />
                <Button
                    type="submit" // This makes the button trigger the form's submit event
                    variant="contained"
                >
                    Submit
                </Button>
            </form>
        </InputContainer>
    );
};

export default InputTextBox;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin: 50px auto;
  padding: 10px;
  background: rgba( 255, 255, 255, 0.1 );
  background-color: #f5f5f5;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  border-radius: 10px;
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 20px );
  -webkit-backdrop-filter: blur( 20px );
  
  form {
    display: flex;
    width: 100%;
  }

  input {
    flex: 1;
    padding: 8px;
    margin-right: 20px;
  }
`;





