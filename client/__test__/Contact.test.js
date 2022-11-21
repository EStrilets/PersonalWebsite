import { render, fireEvent } from '@testing-library/react';
import ContactForm from '../components/contactForm/ContactForm';

const USER_NAME = 'user';
const USER_EMAIL = 'user@test.com';
const USER_MSG = 'test-password';

//TODO

describe('<Contact />', () => {
    const typeText = (input, text) => {
      fireEvent.change(input, {
        target: {
          value: text,
        },
      });
    };

    it('Display success message when sending contact msg', async() => { 
        const {  findByTestId, findByDisplayValue, findAllByText } = render(<ContactForm />)

        const usernameInput = await findByTestId('username-input');
        typeText(usernameInput, USER_NAME);
        await findByDisplayValue(USER_NAME);
    
        const emailInput = await findByTestId('email-input');
        typeText(emailInput, USER_EMAIL);
        await findByDisplayValue(USER_EMAIL);
    
        const passwordInput = await findByTestId('msg-input');
        typeText(passwordInput, USER_MSG);
        await findByDisplayValue(USER_MSG);
    })
})